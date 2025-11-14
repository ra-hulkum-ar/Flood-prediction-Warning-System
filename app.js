// FloodSafe India - Application Logic

// State Management
const appState = {
  isLoggedIn: false,
  currentPage: 'home',
  userProfile: null,
  userLocation: null,
  weatherData: null,
  floodRisk: null,
  currentLanguage: 'en',
  isOnline: navigator.onLine,
  offlineData: null,
  registeredUsers: {}, // Simulated user database (phone -> profile)
  currentOTP: null,
  currentPhone: null,
  authStep: 1,
  locationAttempts: 0,
  isSecureContext: false,
  isDemoMode: false
};

// COMPLETE Translation Dictionary - ALL 8 INDIAN LANGUAGES
const translations = {
  // ENGLISH
  en: {
    landingtitle: "FloodSafe India",
    tagline: "Advanced Flood Prediction & Early Warning System",
    btngetstarted: "Get Started",
    btnabout: "About Us",
    btncalculator: "Flood Calculator",
    logintitle: "Login to FloodSafe",
    entermobile: "Enter Your Mobile Number",
    btngetopt: "Get OTP",
    enterotp: "Enter OTP",
    btnverify: "Verify",
    locationtitle: "Set Your Location",
    usegps: "Use GPS Location",
    manualentry: "Enter Manually",
    selectcity: "Select City",
    enterlat: "Latitude",
    enterlon: "Longitude",
    btncontinue: "Continue",
    navdashboard: "Dashboard",
    navprediction: "Flood Prediction",
    navcalculator: "Calculator",
    navhistory: "History",
    navsafety: "Safety",
    navmap: "Map",
    navprofile: "Profile",
    dashboardtitle: "Dashboard",
    welcome: "Welcome",
    currentweather: "Current Weather",
    temperature: "Temperature",
    humidity: "Humidity",
    pressure: "Pressure",
    windspeed: "Wind Speed",
    riskgauge: "Flood Risk Gauge",
    quickactions: "Quick Actions",
    floodhistory: "Regional Flood History",
    rainfallforecast: "7-Day Rainfall Forecast",
    highriskdistricts: "High-Risk Districts",
    calculatortitle: "Flood Calculator",
    simplemode: "Simple Mode",
    advancedmode: "Advanced Mode",
    distance: "Distance (km)",
    floodspeed: "Flood Speed (km/h)",
    calculate: "Calculate",
    results: "Results",
    arrivaltime: "Estimated Arrival Time",
    hours: "Hours",
    minutes: "Minutes",
    safetytitle: "Safety Guidelines",
    beforeflood: "Before Flood",
    duringflood: "During Flood",
    afterflood: "After Flood",
    emergencycontacts: "Emergency Contacts",
    close: "Close",
    back: "Back",
    backtohome: "Back to Home",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    app_name: 'FloodSafe India',
    login: 'Sign In / Register',
    logout: 'Logout',
    calculator: 'Flood Calculator'
  },
  
  // HINDI - हिन्दी
  hi: {
    landingtitle: "फ्लडसेफ इंडिया",
    tagline: "उन्नत बाढ़ पूर्वानुमान और प्रारंभिक चेतावनी प्रणाली",
    btngetstarted: "शुरू करें",
    btnabout: "हमारे बारे में",
    btncalculator: "बाढ़ कैलकुलेटर",
    logintitle: "फ्लडसेफ में लॉगिन करें",
    entermobile: "अपना मोबाइल नंबर दर्ज करें",
    btngetopt: "ओटीपी प्राप्त करें",
    enterotp: "ओटीपी दर्ज करें",
    btnverify: "सत्यापित करें",
    locationtitle: "अपना स्थान सेट करें",
    usegps: "जीपीएस स्थान उपयोग करें",
    manualentry: "मैन्युअल रूप से दर्ज करें",
    selectcity: "शहर चुनें",
    enterlat: "अक्षांश",
    enterlon: "देशांतर",
    btncontinue: "जारी रखें",
    navdashboard: "डैशबोर्ड",
    navprediction: "बाढ़ पूर्वानुमान",
    navcalculator: "कैलकुलेटर",
    navhistory: "इतिहास",
    navsafety: "सुरक्षा",
    navmap: "मानचित्र",
    navprofile: "प्रोफाइल",
    dashboardtitle: "डैशबोर्ड",
    welcome: "स्वागत है",
    currentweather: "वर्तमान मौसम",
    temperature: "तापमान",
    humidity: "आर्द्रता",
    pressure: "दबाव",
    windspeed: "हवा की गति",
    riskgauge: "बाढ़ जोखिम गेज",
    quickactions: "त्वरित कार्य",
    floodhistory: "क्षेत्रीय बाढ़ इतिहास",
    rainfallforecast: "7 दिन का वर्षा पूर्वानुमान",
    highriskdistricts: "उच्च जोखिम वाले जिले",
    calculatortitle: "बाढ़ कैलकुलेटर",
    simplemode: "सरल मोड",
    advancedmode: "उन्नत मोड",
    distance: "दूरी (किमी)",
    floodspeed: "बाढ़ की गति (किमी/घंटा)",
    calculate: "गणना करें",
    results: "परिणाम",
    arrivaltime: "अनुमानित आगमन समय",
    hours: "घंटे",
    minutes: "मिनट",
    safetytitle: "सुरक्षा दिशानिर्देश",
    beforeflood: "बाढ़ से पहले",
    duringflood: "बाढ़ के दौरान",
    afterflood: "बाढ़ के बाद",
    emergencycontacts: "आपातकालीन संपर्क",
    close: "बंद करें",
    back: "वापस",
    backtohome: "होम पर वापस जाएं",
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    success: "सफलता",
    app_name: 'फ्लडसेफ इंडिया',
    login: 'साइन इन / रजिस्टर',
    logout: 'लॉगआउट',
    calculator: 'बाढ़ कैलकुलेटर'
  },
  
  // TAMIL - தமிழ்
  ta: {
    landingtitle: "ஃப்ளட்சேஃப் இந்தியா",
    tagline: "மேம்பட்ட வெள்ள கணிப்பு மற்றும் முன் எச்சரிக்கை அமைப்பு",
    btngetstarted: "தொடங்குங்கள்",
    btnabout: "எங்களை பற்றி",
    btncalculator: "வெள்ள கணிப்பான்",
    logintitle: "ஃப்ளட்சேஃப்-இல் உள்நுழையவும்",
    entermobile: "உங்கள் மொபைல் எண்ணை உள்ளிடவும்",
    btngetopt: "OTP பெறுக",
    enterotp: "OTP உள்ளிடவும்",
    btnverify: "சரிபார்க்கவும்",
    locationtitle: "உங்கள் இடத்தை அமைக்கவும்",
    usegps: "GPS இடத்தைப் பயன்படுத்தவும்",
    manualentry: "கைமுறையாக உள்ளிடவும்",
    selectcity: "நகரத்தைத் தேர்ந்தெடுக்கவும்",
    enterlat: "அட்சரேகை",
    enterlon: "தீர்க்கரேகை",
    btncontinue: "தொடரவும்",
    navdashboard: "டாஷ்போர்டு",
    navprediction: "வெள்ள கணிப்பு",
    navcalculator: "கணிப்பான்",
    navhistory: "வரலாறு",
    navsafety: "பாதுகாப்பு",
    navmap: "வரைபடம்",
    navprofile: "சுயவிவரம்",
    dashboardtitle: "டாஷ்போர்டு",
    welcome: "வரவேற்கிறோம்",
    currentweather: "தற்போதைய வானிலை",
    temperature: "வெப்பநிலை",
    humidity: "ஈரப்பதம்",
    pressure: "அழுத்தம்",
    windspeed: "காற்றின் வேகம்",
    riskgauge: "வெள்ள ஆபத்து அளவுகோல்",
    quickactions: "விரைவு செயல்கள்",
    floodhistory: "பிராந்திய வெள்ள வரலாறு",
    rainfallforecast: "7 நாள் மழை முன்னறிவிப்பு",
    highriskdistricts: "அதிக ஆபத்துள்ள மாவட்டங்கள்",
    calculatortitle: "வெள்ள கணிப்பான்",
    simplemode: "எளிய முறை",
    advancedmode: "மேம்பட்ட முறை",
    distance: "தூரம் (கிமீ)",
    floodspeed: "வெள்ள வேகம் (கிமீ/மணி)",
    calculate: "கணக்கிடுங்கள்",
    results: "முடிவுகள்",
    arrivaltime: "மதிப்பிடப்பட்ட வருகை நேரம்",
    hours: "மணிநேரம்",
    minutes: "நிமிடங்கள்",
    safetytitle: "பாதுகாப்பு வழிகாட்டுதல்கள்",
    beforeflood: "வெள்ளத்திற்கு முன்",
    duringflood: "வெள்ளத்தின் போது",
    afterflood: "வெள்ளத்திற்குப் பிறகு",
    emergencycontacts: "அவசர தொடர்புகள்",
    close: "மூடு",
    back: "பின்செல்",
    backtohome: "முகப்புக்குத் திரும்பு",
    loading: "ஏற்றுகிறது...",
    error: "பிழை",
    success: "வெற்றி",
    app_name: 'ஃப்ளட்சேஃப் இந்தியா',
    login: 'உள்நுழைவு',
    logout: 'வெளியேறு',
    calculator: 'வெள்ள கணிப்பான்'
  },
  
  // TELUGU - తెలుగు
  te: {
    landingtitle: "ఫ్లడ్‌సేఫ్ ఇండియా",
    tagline: "అధునాతన వరద అంచనా మరియు ముందస్తు హెచ్చరిక వ్యవస్థ",
    btngetstarted: "ప్రారంభించండి",
    btnabout: "మా గురించి",
    btncalculator: "వరద కాలిక్యులేటర్",
    logintitle: "ఫ్లడ్‌సేఫ్‌లో లాగిన్ చేయండి",
    entermobile: "మీ మొబైల్ నంబర్ నమోదు చేయండి",
    btngetopt: "OTP పొందండి",
    enterotp: "OTP నమోదు చేయండి",
    btnverify: "ధృవీకరించండి",
    locationtitle: "మీ స్థానాన్ని సెట్ చేయండి",
    usegps: "GPS స్థానాన్ని ఉపయోగించండి",
    manualentry: "మాన్యువల్‌గా నమోదు చేయండి",
    selectcity: "నగరాన్ని ఎంచుకోండి",
    enterlat: "అక్షాంశం",
    enterlon: "రేఖాంశం",
    btncontinue: "కొనసాగించు",
    navdashboard: "డాష్‌బోర్డ్",
    navprediction: "వరద అంచనా",
    navcalculator: "కాలిక్యులేటర్",
    navhistory: "చరిత్ర",
    navsafety: "భద్రత",
    navmap: "మ్యాప్",
    navprofile: "ప్రొఫైల్",
    dashboardtitle: "డాష్‌బోర్డ్",
    welcome: "స్వాగతం",
    currentweather: "ప్రస్తుత వాతావరణం",
    temperature: "ఉష్ణోగ్రత",
    humidity: "తేమ",
    pressure: "పీడనం",
    windspeed: "గాలి వేగం",
    riskgauge: "వరద ప్రమాద గేజ్",
    quickactions: "శీఘ్ర చర్యలు",
    floodhistory: "ప్రాంతీయ వరద చరిత్ర",
    rainfallforecast: "7 రోజుల వర్షపాతం అంచనా",
    highriskdistricts: "అధిక ప్రమాద జిల్లాలు",
    calculatortitle: "వరద కాలిక్యులేటర్",
    simplemode: "సాధారణ మోడ్",
    advancedmode: "అధునాతన మోడ్",
    distance: "దూరం (కిమీ)",
    floodspeed: "వరద వేగం (కిమీ/గంట)",
    calculate: "లెక్కించండి",
    results: "ఫలితాలు",
    arrivaltime: "అంచనా రాక సమయం",
    hours: "గంటలు",
    minutes: "నిమిషాలు",
    safetytitle: "భద్రతా మార్గదర్శకాలు",
    beforeflood: "వరదకు ముందు",
    duringflood: "వరద సమయంలో",
    afterflood: "వరద తర్వాత",
    emergencycontacts: "అత్యవసర పరిచయాలు",
    close: "మూసివేయండి",
    back: "వెనుకకు",
    backtohome: "హోమ్‌కు తిరిగి వెళ్లండి",
    loading: "లోడ్ అవుతోంది...",
    error: "లోపం",
    success: "విజయం",
    app_name: 'ఫ్లడ్‌సేఫ్ ఇండియా',
    login: 'లాగిన్',
    logout: 'లాగౌట్',
    calculator: 'వరద కాలిక్యులేటర్'
  },
  
  // MARATHI - मराठी
  mr: {
    landingtitle: "फ्लडसेफ इंडिया",
    tagline: "प्रगत पूर अंदाज आणि पूर्व चेतावणी प्रणाली",
    btngetstarted: "सुरू करा",
    btnabout: "आमच्याबद्दल",
    btncalculator: "पूर कॅल्क्युलेटर",
    logintitle: "फ्लडसेफमध्ये लॉगिन करा",
    entermobile: "तुमचा मोबाईल नंबर प्रविष्ट करा",
    btngetopt: "OTP मिळवा",
    enterotp: "OTP प्रविष्ट करा",
    btnverify: "सत्यापित करा",
    locationtitle: "तुमचे स्थान सेट करा",
    usegps: "GPS स्थान वापरा",
    manualentry: "मॅन्युअली प्रविष्ट करा",
    selectcity: "शहर निवडा",
    enterlat: "अक्षांश",
    enterlon: "रेखांश",
    btncontinue: "सुरू ठेवा",
    navdashboard: "डॅशबोर्ड",
    navprediction: "पूर अंदाज",
    navcalculator: "कॅल्क्युलेटर",
    navhistory: "इतिहास",
    navsafety: "सुरक्षा",
    navmap: "नकाशा",
    navprofile: "प्रोफाइल",
    dashboardtitle: "डॅशबोर्ड",
    welcome: "स्वागत आहे",
    currentweather: "सध्याचे हवामान",
    temperature: "तापमान",
    humidity: "आर्द्रता",
    pressure: "दाब",
    windspeed: "वाऱ्याचा वेग",
    riskgauge: "पूर धोका मापक",
    quickactions: "जलद क्रिया",
    floodhistory: "प्रादेशिक पूर इतिहास",
    rainfallforecast: "7 दिवसांचा पाऊस अंदाज",
    highriskdistricts: "उच्च धोक्याचे जिल्हे",
    calculatortitle: "पूर कॅल्क्युलेटर",
    simplemode: "सोपा मोड",
    advancedmode: "प्रगत मोड",
    distance: "अंतर (किमी)",
    floodspeed: "पूर वेग (किमी/तास)",
    calculate: "गणना करा",
    results: "परिणाम",
    arrivaltime: "अंदाजे आगमन वेळ",
    hours: "तास",
    minutes: "मिनिटे",
    safetytitle: "सुरक्षा मार्गदर्शक तत्त्वे",
    beforeflood: "पूर येण्यापूर्वी",
    duringflood: "पुरादरम्यान",
    afterflood: "पुरानंतर",
    emergencycontacts: "आणीबाणी संपर्क",
    close: "बंद करा",
    back: "मागे",
    backtohome: "मुख्यपृष्ठावर परत जा",
    loading: "लोड होत आहे...",
    error: "त्रुटी",
    success: "यश",
    app_name: 'फ्लडसेफ इंडिया',
    login: 'लॉगिन',
    logout: 'लॉगआउट',
    calculator: 'पूर कॅल्क्युलेटर'
  },
  
  // PUNJABI - ਪੰਜਾਬੀ
  pa: {
    landingtitle: "ਫਲੱਡਸੇਫ ਇੰਡੀਆ",
    tagline: "ਉੱਨਤ ਹੜ੍ਹ ਭਵਿੱਖਬਾਣੀ ਅਤੇ ਸ਼ੁਰੂਆਤੀ ਚੇਤਾਵਨੀ ਪ੍ਰਣਾਲੀ",
    btngetstarted: "ਸ਼ੁਰੂ ਕਰੋ",
    btnabout: "ਸਾਡੇ ਬਾਰੇ",
    btncalculator: "ਹੜ੍ਹ ਕੈਲਕੁਲੇਟਰ",
    logintitle: "ਫਲੱਡਸੇਫ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
    entermobile: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ",
    btngetopt: "OTP ਪ੍ਰਾਪਤ ਕਰੋ",
    enterotp: "OTP ਦਾਖਲ ਕਰੋ",
    btnverify: "ਪੁਸ਼ਟੀ ਕਰੋ",
    locationtitle: "ਆਪਣਾ ਸਥਾਨ ਸੈੱਟ ਕਰੋ",
    usegps: "GPS ਸਥਾਨ ਵਰਤੋਂ",
    manualentry: "ਹੱਥੀਂ ਦਾਖਲ ਕਰੋ",
    selectcity: "ਸ਼ਹਿਰ ਚੁਣੋ",
    enterlat: "ਅਕਸ਼ਾਂਸ਼",
    enterlon: "ਦੇਸ਼ਾਂਤਰ",
    btncontinue: "ਜਾਰੀ ਰੱਖੋ",
    navdashboard: "ਡੈਸ਼ਬੋਰਡ",
    navprediction: "ਹੜ੍ਹ ਭਵਿੱਖਬਾਣੀ",
    navcalculator: "ਕੈਲਕੁਲੇਟਰ",
    navhistory: "ਇਤਿਹਾਸ",
    navsafety: "ਸੁਰੱਖਿਆ",
    navmap: "ਨਕਸ਼ਾ",
    navprofile: "ਪ੍ਰੋਫਾਈਲ",
    dashboardtitle: "ਡੈਸ਼ਬੋਰਡ",
    welcome: "ਸੁਆਗਤ ਹੈ",
    currentweather: "ਮੌਜੂਦਾ ਮੌਸਮ",
    temperature: "ਤਾਪਮਾਨ",
    humidity: "ਨਮੀ",
    pressure: "ਦਬਾਅ",
    windspeed: "ਹਵਾ ਦੀ ਗਤੀ",
    riskgauge: "ਹੜ੍ਹ ਜੋਖਮ ਗੇਜ",
    quickactions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
    floodhistory: "ਖੇਤਰੀ ਹੜ੍ਹ ਇਤਿਹਾਸ",
    rainfallforecast: "7 ਦਿਨਾਂ ਦਾ ਬਾਰਸ਼ ਪੂਰਵ ਅਨੁਮਾਨ",
    highriskdistricts: "ਉੱਚ ਜੋਖਮ ਵਾਲੇ ਜ਼ਿਲ੍ਹੇ",
    calculatortitle: "ਹੜ੍ਹ ਕੈਲਕੁਲੇਟਰ",
    simplemode: "ਸਧਾਰਨ ਮੋਡ",
    advancedmode: "ਉੱਨਤ ਮੋਡ",
    distance: "ਦੂਰੀ (ਕਿਮੀ)",
    floodspeed: "ਹੜ੍ਹ ਗਤੀ (ਕਿਮੀ/ਘੰਟਾ)",
    calculate: "ਗਣਨਾ ਕਰੋ",
    results: "ਨਤੀਜੇ",
    arrivaltime: "ਅਨੁਮਾਨਿਤ ਆਉਣ ਦਾ ਸਮਾਂ",
    hours: "ਘੰਟੇ",
    minutes: "ਮਿੰਟ",
    safetytitle: "ਸੁਰੱਖਿਆ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
    beforeflood: "ਹੜ੍ਹ ਤੋਂ ਪਹਿਲਾਂ",
    duringflood: "ਹੜ੍ਹ ਦੌਰਾਨ",
    afterflood: "ਹੜ੍ਹ ਤੋਂ ਬਾਅਦ",
    emergencycontacts: "ਐਮਰਜੈਂਸੀ ਸੰਪਰਕ",
    close: "ਬੰਦ ਕਰੋ",
    back: "ਵਾਪਸ",
    backtohome: "ਘਰ ਵਾਪਸ ਜਾਓ",
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    error: "ਗਲਤੀ",
    success: "ਸਫਲਤਾ",
    app_name: 'ਫਲੱਡਸੇਫ ਇੰਡੀਆ',
    login: 'ਲਾਗਇਨ',
    logout: 'ਲਾਗਆਉਟ',
    calculator: 'ਹੜ੍ਹ ਕੈਲਕੁਲੇਟਰ'
  },
  
  // KANNADA - ಕನ್ನಡ
  kn: {
    landingtitle: "ಫ್ಲಡ್‌ಸೇಫ್ ಇಂಡಿಯಾ",
    tagline: "ಸುಧಾರಿತ ಪ್ರವಾಹ ಮುನ್ಸೂಚನೆ ಮತ್ತು ಮುಂಚಿನ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆ",
    btngetstarted: "ಪ್ರಾರಂಭಿಸಿ",
    btnabout: "ನಮ್ಮ ಬಗ್ಗೆ",
    btncalculator: "ಪ್ರವಾಹ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    logintitle: "ಫ್ಲಡ್‌ಸೇಫ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
    entermobile: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
    btngetopt: "OTP ಪಡೆಯಿರಿ",
    enterotp: "OTP ನಮೂದಿಸಿ",
    btnverify: "ಪರಿಶೀಲಿಸಿ",
    locationtitle: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಹೊಂದಿಸಿ",
    usegps: "GPS ಸ್ಥಳವನ್ನು ಬಳಸಿ",
    manualentry: "ಕೈಯಾರೆ ನಮೂದಿಸಿ",
    selectcity: "ನಗರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    enterlat: "ಅಕ್ಷಾಂಶ",
    enterlon: "ರೇಖಾಂಶ",
    btncontinue: "ಮುಂದುವರಿಸಿ",
    navdashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    navprediction: "ಪ್ರವಾಹ ಮುನ್ಸೂಚನೆ",
    navcalculator: "ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    navhistory: "ಇತಿಹಾಸ",
    navsafety: "ಸುರಕ್ಷತೆ",
    navmap: "ನಕ್ಷೆ",
    navprofile: "ಪ್ರೊಫೈಲ್",
    dashboardtitle: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    welcome: "ಸ್ವಾಗತ",
    currentweather: "ಪ್ರಸ್ತುತ ಹವಾಮಾನ",
    temperature: "ತಾಪಮಾನ",
    humidity: "ತೇವಾಂಶ",
    pressure: "ಒತ್ತಡ",
    windspeed: "ಗಾಳಿಯ ವೇಗ",
    riskgauge: "ಪ್ರವಾಹ ಅಪಾಯ ಮಾಪಕ",
    quickactions: "ತ್ವರಿತ ಕ್ರಮಗಳು",
    floodhistory: "ಪ್ರಾದೇಶಿಕ ಪ್ರವಾಹ ಇತಿಹಾಸ",
    rainfallforecast: "7 ದಿನಗಳ ಮಳೆ ಮುನ್ಸೂಚನೆ",
    highriskdistricts: "ಹೆಚ್ಚಿನ ಅಪಾಯದ ಜಿಲ್ಲೆಗಳು",
    calculatortitle: "ಪ್ರವಾಹ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    simplemode: "ಸರಳ ಮೋಡ್",
    advancedmode: "ಸುಧಾರಿತ ಮೋಡ್",
    distance: "ದೂರ (ಕಿಮೀ)",
    floodspeed: "ಪ್ರವಾಹ ವೇಗ (ಕಿಮೀ/ಗಂಟೆ)",
    calculate: "ಲೆಕ್ಕ ಹಾಕಿ",
    results: "ಫಲಿತಾಂಶಗಳು",
    arrivaltime: "ಅಂದಾಜು ಆಗಮನ ಸಮಯ",
    hours: "ಗಂಟೆಗಳು",
    minutes: "ನಿಮಿಷಗಳು",
    safetytitle: "ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿಗಳು",
    beforeflood: "ಪ್ರವಾಹದ ಮೊದಲು",
    duringflood: "ಪ್ರವಾಹದ ಸಮಯದಲ್ಲಿ",
    afterflood: "ಪ್ರವಾಹದ ನಂತರ",
    emergencycontacts: "ತುರ್ತು ಸಂಪರ್ಕಗಳು",
    close: "ಮುಚ್ಚಿ",
    back: "ಹಿಂದೆ",
    backtohome: "ಮನೆಗೆ ಹಿಂತಿರುಗಿ",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    error: "ದೋಷ",
    success: "ಯಶಸ್ಸು",
    app_name: 'ಫ್ಲಡ್‌ಸೇಫ್ ಇಂಡಿಯಾ',
    login: 'ಲಾಗಿನ್',
    logout: 'ಲಾಗೌಟ್',
    calculator: 'ಪ್ರವಾಹ ಕ್ಯಾಲ್ಕುಲೇಟರ್'
  },
  
  // BENGALI - বাংলা
  bn: {
    landingtitle: "ফ্লাডসেফ ইন্ডিয়া",
    tagline: "উন্নত বন্যা পূর্বাভাস ও প্রাথমিক সতর্কতা ব্যবস্থা",
    btngetstarted: "শুরু করুন",
    btnabout: "আমাদের সম্পর্কে",
    btncalculator: "বন্যা ক্যালকুলেটর",
    logintitle: "ফ্লাডসেফে লগইন করুন",
    entermobile: "আপনার মোবাইল নম্বর লিখুন",
    btngetopt: "OTP পান",
    enterotp: "OTP লিখুন",
    btnverify: "যাচাই করুন",
    locationtitle: "আপনার অবস্থান সেট করুন",
    usegps: "GPS অবস্থান ব্যবহার করুন",
    manualentry: "ম্যানুয়ালি লিখুন",
    selectcity: "শহর নির্বাচন করুন",
    enterlat: "অক্ষাংশ",
    enterlon: "দ্রাঘিমাংশ",
    btncontinue: "চালিয়ে যান",
    navdashboard: "ড্যাশবোর্ড",
    navprediction: "বন্যা পূর্বাভাস",
    navcalculator: "ক্যালকুলেটর",
    navhistory: "ইতিহাস",
    navsafety: "নিরাপত্তা",
    navmap: "মানচিত্র",
    navprofile: "প্রোফাইল",
    dashboardtitle: "ড্যাশবোর্ড",
    welcome: "স্বাগতম",
    currentweather: "বর্তমান আবহাওয়া",
    temperature: "তাপমাত্রা",
    humidity: "আর্দ্রতা",
    pressure: "চাপ",
    windspeed: "বাতাসের গতি",
    riskgauge: "বন্যা ঝুঁকি গেজ",
    quickactions: "দ্রুত কাজ",
    floodhistory: "আঞ্চলিক বন্যার ইতিহাস",
    rainfallforecast: "৭ দিনের বৃষ্টিপাত পূর্বাভাস",
    highriskdistricts: "উচ্চ ঝুঁকিপূর্ণ জেলা",
    calculatortitle: "বন্যা ক্যালকুলেটর",
    simplemode: "সরল মোড",
    advancedmode: "উন্নত মোড",
    distance: "দূরত্ব (কিমি)",
    floodspeed: "বন্যার গতি (কিমি/ঘণ্টা)",
    calculate: "গণনা করুন",
    results: "ফলাফল",
    arrivaltime: "আনুমানিক আগমনের সময়",
    hours: "ঘন্টা",
    minutes: "মিনিট",
    safetytitle: "নিরাপত্তা নির্দেশিকা",
    beforeflood: "বন্যার আগে",
    duringflood: "বন্যার সময়",
    afterflood: "বন্যার পরে",
    emergencycontacts: "জরুরি যোগাযোগ",
    close: "বন্ধ করুন",
    back: "পিছনে",
    backtohome: "হোমে ফিরে যান",
    loading: "লোড হচ্ছে...",
    error: "ত্রুটি",
    success: "সফলতা",
    app_name: 'ফ্লাডসেফ ইন্ডিয়া',
    login: 'লগইন',
    logout: 'লগআউট',
    calculator: 'বন্যা ক্যালকুলেটর'
  }
};

