const translations = {
    ar: {
        headerTitle: "Cooling Tools Pro",
        menuTitle: "القائمة",
        nightMode: "ليلي",
        dayMode: "نهاري",
        connections: "التوصيلات",
        wireCalc: "حساب قطر السلك",
        flowCalc: "حساب التدفق من الإزاحة",
        conversions: "التحويلات",
        coolingUnits: "وحدات التبريد",
        lengthUnits: "وحدات الطول",
        massUnits: "وحدات الكتلة",
        areaUnits: "وحدات المساحة",
        pressureUnits: "وحدات الضغط",
        volumeUnits: "وحدات الحجم",
        tempUnits: "وحدات الحرارة",
        voltUnits: "وحدات الفولت",
        ampUnits: "وحدات الأمبير",
        wattUnits: "وحدات الواط",
        faradUnits: "وحدات السعة",
        henryUnits: "وحدات الهنري",
        tabTemp: "الحرارة",
        tabElec: "الكهرباء",
        tabRoom: "الغرف",
        tabComp: "معلومات الضاغط ",
        sensorCalc: " حساب الحساس (NTC)",
        tempModeRT: " °C الى حرارة Ω من مقاومة",
        tempModeTR: "Ω الى مقاومة °C من حرارة",
        sensor10k: "10KΩ حساس (الغرفة و الملف الداخلى)",
        sensor5k: "5KΩ حساس (الملف الخارجى)",
        sensor200k: "200KΩ حساس (طرد الضاغط)",
        sensorCustom: "مخصص (Custom)",
        r0: "R0",
        beta: "Beta",
        calcBtn: "احسب النتيجة",
        elecCalc: " الحسابات الكهربائية",
        elecLaws: "قوانين كهربائية",
        elecCap: "المكثف (µF)",
        elecAmp: "أمبير المكثف (Ampere)",
        elecPow: "القدرة (Watts)",
        roomCalc: " حساب التكييف",
        length: "الطول",
        width: "العرض",
        height: "الارتفاع",
        roomNormal: "غرفة عادية (250)",
        roomSunny: "غرفة مشمسة (300)",
        roomKitchen: "مطبخ / واجهة زجاج (350)",
        roomHighLoad: "حمل حراري عالي جدا (400)",
        calcCapacity: "احسب القدرة المطلوبة",
        actualHp: "الحصان الفعلي",
        coolingTon: "طن التبريد",
        totalBtu: "إجمالي الـ BTU",
        expectedAmp: "الأمبير المتوقع",
        marketCapacity: "القدرة المناسبة في السوق",
        ton: "طن",
        btu: "BTU",
        amp: "أمبير",
        compInfo: " معلومات الضاغط",
        showCompInfo: "عرض معلومات الضاغط",
        convTitle: "تحويل الوحدات",
        convertBtn: "تحويل",
        closeBtn: "إغلاق",
        flowTitle: "حساب التدفق من الإزاحة",
        flowSub: "احسب معدل التدفق للضواغط والمضخات",
        dispUnit: "وحدة الإزاحة:",
        m3: "متر مكعب (m³)",
        L: "لتر (L)",
        cm3: "سنتيمتر مكعب (cm³)",
        in3: "بوصة مكعبة (in³)",
        ft3: "قدم مكعبة (ft³)",
        galUS: "غالون أمريكي (gal US)",
        dispPerCycle: "الإزاحة لكل دورة:",
        rpm: "عدد اللفات في الدقيقة (RPM):",
        cylinders: "عدد الأسطوانات (اختياري):",
        calcFlow: " حساب التدفق",
        flowRate: "معدل التدفق:",
        lmin: "لتر/دقيقة",
        m3h: "متر³/ساعة",
        cfm: "قدم³/دقيقة",
        gpm: "غالون/دقيقة",
        flowNote: "* لضواغط المكبس استخدم الإزاحة × RPM × عدد الأسطوانات",
        wireTitle: "حساب قطر السلك",
        copper: "نحاس (Copper)",
        aluminum: "ألمنيوم (Aluminum)",
        singlePhase: "Single Phase (220V)",
        threePhase: "Three Phase (380V)",
        calcWire: "حساب القطر",
        madeBy: "MADE BY",
        developerName: "سيف الدين ريحان",
        pressureTable: "جدول ضغوط مركبات التبريد (PSI)",
        refrigerant: "المركب",
        suction: "ضغط السحب",
        discharge: "ضغط الطرد",
        stope: "ضغط التوقف",
        pressureNote: "* القيم تقريبية وتختلف حسب ظروف التشغيل",
        lawLabel: "اختر نوع القانون:",
        lawOptionChoose: "-- اختر --",
        lawOptionOhm: "قانون أوم (V, I, R)",
        lawOptionPower: "قانون القدرة / الوات (P, V, I, R)",
        powerConvert: "تحويل القدرة",
        enterWatts: "أدخل الواط (W)",
        enterHP: "أدخل الحصان (HP)",
        wattsToHP: "واط → حصان",
        hpToWatts: "حصان → واط",
        conversionNote: "1 حصان = 745.7 واط",
        defaultFreq: "افتراضي: 50 هرتز",
        compPlaceholder: "موديل الضاغط (مثال: ZR12K3)",
        wireAmpPlaceholder: "أمبير (A)",
        wireDistPlaceholder: "مسافة (م)",
        dispPlaceholder: "أدخل الإزاحة",
        rpmPlaceholder: "مثال: 1450",
        
        // نصوص الذكاء الاصطناعي
        aiSearch: "بحث بالذكاء الاصطناعي",
        aiSearching: "جاري البحث في قاعدة البيانات الذكية...",
        aiMultipleSearch: "جاري البحث في نماذج الذكاء الاصطناعي المتعددة...",
        aiTryingModel: "جارى البحث ",
        aiAllFailed: " فشل البرنامج في العثور على معلومات الضاغط على الويب و لا يتوفر فى قاعدة بيانات الموديلات الان ",
        aiSuccessWith: "تم العثور على المعلومات باستخدام: ",
        aiRateLimit: "تم تجاوز حد الاستخدام، جاري تجربة نموذج آخر...",
        aiModelsAvailable: "النماذج المتاحة: ",
        aiNotFound: "لم يتم العثور في قاعدة البيانات المحلية، جاري البحث بالذكاء الاصطناعي...",
        aiError: "حدث خطأ في الاتصال بالذكاء الاصطناعي",
        aiTryManual: "أو تأكد من كتابة الموديل بشكل صحيح",
        copyResult: "نسخ النتيجة",
        copied: "تم النسخ!"
    },
    en: {
        headerTitle: "Cooling Tools Pro",
        menuTitle: "Menu",
        nightMode: "Night",
        dayMode: "Day",
        connections: "CONNECTIONS",
        wireCalc: "Wire Gauge Calc",
        flowCalc: "Flow from Displacement",
        conversions: "CONVERSIONS",
        coolingUnits: "Cooling Units",
        lengthUnits: "Length Units",
        massUnits: "Mass Units",
        areaUnits: "Area Units",
        pressureUnits: "Pressure Units",
        volumeUnits: "Volume Units",
        tempUnits: "Temperature Units",
        voltUnits: "Voltage Units",
        ampUnits: "Current Units",
        wattUnits: "Power Units",
        faradUnits: "Capacitance Units",
        henryUnits: "Inductance Units",
        tabTemp: "Temperature",
        tabElec: "Electrical",
        tabRoom: "Room",
        tabComp: "Compressor Information",
        sensorCalc: " NTC Sensor",
        tempModeRT: "Resistance Ω → Temperature°C",
        tempModeTR: "Temperature °C → Resistance Ω",
        sensor10k: "10KΩ Sensor (Room and Indoor Coil)",
        sensor5k: "5KΩ Sensor (Outdoor Coil)",
        sensor200k: "200KΩ Sensor (Discharge Compressor)",
        sensorCustom: "Custom",
        r0: "R0",
        beta: "Beta",
        calcBtn: "Calculate",
        elecCalc: " Electrical Laws",
        elecLaws: "Electrical Laws",
        elecCap: "Capacitor (µF)",
        elecAmp: "Capacitor Current (A)",
        elecPow: "Power (Watts)",
        roomCalc: " AC Calculator",
        length: "Length",
        width: "Width",
        height: "Height",
        roomNormal: "Normal Room (250)",
        roomSunny: "Sunny Room (300)",
        roomKitchen: "Kitchen/Glass (350)",
        roomHighLoad: "Very high thermal load (400)",
        calcCapacity: "Calculate Capacity",
        actualHp: "Actual HP",
        coolingTon: "Cooling Ton",
        totalBtu: "Total BTU",
        expectedAmp: "Expected Amp",
        marketCapacity: "Market Capacity",
        ton: "Ton",
        btu: "BTU",
        amp: "Amp",
        compInfo: " Compressor Info",
        showCompInfo: "Show Compressor Info",
        convTitle: "Unit Converter",
        convertBtn: "Convert",
        closeBtn: "Close",
        flowTitle: "Flow from Displacement",
        flowSub: "Calculate flow rate for compressors & pumps",
        dispUnit: "Displacement unit:",
        m3: "Cubic meter (m³)",
        L: "Liter (L)",
        cm3: "Cubic cm (cm³)",
        in3: "Cubic inch (in³)",
        ft3: "Cubic foot (ft³)",
        galUS: "Gallon (US)",
        dispPerCycle: "Displacement per cycle:",
        rpm: "Revolutions per minute (RPM):",
        cylinders: "Cylinders (optional):",
        calcFlow: " Calculate Flow",
        flowRate: "Flow Rate:",
        lmin: "Liter/min",
        m3h: "m³/h",
        cfm: "CFM",
        gpm: "GPM",
        flowNote: "* For piston compressors: displacement × RPM × cylinders",
        wireTitle: "Wire Gauge Calculator",
        copper: "Copper",
        aluminum: "Aluminum",
        singlePhase: "Single Phase (220V)",
        threePhase: "Three Phase (380V)",
        calcWire: "Calculate",
        madeBy: "MADE BY",
        developerName: "Seif El Din Rehan",
        pressureTable: "Refrigerant Pressure Table (PSI)",
        refrigerant: "Refrigerant",
        suction: "Suction Pressure",
        discharge: "Discharge Pressure",
        stope: "Stope Pressure",
        pressureNote: "* Values are approximate and vary by operating conditions",
        lawLabel: "Choose law type:",
        lawOptionChoose: "-- Choose --",
        lawOptionOhm: "Ohm's Law (V, I, R)",
        lawOptionPower: "Power Law (P, V, I, R)",
        powerConvert: "Power Conversion",
        enterWatts: "Enter Watts (W)",
        enterHP: "Enter Horsepower (HP)",
        wattsToHP: "Watts → HP",
        hpToWatts: "HP → Watts",
        conversionNote: "1 HP = 745.7 Watts",
        defaultFreq: "Default: 50 Hz",
        compPlaceholder: "Compressor model (e.g. ZR12K3)",
        wireAmpPlaceholder: "Current (A)",
        wireDistPlaceholder: "Distance (m)",
        dispPlaceholder: "Enter displacement",
        rpmPlaceholder: "Example: 1450",
        
        // AI texts
        aiSearch: "AI Search",
        aiSearching: "Searching in AI database...",
        aiMultipleSearch: "Searching multiple AI models...",
        aiTryingModel: "Searching ",
        aiAllFailed: "The program failed to find the compressor information on the web, and it is not available in the model database now",
        aiSuccessWith: "Information found using: ",
        aiRateLimit: "Rate limit exceeded, trying another model...",
        aiModelsAvailable: "Available models: ",
        aiNotFound: "Not found in local database, searching with AI...",
        aiError: "Error connecting to AI",
        aiTryManual: "Or make sure the model is written correctly",
        copyResult: "Copy result",
        copied: "Copied!"
    }
};
const CONSTANTS = {
    TEMP: {
        MIN_CELSIUS: -100,
        MAX_CELSIUS: 250,
        MIN_RESISTANCE: 10,
        MAX_RESISTANCE: 10000000
    },
    ELECTRICAL: {
        MIN_VOLTAGE: 0.1,
        MAX_VOLTAGE: 10000,
        MIN_CURRENT: 0.1,
        MAX_CURRENT: 1000,
        MIN_RESISTANCE: 0.1,
        MAX_RESISTANCE: 1000000,
        MIN_POWER: 1,
        MAX_POWER: 1000000,
        MIN_CAPACITOR: 0.1,
        MAX_CAPACITOR: 10000
    },
    ROOM: {
        MIN_DIMENSION: 1,
        MAX_DIMENSION: 100,
        MIN_HEIGHT: 1,
        MAX_HEIGHT: 50
    },
    WIRE: {
        MIN_CURRENT: 0.1,
        MAX_CURRENT: 1000,
        MIN_DISTANCE: 1,
        MAX_DISTANCE: 1000
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'ar';
let currentConvCategory = '';
let lastResult = '';
let lastResultType = 'watt';
let unitsData = {};
let pendingAnimationFrame = null;

// ==================== إعدادات الاتصال ====================
const API_CONFIG = {
    baseUrl: window.location.origin,
    proxyPath: '/proxy.php'
};

// دالة مساعدة للحصول على رابط proxy الكامل
function getProxyUrl() {
    return API_CONFIG.baseUrl + API_CONFIG.proxyPath + '?key=123456';
}

// ==================== دالة تحديث اتجاهات الأسهم (معتمدة على CSS) ====================
function updateArrowsDirection() {
    // نترك التحكم للـ CSS عبر dir="rtl" و dir="ltr"
    const arrows = document.querySelectorAll('.menu-arrow');
    arrows.forEach(arrow => {
        arrow.style.transform = ''; // تنظيف أي تحويل يدوي
        // التأكد من استخدام أيقونة موحدة لسهولة التحكم عبر CSS
        arrow.classList.remove('fa-chevron-right');
        arrow.classList.add('fa-chevron-left');
    });
}

// ==================== دالة الحصول على بيانات الوحدات ====================
function getUnitsData() {
    return {
        length: {
            title: currentLang === 'ar' ? 'تحويل الطول' : 'Length Conversion',
            units: {
                'm': 1, 'cm': 0.01, 'mm': 0.001, 'μm': 1e-6, 'nm': 1e-9, 'pm': 1e-12,
                'km': 1000, 'in': 0.0254, 'ft': 0.3048, 'yd': 0.9144, 'mi': 1609.344,
                'ly': 9.46073e15, 'au': 1.495978707e11, 'pc': 3.08568e16
            },
            labels: {
                'm': currentLang === 'ar' ? 'متر (m)' : 'Meter (m)',
                'cm': currentLang === 'ar' ? 'سنتيمتر (cm)' : 'Centimeter (cm)',
                'mm': currentLang === 'ar' ? 'مليمتر (mm)' : 'Millimeter (mm)',
                'μm': currentLang === 'ar' ? 'ميكرومتر (µm)' : 'Micrometer (µm)',
                'nm': currentLang === 'ar' ? 'نانومتر (nm)' : 'Nanometer (nm)',
                'pm': currentLang === 'ar' ? 'بيكومتر (pm)' : 'Picometer (pm)',
                'km': currentLang === 'ar' ? 'كيلومتر (km)' : 'Kilometer (km)',
                'in': currentLang === 'ar' ? 'إنش (in)' : 'Inch (in)',
                'ft': currentLang === 'ar' ? 'قدم (ft)' : 'Foot (ft)',
                'yd': currentLang === 'ar' ? 'ياردة (yd)' : 'Yard (yd)',
                'mi': currentLang === 'ar' ? 'ميل (mi)' : 'Mile (mi)',
                'ly': currentLang === 'ar' ? 'سنة ضوئية (ly)' : 'Light year (ly)',
                'au': currentLang === 'ar' ? 'وحدة فلكية (AU)' : 'Astronomical unit (AU)',
                'pc': currentLang === 'ar' ? 'فرسخ فلكي (pc)' : 'Parsec (pc)'
            }
        },
        mass: {
            title: currentLang === 'ar' ? 'تحويل الكتلة' : 'Mass Conversion',
            units: {
                'kg': 1, 'g': 0.001, 'mg': 0.000001, 'μg': 1e-9, 'ng': 1e-12,
                'lb': 0.453592, 'oz': 0.0283495, 'stone': 6.35029,
                't': 1000, 'ton_us': 907.185, 'ton_uk': 1016.05
            },
            labels: {
                'kg': currentLang === 'ar' ? 'كيلوغرام (kg)' : 'Kilogram (kg)',
                'g': currentLang === 'ar' ? 'غرام (g)' : 'Gram (g)',
                'mg': currentLang === 'ar' ? 'مليغرام (mg)' : 'Milligram (mg)',
                'μg': currentLang === 'ar' ? 'ميكروغرام (µg)' : 'Microgram (µg)',
                'ng': currentLang === 'ar' ? 'نانوغرام (ng)' : 'Nanogram (ng)',
                'lb': currentLang === 'ar' ? 'رطل (lb)' : 'Pound (lb)',
                'oz': currentLang === 'ar' ? 'أونصة (oz)' : 'Ounce (oz)',
                'stone': currentLang === 'ar' ? 'ستون (stone)' : 'Stone (stone)',
                't': currentLang === 'ar' ? 'طن متري (t)' : 'Metric ton (t)',
                'ton_us': currentLang === 'ar' ? 'طن أمريكي (ton US)' : 'US ton (ton US)',
                'ton_uk': currentLang === 'ar' ? 'طن بريطاني (ton UK)' : 'UK ton (ton UK)'
            }
        },
        area: {
            title: currentLang === 'ar' ? 'تحويل المساحة' : 'Area Conversion',
            units: {
                'm²': 1, 'cm²': 0.0001, 'mm²': 0.000001, 'km²': 1000000,
                'ha': 10000, 'ft²': 0.092903, 'in²': 0.00064516,
                'acre': 4046.86, 'dunam': 1000
            },
            labels: {
                'm²': currentLang === 'ar' ? 'متر مربع (m²)' : 'Square meter (m²)',
                'cm²': currentLang === 'ar' ? 'سنتيمتر مربع (cm²)' : 'Square cm (cm²)',
                'mm²': currentLang === 'ar' ? 'مليمتر مربع (mm²)' : 'Square mm (mm²)',
                'km²': currentLang === 'ar' ? 'كيلومتر مربع (km²)' : 'Square km (km²)',
                'ha': currentLang === 'ar' ? 'هكتار (ha)' : 'Hectare (ha)',
                'ft²': currentLang === 'ar' ? 'قدم مربع (ft²)' : 'Square foot (ft²)',
                'in²': currentLang === 'ar' ? 'إنش مربع (in²)' : 'Square inch (in²)',
                'acre': currentLang === 'ar' ? 'فدان (acre)' : 'Acre (acre)',
                'dunam': currentLang === 'ar' ? 'دونم' : 'Dunam'
            }
        },
        pressure: {
            title: currentLang === 'ar' ? 'تحويل الضغط' : 'Pressure Conversion',
            units: {
                'pa': 1, 'kpa': 1000, 'mpa': 1000000, 'bar': 100000,
                'psi': 6894.76, 'atm': 101325, 'mmhg': 133.322,
                'inhg': 3386.39, 'torr': 133.322
            },
            labels: {
                'pa': currentLang === 'ar' ? 'باسكال (Pa)' : 'Pascal (Pa)',
                'kpa': currentLang === 'ar' ? 'كيلو باسكال (kPa)' : 'Kilopascal (kPa)',
                'mpa': currentLang === 'ar' ? 'ميغا باسكال (MPa)' : 'Megapascal (MPa)',
                'bar': currentLang === 'ar' ? 'بار (bar)' : 'Bar (bar)',
                'psi': currentLang === 'ar' ? 'رطل/إنش² (psi)' : 'PSI (psi)',
                'atm': currentLang === 'ar' ? 'جو (atm)' : 'Atmosphere (atm)',
                'mmhg': currentLang === 'ar' ? 'ملم زئبق (mmHg)' : 'mmHg',
                'inhg': currentLang === 'ar' ? 'بوصة زئبقية (inHg)' : 'inHg',
                'torr': currentLang === 'ar' ? 'تور (Torr)' : 'Torr'
            }
        },
        temperature: {
            title: currentLang === 'ar' ? 'تحويل الحرارة' : 'Temperature Conversion',
            units: { 'c': 1, 'f': 1, 'k': 1, 'r': 1, 're': 1, 'n': 1, 'de': 1, 'ro': 1 },
            labels: {
                'c': currentLang === 'ar' ? 'درجة سيلزيوس (t°C)' : 'Celsius (t°C)',
                'f': currentLang === 'ar' ? 'درجة فهرنهايت (t°F)' : 'Fahrenheit (t°F)',
                'k': currentLang === 'ar' ? 'درجة كلفن (T°K)' : 'Kelvin (T°K)',
                'r': currentLang === 'ar' ? 'درجة رانكين (T°R)' : 'Rankine (T°R)',
                're': currentLang === 'ar' ? 'درجة ريومور (t°Ré)' : 'Réaumur (t°Ré)',
                'n': currentLang === 'ar' ? 'درجة نيوتن (t°N)' : 'Newton (t°N)',
                'de': currentLang === 'ar' ? 'درجة ديليس (t°De)' : 'Delisle (t°De)',
                'ro': currentLang === 'ar' ? 'درجة رومير (t°Rø)' : 'Rømer (t°Rø)'
            }
        },
        cooling: {
            title: currentLang === 'ar' ? 'تحويل التبريد' : 'Cooling Conversion',
            units: {
                'btu': 1, 'hp': 8000, 'tr': 12000, 'kw': 3412.14,
                'kcal': 3.96832, 'ton_us': 12000
            },
            labels: {
                'btu': currentLang === 'ar' ? 'BTU/h' : 'BTU/h',
                'hp': currentLang === 'ar' ? 'حصان (HP)' : 'Horsepower (HP)',
                'tr': currentLang === 'ar' ? 'طن تبريد (TR)' : 'Ton Refrigeration (TR)',
                'kw': currentLang === 'ar' ? 'كيلووات (kW)' : 'Kilowatt (kW)',
                'kcal': currentLang === 'ar' ? 'كيلو كالوري/ساعة' : 'kcal/h',
                'ton_us': currentLang === 'ar' ? 'طن أمريكي' : 'US ton'
            }
        },
        volume: {
            title: currentLang === 'ar' ? 'تحويل الحجم' : 'Volume Conversion',
            units: {
                'm³': 1,
                'L': 0.001,
                'cm³': 0.000001,
                'mL': 0.000001,
                'µL': 1e-9,
                'in³': 0.000016387064,
                'ft³': 0.028316846592,
                'yd³': 0.764554857984,
                'galUS': 0.003785411784,
                'qtUS': 0.000946352946,
                'ptUS': 0.000473176473,
                'flozUS': 0.0000295735295625,
                'galUK': 0.00454609,
                'qtUK': 0.0011365225,
                'ptUK': 0.00056826125,
                'flozUK': 0.0000284130625,
                'bblOil': 0.158987294928,
                'bblBeer': 0.117347765,
                'cord': 3.624556363776,
                'boardfoot': 0.002359737216,
                'tbspUS': 0.00001478676478125,
                'tspUS': 0.00000492892159375
            },
            labels: {
                'm³': currentLang === 'ar' ? 'متر مكعب (m³)' : 'Cubic meter (m³)',
                'L': currentLang === 'ar' ? 'لتر (L)' : 'Liter (L)',
                'cm³': currentLang === 'ar' ? 'سنتيمتر مكعب (cm³)' : 'Cubic cm (cm³)',
                'mL': currentLang === 'ar' ? 'مليلتر (mL)' : 'Milliliter (mL)',
                'µL': currentLang === 'ar' ? 'ميكرولتر (µL)' : 'Microliter (µL)',
                'in³': currentLang === 'ar' ? 'بوصة مكعبة (in³)' : 'Cubic inch (in³)',
                'ft³': currentLang === 'ar' ? 'قدم مكعبة (ft³)' : 'Cubic foot (ft³)',
                'yd³': currentLang === 'ar' ? 'ياردة مكعبة (yd³)' : 'Cubic yard (yd³)',
                'galUS': currentLang === 'ar' ? 'غالون أمريكي (gal US)' : 'US gallon (gal US)',
                'qtUS': currentLang === 'ar' ? 'كوارت أمريكي (qt US)' : 'US quart (qt US)',
                'ptUS': currentLang === 'ar' ? 'باينت أمريكي (pt US)' : 'US pint (pt US)',
                'flozUS': currentLang === 'ar' ? 'أونصة سائلة أمريكية (fl oz US)' : 'US fl oz (fl oz US)',
                'galUK': currentLang === 'ar' ? 'غالون بريطاني (gal UK)' : 'UK gallon (gal UK)',
                'qtUK': currentLang === 'ar' ? 'كوارت بريطاني (qt UK)' : 'UK quart (qt UK)',
                'ptUK': currentLang === 'ar' ? 'باينت بريطاني (pt UK)' : 'UK pint (pt UK)',
                'flozUK': currentLang === 'ar' ? 'أونصة سائلة بريطانية (fl oz UK)' : 'UK fl oz (fl oz UK)',
                'bblOil': currentLang === 'ar' ? 'برميل نفط (bbl oil)' : 'Oil barrel (bbl oil)',
                'bblBeer': currentLang === 'ar' ? 'برميل بيرة (bbl beer)' : 'Beer barrel (bbl beer)',
                'cord': currentLang === 'ar' ? 'حبل خشب (cord)' : 'Cord (cord)',
                'boardfoot': currentLang === 'ar' ? 'قدم لوح (board foot)' : 'Board foot',
                'tbspUS': currentLang === 'ar' ? 'ملعقة طعام أمريكية (tbsp US)' : 'US tbsp',
                'tspUS': currentLang === 'ar' ? 'ملعقة شاي أمريكية (tsp US)' : 'US tsp'
            }
        },
        volt: {
            title: currentLang === 'ar' ? 'تحويل الفولت' : 'Voltage Conversion',
            units: { 'V': 1, 'mV': 0.001, 'μV': 1e-6, 'nV': 1e-9, 'kV': 1000, 'MV': 1000000 },
            labels: {
                'V': currentLang === 'ar' ? 'فولت (V)' : 'Volt (V)',
                'mV': currentLang === 'ar' ? 'ملي فولت (mV)' : 'Millivolt (mV)',
                'μV': currentLang === 'ar' ? 'ميكرو فولت (µV)' : 'Microvolt (µV)',
                'nV': currentLang === 'ar' ? 'نانو فولت (nV)' : 'Nanovolt (nV)',
                'kV': currentLang === 'ar' ? 'كيلو فولت (kV)' : 'Kilovolt (kV)',
                'MV': currentLang === 'ar' ? 'ميجا فولت (MV)' : 'Megavolt (MV)'
            }
        },
        amp: {
            title: currentLang === 'ar' ? 'تحويل الأمبير' : 'Current Conversion',
            units: { 'A': 1, 'mA': 0.001, 'μA': 1e-6, 'nA': 1e-9, 'kA': 1000 },
            labels: {
                'A': currentLang === 'ar' ? 'أمبير (A)' : 'Ampere (A)',
                'mA': currentLang === 'ar' ? 'ملي أمبير (mA)' : 'Milliampere (mA)',
                'μA': currentLang === 'ar' ? 'ميكرو أمبير (µA)' : 'Microampere (µA)',
                'nA': currentLang === 'ar' ? 'نانو أمبير (nA)' : 'Nanoampere (nA)',
                'kA': currentLang === 'ar' ? 'كيلو أمبير (kA)' : 'Kiloampere (kA)'
            }
        },
        watt: {
            title: currentLang === 'ar' ? 'تحويل الواط' : 'Power Conversion',
            units: { 'W': 1, 'mW': 0.001, 'μW': 1e-6, 'kW': 1000, 'MW': 1000000 },
            labels: {
                'W': currentLang === 'ar' ? 'وات (W)' : 'Watt (W)',
                'mW': currentLang === 'ar' ? 'ملي وات (mW)' : 'Milliwatt (mW)',
                'μW': currentLang === 'ar' ? 'ميكرو وات (µW)' : 'Microwatt (µW)',
                'kW': currentLang === 'ar' ? 'كيلو وات (kW)' : 'Kilowatt (kW)',
                'MW': currentLang === 'ar' ? 'ميجا وات (MW)' : 'Megawatt (MW)'
            }
        },
        farad: {
            title: currentLang === 'ar' ? 'تحويل الفاراد' : 'Capacitance Conversion',
            units: { 'F': 1, 'mF': 0.001, 'μF': 1e-6, 'nF': 1e-9, 'pF': 1e-12 },
            labels: {
                'F': currentLang === 'ar' ? 'فاراد (F)' : 'Farad (F)',
                'mF': currentLang === 'ar' ? 'ملي فاراد (mF)' : 'Millifarad (mF)',
                'μF': currentLang === 'ar' ? 'ميكرو فاراد (µF)' : 'Microfarad (µF)',
                'nF': currentLang === 'ar' ? 'نانو فاراد (nF)' : 'Nanofarad (nF)',
                'pF': currentLang === 'ar' ? 'بيكو فاراد (pF)' : 'Picofarad (pF)'
            }
        },
        henry: {
            title: currentLang === 'ar' ? 'تحويل الهنري' : 'Inductance Conversion',
            units: { 'H': 1, 'mH': 0.001, 'μH': 1e-6, 'nH': 1e-9 },
            labels: {
                'H': currentLang === 'ar' ? 'هنري (H)' : 'Henry (H)',
                'mH': currentLang === 'ar' ? 'ملي هنري (mH)' : 'Millihenry (mH)',
                'μH': currentLang === 'ar' ? 'ميكرو هنري (µH)' : 'Microhenry (µH)',
                'nH': currentLang === 'ar' ? 'نانو هنري (nH)' : 'Nanohenry (nH)'
            }
        }
    };
}

// تهيئة بيانات الوحدات
unitsData = getUnitsData();

// ==================== دوال آمنة لتحديث النصوص ====================
function safeSetText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

function safeSetPlaceholder(element, text) {
    if (element) {
        element.placeholder = text;
    }
}

// ==================== دالة تطبيق اللغة ====================
function applyLanguage(lang) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.add('no-transition');
    }
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLang', lang);
    currentLang = lang;

    // تحديث بيانات الوحدات حسب اللغة الجديدة
    unitsData = getUnitsData();

    // تحديث جميع عناصر data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            safeSetText(el, translations[lang][key]);
        }
    });

    // تحديث جميع الـ placeholders
    document.querySelectorAll('[data-placeholder-lang]').forEach(el => {
        const key = el.getAttribute('data-placeholder-lang');
        if (translations[lang] && translations[lang][key]) {
            safeSetPlaceholder(el, translations[lang][key]);
        }
    });

    // تحديث نص زر اللغة
    const langToggleText = document.getElementById('langToggleText');
    if (langToggleText) {
        safeSetText(langToggleText, lang === 'ar' ? 'English' : 'عربي');
    }

    // تحديث نص الوضع الليلي/النهاري
    updateNightModeText();

    // تحديث اسم المطور
    const developerName = document.getElementById('developerName');
    if (developerName) {
        safeSetText(developerName, translations[lang].developerName);
    }

    // تحديث الحقول الديناميكية
    updateLawTypeText();
    updateUnitConverterTitles();
    resetElecFields();

    // التحكم في مكان السايد بار
    document.body.classList.toggle('ltr-mode', lang === 'en');
    
    // تحديث معلومات الضاغط إذا كانت ظاهرة
    const compResultDiv = document.getElementById('comp-result-div');
    if (compResultDiv && !compResultDiv.classList.contains('hidden')) {
        const input = document.getElementById('comp-input')?.value;
        if (input) searchCompressor();
    }
    
    // تحديث اتجاه الأسهم - في المكان الصحيح
    updateArrowsDirection();
    
    setTimeout(() => {
        if (sidebar) {
            sidebar.classList.remove('no-transition');
        }
    }, 50);
}

