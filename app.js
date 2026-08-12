(function() {
    "use strict";

    class FontManager {
        constructor() {
            this.minSize = 10;
            this.maxSize = 40;
            this.defaultSize = 16;
            this.currentSize = this.loadSize() || this.defaultSize;
            this.applySize();
        }

        increase() {
            if (this.currentSize < this.maxSize) {
                this.currentSize = Math.round(this.currentSize * 1.1);
                if (this.currentSize > this.maxSize) this.currentSize = this.maxSize;
                this.applySize();
                this.saveSize();
            }
        }

        decrease() {
            if (this.currentSize > this.minSize) {
                this.currentSize = Math.round(this.currentSize / 1.1);
                if (this.currentSize < this.minSize) this.currentSize = this.minSize;
                this.applySize();
                this.saveSize();
            }
        }

        applySize() {
            document.documentElement.style.fontSize = this.currentSize + 'px';
            this.updateDisplay();
        }

        updateDisplay() {
            let display = document.querySelector('.font-size-display');
            if (!display) {
                display = document.createElement('span');
                display.className = 'font-size-display';
                display.style.cssText = 'color: #94a3b8; font-size: 0.9rem; margin: 0 0.5rem;';
                const toolbar = document.querySelector('.toolbar');
                if (toolbar) toolbar.appendChild(display);
            }
            display.textContent = `📐 ${this.currentSize}px`;
        }

        saveSize() {
            localStorage.setItem('fontSize', this.currentSize);
        }

        loadSize() {
            const saved = localStorage.getItem('fontSize');
            return saved ? parseFloat(saved) : null;
        }
    }

    class ContrastManager {
        constructor() {
            this.isHighContrast = this.loadState() || false;
            this.applyState();
        }

        toggle() {
            this.isHighContrast = !this.isHighContrast;
            this.applyState();
            this.saveState();
        }

        applyState() {
            if (this.isHighContrast) {
                document.body.classList.add('high-contrast');
                this.updateButton('🌓 تباين عادي');
            } else {
                document.body.classList.remove('high-contrast');
                this.updateButton('🌓 تباين عالي');
            }
        }

        updateButton(text) {
            const btn = document.getElementById('contrastToggle');
            if (btn) btn.textContent = text;
        }

        saveState() {
            localStorage.setItem('highContrast', JSON.stringify(this.isHighContrast));
        }

        loadState() {
            const saved = localStorage.getItem('highContrast');
            return saved ? JSON.parse(saved) : null;
        }
    }

    class SpeechEngine {
        constructor() {
            this.utterance = null;
            this.isSpeaking = false;
            this.isPaused = false;
            this.voices = [];
            this.selectedVoice = null;
            this.initVoices();
        }

        initVoices() {
            if ('speechSynthesis' in window) {
                this.voices = window.speechSynthesis.getVoices();
                window.speechSynthesis.addEventListener('voiceschanged', () => {
                    this.voices = window.speechSynthesis.getVoices();
                    this.selectArabicVoice();
                });
                this.selectArabicVoice();
            }
        }

        selectArabicVoice() {
            const arabicVoice = this.voices.find(v => v.lang.startsWith('ar'));
            if (arabicVoice) {
                this.selectedVoice = arabicVoice;
            } else {
                const femaleVoice = this.voices.find(v => v.lang.startsWith('en'));
                if (femaleVoice) this.selectedVoice = femaleVoice;
            }
        }

        speak(text, rate = 0.9, pitch = 1) {
            if (!text) {
                this.updateUI('⚠️ لا يوجد نص');
                return;
            }

            if (!('speechSynthesis' in window)) {
                alert('المتصفح لا يدعم خاصية القراءة الصوتية');
                return;
            }

            this.stop();

            this.utterance = new SpeechSynthesisUtterance(text);
            this.utterance.lang = 'ar-SA';
            this.utterance.rate = rate;
            this.utterance.pitch = pitch;
            this.utterance.volume = 1;

            if (this.selectedVoice) {
                this.utterance.voice = this.selectedVoice;
            }

            this.utterance.addEventListener('start', () => {
                this.isSpeaking = true;
                this.isPaused = false;
                this.updateUI('▶️ جاري القراءة...');
            });

            this.utterance.addEventListener('end', () => {
                this.isSpeaking = false;
                this.isPaused = false;
                this.updateUI('🔊 استماع');
            });

            this.utterance.addEventListener('error', (e) => {
                this.isSpeaking = false;
                this.isPaused = false;
                this.updateUI('⚠️ خطأ');
                console.error('خطأ في النطق:', e);
            });

            this.utterance.addEventListener('pause', () => {
                this.isPaused = true;
                this.updateUI('⏸️ متوقف');
            });

            this.utterance.addEventListener('resume', () => {
                this.isPaused = false;
                this.updateUI('▶️ استئناف');
            });

            window.speechSynthesis.speak(this.utterance);
        }

        stop() {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
                this.isSpeaking = false;
                this.isPaused = false;
                this.updateUI('🔊 استماع');
            }
        }

        pause() {
            if (window.speechSynthesis && this.isSpeaking) {
                window.speechSynthesis.pause();
                this.isPaused = true;
                this.updateUI('⏸️ متوقف مؤقتاً');
            }
        }

        resume() {
            if (window.speechSynthesis && this.isPaused) {
                window.speechSynthesis.resume();
                this.isPaused = false;
                this.updateUI('▶️ جاري القراءة...');
            }
        }

        updateUI(status) {
            const btn = document.getElementById('speakBtn');
            if (btn) btn.textContent = status;
        }

        getContentToRead() {
            const content = document.querySelector('#contentRenderer');
            if (content) {
                let text = content.textContent.trim();
                text = text.replace(/\s+/g, ' ');
                text = text.replace(/[📝💡🎯⭐♿🔍📱🚀]/g, '');
                return text;
            }
            return '';
        }

        toggleSpeak() {
            if (this.isSpeaking) {
                if (this.isPaused) {
                    this.resume();
                } else {
                    this.pause();
                }
            } else {
                const text = this.getContentToRead();
                if (text) {
                    this.speak(text);
                } else {
                    alert('لا يوجد محتوى للقراءة');
                }
            }
        }
    }

    class ContentManager {
        constructor() {
            this.chapters = [];
            this.currentChapter = null;
            this.currentLesson = null;
            this.loadChapters();
        }

        loadChapters() {
            if (typeof chapter1 !== 'undefined') this.chapters.push(chapter1);
            if (typeof chapter2 !== 'undefined') this.chapters.push(chapter2);
            if (typeof chapter3 !== 'undefined') this.chapters.push(chapter3);
            if (typeof chapter4 !== 'undefined') this.chapters.push(chapter4);
            if (typeof chapter5 !== 'undefined') this.chapters.push(chapter5);
        }

        renderSidebar() {
            const sidebar = document.getElementById('chapterSidebar');
            if (!sidebar) return;
            sidebar.innerHTML = '';

            this.chapters.forEach((chapter, index) => {
                const accordion = document.createElement('div');
                accordion.className = 'chapter-accordion';

                const header = document.createElement('div');
                header.className = 'chapter-header';
                header.setAttribute('role', 'button');
                header.setAttribute('tabindex', '0');
                header.setAttribute('aria-expanded', 'false');
                header.innerHTML = `
                    <span><span class="chapter-num">${index + 1}.</span> ${chapter.title}</span>
                    <span class="arrow">▼</span>
                `;

                const lessonsContainer = document.createElement('div');
                lessonsContainer.className = 'chapter-lessons';

                if (chapter.lessons && chapter.lessons.length > 0) {
                    chapter.lessons.forEach((lesson, lessonIndex) => {
                        const lessonItem = document.createElement('div');
                        lessonItem.className = 'lesson-item-sidebar';
                        lessonItem.setAttribute('role', 'button');
                        lessonItem.setAttribute('tabindex', '0');
                        lessonItem.innerHTML = `
                            <span class="lesson-num">${lessonIndex + 1}.</span> ${lesson.title}
                        `;
                        lessonItem.dataset.chapterId = chapter.id;
                        lessonItem.dataset.lessonId = lesson.id;

                        lessonItem.addEventListener('click', () => {
                            this.loadLesson(chapter.id, lesson.id);
                        });

                        lessonItem.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                this.loadLesson(chapter.id, lesson.id);
                            }
                        });

                        lessonsContainer.appendChild(lessonItem);
                    });
                }

                header.addEventListener('click', () => {
                    const isOpen = header.classList.toggle('active');
                    lessonsContainer.classList.toggle('open');
                    const arrow = header.querySelector('.arrow');
                    if (arrow) arrow.classList.toggle('open');
                    header.setAttribute('aria-expanded', isOpen);
                });

                header.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        header.click();
                    }
                });

                accordion.appendChild(header);
                accordion.appendChild(lessonsContainer);
                sidebar.appendChild(accordion);
            });
        }

        loadLesson(chapterId, lessonId) {
            const chapter = this.chapters.find(c => c.id === chapterId);
            if (!chapter) return;

            const lesson = chapter.lessons.find(l => l.id === lessonId);
            if (!lesson) return;

            this.currentChapter = chapter;
            this.currentLesson = lesson;
            this.renderContent(chapter, lesson);
            this.highlightActiveLesson(chapterId, lessonId);

            document.title = `${lesson.title} - أكاديمية الكومندا`;

            const event = new CustomEvent('lessonChanged', {
                detail: { chapterId, lessonId }
            });
            document.dispatchEvent(event);

            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        }

        renderContent(chapter, lesson) {
            const container = document.getElementById('contentRenderer');
            if (!container) return;

            container.innerHTML = `
                <div class="lesson-header">
                    <span class="chapter-badge">${chapter.title}</span>
                    <h2>${lesson.title}</h2>
                </div>
                <div class="lesson-content">
                    ${lesson.content}
                </div>
            `;

            this.reapplyAccessibility();
            this.highlightCodeBlocks();
        }

        highlightCodeBlocks() {
            document.querySelectorAll('.code-block').forEach(block => {
                let html = block.innerHTML;
                html = html.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
                html = html.replace(/\b(const|let|var|function|return|if|else|for|while|class|new|this|async|await|try|catch|throw|switch|case|break|default|typeof|instanceof|void|delete|in|of|export|import|from|extends|super|static|get|set)\b/g, '<span class="keyword">$1</span>');
                html = html.replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>');
                html = html.replace(/\b(console\.log|console\.error|console\.warn|document\.querySelector|document\.getElementById|document\.createElement|fetch|JSON\.parse|JSON\.stringify|localStorage\.setItem|localStorage\.getItem|addEventListener|removeEventListener|createElement|appendChild|remove|classList\.add|classList\.remove|classList\.toggle|classList\.contains|textContent|innerHTML|setAttribute|getAttribute|style)\b/g, '<span class="function">$1</span>');
                block.innerHTML = html;
            });
        }

        highlightActiveLesson(chapterId, lessonId) {
            document.querySelectorAll('.lesson-item-sidebar').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.chapterId === chapterId && item.dataset.lessonId === lessonId) {
                    item.classList.add('active');
                    const parent = item.closest('.chapter-lessons');
                    if (parent) {
                        parent.classList.add('open');
                        const header = parent.previousElementSibling;
                        if (header && header.classList.contains('chapter-header')) {
                            header.classList.add('active');
                            const arrow = header.querySelector('.arrow');
                            if (arrow) arrow.classList.add('open');
                            header.setAttribute('aria-expanded', 'true');
                        }
                    }
                }
            });
        }

        reapplyAccessibility() {
            const savedFont = localStorage.getItem('fontSize');
            if (savedFont) {
                document.documentElement.style.fontSize = savedFont + 'px';
            }

            const savedContrast = localStorage.getItem('highContrast');
            if (savedContrast === 'true') {
                document.body.classList.add('high-contrast');
                const btn = document.getElementById('contrastToggle');
                if (btn) btn.textContent = '🌓 تباين عادي';
            }
        }

        loadFirstLesson() {
            if (this.chapters.length > 0 && this.chapters[0].lessons && this.chapters[0].lessons.length > 0) {
                const firstChapter = this.chapters[0];
                const firstLesson = firstChapter.lessons[0];
                this.loadLesson(firstChapter.id, firstLesson.id);
            }
        }

        loadLastLesson() {
            const lastLesson = localStorage.getItem('lastLesson');
            if (lastLesson) {
                try {
                    const { chapterId, lessonId } = JSON.parse(lastLesson);
                    const chapter = this.chapters.find(c => c.id === chapterId);
                    if (chapter) {
                        const lesson = chapter.lessons.find(l => l.id === lessonId);
                        if (lesson) {
                            this.loadLesson(chapterId, lessonId);
                            return;
                        }
                    }
                } catch (e) {
                    console.log('خطأ في استعادة الدرس السابق');
                }
            }
            this.loadFirstLesson();
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const fontManager = new FontManager();
        const contrastManager = new ContrastManager();
        const speechEngine = new SpeechEngine();
        const contentManager = new ContentManager();

        contentManager.renderSidebar();

        const lastLesson = localStorage.getItem('lastLesson');
        if (lastLesson) {
            try {
                const { chapterId, lessonId } = JSON.parse(lastLesson);
                const chapter = contentManager.chapters.find(c => c.id === chapterId);
                if (chapter) {
                    const lesson = chapter.lessons.find(l => l.id === lessonId);
                    if (lesson) {
                        contentManager.loadLesson(chapterId, lessonId);
                    } else {
                        contentManager.loadFirstLesson();
                    }
                } else {
                    contentManager.loadFirstLesson();
                }
            } catch (e) {
                contentManager.loadFirstLesson();
            }
        } else {
            contentManager.loadFirstLesson();
        }

        document.getElementById('fontInc').addEventListener('click', () => fontManager.increase());
        document.getElementById('fontDec').addEventListener('click', () => fontManager.decrease());
        document.getElementById('contrastToggle').addEventListener('click', () => contrastManager.toggle());

        const speakBtn = document.getElementById('speakBtn');
        const stopSpeakBtn = document.getElementById('stopSpeakBtn');

        speakBtn.addEventListener('click', () => speechEngine.toggleSpeak());

        stopSpeakBtn.addEventListener('click', () => {
            speechEngine.stop();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                speechEngine.stop();
            }
        });

        document.addEventListener('lessonChanged', (e) => {
            localStorage.setItem('lastLesson', JSON.stringify({
                chapterId: e.detail.chapterId,
                lessonId: e.detail.lessonId
            }));

            setTimeout(() => {
                const renderer = document.getElementById('contentRenderer');
                if (renderer) {
                    const codeBlocks = renderer.querySelectorAll('.code-block');
                    codeBlocks.forEach(block => {
                        if (!block.querySelector('.keyword')) {
                            let html = block.innerHTML;
                            html = html.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
                            html = html.replace(/\b(const|let|var|function|return|if|else|for|while|class|new|this|async|await|try|catch|throw|switch|case|break|default|typeof|instanceof|void|delete|in|of|export|import|from|extends|super|static|get|set)\b/g, '<span class="keyword">$1</span>');
                            html = html.replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>');
                            block.innerHTML = html;
                        }
                    });
                }
            }, 50);
        });

        console.log('🚀 أكاديمية الكومندا جاهزة!');
        console.log(`📚 ${contentManager.chapters.length} فصول`);
        console.log(`📖 ${contentManager.chapters.reduce((acc, ch) => acc + (ch.lessons ? ch.lessons.length : 0), 0)} درس`);
        console.log('♿ دعم كامل لإمكانية الوصول');
        console.log('🔊 محرك القراءة الصوتية مفعل');
        console.log('💾 تفضيلات المستخدم محفوظة في LocalStorage');
    });

})();