// Comprehensive Indian Locations Database (State -> City -> Coordinates)
const indianLocationsDB = {
  "Maharashtra": {
    "Mumbai": { lat: 19.0760, lng: 72.8777 },
    "Pune": { lat: 18.5204, lng: 73.8567 },
    "Nagpur": { lat: 21.1458, lng: 79.0882 },
    "Nashik": { lat: 19.9975, lng: 73.7898 },
    "Thane": { lat: 19.2183, lng: 72.9781 },
    "Aurangabad": { lat: 19.8762, lng: 75.3433 },
    "Solapur": { lat: 17.6599, lng: 75.9064 }
  },
  "Delhi": {
    "New Delhi": { lat: 28.6139, lng: 77.2090 },
    "Dwarka": { lat: 28.5921, lng: 77.0460 },
    "Rohini": { lat: 28.7495, lng: 77.0736 }
  },
  "Karnataka": {
    "Bangalore": { lat: 12.9716, lng: 77.5946 },
    "Mysore": { lat: 12.2958, lng: 76.6394 },
    "Mangalore": { lat: 12.9141, lng: 74.8560 },
    "Hubli": { lat: 15.3647, lng: 75.1240 },
    "Belgaum": { lat: 15.8497, lng: 74.4977 }
  },
  "Tamil Nadu": {
    "Chennai": { lat: 13.0827, lng: 80.2707 },
    "Coimbatore": { lat: 11.0168, lng: 76.9558 },
    "Madurai": { lat: 9.9252, lng: 78.1198 },
    "Tiruchirappalli": { lat: 10.7905, lng: 78.7047 },
    "Salem": { lat: 11.6643, lng: 78.1460 }
  },
  "West Bengal": {
    "Kolkata": { lat: 22.5726, lng: 88.3639 },
    "Howrah": { lat: 22.5958, lng: 88.2636 },
    "Siliguri": { lat: 26.7271, lng: 88.3953 },
    "Durgapur": { lat: 23.5204, lng: 87.3119 }
  },
  "Gujarat": {
    "Ahmedabad": { lat: 23.0225, lng: 72.5714 },
    "Surat": { lat: 21.1702, lng: 72.8311 },
    "Vadodara": { lat: 22.3072, lng: 73.1812 },
    "Rajkot": { lat: 22.3039, lng: 70.8022 }
  },
  "Rajasthan": {
    "Jaipur": { lat: 26.9124, lng: 75.7873 },
    "Jodhpur": { lat: 26.2389, lng: 73.0243 },
    "Udaipur": { lat: 24.5854, lng: 73.7125 },
    "Kota": { lat: 25.2138, lng: 75.8648 }
  },
  "Uttar Pradesh": {
    "Lucknow": { lat: 26.8467, lng: 80.9462 },
    "Kanpur": { lat: 26.4499, lng: 80.3319 },
    "Agra": { lat: 27.1767, lng: 78.0081 },
    "Varanasi": { lat: 25.3176, lng: 82.9739 },
    "Allahabad": { lat: 25.4358, lng: 81.8463 }
  },
  "Bihar": {
    "Patna": { lat: 25.5941, lng: 85.1376 },
    "Gaya": { lat: 24.7955, lng: 85.0002 },
    "Bhagalpur": { lat: 25.2425, lng: 86.9842 },
    "Muzaffarpur": { lat: 26.1225, lng: 85.3906 }
  },
  "Assam": {
    "Guwahati": { lat: 26.1445, lng: 91.7362 },
    "Dibrugarh": { lat: 27.4728, lng: 94.9120 },
    "Silchar": { lat: 24.8333, lng: 92.7789 }
  },
  "Kerala": {
    "Thiruvananthapuram": { lat: 8.5241, lng: 76.9366 },
    "Kochi": { lat: 9.9312, lng: 76.2673 },
    "Kozhikode": { lat: 11.2588, lng: 75.7804 },
    "Thrissur": { lat: 10.5276, lng: 76.2144 }
  },
  "Telangana": {
    "Hyderabad": { lat: 17.3850, lng: 78.4867 },
    "Warangal": { lat: 17.9689, lng: 79.5941 },
    "Nizamabad": { lat: 18.6725, lng: 78.0941 }
  },
  "Odisha": {
    "Bhubaneswar": { lat: 20.2961, lng: 85.8245 },
    "Cuttack": { lat: 20.4625, lng: 85.8830 },
    "Puri": { lat: 19.8135, lng: 85.8312 }
  },
  "Punjab": {
    "Chandigarh": { lat: 30.7333, lng: 76.7794 },
    "Ludhiana": { lat: 30.9010, lng: 75.8573 },
    "Amritsar": { lat: 31.6340, lng: 74.8723 },
    "Jalandhar": { lat: 31.3260, lng: 75.5762 }
  },
  "Haryana": {
    "Faridabad": { lat: 28.4089, lng: 77.3178 },
    "Gurgaon": { lat: 28.4595, lng: 77.0266 },
    "Panipat": { lat: 29.3909, lng: 76.9635 }
  },
  "Madhya Pradesh": {
    "Bhopal": { lat: 23.2599, lng: 77.4126 },
    "Indore": { lat: 22.7196, lng: 75.8577 },
    "Gwalior": { lat: 26.2183, lng: 78.1828 },
    "Jabalpur": { lat: 23.1815, lng: 79.9864 }
  },
  "Chhattisgarh": {
    "Raipur": { lat: 21.2514, lng: 81.6296 },
    "Bhilai": { lat: 21.2095, lng: 81.3784 }
  },
  "Jharkhand": {
    "Ranchi": { lat: 23.3441, lng: 85.3096 },
    "Jamshedpur": { lat: 22.8046, lng: 86.2029 },
    "Dhanbad": { lat: 23.7957, lng: 86.4304 }
  },
  "Uttarakhand": {
    "Dehradun": { lat: 30.3165, lng: 78.0322 },
    "Haridwar": { lat: 29.9457, lng: 78.1642 },
    "Roorkee": { lat: 29.8543, lng: 77.8880 }
  },
  "Himachal Pradesh": {
    "Shimla": { lat: 31.1048, lng: 77.1734 },
    "Dharamshala": { lat: 32.2190, lng: 76.3234 },
    "Manali": { lat: 32.2432, lng: 77.1892 }
  },
  "Goa": {
    "Panaji": { lat: 15.4909, lng: 73.8278 },
    "Margao": { lat: 15.2832, lng: 73.9872 }
  },
  "Andhra Pradesh": {
    "Visakhapatnam": { lat: 17.6868, lng: 83.2185 },
    "Vijayawada": { lat: 16.5062, lng: 80.6480 },
    "Guntur": { lat: 16.3067, lng: 80.4365 },
    "Tirupati": { lat: 13.6288, lng: 79.4192 }
  },
  "Jammu and Kashmir": {
    "Srinagar": { lat: 34.0837, lng: 74.7973 },
    "Jammu": { lat: 32.7266, lng: 74.8570 }
  },
  "Ladakh": {
    "Leh": { lat: 34.1526, lng: 77.5771 }
  },
  "Puducherry": {
    "Puducherry": { lat: 11.9416, lng: 79.8083 }
  },
  "Arunachal Pradesh": {
    "Itanagar": { lat: 27.0844, lng: 93.6053 }
  },
  "Manipur": {
    "Imphal": { lat: 24.8170, lng: 93.9368 }
  },
  "Meghalaya": {
    "Shillong": { lat: 25.5788, lng: 91.8933 }
  },
  "Mizoram": {
    "Aizawl": { lat: 23.7271, lng: 92.7176 }
  },
  "Nagaland": {
    "Kohima": { lat: 25.6747, lng: 94.1086 }
  },
  "Sikkim": {
    "Gangtok": { lat: 27.3389, lng: 88.6065 }
  },
  "Tripura": {
    "Agartala": { lat: 23.8315, lng: 91.2868 }
  }
};

// Embedded Weather Data from rain_forecasting.csv
const weatherDataCSV = [
  { Date: "2025-11-14", Location: "Mumbai", MinTemp: 17.6, MaxTemp: 39.6, Humidity9am: 95, Humidity3pm: 82, Pressure9am: 1002.3, Pressure3pm: 998.4, WindSpeed9am: 15, WindSpeed3pm: 21, RainToday: "No", RainTomorrow: "Yes" },
  { Date: "2025-11-14", Location: "New Delhi", MinTemp: 21.1, MaxTemp: 35.5, Humidity9am: 79, Humidity3pm: 83, Pressure9am: 1011.2, Pressure3pm: 998.1, WindSpeed9am: 12, WindSpeed3pm: 15, RainToday: "Yes", RainTomorrow: "Yes" },
  { Date: "2025-11-14", Location: "Bangalore", MinTemp: 29.4, MaxTemp: 41.3, Humidity9am: 73, Humidity3pm: 87, Pressure9am: 1014.7, Pressure3pm: 1002.1, WindSpeed9am: 18, WindSpeed3pm: 23, RainToday: "No", RainTomorrow: "No" },
  { Date: "2025-11-14", Location: "Chennai", MinTemp: 18.8, MaxTemp: 26.2, Humidity9am: 86, Humidity3pm: 88, Pressure9am: 1007.0, Pressure3pm: 1005.8, WindSpeed9am: 10, WindSpeed3pm: 12, RainToday: "Yes", RainTomorrow: "Yes" },
  { Date: "2025-11-14", Location: "Kolkata", MinTemp: 17.3, MaxTemp: 26.6, Humidity9am: 67, Humidity3pm: 71, Pressure9am: 1003.3, Pressure3pm: 1006.3, WindSpeed9am: 14, WindSpeed3pm: 20, RainToday: "No", RainTomorrow: "Yes" }
];

// Mock Data - Simulating data from provided CSV files
const mockFloodData = {
  historicalEvents: [
    { year: 2019, state: 'Bihar', affected: 4200000, deaths: 122 },
    { year: 2018, state: 'Kerala', affected: 5400000, deaths: 483 },
    { year: 2017, state: 'Assam', affected: 3100000, deaths: 84 },
    { year: 2016, state: 'Uttarakhand', affected: 890000, deaths: 34 },
    { year: 2015, state: 'Tamil Nadu', affected: 1800000, deaths: 422 }
  ],
  floodProneStates: [
    { state: 'Uttar Pradesh', area: 7.34 },
    { state: 'Bihar', area: 4.26 },
    { state: 'Punjab', area: 3.70 },
    { state: 'Assam', area: 3.15 },
    { state: 'West Bengal', area: 2.65 }
  ],
  rainfallForecast: [
    { day: 'Today', rainfall: 45 },
    { day: 'Tomorrow', rainfall: 67 },
    { day: 'Day 3', rainfall: 89 },
    { day: 'Day 4', rainfall: 134 },
    { day: 'Day 5', rainfall: 98 },
    { day: 'Day 6', rainfall: 56 },
    { day: 'Day 7', rainfall: 34 }
  ]
};

// Major Indian cities with flood risk data
const indianCities = [
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, risk: 'high', state: 'Maharashtra' },
  { name: 'Delhi', lat: 28.7041, lng: 77.1025, risk: 'medium', state: 'Delhi' },
  { name: 'Kolkata', lat: 22.5726, lng: 88.3639, risk: 'high', state: 'West Bengal' },
  { name: 'Chennai', lat: 13.0827, lng: 80.2707, risk: 'high', state: 'Tamil Nadu' },
  { name: 'Patna', lat: 25.5941, lng: 85.1376, risk: 'high', state: 'Bihar' },
  { name: 'Guwahati', lat: 26.1445, lng: 91.7362, risk: 'high', state: 'Assam' },
  { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, risk: 'medium', state: 'Telangana' },
  { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, risk: 'medium', state: 'Gujarat' },
  { name: 'Bhubaneswar', lat: 20.2961, lng: 85.8245, risk: 'high', state: 'Odisha' },
  { name: 'Kochi', lat: 9.9312, lng: 76.2673, risk: 'medium', state: 'Kerala' }
];

// Initialize Application
function initApp() {
  checkSecureContext();
  setupEventListeners();
  setupOnlineOfflineHandlers();
  loadOfflineData();
  updateUIForAuthState();
  applyTranslations();
  
  // Check if user was logged in (simulate with flag)
  const wasLoggedIn = appState.offlineData?.isLoggedIn || false;
  if (wasLoggedIn) {
    // Auto-login for demo
    appState.isLoggedIn = false; // Start logged out for demo
  }
}

// Check if we're in a secure context (HTTPS or localhost)
function checkSecureContext() {
  const isLocalhost = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname === '[::1]';
  const isHttps = window.location.protocol === 'https:';
  
  appState.isSecureContext = window.isSecureContext && (isHttps || isLocalhost);
  
  console.log('Secure Context Check:', {
    isSecureContext: appState.isSecureContext,
    protocol: window.location.protocol,
    hostname: window.location.hostname,
    isLocalhost: isLocalhost,
    isHttps: isHttps
  });
}