// دالة تحديث نص الوضع الليلي/النهاري
function updateNightModeText() {
    const nightModeText = document.getElementById('nightModeText');
    if (nightModeText) {
        safeSetText(nightModeText, 
            document.body.classList.contains('dark-mode') 
                ? translations[currentLang].dayMode 
                : translations[currentLang].nightMode
        );
    }
}

function toggleLanguage() {
    const langToggleText = document.getElementById('langToggleText');
    if (!langToggleText) {
        setTimeout(toggleLanguage, 50);
        return;
    }
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// تحديث نصوص القوانين الكهربائية
function updateLawTypeText() {
    const lawSelect = document.getElementById('law-type');
    if (lawSelect && lawSelect.options.length > 0) {
        lawSelect.options[0].text = translations[currentLang].lawOptionChoose;
        if (lawSelect.options[1]) lawSelect.options[1].text = translations[currentLang].lawOptionOhm;
        if (lawSelect.options[2]) lawSelect.options[2].text = translations[currentLang].lawOptionPower;
    }
}

// تحديث عناوين الوحدات في modal-converter
function updateUnitConverterTitles() {
    const convTitle = document.getElementById('conv-title');
    if (convTitle && currentConvCategory) {
        const data = unitsData[currentConvCategory];
        if (data) {
            safeSetText(convTitle, data.title);
        }
    }
}

// دوال الوضع الليلي
function toggleDarkMode() {
    const icon = document.querySelector('#themeToggleSidebar i');
    const button = document.querySelector('#themeToggleSidebar');

    if (!icon || !button) {
        setTimeout(toggleDarkMode, 50);
        return;
    }
    
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        button.className = 'flex-1 py-4 px-2 bg-gradient-to-l from-blue-800 to-blue-700 text-white rounded-full flex items-center justify-center gap-2 font-bold shadow-md active:scale-95 transition-all duration-200';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        button.className = 'flex-1 py-4 px-2 bg-gradient-to-l from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center gap-2 font-bold shadow-md active:scale-95 transition-all duration-200';
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateNightModeText();
}

// استعادة الوضع الليلي من التخزين المحلي
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const icon = document.querySelector('#themeToggleSidebar i');
    if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

function validateRange(value, min, max, fieldName) {
    if (value < min) return `${fieldName} ${currentLang === 'ar' ? 'يجب أن يكون أكبر من أو يساوي' : 'must be greater than or equal to'} ${min}`;
    if (value > max) return `${fieldName} ${currentLang === 'ar' ? 'يجب أن يكون أقل من أو يساوي' : 'must be less than or equal to'} ${max}`;
    return null;
}

function handleEnter(e, callback) { 
    if (e.key === 'Enter') { 
        callback(); 
        e.target.blur(); 
    } 
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('closed');
        overlay.classList.toggle('hidden');
        updateArrowsDirection();
    }
}

function closeModal() { 
    document.getElementById('modal-converter')?.classList.add('hidden'); 
}

function openWireCalc() { 
    document.getElementById('modal-wire')?.classList.remove('hidden'); 
    toggleSidebar(); 
}

function closeWireModal() { 
    document.getElementById('modal-wire')?.classList.add('hidden'); 
}

function openFlowCalculator() { 
    document.getElementById('modal-flow')?.classList.remove('hidden'); 
    toggleSidebar(); 
}

function closeFlowModal() { 
    document.getElementById('modal-flow')?.classList.add('hidden'); 
}

function clearResults(page) {
    const input = document.getElementById(`${page}-input`);
    if (input) input.value = '';
    document.getElementById(`${page}-result-div`)?.classList.add('hidden');
    document.getElementById(`${page}-validation`)?.classList.add('hidden');
}

function clearConvResult() {
    document.getElementById('conv-result-div')?.classList.add('hidden');
    document.getElementById('conv-validation')?.classList.add('hidden');
}

