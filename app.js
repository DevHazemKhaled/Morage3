// توليد القوائم المنسدلة للفصول والـ 30 درس أوتوماتيكياً
function renderAcademyMenu() {
    const container = document.getElementById('chapters-container');
    container.innerHTML = "";

    academyData.forEach(chapter => {
        let chapterDiv = document.createElement('div');
        
        let titleBtn = document.createElement('div');
        titleBtn.className = "chapter-title";
        titleBtn.innerText = chapter.title;
        titleBtn.onclick = () => {
            let list = chapterDiv.querySelector('.lessons-list');
            list.classList.toggle('active');
        };

        let ul = document.createElement('ul');
        ul.className = "lessons-list";

        chapter.lessons.forEach(lesson => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = "#";
            a.innerText = lesson.title;
            a.onclick = (e) => {
                e.preventDefault();
                loadLessonContent(chapter.title, lesson);
            };
            li.appendChild(a);
            ul.appendChild(li);
        });

        chapterDiv.appendChild(titleBtn);
        chapterDiv.appendChild(ul);
        container.appendChild(chapterDiv);
    });
}

// عرض محتوى الدرس المختار مع الرابط والدروس السابقة
function loadLessonContent(chapterTitle, lesson) {
    document.getElementById('chapter-badge').innerText = chapterTitle;
    document.getElementById('lesson-title').innerText = lesson.title;
    
    document.getElementById('lesson-content').innerHTML = `
        <h3>شرح الدرس التفصيلي</h3>
        <p>${lesson.content}</p>
        <div class="connection-box">
            <strong>🔗 ربط درس اليوم بما سبق:</strong> ${lesson.connection}
        </div>
    `;

    // وضع كود افتراضي في المححر للتجربة
    document.getElementById('code-editor').value = `<!-- تجربة كود لدرس: ${lesson.title} -->\n<h1>أهلاً بك في منصة Al-Komanda</h1>\n<script>\nconsole.log("تم تنفيذ الدرس بنجاح!");\n</script>`;
}

// محرك "جرب بنفسك" الحقيقي (Live Preview & Console)
function runUserCode() {
    const code = document.getElementById('code-editor').value;
    const iframe = document.getElementById('live-preview');
    const consoleOutput = document.getElementById('console-output');

    // تشغيل الكود في الـ Iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(code);
    iframeDoc.close();

    // التقاط الـ Console.log وعرضه في الشاشة السوداء المخصصة
    consoleOutput.innerHTML = "Console Logs:<br>";
    
    // إعادة توجيه مؤقت لـ console.log الخاص بالـ Iframe
    try {
        let originalLog = iframe.contentWindow.console.log;
        iframe.contentWindow.console.log = function(...args) {
            consoleOutput.innerHTML += `> ${args.join(' ')}<br>`;
            originalLog.apply(console, args);
        };
    } catch(e) {
        consoleOutput.innerHTML += "> تم تنفيذ الكود بنجاح في الإطار الحي.";
    }
}

// ميزة القراءة الصوتية للدروس (Accessibility)
let synth = window.speechSynthesis;
function readCurrentContent() {
    synth.cancel();
    const text = document.getElementById('lesson-content').innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'ar-EG';
    speech.rate = 1;
    synth.speak(speech);
}

function stopSpeech() {
    synth.cancel();
}

// الوضع الليلي
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
}

// تشغيل القوائم عند فتح الصفحة
window.onload = function() {
    renderAcademyMenu();
};