// Event Listeners
function setupEventListeners() {
  // Navigation
  document.getElementById('loginBtn')?.addEventListener('click', showAuthModal);
  document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);
  document.getElementById('dashboardBtn')?.addEventListener('click', () => navigateToPage('dashboard'));
  document.getElementById('profileBtn')?.addEventListener('click', () => navigateToPage('profile'));
  document.getElementById('getStartedBtn')?.addEventListener('click', handleGetStarted);
  document.getElementById('calculatorBtn')?.addEventListener('click', () => navigateToPage('calculator'));

  // Flood Calculator Inputs
  setupFloodCalculatorInputSync();
  document.getElementById('floodCalculatorForm')?.addEventListener('submit', handleFloodCalculator);
  document.getElementById('simpleCalculatorForm')?.addEventListener('submit', handleSimpleCalculator);
  
  // Auth Modal
  document.getElementById('closeAuthModal')?.addEventListener('click', hideAuthModal);
  document.getElementById('phoneForm')?.addEventListener('submit', handlePhoneSubmit);
  document.getElementById('otpForm')?.addEventListener('submit', handleOTPSubmit);
  document.getElementById('guestModeBtn')?.addEventListener('click', handleGuestMode);
  document.getElementById('resendOTP')?.addEventListener('click', resendOTP);
  document.getElementById('retryLocationBtn')?.addEventListener('click', requestHighAccuracyLocation);
  document.getElementById('continueAfterLocation')?.addEventListener('click', continueToProfile);
  document.getElementById('useManualLocationBtn')?.addEventListener('click', showManualLocationEntry);
  document.getElementById('retryGPSFromManual')?.addEventListener('click', retryGPSFromManual);
  document.getElementById('manualLocationForm')?.addEventListener('submit', handleManualLocationSubmit);
  document.getElementById('stateSelect')?.addEventListener('change', handleStateChange);
  document.getElementById('profileSetupForm')?.addEventListener('submit', handleProfileSetup);
  
  // OTP Input handling
  setupOTPInputs();
  
  // Profile Form
  document.getElementById('profileForm')?.addEventListener('submit', handleProfileSave);
  document.getElementById('refreshLocationBtn')?.addEventListener('click', refreshUserLocation);
  
  // Flood Arrival Calculation
  document.getElementById('arrivalForm')?.addEventListener('submit', calculateFloodArrival);
  
  // Language Selector
  document.getElementById('languageSelector')?.addEventListener('change', handleLanguageChange);
}

// Online/Offline Handlers
function setupOnlineOfflineHandlers() {
  window.addEventListener('online', () => {
    appState.isOnline = true;
    document.getElementById('offlineIndicator').classList.remove('active');
    showNotification('Back online! All features available.', 'success');
  });
  
  window.addEventListener('offline', () => {
    appState.isOnline = false;
    document.getElementById('offlineIndicator').classList.add('active');
    showNotification('You are offline. Using cached data.', 'warning');
  });
  
  // Initial check
  if (!appState.isOnline) {
    document.getElementById('offlineIndicator').classList.add('active');
  }
}

// Offline Data Management
function loadOfflineData() {
  // Simulate loading from cache
  appState.offlineData = {
    lastUpdate: new Date().toISOString(),
    floodData: mockFloodData,
    cities: indianCities,
    registeredUsers: appState.registeredUsers
  };
}

function saveOfflineData() {
  // In a real app, this would save to IndexedDB or similar
  appState.offlineData = {
    lastUpdate: new Date().toISOString(),
    isLoggedIn: appState.isLoggedIn,
    userProfile: appState.userProfile,
    floodData: mockFloodData,
    registeredUsers: appState.registeredUsers
  };
}

// OTP Input Auto-focus
function setupOTPInputs() {
  const inputs = document.querySelectorAll('.otp-input');
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
    
    // Only allow numbers
    input.addEventListener('keypress', (e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });
  });
}

// Authentication - OTP Based
function showAuthModal() {
  document.getElementById('authModal').classList.add('active');
  resetAuthModal();
}

function hideAuthModal() {
  document.getElementById('authModal').classList.remove('active');
}

function resetAuthModal() {
  appState.authStep = 1;
  updateAuthStep(1);
  document.getElementById('phoneNumber').value = '';
  document.querySelectorAll('.otp-input').forEach(input => input.value = '');
}

function updateAuthStep(step) {
  // Hide all steps
  document.querySelectorAll('.auth-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.progress-step').forEach(s => {
    s.classList.remove('active');
    s.classList.remove('completed');
  });
  
  // Show current step
  const steps = ['phoneStep', 'otpStep', 'locationStep', 'profileSetupStep'];
  document.getElementById(steps[step - 1])?.classList.add('active');
  
  // Update progress
  for (let i = 1; i <= 4; i++) {
    const stepEl = document.getElementById(`step${i}`);
    if (i < step) {
      stepEl?.classList.add('completed');
    } else if (i === step) {
      stepEl?.classList.add('active');
    }
  }
  
  appState.authStep = step;
  
  // CRITICAL: Auto-trigger location request when entering step 3
  if (step === 3) {
    // Small delay for better UX (let user see the screen)
    setTimeout(() => {
      attemptLocationWithTimeout();
    }, 500);
  }
}

function handlePhoneSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById('phoneNumber').value;
  
  if (!/^[0-9]{10}$/.test(phone)) {
    showNotification('Please enter a valid 10-digit mobile number', 'error');
    return;
  }
  
  const fullPhone = '+91' + phone;
  appState.currentPhone = fullPhone;
  
  // Check if already registered
  if (appState.registeredUsers[fullPhone]) {
    // Existing user - login flow
    document.getElementById('authModalTitle').textContent = 'Sign In to FloodSafe India';
  } else {
    // New user - registration flow
    document.getElementById('authModalTitle').textContent = 'Register with FloodSafe India';
  }
  
  // Generate OTP (6 digits)
  appState.currentOTP = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Display phone and OTP
  document.getElementById('displayPhoneNumber').textContent = fullPhone;
  document.getElementById('demoOTP').textContent = appState.currentOTP;
  
  // Move to OTP step
  updateAuthStep(2);
  
  // Focus first OTP input
  setTimeout(() => {
    document.querySelector('.otp-input')?.focus();
  }, 100);
  
  // Start resend timer
  startResendTimer();
  
  showNotification('OTP sent successfully (check demo OTP box)', 'success');
}

function startResendTimer() {
  let seconds = 30;
  const btn = document.getElementById('resendOTP');
  const timer = document.getElementById('resendTimer');
  btn.disabled = true;
  
  const interval = setInterval(() => {
    seconds--;
    timer.textContent = `(${seconds}s)`;
    
    if (seconds <= 0) {
      clearInterval(interval);
      btn.disabled = false;
      timer.textContent = '';
    }
  }, 1000);
}

function resendOTP() {
  // Generate new OTP
  appState.currentOTP = Math.floor(100000 + Math.random() * 900000).toString();
  document.getElementById('demoOTP').textContent = appState.currentOTP;
  
  // Clear OTP inputs
  document.querySelectorAll('.otp-input').forEach(input => input.value = '');
  document.querySelector('.otp-input')?.focus();
  
  startResendTimer();
  showNotification('New OTP sent!', 'success');
}

function handleOTPSubmit(e) {
  e.preventDefault();
  
  // Collect OTP
  const inputs = document.querySelectorAll('.otp-input');
  const enteredOTP = Array.from(inputs).map(input => input.value).join('');
  
  if (enteredOTP.length !== 6) {
    showNotification('Please enter all 6 digits', 'error');
    return;
  }
  
  if (enteredOTP !== appState.currentOTP) {
    showNotification('Invalid OTP. Please try again.', 'error');
    // Clear inputs
    inputs.forEach(input => input.value = '');
    inputs[0].focus();
    return;
  }
  
  // OTP verified - check secure context before location step
  if (!appState.isSecureContext) {
    // Not secure - skip to demo mode
    showNotification('⚠️ HTTPS required for location. Using demo mode.', 'warning');
    appState.isDemoMode = true;
    
    if (appState.registeredUsers[appState.currentPhone]) {
      appState.userProfile = appState.registeredUsers[appState.currentPhone];
    }
    
    // Set demo location
    appState.userLocation = {
      lat: 28.6139,
      lng: 77.2090,
      accuracy: 10,
      demo: true,
      timestamp: Date.now()
    };
    
    // Skip to profile setup or complete login
    if (appState.registeredUsers[appState.currentPhone]) {
      appState.isLoggedIn = true;
      completeLogin();
    } else {
      updateAuthStep(4);
    }
    return;
  }
  
  // OTP verified - check if existing user
  if (appState.registeredUsers[appState.currentPhone]) {
    // Existing user - will auto-request location in step 3
    appState.userProfile = appState.registeredUsers[appState.currentPhone];
    updateAuthStep(3);
    showNotification('Welcome back! Requesting location...', 'success');
  } else {
    // New user - will auto-request location in step 3
    updateAuthStep(3);
    showNotification('OTP verified! Requesting location...', 'success');
  }
}

function handleGuestMode() {
  // Guest mode with simulated data
  appState.currentPhone = '+919999999999';
  appState.isLoggedIn = true;
  appState.isDemoMode = true;
  appState.userProfile = {
    name: 'Guest User',
    phone: '+919999999999',
    language: 'en',
    avatar: 'user',
    isGuest: true
  };
  
  // Set a default location (Delhi)
  appState.userLocation = {
    lat: 28.6139,
    lng: 77.2090,
    accuracy: 10,
    isDemo: true,
    city: 'Delhi',
    timestamp: Date.now()
  };
  
  hideAuthModal();
  updateUIForAuthState();
  navigateToPage('dashboard');
  showDemoBanner();
  showToast('🎯 Guest mode activated with Delhi location', 'info');
  saveOfflineData();
  
  // Update dashboard
  updateLocationDisplay();
  fetchWeatherData();
  assessFloodRisk();
}

function showDemoBanner() {
  // Check if banner already exists
  if (document.getElementById('demoBanner')) {
    return;
  }
  
  const banner = document.createElement('div');
  banner.id = 'demoBanner';
  banner.style.cssText = `
    position: sticky;
    top: 0;
    z-index: 999;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `;
  banner.innerHTML = `
    <span style="flex: 1; min-width: 200px;">
      <i class="fas fa-map-marked-alt"></i> <strong>📍 Demo Mode Active</strong> - Using Delhi location
    </span>
    <button onclick="requestRealLocationFromBanner()" style="background: white; color: #667eea; padding: 8px 16px; border-radius: 6px; font-weight: 600; cursor: pointer; border: none;">
      🎯 Try Real Location
    </button>
    <p style="flex-basis: 100%; font-size: 13px; opacity: 0.9; margin: 5px 0 0 0;">
      For accurate predictions at your location, click "Try Real Location" and allow location permission
    </p>
  `;
  
  const header = document.querySelector('.header');
  if (header && header.nextSibling) {
    header.parentNode.insertBefore(banner, header.nextSibling);
  } else {
    document.body.insertBefore(banner, document.body.firstChild);
  }
}

// Request real location from demo banner
function requestRealLocationFromBanner() {
  showToast('Requesting your real location...', 'info');
  
  if (!navigator.geolocation) {
    showToast('Geolocation not supported by your browser', 'error');
    return;
  }
  
  if (!appState.isSecureContext) {
    showHTTPSInstructions();
    return;
  }
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Success - update location
      appState.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
        isDemo: false,
        timestamp: Date.now()
      };
      appState.isDemoMode = false;
      
      showToast('✓ Real location activated!', 'success');
      
      // Remove demo banner
      const banner = document.getElementById('demoBanner');
      if (banner) {
        banner.remove();
      }
      
      // Refresh data
      if (appState.currentPage === 'dashboard') {
        updateLocationDisplay();
        fetchWeatherData();
        assessFloodRisk();
        if (map) {
          map.setView([appState.userLocation.lat, appState.userLocation.lng], 8);
        }
      }
    },
    (error) => {
      // Still blocked/failed
      showToast('Could not get location. Using demo mode.', 'warning');
      console.log('Location retry failed:', error.code);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
}

function handleLogout() {
  appState.isLoggedIn = false;
  appState.userProfile = null;
  appState.userLocation = null;
  appState.currentPhone = null;
  updateUIForAuthState();
  navigateToPage('home');
  showNotification('Logged out successfully.', 'info');
  saveOfflineData();
}

function handleGetStarted() {
  if (!appState.isLoggedIn) {
    showAuthModal();
  } else {
    navigateToPage('dashboard');
  }
}