function switchPage(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${pageId}`)?.classList.remove('hidden');
    document.querySelectorAll('nav button').forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('tab-inactive');
    });
    const activeTab = document.getElementById(`tab-${pageId}`);
    if (activeTab) {
        activeTab.classList.add('tab-active');
        activeTab.classList.remove('tab-inactive');
    }
}

function swapTempMode() {
    const s = document.getElementById('temp-mode');
    if (s) {
        s.selectedIndex = s.selectedIndex === 0 ? 1 : 0;
        clearResults('temp');
    }
}

function swapConverterUnits() {
    const fromS = document.getElementById('unit-from');
    const toS = document.getElementById('unit-to');
    const inputEl = document.getElementById('conv-input');
    const resultDiv = document.getElementById('conv-result-div');

    if (!fromS || !toS || !inputEl || !resultDiv) return;

    if (!resultDiv.classList.contains('hidden') && resultDiv.innerText.trim() !== '') {
        let resultText = resultDiv.innerText.trim();
        const numMatch = resultText.match(/^-?[\d.,]+/);
        if (numMatch) {
            let numStr = numMatch[0].replace(/,/g, '');
            inputEl.value = numStr;
        }
    }

    const tempVal = fromS.value;
    fromS.value = toS.value;
    toS.value = tempVal;

    clearConvResult();
    convertNow();
}

function openUnitConverter(cat) {
    currentConvCategory = cat;
    const data = unitsData[cat];
    if (!data) return;

    const convTitle = document.getElementById('conv-title');
    if (convTitle) safeSetText(convTitle, data.title);
    
    const fromS = document.getElementById('unit-from');
    const toS = document.getElementById('unit-to');
    if (!fromS || !toS) return;
    
    fromS.innerHTML = '';
    toS.innerHTML = '';

    const keys = Object.keys(data.units);
    keys.forEach(k => {
        const label = data.labels?.[k] || k.toUpperCase();
        fromS.add(new Option(label, k));
        toS.add(new Option(label, k));
    });

    toS.selectedIndex = Math.min(1, keys.length - 1);
    const convInput = document.getElementById('conv-input');
    if (convInput) convInput.value = '';
    
    document.getElementById('conv-result-div')?.classList.add('hidden');
    document.getElementById('modal-converter')?.classList.remove('hidden');
    toggleSidebar();
}

function formatResultWithUnits(value, unitKey, cat) {
    const catData = unitsData[cat];
    if (!catData?.labels?.[unitKey]) {
        return `${value.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${unitKey}`;
    }

    const label = catData.labels[unitKey];
    const match = label.match(/\(([^)]+)\)/);
    const engSymbol = match ? match[1] : unitKey;
    const arabicName = label.replace(/\s*\([^)]*\)/, '');

    return `${value.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${arabicName} (${engSymbol})`;
}

function convertNow() {
    const val = parseFloat(document.getElementById('conv-input')?.value);
    const resultDiv = document.getElementById('conv-result-div');
    const validationDiv = document.getElementById('conv-validation');

    if (!resultDiv || !validationDiv) return;

    if (isNaN(val) || val === '') {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة صحيحة' : 'Please enter a valid number');
        validationDiv.classList.remove('hidden');
        return;
    }

    if (val < -1e15 || val > 1e15) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'القيمة خارج النطاق المسموح به' : 'Value out of allowed range');
        validationDiv.classList.remove('hidden');
        return;
    }

    validationDiv.classList.add('hidden');

    const cat = unitsData[currentConvCategory];
    if (!cat) return;

    const fromK = document.getElementById('unit-from')?.value;
    const toK = document.getElementById('unit-to')?.value;
    if (!fromK || !toK) return;
    
    let res;

    if (currentConvCategory === 'temperature') {
        let celsius;
        if (fromK === 'c') celsius = val;
        else if (fromK === 'f') celsius = (val - 32) * 5 / 9;
        else if (fromK === 'k') celsius = val - 273.15;
        else if (fromK === 'r') celsius = (val - 491.67) * 5 / 9;
        else if (fromK === 're') celsius = val * 1.25;
        else if (fromK === 'n') celsius = val * 100 / 33;
        else if (fromK === 'de') celsius = 100 - val * 2 / 3;
        else if (fromK === 'ro') celsius = (val - 7.5) * 40 / 21;

        if (toK === 'c') res = celsius;
        else if (toK === 'f') res = (celsius * 9 / 5) + 32;
        else if (toK === 'k') res = celsius + 273.15;
        else if (toK === 'r') res = (celsius + 273.15) * 9 / 5;
        else if (toK === 're') res = celsius * 0.8;
        else if (toK === 'n') res = celsius * 33 / 100;
        else if (toK === 'de') res = (100 - celsius) * 3 / 2;
        else if (toK === 'ro') res = celsius * 21 / 40 + 7.5;

        const unitSymbol = getTemperatureSymbol(toK);
        safeSetText(resultDiv, `${res.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${unitSymbol}`);
    } else {
        const factorFrom = cat.units[fromK];
        const factorTo = cat.units[toK];
        res = (val * factorFrom) / factorTo;

        safeSetText(resultDiv, formatResultWithUnits(res, toK, currentConvCategory));
    }

    resultDiv.classList.remove('hidden');
}

function getTemperatureSymbol(unit) {
    const symbols = {
        'c': '°C', 'f': '°F', 'k': 'K', 'r': '°R',
        're': '°Ré', 'n': '°N', 'de': '°De', 'ro': '°Rø'
    };
    return symbols[unit] || '';
}

function updateSensorConstants() {
    const type = document.getElementById('sensor-type')?.value;
    const customDiv = document.getElementById('custom-params');
    
    if (!type || !customDiv) return;
    
    if (type === 'custom') {
        customDiv.classList.remove('hidden');
    } else {
        customDiv.classList.add('hidden');
        const sensorValues = {
            '10k': { r0: 10000, beta: 3950 },
            '5k': { r0: 5000, beta: 3470 },
            '200k': { r0: 200000, beta: 4200 }
        };
        if (sensorValues[type]) {
            const r0Val = document.getElementById('r0-val');
            const betaVal = document.getElementById('beta-val');
            if (r0Val && betaVal) {
                r0Val.value = sensorValues[type].r0;
                betaVal.value = sensorValues[type].beta;
            }
        }
    }
}

function calculateTemperature() {
    const mode = document.getElementById('temp-mode')?.value;
    const val = parseFloat(document.getElementById('temp-input')?.value);
    const r0 = parseFloat(document.getElementById('r0-val')?.value);
    const beta = parseFloat(document.getElementById('beta-val')?.value);
    const resultDiv = document.getElementById('temp-result-div');
    const validationDiv = document.getElementById('temp-validation');

    if (!resultDiv || !validationDiv) return;

    if (isNaN(val)) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة صحيحة في الحقل' : 'Please enter a valid value');
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }

    if (mode === 'RT') {
        if (val < CONSTANTS.TEMP.MIN_RESISTANCE || val > CONSTANTS.TEMP.MAX_RESISTANCE) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `قيمة المقاومة يجب أن تكون بين ${CONSTANTS.TEMP.MIN_RESISTANCE} و ${CONSTANTS.TEMP.MAX_RESISTANCE} أوم` 
                : `Resistance must be between ${CONSTANTS.TEMP.MIN_RESISTANCE} and ${CONSTANTS.TEMP.MAX_RESISTANCE} Ω`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
    } else {
        if (val < CONSTANTS.TEMP.MIN_CELSIUS || val > CONSTANTS.TEMP.MAX_CELSIUS) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `درجة الحرارة يجب أن تكون بين ${CONSTANTS.TEMP.MIN_CELSIUS} و ${CONSTANTS.TEMP.MAX_CELSIUS} درجة مئوية` 
                : `Temperature must be between ${CONSTANTS.TEMP.MIN_CELSIUS} and ${CONSTANTS.TEMP.MAX_CELSIUS} °C`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
    }

    validationDiv.classList.add('hidden');

    let res;
    if (mode === 'RT') {
        const k = 1 / ((1 / 298.15) + (1 / beta) * Math.log(val / r0));
        res = `${(k - 273.15).toLocaleString('en-US', { maximumFractionDigits: 1 })} °C`;
    } else {
        const r = r0 * Math.exp(beta * ((1 / (val + 273.15)) - (1 / 298.15)));
        res = `${Math.round(r).toLocaleString('en-US')} Ω`;
    }
    
    safeSetText(resultDiv, res);
    resultDiv.classList.remove('hidden');
}

// ==================== دالة resetElecFields مع دعم الترجمة الكامل ====================
function resetElecFields() {
    const mode = document.getElementById('elec-mode')?.value;
    const container = document.getElementById('elec-dynamic-inputs');
    
    if (!mode || !container) return;
    
    let html = '';

    const freqInput = `    
    <div class="mt-3">    
        <input type="number" id="e-freq" value="50" placeholder="${translations[currentLang].defaultFreq}"     
               class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font border border-gray-200 focus:border-orange-300" min="1" max="1000">    
        <p class="text-[10px] text-gray-500 text-center mt-1" data-lang="defaultFreq">${translations[currentLang].defaultFreq}</p>    
    </div>`;

    if (mode === 'cap') {
        html = `    
        <div class="grid grid-cols-2 gap-3">    
            <input type="number" id="e-amp" placeholder="${currentLang === 'ar' ? 'التيار (A)' : 'Current (A)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="0.1" max="1000">    
            <input type="number" id="e-volt" value="220" placeholder="${currentLang === 'ar' ? 'الجهد (V)' : 'Voltage (V)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="1" max="1000">    
        </div>    
        ${freqInput}`;
    }
    else if (mode === 'amp') {
        html = `    
        <div class="grid grid-cols-2 gap-3">    
            <input type="number" id="e-cap" placeholder="${currentLang === 'ar' ? 'المكثف (µF)' : 'Capacitor (µF)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="0.1" max="10000">    
            <input type="number" id="e-volt" value="220" placeholder="${currentLang === 'ar' ? 'الجهد (V)' : 'Voltage (V)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="1" max="1000">    
        </div>    
        ${freqInput}`;
    }
    else if (mode === 'pow') {
        html = `
        <div class="space-y-5">
            <label class="block font-bold text-base mb-3 text-orange-700" data-lang="powerConvert">${translations[currentLang].powerConvert}</label>
            
            <div class="grid grid-cols-2 gap-3">
                <button type="button" onclick="setPowerMode('watt')" id="power-mode-watt" 
                    class="p-4 bg-orange-500 text-white rounded-2xl font-bold text-center transition-all duration-200 ${lastResultType === 'watt' ? 'ring-4 ring-orange-300' : ''}">
                    <i class="fas fa-bolt ml-2"></i><span data-lang="wattsToHP">${translations[currentLang].wattsToHP}</span>
                </button>
                <button type="button" onclick="setPowerMode('hp')" id="power-mode-hp" 
                    class="p-4 bg-orange-500 text-white rounded-2xl font-bold text-center transition-all duration-200 ${lastResultType === 'hp' ? 'ring-4 ring-orange-300' : ''}">
                    <i class="fas fa-horse-head ml-2"></i><span data-lang="hpToWatts">${translations[currentLang].hpToWatts}</span>
                </button>
            </div>

            <div id="watt-input-container" class="${lastResultType === 'hp' ? 'hidden' : ''}">
                <input type="number" id="e-watt" value="" step="any" min="0" 
                    placeholder="${translations[currentLang].enterWatts}"
                    class="w-full p-5 bg-gray-50 rounded-2xl text-center font-bold num-font border-2 border-orange-200 focus:border-orange-500"
                    onkeydown="handleEnter(event, calculatePower)" data-placeholder-lang="enterWatts">
            </div>

            <div id="hp-input-container" class="${lastResultType === 'watt' ? 'hidden' : ''}">
                <input type="number" id="e-hp" value="" step="any" min="0" 
                    placeholder="${translations[currentLang].enterHP}"
                    class="w-full p-5 bg-gray-50 rounded-2xl text-center font-bold num-font border-2 border-orange-200 focus:border-orange-500"
                    onkeydown="handleEnter(event, calculatePower)" data-placeholder-lang="enterHP">
            </div>

            <p class="text-xs text-gray-500 text-center mt-1" data-lang="conversionNote">${translations[currentLang].conversionNote}</p>
        </div>`;
    }
    else if (mode === 'laws') {
        html = `
        <div class="space-y-5">
            <label class="block font-bold text-base mb-3 text-orange-700" data-lang="lawLabel">${translations[currentLang].lawLabel}</label>
            <select id="law-type" onchange="updateLawType()" class="w-full p-5 bg-gray-50 rounded-3xl font-bold text-center outline-none border-2 border-orange-100 focus:border-orange-300">
                <option value="">${translations[currentLang].lawOptionChoose}</option>
                <option value="ohm">${translations[currentLang].lawOptionOhm}</option>
                <option value="power">${translations[currentLang].lawOptionPower}</option>
            </select>

            <div id="law-inputs-container" class="space-y-4 mt-4 hidden"></div>
        </div>`;
    }

    container.innerHTML = html;
}

// ==================== دالة تعيين وضع القدرة ====================
function setPowerMode(mode) {
    lastResultType = mode;
    
    const wattBtn = document.getElementById('power-mode-watt');
    const hpBtn = document.getElementById('power-mode-hp');
    const wattContainer = document.getElementById('watt-input-container');
    const hpContainer = document.getElementById('hp-input-container');
    
    if (wattBtn && hpBtn && wattContainer && hpContainer) {
        if (mode === 'watt') {
            wattBtn.classList.add('ring-4', 'ring-orange-300');
            hpBtn.classList.remove('ring-4', 'ring-orange-300');
            wattContainer.classList.remove('hidden');
            hpContainer.classList.add('hidden');
        } else {
            hpBtn.classList.add('ring-4', 'ring-orange-300');
            wattBtn.classList.remove('ring-4', 'ring-orange-300');
            hpContainer.classList.remove('hidden');
            wattContainer.classList.add('hidden');
        }
    }
}

// ==================== دالة حساب القدرة (اتجاهين) ====================
function calculatePower() {
    const mode = document.getElementById('elec-mode')?.value;
    
    if (mode !== 'pow') return;
    
    const resultDiv = document.getElementById('elec-result-div');
    const validationDiv = document.getElementById('elec-validation');
    
    if (!resultDiv || !validationDiv) return;
    
    const wattInput = document.getElementById('e-watt');
    const hpInput = document.getElementById('e-hp');
    
    let result = "";
    
    if (lastResultType === 'watt') {
        // تحويل من واط إلى حصان
        const watts = parseFloat(wattInput?.value);
        
        if (isNaN(watts)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة الواط' : 'Please enter watts value');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        if (watts <= 0) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'القيمة يجب أن تكون أكبر من صفر' : 'Value must be greater than zero');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        validationDiv.classList.add('hidden');
        const hp = watts / 745.7;
        result = `${watts.toLocaleString('en-US', { maximumFractionDigits: 0 })} ${currentLang === 'ar' ? 'واط =' : 'Watts ='} ${hp.toLocaleString('en-US', { maximumFractionDigits: 2 })} HP`;
    } 
    else if (lastResultType === 'hp') {
        // تحويل من حصان إلى واط
        const hp = parseFloat(hpInput?.value);
        
        if (isNaN(hp)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة الحصان' : 'Please enter horsepower value');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        if (hp <= 0) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'القيمة يجب أن تكون أكبر من صفر' : 'Value must be greater than zero');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        validationDiv.classList.add('hidden');
        const watts = hp * 745.7;
        result = `${hp.toLocaleString('en-US', { maximumFractionDigits: 2 })} HP = ${watts.toLocaleString('en-US', { maximumFractionDigits: 0 })} ${currentLang === 'ar' ? 'واط' : 'Watts'}`;
    }
    
    if (result) {
        safeSetText(resultDiv, result);
        resultDiv.classList.remove('hidden');
    }
}

function updateLawType() {
    const lawType = document.getElementById('law-type')?.value;
    const container = document.getElementById('law-inputs-container');
    
    if (!container) return;
    
    if (!lawType) {
        container.classList.add('hidden');
        return;
    }
    container.classList.remove('hidden');

    let html = '';

    if (lawType === 'ohm') {
        html = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الفولت (V)' : 'Voltage (V)'}</label>
                <input id="v" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 220' : 'Example: 220'}" min="0.1" max="10000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الأمبير (I)' : 'Current (I)'}</label>
                <input id="i" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 5' : 'Example: 5'}" min="0.1" max="1000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'المقاومة (Ω)' : 'Resistance (Ω)'}</label>
                <input id="r" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 44' : 'Example: 44'}" min="0.1" max="1000000">
            </div>
        </div>
        <p class="text-xs text-gray-600 text-center mt-3">${currentLang === 'ar' ? 'أكتب قيمتين والبرنامج هيحسب الباقي' : 'Enter two values and the program will calculate the rest'}</p>`;
    }
    else if (lawType === 'power') {
        html = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'القدرة (W)' : 'Power (W)'}</label>
                <input id="p" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 1100' : 'Example: 1100'}" min="1" max="1000000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الفولت (V)' : 'Voltage (V)'}</label>
                <input id="v" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 220' : 'Example: 220'}" min="0.1" max="10000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الأمبير (I)' : 'Current (I)'}</label>
                <input id="i" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 5' : 'Example: 5'}" min="0.1" max="1000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'المقاومة (Ω)' : 'Resistance (Ω)'}</label>
                <input id="r" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 44' : 'Example: 44'}" min="0.1" max="1000000">
            </div>
        </div>
        <p class="text-xs text-gray-600 text-center mt-3">${currentLang === 'ar' ? 'أكتب قيمتين أو أكثر والبرنامج هيحسب الباقي' : 'Enter two or more values and the program will calculate the rest'}</p>`;
    }

    container.innerHTML = html;
}

// ==================== دالة calculateElectrical المعدلة ====================
function calculateElectrical() {
    const mode = document.getElementById('elec-mode')?.value;
    const resultDiv = document.getElementById('elec-result-div');
    const validationDiv = document.getElementById('elec-validation');

    if (!resultDiv || !validationDiv) return;

    if (mode === 'pow') {
        calculatePower();
        return;
    }

    if (mode === 'laws') {
        const lawType = document.getElementById('law-type')?.value;
        if (!lawType) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى اختيار نوع القانون أولاً' : 'Please choose law type first');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        const v = parseFloat(document.getElementById('v')?.value) || NaN;
        const i = parseFloat(document.getElementById('i')?.value) || NaN;
        const r = parseFloat(document.getElementById('r')?.value) || NaN;
        const p = parseFloat(document.getElementById('p')?.value) || NaN;

        // التحقق من النطاقات
        if (!isNaN(v) && (v < CONSTANTS.ELECTRICAL.MIN_VOLTAGE || v > CONSTANTS.ELECTRICAL.MAX_VOLTAGE)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `الجهد يجب أن يكون بين ${CONSTANTS.ELECTRICAL.MIN_VOLTAGE} و ${CONSTANTS.ELECTRICAL.MAX_VOLTAGE} فولت` 
                : `Voltage must be between ${CONSTANTS.ELECTRICAL.MIN_VOLTAGE} and ${CONSTANTS.ELECTRICAL.MAX_VOLTAGE} V`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (!isNaN(i) && (i < CONSTANTS.ELECTRICAL.MIN_CURRENT || i > CONSTANTS.ELECTRICAL.MAX_CURRENT)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `التيار يجب أن يكون بين ${CONSTANTS.ELECTRICAL.MIN_CURRENT} و ${CONSTANTS.ELECTRICAL.MAX_CURRENT} أمبير` 
                : `Current must be between ${CONSTANTS.ELECTRICAL.MIN_CURRENT} and ${CONSTANTS.ELECTRICAL.MAX_CURRENT} A`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (!isNaN(r) && (r < CONSTANTS.ELECTRICAL.MIN_RESISTANCE || r > CONSTANTS.ELECTRICAL.MAX_RESISTANCE)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `المقاومة يجب أن تكون بين ${CONSTANTS.ELECTRICAL.MIN_RESISTANCE} و ${CONSTANTS.ELECTRICAL.MAX_RESISTANCE} أوم` 
                : `Resistance must be between ${CONSTANTS.ELECTRICAL.MIN_RESISTANCE} and ${CONSTANTS.ELECTRICAL.MAX_RESISTANCE} Ω`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (!isNaN(p) && (p < CONSTANTS.ELECTRICAL.MIN_POWER || p > CONSTANTS.ELECTRICAL.MAX_POWER)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `القدرة يجب أن تكون بين ${CONSTANTS.ELECTRICAL.MIN_POWER} و ${CONSTANTS.ELECTRICAL.MAX_POWER} واط` 
                : `Power must be between ${CONSTANTS.ELECTRICAL.MIN_POWER} and ${CONSTANTS.ELECTRICAL.MAX_POWER} W`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        let results = [];

        if (lawType === 'ohm') {
            const filledCount = [v, i, r].filter(x => !isNaN(x)).length;

            if (filledCount === 3) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'كل القيم مدخلة بالفعل لا يمكن اجراء عملية حسابية بوجود كل القيم' : 'All values are already entered');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }
            if (filledCount < 2) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمتين على الأقل' : 'Please enter at least two values');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }

            if (!isNaN(v) && !isNaN(i) && isNaN(r)) results.push(`R = ${(v / i).toFixed(2)} Ω`);
            if (!isNaN(v) && !isNaN(r) && isNaN(i)) results.push(`I = ${(v / r).toFixed(3)} A`);
            if (!isNaN(i) && !isNaN(r) && isNaN(v)) results.push(`V = ${(i * r).toFixed(2)} V`);
        }
        else if (lawType === 'power') {
            const filledCount = [p, v, i, r].filter(x => !isNaN(x)).length;

            if (filledCount === 4) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'كل القيم مدخلة بالفعل لا يمكن اجراء عملية حسابية بوجود كل القيم' : 'All values are already entered');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }
            if (filledCount < 2) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمتين على الأقل' : 'Please enter at least two values');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }

            if (!isNaN(p) && !isNaN(v) && isNaN(i)) results.push(`I = ${(p / v).toFixed(3)} A`);
            if (!isNaN(p) && !isNaN(i) && isNaN(v)) results.push(`V = ${(p / i).toFixed(2)} V`);
            if (!isNaN(v) && !isNaN(i) && isNaN(p)) results.push(`P = ${(v * i).toFixed(1)} W`);
            if (!isNaN(v) && !isNaN(r) && isNaN(p)) results.push(`P = ${(v * v / r).toFixed(1)} W`);
            if (!isNaN(i) && !isNaN(r) && isNaN(p)) results.push(`P = ${(r * i * i).toFixed(1)} W`);
            if (!isNaN(p) && !isNaN(r) && isNaN(v)) results.push(`V = ${Math.sqrt(p * r).toFixed(2)} V`);
            if (!isNaN(p) && !isNaN(r) && isNaN(i)) results.push(`I = ${Math.sqrt(p / r).toFixed(3)} A`);
            if (!isNaN(p) && !isNaN(v) && isNaN(r)) results.push(`R = ${(v * v / p).toFixed(2)} Ω`);
        }

        validationDiv.classList.add('hidden');
        if (results.length > 0) {
            resultDiv.innerHTML = results.map(res => `<div class="mb-3 text-2xl">${res}</div>`).join('');
        }
        resultDiv.classList.remove('hidden');
        return;
    }

    let result = "";

    if (mode === 'cap') {
        const I = parseFloat(document.getElementById('e-amp')?.value);
        const V = parseFloat(document.getElementById('e-volt')?.value);
        const f = parseFloat(document.getElementById('e-freq')?.value) || 50;

        if (isNaN(I) || isNaN(V)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال التيار والجهد' : 'Please enter current and voltage');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        if (I < CONSTANTS.ELECTRICAL.MIN_CURRENT || I > CONSTANTS.ELECTRICAL.MAX_CURRENT) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `التيار يجب أن يكون بين ${CONSTANTS.ELECTRICAL.MIN_CURRENT} و ${CONSTANTS.ELECTRICAL.MAX_CURRENT} أمبير` 
                : `Current must be between ${CONSTANTS.ELECTRICAL.MIN_CURRENT} and ${CONSTANTS.ELECTRICAL.MAX_CURRENT} A`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (V < 1 || V > 1000) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'الجهد يجب أن يكون بين 1 و 1000 فولت' : 'Voltage must be between 1 and 1000 V');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        validationDiv.classList.add('hidden');
        const C = (I * 1000000) / (2 * Math.PI * f * V);
        result = `${C.toLocaleString('en-US', { maximumFractionDigits: 1 })} µF`;
    }
    else if (mode === 'amp') {
        const C = parseFloat(document.getElementById('e-cap')?.value);
        const V = parseFloat(document.getElementById('e-volt')?.value);
        const f = parseFloat(document.getElementById('e-freq')?.value) || 50;

        if (isNaN(C) || isNaN(V)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال سعة المكثف والجهد' : 'Please enter capacitor and voltage');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        if (C < CONSTANTS.ELECTRICAL.MIN_CAPACITOR || C > CONSTANTS.ELECTRICAL.MAX_CAPACITOR) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `سعة المكثف يجب أن تكون بين ${CONSTANTS.ELECTRICAL.MIN_CAPACITOR} و ${CONSTANTS.ELECTRICAL.MAX_CAPACITOR} ميكروفاراد` 
                : `Capacitor must be between ${CONSTANTS.ELECTRICAL.MIN_CAPACITOR} and ${CONSTANTS.ELECTRICAL.MAX_CAPACITOR} µF`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (V < 1 || V > 1000) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'الجهد يجب أن يكون بين 1 و 1000 فولت' : 'Voltage must be between 1 and 1000 V');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        validationDiv.classList.add('hidden');
        const I = (V * 2 * Math.PI * f * C) / 1000000;
        result = `${I.toLocaleString('en-US', { maximumFractionDigits: 2 })} A`;
    }

    if (result) {
        safeSetText(resultDiv, result);
        resultDiv.classList.remove('hidden');
    }
}

function calculateRoom() {
    const l = parseFloat(document.getElementById('room-l')?.value),
        w = parseFloat(document.getElementById('room-w')?.value),
        h = parseFloat(document.getElementById('room-h')?.value),
        s = parseFloat(document.getElementById('room-s')?.value);

    const validationDiv = document.getElementById('room-validation');
    const resultsDiv = document.getElementById('room-results-div');

    if (!validationDiv || !resultsDiv) return;

    if (isNaN(l) || isNaN(w) || isNaN(h)) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال أبعاد الغرفة (الطول، العرض، الارتفاع)' : 'Please enter room dimensions (length, width, height)');
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }

    if (l < CONSTANTS.ROOM.MIN_DIMENSION || l > CONSTANTS.ROOM.MAX_DIMENSION) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `الطول يجب أن يكون بين ${CONSTANTS.ROOM.MIN_DIMENSION} و ${CONSTANTS.ROOM.MAX_DIMENSION} متر` 
            : `Length must be between ${CONSTANTS.ROOM.MIN_DIMENSION} and ${CONSTANTS.ROOM.MAX_DIMENSION} m`);
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }
    if (w < CONSTANTS.ROOM.MIN_DIMENSION || w > CONSTANTS.ROOM.MAX_DIMENSION) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `العرض يجب أن يكون بين ${CONSTANTS.ROOM.MIN_DIMENSION} و ${CONSTANTS.ROOM.MAX_DIMENSION} متر` 
            : `Width must be between ${CONSTANTS.ROOM.MIN_DIMENSION} and ${CONSTANTS.ROOM.MAX_DIMENSION} m`);
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }
    if (h < CONSTANTS.ROOM.MIN_HEIGHT || h > CONSTANTS.ROOM.MAX_HEIGHT) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `الارتفاع يجب أن يكون بين ${CONSTANTS.ROOM.MIN_HEIGHT} و ${CONSTANTS.ROOM.MAX_HEIGHT} متر` 
            : `Height must be between ${CONSTANTS.ROOM.MIN_HEIGHT} and ${CONSTANTS.ROOM.MAX_HEIGHT} m`);
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }

    validationDiv.classList.add('hidden');

    const btu = (l * w * h) * s;
    const hpExact = btu / 8000;
    const tr = btu / 12000;

    let mHP = 1.5, mBTU = 12000, mTR = 1, mAmp = 6.5;
    if (hpExact <= 1.5) { mHP = 1.5; mBTU = 12000; mTR = 1; mAmp = 6.5; }
    else if (hpExact <= 2.25) { mHP = 2.25; mBTU = 18000; mTR = 1.5; mAmp = 9; }
    else if (hpExact <= 3.0) { mHP = 3; mBTU = 24000; mTR = 2; mAmp = 12; }
    else if (hpExact <= 4.0) { mHP = 4; mBTU = 32000; mTR = 2.6; mAmp = 16; }
    else { mHP = 5; mBTU = 40000; mTR = 3.3; mAmp = 20; }

    const roomResHp = document.getElementById('room-res-hp');
    const roomResBtu = document.getElementById('room-res-btu');
    const roomResTr = document.getElementById('room-res-tr');
    const roomResAmp = document.getElementById('room-res-amp');
    const roomMarketRes = document.getElementById('room-market-res');
    const marketTr = document.getElementById('market-tr');
    const marketBtu = document.getElementById('market-btu');
    const marketAmp = document.getElementById('market-amp');

    if (roomResHp) safeSetText(roomResHp, hpExact.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (roomResBtu) safeSetText(roomResBtu, Math.round(btu).toLocaleString('en-US'));
    if (roomResTr) safeSetText(roomResTr, tr.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (roomResAmp) safeSetText(roomResAmp, (hpExact * 4.2).toLocaleString('en-US', { maximumFractionDigits: 1 }));

    if (roomMarketRes) safeSetText(roomMarketRes, `${mHP} HP`);
    if (marketTr) safeSetText(marketTr, mTR.toLocaleString('en-US'));
    if (marketBtu) safeSetText(marketBtu, mBTU.toLocaleString('en-US'));
    if (marketAmp) safeSetText(marketAmp, mAmp.toLocaleString('en-US'));

    resultsDiv.classList.remove('hidden');
}

function calculateWire() {
    const amp = parseFloat(document.getElementById('wire-amp')?.value);
    const dist = parseFloat(document.getElementById('wire-dist')?.value);
    const rho = parseFloat(document.getElementById('wire-metal')?.value);
    const volt = parseFloat(document.getElementById('wire-phase')?.value);
    const resultDiv = document.getElementById('wire-result-div');
    const validationDiv = document.getElementById('wire-validation');
    
    if (!resultDiv || !validationDiv) return;
    
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isNaN(amp) || isNaN(dist)) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال الأمبير والمسافة' : 'Please enter current and distance');
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }

    if (amp < CONSTANTS.WIRE.MIN_CURRENT || amp > CONSTANTS.WIRE.MAX_CURRENT) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `الأمبير يجب أن يكون بين ${CONSTANTS.WIRE.MIN_CURRENT} و ${CONSTANTS.WIRE.MAX_CURRENT} A` 
            : `Current must be between ${CONSTANTS.WIRE.MIN_CURRENT} and ${CONSTANTS.WIRE.MAX_CURRENT} A`);
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }
    if (dist < CONSTANTS.WIRE.MIN_DISTANCE || dist > CONSTANTS.WIRE.MAX_DISTANCE) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `المسافة يجب أن تكون بين ${CONSTANTS.WIRE.MIN_DISTANCE} و ${CONSTANTS.WIRE.MAX_DISTANCE} متر` 
            : `Distance must be between ${CONSTANTS.WIRE.MIN_DISTANCE} and ${CONSTANTS.WIRE.MAX_DISTANCE} m`);
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }

    validationDiv.classList.add('hidden');
    const allowedDrop = volt * 0.03;
    const section_mm2 = (2 * dist * amp * rho) / allowedDrop;

    const diameter_mm = 2 * Math.sqrt(section_mm2 / Math.PI);

    const standards = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
    let suggested_mm2 = standards.find(s => s >= section_mm2) || Math.ceil(section_mm2);
    const suggested_dia = 2 * Math.sqrt(suggested_mm2 / Math.PI);

    const bgColor1 = isDarkMode ? 'bg-red-700' : 'bg-orange-500';
    const bgColor2 = isDarkMode ? 'from-red-900 to-red-800' : 'from-orange-950 to-orange-800';

    let resultHtml = `    
    <div class="space-y-4">    
        <div class="grid grid-cols-2 gap-3">    
            <div class="p-4 ${bgColor1} text-white rounded-xl text-center">    
                <div class="text-xs opacity-100 mb-1">${currentLang === 'ar' ? 'المقطع المحسوب' : 'Calculated area'}</div>    
                <div class="text-2xl font-bold num-font">${section_mm2.toFixed(2)}</div>    
                <div class="text-xs opacity-100">mm²</div>    
            </div>    
            <div class="p-4 ${bgColor1} text-white rounded-xl text-center">    
                <div class="text-xs opacity-100 mb-1">${currentLang === 'ar' ? 'القطر التقريبي' : 'Approx. diameter'}</div>    
                <div class="text-2xl font-bold num-font">${diameter_mm.toFixed(2)}</div>    
                <div class="text-xs opacity-100">mm</div>    
            </div>    
        </div>    

        <div class="p-5 bg-gradient-to-br ${bgColor2} text-white rounded-2xl text-center shadow-inner">    
            <div class="text-sm opacity-100 mb-2">${currentLang === 'ar' ? 'المقطع المقترح (القياسي الأقرب)' : 'Suggested (closest standard)'}</div>    
            <div class="text-3xl font-black num-font mb-1">${suggested_mm2}</div>    
            <div class="text-sm opacity-100">mm²</div>    
            <div class="text-xs opacity-100 mt-2">${currentLang === 'ar' ? 'قطر تقريبي ≈' : 'Approx. diameter ≈'} ${suggested_dia.toFixed(1)} mm</div>    
        </div>    
    </div>`;

    resultDiv.innerHTML = resultHtml;
    resultDiv.classList.remove('hidden');
}

function calculateFlow() {
    const unit = document.getElementById('flow-unit')?.value;
    const displacement = parseFloat(document.getElementById('flow-displacement')?.value);
    const rpm = parseFloat(document.getElementById('flow-rpm')?.value);
    const cylinders = Math.max(1, parseFloat(document.getElementById('flow-cylinders')?.value) || 1);
    const validationDiv = document.getElementById('flow-validation');
    const resultDiv = document.getElementById('flow-result-div');

    if (!validationDiv || !resultDiv) return;

    if (isNaN(displacement) || displacement <= 0) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة إزاحة صحيحة' : 'Please enter a valid displacement value');
        validationDiv.classList.remove('hidden');
        return;
    }
    if (isNaN(rpm) || rpm <= 0) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال عدد لفات صحيح (RPM)' : 'Please enter a valid RPM value');
        validationDiv.classList.remove('hidden');
        return;
    }
    validationDiv.classList.add('hidden');

    let dispInLiters = 0;
    switch (unit) {
        case 'm3': dispInLiters = displacement * 1000; break;
        case 'L': dispInLiters = displacement; break;
        case 'cm3': dispInLiters = displacement / 1000; break;
        case 'in3': dispInLiters = displacement * 0.016387064; break;
        case 'ft3': dispInLiters = displacement * 28.3168466; break;
        case 'galUS': dispInLiters = displacement * 3.785411784; break;
        default: dispInLiters = displacement;
    }

    const flowLmin = dispInLiters * rpm * cylinders;
    const flowM3h = flowLmin * 0.06;
    const flowCFM = flowLmin * 0.0353147;
    const flowGPM = flowLmin * 0.264172;

    const flowLminEl = document.getElementById('flow-lmin');
    const flowM3hEl = document.getElementById('flow-m3h');
    const flowCfmEl = document.getElementById('flow-cfm');
    const flowGpmEl = document.getElementById('flow-gpm');

    if (flowLminEl) safeSetText(flowLminEl, flowLmin.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (flowM3hEl) safeSetText(flowM3hEl, flowM3h.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (flowCfmEl) safeSetText(flowCfmEl, flowCFM.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (flowGpmEl) safeSetText(flowGpmEl, flowGPM.toLocaleString('en-US', { maximumFractionDigits: 2 }));

    resultDiv.classList.remove('hidden');
}

const refrigerantPressures = {
    'R22': { suction: '68-72', discharge: '225-250', stope: '58-62' },
    'R134a': { suction: '25-35', discharge: '130-150', stope: '20-25' },
    'R404a': { suction: '45-55', discharge: '240-280', stope: '40-45' },
    'R407c': { suction: '55-65', discharge: '250-300', stope: '50-55' },
    'R410a': { suction: '120-130', discharge: '350-400', stope: '110-115' },
    'R32': { suction: '115-125', discharge: '340-380', stope: '105-110' },
    'R600a': { suction: '5-10', discharge: '70-90', stope: '3-7' },
    'R290': { suction: '45-55', discharge: '200-240', stope: '40-45' }
};

function renderPressureTable() {
    let tableHtml = `
<div class="mt-8">
    <h4 class="font-bold text-xl mb-4 text-center text-blue-700" data-lang="pressureTable">${translations[currentLang].pressureTable}</h4>
    <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse min-w-[600px]">
            <thead>
                <tr class="bg-blue-600 text-white">
                    <th class="p-3 text-center w-1/4" data-lang="refrigerant">${translations[currentLang].refrigerant}</th>
                    <th class="p-3 text-center w-1/4" data-lang="suction">${translations[currentLang].suction}</th>
                    <th class="p-3 text-center w-1/4" data-lang="discharge">${translations[currentLang].discharge}</th>
                    <th class="p-3 text-center w-1/4" data-lang="stope">${translations[currentLang].stope}</th>
                </tr>
            </thead>
            <tbody>
`;

    const refrigerants = ['R410a', 'R404a', 'R407c', 'R290', 'R32', 'R600a', 'R134a', 'R22'];

    refrigerants.forEach((ref, index) => {
        const data = refrigerantPressures[ref] || { suction: '—', discharge: '—', stope: '—' };
        const bgColor = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
        tableHtml += `
        <tr class="${bgColor} border-b">
            <td class="p-3 font-bold text-center">${ref}</td>
            <td class="p-3 text-center">${data.suction}</td>
            <td class="p-3 text-center">${data.discharge}</td>
            <td class="p-3 text-center">${data.stope}</td>
        </tr>
    `;
    });

    tableHtml += `
            </tbody>
        </table>
    </div>
    <p class="text-xs text-gray-500 mt-2 text-center" data-lang="pressureNote">${translations[currentLang].pressureNote}</p>
</div>
`;

    return tableHtml;
}

function populateCompressorList() {
    console.log('جاري ملء قائمة الضواغط...');
    const datalist = document.getElementById('comp-list');
    if (!datalist) {
        console.error('❌ لم يتم العثور على عنصر comp-list');
        return;
    }

    datalist.innerHTML = '';


    const models = Object.keys(compressorsData);
    console.log(`✅ تم العثور على ${models.length} ضاغط في ملف البيانات`);

    models.slice(0, 100).forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        datalist.appendChild(option);
    });
}

// ==================== نظام الذكاء الاصطناعي المتعدد ====================
// نماذج AI مدعومة (بدون مفاتيح - المفاتيح في PHP)
const AI_MODELS = [
    {
        name: 'Gemini',
        provider: 'Google',
        active: true
    },
    {
        name: 'ChatGPT',
        provider: 'OpenAI',
        active: false
    },
    {
        name: 'Grok',
        provider: 'xAI',
        active: false
    },
    {
        name: 'DeepSeek',
        provider: '深度求索',
        active: false
    }
];

// إحصائيات استخدام النماذج
const modelStats = {
    attempts: {},
    successes: {},
    failures: {},
    lastUsed: {}
};

// ==================== دالة مساعدة لاستخراج الحقول من النص (مُحسنة) ====================
function extractField(text, ...possibleNames) {
    // تنظيف النص من الأحرف الزائدة
    const cleanText = text.replace(/[\\"]/g, ' ').replace(/\s+/g, ' ');
    
    for (const name of possibleNames) {
        // نمط واحد متكامل للبحث
        const patterns = [
            // JSON pattern
            new RegExp(`["']${name}["']\\s*[:=]\\s*["']([^"']+)["']`, 'i'),
            new RegExp(`["']${name}["']\\s*[:=]\\s*([^,\\n}\\r]+)`, 'i'),
            // Text patterns
            new RegExp(`${name}[\\s\\n]*[:=][\\s\\n]*([^\\n\\r]+)`, 'i'),
            new RegExp(`${name}\\s+(?:هو|is|:)\\s+([^\\n\\r]+)`, 'i'),
            // Arabic patterns
            new RegExp(`(?:الشركة المصنعة|الصانع|manufacturer)[\\s\\n]*[:=]\\s*([^\\n\\r]+)`, 'i'),
            new RegExp(`(?:الحصان|hp|horsepower)[\\s\\n]*[:=]\\s*([\\d.]+)`, 'i')
        ];
        
        for (const pattern of patterns) {
            const match = cleanText.match(pattern);
            if (match && match[1]) {
                return match[1].trim().replace(/[",]$/, '');
            }
        }
    }
    return "--";
}

// ==================== دالة عرض موحدة للبيانات (محل التكرار) ====================
function displayCompressorData(model, data, source = 'local') {
    const resultDiv = document.getElementById('comp-result-div');
    if (!resultDiv) return;
    
    const displayValue = (value) => (value && value !== '—' && value !== '--') ? value : '—';
    const displacementUnitText = currentLang === 'ar' ? 'سم³/دورة' : 'cc/rev';
    const lang = currentLang;

    // حساب نسبة نجاح النموذج (لنتائج AI فقط)
    let successRateHtml = '';
    if (source !== 'local' && modelStats.successes[source]) {
        const attempts = modelStats.attempts[source] || 1;
        const successes = modelStats.successes[source] || 0;
        const successRate = Math.round((successes / attempts) * 100);
        successRateHtml = `
            <span class="text-xs bg-gray-200 px-3 py-1 rounded-full">
                ${successRate}% ${lang === 'ar' ? 'دقة' : 'accuracy'}
            </span>
        `;
    }

    // رأس النتيجة
    let headerHtml = '';
    if (source !== 'local') {
        headerHtml = `
        <div class="flex justify-between items-center mb-4">
            <span class="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                <i class="fas fa-robot ml-1"></i> 
                ${lang === 'ar' ? translations.ar.aiSuccessWith : translations.en.aiSuccessWith} ${source}
            </span>
            ${successRateHtml}
        </div>
        `;
    }

    let html = `
    <div class="bg-gradient-to-br ${source !== 'local' ? 'from-purple-50 to-blue-50 border-purple-200' : 'bg-white border-blue-100'} p-6 rounded-3xl shadow-lg border-2 max-w-4xl mx-auto">
        ${headerHtml}

        <!-- Header -->
        <div class="text-center mb-6">
            <div class="inline-block bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm mb-3">
                ${displayValue(data.application)} ${data.compressorType && data.compressorType !== '--' ? `- ${data.compressorType}` : ''}
            </div>
            <div class="text-4xl font-black text-gray-600">${model}</div>
            <div class="text-2xl text-blue-800">
                ${displayValue(data.manufacturer)}<br>
                ${data.brand && data.brand !== '--' ? `<span class="block text-lg text-gray-500">${data.brand}</span>` : ''}
            </div>
        </div>

        <!-- شبكة البيانات -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <!-- 1. Horsepower -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الحصان (HP)' : 'Horsepower (HP)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.hp)}</div>
            </div>

            <!-- 2. Power (W) -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'القدرة (W)' : 'Power (W)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.powerW)}</div>
            </div>

            <!-- 3. Refrigerant -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الفريون' : 'Refrigerant'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.refrigerant)}</div>
            </div>

            <!-- 4. Voltage -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الجهد' : 'Voltage'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.voltage)}</div>
            </div>

            <!-- 5. Compressor Type -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'نوع الضاغط' : 'Compressor Type'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.compressorType)}</div>
            </div>

            <!-- 6. Climate Class -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الفئة المناخية' : 'Climate Class'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.climateClass)}</div>
            </div>

            <!-- 7. Start Amp (LRA) -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'أمبير البدء (LRA)' : 'Start Amp (LRA)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.startAmp || data.lra)}</div>
            </div>

            <!-- 8. Run Amp (RLA) -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'أمبير التشغيل (RLA)' : 'Run Amp (RLA)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.runAmp || data.rla)}</div>
            </div>

            <!-- 9. Displacement -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] md:col-span-2 shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الإزاحة' : 'Displacement'}</div>
                <div class="text-3xl font-bold text-blue-800">
                    ${displayValue(data.displacement)} ${data.displacement && data.displacement !== '—' && data.displacement !== '--' ? displacementUnitText : ''}
                </div>
            </div>

            <!-- 10. Oil -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] md:col-span-2 shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الزيت' : 'Oil'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.oilType)} ${data.oilQuantity && data.oilQuantity !== '--' ? '- ' + data.oilQuantity : ''}</div>
            </div>

            <!-- 11. Suction Press -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'ضغط السحب' : 'Suction Press'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.suctionPressure)}</div>
            </div>

            <!-- 12. Discharge Press -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'ضغط الطرد' : 'Discharge Press'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.dischargePressure)}</div>
            </div>

            <!-- 13. Stope Press -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'ضغط التوقف' : 'Stope Press'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.stopePressure)}</div>
            </div>

            <!-- 14. Run Capacitor -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'مكثف التشغيل' : 'Run Capacitor'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.capacitorRun)}</div>
            </div>

            <!-- 15. Start Capacitor -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'مكثف البدء' : 'Start Capacitor'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.capacitorStart)}</div>
            </div>

            <!-- 16. Capillary Tube -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'أنبوبة شعرية' : 'Capillary Tube'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.capillaryTube)}</div>
            </div>

            <!-- 17. Notes -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center border border-gray-200 flex flex-col min-h-[120px] justify-center md:col-span-4 shadow-sm">
                <div class="font-bold text-lg mb-3 text-gray-600">${lang === 'ar' ? 'ملاحظات:' : 'Notes:'}</div>
                <div class="text-blue-800 leading-relaxed">${displayValue(data.notes)}</div>
            </div>
            
        </div>`;

    // إضافة إحصائيات النماذج لنتائج AI
    if (source !== 'local' && Object.keys(modelStats.successes).length > 0) {
        html += `
        <!-- إحصائيات النماذج -->
        <div class="mt-6 p-4 bg-gray-50 rounded-2xl">
            <p class="text-sm font-bold text-gray-600 mb-2">📊 ${lang === 'ar' ? 'إحصائيات النماذج' : 'Model Statistics'}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                ${Object.entries(modelStats.successes).map(([name, count]) => {
                    const attempts = modelStats.attempts[name] || 1;
                    const rate = Math.round((count / attempts) * 100);
                    return `
                        <div class="bg-white p-2 rounded-lg text-center">
                            <span class="font-bold">${name}</span><br>
                            <span class="text-green-600">${rate}%</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- تنبيه -->
        <div class="mt-4 text-center text-sm text-gray-500">
            <i class="fas fa-info-circle ml-1"></i>
            ${lang === 'ar' ? 'نتيجة من ' + source + ' - قد تحتاج للتحقق' : 'Result from ' + source + ' - may need verification'}
        </div>`;
    }

    html += `
    </div>
    ${renderPressureTable()}`;

    resultDiv.innerHTML = html;
    resultDiv.classList.remove('hidden');
}

// ==================== دالة البحث المتعدد الذكية (مُحسنة) ====================
async function searchWithMultipleAI(compressorModel) {
    const lang = currentLang;
    const resultDiv = document.getElementById('comp-result-div');
    if (!resultDiv) return false;
    
    // بناء الـ prompt
    const prompt = lang === 'ar' 
        ? `أنت خبير ضواغط التبريد. أعطني معلومات دقيقة للضاغط "${compressorModel}" بصيغة JSON فقط. لا تكتب أي كلام خارج JSON.

{
  "manufacturer": "الشركة المصنعة (مثلاً: Tecumseh, Embraco, Copeland)",
  "brand": "العلامة التجارية (اختياري)",
  "hp": "الحصان (رقم فقط)",
  "powerW": "القدرة بالواط (رقم فقط)",
  "refrigerant": "نوع الفريون (مثلاً: R134a, R600a, R404a)",
  "voltage": "الجهد الكهربائي (مثلاً: 220-240V)",
  "compressorType": "نوع الضاغط (reciprocating/rotary/scroll/screw /inverter or not inverter)",
  "climateClass": "الفئة المناخية (مثلاً: T, ST, N)",
  "startAmp": "أمبير البدء LRA",
  "runAmp": "أمبير التشغيل RLA",
  "displacement": "الإزاحة (cc/rev)",
  "oilType": "نوع الزيت (مثلاً: POE, Mineral)",
  "oilQuantity": "كمية الزيت (مثلاً: 400ml)",
  "suctionPressure": "ضغط السحب (psi)",
  "dischargePressure": "ضغط الطرد (psi)",
  "stopePressure": "ضغط التوقف (psi)",
  "capacitorRun": "مكثف التشغيل (مثلاً: 35µF)",
  "capacitorStart": "مكثف البدء (مثلاً: 150µF)",
  "capillaryTube": "الأنبوبة الشعرية (مثلاً: 0.8mm x 3m)",
  "application": "التطبيق (مثلاً: Refrigerator, Freezer, AC)",
  "notes": "ملاحظات إضافية"
}

أي قيمة غير متوفرة استخدم "--". JSON فقط ولا شيء آخر.`
        : `You are a refrigeration compressor expert. Give me accurate information for "${compressorModel}" in JSON format only. Do not write anything outside the JSON.

{
  "manufacturer": "Manufacturer name (e.g., Tecumseh, Embraco, Copeland)",
  "brand": "Brand name (optional)",
  "hp": "Horsepower (number only)",
  "powerW": "Power in Watts (number only)",
  "refrigerant": "Refrigerant type (e.g., R134a, R600a, R404a)",
  "voltage": "Voltage (e.g., 220-240V)",
  "compressorType": "Type (reciprocating/rotary/scroll/screw/inverter or not inverter)",
  "climateClass": "Climate class (e.g., T, ST, N)",
  "startAmp": "Start Amp LRA",
  "runAmp": "Run Amp RLA",
  "displacement": "Displacement (cc/rev)",
  "oilType": "Oil type (e.g., POE, Mineral)",
  "oilQuantity": "Oil quantity (e.g., 400ml)",
  "suctionPressure": "Suction pressure (psi)",
  "dischargePressure": "Discharge pressure (psi)",
  "stopePressure": "Stope pressure (psi)",
  "capacitorRun": "Run capacitor (e.g., 35µF)",
  "capacitorStart": "Start capacitor (e.g., 150µF)",
  "capillaryTube": "Capillary tube (e.g., 0.8mm x 3m)",
  "application": "Application (e.g., Refrigerator, Freezer, AC)",
  "notes": "Additional notes"
}

Use "--" for missing values. Return JSON only.`;

    // ترتيب النماذج حسب النجاح السابق
    const sortedModels = [...AI_MODELS]
        .filter(m => m.active)
        .sort((a, b) => {
            const successA = modelStats.successes[a.name] || 0;
            const successB = modelStats.successes[b.name] || 0;
            return successB - successA;
        });

    if (sortedModels.length === 0) {
        console.warn('⚠️ لا توجد نماذج AI نشطة');
        return false;
    }

    let attempts = 0;

    // تجربة كل نموذج بالترتيب
    for (const model of sortedModels) {
        attempts++;
        
        // تحديث واجهة المستخدم
        resultDiv.innerHTML = `
            <div class="p-8 bg-purple-50 text-purple-600 rounded-3xl text-center font-bold">
                <i class="fas fa-robot fa-spin text-3xl mb-3"></i><br>
                ${lang === 'ar' ? translations.ar.aiTryingModel : translations.en.aiTryingModel} 
                <span class="bg-purple-200 px-3 py-1 rounded-full">${model.name}</span><br>
                <span class="text-sm text-gray-500">(${attempts}/${sortedModels.length})</span>
            </div>
        `;

        try {
            console.log(`🔄 محاولة استخدام ${model.name}...`);
            
            // تحديث الإحصائيات
            modelStats.attempts[model.name] = (modelStats.attempts[model.name] || 0) + 1;
            modelStats.lastUsed[model.name] = new Date().toISOString();
            
            // استدعاء PHP Proxy
            const response = await fetch(getProxyUrl() + '&provider=' + model.name.toLowerCase(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            
            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Unknown error');
            }
            
            // معالجة الرد
            let jsonData = null;
            let responseText = result.response;
            
            console.log('📥 الرد الخام:', responseText);
            
            // محاولة استخراج JSON
            try {
                // محاولة 1: البحث عن أول { وآخر }
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    jsonData = JSON.parse(jsonMatch[0]);
                } else {
                    // محاولة 2: لو النص كله هو JSON
                    jsonData = JSON.parse(responseText);
                }
            } catch (e) {
                console.log('❌ فشل parsing JSON، بنحاول استخراج الحقول');
                
                // محاولة استخراج الحقول الأساسية
                jsonData = {
                    manufacturer: extractField(responseText, 'manufacturer', 'الشركة المصنعة', 'الصانع'),
                    brand: extractField(responseText, 'brand', 'العلامة التجارية'),
                    hp: extractField(responseText, 'hp', 'الحصان', 'horsepower'),
                    powerW: extractField(responseText, 'powerW', 'power', 'القدرة', 'الواط'),
                    refrigerant: extractField(responseText, 'refrigerant', 'الفريون', 'refrigerant'),
                    voltage: extractField(responseText, 'voltage', 'الجهد', 'voltage'),
                    compressorType: extractField(responseText, 'compressorType', 'نوع الضاغط', 'type'),
                    climateClass: extractField(responseText, 'climateClass', 'الفئة المناخية'),
                    startAmp: extractField(responseText, 'startAmp', 'أمبير البدء', 'lra'),
                    runAmp: extractField(responseText, 'runAmp', 'أمبير التشغيل', 'rla'),
                    displacement: extractField(responseText, 'displacement', 'الإزاحة'),
                    oilType: extractField(responseText, 'oilType', 'نوع الزيت'),
                    oilQuantity: extractField(responseText, 'oilQuantity', 'كمية الزيت'),
                    suctionPressure: extractField(responseText, 'suctionPressure', 'ضغط السحب'),
                    dischargePressure: extractField(responseText, 'dischargePressure', 'ضغط الطرد'),
                    stopePressure: extractField(responseText, 'stopePressure', 'ضغط التوقف'),
                    capacitorRun: extractField(responseText, 'capacitorRun', 'مكثف التشغيل'),
                    capacitorStart: extractField(responseText, 'capacitorStart', 'مكثف البدء'),
                    capillaryTube: extractField(responseText, 'capillaryTube', 'الأنبوبة الشعرية'),
                    application: extractField(responseText, 'application', 'التطبيق'),
                    notes: extractField(responseText, 'notes', 'ملاحظات') || responseText.substring(0, 200)
                };
            }
            
            if (!jsonData) {
                throw new Error('Could not parse response');
            }
            
            // تسجيل النجاح
            modelStats.successes[model.name] = (modelStats.successes[model.name] || 0) + 1;
            
            // عرض النتيجة باستخدام الدالة الموحدة
            displayCompressorData(compressorModel, jsonData, model.name);
            
            console.log(`✅ نجاح باستخدام ${model.name}`);
            return true;
            
        } catch (error) {
            console.warn(`❌ فشل ${model.name}:`, error.message);
            modelStats.failures[model.name] = (modelStats.failures[model.name] || 0) + 1;
            continue;
        }
    }

    return false;
}

// ==================== دالة عرض البيانات المحلية (تستخدم الدالة الموحدة) ====================
function displayLocalCompressor(model, d) {
    displayCompressorData(model, d, 'local');
}

// ==================== دالة البحث الرئيسية (مُحسنة) ====================
async function searchCompressor() {
    const input = document.getElementById('comp-input')?.value.trim();
    const resultDiv = document.getElementById('comp-result-div');
    const lang = currentLang;

    if (!input || !resultDiv) {
        if (!input) alert(lang === 'ar' ? '❌ يرجى كتابة موديل الضاغط' : '❌ Please enter compressor model');
        return;
    }

    // عرض رسالة البحث
    resultDiv.innerHTML = `
        <div class="p-8 bg-blue-50 text-blue-600 rounded-3xl text-center font-bold">
            <i class="fas fa-spinner fa-spin text-3xl mb-3"></i><br>
            ${lang === 'ar' ? 'جاري البحث عن معلومات الضاغط...' : 'Searching for compressor information...'}
        </div>
    `;
    resultDiv.classList.remove('hidden');

    // البحث في البيانات المحلية أولاً
    if (typeof compressorsData !== 'undefined') {
        let foundModel = null;
        let d = null;

        if (compressorsData[input]) {
            foundModel = input;
            d = compressorsData[input];
        } else {
            for (let key in compressorsData) {
                if (key.toLowerCase().includes(input.toLowerCase())) {
                    foundModel = key;
                    d = compressorsData[key];
                    break;
                }
            }
        }

        if (d) {
            displayLocalCompressor(foundModel, d);
            return;
        }
    }

    // عرض رسالة البحث المتعدد
    const activeModels = AI_MODELS.filter(m => m.active).map(m => m.name).join(' → ');
    resultDiv.innerHTML = `
        <div class="p-8 bg-purple-50 text-purple-600 rounded-3xl text-center font-bold">
            <i class="fas fa-robot fa-spin text-3xl mb-3"></i><br>
            ${lang === 'ar' ? translations.ar.aiMultipleSearch : translations.en.aiMultipleSearch}<br>
            <span class="text-sm text-gray-500">
                ${activeModels || 'Gemini فقط متاح حالياً'}
            </span>
        </div>
    `;

    // تجربة النماذج المتعددة
    const success = await searchWithMultipleAI(input);
    
    if (!success) {
        resultDiv.innerHTML = `
            <div class="p-8 bg-red-50 text-red-600 rounded-3xl text-center font-bold">
                <i class="fas fa-exclamation-circle text-4xl mb-3"></i><br>
                ${lang === 'ar' ? translations.ar.aiAllFailed : translations.en.aiAllFailed}<br>
                <span class="text-sm block mt-2">
                    ${lang === 'ar' ? translations.ar.aiTryManual : translations.en.aiTryManual}
                </span>
            </div>
        `;
    }
}

// ==================== دوال مساعدة للنسخ ====================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg z-50 animate-fade-in-up';
        toast.textContent = currentLang === 'ar' ? translations.ar.copied : translations.en.copied;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }).catch(() => {
        alert(currentLang === 'ar' ? 'فشل النسخ' : 'Copy failed');
    });
}

// ==================== دالة لإضافة مفتاح API جديد ====================
function updateModelAPI(modelName, newApiKey) {
    console.log('⚠️ المفاتيح الآن في ملف proxy.php وليس في JavaScript');
    return false;
}

// ==================== دالة لعرض حالة النماذج ====================
function showModelsStatus() {
    console.log('📊 حالة نماذج الذكاء الاصطناعي:');
    AI_MODELS.forEach(model => {
        const attempts = modelStats.attempts[model.name] || 0;
        const successes = modelStats.successes[model.name] || 0;
        const rate = attempts > 0 ? Math.round((successes / attempts) * 100) : 0;
        console.log(`${model.name}: ${model.active ? '🟢 نشط' : '🔴 غير نشط'} (نسبة نجاح: ${rate}%)`);
    });
}

// ==================== دالة تشخيص الاتصال بالـ Proxy ====================
async function diagnoseProxy() {
    try {
        console.log('🔍 فحص الاتصال بالـ proxy...');
        const response = await fetch(getProxyUrl() + '?test=1');
        const data = await response.json();
        console.log('✅ Proxy متصل:', data);
        return true;
    } catch (e) {
        console.error('❌ فشل الاتصال بالـ proxy:', e);
        return false;
    }
}

// ==================== تهيئة الصفحة بعد تحميل كل العناصر ====================
function initializeApp() {
    console.log("🔥 تهيئة التطبيق...");
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.add('no-transition');
    }
    
    applyLanguage(currentLang);
    resetElecFields();
    updateSensorConstants();
    populateCompressorList();
    updateNightModeText();
    
    // تحديث اتجاه الأسهم - تأكيد إضافي
    setTimeout(() => {
        updateArrowsDirection();
    }, 100);
    
    setTimeout(() => {
        if (sidebar) {
            sidebar.classList.remove('no-transition');
        }
    }, 150);
    
    console.log("✅ تم تهيئة التطبيق بنجاح!");
}

window.addEventListener('load', function() {
    setTimeout(initializeApp, 100);
    setTimeout(diagnoseProxy, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 DOM جاهز، بنربط الأحداث...");
    
    const langToggle = document.getElementById('langToggleSidebar');
    if (langToggle) {
        langToggle.onclick = function(e) {
            e.preventDefault();
            console.log("🌐 تم الضغط على زر اللغة");
            toggleLanguage();
            return false;
        };
    }
    
    const themeToggle = document.getElementById('themeToggleSidebar');
    if (themeToggle) {
        themeToggle.onclick = function(e) {
            e.preventDefault();
            console.log("🌙/☀️ تم الضغط على زر الوضع الليلي");
            toggleDarkMode();
            return false;
        };
    }
});

// ربط الدوال بالنطاق العام
window.toggleDarkMode = toggleDarkMode;
window.toggleLanguage = toggleLanguage;
window.toggleSidebar = toggleSidebar;
window.calculateRoom = calculateRoom;
window.searchCompressor = searchCompressor;
window.setPowerMode = setPowerMode;
window.calculatePower = calculatePower;
window.calculateElectrical = calculateElectrical;
window.calculateTemperature = calculateTemperature;
window.calculateWire = calculateWire;
window.calculateFlow = calculateFlow;
window.openUnitConverter = openUnitConverter;
window.convertNow = convertNow;
window.swapConverterUnits = swapConverterUnits;
window.swapTempMode = swapTempMode;
window.updateSensorConstants = updateSensorConstants;
window.updateLawType = updateLawType;
window.openWireCalc = openWireCalc;
window.closeWireModal = closeWireModal;
window.openFlowCalculator = openFlowCalculator;
window.closeFlowModal = closeFlowModal;
window.closeModal = closeModal;
window.updateModelAPI = updateModelAPI;
window.showModelsStatus = showModelsStatus;
window.diagnoseProxy = diagnoseProxy;
window.updateArrowsDirection = updateArrowsDirection;
window.copyToClipboard = copyToClipboard;
    
            wattsToHP: "واط → حصان",
        hpToWatts: "حصان → واط",
        conversionNote: "1 حصان = 745.7 واط",
        defaultFreq: "افتراضي: 50 هرتز",
        compPlaceholder: "موديل الضاغط (مثال: ZR12K3)",
        wireAmpPlaceholder: "أمبير (A)",
        wireDistPlaceholder: "مسافة (م)",
        dispPlaceholder: "أدخل الإزاحة",
        rpmPlaceholder: "مثال: 1450",
        
        // نصوص الذكاء الاصطناعي
        aiSearch: "بحث بالذكاء الاصطناعي",
        aiSearching: "جاري البحث في قاعدة البيانات الذكية...",
        aiMultipleSearch: "جاري البحث في نماذج الذكاء الاصطناعي المتعددة...",
        aiTryingModel: "جارى البحث ",
        aiAllFailed: " فشل البرنامج في العثور على معلومات الضاغط على الويب و لا يتوفر فى قاعدة بيانات الموديلات الان ",
        aiSuccessWith: "تم العثور على المعلومات باستخدام: ",
        aiRateLimit: "تم تجاوز حد الاستخدام، جاري تجربة نموذج آخر...",
        aiModelsAvailable: "النماذج المتاحة: ",
        aiNotFound: "لم يتم العثور في قاعدة البيانات المحلية، جاري البحث بالذكاء الاصطناعي...",
        aiError: "حدث خطأ في الاتصال بالذكاء الاصطناعي",
        aiTryManual: "أو تأكد من كتابة الموديل بشكل صحيح",
        copyResult: "نسخ النتيجة",
        copied: "تم النسخ!"
    },
    en: {
        headerTitle: "Cooling Tools Pro",
        menuTitle: "Menu",
        nightMode: "Night",
        dayMode: "Day",
        connections: "CONNECTIONS",
        wireCalc: "Wire Gauge Calc",
        flowCalc: "Flow from Displacement",
        conversions: "CONVERSIONS",
        coolingUnits: "Cooling Units",
        lengthUnits: "Length Units",
        massUnits: "Mass Units",
        areaUnits: "Area Units",
        pressureUnits: "Pressure Units",
        volumeUnits: "Volume Units",
        tempUnits: "Temperature Units",
        voltUnits: "Voltage Units",
        ampUnits: "Current Units",
        wattUnits: "Power Units",
        faradUnits: "Capacitance Units",
        henryUnits: "Inductance Units",
        tabTemp: "Temperature",
        tabElec: "Electrical",
        tabRoom: "Room",
        tabComp: "Compressor",
        sensorCalc: " NTC Sensor",
        tempModeRT: "Resistance Ω → Temperature°C",
        tempModeTR: "Temperature °C → Resistance Ω",
        sensor10k: "10KΩ Sensor (Room and Indoor Coil)",
        sensor5k: "5KΩ Sensor (Outdoor Coil)",
        sensor200k: "200KΩ Sensor (Discharge Compressor)",
        sensorCustom: "Custom",
        r0: "R0",
        beta: "Beta",
        calcBtn: "Calculate",
        elecCalc: " Electrical Laws",
        elecLaws: "Electrical Laws",
        elecCap: "Capacitor (µF)",
        elecAmp: "Capacitor Current (A)",
        elecPow: "Power (Watts)",
        roomCalc: " AC Calculator",
        length: "Length",
        width: "Width",
        height: "Height",
        roomNormal: "Normal Room (250)",
        roomSunny: "Sunny Room (300)",
        roomKitchen: "Kitchen/Glass (350)",
        roomHighLoad: "Very high thermal load (400)",
        calcCapacity: "Calculate Capacity",
        actualHp: "Actual HP",
        coolingTon: "Cooling Ton",
        totalBtu: "Total BTU",
        expectedAmp: "Expected Amp",
        marketCapacity: "Market Capacity",
        ton: "Ton",
        btu: "BTU",
        amp: "Amp",
        compInfo: " Compressor Info",
        showCompInfo: "Show Compressor Info",
        convTitle: "Unit Converter",
        convertBtn: "Convert",
        closeBtn: "Close",
        flowTitle: "Flow from Displacement",
        flowSub: "Calculate flow rate for compressors & pumps",
        dispUnit: "Displacement unit:",
        m3: "Cubic meter (m³)",
        L: "Liter (L)",
        cm3: "Cubic cm (cm³)",
        in3: "Cubic inch (in³)",
        ft3: "Cubic foot (ft³)",
        galUS: "Gallon (US)",
        dispPerCycle: "Displacement per cycle:",
        rpm: "Revolutions per minute (RPM):",
        cylinders: "Cylinders (optional):",
        calcFlow: " Calculate Flow",
        flowRate: "Flow Rate:",
        lmin: "Liter/min",
        m3h: "m³/h",
        cfm: "CFM",
        gpm: "GPM",
        flowNote: "* For piston compressors: displacement × RPM × cylinders",
        wireTitle: "Wire Gauge Calculator",
        copper: "Copper",
        aluminum: "Aluminum",
        singlePhase: "Single Phase (220V)",
        threePhase: "Three Phase (380V)",
        calcWire: "Calculate",
        madeBy: "MADE BY",
        developerName: "Seif El Din Rehan",
        pressureTable: "Refrigerant Pressure Table (PSI)",
        refrigerant: "Refrigerant",
        suction: "Suction Pressure",
        discharge: "Discharge Pressure",
        stope: "Stope Pressure",
        pressureNote: "* Values are approximate and vary by operating conditions",
        lawLabel: "Choose law type:",
        lawOptionChoose: "-- Choose --",
        lawOptionOhm: "Ohm's Law (V, I, R)",
        lawOptionPower: "Power Law (P, V, I, R)",
        powerConvert: "Power Conversion",
        enterWatts: "Enter Watts (W)",
        enterHP: "Enter Horsepower (HP)",
        wattsToHP: "Watts → HP",
        hpToWatts: "HP → Watts",
        conversionNote: "1 HP = 745.7 Watts",
        defaultFreq: "Default: 50 Hz",
        compPlaceholder: "Compressor model (e.g. ZR12K3)",
        wireAmpPlaceholder: "Current (A)",
        wireDistPlaceholder: "Distance (m)",
        dispPlaceholder: "Enter displacement",
        rpmPlaceholder: "Example: 1450",
        
        // AI texts
        aiSearch: "AI Search",
        aiSearching: "Searching in AI database...",
        aiMultipleSearch: "Searching multiple AI models...",
        aiTryingModel: "Searching ",
        aiAllFailed: "The program failed to find the compressor information on the web, and it is not available in the model database now",
        aiSuccessWith: "Information found using: ",
        aiRateLimit: "Rate limit exceeded, trying another model...",
        aiModelsAvailable: "Available models: ",
        aiNotFound: "Not found in local database, searching with AI...",
        aiError: "Error connecting to AI",
        aiTryManual: "Or make sure the model is written correctly",
        copyResult: "Copy result",
        copied: "Copied!"
    }
};
const CONSTANTS = {
    TEMP: {
        MIN_CELSIUS: -100,
        MAX_CELSIUS: 250,
        MIN_RESISTANCE: 10,
        MAX_RESISTANCE: 10000000
    },
    ELECTRICAL: {
        MIN_VOLTAGE: 0.1,
        MAX_VOLTAGE: 10000,
        MIN_CURRENT: 0.1,
        MAX_CURRENT: 1000,
        MIN_RESISTANCE: 0.1,
        MAX_RESISTANCE: 1000000,
        MIN_POWER: 1,
        MAX_POWER: 1000000,
        MIN_CAPACITOR: 0.1,
        MAX_CAPACITOR: 10000
    },
    ROOM: {
        MIN_DIMENSION: 1,
        MAX_DIMENSION: 100,
        MIN_HEIGHT: 1,
        MAX_HEIGHT: 50
    },
    WIRE: {
        MIN_CURRENT: 0.1,
        MAX_CURRENT: 1000,
        MIN_DISTANCE: 1,
        MAX_DISTANCE: 1000
    }
};

let currentLang = localStorage.getItem('preferredLang') || 'ar';
let currentConvCategory = '';
let lastResult = '';
let lastResultType = 'watt';
let unitsData = {};
let pendingAnimationFrame = null;

// ==================== إعدادات الاتصال ====================
const API_CONFIG = {
    baseUrl: window.location.origin,
    proxyPath: '/proxy.php'
};

// دالة مساعدة للحصول على رابط proxy الكامل
function getProxyUrl() {
    return API_CONFIG.baseUrl + API_CONFIG.proxyPath + '?key=123456';
}

// ==================== دالة تحديث اتجاهات الأسهم (معتمدة على CSS) ====================
function updateArrowsDirection() {
    // نترك التحكم للـ CSS عبر dir="rtl" و dir="ltr"
    const arrows = document.querySelectorAll('.menu-arrow');
    arrows.forEach(arrow => {
        arrow.style.transform = ''; // تنظيف أي تحويل يدوي
        // التأكد من استخدام أيقونة موحدة لسهولة التحكم عبر CSS
        arrow.classList.remove('fa-chevron-right');
        arrow.classList.add('fa-chevron-left');
    });
}

// ==================== دالة الحصول على بيانات الوحدات ====================
function getUnitsData() {
    return {
        length: {
            title: currentLang === 'ar' ? 'تحويل الطول' : 'Length Conversion',
            units: {
                'm': 1, 'cm': 0.01, 'mm': 0.001, 'μm': 1e-6, 'nm': 1e-9, 'pm': 1e-12,
                'km': 1000, 'in': 0.0254, 'ft': 0.3048, 'yd': 0.9144, 'mi': 1609.344,
                'ly': 9.46073e15, 'au': 1.495978707e11, 'pc': 3.08568e16
            },
            labels: {
                'm': currentLang === 'ar' ? 'متر (m)' : 'Meter (m)',
                'cm': currentLang === 'ar' ? 'سنتيمتر (cm)' : 'Centimeter (cm)',
                'mm': currentLang === 'ar' ? 'مليمتر (mm)' : 'Millimeter (mm)',
                'μm': currentLang === 'ar' ? 'ميكرومتر (µm)' : 'Micrometer (µm)',
                'nm': currentLang === 'ar' ? 'نانومتر (nm)' : 'Nanometer (nm)',
                'pm': currentLang === 'ar' ? 'بيكومتر (pm)' : 'Picometer (pm)',
                'km': currentLang === 'ar' ? 'كيلومتر (km)' : 'Kilometer (km)',
                'in': currentLang === 'ar' ? 'إنش (in)' : 'Inch (in)',
                'ft': currentLang === 'ar' ? 'قدم (ft)' : 'Foot (ft)',
                'yd': currentLang === 'ar' ? 'ياردة (yd)' : 'Yard (yd)',
                'mi': currentLang === 'ar' ? 'ميل (mi)' : 'Mile (mi)',
                'ly': currentLang === 'ar' ? 'سنة ضوئية (ly)' : 'Light year (ly)',
                'au': currentLang === 'ar' ? 'وحدة فلكية (AU)' : 'Astronomical unit (AU)',
                'pc': currentLang === 'ar' ? 'فرسخ فلكي (pc)' : 'Parsec (pc)'
            }
        },
        mass: {
            title: currentLang === 'ar' ? 'تحويل الكتلة' : 'Mass Conversion',
            units: {
                'kg': 1, 'g': 0.001, 'mg': 0.000001, 'μg': 1e-9, 'ng': 1e-12,
                'lb': 0.453592, 'oz': 0.0283495, 'stone': 6.35029,
                't': 1000, 'ton_us': 907.185, 'ton_uk': 1016.05
            },
            labels: {
                'kg': currentLang === 'ar' ? 'كيلوغرام (kg)' : 'Kilogram (kg)',
                'g': currentLang === 'ar' ? 'غرام (g)' : 'Gram (g)',
                'mg': currentLang === 'ar' ? 'مليغرام (mg)' : 'Milligram (mg)',
                'μg': currentLang === 'ar' ? 'ميكروغرام (µg)' : 'Microgram (µg)',
                'ng': currentLang === 'ar' ? 'نانوغرام (ng)' : 'Nanogram (ng)',
                'lb': currentLang === 'ar' ? 'رطل (lb)' : 'Pound (lb)',
                'oz': currentLang === 'ar' ? 'أونصة (oz)' : 'Ounce (oz)',
                'stone': currentLang === 'ar' ? 'ستون (stone)' : 'Stone (stone)',
                't': currentLang === 'ar' ? 'طن متري (t)' : 'Metric ton (t)',
                'ton_us': currentLang === 'ar' ? 'طن أمريكي (ton US)' : 'US ton (ton US)',
                'ton_uk': currentLang === 'ar' ? 'طن بريطاني (ton UK)' : 'UK ton (ton UK)'
            }
        },
        area: {
            title: currentLang === 'ar' ? 'تحويل المساحة' : 'Area Conversion',
            units: {
                'm²': 1, 'cm²': 0.0001, 'mm²': 0.000001, 'km²': 1000000,
                'ha': 10000, 'ft²': 0.092903, 'in²': 0.00064516,
                'acre': 4046.86, 'dunam': 1000
            },
            labels: {
                'm²': currentLang === 'ar' ? 'متر مربع (m²)' : 'Square meter (m²)',
                'cm²': currentLang === 'ar' ? 'سنتيمتر مربع (cm²)' : 'Square cm (cm²)',
                'mm²': currentLang === 'ar' ? 'مليمتر مربع (mm²)' : 'Square mm (mm²)',
                'km²': currentLang === 'ar' ? 'كيلومتر مربع (km²)' : 'Square km (km²)',
                'ha': currentLang === 'ar' ? 'هكتار (ha)' : 'Hectare (ha)',
                'ft²': currentLang === 'ar' ? 'قدم مربع (ft²)' : 'Square foot (ft²)',
                'in²': currentLang === 'ar' ? 'إنش مربع (in²)' : 'Square inch (in²)',
                'acre': currentLang === 'ar' ? 'فدان (acre)' : 'Acre (acre)',
                'dunam': currentLang === 'ar' ? 'دونم' : 'Dunam'
            }
        },
        pressure: {
            title: currentLang === 'ar' ? 'تحويل الضغط' : 'Pressure Conversion',
            units: {
                'pa': 1, 'kpa': 1000, 'mpa': 1000000, 'bar': 100000,
                'psi': 6894.76, 'atm': 101325, 'mmhg': 133.322,
                'inhg': 3386.39, 'torr': 133.322
            },
            labels: {
                'pa': currentLang === 'ar' ? 'باسكال (Pa)' : 'Pascal (Pa)',
                'kpa': currentLang === 'ar' ? 'كيلو باسكال (kPa)' : 'Kilopascal (kPa)',
                'mpa': currentLang === 'ar' ? 'ميغا باسكال (MPa)' : 'Megapascal (MPa)',
                'bar': currentLang === 'ar' ? 'بار (bar)' : 'Bar (bar)',
                'psi': currentLang === 'ar' ? 'رطل/إنش² (psi)' : 'PSI (psi)',
                'atm': currentLang === 'ar' ? 'جو (atm)' : 'Atmosphere (atm)',
                'mmhg': currentLang === 'ar' ? 'ملم زئبق (mmHg)' : 'mmHg',
                'inhg': currentLang === 'ar' ? 'بوصة زئبقية (inHg)' : 'inHg',
                'torr': currentLang === 'ar' ? 'تور (Torr)' : 'Torr'
            }
        },
        temperature: {
            title: currentLang === 'ar' ? 'تحويل الحرارة' : 'Temperature Conversion',
            units: { 'c': 1, 'f': 1, 'k': 1, 'r': 1, 're': 1, 'n': 1, 'de': 1, 'ro': 1 },
            labels: {
                'c': currentLang === 'ar' ? 'درجة سيلزيوس (t°C)' : 'Celsius (t°C)',
                'f': currentLang === 'ar' ? 'درجة فهرنهايت (t°F)' : 'Fahrenheit (t°F)',
                'k': currentLang === 'ar' ? 'درجة كلفن (T°K)' : 'Kelvin (T°K)',
                'r': currentLang === 'ar' ? 'درجة رانكين (T°R)' : 'Rankine (T°R)',
                're': currentLang === 'ar' ? 'درجة ريومور (t°Ré)' : 'Réaumur (t°Ré)',
                'n': currentLang === 'ar' ? 'درجة نيوتن (t°N)' : 'Newton (t°N)',
                'de': currentLang === 'ar' ? 'درجة ديليس (t°De)' : 'Delisle (t°De)',
                'ro': currentLang === 'ar' ? 'درجة رومير (t°Rø)' : 'Rømer (t°Rø)'
            }
        },
        cooling: {
            title: currentLang === 'ar' ? 'تحويل التبريد' : 'Cooling Conversion',
            units: {
                'btu': 1, 'hp': 8000, 'tr': 12000, 'kw': 3412.14,
                'kcal': 3.96832, 'ton_us': 12000
            },
            labels: {
                'btu': currentLang === 'ar' ? 'BTU/h' : 'BTU/h',
                'hp': currentLang === 'ar' ? 'حصان (HP)' : 'Horsepower (HP)',
                'tr': currentLang === 'ar' ? 'طن تبريد (TR)' : 'Ton Refrigeration (TR)',
                'kw': currentLang === 'ar' ? 'كيلووات (kW)' : 'Kilowatt (kW)',
                'kcal': currentLang === 'ar' ? 'كيلو كالوري/ساعة' : 'kcal/h',
                'ton_us': currentLang === 'ar' ? 'طن أمريكي' : 'US ton'
            }
        },
        volume: {
            title: currentLang === 'ar' ? 'تحويل الحجم' : 'Volume Conversion',
            units: {
                'm³': 1,
                'L': 0.001,
                'cm³': 0.000001,
                'mL': 0.000001,
                'µL': 1e-9,
                'in³': 0.000016387064,
                'ft³': 0.028316846592,
                'yd³': 0.764554857984,
                'galUS': 0.003785411784,
                'qtUS': 0.000946352946,
                'ptUS': 0.000473176473,
                'flozUS': 0.0000295735295625,
                'galUK': 0.00454609,
                'qtUK': 0.0011365225,
                'ptUK': 0.00056826125,
                'flozUK': 0.0000284130625,
                'bblOil': 0.158987294928,
                'bblBeer': 0.117347765,
                'cord': 3.624556363776,
                'boardfoot': 0.002359737216,
                'tbspUS': 0.00001478676478125,
                'tspUS': 0.00000492892159375
            },
            labels: {
                'm³': currentLang === 'ar' ? 'متر مكعب (m³)' : 'Cubic meter (m³)',
                'L': currentLang === 'ar' ? 'لتر (L)' : 'Liter (L)',
                'cm³': currentLang === 'ar' ? 'سنتيمتر مكعب (cm³)' : 'Cubic cm (cm³)',
                'mL': currentLang === 'ar' ? 'مليلتر (mL)' : 'Milliliter (mL)',
                'µL': currentLang === 'ar' ? 'ميكرولتر (µL)' : 'Microliter (µL)',
                'in³': currentLang === 'ar' ? 'بوصة مكعبة (in³)' : 'Cubic inch (in³)',
                'ft³': currentLang === 'ar' ? 'قدم مكعبة (ft³)' : 'Cubic foot (ft³)',
                'yd³': currentLang === 'ar' ? 'ياردة مكعبة (yd³)' : 'Cubic yard (yd³)',
                'galUS': currentLang === 'ar' ? 'غالون أمريكي (gal US)' : 'US gallon (gal US)',
                'qtUS': currentLang === 'ar' ? 'كوارت أمريكي (qt US)' : 'US quart (qt US)',
                'ptUS': currentLang === 'ar' ? 'باينت أمريكي (pt US)' : 'US pint (pt US)',
                'flozUS': currentLang === 'ar' ? 'أونصة سائلة أمريكية (fl oz US)' : 'US fl oz (fl oz US)',
                'galUK': currentLang === 'ar' ? 'غالون بريطاني (gal UK)' : 'UK gallon (gal UK)',
                'qtUK': currentLang === 'ar' ? 'كوارت بريطاني (qt UK)' : 'UK quart (qt UK)',
                'ptUK': currentLang === 'ar' ? 'باينت بريطاني (pt UK)' : 'UK pint (pt UK)',
                'flozUK': currentLang === 'ar' ? 'أونصة سائلة بريطانية (fl oz UK)' : 'UK fl oz (fl oz UK)',
                'bblOil': currentLang === 'ar' ? 'برميل نفط (bbl oil)' : 'Oil barrel (bbl oil)',
                'bblBeer': currentLang === 'ar' ? 'برميل بيرة (bbl beer)' : 'Beer barrel (bbl beer)',
                'cord': currentLang === 'ar' ? 'حبل خشب (cord)' : 'Cord (cord)',
                'boardfoot': currentLang === 'ar' ? 'قدم لوح (board foot)' : 'Board foot',
                'tbspUS': currentLang === 'ar' ? 'ملعقة طعام أمريكية (tbsp US)' : 'US tbsp',
                'tspUS': currentLang === 'ar' ? 'ملعقة شاي أمريكية (tsp US)' : 'US tsp'
            }
        },
        volt: {
            title: currentLang === 'ar' ? 'تحويل الفولت' : 'Voltage Conversion',
            units: { 'V': 1, 'mV': 0.001, 'μV': 1e-6, 'nV': 1e-9, 'kV': 1000, 'MV': 1000000 },
            labels: {
                'V': currentLang === 'ar' ? 'فولت (V)' : 'Volt (V)',
                'mV': currentLang === 'ar' ? 'ملي فولت (mV)' : 'Millivolt (mV)',
                'μV': currentLang === 'ar' ? 'ميكرو فولت (µV)' : 'Microvolt (µV)',
                'nV': currentLang === 'ar' ? 'نانو فولت (nV)' : 'Nanovolt (nV)',
                'kV': currentLang === 'ar' ? 'كيلو فولت (kV)' : 'Kilovolt (kV)',
                'MV': currentLang === 'ar' ? 'ميجا فولت (MV)' : 'Megavolt (MV)'
            }
        },
        amp: {
            title: currentLang === 'ar' ? 'تحويل الأمبير' : 'Current Conversion',
            units: { 'A': 1, 'mA': 0.001, 'μA': 1e-6, 'nA': 1e-9, 'kA': 1000 },
            labels: {
                'A': currentLang === 'ar' ? 'أمبير (A)' : 'Ampere (A)',
                'mA': currentLang === 'ar' ? 'ملي أمبير (mA)' : 'Milliampere (mA)',
                'μA': currentLang === 'ar' ? 'ميكرو أمبير (µA)' : 'Microampere (µA)',
                'nA': currentLang === 'ar' ? 'نانو أمبير (nA)' : 'Nanoampere (nA)',
                'kA': currentLang === 'ar' ? 'كيلو أمبير (kA)' : 'Kiloampere (kA)'
            }
        },
        watt: {
            title: currentLang === 'ar' ? 'تحويل الواط' : 'Power Conversion',
            units: { 'W': 1, 'mW': 0.001, 'μW': 1e-6, 'kW': 1000, 'MW': 1000000 },
            labels: {
                'W': currentLang === 'ar' ? 'وات (W)' : 'Watt (W)',
                'mW': currentLang === 'ar' ? 'ملي وات (mW)' : 'Milliwatt (mW)',
                'μW': currentLang === 'ar' ? 'ميكرو وات (µW)' : 'Microwatt (µW)',
                'kW': currentLang === 'ar' ? 'كيلو وات (kW)' : 'Kilowatt (kW)',
                'MW': currentLang === 'ar' ? 'ميجا وات (MW)' : 'Megawatt (MW)'
            }
        },
        farad: {
            title: currentLang === 'ar' ? 'تحويل الفاراد' : 'Capacitance Conversion',
            units: { 'F': 1, 'mF': 0.001, 'μF': 1e-6, 'nF': 1e-9, 'pF': 1e-12 },
            labels: {
                'F': currentLang === 'ar' ? 'فاراد (F)' : 'Farad (F)',
                'mF': currentLang === 'ar' ? 'ملي فاراد (mF)' : 'Millifarad (mF)',
                'μF': currentLang === 'ar' ? 'ميكرو فاراد (µF)' : 'Microfarad (µF)',
                'nF': currentLang === 'ar' ? 'نانو فاراد (nF)' : 'Nanofarad (nF)',
                'pF': currentLang === 'ar' ? 'بيكو فاراد (pF)' : 'Picofarad (pF)'
            }
        },
        henry: {
            title: currentLang === 'ar' ? 'تحويل الهنري' : 'Inductance Conversion',
            units: { 'H': 1, 'mH': 0.001, 'μH': 1e-6, 'nH': 1e-9 },
            labels: {
                'H': currentLang === 'ar' ? 'هنري (H)' : 'Henry (H)',
                'mH': currentLang === 'ar' ? 'ملي هنري (mH)' : 'Millihenry (mH)',
                'μH': currentLang === 'ar' ? 'ميكرو هنري (µH)' : 'Microhenry (µH)',
                'nH': currentLang === 'ar' ? 'نانو هنري (nH)' : 'Nanohenry (nH)'
            }
        }
    };
}

// تهيئة بيانات الوحدات
unitsData = getUnitsData();

// ==================== دوال آمنة لتحديث النصوص ====================
function safeSetText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

function safeSetPlaceholder(element, text) {
    if (element) {
        element.placeholder = text;
    }
}

// ==================== دالة تطبيق اللغة ====================
function applyLanguage(lang) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.add('no-transition');
    }
    
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLang', lang);
    currentLang = lang;

    // تحديث بيانات الوحدات حسب اللغة الجديدة
    unitsData = getUnitsData();

    // تحديث جميع عناصر data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            safeSetText(el, translations[lang][key]);
        }
    });

    // تحديث جميع الـ placeholders
    document.querySelectorAll('[data-placeholder-lang]').forEach(el => {
        const key = el.getAttribute('data-placeholder-lang');
        if (translations[lang] && translations[lang][key]) {
            safeSetPlaceholder(el, translations[lang][key]);
        }
    });

    // تحديث نص زر اللغة
    const langToggleText = document.getElementById('langToggleText');
    if (langToggleText) {
        safeSetText(langToggleText, lang === 'ar' ? 'English' : 'عربي');
    }

    // تحديث نص الوضع الليلي/النهاري
    updateNightModeText();

    // تحديث اسم المطور
    const developerName = document.getElementById('developerName');
    if (developerName) {
        safeSetText(developerName, translations[lang].developerName);
    }

    // تحديث الحقول الديناميكية
    updateLawTypeText();
    updateUnitConverterTitles();
    resetElecFields();

    // التحكم في مكان السايد بار
    document.body.classList.toggle('ltr-mode', lang === 'en');
    
    // تحديث معلومات الضاغط إذا كانت ظاهرة
    const compResultDiv = document.getElementById('comp-result-div');
    if (compResultDiv && !compResultDiv.classList.contains('hidden')) {
        const input = document.getElementById('comp-input')?.value;
        if (input) searchCompressor();
    }
    
    // تحديث اتجاه الأسهم - في المكان الصحيح
    updateArrowsDirection();
    
    setTimeout(() => {
        if (sidebar) {
            sidebar.classList.remove('no-transition');
        }
    }, 50);
}

// دالة تحديث نص الوضع الليلي/النهاري
function updateNightModeText() {
    const nightModeText = document.getElementById('nightModeText');
    if (nightModeText) {
        safeSetText(nightModeText, 
            document.body.classList.contains('dark-mode') 
                ? translations[currentLang].dayMode 
                : translations[currentLang].nightMode
        );
    }
}

function toggleLanguage() {
    const langToggleText = document.getElementById('langToggleText');
    if (!langToggleText) {
        setTimeout(toggleLanguage, 50);
        return;
    }
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// تحديث نصوص القوانين الكهربائية
function updateLawTypeText() {
    const lawSelect = document.getElementById('law-type');
    if (lawSelect && lawSelect.options.length > 0) {
        lawSelect.options[0].text = translations[currentLang].lawOptionChoose;
        if (lawSelect.options[1]) lawSelect.options[1].text = translations[currentLang].lawOptionOhm;
        if (lawSelect.options[2]) lawSelect.options[2].text = translations[currentLang].lawOptionPower;
    }
}

// تحديث عناوين الوحدات في modal-converter
function updateUnitConverterTitles() {
    const convTitle = document.getElementById('conv-title');
    if (convTitle && currentConvCategory) {
        const data = unitsData[currentConvCategory];
        if (data) {
            safeSetText(convTitle, data.title);
        }
    }
}

// دوال الوضع الليلي
function toggleDarkMode() {
    const icon = document.querySelector('#themeToggleSidebar i');
    const button = document.querySelector('#themeToggleSidebar');

    if (!icon || !button) {
        setTimeout(toggleDarkMode, 50);
        return;
    }
    
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        button.className = 'flex-1 py-4 px-2 bg-gradient-to-l from-blue-800 to-blue-700 text-white rounded-full flex items-center justify-center gap-2 font-bold shadow-md active:scale-95 transition-all duration-200';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        button.className = 'flex-1 py-4 px-2 bg-gradient-to-l from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center gap-2 font-bold shadow-md active:scale-95 transition-all duration-200';
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateNightModeText();
}

// استعادة الوضع الليلي من التخزين المحلي
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const icon = document.querySelector('#themeToggleSidebar i');
    if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

function validateRange(value, min, max, fieldName) {
    if (value < min) return `${fieldName} ${currentLang === 'ar' ? 'يجب أن يكون أكبر من أو يساوي' : 'must be greater than or equal to'} ${min}`;
    if (value > max) return `${fieldName} ${currentLang === 'ar' ? 'يجب أن يكون أقل من أو يساوي' : 'must be less than or equal to'} ${max}`;
    return null;
}

function handleEnter(e, callback) { 
    if (e.key === 'Enter') { 
        callback(); 
        e.target.blur(); 
    } 
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('closed');
        overlay.classList.toggle('hidden');
        updateArrowsDirection();
    }
}

function closeModal() { 
    document.getElementById('modal-converter')?.classList.add('hidden'); 
}

function openWireCalc() { 
    document.getElementById('modal-wire')?.classList.remove('hidden'); 
    toggleSidebar(); 
}

function closeWireModal() { 
    document.getElementById('modal-wire')?.classList.add('hidden'); 
}

function openFlowCalculator() { 
    document.getElementById('modal-flow')?.classList.remove('hidden'); 
    toggleSidebar(); 
}

function closeFlowModal() { 
    document.getElementById('modal-flow')?.classList.add('hidden'); 
}

function clearResults(page) {
    const input = document.getElementById(`${page}-input`);
    if (input) input.value = '';
    document.getElementById(`${page}-result-div`)?.classList.add('hidden');
    document.getElementById(`${page}-validation`)?.classList.add('hidden');
}

function clearConvResult() {
    document.getElementById('conv-result-div')?.classList.add('hidden');
    document.getElementById('conv-validation')?.classList.add('hidden');
}

function switchPage(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${pageId}`)?.classList.remove('hidden');
    document.querySelectorAll('nav button').forEach(b => {
        b.classList.remove('tab-active');
        b.classList.add('tab-inactive');
    });
    const activeTab = document.getElementById(`tab-${pageId}`);
    if (activeTab) {
        activeTab.classList.add('tab-active');
        activeTab.classList.remove('tab-inactive');
    }
}

function swapTempMode() {
    const s = document.getElementById('temp-mode');
    if (s) {
        s.selectedIndex = s.selectedIndex === 0 ? 1 : 0;
        clearResults('temp');
    }
}

function swapConverterUnits() {
    const fromS = document.getElementById('unit-from');
    const toS = document.getElementById('unit-to');
    const inputEl = document.getElementById('conv-input');
    const resultDiv = document.getElementById('conv-result-div');

    if (!fromS || !toS || !inputEl || !resultDiv) return;

    if (!resultDiv.classList.contains('hidden') && resultDiv.innerText.trim() !== '') {
        let resultText = resultDiv.innerText.trim();
        const numMatch = resultText.match(/^-?[\d.,]+/);
        if (numMatch) {
            let numStr = numMatch[0].replace(/,/g, '');
            inputEl.value = numStr;
        }
    }

    const tempVal = fromS.value;
    fromS.value = toS.value;
    toS.value = tempVal;

    clearConvResult();
    convertNow();
}

function openUnitConverter(cat) {
    currentConvCategory = cat;
    const data = unitsData[cat];
    if (!data) return;

    const convTitle = document.getElementById('conv-title');
    if (convTitle) safeSetText(convTitle, data.title);
    
    const fromS = document.getElementById('unit-from');
    const toS = document.getElementById('unit-to');
    if (!fromS || !toS) return;
    
    fromS.innerHTML = '';
    toS.innerHTML = '';

    const keys = Object.keys(data.units);
    keys.forEach(k => {
        const label = data.labels?.[k] || k.toUpperCase();
        fromS.add(new Option(label, k));
        toS.add(new Option(label, k));
    });

    toS.selectedIndex = Math.min(1, keys.length - 1);
    const convInput = document.getElementById('conv-input');
    if (convInput) convInput.value = '';
    
    document.getElementById('conv-result-div')?.classList.add('hidden');
    document.getElementById('modal-converter')?.classList.remove('hidden');
    toggleSidebar();
}

function formatResultWithUnits(value, unitKey, cat) {
    const catData = unitsData[cat];
    if (!catData?.labels?.[unitKey]) {
        return `${value.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${unitKey}`;
    }

    const label = catData.labels[unitKey];
    const match = label.match(/\(([^)]+)\)/);
    const engSymbol = match ? match[1] : unitKey;
    const arabicName = label.replace(/\s*\([^)]*\)/, '');

    return `${value.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${arabicName} (${engSymbol})`;
}

