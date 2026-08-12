// دالة تغيير القسم وعرض المحتوى ديناميكياً
function loadSection(sectionKey) {
    const section = courseData[sectionKey];
    if (section) {
        document.getElementById('page-title').innerText = section.title;
        document.getElementById('content-display').innerHTML = section.body;
    }
}

// ميزة قراءة المحتوى الصوتي (Accessibility Speech API)
let synth = window.speechSynthesis;
function readCurrentContent() {
    synth.cancel(); // إيقاف أي صوت سابق
    const boxText = document.getElementById('content-display').innerText;
    let speech = new SpeechSynthesisUtterance(boxText);
    speech.lang = 'ar-EG';
    speech.rate = 1;
    synth.speak(speech);
}

function stopSpeech() {
    synth.cancel();
}

// دالة الوضع الليلي والنهاري التفاعلية
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
}