// Show HTTPS requirement modal
function showHTTPSInstructions() {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `;
  
  modal.innerHTML = `
    <div style="background: var(--color-surface); border-radius: 12px; padding: 32px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <h2 style="margin: 0; color: var(--color-error);"><i class="fas fa-exclamation-triangle"></i> Location Services Unavailable</h2>
        <button onclick="this.closest('div[style*=fixed]').remove()" style="background: none; border: none; font-size: 24px; cursor: pointer; color: var(--color-text-secondary);">&times;</button>
      </div>
      
      <div style="background: var(--color-bg-4); padding: 16px; border-radius: 8px; border-left: 4px solid var(--color-error); margin-bottom: 24px;">
        <p style="margin: 0; font-weight: bold;">⚠️ Browser Security Restriction</p>
        <p style="margin: 8px 0 0 0; font-size: 14px;">For security, browsers only allow location access on:</p>
        <ul style="margin: 8px 0 0 0; padding-left: 20px; font-size: 14px;">
          <li>✓ HTTPS websites (https://...)</li>
          <li>✓ Localhost development servers</li>
        </ul>
        <p style="margin: 8px 0 0 0; font-size: 14px; color: var(--color-error); font-weight: bold;">
          Current URL: ${window.location.href} ❌
        </p>
      </div>
      
      <h3 style="margin: 24px 0 12px 0;"><i class="fas fa-tools"></i> How to Fix This:</h3>
      
      <div style="background: var(--color-bg-1); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
        <h4 style="margin: 0 0 8px 0; color: var(--color-primary);">📱 Deploy to Free HTTPS Hosting:</h4>
        <div style="font-size: 14px; line-height: 1.6;">
          <strong>1. GitHub Pages</strong> (Recommended)<br>
          • Push code to GitHub repository<br>
          • Settings → Pages → Deploy<br>
          • Access at: https://username.github.io/repo-name<br>
          • <a href="https://pages.github.com" target="_blank" style="color: var(--color-primary);">Learn more →</a>
          <br><br>
          <strong>2. Netlify</strong><br>
          • Drag & drop your project folder<br>
          • Instant HTTPS deployment<br>
          • <a href="https://netlify.com" target="_blank" style="color: var(--color-primary);">netlify.com →</a>
          <br><br>
          <strong>3. Vercel</strong><br>
          • One-command deployment<br>
          • Automatic HTTPS<br>
          • <a href="https://vercel.com" target="_blank" style="color: var(--color-primary);">vercel.com →</a>
        </div>
      </div>
      
      <div style="background: var(--color-bg-2); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
        <h4 style="margin: 0 0 8px 0; color: var(--color-warning);">💻 For Local Development:</h4>
        <div style="font-size: 14px; line-height: 1.6;">
          <strong>Run a local server:</strong><br>
          <code style="background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 4px; display: inline-block; margin: 8px 0;">python -m http.server 8000</code><br>
          Then open: <code style="background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 4px;">http://localhost:8000</code>
        </div>
      </div>
      
      <div style="background: var(--color-bg-6); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
        <h4 style="margin: 0 0 8px 0; color: var(--color-warning);">🔧 Temporary Testing (ngrok):</h4>
        <div style="font-size: 14px; line-height: 1.6;">
          1. Install ngrok: <a href="https://ngrok.com/download" target="_blank" style="color: var(--color-primary);">ngrok.com/download</a><br>
          2. Run: <code style="background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 4px;">ngrok http 8000</code><br>
          3. Use the https:// URL provided
        </div>
      </div>
      
      <div style="text-align: center;">
        <button onclick="handleGuestMode(); this.closest('div[style*=fixed]').remove();" class="btn btn-primary" style="width: 100%; padding: 12px 24px; font-size: 16px;">
          <i class="fas fa-play"></i> Continue with Demo Mode (Delhi Location)
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

// Manual Location Entry Functions
function showManualLocationEntry() {
  // Hide GPS step, show manual entry step
  document.getElementById('locationStep').classList.remove('active');
  document.getElementById('manualLocationStep').classList.add('active');
  
  // Update progress indicator to show step 3
  document.querySelectorAll('.progress-step').forEach(s => {
    s.classList.remove('active');
    s.classList.remove('completed');
  });
  document.getElementById('step1')?.classList.add('completed');
  document.getElementById('step2')?.classList.add('completed');
  document.getElementById('step3')?.classList.add('active');
  
  showToast('📝 Enter your location manually', 'info');
}

function retryGPSFromManual() {
  // Hide manual step, show GPS step
  document.getElementById('manualLocationStep').classList.remove('active');
  document.getElementById('locationStep').classList.add('active');
  
  showToast('🔄 Retrying GPS location...', 'info');
  
  // Reset location attempt counter
  appState.locationAttempts = 0;
  
  // Retry GPS location
  setTimeout(() => {
    attemptLocationWithTimeout();
  }, 500);
}

function handleStateChange(e) {
  const state = e.target.value;
  const citySelect = document.getElementById('citySelect');
  
  if (!state) {
    citySelect.innerHTML = '<option value="">First select your state...</option>';
    citySelect.disabled = true;
    return;
  }
  
  // Populate cities for selected state
  const cities = indianLocationsDB[state];
  
  if (!cities) {
    citySelect.innerHTML = '<option value="">No cities available</option>';
    citySelect.disabled = true;
    return;
  }
  
  citySelect.innerHTML = '<option value="">Select your city...</option>';
  Object.keys(cities).sort().forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
  
  citySelect.disabled = false;
}

function handleManualLocationSubmit(e) {
  e.preventDefault();
  
  const state = document.getElementById('stateSelect').value;
  const city = document.getElementById('citySelect').value;
  const locality = document.getElementById('localityInput').value.trim();
  const landmark = document.getElementById('landmarkInput').value.trim();
  
  if (!state || !city) {
    showToast('Please select both state and city', 'error');
    return;
  }
  
  // Get coordinates from database
  const coords = indianLocationsDB[state]?.[city];
  
  if (!coords) {
    showToast('Location not found in database. Please try another city.', 'error');
    return;
  }
  
  // Set user location
  appState.userLocation = {
    lat: coords.lat,
    lng: coords.lng,
    accuracy: 1000, // ~1km accuracy for manual entry
    isManual: true,
    state: state,
    city: city,
    locality: locality || null,
    landmark: landmark || null,
    timestamp: Date.now()
  };
  
  appState.isDemoMode = false; // Not demo - actual manual entry
  
  // Build location display string
  let locationDisplay = `${city}, ${state}`;
  if (locality) locationDisplay += ` (${locality})`;
  if (landmark) locationDisplay += ` near ${landmark}`;
  
  showToast(`✓ Location set: ${locationDisplay}`, 'success');
  
  // Show coordinates in console for debugging
  console.log('Manual location coordinates:', coords);
  
  // Proceed to profile setup or complete login
  setTimeout(() => {
    continueToProfile();
  }, 1000);
}

// SMOOTH LOCATION FLOW - Automatic with 3-second timeout, NO error screens
function attemptLocationWithTimeout() {
  const statusText = document.getElementById('locationStatusText');
  const locationIcon = document.getElementById('locationIcon');
  const locationTitle = document.getElementById('locationTitle');
  const locationSubtitle = document.getElementById('locationSubtitle');
  const permissionBox = document.getElementById('locationPermissionBox');
  
  // Show minimal trying status
  if (locationIcon) locationIcon.className = 'fas fa-crosshairs fa-spin';
  if (locationTitle) locationTitle.innerHTML = '🔍 Getting Your Location...';
  if (locationSubtitle) locationSubtitle.textContent = 'Please wait...';
  if (permissionBox) permissionBox.style.display = 'none';
  if (statusText) {
    statusText.textContent = '🔄 Attempting location...';
    statusText.style.color = 'var(--color-primary)';
  }
  
  // Set a 3-second timeout - if location doesn't work, show manual entry
  const timeoutId = setTimeout(() => {
    console.log('Location timeout (3s) - showing manual entry');
    showManualEntryAfterGPSFailure();
  }, 3000);
  
  // Check if geolocation is supported
  if (!navigator.geolocation) {
    clearTimeout(timeoutId);
    showManualEntryAfterGPSFailure();
    return;
  }
  
  // Check secure context
  if (!appState.isSecureContext) {
    clearTimeout(timeoutId);
    showManualEntryAfterGPSFailure();
    return;
  }
  
  // Try to get location
  navigator.geolocation.getCurrentPosition(
    // SUCCESS - User allowed location
    (position) => {
      clearTimeout(timeoutId);
      const { latitude, longitude, accuracy } = position.coords;
      
      appState.userLocation = {
        lat: latitude,
        lng: longitude,
        accuracy: accuracy,
        isDemo: false,
        timestamp: Date.now()
      };
      
      // Update UI for success
      if (locationIcon) locationIcon.className = 'fas fa-check-circle';
      if (locationTitle) locationTitle.innerHTML = '✓ Location Detected Successfully!';
      if (locationSubtitle) locationSubtitle.innerHTML = `Accuracy: ${Math.round(accuracy)}m - Ready to continue`;
      if (permissionBox) permissionBox.style.display = 'none';
      if (statusText) {
        statusText.innerHTML = `<strong style="color: var(--color-success);">✓ Location obtained: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}</strong>`;
      }
      
      // Show success toast
      showToast('✓ Location detected!', 'success');
      
      // Proceed immediately - smooth flow
      setTimeout(() => {
        continueToProfile();
      }, 800);
    },
    // ERROR - Permission denied, unavailable, timeout, etc.
    (error) => {
      clearTimeout(timeoutId);
      console.log('Location error:', error.code, '- showing manual entry');
      
      // Show manual location entry instead of demo mode
      showManualEntryAfterGPSFailure();
    },
    {
      enableHighAccuracy: true,
      timeout: 2500, // Short timeout
      maximumAge: 0
    }
  );
}

// Show manual location entry when GPS fails
function showManualEntryAfterGPSFailure() {
  const statusText = document.getElementById('locationStatusText');
  const locationIcon = document.getElementById('locationIcon');
  const locationTitle = document.getElementById('locationTitle');
  const locationSubtitle = document.getElementById('locationSubtitle');
  const permissionBox = document.getElementById('locationPermissionBox');
  const manualOption = document.getElementById('manualLocationOption');
  
  // Update UI to show GPS failed
  if (locationIcon) locationIcon.className = 'fas fa-exclamation-circle';
  if (locationTitle) locationTitle.innerHTML = '📍 GPS Location Unavailable';
  if (locationSubtitle) locationSubtitle.innerHTML = 'Please enter your location manually for accurate flood predictions';
  if (permissionBox) permissionBox.style.display = 'none';
  if (statusText) {
    statusText.innerHTML = '<strong style="color: var(--color-warning);">⚠️ GPS location not available - Enter location manually below</strong>';
  }
  
  // Show manual entry button prominently
  if (manualOption) {
    manualOption.style.display = 'block';
    const btn = document.getElementById('useManualLocationBtn');
    if (btn) {
      btn.style.cssText = 'width: 100%; padding: 14px 24px; font-size: 18px; background: var(--color-primary); color: var(--color-btn-primary-text);';
      btn.className = 'btn btn-primary';
    }
  }
}

// Silent demo mode fallback - no blocking error screens
function useDemoLocationSilently() {
  const statusText = document.getElementById('locationStatusText');
  const locationIcon = document.getElementById('locationIcon');
  const locationTitle = document.getElementById('locationTitle');
  const locationSubtitle = document.getElementById('locationSubtitle');
  const permissionBox = document.getElementById('locationPermissionBox');
  
  // Set demo location (Delhi)
  appState.userLocation = {
    lat: 28.6139,
    lng: 77.2090,
    accuracy: 10,
    isDemo: true,
    city: 'Delhi',
    timestamp: Date.now()
  };
  appState.isDemoMode = true;
  
  // Update UI
  if (locationIcon) locationIcon.className = 'fas fa-map-marked-alt';
  if (locationTitle) locationTitle.innerHTML = '📍 Using Demo Location';
  if (locationSubtitle) locationSubtitle.innerHTML = 'Delhi location - You can try real location later from dashboard';
  if (permissionBox) permissionBox.style.display = 'none';
  if (statusText) {
    statusText.innerHTML = '<strong style="color: var(--color-info);">📍 Demo Mode Active: Delhi, India</strong>';
  }
  
  // Show info toast
  showToast('📍 Demo Mode (Delhi)', 'info');
  
  // Proceed immediately - smooth flow
  setTimeout(() => {
    continueToProfile();
  }, 800);
}

// Toast notification system
function showToast(message, type) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  
  // Type-specific colors
  if (type === 'success') {
    toast.style.background = '#06A77D';
    toast.style.color = 'white';
  } else if (type === 'info') {
    toast.style.background = '#2E86AB';
    toast.style.color = 'white';
  } else if (type === 'warning') {
    toast.style.background = '#F18F01';
    toast.style.color = 'white';
  } else if (type === 'error') {
    toast.style.background = '#C0152F';
    toast.style.color = 'white';
  }
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 10);
  
  setTimeout(() => {
    toast.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (toast.parentNode) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// High Accuracy Location - AUTOMATICALLY TRIGGERED after OTP verification
function requestHighAccuracyLocation() {
  const statusText = document.getElementById('locationStatusText');
  const accuracyDisplay = document.getElementById('accuracyDisplay');
  const continueBtn = document.getElementById('continueAfterLocation');
  const retryBtn = document.getElementById('retryLocationBtn');
  const locationIcon = document.getElementById('locationIcon');
  const locationTitle = document.getElementById('locationTitle');
  const locationSubtitle = document.getElementById('locationSubtitle');
  const permissionBox = document.getElementById('locationPermissionBox');
  const demoBtn = document.getElementById('useDemoLocationBtn');
  
  // Update UI to show auto-requesting
  if (locationIcon) locationIcon.className = 'fas fa-crosshairs fa-spin';
  if (locationTitle) locationTitle.innerHTML = '🔍 Getting Your Location...';
  if (locationSubtitle) locationSubtitle.textContent = 'Please wait while we request your location...';
  if (permissionBox) permissionBox.style.display = 'block';
  if (retryBtn) retryBtn.style.display = 'none';
  if (accuracyDisplay) accuracyDisplay.style.display = 'none';
  if (continueBtn) continueBtn.style.display = 'none';
  if (demoBtn) demoBtn.parentElement.style.display = 'block';
  
  // CRITICAL: Check secure context FIRST
  if (!appState.isSecureContext) {
    if (locationIcon) locationIcon.className = 'fas fa-exclamation-triangle';
    if (locationTitle) locationTitle.innerHTML = '🚫 Location Access Blocked';
    if (locationSubtitle) locationSubtitle.innerHTML = 'HTTPS required for location access';
    if (permissionBox) permissionBox.style.display = 'none';
    
    statusText.innerHTML = `
      <div style="color: var(--color-error); font-weight: bold; margin-bottom: 12px;">
        <i class="fas fa-lock"></i> HTTPS Required for Location Access
      </div>
      <p style="font-size: 14px; line-height: 1.6; margin-bottom: 12px;">
        Your browser blocks location access on non-HTTPS sites for security.<br>
        <strong>Current:</strong> ${window.location.protocol}//${window.location.host} ❌
      </p>
    `;
    
    const fixBtn = document.createElement('button');
    fixBtn.className = 'btn btn-primary';
    fixBtn.style.cssText = 'width: 100%; margin-bottom: 12px;';
    fixBtn.innerHTML = '<i class="fas fa-info-circle"></i> Show Fix Instructions';
    fixBtn.onclick = showHTTPSInstructions;
    statusText.appendChild(fixBtn);
    
    const demoBtn = document.createElement('button');
    demoBtn.className = 'btn btn-secondary';
    demoBtn.style.cssText = 'width: 100%;';
    demoBtn.innerHTML = '<i class="fas fa-map-marked-alt"></i> Use Demo Location Instead';
    demoBtn.onclick = useDemoLocation;
    statusText.appendChild(demoBtn);
    
    showNotification('⚠️ HTTPS required for location. Deploy to fix.', 'warning');
    return;
  }
  
  // Check if geolocation is supported
  if (!navigator.geolocation) {
    if (locationIcon) locationIcon.className = 'fas fa-times-circle';
    if (locationTitle) locationTitle.textContent = '❌ Geolocation Not Supported';
    if (locationSubtitle) locationSubtitle.textContent = 'Your browser does not support location services';
    if (permissionBox) permissionBox.style.display = 'none';
    statusText.textContent = '❌ Geolocation not supported by your browser';
    if (retryBtn) retryBtn.style.display = 'none';
    showNotification('Geolocation is not supported by your browser', 'error');
    return;
  }
  
  // Update UI to show we're requesting permission
  statusText.textContent = '🔄 Requesting location permission from browser...';
  statusText.style.color = 'var(--color-primary)';
  
  // High accuracy options
  const options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };
  
  // IMMEDIATELY call getCurrentPosition - this triggers the native browser permission dialog
  navigator.geolocation.getCurrentPosition(
    // SUCCESS CALLBACK - User allowed location access
    (position) => {
      const accuracy = position.coords.accuracy;
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      appState.userLocation = {
        lat: lat,
        lng: lng,
        accuracy: accuracy,
        timestamp: Date.now()
      };
      
      // Update UI for success
      if (locationIcon) locationIcon.className = 'fas fa-check-circle';
      if (locationTitle) locationTitle.innerHTML = '✓ Location Obtained!';
      if (permissionBox) permissionBox.style.display = 'none';
      
      accuracyDisplay.style.display = 'block';
      if (retryBtn) retryBtn.style.display = 'none';
      
      // Update accuracy display
      document.getElementById('accuracyValue').textContent = `${Math.round(accuracy)}m`;
      document.getElementById('coordsDisplay').textContent = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      
      // Update progress bar
      const progress = document.getElementById('accuracyProgress');
      const percentage = Math.min((100 / accuracy) * 50, 100); // 50m = 100%
      progress.style.width = `${percentage}%`;
      
      if (accuracy < 50) {
        progress.className = 'accuracy-fill good';
        statusText.textContent = '✅ Excellent accuracy! Proceeding to dashboard...';
        statusText.style.color = 'var(--color-success)';
        if (locationSubtitle) locationSubtitle.textContent = `Accuracy: ${Math.round(accuracy)}m - Perfect for flood predictions!`;
        // Auto-continue after 2 seconds with good accuracy
        setTimeout(() => {
          continueToProfile();
        }, 2000);
      } else if (accuracy < 100) {
        progress.className = 'accuracy-fill medium';
        statusText.textContent = '✅ Good accuracy obtained! Proceeding...';
        statusText.style.color = 'var(--color-success)';
        if (locationSubtitle) locationSubtitle.textContent = `Accuracy: ${Math.round(accuracy)}m - Ready to continue`;
        // Auto-continue after 2 seconds
        setTimeout(() => {
          continueToProfile();
        }, 2000);
      } else {
        progress.className = 'accuracy-fill poor';
        statusText.textContent = '⚠️ Location obtained but accuracy is low.';
        statusText.style.color = 'var(--color-warning)';
        if (locationSubtitle) locationSubtitle.textContent = `Accuracy: ${Math.round(accuracy)}m - You can continue or retry for better accuracy`;
        const tips = document.createElement('div');
        tips.style.cssText = 'margin-top: 12px; padding: 12px; background: var(--color-bg-2); border-radius: 8px; font-size: 13px;';
        tips.innerHTML = `
          <strong>💡 Tips for better accuracy:</strong>
          <ul style="margin: 8px 0; padding-left: 20px;">
            <li>Move outdoors or near a window</li>
            <li>Enable GPS/Location Services on your device</li>
            <li>Wait a few seconds for GPS to stabilize</li>
          </ul>
        `;
        statusText.parentElement.appendChild(tips);
        if (continueBtn) {
          continueBtn.disabled = false;
          continueBtn.style.display = 'block';
        }
        if (retryBtn) retryBtn.style.display = 'block';
      }
      
      showNotification(`✅ Location obtained! Accuracy: ${Math.round(accuracy)}m`, accuracy < 50 ? 'success' : 'warning');
    },
    // ERROR CALLBACK - User denied permission or other error
    (error) => {
      if (locationIcon) locationIcon.className = 'fas fa-exclamation-triangle';
      if (permissionBox) permissionBox.style.display = 'none';
      if (retryBtn) {
        retryBtn.style.display = 'block';
        retryBtn.disabled = false;
      }
      
      let errorMsg = '';
      let errorTitle = '';
      let instructions = '';
      
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorTitle = '🚫 Location Permission Denied';
          errorMsg = 'You blocked location access. To enable accurate flood predictions, please allow location access.';
          instructions = `
            <div style="margin-top: 16px; padding: 16px; background: var(--color-bg-4); border-radius: 8px; font-size: 14px; border: 2px solid var(--color-error);">
              <strong style="color: var(--color-error); font-size: 16px;">📱 How to Enable Location Access:</strong>
              <div style="margin-top: 12px;">
                <p style="margin-bottom: 8px;"><strong>Chrome/Edge:</strong></p>
                <ol style="margin: 0 0 12px 20px; padding: 0;">
                  <li>Click the lock icon 🔒 (or info icon ⓘ) in the address bar</li>
                  <li>Click "Site settings" or "Permissions"</li>
                  <li>Find "Location" and change to "Allow"</li>
                  <li>Refresh this page and click "Retry"</li>
                </ol>
                <p style="margin-bottom: 8px;"><strong>Firefox:</strong></p>
                <ol style="margin: 0 0 12px 20px; padding: 0;">
                  <li>Click the lock icon 🔒 in the address bar</li>
                  <li>Find "Location" → Click "X" to clear permission</li>
                  <li>Refresh page → Allow when prompted</li>
                </ol>
                <p style="margin-bottom: 8px;"><strong>Safari:</strong></p>
                <ol style="margin: 0 0 12px 20px; padding: 0;">
                  <li>Safari menu → Settings for This Website</li>
                  <li>Location → Change to "Allow"</li>
                </ol>
                <p style="margin-bottom: 8px;"><strong>Mobile Browser:</strong></p>
                <ol style="margin: 0 0 0 20px; padding: 0;">
                  <li>Open device Settings → Apps</li>
                  <li>Find your browser (Chrome/Safari/etc)</li>
                  <li>Permissions → Location → Allow</li>
                  <li>Return to this page and click "Retry"</li>
                </ol>
              </div>
            </div>
          `;
          break;
        case error.POSITION_UNAVAILABLE:
          errorTitle = '📍 Location Unavailable';
          errorMsg = 'Your device cannot determine your location right now.';
          instructions = `
            <div style="margin-top: 12px; padding: 12px; background: var(--color-bg-2); border-radius: 8px; font-size: 13px;">
              <strong>Try these steps:</strong>
              <ul style="margin: 8px 0; padding-left: 20px;">
                <li>Enable GPS/Location Services on your device</li>
                <li>Move to an area with better GPS signal (outdoors)</li>
                <li>Check your internet connection</li>
                <li>Restart your browser</li>
              </ul>
            </div>
          `;
          break;
        case error.TIMEOUT:
          errorTitle = '⏱️ Location Request Timed Out';
          errorMsg = 'It took too long to get your location. This usually happens indoors or in areas with poor GPS signal.';
          instructions = `
            <div style="margin-top: 12px; padding: 12px; background: var(--color-bg-2); border-radius: 8px; font-size: 13px;">
              <strong>Please try:</strong>
              <ul style="margin: 8px 0; padding-left: 20px;">
                <li>Move near a window or outdoors</li>
                <li>Wait a few seconds for GPS to connect</li>
                <li>Click "Retry Location Access" button below</li>
              </ul>
            </div>
          `;
          break;
        default:
          errorTitle = '❌ Location Error';
          errorMsg = 'An unexpected error occurred while getting your location.';
      }
      
      if (locationTitle) locationTitle.innerHTML = errorTitle;
      if (locationSubtitle) locationSubtitle.innerHTML = errorMsg;
      statusText.innerHTML = `<strong>${errorTitle}</strong><br><p style="margin-top: 8px;">${errorMsg}</p>${instructions}`;
      statusText.style.color = 'var(--color-error)';
      
      showNotification(errorTitle, 'error');
      
      appState.locationAttempts++;
      
      // Make demo mode more prominent
      if (demoBtn && demoBtn.parentElement) {
        demoBtn.parentElement.style.display = 'block';
        demoBtn.style.cssText = 'width: 100%; padding: 12px 24px; font-size: 16px;';
        demoBtn.innerHTML = '<i class="fas fa-map-marked-alt"></i> Use Demo Mode Instead (Delhi Location)';
      }
    },
    options
  );
}

function useDemoLocation() {
  // Set demo location (Delhi, India)
  appState.userLocation = {
    lat: 28.6139,
    lng: 77.2090,
    accuracy: 10,
    isDemo: true,
    city: 'Delhi',
    timestamp: Date.now()
  };
  appState.isDemoMode = true;
  
  const statusText = document.getElementById('locationStatusText');
  const accuracyDisplay = document.getElementById('accuracyDisplay');
  const continueBtn = document.getElementById('continueAfterLocation');
  const retryBtn = document.getElementById('retryLocationBtn');
  const demoBtn = document.getElementById('useDemoLocationBtn');
  const locationIcon = document.getElementById('locationIcon');
  const locationTitle = document.getElementById('locationTitle');
  const locationSubtitle = document.getElementById('locationSubtitle');
  const permissionBox = document.getElementById('locationPermissionBox');
  
  // Update UI
  if (locationIcon) locationIcon.className = 'fas fa-map-marked-alt';
  if (locationTitle) locationTitle.innerHTML = '🏛️ Demo Mode Activated';
  if (locationSubtitle) locationSubtitle.innerHTML = 'Using Delhi, India as demo location';
  if (permissionBox) permissionBox.style.display = 'none';
  
  statusText.innerHTML = '<strong style="color: var(--color-primary);">✓ Demo location set: Delhi, India</strong><br><p style="margin-top: 8px; font-size: 13px;">You can explore all features with this demo location.</p>';
  
  accuracyDisplay.style.display = 'block';
  document.getElementById('accuracyValue').textContent = '10m (Demo)';
  document.getElementById('coordsDisplay').textContent = '28.613900, 77.209000';
  
  const progress = document.getElementById('accuracyProgress');
  progress.style.width = '100%';
  progress.className = 'accuracy-fill good';
  
  if (retryBtn) retryBtn.style.display = 'none';
  if (demoBtn) demoBtn.parentElement.style.display = 'none';
  
  showToast('🏛️ Demo location activated: Delhi, India', 'info');
  
  // Auto-continue after 2 seconds
  setTimeout(() => {
    continueToProfile();
  }, 2000);
}

function continueToProfile() {
  if (!appState.userLocation) {
    showNotification('Please allow location access first', 'error');
    return;
  }
  
  // Check if existing user
  if (appState.registeredUsers[appState.currentPhone]) {
    // Complete login
    completeLogin();
  } else {
    // New user - go to profile setup
    updateAuthStep(4);
  }
}

function handleProfileSetup(e) {
  e.preventDefault();
  
  const name = document.getElementById('setupName').value;
  const language = document.getElementById('setupLanguage').value;
  const avatar = document.querySelector('input[name="avatar"]:checked').value;
  
  // Create user profile
  appState.userProfile = {
    name: name,
    phone: appState.currentPhone,
    language: language,
    avatar: avatar,
    registeredAt: new Date().toISOString()
  };
  
  // Store in registered users
  appState.registeredUsers[appState.currentPhone] = appState.userProfile;
  appState.isLoggedIn = true;
  
  // Apply language
  appState.currentLanguage = language;
  document.getElementById('languageSelector').value = language;
  applyTranslations();
  
  completeLogin();
}

function completeLogin() {
  hideAuthModal();
  updateUIForAuthState();
  navigateToPage('dashboard');
  
  // Always show demo banner if in demo mode
  if (appState.isDemoMode || appState.userLocation?.isDemo) {
    setTimeout(() => showDemoBanner(), 500);
    showToast(`Welcome ${appState.userProfile.name}! Demo Mode Active`, 'info');
  } else {
    showToast(`Welcome ${appState.userProfile.name}!`, 'success');
  }
  
  saveOfflineData();
  
  // Update dashboard with location info
  updateLocationDisplay();
  fetchWeatherData();
  assessFloodRisk();
}

function refreshUserLocation() {
  showNotification('Refreshing location...', 'info');
  appState.locationAttempts = 0;
  
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      appState.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
        timestamp: Date.now()
      };
      
      updateLocationDisplay();
      updateProfileLocationDisplay();
      showNotification(`Location updated! Accuracy: ${Math.round(position.coords.accuracy)}m`, 'success');
      
      // Refresh data
      if (appState.currentPage === 'dashboard') {
        fetchWeatherData();
        assessFloodRisk();
        if (map) {
          map.setView([appState.userLocation.lat, appState.userLocation.lng], 8);
        }
      }
    },
    (error) => {
      showNotification('Failed to refresh location. Using previous location.', 'error');
    },
    options
  );
}

// UI Updates
function updateUIForAuthState() {
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const dashboardBtn = document.getElementById('dashboardBtn');
  const profileBtn = document.getElementById('profileBtn');
  
  if (appState.isLoggedIn) {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-flex';
    dashboardBtn.style.display = 'inline-flex';
    profileBtn.style.display = 'inline-flex';
  } else {
    loginBtn.style.display = 'inline-flex';
    logoutBtn.style.display = 'none';
    dashboardBtn.style.display = 'none';
    profileBtn.style.display = 'none';
  }
}