function convertNow() {
    const val = parseFloat(document.getElementById('conv-input')?.value);
    const resultDiv = document.getElementById('conv-result-div');
    const validationDiv = document.getElementById('conv-validation');

    if (!resultDiv || !validationDiv) return;

    if (isNaN(val) || val === '') {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة صحيحة' : 'Please enter a valid number');
        validationDiv.classList.remove('hidden');
        return;
    }

    if (val < -1e15 || val > 1e15) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'القيمة خارج النطاق المسموح به' : 'Value out of allowed range');
        validationDiv.classList.remove('hidden');
        return;
    }

    validationDiv.classList.add('hidden');

    const cat = unitsData[currentConvCategory];
    if (!cat) return;

    const fromK = document.getElementById('unit-from')?.value;
    const toK = document.getElementById('unit-to')?.value;
    if (!fromK || !toK) return;
    
    let res;

    if (currentConvCategory === 'temperature') {
        let celsius;
        if (fromK === 'c') celsius = val;
        else if (fromK === 'f') celsius = (val - 32) * 5 / 9;
        else if (fromK === 'k') celsius = val - 273.15;
        else if (fromK === 'r') celsius = (val - 491.67) * 5 / 9;
        else if (fromK === 're') celsius = val * 1.25;
        else if (fromK === 'n') celsius = val * 100 / 33;
        else if (fromK === 'de') celsius = 100 - val * 2 / 3;
        else if (fromK === 'ro') celsius = (val - 7.5) * 40 / 21;

        if (toK === 'c') res = celsius;
        else if (toK === 'f') res = (celsius * 9 / 5) + 32;
        else if (toK === 'k') res = celsius + 273.15;
        else if (toK === 'r') res = (celsius + 273.15) * 9 / 5;
        else if (toK === 're') res = celsius * 0.8;
        else if (toK === 'n') res = celsius * 33 / 100;
        else if (toK === 'de') res = (100 - celsius) * 3 / 2;
        else if (toK === 'ro') res = celsius * 21 / 40 + 7.5;

        const unitSymbol = getTemperatureSymbol(toK);
        safeSetText(resultDiv, `${res.toLocaleString('en-US', { maximumFractionDigits: 6 })} ${unitSymbol}`);
    } else {
        const factorFrom = cat.units[fromK];
        const factorTo = cat.units[toK];
        res = (val * factorFrom) / factorTo;

        safeSetText(resultDiv, formatResultWithUnits(res, toK, currentConvCategory));
    }

    resultDiv.classList.remove('hidden');
}

