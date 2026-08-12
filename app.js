// متغيرات التحكم في حجم الخط والتباين
let currentSize = 18;

function increaseFont() {
    if (currentSize < 26) {
        currentSize += 2;
        document.body.style.fontSize = currentSize + 'px';
    }
}

function decreaseFont() {
    if (currentSize > 14) {
        currentSize -= 2;
        document.body.style.fontSize = currentSize + 'px';
    }
}

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

// ميزة قراءة النص بصوت عالي (Web Speech API لذوي الاحتياجات الخاصة)
let synth = window.speechSynthesis;
function readPageContent() {
    synth.cancel();
    const mainText = document.querySelector('.container').innerText;
    let utterance = new SpeechSynthesisUtterance(mainText);
    utterance.lang = 'ar-EG';
    utterance.rate = 0.9; // سرعة هادئة ومفهومة
    synth.speak(utterance);
}

function stopReading() {
    synth.cancel();
}