// Page Navigation
function navigateToPage(pageName) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const targetPage = document.getElementById(`${pageName}Page`);
  if (targetPage) {
    targetPage.classList.add('active');
    appState.currentPage = pageName;
    
    // Load page-specific content
    if (pageName === 'dashboard') {
      loadDashboard();
    } else if (pageName === 'profile') {
      loadProfile();
    }
  }
}

// Geolocation
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        appState.userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
        updateLocationDisplay();
        fetchWeatherData();
        assessFloodRisk();
      },
      (error) => {
        console.error('Geolocation error:', error);
        // Use a default Indian city
        appState.userLocation = { lat: 28.7041, lng: 77.1025 }; // Delhi
        updateLocationDisplay();
        fetchWeatherData();
        assessFloodRisk();
      }
    );
  } else {
    appState.userLocation = { lat: 28.7041, lng: 77.1025 }; // Delhi default
    updateLocationDisplay();
  }
}

function updateLocationDisplay() {
  const locationEl = document.getElementById('userLocation');
  if (locationEl && appState.userLocation) {
    let displayText = '';
    
    if (appState.userLocation.isManual) {
      // Manual entry - show city, state, locality, landmark
      displayText = `<i class="fas fa-map-pin"></i> ${appState.userLocation.city}, ${appState.userLocation.state}`;
      if (appState.userLocation.locality) {
        displayText += ` (${appState.userLocation.locality})`;
      }
      if (appState.userLocation.landmark) {
        displayText += ` near ${appState.userLocation.landmark}`;
      }
      displayText += ' 📝 Manual';
    } else if (appState.userLocation.isDemo) {
      // Demo mode
      displayText = `<i class="fas fa-map-marked-alt"></i> ${appState.userLocation.city || 'Delhi'} 🎯 Demo`;
    } else {
      // GPS location
      const nearestCity = findNearestCity(appState.userLocation.lat, appState.userLocation.lng);
      const accuracy = Math.round(appState.userLocation.accuracy);
      displayText = `<i class="fas fa-crosshairs"></i> Near ${nearestCity.name}, ${nearestCity.state} (±${accuracy}m) 📍 GPS`;
    }
    
    locationEl.innerHTML = displayText;
  }
  
  // Update masked phone number
  const phoneEl = document.getElementById('userPhoneMasked');
  if (phoneEl && appState.userProfile && appState.userProfile.phone) {
    const phone = appState.userProfile.phone;
    const masked = phone.substring(0, 3) + ' ••••••' + phone.substring(phone.length - 3);
    phoneEl.textContent = masked;
  }
  
  updateProfileLocationDisplay();
}

function updateProfileLocationDisplay() {
  if (!appState.userLocation) return;
  
  const accuracyEl = document.getElementById('profileAccuracy');
  const latEl = document.getElementById('profileLat');
  const lngEl = document.getElementById('profileLng');
  
  if (accuracyEl) {
    const accuracy = Math.round(appState.userLocation.accuracy);
    let accuracyText = `${accuracy}m`;
    
    if (appState.userLocation.isManual) {
      accuracyText += ' (City-level)';
    } else if (appState.userLocation.isDemo) {
      accuracyText = 'Demo Mode';
    }
    
    accuracyEl.textContent = accuracyText;
    accuracyEl.style.color = accuracy < 50 ? 'var(--color-success)' : accuracy < 1000 ? 'var(--color-warning)' : 'var(--color-info)';
  }
  
  if (latEl) latEl.textContent = appState.userLocation.lat.toFixed(6);
  if (lngEl) lngEl.textContent = appState.userLocation.lng.toFixed(6);
}

function findNearestCity(lat, lng) {
  let nearest = indianCities[0];
  let minDist = calculateDistance(lat, lng, nearest.lat, nearest.lng);
  
  indianCities.forEach(city => {
    const dist = calculateDistance(lat, lng, city.lat, city.lng);
    if (dist < minDist) {
      minDist = dist;
      nearest = city;
    }
  });
  
  return nearest;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Enhanced Weather Data Functions
function findNearestCityName(lat, lng) {
  const cityMap = [
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'New Delhi', lat: 28.6139, lng: 77.2090 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 }
  ];
  
  let nearest = cityMap[0];
  let minDist = calculateDistance(lat, lng, nearest.lat, nearest.lng);
  
  cityMap.forEach(city => {
    const dist = calculateDistance(lat, lng, city.lat, city.lng);
    if (dist < minDist) {
      minDist = dist;
      nearest = city;
    }
  });
  
  return nearest.name;
}

function getWeatherForLocation(lat, lng) {
  const nearestCity = findNearestCityName(lat, lng);
  const cityData = weatherDataCSV.find(row => row.Location === nearestCity);
  
  if (!cityData) return null;
  
  return {
    city: nearestCity,
    date: cityData.Date,
    minTemp: cityData.MinTemp,
    maxTemp: cityData.MaxTemp,
    currentTemp: ((cityData.MinTemp + cityData.MaxTemp) / 2).toFixed(1),
    humidity9am: cityData.Humidity9am,
    humidity3pm: cityData.Humidity3pm,
    pressure9am: cityData.Pressure9am,
    pressure3pm: cityData.Pressure3pm,
    windSpeed9am: cityData.WindSpeed9am,
    windSpeed3pm: cityData.WindSpeed3pm,
    rainToday: cityData.RainToday,
    rainTomorrow: cityData.RainTomorrow
  };
}

function calculateFloodRiskFromWeather(weather) {
  let risk = 'LOW';
  let riskColor = '🟢';
  let riskBg = 'var(--color-bg-3)';
  
  if (weather.rainTomorrow === 'Yes' && weather.humidity3pm > 75) {
    risk = 'HIGH';
    riskColor = '🔴';
    riskBg = 'var(--color-bg-4)';
  } else if (weather.rainTomorrow === 'Yes' || weather.humidity3pm > 75) {
    risk = 'MEDIUM';
    riskColor = '🟡';
    riskBg = 'var(--color-bg-2)';
  } else if (weather.humidity3pm > 50) {
    risk = 'LOW-MEDIUM';
    riskColor = '🟡';
    riskBg = 'var(--color-bg-2)';
  }
  
  return { risk, riskColor, riskBg };
}

function getPressureTrend(weather) {
  const diff = weather.pressure9am - weather.pressure3pm;
  
  if (diff > 5) {
    return {
      trend: '⚠️ DROPPING FAST',
      arrow: '↘️',
      forecast: 'Storm approaching',
      color: 'var(--color-error)'
    };
  } else if (diff > 2) {
    return {
      trend: 'Falling',
      arrow: '↘️',
      forecast: 'Rain likely',
      color: 'var(--color-warning)'
    };
  } else if (diff < -2) {
    return {
      trend: 'Rising',
      arrow: '↗️',
      forecast: 'Weather clearing',
      color: 'var(--color-success)'
    };
  } else {
    return {
      trend: 'Stable',
      arrow: '→',
      forecast: 'No major changes',
      color: 'var(--color-primary)'
    };
  }
}

function getSkyCondition(weather) {
  if (weather.rainToday === 'Yes') {
    return { icon: '🌧️', condition: 'Rainy' };
  } else if (weather.humidity3pm > 75) {
    return { icon: '☁️', condition: 'Cloudy (High humidity)' };
  } else if (weather.humidity3pm > 50) {
    return { icon: '⛅', condition: 'Partly Cloudy' };
  } else {
    return { icon: '☀️', condition: 'Clear' };
  }
}

// Weather Data (Enhanced with CSV data)
function fetchWeatherData() {
  if (!appState.userLocation) return;
  
  setTimeout(() => {
    const weatherData = getWeatherForLocation(appState.userLocation.lat, appState.userLocation.lng);
    
    if (weatherData) {
      appState.weatherData = weatherData;
      updateWeatherBox();
    } else {
      // Fallback to mock data
      appState.weatherData = {
        temp: 28 + Math.floor(Math.random() * 10),
        humidity: 60 + Math.floor(Math.random() * 30),
        rainfall: Math.floor(Math.random() * 100),
        condition: ['Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 3)]
      };
      displayWeatherData();
    }
  }, 500);
}

function updateWeatherBox() {
  if (!appState.weatherData || !appState.userLocation) return;
  
  const weather = appState.weatherData;
  
  // Temperature
  const avgTemp = ((weather.minTemp + weather.maxTemp) / 2).toFixed(1);
  document.getElementById('tempValue').textContent = `${avgTemp}°C`;
  document.getElementById('tempRange').textContent = `${weather.minTemp}°C - ${weather.maxTemp}°C`;
  
  // Humidity
  const avgHumidity = Math.round((weather.humidity9am + weather.humidity3pm) / 2);
  document.getElementById('humidityValue').textContent = `${avgHumidity}%`;
  document.getElementById('humidityDetail').textContent = `AM: ${weather.humidity9am}% | PM: ${weather.humidity3pm}%`;
  
  // Pressure
  const avgPressure = ((weather.pressure9am + weather.pressure3pm) / 2).toFixed(1);
  const pressureDiff = weather.pressure3pm - weather.pressure9am;
  let trend = 'Stable';
  if (pressureDiff > 2) trend = 'Rising ↗️';
  else if (pressureDiff < -2) trend = 'Falling ↘️';
  document.getElementById('pressureValue').textContent = `${avgPressure} hPa`;
  document.getElementById('pressureTrend').textContent = trend;
  
  // Rainfall
  document.getElementById('rainValue').textContent = weather.rainToday === 'Yes' ? 'Yes' : 'No';
  document.getElementById('rainTomorrow').textContent = `Tomorrow: ${weather.rainTomorrow}`;
  document.getElementById('rainIcon').textContent = weather.rainToday === 'Yes' ? '🌧️' : '☁️';
  
  // Wind
  const avgWind = Math.round((weather.windSpeed9am + weather.windSpeed3pm) / 2);
  document.getElementById('windValue').textContent = `${avgWind} km/h`;
  document.getElementById('windDetail').textContent = `AM: ${weather.windSpeed9am} | PM: ${weather.windSpeed3pm}`;
  
  // Sky Condition
  let skyCondition = 'Clear';
  let skyIcon = '☀️';
  if (weather.rainToday === 'Yes') {
    skyCondition = 'Rainy';
    skyIcon = '🌧️';
  } else if (weather.humidity3pm > 70) {
    skyCondition = 'Cloudy';
    skyIcon = '☁️';
  }
  document.getElementById('skyValue').textContent = skyCondition;
  document.getElementById('skyIcon').textContent = skyIcon;
  document.getElementById('skyDetail').textContent = `Humidity: ${weather.humidity3pm}%`;
  
  // Location
  document.getElementById('currentLocation').textContent = 
    `${weather.city} (${appState.userLocation.lat.toFixed(4)}, ${appState.userLocation.lng.toFixed(4)})`;
}

function displayWeatherData() {
  const weatherEl = document.getElementById('weatherInfo');
  if (weatherEl && appState.weatherData) {
    const iconMap = {
      'Cloudy': 'fa-cloud',
      'Rainy': 'fa-cloud-rain',
      'Partly Cloudy': 'fa-cloud-sun'
    };
    
    weatherEl.innerHTML = `
      <div style="display: flex; align-items: center; gap: var(--space-16);">
        <i class="fas ${iconMap[appState.weatherData.condition]}" style="font-size: var(--font-size-4xl); color: var(--color-primary);"></i>
        <div>
          <div style="font-size: var(--font-size-3xl); font-weight: var(--font-weight-bold);">${appState.weatherData.temp}°C</div>
          <div style="color: var(--color-text-secondary);">${appState.weatherData.condition}</div>
          <div style="margin-top: var(--space-8); font-size: var(--font-size-sm);">
            <i class="fas fa-tint"></i> Humidity: ${appState.weatherData.humidity}%<br>
            <i class="fas fa-cloud-rain"></i> Rainfall: ${appState.weatherData.rainfall}mm
          </div>
        </div>
      </div>
    `;
  }
}

// Flood Risk Assessment
function assessFloodRisk() {
  setTimeout(() => {
    const nearestCity = findNearestCity(appState.userLocation.lat, appState.userLocation.lng);
    const riskLevel = nearestCity.risk;
    const rainfall = appState.weatherData?.rainfall || 0;
    
    let actualRisk = riskLevel;
    if (rainfall > 100) {
      actualRisk = 'high';
    } else if (rainfall > 50 && riskLevel === 'medium') {
      actualRisk = 'high';
    }
    
    appState.floodRisk = {
      level: actualRisk,
      city: nearestCity.name,
      rainfall: rainfall,
      alertActive: actualRisk === 'high' && rainfall > 80
    };
    
    displayFloodRisk();
    
    if (appState.floodRisk.alertActive) {
      showFloodAlert();
    }
  }, 1500);
}

function displayFloodRisk() {
  const riskEl = document.getElementById('floodRiskStatus');
  if (riskEl && appState.floodRisk) {
    const statusMap = {
      'low': { class: 'status-safe', icon: 'fa-check-circle', text: 'Low Risk' },
      'medium': { class: 'status-warning', icon: 'fa-exclamation-triangle', text: 'Medium Risk' },
      'high': { class: 'status-danger', icon: 'fa-exclamation-circle', text: 'High Risk' }
    };
    
    const status = statusMap[appState.floodRisk.level];
    
    riskEl.innerHTML = `
      <div style="text-align: center; padding: var(--space-16);">
        <i class="fas ${status.icon}" style="font-size: var(--font-size-4xl); margin-bottom: var(--space-16);"></i>
        <div class="status-badge ${status.class}" style="font-size: var(--font-size-lg); padding: var(--space-12) var(--space-24);">
          ${status.text}
        </div>
        <div style="margin-top: var(--space-16); color: var(--color-text-secondary);">
          Based on current rainfall and historical data for ${appState.floodRisk.city}
        </div>
      </div>
    `;
  }
}

function showFloodAlert() {
  const alertEl = document.getElementById('floodAlert');
  if (alertEl) {
    alertEl.style.display = 'block';
    alertEl.className = 'alert-banner error';
    alertEl.innerHTML = `
      <i class="fas fa-exclamation-triangle alert-icon"></i>
      <div style="flex: 1;">
        <strong>FLOOD ALERT - HIGH RISK DETECTED</strong>
        <p>Heavy rainfall detected in your area. Flood risk is elevated. Click to view details and calculate arrival time.</p>
        <button class="btn btn-primary" onclick="navigateToPage('alertDetail')" style="margin-top: var(--space-8);">
          View Details & Calculate Arrival Time
        </button>
      </div>
    `;
    
    showNotification('⚠️ Flood Alert: High risk detected in your area!', 'error');
  }
}

// Dashboard
function loadDashboard() {
  if (appState.userLocation) {
    initMap();
    loadFloodHistoryChart();
    loadRainfallChart();
  } else {
    getUserLocation();
  }
  
  // Update user name
  const userNameEl = document.getElementById('userName');
  if (userNameEl && appState.userProfile) {
    userNameEl.textContent = `Welcome, ${appState.userProfile.name}!`;
  }
}

// Map Initialization
let map = null;
function initMap() {
  if (map) {
    map.remove();
  }
  
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  
  const center = appState.userLocation || { lat: 20.5937, lng: 78.9629 }; // India center
  
  map = L.map('map').setView([center.lat, center.lng], 6);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Add user marker
  if (appState.userLocation) {
    L.marker([appState.userLocation.lat, appState.userLocation.lng])
      .addTo(map)
      .bindPopup('<strong>Your Location</strong>')
      .openPopup();
  }
  
  // Add city markers with flood risk
  indianCities.forEach(city => {
    const colorMap = {
      'high': '#C0152F',
      'medium': '#F5A623',
      'low': '#21808D'
    };
    
    const marker = L.circleMarker([city.lat, city.lng], {
      radius: 8,
      fillColor: colorMap[city.risk],
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.7
    }).addTo(map);
    
    marker.bindPopup(`
      <strong>${city.name}, ${city.state}</strong><br>
      Flood Risk: <strong style="color: ${colorMap[city.risk]};">${city.risk.toUpperCase()}</strong>
    `);
  });
}

// Charts with ANIMATIONS
function loadFloodHistoryChart() {
  const ctx = document.getElementById('floodHistoryChart');
  if (!ctx) return;
  
  const data = mockFloodData.historicalEvents;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(d => `${d.state} (${d.year})`),
      datasets: [{
        label: 'People Affected (Millions)',
        data: data.map(d => (d.affected / 1000000).toFixed(2)),
        backgroundColor: '#1FB8CD',
        borderColor: 'rgba(33, 128, 141, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: 'easeOutBounce',
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default') {
            delay = context.dataIndex * 150;
          }
          return delay;
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: 'Major Flood Events in India (2015-2019)'
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.parsed.y + ' million people affected';
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Millions of People'
          }
        },
        x: {
          title: {
            display: true,
            text: 'States & Years'
          }
        }
      }
    }
  });
}

function loadRainfallChart() {
  const ctx = document.getElementById('rainfallChart');
  if (!ctx) return;
  
  const data = mockFloodData.rainfallForecast;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(d => d.day),
      datasets: [{
        label: 'Rainfall (mm)',
        data: data.map(d => d.rainfall),
        borderColor: 'rgba(102, 126, 234, 1)',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2500,
        easing: 'easeInOutQuad',
        x: {
          type: 'number',
          easing: 'linear',
          duration: 2500,
          from: 0
        },
        y: {
          type: 'number',
          easing: 'easeInOutQuad',
          duration: 2500,
          from: (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.scales.y.getPixelForValue(ctx.parsed.y)
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        title: {
          display: true,
          text: '7-Day Rainfall Forecast'
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Rainfall (mm)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Forecast Days'
          }
        }
      }
    }
  });
}

// Flood Calculator page logic
function setupFloodCalculatorInputSync() {
  // Slider <-> Input sync for flood calculator
  [
    ['calcDistance', 'calcDistanceValue', 0.1, 100],
    ['calcHydraulicRadius', 'calcHydraulicRadiusValue', 0.5, 15],
    ['calcSlope', 'calcSlopeValue', 0.0001, 0.01],
    ['calcRunoff', 'calcRunoffValue', 0.1, 0.9]
  ].forEach(([sliderId, inputId, min, max]) => {
    const slider = document.getElementById(sliderId);
    const input = document.getElementById(inputId);
    if (slider && input) {
      slider.addEventListener('input', () => {
        input.value = slider.value;
      });
      input.addEventListener('input', () => {
        let val = Math.max(min, Math.min(max, parseFloat(input.value)));
        slider.value = val;
        input.value = val;
      });
    }
  });
}

// Enhanced Simple Calculator with Graph - FIXED VERSION
function handleSimpleCalculator(e) {
  e.preventDefault();
  
  const distance = parseFloat(document.getElementById('simpleDistance').value);
  const selectedSpeed = parseFloat(document.getElementById('floodSpeed').value);
  const customSpeed = parseFloat(document.getElementById('customSpeed').value);
  
  // Validation
  if (!distance || distance <= 0) {
    showToast('Please enter a valid distance greater than 0', 'error');
    return;
  }
  
  // Use custom if provided, otherwise selected
  const speed = customSpeed && customSpeed > 0 ? customSpeed : selectedSpeed;
  
  if (!speed || speed <= 0) {
    showToast('Please select or enter a valid flood speed', 'error');
    return;
  }
  
  // Calculate time: Time = Distance / Speed
  const timeHours = distance / speed;
  const hours = Math.floor(timeHours);
  const minutes = Math.round((timeHours - hours) * 60);
  
  // Display results - Update big time display
  document.getElementById('hoursDigit').textContent = hours;
  document.getElementById('minutesDigit').textContent = minutes;
  
  // Update timeline info
  document.getElementById('simpleDistanceDisplay').textContent = `${distance} km`;
  document.getElementById('simpleSpeedDisplay').textContent = `${speed} km/h`;
  
  // Update graph insights
  document.getElementById('graphDistance').textContent = `${distance} km`;
  document.getElementById('graphSpeed').textContent = `${speed} km/h`;
  document.getElementById('graphTime').textContent = `${timeHours.toFixed(1)} hours`;
  
  // Update evacuation timeline
  document.getElementById('floodArrivalTitle').textContent = `+${hours}h ${minutes}m: Flood Arrival`;
  
  // Animate timeline progress
  setTimeout(() => {
    const progressBar = document.getElementById('floodProgress');
    if (progressBar) progressBar.style.width = '100%';
  }, 300);
  
  // Warning based on urgency
  let warning = '';
  let warningBg = '';
  
  if (timeHours < 1) {
    warning = '🚨 URGENT! Evacuate immediately! Less than 1 hour!';
    warningBg = 'background: var(--gradient-danger); color: white; padding: var(--space-16); border-radius: var(--radius-base);';
  } else if (timeHours < 2) {
    warning = '⚠️ HIGH ALERT! Start evacuation now!';
    warningBg = 'background: var(--gradient-warning); color: white; padding: var(--space-16); border-radius: var(--radius-base);';
  } else if (timeHours < 4) {
    warning = '⚡ PREPARE! Get ready to evacuate soon.';
    warningBg = 'background: var(--gradient-warning); color: white; padding: var(--space-16); border-radius: var(--radius-base);';
  } else {
    warning = '✓ TIME AVAILABLE. Monitor situation and prepare.';
    warningBg = 'background: var(--gradient-success); color: white; padding: var(--space-16); border-radius: var(--radius-base);';
  }
  
  const warningEl = document.getElementById('simpleWarning');
  if (warningEl) {
    const warningText = warningEl.querySelector('p');
    if (warningText) warningText.textContent = warning;
    warningEl.style.cssText = warningBg;
  }
  
  // Generate graph
  drawSimpleGraph(distance, speed, timeHours);
  
  // Show evacuation timeline
  showEvacuationTimeline(timeHours);
  
  // Show safety recommendation
  showSafetyRecommendation(timeHours);
  
  // Show results
  const resultEl = document.getElementById('simpleResult');
  if (resultEl) {
    resultEl.style.display = 'block';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  showToast(`✓ Flood arrives in ${hours}h ${minutes}m`, timeHours < 2 ? 'error' : 'success');
}

function drawSimpleGraph(distance, speed, timeHours) {
  const canvas = document.getElementById('simpleGraphCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  // Destroy existing chart
  const existing = Chart.getChart(ctx);
  if (existing) existing.destroy();
  
  // Generate time points
  const timePoints = [];
  const distancePoints = [];
  const numPoints = 10;
  
  for (let i = 0; i <= numPoints; i++) {
    const t = (timeHours * i) / numPoints;
    timePoints.push(t.toFixed(1) + ' hrs');
    distancePoints.push((speed * t).toFixed(1));
  }
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: timePoints,
      datasets: [{
        label: 'Distance Covered (km)',
        data: distancePoints,
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      },
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Distance (km)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time (hours)'
          }
        }
      }
    }
  });
}