function getTemperatureSymbol(unit) {
    const symbols = {
        'c': '°C', 'f': '°F', 'k': 'K', 'r': '°R',
        're': '°Ré', 'n': '°N', 'de': '°De', 'ro': '°Rø'
    };
    return symbols[unit] || '';
}

function updateSensorConstants() {
    const type = document.getElementById('sensor-type')?.value;
    const customDiv = document.getElementById('custom-params');
    
    if (!type || !customDiv) return;
    
    if (type === 'custom') {
        customDiv.classList.remove('hidden');
    } else {
        customDiv.classList.add('hidden');
        const sensorValues = {
            '10k': { r0: 10000, beta: 3950 },
            '5k': { r0: 5000, beta: 3470 },
            '200k': { r0: 200000, beta: 4200 }
        };
        if (sensorValues[type]) {
            const r0Val = document.getElementById('r0-val');
            const betaVal = document.getElementById('beta-val');
            if (r0Val && betaVal) {
                r0Val.value = sensorValues[type].r0;
                betaVal.value = sensorValues[type].beta;
            }
        }
    }
}

function calculateTemperature() {
    const mode = document.getElementById('temp-mode')?.value;
    const val = parseFloat(document.getElementById('temp-input')?.value);
    const r0 = parseFloat(document.getElementById('r0-val')?.value);
    const beta = parseFloat(document.getElementById('beta-val')?.value);
    const resultDiv = document.getElementById('temp-result-div');
    const validationDiv = document.getElementById('temp-validation');

    if (!resultDiv || !validationDiv) return;

    if (isNaN(val)) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة صحيحة في الحقل' : 'Please enter a valid value');
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }

    if (mode === 'RT') {
        if (val < CONSTANTS.TEMP.MIN_RESISTANCE || val > CONSTANTS.TEMP.MAX_RESISTANCE) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `قيمة المقاومة يجب أن تكون بين ${CONSTANTS.TEMP.MIN_RESISTANCE} و ${CONSTANTS.TEMP.MAX_RESISTANCE} أوم` 
                : `Resistance must be between ${CONSTANTS.TEMP.MIN_RESISTANCE} and ${CONSTANTS.TEMP.MAX_RESISTANCE} Ω`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
    } else {
        if (val < CONSTANTS.TEMP.MIN_CELSIUS || val > CONSTANTS.TEMP.MAX_CELSIUS) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `درجة الحرارة يجب أن تكون بين ${CONSTANTS.TEMP.MIN_CELSIUS} و ${CONSTANTS.TEMP.MAX_CELSIUS} درجة مئوية` 
                : `Temperature must be between ${CONSTANTS.TEMP.MIN_CELSIUS} and ${CONSTANTS.TEMP.MAX_CELSIUS} °C`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
    }

    validationDiv.classList.add('hidden');

    let res;
    if (mode === 'RT') {
        const k = 1 / ((1 / 298.15) + (1 / beta) * Math.log(val / r0));
        res = `${(k - 273.15).toLocaleString('en-US', { maximumFractionDigits: 1 })} °C`;
    } else {
        const r = r0 * Math.exp(beta * ((1 / (val + 273.15)) - (1 / 298.15)));
        res = `${Math.round(r).toLocaleString('en-US')} Ω`;
    }
    
    safeSetText(resultDiv, res);
    resultDiv.classList.remove('hidden');
}

