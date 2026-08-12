(function() {
    "use strict";

    // ========================================
    // إدارة الثيم (Light/Dark)
    // ========================================
    class ThemeManager {
        constructor() {
            this.isDark = this.loadTheme() !== 'light';
            this.applyTheme();
            this.bindEvents();
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

        bindEvents() {
            document.getElementById('themeToggle').addEventListener('click', () => this.toggle());
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
            this.bindEvents();
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
            const display = document.getElementById('fontSizeDisplay');
            if (display) display.textContent = this.currentSize;
        }

        saveSize() {
            localStorage.setItem('fontSize', this.currentSize);
        }

        loadSize() {
            const saved = localStorage.getItem('fontSize');
            return saved ? parseFloat(saved) : null;
        }

        bindEvents() {
            document.getElementById('fontInc').addEventListener('click', () => this.increase());
            document.getElementById('fontDec').addEventListener('click', () => this.decrease());
        }
    }

    // ========================================
    // إدارة التباين العالي
    // ========================================
    class ContrastManager {
        constructor() {
            this.isHigh = this.loadState() || false;
            this.applyState();
            this.bindEvents();
        }

        toggle() {
            this.isHigh = !this.isHigh;
            this.applyState();
            this.saveState();
        }

        applyState() {
            document.body.classList.toggle('high-contrast', this.isHigh);
            const btn = document.getElementById('contrastToggle');
            if (btn) btn.textContent = this.isHigh ? '♿' : '♿';
        }

        saveState() {
            localStorage.setItem('highContrast', JSON.stringify(this.isHigh));
        }

        loadState() {
            const saved = localStorage.getItem('highContrast');
            return saved ? JSON.parse(saved) : null;
        }

        bindEvents() {
            document.getElementById('contrastToggle').addEventListener('click', () => this.toggle());
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
            this.bindEvents();
        }

        speak(text) {
            if (!text || !('speechSynthesis' in window)) {
                alert('المتصفح لا يدعم القراءة الصوتية');
                return;
            }
            
            this.stop();
            
            this.utterance = new SpeechSynthesisUtterance(text);
            this.utterance.lang = 'ar-SA';
            this.utterance.rate = 0.9;
            this.utterance.pitch = 1;
            this.utterance.volume = 1;
            
            this.utterance.onstart = () => {
                this.isSpeaking = true;
                this.isPaused = false;
                this.updateBtn('🔊');
            };
            
            this.utterance.onend = () => {
                this.isSpeaking = false;
                this.isPaused = false;
                this.updateBtn('🔊');
            };
            
            this.utterance.onerror = () => {
                this.isSpeaking = false;
                this.isPaused = false;
                this.updateBtn('🔊');
            };
            
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
                if (text) {
                    this.speak(text);
                } else {
                    alert('لا يوجد محتوى للقراءة');
                }
            }
        }

        getContent() {
            const el = document.querySelector('#contentRenderer');
            if (el) {
                let text = el.textContent.trim();
                text = text.replace(/[📝💡🎯⭐♿🔍📱🚀]/g, '');
                text = text.replace(/\s+/g, ' ');
                return text;
            }
            return '';
        }

        updateBtn(label) {
            const btn = document.getElementById('speakBtn');
            if (btn) btn.textContent = label;
        }

        bindEvents() {
            document.getElementById('speakBtn').addEventListener('click', () => this.toggleSpeak());
            document.getElementById('stopSpeakBtn').addEventListener('click', () => this.stop());
            document.getElementById('pauseSpeakBtn').addEventListener('click', () => this.pause());
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.stop();
            });
        }
    }

    // ========================================
    // إدارة القائمة الجانبية المنزلقة
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

                if (chapter.lessons && chapter.lessons.length > 0) {
                    chapter.lessons.forEach((lesson, lidx) => {
                        const item = document.createElement('div');
                        item.className = 'sidebar-lesson';
                        item.innerHTML = `<span class="lesson-num">${lidx + 1}.</span> ${lesson.title}`;
                        item.dataset.chapterId = chapter.id;
                        item.dataset.lessonId = lesson.id;
                        
                        item.addEventListener('click', () => {
                            this.close();
                            document.dispatchEvent(new CustomEvent('lessonSelected', {
                                detail: { 
                                    chapterId: chapter.id, 
                                    lessonId: lesson.id 
                                }
                            }));
                        });
                        
                        lessons.appendChild(item);
                    });
                }

                head.addEventListener('click', () => {
                    head.classList.toggle('active');
                    lessons.classList.toggle('open');
                    const arrow = head.querySelector('.chapter-arrow');
                    if (arrow) arrow.classList.toggle('open');
                });

                wrapper.appendChild(head);
                wrapper.appendChild(lessons);
                this.content.appendChild(wrapper);
            });
        }

        highlightLesson(chapterId, lessonId) {
            this.content.querySelectorAll('.sidebar-lesson').forEach(el => {
                el.classList.toggle('active', 
                    el.dataset.chapterId === chapterId && 
                    el.dataset.lessonId === lessonId
                );
            });
        }
    }

    // ========================================
    // إدارة المحتوى الرئيسي
    // ========================================
    class ContentManager {
        constructor(chapters) {
            this.chapters = chapters;
            this.renderer = document.getElementById('contentRenderer');
            this.currentChapter = null;
            this.currentLesson = null;
            
            this.sidebar = new SidebarManager();
            this.sidebar.renderChapters(chapters);
            
            this.bindEvents();
            this.loadLastLesson();
        }

        bindEvents() {
            document.addEventListener('lessonSelected', (e) => {
                this.loadLesson(e.detail.chapterId, e.detail.lessonId);
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
            this.sidebar.highlightLesson(chapterId, lessonId);
            
            document.title = `${lesson.title} - أكاديمية الكومندا`;
            
            localStorage.setItem('lastLesson', JSON.stringify({
                chapterId: chapterId,
                lessonId: lessonId
            }));
        }

        renderContent(chapter, lesson) {
            // تنظيف المحتوى من أي علامات HTML زائدة
            let content = lesson.content || '';
            
            // إزالة أي <span> متبقية من التنسيق القديم
            content = content.replace(/<span[^>]*>/g, '');
            content = content.replace(/<\/span>/g, '');
            
            // الحفاظ على العلامات الأساسية فقط
            content = content.replace(/<h3>/g, '<h3>');
            content = content.replace(/<\/h3>/g, '</h3>');
            content = content.replace(/<h4>/g, '<h4>');
            content = content.replace(/<\/h4>/g, '</h4>');
            content = content.replace(/<p>/g, '<p>');
            content = content.replace(/<\/p>/g, '</p>');
            content = content.replace(/<ul>/g, '<ul>');
            content = content.replace(/<\/ul>/g, '</ul>');
            content = content.replace(/<ol>/g, '<ol>');
            content = content.replace(/<\/ol>/g, '</ol>');
            content = content.replace(/<li>/g, '<li>');
            content = content.replace(/<\/li>/g, '</li>');
            content = content.replace(/<strong>/g, '<strong>');
            content = content.replace(/<\/strong>/g, '</strong>');
            content = content.replace(/<code>/g, '<code>');
            content = content.replace(/<\/code>/g, '</code>');
            content = content.replace(/<div class="code-block">/g, '<div class="code-block">');
            content = content.replace(/<\/div>/g, '</div>');
            content = content.replace(/<div class="note-box">/g, '<div class="note-box">');
            content = content.replace(/<div class="example-box">/g, '<div class="example-box">');
            
            this.renderer.innerHTML = `
                <div class="lesson-header">
                    <span class="chapter-badge">${chapter.title}</span>
                    <h2>${lesson.title}</h2>
                </div>
                <div class="lesson-content">
                    ${content}
                </div>
            `;
            
            // تنسيق الأكواد بعد عرض المحتوى
            this.highlightCodeBlocks();
        }

        highlightCodeBlocks() {
            // معالجة جميع كتل الأكواد
            this.renderer.querySelectorAll('.code-block').forEach(block => {
                let html = block.innerHTML;
                
                // تلوين التعليقات (//)
                html = html.replace(/\/\/.*/g, match => {
                    return `<span class="comment">${match}</span>`;
                });
                
                // تلوين التعليقات (/* */)
                html = html.replace(/\/\*[\s\S]*?\*\//g, match => {
                    return `<span class="comment">${match}</span>`;
                });
                
                // تلوين الكلمات المفتاحية
                const keywords = [
                    'const', 'let', 'var', 'function', 'return', 'if', 'else', 
                    'for', 'while', 'class', 'new', 'this', 'async', 'await', 
                    'try', 'catch', 'throw', 'switch', 'case', 'break', 'default',
                    'typeof', 'instanceof', 'void', 'delete', 'in', 'of', 'export',
                    'import', 'from', 'extends', 'super', 'static', 'get', 'set',
                    'true', 'false', 'null', 'undefined', 'typeof', 'instanceof'
                ];
                
                keywords.forEach(keyword => {
                    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
                    html = html.replace(regex, `<span class="keyword">${keyword}</span>`);
                });
                
                // تلوين النصوص بين علامات التنصيص
                html = html.replace(/(".*?"|'.*?')/g, match => {
                    return `<span class="string">${match}</span>`;
                });
                
                // تلوين دوال شائعة
                const functions = [
                    'console.log', 'console.error', 'console.warn', 'console.info',
                    'document.querySelector', 'document.getElementById', 'document.createElement',
                    'document.querySelectorAll', 'fetch', 'JSON.parse', 'JSON.stringify',
                    'localStorage.setItem', 'localStorage.getItem', 'addEventListener',
                    'removeEventListener', 'appendChild', 'remove', 'classList.add',
                    'classList.remove', 'classList.toggle', 'classList.contains',
                    'textContent', 'innerHTML', 'setAttribute', 'getAttribute'
                ];
                
                functions.forEach(func => {
                    const regex = new RegExp(`\\b${func}\\b`, 'g');
                    html = html.replace(regex, `<span class="function">${func}</span>`);
                });
                
                // تلوين خصائص CSS
                const cssProperties = [
                    'width', 'height', 'padding', 'margin', 'border', 'background',
                    'color', 'font-size', 'display', 'position', 'top', 'left',
                    'right', 'bottom', 'z-index', 'flex', 'grid', 'gap', 'box-sizing',
                    'border-radius', 'box-shadow', 'opacity', 'transform', 'transition'
                ];
                
                cssProperties.forEach(prop => {
                    const regex = new RegExp(`\\b${prop}\\b`, 'g');
                    html = html.replace(regex, `<span class="property">${prop}</span>`);
                });
                
                block.innerHTML = html;
            });
        }

        loadLastLesson() {
            const saved = localStorage.getItem('lastLesson');
            if (saved) {
                try {
                    const { chapterId, lessonId } = JSON.parse(saved);
                    const chapter = this.chapters.find(c => c.id === chapterId);
                    if (chapter && chapter.lessons.find(l => l.id === lessonId)) {
                        this.loadLesson(chapterId, lessonId);
                        return;
                    }
                } catch (e) {}
            }
            
            // تحميل أول درس
            if (this.chapters.length > 0 && this.chapters[0].lessons.length > 0) {
                this.loadLesson(this.chapters[0].id, this.chapters[0].lessons[0].id);
            }
        }
    }

    // ========================================
    // تهيئة التطبيق
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        // جمع الفصول من الملفات المنفصلة
        const chapters = [];
        if (typeof chapter1 !== 'undefined') chapters.push(chapter1);
        if (typeof chapter2 !== 'undefined') chapters.push(chapter2);
        if (typeof chapter3 !== 'undefined') chapters.push(chapter3);
        if (typeof chapter4 !== 'undefined') chapters.push(chapter4);
        if (typeof chapter5 !== 'undefined') chapters.push(chapter5);
        
        if (chapters.length === 0) {
            document.getElementById('contentRenderer').innerHTML = `
                <div style="text-align:center;padding:3rem;">
                    <h2 style="color:var(--gold);">⚠️ لم يتم تحميل الفصول</h2>
                    <p>تأكد من وجود ملفات chapter1.js إلى chapter5.js</p>
                </div>
            `;
            return;
        }
        
        // تهيئة المديرين
        const themeManager = new ThemeManager();
        const fontManager = new FontManager();
        const contrastManager = new ContrastManager();
        const speechEngine = new SpeechEngine();
        const contentManager = new ContentManager(chapters);
        
        console.log('🚀 أكاديمية الكومندا جاهزة!');
        console.log(`📚 ${chapters.length} فصول`);
        console.log(`📖 ${chapters.reduce((acc, ch) => acc + (ch.lessons ? ch.lessons.length : 0), 0)} درس`);
        console.log('♿ دعم كامل لإمكانية الوصول');
        console.log('🔊 محرك القراءة الصوتية مفعل');
        console.log('💾 تفضيلات المستخدم محفوظة');
    });

})();