function showEvacuationTimeline(timeHours) {
  // Timeline updates based on arrival time
  const evacStart = document.getElementById('evacStart');
  const safeZone = document.getElementById('safeZone');
  const floodArrival = document.getElementById('floodArrival');
  
  if (evacStart) {
    const evacTime = Math.max(0.5, timeHours * 0.25);
    evacStart.querySelector('.step-title').textContent = `+${Math.round(evacTime * 60)} min: Start Evacuation`;
  }
  
  if (safeZone) {
    const safeTime = Math.max(1, timeHours * 0.5);
    const h = Math.floor(safeTime);
    const m = Math.round((safeTime - h) * 60);
    safeZone.querySelector('.step-title').textContent = `+${h}h ${m}m: Reach Safe Zone`;
  }
}

function showSafetyRecommendation(timeHours) {
  const recEl = document.getElementById('safetyRecommendation');
  if (!recEl) return;
  
  let recommendation = '';
  if (timeHours < 1) {
    recommendation = 'EVACUATE IMMEDIATELY! You have less than 1 hour. Leave now with essential items only.';
  } else if (timeHours < 2) {
    recommendation = 'Start evacuation within the next 30 minutes to ensure safety. Gather essentials and move to higher ground.';
  } else if (timeHours < 4) {
    recommendation = 'Prepare for evacuation. Gather emergency supplies, important documents, and plan your route.';
  } else {
    recommendation = 'You have time to prepare. Monitor updates, prepare emergency kit, and stay alert for changes.';
  }
  
  recEl.textContent = recommendation;
}



function handleFloodCalculator(e) {
  e.preventDefault();
  
  // Get all input values
  const distance = parseFloat(document.getElementById('calcDistanceValue').value);
  const manningN = parseFloat(document.getElementById('calcManningN').value);
  const hydraulicRadius = parseFloat(document.getElementById('calcHydraulicRadiusValue').value);
  const slope = parseFloat(document.getElementById('calcSlopeValue').value);
  const rainfallIntensity = parseFloat(document.getElementById('calcRainfall').value);
  const catchmentArea = parseFloat(document.getElementById('calcCatchment').value);
  const runoffC = parseFloat(document.getElementById('calcRunoffValue').value);
  
  // Calculate using all 4 methods
  const results = calculateAllMethodsEnhanced(distance, manningN, hydraulicRadius, slope, rainfallIntensity, catchmentArea, runoffC);
  
  // Display enhanced results
  displayEnhancedCalculatorResults(results, distance);
  
  // Show results container
  const resultsEl = document.getElementById('calculatorResults');
  if (resultsEl) {
    resultsEl.style.display = 'block';
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  showToast('✓ Flood arrival calculated using all 4 methods!', 'success');
}

function showAllMethodsComparison(distance, manningN, hydraulicRadius, slope, rainfallIntensity, catchmentArea, runoffC) {
  // Calculate ALL 4 methods
  
  // METHOD 1: Manning's Equation
  const velocity_manning = (1 / manningN) * Math.pow(hydraulicRadius, 2/3) * Math.pow(slope, 0.5);
  const distanceMeters = distance * 1000;
  const time_manning = velocity_manning > 0.01 ? (distanceMeters / velocity_manning) / 3600 : 0;
  
  // METHOD 2: Rational Method
  const rainfallIntensity_mhr = rainfallIntensity / 1000;
  const area_m2 = catchmentArea * 1e6;
  const Qp = runoffC * rainfallIntensity_mhr * area_m2;
  const velocity_rational = Math.min(velocity_manning * 0.8, 5);
  const time_rational = velocity_rational > 0.01 ? (distanceMeters / velocity_rational) / 3600 : 0;
  
  // METHOD 3: Wave Celerity
  const waveCelerity = (5/3) * velocity_manning;
  const time_celerity = waveCelerity > 0.01 ? (distanceMeters / waveCelerity) / 3600 : 0;
  
  // METHOD 4: Unit Hydrograph
  const time_hydrograph = time_manning * 1.15;
  const peakDischarge = Qp > 0 ? Qp / 3600 : 0;
  
  // Create 4-column method comparison HTML
  const methodsHTML = `
    <div class="methods-comparison">
      <h2>📊 Comparison of All Methods</h2>
      
      <!-- 4-Column Grid -->
      <div class="methods-grid">
        
        <!-- METHOD 1: Manning's Equation -->
        <div class="method-card">
          <div class="method-header">
            <h3>📐 Manning's Equation</h3>
          </div>
          
          <div class="method-content">
            <!-- Formula -->
            <div class="formula-section">
              <h4>Formula:</h4>
              <div class="formula-box">
                v = (1/n) × R^(2/3) × S^(1/2)
              </div>
            </div>
            
            <!-- Input Values -->
            <div class="values-section">
              <h4>Input Values:</h4>
              <div class="value-item">
                <span class="label">Roughness (n):</span>
                <span class="value">${manningN}</span>
              </div>
              <div class="value-item">
                <span class="label">Hydraulic Radius (R):</span>
                <span class="value">${hydraulicRadius} m</span>
              </div>
              <div class="value-item">
                <span class="label">Slope (S):</span>
                <span class="value">${slope}</span>
              </div>
            </div>
            
            <!-- Calculation Steps -->
            <div class="steps-section">
              <h4>Calculation Steps:</h4>
              <div class="step-item">
                <span class="step-num">1.</span>
                <span class="step-text">R^(2/3) = ${hydraulicRadius.toFixed(1)}^(0.667) = ${Math.pow(hydraulicRadius, 2/3).toFixed(3)}</span>
              </div>
              <div class="step-item">
                <span class="step-num">2.</span>
                <span class="step-text">S^(1/2) = ${slope}^(0.5) = ${Math.pow(slope, 0.5).toFixed(4)}</span>
              </div>
              <div class="step-item">
                <span class="step-num">3.</span>
                <span class="step-text">1/n = 1/${manningN} = ${(1/manningN).toFixed(2)}</span>
              </div>
              <div class="step-item">
                <span class="step-num">4.</span>
                <span class="step-text">v = ${(1/manningN).toFixed(2)} × ${Math.pow(hydraulicRadius, 2/3).toFixed(3)} × ${Math.pow(slope, 0.5).toFixed(4)}</span>
              </div>
            </div>
            
            <!-- Result -->
            <div class="result-section">
              <h4>Result:</h4>
              <div class="result-box">
                <div class="result-label">Velocity:</div>
                <div class="result-value">${velocity_manning.toFixed(2)} m/s</div>
              </div>
              <div class="result-box">
                <div class="result-label">Arrival Time:</div>
                <div class="result-value">${formatDuration(time_manning)}</div>
              </div>
            </div>
            
            <!-- Graph -->
            <div class="method-graph">
              <canvas id="manningGraph"></canvas>
            </div>
          </div>
        </div>
        
        <!-- METHOD 2: Rational Method -->
        <div class="method-card">
          <div class="method-header">
            <h3>💧 Rational Method</h3>
          </div>
          
          <div class="method-content">
            <!-- Formula -->
            <div class="formula-section">
              <h4>Formula:</h4>
              <div class="formula-box">
                Q = (C × I × A) / 360
              </div>
            </div>
            
            <!-- Input Values -->
            <div class="values-section">
              <h4>Input Values:</h4>
              <div class="value-item">
                <span class="label">Runoff Coefficient (C):</span>
                <span class="value">${runoffC}</span>
              </div>
              <div class="value-item">
                <span class="label">Rainfall Intensity (I):</span>
                <span class="value">${rainfallIntensity} mm/hr</span>
              </div>
              <div class="value-item">
                <span class="label">Catchment Area (A):</span>
                <span class="value">${catchmentArea} km²</span>
              </div>
            </div>
            
            <!-- Calculation Steps -->
            <div class="steps-section">
              <h4>Calculation Steps:</h4>
              <div class="step-item">
                <span class="step-num">1.</span>
                <span class="step-text">C × I = ${runoffC} × ${rainfallIntensity} = ${(runoffC * rainfallIntensity).toFixed(1)}</span>
              </div>
              <div class="step-item">
                <span class="step-num">2.</span>
                <span class="step-text">C × I × A = ${(runoffC * rainfallIntensity).toFixed(1)} × ${catchmentArea} = ${(runoffC * rainfallIntensity * catchmentArea).toFixed(1)}</span>
              </div>
              <div class="step-item">
                <span class="step-num">3.</span>
                <span class="step-text">Q = ${(runoffC * rainfallIntensity * catchmentArea).toFixed(1)} / 360</span>
              </div>
              <div class="step-item">
                <span class="step-num">4.</span>
                <span class="step-text">Velocity = ${velocity_rational.toFixed(2)} m/s (estimated)</span>
              </div>
            </div>
            
            <!-- Result -->
            <div class="result-section">
              <h4>Result:</h4>
              <div class="result-box">
                <div class="result-label">Peak Discharge:</div>
                <div class="result-value">${(Qp/3600).toFixed(2)} m³/s</div>
              </div>
              <div class="result-box">
                <div class="result-label">Arrival Time:</div>
                <div class="result-value">${formatDuration(time_rational)}</div>
              </div>
            </div>
            
            <!-- Graph -->
            <div class="method-graph">
              <canvas id="rationalGraph"></canvas>
            </div>
          </div>
        </div>
        
        <!-- METHOD 3: Wave Celerity -->
        <div class="method-card">
          <div class="method-header">
            <h3>🌊 Wave Celerity Method</h3>
          </div>
          
          <div class="method-content">
            <!-- Formula -->
            <div class="formula-section">
              <h4>Formula:</h4>
              <div class="formula-box">
                c = (5/3) × v
              </div>
            </div>
            
            <!-- Input Values -->
            <div class="values-section">
              <h4>Input Values:</h4>
              <div class="value-item">
                <span class="label">Base Velocity (v):</span>
                <span class="value">${velocity_manning.toFixed(2)} m/s</span>
              </div>
              <div class="value-item">
                <span class="label">Distance:</span>
                <span class="value">${distance} km</span>
              </div>
              <div class="value-item">
                <span class="label">Multiplier:</span>
                <span class="value">5/3 = 1.667</span>
              </div>
            </div>
            
            <!-- Calculation Steps -->
            <div class="steps-section">
              <h4>Calculation Steps:</h4>
              <div class="step-item">
                <span class="step-num">1.</span>
                <span class="step-text">Base velocity = ${velocity_manning.toFixed(2)} m/s</span>
              </div>
              <div class="step-item">
                <span class="step-num">2.</span>
                <span class="step-text">c = (5/3) × ${velocity_manning.toFixed(2)}</span>
              </div>
              <div class="step-item">
                <span class="step-num">3.</span>
                <span class="step-text">Wave speed c = ${waveCelerity.toFixed(3)} m/s</span>
              </div>
              <div class="step-item">
                <span class="step-num">4.</span>
                <span class="step-text">Time = ${distanceMeters}m / ${waveCelerity.toFixed(2)}m/s</span>
              </div>
            </div>
            
            <!-- Result -->
            <div class="result-section">
              <h4>Result:</h4>
              <div class="result-box">
                <div class="result-label">Wave Speed:</div>
                <div class="result-value">${waveCelerity.toFixed(2)} m/s</div>
              </div>
              <div class="result-box">
                <div class="result-label">Arrival Time:</div>
                <div class="result-value">${formatDuration(time_celerity)}</div>
              </div>
            </div>
            
            <!-- Graph -->
            <div class="method-graph">
              <canvas id="waveGraph"></canvas>
            </div>
          </div>
        </div>
        
        <!-- METHOD 4: Unit Hydrograph -->
        <div class="method-card">
          <div class="method-header">
            <h3>📊 Unit Hydrograph Method</h3>
          </div>
          
          <div class="method-content">
            <!-- Formula -->
            <div class="formula-section">
              <h4>Formula:</h4>
              <div class="formula-box">
                Q(t) = Σ(P × U(t-τ))
              </div>
            </div>
            
            <!-- Input Values -->
            <div class="values-section">
              <h4>Input Values:</h4>
              <div class="value-item">
                <span class="label">Basin Area:</span>
                <span class="value">${catchmentArea} km²</span>
              </div>
              <div class="value-item">
                <span class="label">Unit Rainfall:</span>
                <span class="value">1 cm</span>
              </div>
              <div class="value-item">
                <span class="label">Duration:</span>
                <span class="value">1 hour</span>
              </div>
            </div>
            
            <!-- Calculation Steps -->
            <div class="steps-section">
              <h4>Calculation Steps:</h4>
              <div class="step-item">
                <span class="step-num">1.</span>
                <span class="step-text">Basin response calculated</span>
              </div>
              <div class="step-item">
                <span class="step-num">2.</span>
                <span class="step-text">Unit hydrograph applied</span>
              </div>
              <div class="step-item">
                <span class="step-num">3.</span>
                <span class="step-text">Convolution performed</span>
              </div>
              <div class="step-item">
                <span class="step-num">4.</span>
                <span class="step-text">Peak time = ${time_hydrograph.toFixed(2)} hours</span>
              </div>
            </div>
            
            <!-- Result -->
            <div class="result-section">
              <h4>Result:</h4>
              <div class="result-box">
                <div class="result-label">Peak Discharge:</div>
                <div class="result-value">${peakDischarge.toFixed(2)} m³/s</div>
              </div>
              <div class="result-box">
                <div class="result-label">Peak Time:</div>
                <div class="result-value">${formatDuration(time_hydrograph)}</div>
              </div>
            </div>
            
            <!-- Graph -->
            <div class="method-graph">
              <canvas id="hydroGraph"></canvas>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `;
  
  // Insert methods comparison at the top of results
  const resultsEl = document.getElementById('calculatorResults');
  if (resultsEl) {
    // Clear old content first
    resultsEl.innerHTML = methodsHTML;
    resultsEl.style.display = 'block';
    
    // Draw individual graphs for each method
    setTimeout(() => {
      drawMethodGraph('manningGraph', time_manning, velocity_manning, distance);
      drawMethodGraph('rationalGraph', time_rational, velocity_rational, distance);
      drawMethodGraph('waveGraph', time_celerity, waveCelerity, distance);
      drawMethodGraph('hydroGraph', time_hydrograph, velocity_manning * 0.9, distance);
    }, 100);
  }
}

function drawMethodGraph(canvasId, arrivalTime, velocity, distance) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const existing = Chart.getChart(ctx);
  if (existing) existing.destroy();
  
  const labels = [];
  const data = [];
  const steps = 8;
  
  for (let i = 0; i <= steps; i++) {
    const t = (arrivalTime * i) / steps;
    labels.push(t.toFixed(1) + 'h');
    data.push((velocity * t * 3.6).toFixed(1)); // convert m/s to km/h
  }
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Distance (km)',
        data: data,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Distance (km)', font: { size: 10 } }
        },
        x: {
          title: { display: true, text: 'Time', font: { size: 10 } }
        }
      }
    }
  });
}