// ==================== دالة resetElecFields مع دعم الترجمة الكامل ====================
function resetElecFields() {
    const mode = document.getElementById('elec-mode')?.value;
    const container = document.getElementById('elec-dynamic-inputs');
    
    if (!mode || !container) return;
    
    let html = '';

    const freqInput = `    
    <div class="mt-3">    
        <input type="number" id="e-freq" value="50" placeholder="${translations[currentLang].defaultFreq}"     
               class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font border border-gray-200 focus:border-orange-300" min="1" max="1000">    
        <p class="text-[10px] text-gray-500 text-center mt-1" data-lang="defaultFreq">${translations[currentLang].defaultFreq}</p>    
    </div>`;

    if (mode === 'cap') {
        html = `    
        <div class="grid grid-cols-2 gap-3">    
            <input type="number" id="e-amp" placeholder="${currentLang === 'ar' ? 'التيار (A)' : 'Current (A)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="0.1" max="1000">    
            <input type="number" id="e-volt" value="220" placeholder="${currentLang === 'ar' ? 'الجهد (V)' : 'Voltage (V)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="1" max="1000">    
        </div>    
        ${freqInput}`;
    }
    else if (mode === 'amp') {
        html = `    
        <div class="grid grid-cols-2 gap-3">    
            <input type="number" id="e-cap" placeholder="${currentLang === 'ar' ? 'المكثف (µF)' : 'Capacitor (µF)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="0.1" max="10000">    
            <input type="number" id="e-volt" value="220" placeholder="${currentLang === 'ar' ? 'الجهد (V)' : 'Voltage (V)'}" class="p-5 bg-gray-50 rounded-2xl text-center font-bold num-font" min="1" max="1000">    
        </div>    
        ${freqInput}`;
    }
    else if (mode === 'pow') {
        html = `
        <div class="space-y-5">
            <label class="block font-bold text-base mb-3 text-orange-700" data-lang="powerConvert">${translations[currentLang].powerConvert}</label>
            
            <div class="grid grid-cols-2 gap-3">
                <button type="button" onclick="setPowerMode('watt')" id="power-mode-watt" 
                    class="p-4 bg-orange-500 text-white rounded-2xl font-bold text-center transition-all duration-200 ${lastResultType === 'watt' ? 'ring-4 ring-orange-300' : ''}">
                    <i class="fas fa-bolt ml-2"></i><span data-lang="wattsToHP">${translations[currentLang].wattsToHP}</span>
                </button>
                <button type="button" onclick="setPowerMode('hp')" id="power-mode-hp" 
                    class="p-4 bg-orange-500 text-white rounded-2xl font-bold text-center transition-all duration-200 ${lastResultType === 'hp' ? 'ring-4 ring-orange-300' : ''}">
                    <i class="fas fa-horse-head ml-2"></i><span data-lang="hpToWatts">${translations[currentLang].hpToWatts}</span>
                </button>
            </div>

            <div id="watt-input-container" class="${lastResultType === 'hp' ? 'hidden' : ''}">
                <input type="number" id="e-watt" value="" step="any" min="0" 
                    placeholder="${translations[currentLang].enterWatts}"
                    class="w-full p-5 bg-gray-50 rounded-2xl text-center font-bold num-font border-2 border-orange-200 focus:border-orange-500"
                    onkeydown="handleEnter(event, calculatePower)" data-placeholder-lang="enterWatts">
            </div>

            <div id="hp-input-container" class="${lastResultType === 'watt' ? 'hidden' : ''}">
                <input type="number" id="e-hp" value="" step="any" min="0" 
                    placeholder="${translations[currentLang].enterHP}"
                    class="w-full p-5 bg-gray-50 rounded-2xl text-center font-bold num-font border-2 border-orange-200 focus:border-orange-500"
                    onkeydown="handleEnter(event, calculatePower)" data-placeholder-lang="enterHP">
            </div>

            <p class="text-xs text-gray-500 text-center mt-1" data-lang="conversionNote">${translations[currentLang].conversionNote}</p>
        </div>`;
    }
    else if (mode === 'laws') {
        html = `
        <div class="space-y-5">
            <label class="block font-bold text-base mb-3 text-orange-700" data-lang="lawLabel">${translations[currentLang].lawLabel}</label>
            <select id="law-type" onchange="updateLawType()" class="w-full p-5 bg-gray-50 rounded-3xl font-bold text-center outline-none border-2 border-orange-100 focus:border-orange-300">
                <option value="">${translations[currentLang].lawOptionChoose}</option>
                <option value="ohm">${translations[currentLang].lawOptionOhm}</option>
                <option value="power">${translations[currentLang].lawOptionPower}</option>
            </select>

            <div id="law-inputs-container" class="space-y-4 mt-4 hidden"></div>
        </div>`;
    }

    container.innerHTML = html;
}

// ==================== دالة تعيين وضع القدرة ====================
function setPowerMode(mode) {
    lastResultType = mode;
    
    const wattBtn = document.getElementById('power-mode-watt');
    const hpBtn = document.getElementById('power-mode-hp');
    const wattContainer = document.getElementById('watt-input-container');
    const hpContainer = document.getElementById('hp-input-container');
    
    if (wattBtn && hpBtn && wattContainer && hpContainer) {
        if (mode === 'watt') {
            wattBtn.classList.add('ring-4', 'ring-orange-300');
            hpBtn.classList.remove('ring-4', 'ring-orange-300');
            wattContainer.classList.remove('hidden');
            hpContainer.classList.add('hidden');
        } else {
            hpBtn.classList.add('ring-4', 'ring-orange-300');
            wattBtn.classList.remove('ring-4', 'ring-orange-300');
            hpContainer.classList.remove('hidden');
            wattContainer.classList.add('hidden');
        }
    }
}

