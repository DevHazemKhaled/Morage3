(function() {
    "use strict";

    // ========================================
    // فتح/غلق شريط إمكانية الوصول - منسدل صغير
    // ========================================
    const accessToggle = document.getElementById('accessToggle');
    const accessDropdown = document.getElementById('accessDropdown');
    let dropdownOpen = false;

    function toggleDropdown(e) {
        e.stopPropagation();
        dropdownOpen = !dropdownOpen;
        accessDropdown.classList.toggle('open', dropdownOpen);
        accessToggle.classList.toggle('active', dropdownOpen);
    }

    accessToggle.addEventListener('click', toggleDropdown);

    // إغلاق القائمة عند الضغط خارجها
    document.addEventListener('click', function(e) {
        if (dropdownOpen && !accessDropdown.contains(e.target) && !accessToggle.contains(e.target)) {
            dropdownOpen = false;
            accessDropdown.classList.remove('open');
            accessToggle.classList.remove('active');
        }
    });

    // إغلاق القائمة عند الضغط على Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && dropdownOpen) {
            dropdownOpen = false;
            accessDropdown.classList.remove('open');
            accessToggle.classList.remove('active');
        }
    });

    // ========================================
    // فتح/غلق القائمة الجانبية
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('chapterSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarClose');
    let sidebarOpen = false;

    function toggleSidebar() {
        sidebarOpen = !sidebarOpen;
        sidebar.classList.toggle('open', sidebarOpen);
        overlay.classList.toggle('active', sidebarOpen);
        menuToggle.classList.toggle('active', sidebarOpen);
        document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebarOpen) toggleSidebar();
    });

    // ========================================
    // إدارة الثيم (Light/Dark)
    // ========================================
    const themeBtn = document.getElementById('themeToggle');
    let isDark = localStorage.getItem('theme') !== 'light';

    function applyTheme() {
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeBtn.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.textContent = '☀️';
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    themeBtn.addEventListener('click', function() {
        isDark = !isDark;
        applyTheme();
    });
    applyTheme();

    // ========================================
    // إدارة حجم الخط
    // ========================================
    const fontInc = document.getElementById('fontInc');
    const fontDec = document.getElementById('fontDec');
    const fontDisplay = document.getElementById('fontSizeDisplay');
    let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;

    function applyFontSize() {
        document.documentElement.style.fontSize = fontSize + 'px';
        fontDisplay.textContent = fontSize;
        localStorage.setItem('fontSize', fontSize);
    }

    fontInc.addEventListener('click', function() {
        if (fontSize < 32) { fontSize++; applyFontSize(); }
    });
    fontDec.addEventListener('click', function() {
        if (fontSize > 12) { fontSize--; applyFontSize(); }
    });
    applyFontSize();

    // ========================================
    // إدارة التباين العالي
    // ========================================
    const contrastBtn = document.getElementById('contrastToggle');
    let isHighContrast = localStorage.getItem('highContrast') === 'true';

    function applyContrast() {
        document.body.classList.toggle('high-contrast', isHighContrast);
        localStorage.setItem('highContrast', isHighContrast);
    }

    contrastBtn.addEventListener('click', function() {
        isHighContrast = !isHighContrast;
        applyContrast();
    });
    applyContrast();

    // ========================================
    // محرك القراءة الصوتية المتطور
    // ========================================
    const speakBtn = document.getElementById('speakBtn');
    const stopBtn = document.getElementById('stopSpeakBtn');
    const pauseBtn = document.getElementById('pauseSpeakBtn');
    const speedUp = document.getElementById('speedUp');
    const speedDown = document.getElementById('speedDown');
    const speedDisplay = document.getElementById('speedDisplay');
    
    let speechRate = parseFloat(localStorage.getItem('speechRate')) || 1.0;
    let utterance = null;
    let isSpeaking = false;
    let isPaused = false;
    let currentText = '';

    speedDisplay.textContent = speechRate.toFixed(1);

    speedUp.addEventListener('click', function() {
        if (speechRate < 2.0) {
            speechRate += 0.1;
            speedDisplay.textContent = speechRate.toFixed(1);
            localStorage.setItem('speechRate', speechRate);
        }
    });

    speedDown.addEventListener('click', function() {
        if (speechRate > 0.5) {
            speechRate -= 0.1;
            speedDisplay.textContent = speechRate.toFixed(1);
            localStorage.setItem('speechRate', speechRate);
        }
    });

    function getCleanContent() {
        const el = document.querySelector('#contentRenderer');
        if (!el) return '';
        
        const clone = el.cloneNode(true);
        clone.querySelectorAll('.code-block, .note-box, .example-box').forEach(function(el) {
            el.remove();
        });
        
        let text = clone.textContent.trim();
        text = text.replace(/[📝💡🎯⭐♿🔍📱🚀]/g, '');
        text = text.replace(/\s+/g, ' ');
        text = text.replace(/[\(\)\{\}\[\]\<\>]/g, ' ');
        return text;
    }

    function splitIntoSentences(text) {
        const sentences = text.split(/(?<=[.۔!؟])\s+/);
        return sentences.filter(s => s.trim().length > 0);
    }

    function speakSentences(sentences, index) {
        if (index >= sentences.length) {
            isSpeaking = false;
            speakBtn.textContent = '🔊';
            return;
        }

        if (!('speechSynthesis' in window)) {
            alert('المتصفح لا يدعم القراءة الصوتية');
            return;
        }

        const sentence = sentences[index].trim();
        if (!sentence) {
            speakSentences(sentences, index + 1);
            return;
        }

        utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = 'ar-SA';
        utterance.rate = speechRate;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onstart = function() {
            isSpeaking = true;
            speakBtn.textContent = '🔊';
        };

        utterance.onend = function() {
            if (!isPaused) {
                setTimeout(function() {
                    speakSentences(sentences, index + 1);
                }, 300);
            }
        };

        utterance.onerror = function(e) {
            console.log('خطأ في القراءة:', e);
            speakSentences(sentences, index + 1);
        };

        window.speechSynthesis.speak(utterance);
    }

    function speakText() {
        const text = getCleanContent();
        if (!text) {
            alert('لا يوجد محتوى للقراءة');
            return;
        }

        if (isSpeaking && !isPaused) {
            window.speechSynthesis.pause();
            isPaused = true;
            speakBtn.textContent = '⏸️';
            return;
        }

        if (isPaused) {
            window.speechSynthesis.resume();
            isPaused = false;
            speakBtn.textContent = '🔊';
            return;
        }

        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }

        const sentences = splitIntoSentences(text);
        if (sentences.length === 0) {
            alert('لا يوجد محتوى قابل للقراءة');
            return;
        }

        currentText = text;
        isPaused = false;
        speakSentences(sentences, 0);
    }

    speakBtn.addEventListener('click', speakText);

    stopBtn.addEventListener('click', function() {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            isPaused = false;
            speakBtn.textContent = '🔊';
        }
    });

    pauseBtn.addEventListener('click', function() {
        if (isSpeaking && !isPaused) {
            window.speechSynthesis.pause();
            isPaused = true;
            speakBtn.textContent = '⏸️';
        } else if (isPaused) {
            window.speechSynthesis.resume();
            isPaused = false;
            speakBtn.textContent = '🔊';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            isPaused = false;
            speakBtn.textContent = '🔊';
        }
    });

    // ========================================
    // إدارة المحتوى
    // ========================================
    const chapters = [];
    if (typeof chapter1 !== 'undefined') chapters.push(chapter1);
    if (typeof chapter2 !== 'undefined') chapters.push(chapter2);
    if (typeof chapter3 !== 'undefined') chapters.push(chapter3);
    if (typeof chapter4 !== 'undefined') chapters.push(chapter4);
    if (typeof chapter5 !== 'undefined') chapters.push(chapter5);

    const sidebarContent = document.getElementById('sidebarContent');
    const renderer = document.getElementById('contentRenderer');

    function renderSidebar() {
        sidebarContent.innerHTML = '';
        chapters.forEach((chapter, idx) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'sidebar-chapter';

            const head = document.createElement('div');
            head.className = 'chapter-head';
            head.innerHTML = `
                <span><span class="chapter-num">${idx + 1}.</span> ${chapter.title}</span>
                <span class="chapter-arrow">▼</span>
            `;

            const lessons = document.createElement('div');
            lessons.className = 'chapter-lessons';

            chapter.lessons.forEach((lesson, lidx) => {
                const item = document.createElement('div');
                item.className = 'sidebar-lesson';
                item.innerHTML = `<span class="lesson-num">${lidx + 1}.</span> ${lesson.title}`;
                item.dataset.chapterId = chapter.id;
                item.dataset.lessonId = lesson.id;

                item.addEventListener('click', function() {
                    if (sidebarOpen) toggleSidebar();
                    loadLesson(chapter.id, lesson.id);
                });

                lessons.appendChild(item);
            });

            head.addEventListener('click', function() {
                head.classList.toggle('active');
                lessons.classList.toggle('open');
                head.querySelector('.chapter-arrow').classList.toggle('open');
            });

            wrapper.appendChild(head);
            wrapper.appendChild(lessons);
            sidebarContent.appendChild(wrapper);
        });
    }

    function loadLesson(chapterId, lessonId) {
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter) return;
        const lesson = chapter.lessons.find(l => l.id === lessonId);
        if (!lesson) return;

        let content = lesson.content || '';
        content = content.replace(/<span[^>]*>/g, '');
        content = content.replace(/<\/span>/g, '');

        renderer.innerHTML = `
            <div class="lesson-header">
                <span class="chapter-badge">${chapter.title}</span>
                <h2>${lesson.title}</h2>
            </div>
            <div class="lesson-content">
                ${content}
            </div>
        `;

        renderer.querySelectorAll('.code-block').forEach(function(block) {
            let html = block.innerHTML;
            html = html.replace(/<span[^>]*>/g, '');
            html = html.replace(/<\/span>/g, '');
            block.innerHTML = html;
        });

        localStorage.setItem('lastLesson', JSON.stringify({ chapterId, lessonId }));
        document.title = `${lesson.title} - أكاديمية الكومندا`;

        sidebarContent.querySelectorAll('.sidebar-lesson').forEach(function(el) {
            el.classList.toggle('active', 
                el.dataset.chapterId === chapterId && 
                el.dataset.lessonId === lessonId
            );
        });

        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            isPaused = false;
            speakBtn.textContent = '🔊';
        }
    }

    function loadLastLesson() {
        const saved = localStorage.getItem('lastLesson');
        if (saved) {
            try {
                const { chapterId, lessonId } = JSON.parse(saved);
                const chapter = chapters.find(c => c.id === chapterId);
                if (chapter && chapter.lessons.find(l => l.id === lessonId)) {
                    loadLesson(chapterId, lessonId);
                    return;
                }
            } catch(e) {}
        }
        if (chapters.length > 0 && chapters[0].lessons.length > 0) {
            loadLesson(chapters[0].id, chapters[0].lessons[0].id);
        }
    }

    // ========================================
    // تهيئة التطبيق
    // ========================================
    if (chapters.length === 0) {
        renderer.innerHTML = `
            <div style="text-align:center;padding:3rem;">
                <h2 style="color:var(--gold);">⚠️ لم يتم تحميل الفصول</h2>
                <p>تأكد من وجود ملفات chapter1.js إلى chapter5.js</p>
            </div>
        `;
    } else {
        renderSidebar();
        loadLastLesson();
        console.log('🚀 أكاديمية الكومندا جاهزة!');
        console.log(`📚 ${chapters.length} فصول`);
        console.log(`📖 ${chapters.reduce((acc, ch) => acc + ch.lessons.length, 0)} درس`);
        console.log('♿ دعم كامل لإمكانية الوصول');
        console.log('🔊 محرك القراءة الصوتية مفعل');
        console.log('💾 تفضيلات المستخدم محفوظة');
    }

})();