function continueWithMainCalculation(distance, manningN, hydraulicRadius, slope, rainfallIntensity, catchmentArea, runoffC, method) {

  // Skip old calculation - already done in showAllMethodsComparison
  return;

  // OLD CODE - REMOVED - Now using column layout
  return;
  
  const stepsPanel = document.getElementById('calculatorSteps_OLD_DISABLED');
  stepsPanel.innerHTML = `
    <div class="step-card glass-card" data-step="1">
      <div class="step-number pulse-animation">1</div>
      <div class="step-content" style="flex:1;">
        <h4>📐 Manning's Equation</h4>
        <div class="formula-box">
          <div class="formula">v = (1/n) × R^(2/3) × S^(1/2)</div>
        </div>
        <div class="calculation-breakdown">
          <div class="calc-row">
            <span class="label">Roughness (n):</span>
            <span class="value">${manningN}</span>
          </div>
          <div class="calc-row">
            <span class="label">Hydraulic Radius (R):</span>
            <span class="value">${hydraulicRadius} m</span>
          </div>
          <div class="calc-row">
            <span class="label">Slope (S):</span>
            <span class="value">${slope}</span>
          </div>
          <div class="calc-row highlight">
            <span class="label">Velocity (v):</span>
            <span class="value result">${velocity.toFixed(2)} m/s</span>
          </div>
          <div class="calc-row highlight">
            <span class="label">Travel Time:</span>
            <span class="value result">${(arrivalMannings < 0.01 ? '--' : arrivalMannings.toFixed(2))} hours</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="step-arrow">⬇️</div>
    
    <div class="step-card glass-card" data-step="2">
      <div class="step-number pulse-animation">2</div>
      <div class="step-content" style="flex:1;">
        <h4>💧 Flow Velocity Calculation</h4>
        <div class="visual-flow">
          <div class="flow-animation">
            <div class="water-particle"></div>
            <div class="water-particle"></div>
            <div class="water-particle"></div>
          </div>
          <div class="flow-speed-meter">
            <div class="meter-bar" id="velocityBar"></div>
            <span class="meter-value" id="velocityValue">${velocity.toFixed(2)} m/s</span>
          </div>
        </div>
        <div class="calculation-breakdown">
          <div class="calc-row">
            <span class="label">Distance:</span>
            <span class="value">${distance} km (${distanceMeters} m)</span>
          </div>
          <div class="calc-row highlight">
            <span class="label">Estimated Speed:</span>
            <span class="value result">${velocity.toFixed(2)} m/s</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="step-arrow">⬇️</div>
    
    <div class="step-card glass-card" data-step="3">
      <div class="step-number pulse-animation">3</div>
      <div class="step-content" style="flex:1;">
        <h4>⏱️ Time to Arrival</h4>
        <div class="time-calculation">
          <div class="formula-box">
            <div class="formula">Time = Distance / Velocity</div>
            <div class="formula">Time = ${distanceMeters} m / ${velocity.toFixed(2)} m/s</div>
          </div>
          <div class="time-result gradient-success">
            <div class="time-value">${formatDuration(arrivalMannings)}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // --- Results Summary Panel (Enhanced) ---
  const summaryPanel = document.getElementById('arrivalSummary');
  function formatDuration(hours) {
    if (!hours || hours < 0.01) return '--';
    const h = Math.floor(hours), m = Math.round((hours-h)*60);
    return `${h}h ${m}m`;
  }
  let risk = 'Low', riskColor = 'var(--color-success)';
  if (avgArrival < 2) { risk = 'High'; riskColor = 'var(--color-error)'; }
  else if (avgArrival < 4) { risk = 'Medium'; riskColor = 'var(--color-warning)'; }
  else if (avgArrival < 8) { risk = 'Elevated'; riskColor = 'var(--color-primary)'; }
  
  const hours = Math.floor(avgArrival);
  const minutes = Math.round((avgArrival - hours) * 60);
  
  summaryPanel.innerHTML = `
    <div class="arrival-time-display gradient-success" style="margin-top:24px;">
      <div class="time-label" style="font-size:20px;margin-bottom:12px;">⏰ Flood Will Arrive In:</div>
      <div class="time-digits">
        <div class="digit-group" style="display:flex;flex-direction:column;align-items:center;">
          <span class="digit">${hours}</span>
          <span class="unit" style="font-size:18px;margin-top:6px;opacity:0.9;">hours</span>
        </div>
        <span class="separator" style="font-size:52px;font-weight:bold;margin:0 12px;">:</span>
        <div class="digit-group" style="display:flex;flex-direction:column;align-items:center;">
          <span class="digit">${minutes}</span>
          <span class="unit" style="font-size:18px;margin-top:6px;opacity:0.9;">minutes</span>
        </div>
      </div>
      <div style="margin-top:20px;font-size:18px;opacity:0.95;">
        Peak discharge: <strong>${peakDischarge.toLocaleString(undefined,{maximumFractionDigits:2})} m³/s</strong>
      </div>
      <div style="margin-top:12px;">
        <span class="status-badge" style="background:rgba(255,255,255,0.25);color:white;font-weight:600;padding:8px 20px;border-radius:20px;font-size:16px;">Risk Level: ${risk}</span>
      </div>
      <div style="margin-top:12px;font-size:14px;opacity:0.85;">Confidence: ±30 min | ${new Date().toLocaleString()}</div>
    </div>
  `;
  
  // Show warning if urgent
  if (avgArrival < 2) {
    const warningCard = document.getElementById('warningCard');
    if (warningCard) {
      warningCard.style.display = 'flex';
      warningCard.querySelector('p').textContent = `Flood expected in ${formatDuration(avgArrival)}. Evacuate immediately!`;
    }
  }

  // --- Hydrograph Visualization ---
  renderHydrographChart(avgArrival, peakDischarge);

  // --- Comparison Chart & Results ---
  const methodComparisonPanel = document.getElementById('methodComparison');
  methodComparisonPanel.innerHTML = `
    <table>
      <tr><th>Method</th><th>Formula</th><th>Arrival Time</th><th>Peak Discharge</th></tr>
      <tr style="background: var(--color-bg-7);"><td>Manning's</td><td>V = (1/n) × Rh^(2/3) × S^(1/2)</td><td>${formatDuration(arrivalMannings)}</td><td>--</td></tr>
      <tr style="background: var(--color-bg-4);"><td>Rational</td><td>Qp = C × I × A</td><td>${formatDuration(arrivalRational)}</td><td>${Qp.toLocaleString(undefined,{maximumFractionDigits:2})} m³/hr</td></tr>
      <tr style="background: var(--color-bg-2);"><td>Wave Celerity</td><td>c = (5/3) × V</td><td>${formatDuration(arrivalCelerity)}</td><td>--</td></tr>
      <tr style="background: var(--color-bg-6);"><td>Unit Hydrograph</td><td>Q(t) = ∫ Pe(τ) × UH(t-τ) dτ</td><td>${formatDuration(unitArrival)}</td><td>${peakDischarge.toLocaleString(undefined,{maximumFractionDigits:2})} m³/s</td></tr>
      <tr><th colspan="2">Average Arrival</th><td style="font-weight:bold">${formatDuration(avgArrival)} ± 30 min</td><td style="font-weight:bold">${peakDischarge.toLocaleString(undefined,{maximumFractionDigits:2})} m³/s</td></tr>
    </table>
  `;
  renderComparisonChart([arrivalMannings, arrivalRational, arrivalCelerity, unitArrival], [Qp/3600, peakDischarge]);

  // --- Safety Recommendations ---
  document.getElementById('safetyRecommendations').innerHTML = `
    <ul style="font-size:1rem;padding-left: 20px;line-height: 1.6;">
      <li>Stay informed about alerts & evacuation routes</li>
      <li>Prepare emergency supplies & move to higher ground</li>
      <li>Do NOT attempt to cross flooded areas</li>
      <li>Monitor updates for changing weather and flood status</li>
      <li>Follow local authority guidance during evacuation</li>
    </ul>
    <a class="btn btn-outline" href="#" download>Download Safety Checklist</a>
  `;

  showNotification('✓ Flood arrival time calculated for ALL 4 methods!', 'success');
}

// Enhanced - Add helper at top
function formatDuration(hours) {
  if (!hours || hours < 0.01) return '--';
  const h = Math.floor(hours), m = Math.round((hours-h)*60);
  return `${h}h ${m}m`;
}

function renderHydrographChart(arrivalHr, peakQ) {
  const ctx = document.getElementById('hydrographChart');
  if (!ctx) return;
  const existing = Chart.getChart(ctx);
  if (existing) { existing.destroy(); }
  // Simulate hydrograph - rising limb (blue), peak (red), recession (orange)
  let labels = [], data = [], colors = [];
  for(let i=0; i<=12; i++) {
    labels.push(`${i}h`);
    if (i < arrivalHr) {
      data.push(Math.max(0, peakQ * (i/arrivalHr)*0.8));
      colors.push('#1FB8CD');
    } else if (i === Math.round(arrivalHr)) {
      data.push(peakQ);
      colors.push('#DB4545');
    } else {
      data.push(Math.max(peakQ*0.9 - (i-arrivalHr)*peakQ/12, 0));
      colors.push('#FFC185');
    }
  }
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Discharge (m³/s)',
        data: data,
        pointBackgroundColor: colors,
        borderColor: '#944454',
        backgroundColor: 'rgba(33,128,141,0.08)',
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true },
        title: {
          display: true,
          text: 'Flood Hydrograph (Predicted Water Level)'
        }
      },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: 'Discharge (m³/s)' } },
        x: { title: { display: true, text: 'Time Since Now (hours)' } }
      }
    }
  });
}
function renderComparisonChart(arrivals, peaks) {
  const ctx = document.getElementById('comparisonChart');
  if (!ctx) return;
  const existing = Chart.getChart(ctx);
  if (existing) { existing.destroy(); }
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Manning\'s', 'Rational', 'Wave Celerity', 'Unit Hydrograph'],
      datasets: [
        {
          label: 'Arrival Time (hr)',
          data: arrivals.map(e => e.toFixed(2)),
          backgroundColor: ['#1FB8CD', '#FFC185', '#DB4545', '#D2BA4C']
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Flood Arrival Time by Method' }
      },
      scales: { y: { beginAtZero: true } }
    }
  })
}
function downloadFloodResultPDF() {
  showNotification('PDF download is simulated in demo!', 'success');
}
function shareFloodCalculation() {
  showNotification('Share feature is simulated in demo!', 'success');
}


function createArrivalChart(hours) {
  const ctx = document.getElementById('arrivalChart');
  if (!ctx) return;
  
  // Clear existing chart
  const existingChart = Chart.getChart(ctx);
  if (existingChart) {
    existingChart.destroy();
  }
  
  const now = new Date();
  const arrival = new Date(now.getTime() + hours * 60 * 60 * 1000);
  
  const timePoints = [];
  const riskLevels = [];
  
  for (let i = 0; i <= hours; i += hours/10) {
    const time = new Date(now.getTime() + i * 60 * 60 * 1000);
    timePoints.push(time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));
    // Risk increases as we approach arrival time
    const risk = (i / hours) * 100;
    riskLevels.push(risk);
  }
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: timePoints,
      datasets: [{
        label: 'Flood Risk Level (%)',
        data: riskLevels,
        borderColor: '#C0152F',
        backgroundColor: 'rgba(192, 21, 47, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: '#C0152F'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: `Flood Arrival Timeline - Expected at ${arrival.toLocaleTimeString('en-IN')}`
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Risk Level (%)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time'
          }
        }
      }
    }
  });
}

// Profile Management
function loadProfile() {
  if (appState.userProfile) {
    document.getElementById('profileName').value = appState.userProfile.name || '';
    document.getElementById('profileEmail').value = appState.userProfile.email || '';
    document.getElementById('profilePhone').value = appState.userProfile.phone || '';
    document.getElementById('profileAddress').value = appState.userProfile.address || '';
    document.getElementById('locationType').value = appState.userProfile.locationType || 'urban';
  }
  
  updateProfileLocationDisplay();
}

function handleProfileSave(e) {
  e.preventDefault();
  
  appState.userProfile = {
    ...appState.userProfile,
    name: document.getElementById('profileName').value,
    email: document.getElementById('profileEmail').value,
    phone: document.getElementById('profilePhone').value,
    address: document.getElementById('profileAddress').value,
    locationType: document.getElementById('locationType').value
  };
  
  saveOfflineData();
  showNotification('Profile updated successfully!', 'success');
}

// Language Handling - FIXED AND WORKING
function handleLanguageChange(e) {
  const newLang = e.target.value;
  console.log('Language changed to:', newLang);
  appState.currentLanguage = newLang;
  applyTranslations();
  showToast(`Language changed to ${newLang.toUpperCase()}`, 'success');
}

function applyTranslations() {
  const lang = appState.currentLanguage;
  const t = translations[lang] || translations.en;
  
  console.log('Applying translations for language:', lang);
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      // Check if it's an input/textarea (update placeholder)
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        // Update text content
        el.textContent = t[key];
      }
    } else {
      console.warn('Translation key missing:', key, 'for language:', lang);
    }
  });
  
  // Update document title
  document.title = t.landingtitle || t.app_name || 'FloodSafe India';
  
  console.log('Translations applied successfully');
}

// Notifications
function showNotification(message, type = 'info') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type} active`;
  
  setTimeout(() => {
    notification.classList.remove('active');
  }, 5000);
}

// Simple Calculator Mode Switching
function switchCalculatorMode(mode) {
  const simpleBtn = document.getElementById('simpleModeBtn');
  const advancedBtn = document.getElementById('advancedModeBtn');
  const simpleCalc = document.getElementById('simpleCalculator');
  const advancedCalc = document.getElementById('advancedCalculator');
  
  if (mode === 'simple') {
    simpleBtn.className = 'btn btn-primary';
    advancedBtn.className = 'btn btn-secondary';
    simpleCalc.style.display = 'block';
    advancedCalc.style.display = 'none';
  } else {
    simpleBtn.className = 'btn btn-secondary';
    advancedBtn.className = 'btn btn-primary';
    simpleCalc.style.display = 'none';
    advancedCalc.style.display = 'block';
  }
}



// Navigate back to home/landing page
function goBackToHome() {
  // Clear calculator if any data
  clearCalculatorData();
  
  // Update state
  appState.currentPage = 'home';
  
  // Show landing page
  navigateToPage('home');
  
  // Scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Show toast message
  const lang = appState.currentLanguage || 'en';
  const messages = {
    en: 'Returned to home',
    hi: 'होम पर वापस आ गए',
    ta: 'முகப்புக்கு திரும்பினோம்',
    te: 'హోమ్‌కు తిరిగి వచ్చారు',
    mr: 'मुख्यपृष्ठावर परतलो',
    pa: 'ਘਰ ਵਾਪਸ ਆ ਗਏ',
    kn: 'ಮನೆಗೆ ಹಿಂತಿರುಗಿದೆ',
    bn: 'হোমে ফিরে এসেছি'
  };
  
  showToastNotification(messages[lang] || messages.en);
}

// Clear calculator data
function clearCalculatorData() {
  // Reset simple calculator
  const simpleInputs = document.querySelectorAll('.simple-calculator input');
  simpleInputs.forEach(input => input.value = '');
  
  // Reset advanced calculator
  const advancedInputs = document.querySelectorAll('.advanced-calculator input');
  advancedInputs.forEach(input => input.value = '');
  
  // Hide results
  const resultsElements = document.querySelectorAll('.calculator-results');
  resultsElements.forEach(el => el.classList.add('hidden'));
  
  const simpleResult = document.getElementById('simpleResult');
  if (simpleResult) simpleResult.style.display = 'none';
  
  const advancedResult = document.getElementById('calculatorResults');
  if (advancedResult) advancedResult.style.display = 'none';
}

// Show toast notification
function showToastNotification(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// Enhanced Calculator Functions
function calculateAllMethodsEnhanced(distance, manningN, hydraulicRadius, slope, rainfallIntensity, catchmentArea, runoffC) {
  const results = {
    manning: {},
    rational: {},
    kinetic: {},
    combined: {},
    average: {}
  };
  
  const distanceMeters = distance * 1000;
  
  // METHOD 1: Manning's Equation
  results.manning.velocity = (1 / manningN) * Math.pow(hydraulicRadius, 2/3) * Math.pow(slope, 0.5);
  results.manning.velocityKmh = results.manning.velocity * 3.6;
  results.manning.arrivalTime = distance / results.manning.velocityKmh;
  
  // METHOD 2: Rational Method (Energy-based)
  const rainfallIntensity_mhr = rainfallIntensity / 1000;
  const area_m2 = catchmentArea * 1e6;
  const Qp = runoffC * rainfallIntensity_mhr * area_m2;
  results.rational.velocity = Math.sqrt(2 * 9.81 * Math.abs(slope * distanceMeters) / 1000) * 0.7;
  results.rational.velocityKmh = results.rational.velocity * 3.6;
  results.rational.arrivalTime = distance / results.rational.velocityKmh;
  results.rational.discharge = Qp;
  
  // METHOD 3: Kinetic Wave Approximation
  const waveVelocity = 1.67 * results.manning.velocity;
  results.kinetic.velocity = waveVelocity;
  results.kinetic.velocityKmh = waveVelocity * 3.6;
  results.kinetic.arrivalTime = distance / results.kinetic.velocityKmh;
  
  // METHOD 4: Combined Analysis (Weighted Average)
  const weights = { manning: 0.4, rational: 0.3, kinetic: 0.3 };
  results.combined.velocity = 
    results.manning.velocity * weights.manning +
    results.rational.velocity * weights.rational +
    results.kinetic.velocity * weights.kinetic;
  results.combined.velocityKmh = results.combined.velocity * 3.6;
  results.combined.arrivalTime = distance / results.combined.velocityKmh;
  
  // AVERAGE of all methods
  const allTimes = [
    results.manning.arrivalTime,
    results.rational.arrivalTime,
    results.kinetic.arrivalTime,
    results.combined.arrivalTime
  ];
  results.average.arrivalTime = allTimes.reduce((a, b) => a + b) / allTimes.length;
  results.average.velocity = (results.manning.velocity + results.rational.velocity + 
                              results.kinetic.velocity + results.combined.velocity) / 4;
  results.average.velocityKmh = results.average.velocity * 3.6;
  
  return results;
}

function renderMethodLineGraph(canvasId, distance, methodResults) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error('Canvas not found:', canvasId);
    return;
  }
  
  const ctx = canvas.getContext('2d');
  const existing = Chart.getChart(ctx);
  if (existing) existing.destroy();
  
  // Generate distance-time data
  const timePoints = [];
  const distancePoints = [];
  const steps = 20;
  
  for (let i = 0; i <= steps; i++) {
    const d = (distance / steps) * i;
    const t = d / methodResults.velocityKmh;
    timePoints.push(t.toFixed(2));
    distancePoints.push(d.toFixed(1));
  }
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: timePoints,
      datasets: [{
        label: 'Distance (km)',
        data: distancePoints,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeInOutQuad'
      },
      scales: {
        x: {
          title: { display: true, text: 'Time (hours)', font: { size: 11, weight: 'bold' } },
          grid: { display: true, color: 'rgba(0,0,0,0.05)' }
        },
        y: {
          title: { display: true, text: 'Distance (km)', font: { size: 11, weight: 'bold' } },
          beginAtZero: true,
          grid: { display: true, color: 'rgba(0,0,0,0.05)' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          padding: 12
        }
      }
    }
  });
}

