// متغير لحفظ حجم الخط الحالي
let currentFontSize = 18;

function changeFontSize(step) {
    currentFontSize += step;
    const textElement = document.querySelector('.readable-text');
    textElement.style.fontSize = currentFontSize + 'px';
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

// ميزة خرافية مجانية في المتصفح لقراءة النص (Speech API)
function readText() {
    const text = document.querySelector('.readable-text').innerText;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ar-EG'; // باللهجة المصرية أو العربية
    window.speechSynthesis.speak(speech);
}
