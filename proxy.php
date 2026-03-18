<?php
/**
 * Secure AI Proxy v2.0
 * يدعم: Gemini - OpenAI - Grok - DeepSeek
 */

ini_set('display_errors',0);
ini_set('log_errors',1);
ini_set('error_log',__DIR__.'/proxy_error.log');

header("Content-Type: application/json; charset=UTF-8");

/* ================= CORS ================= */

$allowedOrigins = [
    "https://yourdomain.com",
    "http://192.168.43.26:8080"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if(in_array($origin,$allowedOrigins)){
    header("Access-Control-Allow-Origin: $origin");
}

header("Access-Control-Allow-Methods: POST,GET,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if($_SERVER['REQUEST_METHOD']==='OPTIONS'){
    exit;
}

/* ================= تحميل ENV ================= */

function loadEnv($path){

    if(!file_exists($path)) return;

    $lines=file($path,FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach($lines as $line){

        if(strpos(trim($line),'#')===0) continue;

        list($name,$value)=explode('=',$line,2);

        $name=trim($name);
        $value=trim($value);

        $_ENV[$name]=$value;
        $_SERVER[$name]=$value;

        putenv("$name=$value");
    }
}

loadEnv(__DIR__.'/.env');

/* ================= API KEYS ================= */

$API_KEYS=[
    "gemini"=>$_ENV['GEMINI_API_KEY'] ?? null,
    "openai"=>$_ENV['OPENAI_API_KEY'] ?? null,
    "grok"=>$_ENV['GROK_API_KEY'] ?? null,
    "deepseek"=>$_ENV['DEEPSEEK_API_KEY'] ?? null
];

/* ================= موديلات الذكاء ================= */

$MODELS=[

    "gemini"=>[
    "model"=>"gemini-3-flash",
    "url"=>"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
], 


    "openai"=>[
        "model"=>"gpt-4o-mini",
        "url"=>"https://api.openai.com/v1/chat/completions"
    ],

    "grok"=>[
        "model"=>"grok-2-latest",
        "url"=>"https://api.x.ai/v1/chat/completions"
    ],

    "deepseek"=>[
        "model"=>"deepseek-chat",
        "url"=>"https://api.deepseek.com/v1/chat/completions"
    ]
];

/* ================= حماية الاستخدام ================= */

$CLIENT_KEY="123456"; 

$key=$_GET['key'] ?? '';

if($key!==$CLIENT_KEY){

    echo json_encode([
        "success"=>false,
        "error"=>"Unauthorized"
    ]);

    exit;
}

/* ================= قراءة الطلب ================= */

$input=json_decode(file_get_contents("php://input"),true) ?? [];

$provider=strtolower($_GET['provider'] ?? $input['provider'] ?? "gemini");

$prompt=$_GET['prompt'] ?? $input['prompt'] ?? '';

if(!$prompt){

    echo json_encode([
        "status"=>"ready",
        "providers"=>array_keys($API_KEYS)
    ]);

    exit;
}

/* ================= CURL ================= */

function requestAI($url,$data,$headers=[]){

    $ch=curl_init();

    $baseHeaders=["Content-Type: application/json"];

    foreach($headers as $k=>$v){
        $baseHeaders[]="$k: $v";
    }

    curl_setopt_array($ch,[

        CURLOPT_URL=>$url,
        CURLOPT_RETURNTRANSFER=>true,
        CURLOPT_POST=>true,
        CURLOPT_POSTFIELDS=>json_encode($data),
        CURLOPT_HTTPHEADER=>$baseHeaders,
        CURLOPT_TIMEOUT=>60,
        CURLOPT_SSL_VERIFYPEER=>true,
        CURLOPT_SSL_VERIFYHOST=>2
    ]);

    $response=curl_exec($ch);

    if(curl_errno($ch)){
        throw new Exception(curl_error($ch));
    }

    curl_close($ch);

    $json=json_decode($response,true);

    if(!$json){
        throw new Exception("Invalid JSON response");
    }

    return $json;
}

/* ================= تنفيذ الطلب ================= */

try{

if(!$API_KEYS[$provider]){

    throw new Exception("API Key missing for $provider");
}

switch($provider){

case "gemini":

$url=$MODELS["gemini"]["url"]
    .$MODELS["gemini"]["model"]
    .":generateContent?key=".$API_KEYS["gemini"];

$data=[
"contents"=>[
[
"parts"=>[
["text"=>$prompt]
]
]
]
];

$res=requestAI($url,$data);

$text=$res["candidates"][0]["content"]["parts"][0]["text"] ?? "";

break;

/* ---------- OpenAI ---------- */

case "openai":

$data=[

"model"=>$MODELS["openai"]["model"],

"messages"=>[
[
"role"=>"user",
"content"=>$prompt
]
]
];

$res=requestAI(

$MODELS["openai"]["url"],
$data,
["Authorization"=>"Bearer ".$API_KEYS["openai"]]

);

$text=$res["choices"][0]["message"]["content"] ?? "";

break;

/* ---------- Grok ---------- */

case "grok":

$data=[

"model"=>$MODELS["grok"]["model"],

"messages"=>[
[
"role"=>"user",
"content"=>$prompt
]
]
];

$res=requestAI(

$MODELS["grok"]["url"],
$data,
["Authorization"=>"Bearer ".$API_KEYS["grok"]]

);

$text=$res["choices"][0]["message"]["content"] ?? "";

break;

/* ---------- DeepSeek ---------- */

case "deepseek":

$data=[

"model"=>$MODELS["deepseek"]["model"],

"messages"=>[
[
"role"=>"user",
"content"=>$prompt
]
]
];

$res=requestAI(

$MODELS["deepseek"]["url"],
$data,
["Authorization"=>"Bearer ".$API_KEYS["deepseek"]]

);

$text=$res["choices"][0]["message"]["content"] ?? "";

break;

default:

throw new Exception("Provider not supported");

}

/* ================= النتيجة ================= */

echo json_encode([

"success"=>true,
"provider"=>$provider,
"response"=>$text

],JSON_UNESCAPED_UNICODE);

}

catch(Exception $e){

error_log($e->getMessage());

echo json_encode([

"success"=>false,
"error"=>$e->getMessage()

]);

}