// ==================== دالة حساب القدرة (اتجاهين) ====================
function calculatePower() {
    const mode = document.getElementById('elec-mode')?.value;
    
    if (mode !== 'pow') return;
    
    const resultDiv = document.getElementById('elec-result-div');
    const validationDiv = document.getElementById('elec-validation');
    
    if (!resultDiv || !validationDiv) return;
    
    const wattInput = document.getElementById('e-watt');
    const hpInput = document.getElementById('e-hp');
    
    let result = "";
    
    if (lastResultType === 'watt') {
        // تحويل من واط إلى حصان
        const watts = parseFloat(wattInput?.value);
        
        if (isNaN(watts)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة الواط' : 'Please enter watts value');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        if (watts <= 0) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'القيمة يجب أن تكون أكبر من صفر' : 'Value must be greater than zero');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        validationDiv.classList.add('hidden');
        const hp = watts / 745.7;
        result = `${watts.toLocaleString('en-US', { maximumFractionDigits: 0 })} ${currentLang === 'ar' ? 'واط =' : 'Watts ='} ${hp.toLocaleString('en-US', { maximumFractionDigits: 2 })} HP`;
    } 
    else if (lastResultType === 'hp') {
        // تحويل من حصان إلى واط
        const hp = parseFloat(hpInput?.value);
        
        if (isNaN(hp)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة الحصان' : 'Please enter horsepower value');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        if (hp <= 0) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'القيمة يجب أن تكون أكبر من صفر' : 'Value must be greater than zero');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        
        validationDiv.classList.add('hidden');
        const watts = hp * 745.7;
        result = `${hp.toLocaleString('en-US', { maximumFractionDigits: 2 })} HP = ${watts.toLocaleString('en-US', { maximumFractionDigits: 0 })} ${currentLang === 'ar' ? 'واط' : 'Watts'}`;
    }
    
    if (result) {
        safeSetText(resultDiv, result);
        resultDiv.classList.remove('hidden');
    }
}

function updateLawType() {
    const lawType = document.getElementById('law-type')?.value;
    const container = document.getElementById('law-inputs-container');
    
    if (!container) return;
    
    if (!lawType) {
        container.classList.add('hidden');
        return;
    }
    container.classList.remove('hidden');

    let html = '';

    if (lawType === 'ohm') {
        html = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الفولت (V)' : 'Voltage (V)'}</label>
                <input id="v" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 220' : 'Example: 220'}" min="0.1" max="10000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الأمبير (I)' : 'Current (I)'}</label>
                <input id="i" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 5' : 'Example: 5'}" min="0.1" max="1000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'المقاومة (Ω)' : 'Resistance (Ω)'}</label>
                <input id="r" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 44' : 'Example: 44'}" min="0.1" max="1000000">
            </div>
        </div>
        <p class="text-xs text-gray-600 text-center mt-3">${currentLang === 'ar' ? 'أكتب قيمتين والبرنامج هيحسب الباقي' : 'Enter two values and the program will calculate the rest'}</p>`;
    }
    else if (lawType === 'power') {
        html = `
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'القدرة (W)' : 'Power (W)'}</label>
                <input id="p" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 1100' : 'Example: 1100'}" min="1" max="1000000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الفولت (V)' : 'Voltage (V)'}</label>
                <input id="v" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 220' : 'Example: 220'}" min="0.1" max="10000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'الأمبير (I)' : 'Current (I)'}</label>
                <input id="i" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 5' : 'Example: 5'}" min="0.1" max="1000">
            </div>
            <div>
                <label class="text-sm font-bold block mb-1">${currentLang === 'ar' ? 'المقاومة (Ω)' : 'Resistance (Ω)'}</label>
                <input id="r" type="number" step="any" class="w-full p-4 bg-gray-50 rounded-2xl text-center font-bold num-font" placeholder="${currentLang === 'ar' ? 'مثال: 44' : 'Example: 44'}" min="0.1" max="1000000">
            </div>
        </div>
        <p class="text-xs text-gray-600 text-center mt-3">${currentLang === 'ar' ? 'أكتب قيمتين أو أكثر والبرنامج هيحسب الباقي' : 'Enter two or more values and the program will calculate the rest'}</p>`;
    }

    container.innerHTML = html;
}

// ==================== دالة calculateElectrical المعدلة ====================
function calculateElectrical() {
    const mode = document.getElementById('elec-mode')?.value;
    const resultDiv = document.getElementById('elec-result-div');
    const validationDiv = document.getElementById('elec-validation');

    if (!resultDiv || !validationDiv) return;

    if (mode === 'pow') {
        calculatePower();
        return;
    }

    if (mode === 'laws') {
        const lawType = document.getElementById('law-type')?.value;
        if (!lawType) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى اختيار نوع القانون أولاً' : 'Please choose law type first');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        const v = parseFloat(document.getElementById('v')?.value) || NaN;
        const i = parseFloat(document.getElementById('i')?.value) || NaN;
        const r = parseFloat(document.getElementById('r')?.value) || NaN;
        const p = parseFloat(document.getElementById('p')?.value) || NaN;

        // التحقق من النطاقات
        if (!isNaN(v) && (v < CONSTANTS.ELECTRICAL.MIN_VOLTAGE || v > CONSTANTS.ELECTRICAL.MAX_VOLTAGE)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `الجهد يجب أن يكون بين ${CONSTANTS.ELECTRICAL.MIN_VOLTAGE} و ${CONSTANTS.ELECTRICAL.MAX_VOLTAGE} فولت` 
                : `Voltage must be between ${CONSTANTS.ELECTRICAL.MIN_VOLTAGE} and ${CONSTANTS.ELECTRICAL.MAX_VOLTAGE} V`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (!isNaN(i) && (i < CONSTANTS.ELECTRICAL.MIN_CURRENT || i > CONSTANTS.ELECTRICAL.MAX_CURRENT)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `التيار يجب أن يكون بين ${CONSTANTS.ELECTRICAL.MIN_CURRENT} و ${CONSTANTS.ELECTRICAL.MAX_CURRENT} أمبير` 
                : `Current must be between ${CONSTANTS.ELECTRICAL.MIN_CURRENT} and ${CONSTANTS.ELECTRICAL.MAX_CURRENT} A`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (!isNaN(r) && (r < CONSTANTS.ELECTRICAL.MIN_RESISTANCE || r > CONSTANTS.ELECTRICAL.MAX_RESISTANCE)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `المقاومة يجب أن تكون بين ${CONSTANTS.ELECTRICAL.MIN_RESISTANCE} و ${CONSTANTS.ELECTRICAL.MAX_RESISTANCE} أوم` 
                : `Resistance must be between ${CONSTANTS.ELECTRICAL.MIN_RESISTANCE} and ${CONSTANTS.ELECTRICAL.MAX_RESISTANCE} Ω`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (!isNaN(p) && (p < CONSTANTS.ELECTRICAL.MIN_POWER || p > CONSTANTS.ELECTRICAL.MAX_POWER)) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `القدرة يجب أن تكون بين ${CONSTANTS.ELECTRICAL.MIN_POWER} و ${CONSTANTS.ELECTRICAL.MAX_POWER} واط` 
                : `Power must be between ${CONSTANTS.ELECTRICAL.MIN_POWER} and ${CONSTANTS.ELECTRICAL.MAX_POWER} W`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        let results = [];

        if (lawType === 'ohm') {
            const filledCount = [v, i, r].filter(x => !isNaN(x)).length;

            if (filledCount === 3) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'كل القيم مدخلة بالفعل لا يمكن اجراء عملية حسابية بوجود كل القيم' : 'All values are already entered');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }
            if (filledCount < 2) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمتين على الأقل' : 'Please enter at least two values');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }

            if (!isNaN(v) && !isNaN(i) && isNaN(r)) results.push(`R = ${(v / i).toFixed(2)} Ω`);
            if (!isNaN(v) && !isNaN(r) && isNaN(i)) results.push(`I = ${(v / r).toFixed(3)} A`);
            if (!isNaN(i) && !isNaN(r) && isNaN(v)) results.push(`V = ${(i * r).toFixed(2)} V`);
        }
        else if (lawType === 'power') {
            const filledCount = [p, v, i, r].filter(x => !isNaN(x)).length;

            if (filledCount === 4) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'كل القيم مدخلة بالفعل لا يمكن اجراء عملية حسابية بوجود كل القيم' : 'All values are already entered');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }
            if (filledCount < 2) {
                safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمتين على الأقل' : 'Please enter at least two values');
                validationDiv.classList.remove('hidden');
                resultDiv.classList.add('hidden');
                return;
            }

            if (!isNaN(p) && !isNaN(v) && isNaN(i)) results.push(`I = ${(p / v).toFixed(3)} A`);
            if (!isNaN(p) && !isNaN(i) && isNaN(v)) results.push(`V = ${(p / i).toFixed(2)} V`);
            if (!isNaN(v) && !isNaN(i) && isNaN(p)) results.push(`P = ${(v * i).toFixed(1)} W`);
            if (!isNaN(v) && !isNaN(r) && isNaN(p)) results.push(`P = ${(v * v / r).toFixed(1)} W`);
            if (!isNaN(i) && !isNaN(r) && isNaN(p)) results.push(`P = ${(r * i * i).toFixed(1)} W`);
            if (!isNaN(p) && !isNaN(r) && isNaN(v)) results.push(`V = ${Math.sqrt(p * r).toFixed(2)} V`);
            if (!isNaN(p) && !isNaN(r) && isNaN(i)) results.push(`I = ${Math.sqrt(p / r).toFixed(3)} A`);
            if (!isNaN(p) && !isNaN(v) && isNaN(r)) results.push(`R = ${(v * v / p).toFixed(2)} Ω`);
        }

        validationDiv.classList.add('hidden');
        if (results.length > 0) {
            resultDiv.innerHTML = results.map(res => `<div class="mb-3 text-2xl">${res}</div>`).join('');
        }
        resultDiv.classList.remove('hidden');
        return;
    }

    let result = "";

    if (mode === 'cap') {
        const I = parseFloat(document.getElementById('e-amp')?.value);
        const V = parseFloat(document.getElementById('e-volt')?.value);
        const f = parseFloat(document.getElementById('e-freq')?.value) || 50;

        if (isNaN(I) || isNaN(V)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال التيار والجهد' : 'Please enter current and voltage');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        if (I < CONSTANTS.ELECTRICAL.MIN_CURRENT || I > CONSTANTS.ELECTRICAL.MAX_CURRENT) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `التيار يجب أن يكون بين ${CONSTANTS.ELECTRICAL.MIN_CURRENT} و ${CONSTANTS.ELECTRICAL.MAX_CURRENT} أمبير` 
                : `Current must be between ${CONSTANTS.ELECTRICAL.MIN_CURRENT} and ${CONSTANTS.ELECTRICAL.MAX_CURRENT} A`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (V < 1 || V > 1000) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'الجهد يجب أن يكون بين 1 و 1000 فولت' : 'Voltage must be between 1 and 1000 V');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        validationDiv.classList.add('hidden');
        const C = (I * 1000000) / (2 * Math.PI * f * V);
        result = `${C.toLocaleString('en-US', { maximumFractionDigits: 1 })} µF`;
    }
    else if (mode === 'amp') {
        const C = parseFloat(document.getElementById('e-cap')?.value);
        const V = parseFloat(document.getElementById('e-volt')?.value);
        const f = parseFloat(document.getElementById('e-freq')?.value) || 50;

        if (isNaN(C) || isNaN(V)) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال سعة المكثف والجهد' : 'Please enter capacitor and voltage');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        if (C < CONSTANTS.ELECTRICAL.MIN_CAPACITOR || C > CONSTANTS.ELECTRICAL.MAX_CAPACITOR) {
            safeSetText(validationDiv, currentLang === 'ar' 
                ? `سعة المكثف يجب أن تكون بين ${CONSTANTS.ELECTRICAL.MIN_CAPACITOR} و ${CONSTANTS.ELECTRICAL.MAX_CAPACITOR} ميكروفاراد` 
                : `Capacitor must be between ${CONSTANTS.ELECTRICAL.MIN_CAPACITOR} and ${CONSTANTS.ELECTRICAL.MAX_CAPACITOR} µF`);
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }
        if (V < 1 || V > 1000) {
            safeSetText(validationDiv, currentLang === 'ar' ? 'الجهد يجب أن يكون بين 1 و 1000 فولت' : 'Voltage must be between 1 and 1000 V');
            validationDiv.classList.remove('hidden');
            resultDiv.classList.add('hidden');
            return;
        }

        validationDiv.classList.add('hidden');
        const I = (V * 2 * Math.PI * f * C) / 1000000;
        result = `${I.toLocaleString('en-US', { maximumFractionDigits: 2 })} A`;
    }

    if (result) {
        safeSetText(resultDiv, result);
        resultDiv.classList.remove('hidden');
    }
}

function calculateRoom() {
    const l = parseFloat(document.getElementById('room-l')?.value),
        w = parseFloat(document.getElementById('room-w')?.value),
        h = parseFloat(document.getElementById('room-h')?.value),
        s = parseFloat(document.getElementById('room-s')?.value);

    const validationDiv = document.getElementById('room-validation');
    const resultsDiv = document.getElementById('room-results-div');

    if (!validationDiv || !resultsDiv) return;

    if (isNaN(l) || isNaN(w) || isNaN(h)) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال أبعاد الغرفة (الطول، العرض، الارتفاع)' : 'Please enter room dimensions (length, width, height)');
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }

    if (l < CONSTANTS.ROOM.MIN_DIMENSION || l > CONSTANTS.ROOM.MAX_DIMENSION) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `الطول يجب أن يكون بين ${CONSTANTS.ROOM.MIN_DIMENSION} و ${CONSTANTS.ROOM.MAX_DIMENSION} متر` 
            : `Length must be between ${CONSTANTS.ROOM.MIN_DIMENSION} and ${CONSTANTS.ROOM.MAX_DIMENSION} m`);
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }
    if (w < CONSTANTS.ROOM.MIN_DIMENSION || w > CONSTANTS.ROOM.MAX_DIMENSION) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `العرض يجب أن يكون بين ${CONSTANTS.ROOM.MIN_DIMENSION} و ${CONSTANTS.ROOM.MAX_DIMENSION} متر` 
            : `Width must be between ${CONSTANTS.ROOM.MIN_DIMENSION} and ${CONSTANTS.ROOM.MAX_DIMENSION} m`);
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }
    if (h < CONSTANTS.ROOM.MIN_HEIGHT || h > CONSTANTS.ROOM.MAX_HEIGHT) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `الارتفاع يجب أن يكون بين ${CONSTANTS.ROOM.MIN_HEIGHT} و ${CONSTANTS.ROOM.MAX_HEIGHT} متر` 
            : `Height must be between ${CONSTANTS.ROOM.MIN_HEIGHT} and ${CONSTANTS.ROOM.MAX_HEIGHT} m`);
        validationDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
        return;
    }

    validationDiv.classList.add('hidden');

    const btu = (l * w * h) * s;
    const hpExact = btu / 8000;
    const tr = btu / 12000;

    let mHP = 1.5, mBTU = 12000, mTR = 1, mAmp = 6.5;
    if (hpExact <= 1.5) { mHP = 1.5; mBTU = 12000; mTR = 1; mAmp = 6.5; }
    else if (hpExact <= 2.25) { mHP = 2.25; mBTU = 18000; mTR = 1.5; mAmp = 9; }
    else if (hpExact <= 3.0) { mHP = 3; mBTU = 24000; mTR = 2; mAmp = 12; }
    else if (hpExact <= 4.0) { mHP = 4; mBTU = 32000; mTR = 2.6; mAmp = 16; }
    else { mHP = 5; mBTU = 40000; mTR = 3.3; mAmp = 20; }

    const roomResHp = document.getElementById('room-res-hp');
    const roomResBtu = document.getElementById('room-res-btu');
    const roomResTr = document.getElementById('room-res-tr');
    const roomResAmp = document.getElementById('room-res-amp');
    const roomMarketRes = document.getElementById('room-market-res');
    const marketTr = document.getElementById('market-tr');
    const marketBtu = document.getElementById('market-btu');
    const marketAmp = document.getElementById('market-amp');

    if (roomResHp) safeSetText(roomResHp, hpExact.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (roomResBtu) safeSetText(roomResBtu, Math.round(btu).toLocaleString('en-US'));
    if (roomResTr) safeSetText(roomResTr, tr.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (roomResAmp) safeSetText(roomResAmp, (hpExact * 4.2).toLocaleString('en-US', { maximumFractionDigits: 1 }));

    if (roomMarketRes) safeSetText(roomMarketRes, `${mHP} HP`);
    if (marketTr) safeSetText(marketTr, mTR.toLocaleString('en-US'));
    if (marketBtu) safeSetText(marketBtu, mBTU.toLocaleString('en-US'));
    if (marketAmp) safeSetText(marketAmp, mAmp.toLocaleString('en-US'));

    resultsDiv.classList.remove('hidden');
}

function calculateWire() {
    const amp = parseFloat(document.getElementById('wire-amp')?.value);
    const dist = parseFloat(document.getElementById('wire-dist')?.value);
    const rho = parseFloat(document.getElementById('wire-metal')?.value);
    const volt = parseFloat(document.getElementById('wire-phase')?.value);
    const resultDiv = document.getElementById('wire-result-div');
    const validationDiv = document.getElementById('wire-validation');
    
    if (!resultDiv || !validationDiv) return;
    
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isNaN(amp) || isNaN(dist)) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال الأمبير والمسافة' : 'Please enter current and distance');
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }

    if (amp < CONSTANTS.WIRE.MIN_CURRENT || amp > CONSTANTS.WIRE.MAX_CURRENT) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `الأمبير يجب أن يكون بين ${CONSTANTS.WIRE.MIN_CURRENT} و ${CONSTANTS.WIRE.MAX_CURRENT} A` 
            : `Current must be between ${CONSTANTS.WIRE.MIN_CURRENT} and ${CONSTANTS.WIRE.MAX_CURRENT} A`);
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }
    if (dist < CONSTANTS.WIRE.MIN_DISTANCE || dist > CONSTANTS.WIRE.MAX_DISTANCE) {
        safeSetText(validationDiv, currentLang === 'ar' 
            ? `المسافة يجب أن تكون بين ${CONSTANTS.WIRE.MIN_DISTANCE} و ${CONSTANTS.WIRE.MAX_DISTANCE} متر` 
            : `Distance must be between ${CONSTANTS.WIRE.MIN_DISTANCE} and ${CONSTANTS.WIRE.MAX_DISTANCE} m`);
        validationDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        return;
    }

    validationDiv.classList.add('hidden');
    const allowedDrop = volt * 0.03;
    const section_mm2 = (2 * dist * amp * rho) / allowedDrop;

    const diameter_mm = 2 * Math.sqrt(section_mm2 / Math.PI);

    const standards = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120];
    let suggested_mm2 = standards.find(s => s >= section_mm2) || Math.ceil(section_mm2);
    const suggested_dia = 2 * Math.sqrt(suggested_mm2 / Math.PI);

    const bgColor1 = isDarkMode ? 'bg-red-700' : 'bg-orange-500';
    const bgColor2 = isDarkMode ? 'from-red-900 to-red-800' : 'from-orange-950 to-orange-800';

    let resultHtml = `    
    <div class="space-y-4">    
        <div class="grid grid-cols-2 gap-3">    
            <div class="p-4 ${bgColor1} text-white rounded-xl text-center">    
                <div class="text-xs opacity-100 mb-1">${currentLang === 'ar' ? 'المقطع المحسوب' : 'Calculated area'}</div>    
                <div class="text-2xl font-bold num-font">${section_mm2.toFixed(2)}</div>    
                <div class="text-xs opacity-100">mm²</div>    
            </div>    
            <div class="p-4 ${bgColor1} text-white rounded-xl text-center">    
                <div class="text-xs opacity-100 mb-1">${currentLang === 'ar' ? 'القطر التقريبي' : 'Approx. diameter'}</div>    
                <div class="text-2xl font-bold num-font">${diameter_mm.toFixed(2)}</div>    
                <div class="text-xs opacity-100">mm</div>    
            </div>    
        </div>    

        <div class="p-5 bg-gradient-to-br ${bgColor2} text-white rounded-2xl text-center shadow-inner">    
            <div class="text-sm opacity-100 mb-2">${currentLang === 'ar' ? 'المقطع المقترح (القياسي الأقرب)' : 'Suggested (closest standard)'}</div>    
            <div class="text-3xl font-black num-font mb-1">${suggested_mm2}</div>    
            <div class="text-sm opacity-100">mm²</div>    
            <div class="text-xs opacity-100 mt-2">${currentLang === 'ar' ? 'قطر تقريبي ≈' : 'Approx. diameter ≈'} ${suggested_dia.toFixed(1)} mm</div>    
        </div>    
    </div>`;

    resultDiv.innerHTML = resultHtml;
    resultDiv.classList.remove('hidden');
}

function calculateFlow() {
    const unit = document.getElementById('flow-unit')?.value;
    const displacement = parseFloat(document.getElementById('flow-displacement')?.value);
    const rpm = parseFloat(document.getElementById('flow-rpm')?.value);
    const cylinders = Math.max(1, parseFloat(document.getElementById('flow-cylinders')?.value) || 1);
    const validationDiv = document.getElementById('flow-validation');
    const resultDiv = document.getElementById('flow-result-div');

    if (!validationDiv || !resultDiv) return;

    if (isNaN(displacement) || displacement <= 0) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال قيمة إزاحة صحيحة' : 'Please enter a valid displacement value');
        validationDiv.classList.remove('hidden');
        return;
    }
    if (isNaN(rpm) || rpm <= 0) {
        safeSetText(validationDiv, currentLang === 'ar' ? 'يرجى إدخال عدد لفات صحيح (RPM)' : 'Please enter a valid RPM value');
        validationDiv.classList.remove('hidden');
        return;
    }
    validationDiv.classList.add('hidden');

    let dispInLiters = 0;
    switch (unit) {
        case 'm3': dispInLiters = displacement * 1000; break;
        case 'L': dispInLiters = displacement; break;
        case 'cm3': dispInLiters = displacement / 1000; break;
        case 'in3': dispInLiters = displacement * 0.016387064; break;
        case 'ft3': dispInLiters = displacement * 28.3168466; break;
        case 'galUS': dispInLiters = displacement * 3.785411784; break;
        default: dispInLiters = displacement;
    }

    const flowLmin = dispInLiters * rpm * cylinders;
    const flowM3h = flowLmin * 0.06;
    const flowCFM = flowLmin * 0.0353147;
    const flowGPM = flowLmin * 0.264172;

    const flowLminEl = document.getElementById('flow-lmin');
    const flowM3hEl = document.getElementById('flow-m3h');
    const flowCfmEl = document.getElementById('flow-cfm');
    const flowGpmEl = document.getElementById('flow-gpm');

    if (flowLminEl) safeSetText(flowLminEl, flowLmin.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (flowM3hEl) safeSetText(flowM3hEl, flowM3h.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (flowCfmEl) safeSetText(flowCfmEl, flowCFM.toLocaleString('en-US', { maximumFractionDigits: 2 }));
    if (flowGpmEl) safeSetText(flowGpmEl, flowGPM.toLocaleString('en-US', { maximumFractionDigits: 2 }));

    resultDiv.classList.remove('hidden');
}

const refrigerantPressures = {
    'R22': { suction: '68-72', discharge: '225-250', stope: '58-62' },
    'R134a': { suction: '25-35', discharge: '130-150', stope: '20-25' },
    'R404a': { suction: '45-55', discharge: '240-280', stope: '40-45' },
    'R407c': { suction: '55-65', discharge: '250-300', stope: '50-55' },
    'R410a': { suction: '120-130', discharge: '350-400', stope: '110-115' },
    'R32': { suction: '115-125', discharge: '340-380', stope: '105-110' },
    'R600a': { suction: '5-10', discharge: '70-90', stope: '3-7' },
    'R290': { suction: '45-55', discharge: '200-240', stope: '40-45' }
};

function renderPressureTable() {
    let tableHtml = `
<div class="mt-8">
    <h4 class="font-bold text-xl mb-4 text-center text-blue-700" data-lang="pressureTable">${translations[currentLang].pressureTable}</h4>
    <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse min-w-[600px]">
            <thead>
                <tr class="bg-blue-600 text-white">
                    <th class="p-3 text-center w-1/4" data-lang="refrigerant">${translations[currentLang].refrigerant}</th>
                    <th class="p-3 text-center w-1/4" data-lang="suction">${translations[currentLang].suction}</th>
                    <th class="p-3 text-center w-1/4" data-lang="discharge">${translations[currentLang].discharge}</th>
                    <th class="p-3 text-center w-1/4" data-lang="stope">${translations[currentLang].stope}</th>
                </tr>
            </thead>
            <tbody>
`;

    const refrigerants = ['R410a', 'R404a', 'R407c', 'R290', 'R32', 'R600a', 'R134a', 'R22'];

    refrigerants.forEach((ref, index) => {
        const data = refrigerantPressures[ref] || { suction: '—', discharge: '—', stope: '—' };
        const bgColor = index % 2 === 0 ? 'bg-gray-50' : 'bg-white';
        tableHtml += `
        <tr class="${bgColor} border-b">
            <td class="p-3 font-bold text-center">${ref}</td>
            <td class="p-3 text-center">${data.suction}</td>
            <td class="p-3 text-center">${data.discharge}</td>
            <td class="p-3 text-center">${data.stope}</td>
        </tr>
    `;
    });

    tableHtml += `
            </tbody>
        </table>
    </div>
    <p class="text-xs text-gray-500 mt-2 text-center" data-lang="pressureNote">${translations[currentLang].pressureNote}</p>
</div>
`;

    return tableHtml;
}

function populateCompressorList() {
    console.log('جاري ملء قائمة الضواغط...');
    const datalist = document.getElementById('comp-list');
    if (!datalist) {
        console.error('❌ لم يتم العثور على عنصر comp-list');
        return;
    }

    datalist.innerHTML = '';

    if (typeof compressorsData === 'undefined') {
        console.error('❌ ملف compressors-data.js غير موجود أو لم يتم تحميله');
        alert(currentLang === 'ar' ? 'خطأ في تحميل قاعدة بيانات الضواغط' : 'Error downloading the compressor database');
        return;
    }

    const models = Object.keys(compressorsData);
    console.log(`✅ تم العثور على ${models.length} ضاغط في ملف البيانات`);

    models.slice(0, 100).forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        datalist.appendChild(option);
    });
}

// ==================== نظام الذكاء الاصطناعي المتعدد ====================
// نماذج AI مدعومة (بدون مفاتيح - المفاتيح في PHP)
const AI_MODELS = [
    {
        name: 'Gemini',
        provider: 'Google',
        active: true
    },
    {
        name: 'ChatGPT',
        provider: 'OpenAI',
        active: false
    },
    {
        name: 'Grok',
        provider: 'xAI',
        active: false
    },
    {
        name: 'DeepSeek',
        provider: '深度求索',
        active: false
    }
];

// إحصائيات استخدام النماذج
const modelStats = {
    attempts: {},
    successes: {},
    failures: {},
    lastUsed: {}
};

// ==================== دالة مساعدة لاستخراج الحقول من النص (مُحسنة) ====================
function extractField(text, ...possibleNames) {
    // تنظيف النص من الأحرف الزائدة
    const cleanText = text.replace(/[\\"]/g, ' ').replace(/\s+/g, ' ');
    
    for (const name of possibleNames) {
        // نمط واحد متكامل للبحث
        const patterns = [
            // JSON pattern
            new RegExp(`["']${name}["']\\s*[:=]\\s*["']([^"']+)["']`, 'i'),
            new RegExp(`["']${name}["']\\s*[:=]\\s*([^,\\n}\\r]+)`, 'i'),
            // Text patterns
            new RegExp(`${name}[\\s\\n]*[:=][\\s\\n]*([^\\n\\r]+)`, 'i'),
            new RegExp(`${name}\\s+(?:هو|is|:)\\s+([^\\n\\r]+)`, 'i'),
            // Arabic patterns
            new RegExp(`(?:الشركة المصنعة|الصانع|manufacturer)[\\s\\n]*[:=]\\s*([^\\n\\r]+)`, 'i'),
            new RegExp(`(?:الحصان|hp|horsepower)[\\s\\n]*[:=]\\s*([\\d.]+)`, 'i')
        ];
        
        for (const pattern of patterns) {
            const match = cleanText.match(pattern);
            if (match && match[1]) {
                return match[1].trim().replace(/[",]$/, '');
            }
        }
    }
    return "--";
}

// ==================== دالة عرض موحدة للبيانات (محل التكرار) ====================
function displayCompressorData(model, data, source = 'local') {
    const resultDiv = document.getElementById('comp-result-div');
    if (!resultDiv) return;
    
    const displayValue = (value) => (value && value !== '—' && value !== '--') ? value : '—';
    const displacementUnitText = currentLang === 'ar' ? 'سم³/دورة' : 'cc/rev';
    const lang = currentLang;

    // حساب نسبة نجاح النموذج (لنتائج AI فقط)
    let successRateHtml = '';
    if (source !== 'local' && modelStats.successes[source]) {
        const attempts = modelStats.attempts[source] || 1;
        const successes = modelStats.successes[source] || 0;
        const successRate = Math.round((successes / attempts) * 100);
        successRateHtml = `
            <span class="text-xs bg-gray-200 px-3 py-1 rounded-full">
                ${successRate}% ${lang === 'ar' ? 'دقة' : 'accuracy'}
            </span>
        `;
    }

    // رأس النتيجة
    let headerHtml = '';
    if (source !== 'local') {
        headerHtml = `
        <div class="flex justify-between items-center mb-4">
            <span class="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                <i class="fas fa-robot ml-1"></i> 
                ${lang === 'ar' ? translations.ar.aiSuccessWith : translations.en.aiSuccessWith} ${source}
            </span>
            ${successRateHtml}
        </div>
        `;
    }

    let html = `
    <div class="bg-gradient-to-br ${source !== 'local' ? 'from-purple-50 to-blue-50 border-purple-200' : 'bg-white border-blue-100'} p-6 rounded-3xl shadow-lg border-2 max-w-4xl mx-auto">
        ${headerHtml}

        <!-- Header -->
        <div class="text-center mb-6">
            <div class="inline-block bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm mb-3">
                ${displayValue(data.application)} ${data.compressorType && data.compressorType !== '--' ? `- ${data.compressorType}` : ''}
            </div>
            <div class="text-4xl font-black text-gray-600">${model}</div>
            <div class="text-2xl text-blue-800">
                ${displayValue(data.manufacturer)}<br>
                ${data.brand && data.brand !== '--' ? `<span class="block text-lg text-gray-500">${data.brand}</span>` : ''}
            </div>
        </div>

        <!-- شبكة البيانات -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <!-- 1. Horsepower -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الحصان (HP)' : 'Horsepower (HP)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.hp)}</div>
            </div>

            <!-- 2. Power (W) -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'القدرة (W)' : 'Power (W)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.powerW)}</div>
            </div>

            <!-- 3. Refrigerant -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الفريون' : 'Refrigerant'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.refrigerant)}</div>
            </div>

            <!-- 4. Voltage -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الجهد' : 'Voltage'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.voltage)}</div>
            </div>

            <!-- 5. Compressor Type -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'نوع الضاغط' : 'Compressor Type'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.compressorType)}</div>
            </div>

            <!-- 6. Climate Class -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الفئة المناخية' : 'Climate Class'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.climateClass)}</div>
            </div>

            <!-- 7. Start Amp (LRA) -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'أمبير البدء (LRA)' : 'Start Amp (LRA)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.startAmp || data.lra)}</div>
            </div>

            <!-- 8. Run Amp (RLA) -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'أمبير التشغيل (RLA)' : 'Run Amp (RLA)'}</div>
                <div class="text-3xl font-bold text-blue-800">${displayValue(data.runAmp || data.rla)}</div>
            </div>

            <!-- 9. Displacement -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] md:col-span-2 shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الإزاحة' : 'Displacement'}</div>
                <div class="text-3xl font-bold text-blue-800">
                    ${displayValue(data.displacement)} ${data.displacement && data.displacement !== '—' && data.displacement !== '--' ? displacementUnitText : ''}
                </div>
            </div>

            <!-- 10. Oil -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] md:col-span-2 shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'الزيت' : 'Oil'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.oilType)} ${data.oilQuantity && data.oilQuantity !== '--' ? '- ' + data.oilQuantity : ''}</div>
            </div>

            <!-- 11. Suction Press -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'ضغط السحب' : 'Suction Press'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.suctionPressure)}</div>
            </div>

            <!-- 12. Discharge Press -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'ضغط الطرد' : 'Discharge Press'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.dischargePressure)}</div>
            </div>

            <!-- 13. Stope Press -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'ضغط التوقف' : 'Stope Press'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.stopePressure)}</div>
            </div>

            <!-- 14. Run Capacitor -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'مكثف التشغيل' : 'Run Capacitor'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.capacitorRun)}</div>
            </div>

            <!-- 15. Start Capacitor -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'مكثف البدء' : 'Start Capacitor'}</div>
                <div class="text-2xl font-bold text-blue-800">${displayValue(data.capacitorStart)}</div>
            </div>

            <!-- 16. Capillary Tube -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center flex flex-col justify-center min-h-[120px] shadow-sm">
                <div class="text-xs font-bold text-gray-600">${lang === 'ar' ? 'أنبوبة شعرية' : 'Capillary Tube'}</div>
                <div class="text-xl font-bold text-blue-800">${displayValue(data.capillaryTube)}</div>
            </div>

            <!-- 17. Notes -->
            <div class="bg-blue-50 p-4 rounded-2xl text-center border border-gray-200 flex flex-col min-h-[120px] justify-center md:col-span-4 shadow-sm">
                <div class="font-bold text-lg mb-3 text-gray-600">${lang === 'ar' ? 'ملاحظات:' : 'Notes:'}</div>
                <div class="text-blue-800 leading-relaxed">${displayValue(data.notes)}</div>
            </div>
            
        </div>`;

    // إضافة إحصائيات النماذج لنتائج AI
    if (source !== 'local' && Object.keys(modelStats.successes).length > 0) {
        html += `
        <!-- إحصائيات النماذج -->
        <div class="mt-6 p-4 bg-gray-50 rounded-2xl">
            <p class="text-sm font-bold text-gray-600 mb-2">📊 ${lang === 'ar' ? 'إحصائيات النماذج' : 'Model Statistics'}</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                ${Object.entries(modelStats.successes).map(([name, count]) => {
                    const attempts = modelStats.attempts[name] || 1;
                    const rate = Math.round((count / attempts) * 100);
                    return `
                        <div class="bg-white p-2 rounded-lg text-center">
                            <span class="font-bold">${name}</span><br>
                            <span class="text-green-600">${rate}%</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- تنبيه -->
        <div class="mt-4 text-center text-sm text-gray-500">
            <i class="fas fa-info-circle ml-1"></i>
            ${lang === 'ar' ? 'نتيجة من ' + source + ' - قد تحتاج للتحقق' : 'Result from ' + source + ' - may need verification'}
        </div>`;
    }

    html += `
    </div>
    ${renderPressureTable()}`;

    resultDiv.innerHTML = html;
    resultDiv.classList.remove('hidden');
}

// ==================== دالة البحث المتعدد الذكية (مُحسنة) ====================
async function searchWithMultipleAI(compressorModel) {
    const lang = currentLang;
    const resultDiv = document.getElementById('comp-result-div');
    if (!resultDiv) return false;
    
    // بناء الـ prompt
    const prompt = lang === 'ar' 
        ? `أنت خبير ضواغط التبريد. أعطني معلومات دقيقة للضاغط "${compressorModel}" بصيغة JSON فقط. لا تكتب أي كلام خارج JSON.

{
  "manufacturer": "الشركة المصنعة (مثلاً: Tecumseh, Embraco, Copeland)",
  "brand": "العلامة التجارية (اختياري)",
  "hp": "الحصان (رقم فقط)",
  "powerW": "القدرة بالواط (رقم فقط)",
  "refrigerant": "نوع الفريون (مثلاً: R134a, R600a, R404a)",
  "voltage": "الجهد الكهربائي (مثلاً: 220-240V)",
  "compressorType": "نوع الضاغط (reciprocating/rotary/scroll/screw /inverter or not inverter)",
  "climateClass": "الفئة المناخية (مثلاً: T, ST, N)",
  "startAmp": "أمبير البدء LRA",
  "runAmp": "أمبير التشغيل RLA",
  "displacement": "الإزاحة (cc/rev)",
  "oilType": "نوع الزيت (مثلاً: POE, Mineral)",
  "oilQuantity": "كمية الزيت (مثلاً: 400ml)",
  "suctionPressure": "ضغط السحب (psi)",
  "dischargePressure": "ضغط الطرد (psi)",
  "stopePressure": "ضغط التوقف (psi)",
  "capacitorRun": "مكثف التشغيل (مثلاً: 35µF)",
  "capacitorStart": "مكثف البدء (مثلاً: 150µF)",
  "capillaryTube": "الأنبوبة الشعرية (مثلاً: 0.8mm x 3m)",
  "application": "التطبيق (مثلاً: Refrigerator, Freezer, AC)",
  "notes": "ملاحظات إضافية"
}

أي قيمة غير متوفرة استخدم "--". JSON فقط ولا شيء آخر.`
        : `You are a refrigeration compressor expert. Give me accurate information for "${compressorModel}" in JSON format only. Do not write anything outside the JSON.

{
  "manufacturer": "Manufacturer name (e.g., Tecumseh, Embraco, Copeland)",
  "brand": "Brand name (optional)",
  "hp": "Horsepower (number only)",
  "powerW": "Power in Watts (number only)",
  "refrigerant": "Refrigerant type (e.g., R134a, R600a, R404a)",
  "voltage": "Voltage (e.g., 220-240V)",
  "compressorType": "Type (reciprocating/rotary/scroll/screw/inverter or not inverter)",
  "climateClass": "Climate class (e.g., T, ST, N)",
  "startAmp": "Start Amp LRA",
  "runAmp": "Run Amp RLA",
  "displacement": "Displacement (cc/rev)",
  "oilType": "Oil type (e.g., POE, Mineral)",
  "oilQuantity": "Oil quantity (e.g., 400ml)",
  "suctionPressure": "Suction pressure (psi)",
  "dischargePressure": "Discharge pressure (psi)",
  "stopePressure": "Stope pressure (psi)",
  "capacitorRun": "Run capacitor (e.g., 35µF)",
  "capacitorStart": "Start capacitor (e.g., 150µF)",
  "capillaryTube": "Capillary tube (e.g., 0.8mm x 3m)",
  "application": "Application (e.g., Refrigerator, Freezer, AC)",
  "notes": "Additional notes"
}

Use "--" for missing values. Return JSON only.`;

    // ترتيب النماذج حسب النجاح السابق
    const sortedModels = [...AI_MODELS]
        .filter(m => m.active)
        .sort((a, b) => {
            const successA = modelStats.successes[a.name] || 0;
            const successB = modelStats.successes[b.name] || 0;
            return successB - successA;
        });

    if (sortedModels.length === 0) {
        console.warn('⚠️ لا توجد نماذج AI نشطة');
        return false;
    }

    let attempts = 0;

    // تجربة كل نموذج بالترتيب
    for (const model of sortedModels) {
        attempts++;
        
        // تحديث واجهة المستخدم
        resultDiv.innerHTML = `
            <div class="p-8 bg-purple-50 text-purple-600 rounded-3xl text-center font-bold">
                <i class="fas fa-robot fa-spin text-3xl mb-3"></i><br>
                ${lang === 'ar' ? translations.ar.aiTryingModel : translations.en.aiTryingModel} 
                <span class="bg-purple-200 px-3 py-1 rounded-full">${model.name}</span><br>
                <span class="text-sm text-gray-500">(${attempts}/${sortedModels.length})</span>
            </div>
        `;

        try {
            console.log(`🔄 محاولة استخدام ${model.name}...`);
            
            // تحديث الإحصائيات
            modelStats.attempts[model.name] = (modelStats.attempts[model.name] || 0) + 1;
            modelStats.lastUsed[model.name] = new Date().toISOString();
            
            // استدعاء PHP Proxy
            const response = await fetch(getProxyUrl() + '&provider=' + model.name.toLowerCase(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt
                })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            
            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error || 'Unknown error');
            }
            
            // معالجة الرد
            let jsonData = null;
            let responseText = result.response;
            
            console.log('📥 الرد الخام:', responseText);
            
            // محاولة استخراج JSON
            try {
                // محاولة 1: البحث عن أول { وآخر }
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    jsonData = JSON.parse(jsonMatch[0]);
                } else {
                    // محاولة 2: لو النص كله هو JSON
                    jsonData = JSON.parse(responseText);
                }
            } catch (e) {
                console.log('❌ فشل parsing JSON، بنحاول استخراج الحقول');
                
                // محاولة استخراج الحقول الأساسية
                jsonData = {
                    manufacturer: extractField(responseText, 'manufacturer', 'الشركة المصنعة', 'الصانع'),
                    brand: extractField(responseText, 'brand', 'العلامة التجارية'),
                    hp: extractField(responseText, 'hp', 'الحصان', 'horsepower'),
                    powerW: extractField(responseText, 'powerW', 'power', 'القدرة', 'الواط'),
                    refrigerant: extractField(responseText, 'refrigerant', 'الفريون', 'refrigerant'),
                    voltage: extractField(responseText, 'voltage', 'الجهد', 'voltage'),
                    compressorType: extractField(responseText, 'compressorType', 'نوع الضاغط', 'type'),
                    climateClass: extractField(responseText, 'climateClass', 'الفئة المناخية'),
                    startAmp: extractField(responseText, 'startAmp', 'أمبير البدء', 'lra'),
                    runAmp: extractField(responseText, 'runAmp', 'أمبير التشغيل', 'rla'),
                    displacement: extractField(responseText, 'displacement', 'الإزاحة'),
                    oilType: extractField(responseText, 'oilType', 'نوع الزيت'),
                    oilQuantity: extractField(responseText, 'oilQuantity', 'كمية الزيت'),
                    suctionPressure: extractField(responseText, 'suctionPressure', 'ضغط السحب'),
                    dischargePressure: extractField(responseText, 'dischargePressure', 'ضغط الطرد'),
                    stopePressure: extractField(responseText, 'stopePressure', 'ضغط التوقف'),
                    capacitorRun: extractField(responseText, 'capacitorRun', 'مكثف التشغيل'),
                    capacitorStart: extractField(responseText, 'capacitorStart', 'مكثف البدء'),
                    capillaryTube: extractField(responseText, 'capillaryTube', 'الأنبوبة الشعرية'),
                    application: extractField(responseText, 'application', 'التطبيق'),
                    notes: extractField(responseText, 'notes', 'ملاحظات') || responseText.substring(0, 200)
                };
            }
            
            if (!jsonData) {
                throw new Error('Could not parse response');
            }
            
            // تسجيل النجاح
            modelStats.successes[model.name] = (modelStats.successes[model.name] || 0) + 1;
            
            // عرض النتيجة باستخدام الدالة الموحدة
            displayCompressorData(compressorModel, jsonData, model.name);
            
            console.log(`✅ نجاح باستخدام ${model.name}`);
            return true;
            
        } catch (error) {
            console.warn(`❌ فشل ${model.name}:`, error.message);
            modelStats.failures[model.name] = (modelStats.failures[model.name] || 0) + 1;
            continue;
        }
    }

    return false;
}

// ==================== دالة عرض البيانات المحلية (تستخدم الدالة الموحدة) ====================
function displayLocalCompressor(model, d) {
    displayCompressorData(model, d, 'local');
}

// ==================== دالة البحث الرئيسية (مُحسنة) ====================
async function searchCompressor() {
    const input = document.getElementById('comp-input')?.value.trim();
    const resultDiv = document.getElementById('comp-result-div');
    const lang = currentLang;

    if (!input || !resultDiv) {
        if (!input) alert(lang === 'ar' ? '❌ يرجى كتابة موديل الضاغط' : '❌ Please enter compressor model');
        return;
    }

    // عرض رسالة البحث
    resultDiv.innerHTML = `
        <div class="p-8 bg-blue-50 text-blue-600 rounded-3xl text-center font-bold">
            <i class="fas fa-spinner fa-spin text-3xl mb-3"></i><br>
            ${lang === 'ar' ? 'جاري البحث عن معلومات الضاغط...' : 'Searching for compressor information...'}
        </div>
    `;
    resultDiv.classList.remove('hidden');

    // البحث في البيانات المحلية أولاً
    if (typeof compressorsData !== 'undefined') {
        let foundModel = null;
        let d = null;

        if (compressorsData[input]) {
            foundModel = input;
            d = compressorsData[input];
        } else {
            for (let key in compressorsData) {
                if (key.toLowerCase().includes(input.toLowerCase())) {
                    foundModel = key;
                    d = compressorsData[key];
                    break;
                }
            }
        }

        if (d) {
            displayLocalCompressor(foundModel, d);
            return;
        }
    }

    // عرض رسالة البحث المتعدد
    const activeModels = AI_MODELS.filter(m => m.active).map(m => m.name).join(' → ');
    resultDiv.innerHTML = `
        <div class="p-8 bg-purple-50 text-purple-600 rounded-3xl text-center font-bold">
            <i class="fas fa-robot fa-spin text-3xl mb-3"></i><br>
            ${lang === 'ar' ? translations.ar.aiMultipleSearch : translations.en.aiMultipleSearch}<br>
            <span class="text-sm text-gray-500">
                ${activeModels || 'Gemini فقط متاح حالياً'}
            </span>
        </div>
    `;

    // تجربة النماذج المتعددة
    const success = await searchWithMultipleAI(input);
    
    if (!success) {
        resultDiv.innerHTML = `
            <div class="p-8 bg-red-50 text-red-600 rounded-3xl text-center font-bold">
                <i class="fas fa-exclamation-circle text-4xl mb-3"></i><br>
                ${lang === 'ar' ? translations.ar.aiAllFailed : translations.en.aiAllFailed}<br>
                <span class="text-sm block mt-2">
                    ${lang === 'ar' ? translations.ar.aiTryManual : translations.en.aiTryManual}
                </span>
            </div>
        `;
    }
}

// ==================== دوال مساعدة للنسخ ====================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg z-50 animate-fade-in-up';
        toast.textContent = currentLang === 'ar' ? translations.ar.copied : translations.en.copied;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }).catch(() => {
        alert(currentLang === 'ar' ? 'فشل النسخ' : 'Copy failed');
    });
}

// ==================== دالة لإضافة مفتاح API جديد ====================
function updateModelAPI(modelName, newApiKey) {
    console.log('⚠️ المفاتيح الآن في ملف proxy.php وليس في JavaScript');
    return false;
}

// ==================== دالة لعرض حالة النماذج ====================
function showModelsStatus() {
    console.log('📊 حالة نماذج الذكاء الاصطناعي:');
    AI_MODELS.forEach(model => {
        const attempts = modelStats.attempts[model.name] || 0;
        const successes = modelStats.successes[model.name] || 0;
        const rate = attempts > 0 ? Math.round((successes / attempts) * 100) : 0;
        console.log(`${model.name}: ${model.active ? '🟢 نشط' : '🔴 غير نشط'} (نسبة نجاح: ${rate}%)`);
    });
}

// ==================== دالة تشخيص الاتصال بالـ Proxy ====================
async function diagnoseProxy() {
    try {
        console.log('🔍 فحص الاتصال بالـ proxy...');
        const response = await fetch(getProxyUrl() + '?test=1');
        const data = await response.json();
        console.log('✅ Proxy متصل:', data);
        return true;
    } catch (e) {
        console.error('❌ فشل الاتصال بالـ proxy:', e);
        return false;
    }
}

// ==================== تهيئة الصفحة بعد تحميل كل العناصر ====================
function initializeApp() {
    console.log("🔥 تهيئة التطبيق...");
    
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.add('no-transition');
    }
    
    applyLanguage(currentLang);
    resetElecFields();
    updateSensorConstants();
    populateCompressorList();
    updateNightModeText();
    
    // تحديث اتجاه الأسهم - تأكيد إضافي
    setTimeout(() => {
        updateArrowsDirection();
    }, 100);
    
    setTimeout(() => {
        if (sidebar) {
            sidebar.classList.remove('no-transition');
        }
    }, 150);
    
    console.log("✅ تم تهيئة التطبيق بنجاح!");
}

window.addEventListener('load', function() {
    setTimeout(initializeApp, 100);
    setTimeout(diagnoseProxy, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 DOM جاهز، بنربط الأحداث...");
    
    const langToggle = document.getElementById('langToggleSidebar');
    if (langToggle) {
        langToggle.onclick = function(e) {
            e.preventDefault();
            console.log("🌐 تم الضغط على زر اللغة");
            toggleLanguage();
            return false;
        };
    }
    
    const themeToggle = document.getElementById('themeToggleSidebar');
    if (themeToggle) {
        themeToggle.onclick = function(e) {
            e.preventDefault();
            console.log("🌙/☀️ تم الضغط على زر الوضع الليلي");
            toggleDarkMode();
            return false;
        };
    }
});

// ربط الدوال بالنطاق العام
window.toggleDarkMode = toggleDarkMode;
window.toggleLanguage = toggleLanguage;
window.toggleSidebar = toggleSidebar;
window.calculateRoom = calculateRoom;
window.searchCompressor = searchCompressor;
window.setPowerMode = setPowerMode;
window.calculatePower = calculatePower;
window.calculateElectrical = calculateElectrical;
window.calculateTemperature = calculateTemperature;
window.calculateWire = calculateWire;
window.calculateFlow = calculateFlow;
window.openUnitConverter = openUnitConverter;
window.convertNow = convertNow;
window.swapConverterUnits = swapConverterUnits;
window.swapTempMode = swapTempMode;
window.updateSensorConstants = updateSensorConstants;
window.updateLawType = updateLawType;
window.openWireCalc = openWireCalc;
window.closeWireModal = closeWireModal;
window.openFlowCalculator = openFlowCalculator;
window.closeFlowModal = closeFlowModal;
window.closeModal = closeModal;
window.updateModelAPI = updateModelAPI;
window.showModelsStatus = showModelsStatus;
window.diagnoseProxy = diagnoseProxy;
window.updateArrowsDirection = updateArrowsDirection;
window.copyToClipboard = copyToClipboard;
    
    