function displayEnhancedCalculatorResults(results, distance) {
  const resultsContainer = document.getElementById('calculatorResults');
  if (!resultsContainer) return;
  
  const hours = Math.floor(results.average.arrivalTime);
  const minutes = Math.round((results.average.arrivalTime - hours) * 60);
  const userLocation = appState.userLocation ? findNearestCity(appState.userLocation.lat, appState.userLocation.lng).name : 'Delhi';
  
  resultsContainer.innerHTML = `
    <!-- ===== SECTION 1: DETAILED CALCULATION COLUMNS (4 COLUMNS) - Keep as is ===== -->
    <div class="methods-grid-detailed">
      
      <!-- COLUMN 1: Manning's Equation -->
      <div class="method-column manning-column">
        <div class="method-header">
          <h3>🔧 Manning's Equation</h3>
          <p>Hydraulic Analysis Method</p>
        </div>
        
        <div class="calculation-steps">
          <h4>Calculation Process:</h4>
          
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="formula">V = (1/n) × R^(2/3) × S^(1/2)</div>
              <div class="explanation">Manning's velocity formula</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="calculation">Velocity = ${results.manning.velocity.toFixed(3)} m/s</div>
              <div class="explanation">Calculated flow velocity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="calculation">Speed = ${results.manning.velocityKmh.toFixed(2)} km/h</div>
              <div class="explanation">Converted to km/h</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <div class="calculation">Distance = ${distance} km</div>
              <div class="explanation">Distance to travel</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <div class="calculation">Time = Distance / Speed</div>
              <div class="explanation">Basic time formula</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <div class="calculation">T = ${distance} / ${results.manning.velocityKmh.toFixed(2)} = ${results.manning.arrivalTime.toFixed(2)} hours</div>
              <div class="explanation">Final arrival time</div>
            </div>
          </div>
        </div>
        
        <div class="method-result-card">
          <div class="result-icon">⏱️</div>
          <div class="result-content">
            <div class="result-label">Arrival Time</div>
            <div class="result-value">${formatMethodTime(results.manning.arrivalTime)}</div>
          </div>
        </div>
        
        <div class="method-graph-container">
          <h4>Time-Distance Progression</h4>
          <canvas id="manningLineChart"></canvas>
        </div>
      </div>
      
      <!-- COLUMN 2: Rational Method -->
      <div class="method-column rational-column">
        <div class="method-header">
          <h3>⚡ Rational Method</h3>
          <p>Energy-Based Analysis</p>
        </div>
        
        <div class="calculation-steps">
          <h4>Calculation Process:</h4>
          
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="formula">V = √(2gh) × f</div>
              <div class="explanation">Energy-based velocity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="calculation">g = 9.81 m/s²</div>
              <div class="explanation">Gravitational acceleration</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="calculation">Friction factor = 0.7</div>
              <div class="explanation">Energy loss coefficient</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <div class="calculation">V = ${results.rational.velocity.toFixed(3)} m/s</div>
              <div class="explanation">Calculated velocity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <div class="calculation">Speed = ${results.rational.velocityKmh.toFixed(2)} km/h</div>
              <div class="explanation">Converted speed</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <div class="calculation">T = ${distance} / ${results.rational.velocityKmh.toFixed(2)} = ${results.rational.arrivalTime.toFixed(2)} hours</div>
              <div class="explanation">Flood arrival time</div>
            </div>
          </div>
        </div>
        
        <div class="method-result-card">
          <div class="result-icon">⏱️</div>
          <div class="result-content">
            <div class="result-label">Arrival Time</div>
            <div class="result-value">${formatMethodTime(results.rational.arrivalTime)}</div>
          </div>
        </div>
        
        <div class="method-graph-container">
          <h4>Time-Distance Progression</h4>
          <canvas id="rationalLineChart"></canvas>
        </div>
      </div>
      
      <!-- COLUMN 3: Kinetic Wave -->
      <div class="method-column kinetic-column">
        <div class="method-header">
          <h3>💫 Kinetic Wave</h3>
          <p>Wave Propagation Analysis</p>
        </div>
        
        <div class="calculation-steps">
          <h4>Calculation Process:</h4>
          
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="formula">V_wave = 1.67 × V_manning</div>
              <div class="explanation">Kinematic wave celerity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="calculation">V_base = ${results.manning.velocity.toFixed(3)} m/s</div>
              <div class="explanation">Base Manning velocity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="calculation">Wave factor = 1.67</div>
              <div class="explanation">Standard multiplier</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <div class="calculation">V_wave = ${results.kinetic.velocity.toFixed(3)} m/s</div>
              <div class="explanation">Wave velocity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <div class="calculation">Speed = ${results.kinetic.velocityKmh.toFixed(2)} km/h</div>
              <div class="explanation">Converted speed</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <div class="calculation">T = ${distance} / ${results.kinetic.velocityKmh.toFixed(2)} = ${results.kinetic.arrivalTime.toFixed(2)} hours</div>
              <div class="explanation">Flood arrival time</div>
            </div>
          </div>
        </div>
        
        <div class="method-result-card">
          <div class="result-icon">⏱️</div>
          <div class="result-content">
            <div class="result-label">Arrival Time</div>
            <div class="result-value">${formatMethodTime(results.kinetic.arrivalTime)}</div>
          </div>
        </div>
        
        <div class="method-graph-container">
          <h4>Time-Distance Progression</h4>
          <canvas id="kineticLineChart"></canvas>
        </div>
      </div>
      
      <!-- COLUMN 4: Combined Analysis -->
      <div class="method-column combined-column">
        <div class="method-header">
          <h3>🔬 Combined Analysis</h3>
          <p>Weighted Average Method</p>
        </div>
        
        <div class="calculation-steps">
          <h4>Calculation Process:</h4>
          
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="formula">V = Σ(w_i × V_i)</div>
              <div class="explanation">Weighted velocity formula</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="calculation">w_manning = 0.4 (40%)</div>
              <div class="explanation">Manning weight</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="calculation">w_rational = 0.3 (30%)</div>
              <div class="explanation">Rational weight</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <div class="calculation">w_kinetic = 0.3 (30%)</div>
              <div class="explanation">Kinetic weight</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">5</div>
            <div class="step-content">
              <div class="calculation">V_combined = ${results.combined.velocity.toFixed(3)} m/s</div>
              <div class="explanation">Weighted average velocity</div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">6</div>
            <div class="step-content">
              <div class="calculation">T = ${distance} / ${results.combined.velocityKmh.toFixed(2)} = ${results.combined.arrivalTime.toFixed(2)} hours</div>
              <div class="explanation">Flood arrival time</div>
            </div>
          </div>
        </div>
        
        <div class="method-result-card">
          <div class="result-icon">⏱️</div>
          <div class="result-content">
            <div class="result-label">Arrival Time</div>
            <div class="result-value">${formatMethodTime(results.combined.arrivalTime)}</div>
          </div>
        </div>
        
        <div class="method-graph-container">
          <h4>Time-Distance Progression</h4>
          <canvas id="combinedLineChart"></canvas>
        </div>
      </div>
      
    </div>
    <!-- END DETAILED CALCULATION COLUMNS -->
    
    <!-- ===== SECTION 2: HORIZONTAL DASHBOARD (2×2 GRID) ===== -->
    <div class="horizontal-dashboard">
      <div class="dashboard-header">
        <h2 class="dashboard-title">📊 Flood Analysis Dashboard</h2>
        <p class="dashboard-subtitle">Comprehensive analysis and safety recommendations</p>
      </div>
      
      <!-- 2×2 GRID LAYOUT -->
      <div class="dashboard-grid">
        
        <!-- TOP LEFT: Flood Arrival Summary -->
        <div class="dashboard-card summary-card">
          <div class="card-header">
            <div class="header-icon">📊</div>
            <h3 class="card-title">Flood Arrival Summary</h3>
          </div>
          <div class="card-content">
      
            <div class="summary-metrics">
    <!-- SECTION 1: FLOOD ARRIVAL SUMMARY -->
    <div class="result-section summary-card">
      <div class="section-header">
        <div class="header-icon">📊</div>
        <h3 class="section-title">Flood Arrival Summary</h3>
      </div>
      
      <div class="summary-grid">
              <div class="metric-item primary">
                <div class="metric-icon">⏱️</div>
                <div class="metric-content">
                  <div class="metric-label">Arrival Time</div>
                  <div class="metric-value">${hours}h ${minutes}m</div>
                </div>
              </div>
        
              <div class="metric-item">
                <div class="metric-icon">💨</div>
                <div class="metric-content">
                  <div class="metric-label">Peak Velocity</div>
                  <div class="metric-value">${results.average.velocity.toFixed(2)} m/s</div>
                </div>
              </div>
        
              <div class="metric-item">
                <div class="metric-icon">📏</div>
                <div class="metric-content">
                  <div class="metric-label">Distance</div>
                  <div class="metric-value">${distance} km</div>
                </div>
              </div>
        
              <div class="metric-item">
                <div class="metric-icon">⚠️</div>
                <div class="metric-content">
                  <div class="metric-label">Risk Level</div>
                  <div class="metric-value risk-badge ${getRiskClass(results.average.arrivalTime)}">${getRiskLevel(results.average.arrivalTime)}</div>
                </div>
              </div>
            </div>
      
          </div>
        </div>

        <!-- TOP RIGHT: Flood Hydrograph -->
        <div class="dashboard-card hydrograph-card">
          <div class="card-header">
            <div class="header-icon">📈</div>
            <h3 class="card-title">Flood Hydrograph Visualization</h3>
          </div>
          <div class="card-content">
      
            <div class="chart-container-dashboard">
              <canvas id="hydrographChart"></canvas>
            </div>
      
            <div class="chart-legend-compact">
              <div class="legend-item"><span class="legend-dot rising"></span>Rising</div>
              <div class="legend-item"><span class="legend-dot peak"></span>Peak</div>
              <div class="legend-item"><span class="legend-dot recession"></span>Recession</div>
            </div>
          </div>
        </div>

        <!-- BOTTOM LEFT: Methods Comparison -->
        <div class="dashboard-card comparison-card">
          <div class="card-header">
            <div class="header-icon">📊</div>
            <h3 class="card-title">Methods Comparison</h3>
          </div>
          <div class="card-content">
      
            <div class="average-display">
              <span class="average-label">⭐ Average:</span>
              <span class="average-time" id="dashboardAverage">${hours}h ${minutes}m</span>
            </div>
        

      
            <div class="chart-container-dashboard">
              <canvas id="methodsComparisonChart"></canvas>
            </div>
          </div>
        </div>

        <!-- BOTTOM RIGHT: Safety Recommendations -->
        <div class="dashboard-card safety-card">
          <div class="card-header">
            <div class="header-icon blinking">🚨</div>
            <h3 class="card-title">Safety Recommendations</h3>
            <span class="location-badge" id="safetyLocation">${userLocation}</span>
          </div>
          <div class="card-content safety-content">
      
            <div id="safetyRecommendationsCompact"></div>
      
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- CRITICAL ALERT BAR (shown if arrival < 2 hours) -->
    ${results.average.arrivalTime < 2 ? `
    <div id="criticalAlertBar" style="margin-top: 24px;">
      <div style="display: flex; align-items: center; gap: 16px; padding: 20px; background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%); color: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);">
        <div style="font-size: 48px; animation: blink 1s infinite;">🚨</div>
        <div style="flex: 1;">
          <h3 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">CRITICAL FLOOD ALERT</h3>
          <p style="margin: 0; font-size: 16px;">Flood estimated to arrive in less than 2 hours! EVACUATE IMMEDIATELY!</p>
        </div>
      </div>
    </div>
    ` : ''}
  `;
  
  // Render charts AND line graphs for each method
  setTimeout(() => {
    console.log('Starting chart rendering...');
    
    // Render individual method line graphs
    renderMethodLineGraph('manningLineChart', distance, results.manning);
    renderMethodLineGraph('rationalLineChart', distance, results.rational);
    renderMethodLineGraph('kineticLineChart', distance, results.kinetic);
    renderMethodLineGraph('combinedLineChart', distance, results.combined);
    
    console.log('Method line graphs rendered');
    
    // Render summary charts
    renderEnhancedHydrographChart(results.average.arrivalTime, results.average.velocity);
    console.log('Hydrograph rendered');
    
    renderMethodsComparisonChart(results);
    console.log('Comparison chart rendered');
    
    generateSafetyRecommendationsCompact(results.average.arrivalTime, userLocation);
    console.log('Safety recommendations generated');
  }, 100);
}

function getRiskLevel(hours) {
  if (hours < 1) return 'CRITICAL';
  if (hours < 3) return 'HIGH';
  if (hours < 6) return 'MODERATE';
  return 'LOW';
}

function getRiskClass(hours) {
  if (hours < 1) return 'critical';
  if (hours < 3) return 'high';
  if (hours < 6) return 'moderate';
  return 'low';
}

function formatMethodTime(hours) {
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return `${h}h ${m}m`;
}

function renderEnhancedHydrographChart(arrivalTime, peakVelocity) {
  const ctx = document.getElementById('hydrographChart');
  if (!ctx) {
    console.error('Hydrograph canvas not found');
    return;
  }
  
  const existingChart = Chart.getChart(ctx);
  if (existingChart) existingChart.destroy();
  
  // Use parent height for responsive chart
  ctx.style.height = '250px';
  
  const timePoints = [];
  const velocityPoints = [];
  const totalTime = arrivalTime * 2.5;
  const steps = 100;
  
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * totalTime;
    timePoints.push(t.toFixed(2));
    
    if (t <= arrivalTime) {
      const normalized = t / arrivalTime;
      const velocity = peakVelocity * Math.pow(normalized, 2) * Math.exp(2 * (1 - normalized));
      velocityPoints.push(velocity);
    } else {
      const decay = Math.exp(-(t - arrivalTime) / (arrivalTime * 0.6));
      velocityPoints.push(peakVelocity * decay);
    }
  }
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: timePoints,
      datasets: [{
        label: 'Velocity (m/s)',
        data: velocityPoints,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: 'rgb(239, 68, 68)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeInOutQuad'
      },
      plugins: {
        legend: { display: false },
        tooltip: { 
          enabled: true,
          displayColors: false
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Time (hrs)', font: { size: 10 } },
          grid: { display: true, color: 'rgba(0, 0, 0, 0.05)' },
          ticks: { font: { size: 9 } }
        },
        y: {
          title: { display: true, text: 'Velocity (m/s)', font: { size: 10 } },
          beginAtZero: true,
          grid: { display: true, color: 'rgba(0, 0, 0, 0.05)' },
          ticks: { font: { size: 9 } }
        }
      }
    }
  });
}

function renderMethodsComparisonChart(results) {
  const ctx = document.getElementById('methodsComparisonChart');
  if (!ctx) {
    console.error('Methods comparison chart canvas not found');
    return;
  }
  
  const existingChart = Chart.getChart(ctx);
  if (existingChart) existingChart.destroy();
  
  // Use parent height for responsive chart
  ctx.style.height = '250px';
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Manning's", 'Rational', 'Kinetic', 'Combined'],
      datasets: [{
        label: 'Time (hrs)',
        data: [
          results.manning.arrivalTime,
          results.rational.arrivalTime,
          results.kinetic.arrivalTime,
          results.combined.arrivalTime
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(139, 92, 246, 0.7)'
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
        easing: 'easeOutBounce',
        delay: (context) => context.dataIndex * 150
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          displayColors: false,
          callbacks: {
            label: function(context) {
              const hours = Math.floor(context.parsed.y);
              const minutes = Math.round((context.parsed.y - hours) * 60);
              return `${hours}h ${minutes}m`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: 'Time (hrs)', font: { size: 10 } },
          ticks: { font: { size: 9 } }
        },
        x: {
          ticks: { font: { size: 9 } }
        }
      }
    }
  });
}

function determineLocationType(location) {
  const urbanCities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'];
  const coastalCities = ['Mumbai', 'Chennai', 'Kochi', 'Visakhapatnam', 'Mangalore', 'Goa', 'Puducherry', 'Daman'];
  
  if (coastalCities.some(city => location.includes(city))) return 'coastal';
  if (urbanCities.some(city => location.includes(city))) return 'urban';
  return 'rural';
}

function generateSafetyRecommendationsCompact(arrivalTime, userLocation) {
  const container = document.getElementById('safetyRecommendationsCompact');
  if (!container) return;
  
  document.getElementById('safetyLocation').textContent = userLocation;
  
  // Determine urgency
  let urgency, urgencyClass;
  if (arrivalTime < 1) {
    urgency = 'CRITICAL';
    urgencyClass = 'critical';
  } else if (arrivalTime < 3) {
    urgency = 'HIGH';
    urgencyClass = 'high';
  } else {
    urgency = 'MODERATE';
    urgencyClass = 'moderate';
  }
  
  // Immediate actions (top 3 only for compact view)
  let immediateActions = [];
  if (arrivalTime < 2) {
    immediateActions = [
      'Evacuate IMMEDIATELY',
      'Alert family NOW',
      'Take emergency kit'
    ];
  } else if (arrivalTime < 6) {
    immediateActions = [
      'Begin evacuation prep',
      'Gather supplies',
      'Turn off utilities'
    ];
  } else {
    immediateActions = [
      'Monitor alerts',
      'Prepare emergency kit',
      'Identify routes'
    ];
  }
  
  // Location-specific (top 3 only)
  const locationType = determineLocationType(userLocation);
  let locationActions = [];
  if (locationType === 'urban') {
    locationActions = [
      `Higher floors in ${userLocation}`,
      'Avoid basements',
      'No elevators'
    ];
  } else if (locationType === 'rural') {
    locationActions = [
      'Move livestock',
      'Protect grains',
      'Avoid rivers'
    ];
  } else {
    locationActions = [
      'Monitor storm surge',
      'Evacuate coast',
      'Move inland'
    ];
  }
  
  // Emergency contacts (compact chips)
  const contacts = [
    { icon: '🚨', number: '112' },
    { icon: '🚒', number: '101' },
    { icon: '👮', number: '100' },
    { icon: '🏥', number: '102' }
  ];
  
  container.innerHTML = `
    <div class="safety-section-compact">
      <div class="section-title-compact">
        <span class="section-icon">⚡</span>
        <span>Immediate Actions</span>
        <span class="urgency-badge-compact ${urgencyClass}">${urgency}</span>
      </div>
      <ul class="safety-list-compact">
        ${immediateActions.map(action => `<li>${action}</li>`).join('')}
      </ul>
    </div>
    
    <div class="safety-section-compact">
      <div class="section-title-compact">
        <span class="section-icon">📍</span>
        <span>Location-Specific</span>
        <span class="location-type-badge-compact ${locationType}">${locationType.toUpperCase()}</span>
      </div>
      <ul class="safety-list-compact">
        ${locationActions.map(action => `<li>${action}</li>`).join('')}
      </ul>
    </div>
    
    <div class="safety-section-compact">
      <div class="section-title-compact">
        <span class="section-icon">🏃</span>
        <span>Evacuation</span>
      </div>
      <ul class="safety-list-compact">
        <li>Identify nearest safe zone</li>
        <li>Plan evacuation route</li>
        <li>Keep emergency kit ready</li>
      </ul>
    </div>
    
    <div class="emergency-contacts-compact">
      <div class="section-title-compact">
        <span class="section-icon">📞</span>
        <span>Emergency</span>
      </div>
      <div class="contacts-row">
        ${contacts.map(c => `
          <div class="contact-chip">
            <span class="contact-chip-icon">${c.icon}</span>
            <span class="contact-chip-number">${c.number}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function generateSafetyRecommendationsHTML(arrivalTime) {
  const safetyGrid = document.getElementById('safetyGrid');
  if (!safetyGrid) return;
  
  const userLocation = appState.userLocation ? findNearestCity(appState.userLocation.lat, appState.userLocation.lng).name : 'Delhi';
  
  // Update location display
  const locationDisplay = document.getElementById('userLocationDisplay');
  if (locationDisplay) {
    locationDisplay.textContent = userLocation;
  }
  const locationType = determineLocationType(userLocation);
  
  console.log('Generating safety recommendations for:', userLocation, 'Type:', locationType, 'Arrival:', arrivalTime);
  
  let urgency, urgencyClass;
  if (arrivalTime < 1) {
    urgency = 'CRITICAL';
    urgencyClass = 'critical';
  } else if (arrivalTime < 3) {
    urgency = 'HIGH';
    urgencyClass = 'high';
  } else if (arrivalTime < 6) {
    urgency = 'MODERATE';
    urgencyClass = 'moderate';
  } else {
    urgency = 'LOW';
    urgencyClass = 'low';
  }
  
  let immediateActions = [];
  if (arrivalTime < 2) {
    immediateActions = [
      'Evacuate IMMEDIATELY - Do not delay',
      'Alert family and neighbors NOW',
      'Take emergency supplies and documents',
      'Move to higher ground or upper floors',
      'Do NOT attempt to drive through water'
    ];
  } else if (arrivalTime < 6) {
    immediateActions = [
      'Begin evacuation preparations',
      'Gather emergency supplies and important documents',
      'Turn off utilities (electricity, gas)',
      'Move valuables to higher ground',
      'Fill containers with clean drinking water',
      'Alert neighbors and check on elderly/disabled'
    ];
  } else {
    immediateActions = [
      'Monitor weather and flood alerts continuously',
      'Prepare emergency kit (food, water, medicines)',
      'Identify evacuation routes and safe zones',
      'Charge all electronic devices',
      'Keep important documents in waterproof container',
      'Stay informed via radio/TV/mobile'
    ];
  }
  
  let locationActions = [];
  if (locationType === 'urban') {
    locationActions = [
      'Move to higher floors in ' + userLocation + ' buildings',
      'Avoid basements and ground floors completely',
      'Do not use elevators during flooding',
      'Stay away from electrical equipment and outlets',
      'Avoid walking through flooded streets',
      'Keep away from manholes and drainage areas'
    ];
  } else if (locationType === 'rural') {
    locationActions = [
      'Move livestock to higher ground in ' + userLocation + ' area',
      'Protect stored food grains and supplies',
      'Avoid crossing rivers, streams, or canals',
      'Secure farm equipment and vehicles',
      'Store drinking water for family and animals',
      'Alert neighboring villages immediately'
    ];
  } else if (locationType === 'coastal') {
    locationActions = [
      'Monitor storm surge warnings for ' + userLocation,
      'Evacuate low-lying coastal areas immediately',
      'Secure boats and marine equipment',
      'Avoid beaches and seafront areas',
      'Move inland to higher elevation',
      'Follow official evacuation orders strictly'
    ];
  }
  
  const evacuationActions = [
    'Identify nearest evacuation center or relief camp',
    'Plan primary and alternate evacuation routes',
    'Ensure transportation or check evacuation schedule',
    'Contact ' + userLocation + ' District Control Room',
    'Take elderly, children, and pets with you',
    'Inform someone outside area of your plan'
  ];
  
  const emergencyContacts = [
    { icon: 'alert', name: 'National Emergency', number: '112' },
    { icon: 'fire', name: 'Fire Services', number: '101' },
    { icon: 'police', name: 'Police', number: '100' },
    { icon: 'ambulance', name: 'Ambulance', number: '102' },
    { icon: 'water', name: 'Flood Helpline', number: '1070' },
    { icon: 'disaster', name: 'Disaster Mgmt', number: '1078' },
    { icon: 'phone', name: userLocation + ' Control', number: '1800-XXX-XXXX' }
  ];
  
  console.log('Emergency contacts generated for:', userLocation);
  
  safetyGrid.innerHTML = `
    <div class="safety-category immediate">
      <div class="category-header">
        <div class="category-icon">⚡</div>
        <h4 class="category-title">Immediate Actions</h4>
        <div class="urgency-badge ${urgencyClass}">${urgency}</div>
      </div>
      <ul class="safety-list">
        ${immediateActions.map(action => `<li class="safety-item">${action}</li>`).join('')}
      </ul>
    </div>
    
    <div class="safety-category location-specific">
      <div class="category-header">
        <div class="category-icon">📍</div>
        <h4 class="category-title">Location-Specific Guidance</h4>
        <div class="location-type-badge ${locationType}">${locationType.toUpperCase()}</div>
      </div>
      <ul class="safety-list">
        ${locationActions.map(action => `<li class="safety-item"><span class="check-icon">📍</span>${action}</li>`).join('')}
      </ul>
    </div>
    
    <div class="safety-category evacuation">
      <div class="category-header">
        <div class="category-icon">🏃</div>
        <h4 class="category-title">Evacuation Planning</h4>
      </div>
      <ul class="safety-list">
        ${evacuationActions.map(action => `<li class="safety-item"><span class="check-icon">🏃</span>${action}</li>`).join('')}
      </ul>
    </div>
    
    <div class="safety-category emergency-contacts">
      <div class="category-header">
        <div class="category-icon">📞</div>
        <h4 class="category-title">Emergency Contacts</h4>
      </div>
      <div class="contacts-grid">
        ${emergencyContacts.map(contact => `
          <div class="contact-card">
            <div class="contact-icon">${contact.icon}</div>
            <div class="contact-info">
              <div class="contact-name">${contact.name}</div>
              <a href="tel:${contact.number}" class="contact-number">${contact.number}</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Make functions globally accessible
window.goBackToHome = goBackToHome;
window.requestRealLocationFromBanner = requestRealLocationFromBanner;
window.showHTTPSInstructions = showHTTPSInstructions;
window.handleGuestMode = handleGuestMode;
window.navigateToPage = navigateToPage;
window.downloadFloodResultPDF = downloadFloodResultPDF;
window.shareFloodCalculation = shareFloodCalculation;
window.switchCalculatorMode = switchCalculatorMode;
window.generateSafetyRecommendationsCompact = generateSafetyRecommendationsCompact;

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}