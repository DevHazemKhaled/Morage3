(function() {
    "use strict";

    // ========================================
    // إدارة الثيم
    // ========================================
    class ThemeManager {
        constructor() {
            this.isDark = this.loadTheme() !== 'light';
            this.applyTheme();
        }

        toggle() {
            this.isDark = !this.isDark;
            this.applyTheme();
            this.saveTheme();
        }

        applyTheme() {
            if (this.isDark) {
                document.documentElement.removeAttribute('data-theme');
                document.getElementById('themeToggle').textContent = '🌙';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                document.getElementById('themeToggle').textContent = '☀️';
            }
        }

        saveTheme() {
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        }

        loadTheme() {
            return localStorage.getItem('theme');
        }
    }

    // ========================================
    // إدارة حجم الخط
    // ========================================
    class FontManager {
        constructor() {
            this.minSize = 12;
            this.maxSize = 32;
            this.defaultSize = 16;
            this.currentSize = this.loadSize() || this.defaultSize;
            this.applySize();
        }

        increase() {
            if (this.currentSize < this.maxSize) {
                this.currentSize += 1;
                this.applySize();
                this.saveSize();
            }
        }

        decrease() {
            if (this.currentSize > this.minSize) {
                this.currentSize -= 1;
                this.applySize();
                this.saveSize();
            }
        }

        applySize() {
            document.documentElement.style.fontSize = this.currentSize + 'px';
            document.getElementById('fontSizeDisplay').textContent = this.currentSize;
        }

        saveSize() {
            localStorage.setItem('fontSize', this.currentSize);
        }

        loadSize() {
            const saved = localStorage.getItem('fontSize');
            return saved ? parseFloat(saved) : null;
        }
    }

    // ========================================
    // إدارة التباين
    // ========================================
    class ContrastManager {
        constructor() {
            this.isHigh = this.loadState() || false;
            this.applyState();
        }

        toggle() {
            this.isHigh = !this.isHigh;
            this.applyState();
            this.saveState();
        }

        applyState() {
            document.body.classList.toggle('high-contrast', this.isHigh);
            document.getElementById('contrastToggle').textContent = this.isHigh ? '♿' : '♿';
        }

        saveState() {
            localStorage.setItem('highContrast', JSON.stringify(this.isHigh));
        }

        loadState() {
            const saved = localStorage.getItem('highContrast');
            return saved ? JSON.parse(saved) : null;
        }
    }

    // ========================================
    // محرك القراءة الصوتية
    // ========================================
    class SpeechEngine {
        constructor() {
            this.utterance = null;
            this.isSpeaking = false;
            this.isPaused = false;
            this.voices = [];
        }

        speak(text) {
            if (!text || !('speechSynthesis' in window)) return;
            this.stop();
            this.utterance = new SpeechSynthesisUtterance(text);
            this.utterance.lang = 'ar-SA';
            this.utterance.rate = 0.9;
            this.utterance.pitch = 1;
            this.utterance.onstart = () => { this.isSpeaking = true; this.updateBtn('🔊'); };
            this.utterance.onend = () => { this.isSpeaking = false; this.updateBtn('🔊'); };
            this.utterance.onerror = () => { this.isSpeaking = false; this.updateBtn('🔊'); };
            window.speechSynthesis.speak(this.utterance);
        }

        stop() {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
                this.isSpeaking = false;
                this.isPaused = false;
                this.updateBtn('🔊');
            }
        }

        pause() {
            if (window.speechSynthesis && this.isSpeaking) {
                window.speechSynthesis.pause();
                this.isPaused = true;
                this.updateBtn('⏸️');
            }
        }

        resume() {
            if (window.speechSynthesis && this.isPaused) {
                window.speechSynthesis.resume();
                this.isPaused = false;
                this.updateBtn('🔊');
            }
        }

        toggleSpeak() {
            if (this.isSpeaking && !this.isPaused) {
                this.pause();
            } else if (this.isPaused) {
                this.resume();
            } else {
                const text = this.getContent();
                if (text) this.speak(text);
            }
        }

        getContent() {
            const el = document.querySelector('#contentRenderer');
            return el ? el.textContent.trim() : '';
        }

        updateBtn(label) {
            const btn = document.getElementById('speakBtn');
            if (btn) btn.textContent = label;
        }
    }

    // ========================================
    // إدارة القائمة الجانبية
    // ========================================
    class SidebarManager {
        constructor() {
            this.isOpen = false;
            this.sidebar = document.getElementById('chapterSidebar');
            this.overlay = document.getElementById('sidebarOverlay');
            this.toggleBtn = document.getElementById('menuToggle');
            this.closeBtn = document.getElementById('sidebarClose');
            this.content = document.getElementById('sidebarContent');
            this.bindEvents();
        }

        bindEvents() {
            this.toggleBtn.addEventListener('click', () => this.toggle());
            this.closeBtn.addEventListener('click', () => this.close());
            this.overlay.addEventListener('click', () => this.close());
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.close();
            });
        }

        toggle() {
            this.isOpen ? this.close() : this.open();
        }

        open() {
            this.isOpen = true;
            this.sidebar.classList.add('open');
            this.overlay.classList.add('active');
            this.toggleBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        close() {
            this.isOpen = false;
            this.sidebar.classList.remove('open');
            this.overlay.classList.remove('active');
            this.toggleBtn.classList.remove('active');
            document.body.style.overflow = '';
        }

        renderChapters(chapters) {
            this.content.innerHTML = '';
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
                    item.dataset.chapter = chapter.id;
                    item.dataset.lesson = lesson.id;
                    item.addEventListener('click', () => {
                        this.close();
                        document.dispatchEvent(new CustomEvent('lessonSelected', {
                            detail: { chapterId: chapter.id, lessonId: lesson.id }
                        }));
                    });
                    lessons.appendChild(item);
                });

                head.addEventListener('click', () => {
                    head.classList.toggle('active');
                    lessons.classList.toggle('open');
                    head.querySelector('.chapter-arrow').classList.toggle('open');
                });

                wrapper.appendChild(head);
                wrapper.appendChild(lessons);
                this.content.appendChild(wrapper);
            });
        }

        highlightLesson(chapterId, lessonId) {
            this.content.querySelectorAll('.sidebar-lesson').forEach(el => {
                el.classList.toggle('active', 
                    el.dataset.chapter === chapterId && el.dataset.lesson === lessonId
                );
            });
        }
    }

    // ========================================
    // إدارة المحتوى
    // ========================================
    class ContentManager {
        constructor(chapters) {
            this.chapters = chapters;
            this.renderer = document.getElementById('contentRenderer');
            this.sidebar = new SidebarManager();
            this.sidebar.renderChapters(chapters);
            this.loadLastLesson();
            this.bindEvents();
        }

        bindEvents() {
            document.addEventListener('lessonSelected',
