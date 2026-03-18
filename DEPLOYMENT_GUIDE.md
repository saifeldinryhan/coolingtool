# دليل النشر على GitHub Pages | Deployment Guide

## 📋 المحتويات
1. [التحضير الأولي](#التحضير-الأولي)
2. [خطوات النشر](#خطوات-النشر)
3. [التكوين المتقدم](#التكوين-المتقدم)
4. [استكشاف الأخطاء](#استكشاف-الأخطاء)

---

## التحضير الأولي

### المتطلبات
- حساب GitHub (مجاني)
- Git مثبت على جهازك
- محرر نصوص (VS Code, Sublime, إلخ)

### ملفات المشروع المضمنة
```
cooltools-github-ready.zip
├── index.html              # الصفحة الرئيسية
├── css/
│   └── basic.css          # الأنماط
├── js/
│   └── basic.js           # منطق التطبيق
├── proxy.php              # خادم وسيط (اختياري)
├── .nojekyll              # تعطيل Jekyll
├── .gitignore             # استبعاد الملفات
├── .env.example           # مثال على متغيرات البيئة
└── README.md              # التوثيق
```

---

## خطوات النشر

### الخطوة 1: إنشاء مستودع GitHub جديد

1. اذهب إلى [github.com](https://github.com)
2. انقر على **+** في الزاوية العلوية اليسرى
3. اختر **New repository**
4. أدخل اسم المستودع: `cooltools-github` (أو أي اسم تفضله)
5. اختر **Public** (لتفعيل GitHub Pages)
6. انقر **Create repository**

### الخطوة 2: استخراج الملفات

```bash
# استخرج الملفات من الملف المضغوط
unzip cooltools-github-ready.zip

# انتقل إلى مجلد المشروع
cd cooltools-github
```

### الخطوة 3: تهيئة Git

```bash
# تهيئة مستودع Git محلي
git init

# إضافة جميع الملفات
git add .

# إنشاء أول commit
git commit -m "Initial commit: Cooling Tools Pro with AI Search"

# إضافة المستودع البعيد (استبدل USERNAME و REPO)
git remote add origin https://github.com/USERNAME/cooltools-github.git

# دفع الملفات إلى GitHub
git branch -M main
git push -u origin main
```

### الخطوة 4: تفعيل GitHub Pages

1. اذهب إلى مستودعك على GitHub
2. انقر على **Settings** (الإعدادات)
3. اختر **Pages** من القائمة الجانبية
4. تحت **Build and deployment**:
   - اختر **Deploy from a branch**
   - حدد الفرع: `main`
   - حدد المجلد: `/ (root)`
5. انقر **Save**

### الخطوة 5: الانتظار والتحقق

- انتظر 1-2 دقيقة حتى يتم نشر الموقع
- ستظهر رسالة: "Your site is published at https://USERNAME.github.io/cooltools-github"
- افتح الرابط في المتصفح للتحقق

---

## التكوين المتقدم

### تفعيل البحث بالذكاء الاصطناعي

إذا كنت تريد استخدام ميزات البحث المتقدمة:

#### الخيار 1: استخدام Vercel (موصى به)

Vercel يدعم ملفات PHP والمتغيرات البيئية:

1. اذهب إلى [vercel.com](https://vercel.com)
2. انقر **Import Project**
3. اختر مستودعك من GitHub
4. في **Environment Variables**، أضف:
   ```
   GEMINI_API_KEY=your_key
   OPENAI_API_KEY=your_key
   ```
5. انقر **Deploy**

#### الخيار 2: استخدام Netlify Functions

1. اذهب إلى [netlify.com](https://netlify.com)
2. انقر **New site from Git**
3. اختر مستودعك
4. أضف متغيرات البيئة في **Site settings**
5. انشر الموقع

#### الخيار 3: خادم محلي (للتطوير)

```bash
# استخدام PHP
php -S localhost:8080

# أو Python
python3 -m http.server 8080

# ثم افتح http://localhost:8080
```

### الحصول على مفاتيح API

**Google Gemini:**
- اذهب إلى [makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
- انقر **Create API Key**
- انسخ المفتاح

**OpenAI:**
- اذهب إلى [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
- انقر **Create new secret key**
- انسخ المفتاح

**Grok (X.AI):**
- اذهب إلى [console.x.ai](https://console.x.ai/)
- أنشئ مفتاح API
- انسخ المفتاح

---

## استكشاف الأخطاء

### المشكلة: الموقع لا يظهر

**الحل:**
1. تأكد من أن المستودع عام (Public)
2. تحقق من أن الملف الرئيسي هو `index.html`
3. انتظر 5 دقائق وحاول مرة أخرى
4. افتح **Actions** في GitHub للتحقق من حالة النشر

### المشكلة: الأنماط والصور لا تظهر

**الحل:**
1. تأكد من أن المسارات نسبية (relative paths)
2. تحقق من أن جميع الملفات موجودة في المستودع
3. امسح ذاكرة التخزين المؤقت: `Ctrl+Shift+Delete`

### المشكلة: البحث بالذكاء الاصطناعي لا يعمل

**الحل:**
1. تأكد من أن مفاتيح API صحيحة
2. تحقق من أن proxy.php موجود
3. استخدم خادم محلي بدلاً من GitHub Pages
4. افتح Developer Console (`F12`) لرؤية الأخطاء

### المشكلة: خطأ CORS

**الحل:**
1. استخدم خادم محلي
2. أضف نطاقك إلى قائمة `allowedOrigins` في `proxy.php`
3. استخدم خدمة proxy خارجية

---

## نصائح مهمة

### 🔐 الأمان
- **لا تنشر مفاتيح API** في المستودع العام
- استخدم `.env.example` كمثال فقط
- استخدم GitHub Secrets للمتغيرات الحساسة

### ⚡ الأداء
- استخدم CDN للملفات الثقيلة
- ضغط الصور والملفات
- استخدم caching للبيانات المتكررة

### 📱 التوافق
- اختبر على أجهزة مختلفة
- استخدم أدوات DevTools للتحقق
- تأكد من دعم المتصفحات القديمة

---

## روابط مفيدة

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

---

## الدعم

إذا واجهت مشاكل:
1. تحقق من الأخطاء في Browser Console (`F12`)
2. اقرأ ملف README.md
3. افتح issue على GitHub
4. اطلب المساعدة من المجتمع

---

**آخر تحديث**: مارس 2026
**الإصدار**: 2.0
