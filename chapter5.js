const chapter5 = {
    id: 'ch5',
    title: 'المشروع العملي النهائي - تطبيق إدارة المهام',
    description: 'تطبيق كل ما تعلمته في مشروع واحد متكامل خطوة بخطوة',
    lessons: [
        {
            id: '5-1',
            title: 'التخطيط للمشروع - تحديد المتطلبات والهيكل',
            content: `
                <h3>التخطيط للمشروع - أساس النجاح</h3>
                <p>قبل كتابة أي كود، يجب التخطيط للمشروع بشكل كامل. في هذا الدرس سنحدد متطلبات مشروع إدارة المهام ونصمم هيكله.</p>
                
                <h4>فكرة المشروع</h4>
                <p>سنقوم ببناء تطبيق إدارة مهام متكامل (Task Manager) يسمح للمستخدم بـ:</p>
                <ul>
                    <li>إضافة مهام جديدة مع عنوان ووصف وتاريخ استحقاق وأولوية</li>
                    <li>عرض المهام في قائمة منظمة</li>
                    <li>تغيير حالة المهمة (معلقة، قيد التنفيذ، مكتملة)</li>
                    <li>حذف المهام</li>
                    <li>تصفية المهام حسب الحالة</li>
                    <li>البحث عن المهام</li>
                    <li>حفظ المهام في LocalStorage</li>
                    <li>التبديل بين الثيم الداكن والفاتح</li>
                    <li>دعم إمكانية الوصول (تكبير الخط، تباين عالي، قراءة صوتية)</li>
                    <li>تصميم متجاوب مع جميع الأجهزة</li>
                </ul>
                
                <h4>هيكل المشروع</h4>
                <div class="code-block">
📁 مشروع-إدارة-المهام/
├── 📄 index.html      (الهيكل الرئيسي)
├── 📄 style.css       (التنسيقات والثيمات)
├── 📄 app.js          (منطق التطبيق)
├── 📄 chapter1.js     (فصول التعلم)
├── 📄 chapter2.js
├── 📄 chapter3.js
├── 📄 chapter4.js
└── 📄 chapter5.js     (هذا الملف)
                </div>
                
                <h4>هيكل واجهة المستخدم</h4>
                <ul>
                    <li><strong>شريط إمكانية الوصول:</strong> في أعلى الصفحة للتحكم بالخط والتباين والقراءة</li>
                    <li><strong>الهيدر:</strong> يحتوي على شعار التطبيق وإحصائيات سريعة</li>
                    <li><strong>شريط التحكم:</strong> زر إضافة مهمة، فلتر المهام، بحث</li>
                    <li><strong>منطقة المهام:</strong> عرض المهام في بطاقات منظمة</li>
                    <li><strong>الفوتر:</strong> معلومات حقوق النشر</li>
                </ul>
                
                <div class="note-box">
                    <strong>📋 قائمة مهام المشروع:</strong>
                    <ul>
                        <li>✅ تصميم هيكل HTML</li>
                        <li>✅ تنسيق CSS مع ثيمات داكن/فاتح</li>
                        <li>✅ برمجة منطق إدارة المهام</li>
                        <li>✅ ربط DOM بالأحداث</li>
                        <li>✅ حفظ البيانات في LocalStorage</li>
                        <li>✅ إضافة إمكانية الوصول</li>
                        <li>✅ اختبار وتحسين الأداء</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>📝 نموذج بيانات المهمة:</strong>
                    <div class="code-block">
{
    id: 1234567890,           // معرف فريد
    title: "تعلم JavaScript",  // عنوان المهمة
    description: "دراسة الفصل الرابع", // وصف المهمة
    status: "pending",         // الحالة: pending, progress, completed
    priority: "high",          // الأولوية: high, medium, low
    createdAt: "2026-01-15T10:30:00.000Z", // تاريخ الإنشاء
    dueDate: "2026-01-20",     // تاريخ الاستحقاق
    tags: ["برمجة", "مهم"]     // وسم (اختياري)
}
                    </div>
                </div>
            `
        },
        {
            id: '5-2',
            title: 'بناء هيكل HTML - الخطوة الأولى',
            content: `
                <h3>بناء الهيكل الأساسي باستخدام HTML</h3>
                <p>في هذا الدرس سنبني الهيكل الكامل لتطبيق إدارة المهام باستخدام HTML5 الدلالي.</p>
                
                <h4>الهيكل الكامل</h4>
                <div class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="ar" dir="rtl"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;مدير المهام - أكاديمية الكومندا&lt;/title&gt;
    &lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- شريط إمكانية الوصول --&gt;
    &lt;div class="accessibility-bar" id="accessBar"&gt;
        &lt;button id="fontDec"&gt;أ-&lt;/button&gt;
        &lt;span id="fontSizeDisplay"&gt;16&lt;/span&gt;
        &lt;button id="fontInc"&gt;أ+&lt;/button&gt;
        &lt;button id="themeToggle"&gt;🌙&lt;/button&gt;
        &lt;button id="contrastToggle"&gt;♿&lt;/button&gt;
        &lt;button id="speakBtn"&gt;🔊&lt;/button&gt;
    &lt;/div&gt;
    
    &lt;!-- الهيدر --&gt;
    &lt;header class="main-header"&gt;
        &lt;div class="header-content"&gt;
            &lt;h1&gt;📋 مدير المهام&lt;/h1&gt;
            &lt;div class="header-stats"&gt;
                &lt;div class="stat"&gt;
                    &lt;span id="totalTasks"&gt;0&lt;/span&gt;
                    &lt;label&gt;الإجمالي&lt;/label&gt;
                &lt;/div&gt;
                &lt;div class="stat"&gt;
                    &lt;span id="completedTasks"&gt;0&lt;/span&gt;
                    &lt;label&gt;مكتملة&lt;/label&gt;
                &lt;/div&gt;
                &lt;div class="stat"&gt;
                    &lt;span id="pendingTasks"&gt;0&lt;/span&gt;
                    &lt;label&gt;معلقة&lt;/label&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/header&gt;
    
    &lt;!-- المحتوى الرئيسي --&gt;
    &lt;main class="main-content"&gt;
        &lt;!-- شريط التحكم --&gt;
        &lt;section class="control-bar"&gt;
            &lt;button id="showAddTask" class="btn-primary"&gt;➕ إضافة مهمة&lt;/button&gt;
            &lt;div class="filters"&gt;
                &lt;button class="filter-btn active" data-filter="all"&gt;الكل&lt;/button&gt;
                &lt;button class="filter-btn" data-filter="pending"&gt;معلقة&lt;/button&gt;
                &lt;button class="filter-btn" data-filter="progress"&gt;قيد التنفيذ&lt;/button&gt;
                &lt;button class="filter-btn" data-filter="completed"&gt;مكتملة&lt;/button&gt;
            &lt;/div&gt;
            &lt;input type="text" id="searchInput" placeholder="🔍 بحث عن مهمة..."&gt;
        &lt;/section&gt;
        
        &lt;!-- نافذة إضافة مهمة (مودال) --&gt;
        &lt;div class="modal" id="taskModal"&gt;
            &lt;div class="modal-content"&gt;
                &lt;span class="close" id="closeModal"&gt;&times;&lt;/span&gt;
                &lt;h2&gt;إضافة مهمة جديدة&lt;/h2&gt;
                &lt;form id="taskForm"&gt;
                    &lt;input type="text" id="taskTitle" placeholder="عنوان المهمة" required&gt;
                    &lt;textarea id="taskDesc" placeholder="وصف المهمة (اختياري)"&gt;&lt;/textarea&gt;
                    &lt;select id="taskPriority"&gt;
                        &lt;option value="high"&gt;🔴 عالية&lt;/option&gt;
                        &lt;option value="medium" selected&gt;🟡 متوسطة&lt;/option&gt;
                        &lt;option value="low"&gt;🟢 منخفضة&lt;/option&gt;
                    &lt;/select&gt;
                    &lt;input type="date" id="taskDueDate"&gt;
                    &lt;button type="submit" class="btn-primary"&gt;💾 حفظ المهمة&lt;/button&gt;
                &lt;/form&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;!-- قائمة المهام --&gt;
        &lt;section class="tasks-container" id="tasksContainer"&gt;
            &lt;div class="tasks-grid" id="tasksGrid"&gt;
                &lt;!-- سيتم عرض المهام هنا بواسطة JavaScript --&gt;
            &lt;/div&gt;
        &lt;/section&gt;
    &lt;/main&gt;
    
    &lt;footer class="main-footer"&gt;
        &lt;p&gt;© 2026 أكاديمية الكومندا - مشروع إدارة المهام&lt;/p&gt;
    &lt;/footer&gt;
    
    &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                </div>
                
                <h4>شرح العناصر الرئيسية</h4>
                <ul>
                    <li><strong>شريط إمكانية الوصول:</strong> أدوات التحكم في حجم الخط والثيم والتباين والقراءة</li>
                    <li><strong>الهيدر:</strong> يحتوي على عنوان التطبيق وإحصائيات المهام</li>
                    <li><strong>شريط التحكم:</strong> أزرار التصفية والبحث وإضافة المهام</li>
                    <li><strong>نافذة المودال:</strong> نموذج لإضافة مهمة جديدة</li>
                    <li><strong>شبكة المهام:</strong> مكان عرض بطاقات المهام</li>
                </ul>
                
                <div class="note-box">
                    <strong>⭐ ملاحظة مهمة:</strong>
                    <p>استخدمنا عناصر دلالية مثل <code>header</code>, <code>main</code>, <code>section</code>, <code>footer</code> لتحسين SEO وإمكانية الوصول.</p>
                </div>
            `
        },
        {
            id: '5-3',
            title: 'تصميم CSS - الثيمات والتنسيقات',
            content: `
                <h3>تصميم واجهة المستخدم باستخدام CSS</h3>
                <p>في هذا الدرس سنقوم بتنسيق التطبيق باستخدام CSS مع دعم الثيم الداكن والفاتح والتباين العالي.</p>
                
                <h4>المتغيرات والثيمات</h4>
                <div class="code-block">
/* ========================================
   الثيمات والمتغيرات
   ======================================== */

:root {
    /* الثيم الداكن (افتراضي) */
    --bg-body: #0a0e17;
    --bg-surface: #111927;
    --bg-card: #1a2332;
    --bg-hover: #243044;
    --bg-input: #0d1420;
    
    --text-primary: #e8edf5;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --text-inverse: #0a0e17;
    
    --border-color: #2a3a5e;
    --border-light: #1e2d4a;
    
    --gold: #fbbf24;
    --gold-dark: #d97706;
    --gold-glow: rgba(251, 191, 36, 0.12);
    
    --status-pending: #facc15;
    --status-progress: #3b82f6;
    --status-completed: #22c55e;
    
    --shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.2);
    
    --radius: 12px;
    --radius-lg: 16px;
    --transition: all 0.3s ease;
}

/* الثيم الفاتح */
[data-theme="light"] {
    --bg-body: #f0f4f8;
    --bg-surface: #ffffff;
    --bg-card: #ffffff;
    --bg-hover: #e8edf5;
    --bg-input: #f0f4f8;
    
    --text-primary: #0a0e17;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --text-inverse: #f8fafc;
    
    --border-color: #cbd5e1;
    --border-light: #e2e8f0;
    
    --gold: #d97706;
    --gold-dark: #b45309;
    --gold-glow: rgba(217, 119, 6, 0.08);
    
    --shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* التباين العالي */
body.high-contrast {
    --bg-body: #000000 !important;
    --bg-surface: #0a0a0a !important;
    --bg-card: #1a1a1a !important;
    --bg-hover: #2a2a2a !important;
    --bg-input: #0a0a0a !important;
    
    --text-primary: #ffff00 !important;
    --text-secondary: #ffff00 !important;
    --text-muted: #ffff00 !important;
    --text-inverse: #000000 !important;
    
    --border-color: #ffff00 !important;
    --border-light: #ffff00 !important;
    
    --gold: #ffff00 !important;
    --gold-dark: #ffff00 !important;
    --gold-glow: rgba(255, 255, 0, 0.15) !important;
    
    --status-pending: #ffff00 !important;
    --status-progress: #00ffff !important;
    --status-completed: #00ff00 !important;
}
                </div>
                
                <h4>تنسيق بطاقة المهمة</h4>
                <div class="code-block">
/* ========================================
   بطاقة المهمة
   ======================================== */

.task-card {
    background: var(--bg-card);
    border-radius: var(--radius);
    padding: 1rem 1.2rem;
    border: 1px solid var(--border-light);
    border-right: 4px solid var(--status-pending);
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
    position: relative;
    animation: slideIn 0.3s ease-out;
}

.task-card:hover {
    transform: translateX(-4px);
    box-shadow: var(--shadow);
    border-color: var(--gold);
}

/* حالات المهمة */
.task-card.status-pending {
    border-right-color: var(--status-pending);
}

.task-card.status-progress {
    border-right-color: var(--status-progress);
}

.task-card.status-completed {
    border-right-color: var(--status-completed);
    opacity: 0.7;
}

.task-card.status-completed .task-title {
    text-decoration: line-through;
    color: var(--text-muted);
}

/* عناصر البطاقة */
.task-card .task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;
}

.task-card .task-title {
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.task-card .task-priority {
    font-size: 0.7rem;
    padding: 0.15rem 0.5rem;
    border-radius: 30px;
    background: var(--bg-hover);
    color: var(--text-secondary);
    white-space: nowrap;
}

.task-card .task-priority.high {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
}

.task-card .task-priority.medium {
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.1);
}

.task-card .task-priority.low {
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
}

.task-card .task-description {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0.3rem 0 0.5rem 0;
    line-height: 1.6;
}

.task-card .task-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.6rem;
    padding-top: 0.6rem;
    border-top: 1px solid var(--border-light);
}

.task-card .task-date {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.task-card .task-actions {
    display: flex;
    gap: 0.4rem;
}

.task-card .task-actions button {
    background: transparent;
    border: none;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: var(--transition);
    color: var(--text-secondary);
}

.task-card .task-actions .complete-btn:hover {
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
}

.task-card .task-actions .delete-btn:hover {
    color: #ef4444;
    background: rgba(239, 68, 68, 0.1);
}
                </div>
                
                <h4>تنسيق المودال</h4>
                <div class="code-block">
/* ========================================
   نافذة المودال
   ======================================== */

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2000;
    backdrop-filter: blur(4px);
    align-items: center;
    justify-content: center;
}

.modal.open {
    display: flex;
}

.modal-content {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-lg);
    animation: modalIn 0.3s ease-out;
}

@keyframes modalIn {
    from {
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-content .close {
    float: left;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-muted);
    cursor: pointer;
    transition: var(--transition);
}

.modal-content .close:hover {
    color: var(--text-primary);
    transform: rotate(90deg);
}

.modal-content h2 {
    color: var(--gold);
    margin-bottom: 1rem;
    font-size: 1.4rem;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
    padding: 0.6rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.95rem;
    transition: var(--transition);
}

.modal-content input:focus,
.modal-content textarea:focus,
.modal-content select:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px var(--gold-glow);
}

.modal-content textarea {
    resize: vertical;
    min-height: 80px;
}
                </div>
                
                <h4>التجاوب مع الشاشات</h4>
                <div class="code-block">
/* ========================================
   الاستجابة للشاشات
   ======================================== */

@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
    }
    
    .header-stats {
        justify-content: space-around;
    }
    
    .control-bar {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .filters {
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .tasks-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        padding: 1.2rem;
        margin: 0.5rem;
    }
}

@media (max-width: 480px) {
    .task-card .task-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;
    }
    
    .task-card .task-footer {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
    
    .task-card .task-actions {
        width: 100%;
        justify-content: flex-start;
    }
}
                </div>
            `
        },
        {
            id: '5-4',
            title: 'برمجة منطق التطبيق - إدارة المهام',
            content: `
                <h3>برمجة منطق إدارة المهام باستخدام JavaScript</h3>
                <p>في هذا الدرس سنقوم ببرمجة الجزء الأساسي من التطبيق: إدارة المهام (إضافة، حذف، تحديث، عرض).</p>
                
                <h4>فئة إدارة المهام</h4>
                <div class="code-block">
// ========================================
// فئة إدارة المهام
// ========================================

class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.loadTasks();
    }
    
    // إضافة مهمة جديدة
    addTask(taskData) {
        const task = {
            id: Date.now(),
            title: taskData.title.trim(),
            description: taskData.description ? taskData.description.trim() : '',
            status: 'pending',
            priority: taskData.priority || 'medium',
            createdAt: new Date().toISOString(),
            dueDate: taskData.dueDate || null,
            tags: taskData.tags || []
        };
        
        // التحقق من صحة البيانات
        if (!task.title || task.title.length < 3) {
            throw new Error('عنوان المهمة يجب أن يكون 3 أحرف على الأقل');
        }
        
        this.tasks.unshift(task); // إضافة في البداية
        this.saveTasks();
        return task;
    }
    
    // حذف مهمة
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveTasks();
            return true;
        }
        return false;
    }
    
    // تحديث مهمة
    updateTask(id, updates) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, updates);
            this.saveTasks();
            return true;
        }
        return false;
    }
    
    // تغيير حالة المهمة
    changeStatus(id, newStatus) {
        const validStatuses = ['pending', 'progress', 'completed'];
        if (!validStatuses.includes(newStatus)) {
            throw new Error('حالة غير صالحة');
        }
        return this.updateTask(id, { status: newStatus });
    }
    
    // الحصول على جميع المهام
    getAllTasks() {
        return [...this.tasks];
    }
    
    // تصفية المهام حسب الحالة
    getTasksByStatus(status) {
        if (status === 'all') return this.getAllTasks();
        return this.tasks.filter(task => task.status === status);
    }
    
    // البحث عن المهام
    searchTasks(query) {
        if (!query || query.trim() === '') {
            return this.getTasksByStatus(this.currentFilter);
        }
        
        const searchTerm = query.toLowerCase().trim();
        return this.tasks.filter(task => {
            return task.title.toLowerCase().includes(searchTerm) ||
                   task.description.toLowerCase().includes(searchTerm) ||
                   (task.tags && task.tags.some(tag => tag.toLowerCase().includes(searchTerm)));
        });
    }
    
    // الحصول على إحصائيات
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.status === 'completed').length;
        const pending = this.tasks.filter(t => t.status === 'pending').length;
        const progress = this.tasks.filter(t => t.status === 'progress').length;
        
        return {
            total,
            completed,
            pending,
            progress,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
    
    // حفظ في LocalStorage
    saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        } catch (error) {
            console.error('خطأ في حفظ المهام:', error);
        }
    }
    
    // تحميل من LocalStorage
    loadTasks() {
        try {
            const saved = localStorage.getItem('tasks');
            if (saved) {
                this.tasks = JSON.parse(saved);
            }
        } catch (error) {
            console.error('خطأ في تحميل المهام:', error);
            this.tasks = [];
        }
    }
    
    // تصدير المهام
    exportTasks() {
        return JSON.stringify(this.tasks, null, 2);
    }
    
    // استيراد المهام
    importTasks(data) {
        try {
            const tasks = JSON.parse(data);
            if (!Array.isArray(tasks)) {
                throw new Error('البيانات غير صالحة');
            }
            this.tasks = tasks;
            this.saveTasks();
            return true;
        } catch (error) {
            throw new Error('خطأ في استيراد المهام: ' + error.message);
        }
    }
    
    // حذف جميع المهام
    clearAllTasks() {
        if (this.tasks.length === 0) return;
        this.tasks = [];
        this.saveTasks();
    }
}
                </div>
                
                <h4>تهيئة مدير المهام</h4>
                <div class="code-block">
// ========================================
// تهيئة التطبيق
// ========================================

const taskManager = new TaskManager();

// عناصر DOM
const tasksGrid = document.getElementById('tasksGrid');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const pendingTasksEl = document.getElementById('pendingTasks');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// عرض المهام في DOM
function renderTasks(tasks) {
    if (!tasks) {
        tasks = taskManager.getTasksByStatus(taskManager.currentFilter);
    }
    
    if (tasks.length === 0) {
        tasksGrid.innerHTML = \`
            <div class="empty-state">
                <span>📭</span>
                <h3>لا توجد مهام</h3>
                <p>اضغط على "إضافة مهمة" لإنشاء أول مهمة لك</p>
            </div>
        \`;
        return;
    }
    
    tasksGrid.innerHTML = tasks.map(task => \`
        <div class="task-card status-\${task.status}" data-id="\${task.id}">
            <div class="task-header">
                <h3 class="task-title">\${task.title}</h3>
                <span class="task-priority \${task.priority}">\${getPriorityLabel(task.priority)}</span>
            </div>
            \${task.description ? \`<p class="task-description">\${task.description}</p>\` : ''}
            <div class="task-footer">
                <span class="task-date">📅 \${formatDate(task.createdAt)}</span>
                <div class="task-actions">
                    \${task.status !== 'completed' ? \`
                        <button class="complete-btn" onclick="markComplete(\${task.id})">✅</button>
                    \` : ''}
                    <button class="delete-btn" onclick="deleteTask(\${task.id})">🗑️</button>
                </div>
            </div>
        </div>
    \`).join('');
}
                </div>
                
                <div class="note-box">
                    <strong>🎯 ملاحظات هامة:</strong>
                    <ul>
                        <li>استخدمنا <code>class</code> لتنظيم الكود وجعله أكثر احترافية</li>
                        <li>تم حفظ البيانات في <code>LocalStorage</code> لاستمراريتها</li>
                        <li>جميع الدوال لها معاملات افتراضية للحماية من الأخطاء</li>
                        <li>تم استخدام <code>try...catch</code> للتعامل مع الأخطاء</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-5',
            title: 'ربط DOM والأحداث - تفاعل المستخدم',
            content: `
                <h3>ربط DOM والأحداث لتفاعل المستخدم</h3>
                <p>في هذا الدرس سنقوم بربط عناصر DOM مع الأحداث لجعل التطبيق تفاعلياً.</p>
                
                <h4>وظائف العرض والتحكم</h4>
                <div class="code-block">
// ========================================
// دوال العرض والتحكم
// ========================================

// الحصول على تسمية الأولوية
function getPriorityLabel(priority) {
    const labels = {
        high: '🔴 عالية',
        medium: '🟡 متوسطة',
        low: '🟢 منخفضة'
    };
    return labels[priority] || priority;
}

// تنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// تحديث الإحصائيات
function updateStats() {
    const stats = taskManager.getStats();
    totalTasksEl.textContent = stats.total;
    completedTasksEl.textContent = stats.completed;
    pendingTasksEl.textContent = stats.pending;
}

// عرض المهام حسب الفلتر
function renderFilteredTasks() {
    const tasks = taskManager.getTasksByStatus(taskManager.currentFilter);
    renderTasks(tasks);
}

// إكمال مهمة (وظيفة عامة)
window.markComplete = function(id) {
    taskManager.changeStatus(id, 'completed');
    renderFilteredTasks();
    updateStats();
};

// حذف مهمة (وظيفة عامة)
window.deleteTask = function(id) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        taskManager.deleteTask(id);
        renderFilteredTasks();
        updateStats();
    }
};
                </div>
                
                <h4>ربط الأحداث</h4>
                <div class="code-block">
// ========================================
// ربط الأحداث
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // العرض الأولي
    renderFilteredTasks();
    updateStats();
    
    // ======== إضافة مهمة ========
    const modal = document.getElementById('taskModal');
    const showAddBtn = document.getElementById('showAddTask');
    const closeModal = document.getElementById('closeModal');
    const taskForm = document.getElementById('taskForm');
    
    function openModal() {
        modal.classList.add('open');
        document.getElementById('taskTitle').focus();
    }
    
    function closeModalFn() {
        modal.classList.remove('open');
        taskForm.reset();
    }
    
    showAddBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFn);
    modal.addEventListener('click', function(e) {
        if (e.target === this) closeModalFn();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModalFn();
    });
    
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('taskTitle');
        const description = document.getElementById('taskDesc');
        const priority = document.getElementById('taskPriority');
        const dueDate = document.getElementById('taskDueDate');
        
        try {
            taskManager.addTask({
                title: title.value,
                description: description.value,
                priority: priority.value,
                dueDate: dueDate.value || null
            });
            
            renderFilteredTasks();
            updateStats();
            closeModalFn();
            
            // رسالة نجاح
            showNotification('✅ تم إضافة المهمة بنجاح!');
            
        } catch (error) {
            alert(error.message);
        }
    });
    
    // ======== تصفية المهام ========
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة التفعيل من جميع الأزرار
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            taskManager.currentFilter = this.dataset.filter;
            renderFilteredTasks();
        });
    });
    
    // ======== البحث ========
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = this.value;
            if (query.trim() === '') {
                renderFilteredTasks();
            } else {
                const results = taskManager.searchTasks(query);
                renderTasks(results);
            }
        }, 300);
    });
    
    // ======== شريط إمكانية الوصول ========
    setupAccessibility();
});

// ======== إشعارات ========
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للأحداث:</strong>
                    <ul>
                        <li>استخدم <code>DOMContentLoaded</code> لضمان تحميل DOM قبل تنفيذ الكود</li>
                        <li>استخدم <code>debounce</code> للبحث لتقليل عدد العمليات</li>
                        <li>أضف إشعارات لتأكيد إجراءات المستخدم</li>
                        <li>تأكد من إغلاق المودال عند الضغط على Escape</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-6',
            title: 'إمكانية الوصول - تحسين تجربة الجميع',
            content: `
                <h3>إضافة ميزات إمكانية الوصول</h3>
                <p>في هذا الدرس سنضيف ميزات إمكانية الوصول لتجعل التطبيق usable للجميع.</p>
                
                <h4>وظائف إمكانية الوصول</h4>
                <div class="code-block">
// ========================================
// إعدادات إمكانية الوصول
// ========================================

function setupAccessibility() {
    // ======== تكبير الخط ========
    const fontInc = document.getElementById('fontInc');
    const fontDec = document.getElementById('fontDec');
    const fontSizeDisplay = document.getElementById('fontSizeDisplay');
    let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;
    
    function applyFontSize() {
        document.documentElement.style.fontSize = fontSize + 'px';
        fontSizeDisplay.textContent = fontSize;
        localStorage.setItem('fontSize', fontSize);
    }
    
    fontInc.addEventListener('click', function() {
        if (fontSize < 32) {
            fontSize += 1;
            applyFontSize();
        }
    });
    
    fontDec.addEventListener('click', function() {
        if (fontSize > 12) {
            fontSize -= 1;
            applyFontSize();
        }
    });
    
    applyFontSize();
    
    // ======== تبديل الثيم ========
    const themeToggle = document.getElementById('themeToggle');
    let isDark = localStorage.getItem('theme') !== 'light';
    
    function applyTheme() {
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.textContent = '☀️';
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    
    themeToggle.addEventListener('click', function() {
        isDark = !isDark;
        applyTheme();
    });
    
    applyTheme();
    
    // ======== التباين العالي ========
    const contrastToggle = document.getElementById('contrastToggle');
    let isHighContrast = localStorage.getItem('highContrast') === 'true';
    
    function applyContrast() {
        document.body.classList.toggle('high-contrast', isHighContrast);
        localStorage.setItem('highContrast', isHighContrast);
    }
    
    contrastToggle.addEventListener('click', function() {
        isHighContrast = !isHighContrast;
        applyContrast();
    });
    
    applyContrast();
    
    // ======== القراءة الصوتية ========
    const speakBtn = document.getElementById('speakBtn');
    let isSpeaking = false;
    let speechUtterance = null;
    
    speakBtn.addEventListener('click', function() {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            speakBtn.textContent = '🔊';
            return;
        }
        
        if (!('speechSynthesis' in window)) {
            alert('المتصفح لا يدعم القراءة الصوتية');
            return;
        }
        
        // جمع النص للقراءة
        const tasks = taskManager.getAllTasks();
        if (tasks.length === 0) {
            alert('لا توجد مهام للقراءة');
            return;
        }
        
        let text = 'لديك ' + tasks.length + ' مهام. ';
        const pending = tasks.filter(t => t.status === 'pending');
        const completed = tasks.filter(t => t.status === 'completed');
        const progress = tasks.filter(t => t.status === 'progress');
        
        if (pending.length > 0) text += pending.length + ' مهام معلقة. ';
        if (progress.length > 0) text += progress.length + ' مهام قيد التنفيذ. ';
        if (completed.length > 0) text += completed.length + ' مهام مكتملة. ';
        
        text += 'المهام: ';
        tasks.slice(0, 5).forEach((task, i) => {
            text += (i + 1) + '. ' + task.title + '. ';
        });
        if (tasks.length > 5) text += 'وغيرها. ';
        
        speechUtterance = new SpeechSynthesisUtterance(text);
        speechUtterance.lang = 'ar-SA';
        speechUtterance.rate = 0.9;
        speechUtterance.pitch = 1;
        
        speechUtterance.onstart = function() {
            isSpeaking = true;
            speakBtn.textContent = '⏹️';
        };
        
        speechUtterance.onend = function() {
            isSpeaking = false;
            speakBtn.textContent = '🔊';
        };
        
        speechUtterance.onerror = function() {
            isSpeaking = false;
            speakBtn.textContent = '🔊';
        };
        
        window.speechSynthesis.speak(speechUtterance);
    });
}
                </div>
                
                <h4>إضافة تنسيقات للإشعارات</h4>
                <div class="code-block">
/* ========================================
   إشعارات
   ======================================== */

.notification {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--bg-card);
    color: var(--text-primary);
    padding: 0.8rem 1.5rem;
    border-radius: var(--radius);
    border: 1px solid var(--gold);
    box-shadow: var(--shadow-lg);
    z-index: 3000;
    opacity: 0;
    transition: all 0.3s ease;
    font-weight: 500;
}

.notification.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}

/* ========================================
   حالة فارغة
   ======================================== */

.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-secondary);
}

.empty-state span {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
}

.empty-state h3 {
    font-size: 1.3rem;
    color: var(--text-primary);
    margin-bottom: 0.3rem;
}

.empty-state p {
    font-size: 0.95rem;
}
                </div>
                
                <div class="note-box">
                    <strong>♿ إمكانية الوصول مهمة للجميع:</strong>
                    <ul>
                        <li>حوالي 15% من سكان العالم لديهم إعاقة ما</li>
                        <li>إمكانية الوصول تحسن تجربة الجميع</li>
                        <li>بعض ميزات الوصول مطلوبة قانونياً في بعض الدول</li>
                        <li>التطبيقات المتاحة للجميع تحصل على تقييمات أفضل</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-7',
            title: 'تحسين الأداء والاختبار',
            content: `
                <h3>تحسين الأداء واختبار التطبيق</h3>
                <p>في هذا الدرس سنقوم بتحسين أداء التطبيق واختباره للتأكد من عمله بشكل صحيح.</p>
                
                <h4>تحسينات الأداء</h4>
                <div class="code-block">
// ========================================
// تحسينات الأداء
// ========================================

// 1. استخدام debounce للبحث
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 2. تجنب التلاعب المباشر بـ DOM في الحلقات
function renderTasksOptimized(tasks) {
    const fragment = document.createDocumentFragment();
    
    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = \`task-card status-\${task.status}\`;
        card.dataset.id = task.id;
        card.innerHTML = \`
            <div class="task-header">
                <h3 class="task-title">\${task.title}</h3>
                <span class="task-priority \${task.priority}">\${getPriorityLabel(task.priority)}</span>
            </div>
            \${task.description ? \`<p class="task-description">\${task.description}</p>\` : ''}
            <div class="task-footer">
                <span class="task-date">📅 \${formatDate(task.createdAt)}</span>
                <div class="task-actions">
                    \${task.status !== 'completed' ? \`
                        <button class="complete-btn" onclick="markComplete(\${task.id})">✅</button>
                    \` : ''}
                    <button class="delete-btn" onclick="deleteTask(\${task.id})">🗑️</button>
                </div>
            </div>
        \`;
        fragment.appendChild(card);
    });
    
    tasksGrid.innerHTML = '';
    tasksGrid.appendChild(fragment);
}

// 3. تخزين مراجع العناصر
const elements = {
    tasksGrid: document.getElementById('tasksGrid'),
    totalTasks: document.getElementById('totalTasks'),
    completedTasks: document.getElementById('completedTasks'),
    pendingTasks: document.getElementById('pendingTasks'),
    searchInput: document.getElementById('searchInput')
};

// 4. استخدام requestAnimationFrame للحركات
function animateTaskAddition(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-20px)';
    
    requestAnimationFrame(() => {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
    });
}
                </div>
                
                <h4>اختبار التطبيق</h4>
                <div class="code-block">
// ========================================
// اختبار التطبيق
// ========================================

// 1. اختبار إضافة مهمة
function testAddTask() {
    const testTask = {
        title: 'مهمة اختبار',
        description: 'هذه مهمة اختبارية',
        priority: 'high'
    };
    
    const result = taskManager.addTask(testTask);
    console.assert(result.title === 'مهمة اختبار', '❌ فشل اختبار إضافة المهمة');
    console.log('✅ اختبار إضافة المهمة نجح');
}

// 2. اختبار حذف مهمة
function testDeleteTask() {
    const task = taskManager.addTask({ title: 'مهمة للحذف' });
    const result = taskManager.deleteTask(task.id);
    console.assert(result === true, '❌ فشل اختبار حذف المهمة');
    console.log('✅ اختبار حذف المهمة نجح');
}

// 3. اختبار تغيير الحالة
function testChangeStatus() {
    const task = taskManager.addTask({ title: 'مهمة لتغيير الحالة' });
    const result = taskManager.changeStatus(task.id, 'completed');
    console.assert(result === true, '❌ فشل اختبار تغيير الحالة');
    const updated = taskManager.tasks.find(t => t.id === task.id);
    console.assert(updated.status === 'completed', '❌ فشل اختبار تغيير الحالة');
    console.log('✅ اختبار تغيير الحالة نجح');
}

// 4. اختبار البحث
function testSearch() {
    taskManager.addTask({ title: 'مهمة JavaScript' });
    taskManager.addTask({ title: 'مهمة CSS' });
    
    const results = taskManager.searchTasks('JavaScript');
    console.assert(results.length === 1, '❌ فشل اختبار البحث');
    console.log('✅ اختبار البحث نجح');
}

// 5. اختبار الإحصائيات
function testStats() {
    taskManager.clearAllTasks();
    taskManager.addTask({ title: 'مهمة 1' });
    taskManager.addTask({ title: 'مهمة 2' });
    const task3 = taskManager.addTask({ title: 'مهمة 3' });
    taskManager.changeStatus(task3.id, 'completed');
    
    const stats = taskManager.getStats();
    console.assert(stats.total === 3, '❌ فشل اختبار الإحصائيات (total)');
    console.assert(stats.completed === 1, '❌ فشل اختبار الإحصائيات (completed)');
    console.assert(stats.pending === 2, '❌ فشل اختبار الإحصائيات (pending)');
    console.log('✅ اختبار الإحصائيات نجح');
}

// تشغيل جميع الاختبارات
function runAllTests() {
    console.log('🧪 بدء تشغيل الاختبارات...');
    testAddTask();
    testDeleteTask();
    testChangeStatus();
    testSearch();
    testStats();
    console.log('🎉 جميع الاختبارات نجحت!');
}

// تشغيل الاختبارات في وضع التطوير
if (process.env.NODE_ENV === 'development') {
    runAllTests();
}
                </div>
                
                <div class="note-box">
                    <strong>📊 نصائح لتحسين الأداء:</strong>
                    <ul>
                        <li>استخدم <code>DocumentFragment</code> للإضافات المتعددة للـ DOM</li>
                        <li>استخدم <code>debounce</code> للأحداث المتكررة (بحث، تمرير)</li>
                        <li>خزّن مراجع العناصر لتجنب البحث المتكرر</li>
                        <li>استخدم <code>requestAnimationFrame</code> للحركات السلسة</li>
                        <li>اختبر التطبيق على أجهزة مختلفة</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-8',
            title: 'التعليمات النهائية والنشر',
            content: `
                <h3>التعليمات النهائية ونشر المشروع</h3>
                <p>في هذا الدرس الأخير سنقوم بمراجعة المشروع ونشره على الإنترنت.</p>
                
                <h4>مراجعة المشروع</h4>
                <ul>
                    <li>✅ جميع الميزات المطلوبة تعمل بشكل صحيح</li>
                    <li>✅ واجهة مستخدم جذابة ومتجاوبة</li>
                    <li>✅ دعم الثيم الداكن والفاتح</li>
                    <li>✅ دعم التباين العالي</li>
                    <li>✅ حفظ البيانات في LocalStorage</li>
                    <li>✅ إمكانية الوصول (تكبير الخط، قراءة صوتية)</li>
                    <li>✅ تحسين الأداء</li>
                </ul>
                
                <h4>نشر المشروع على GitHub Pages</h4>
                <div class="code-block">
# 1. إنشاء مستودع على GitHub
# 2. رفع الملفات
git init
git add .
git commit -m "إضافة مشروع إدارة المهام"
git remote add origin https://github.com/username/task-manager.git
git push -u origin main

# 3. تفعيل GitHub Pages
# اذهب إلى Settings → Pages → Source: main branch → Save

# 4. الموقع سيكون متاحاً على:
https://username.github.io/task-manager/
                </div>
                
                <h4>نشر على Netlify (أسهل)</h4>
                <div class="code-block">
# 1. اذهب إلى netlify.com
# 2. اسحب مجلد المشروع إلى الموقع
# 3. الموقع سينشر تلقائياً
# 4. يمكنك تغيير النطاق من الإعدادات
                </div>
                
                <h4>قائمة التحقق النهائية</h4>
                <ul>
                    <li>✅ تأكد من أن جميع الملفات في مجلد واحد</li>
                    <li>✅ اختبر الموقع على متصفحات مختلفة (Chrome, Firefox, Safari)</li>
                    <li>✅ اختبر على أجهزة مختلفة (كمبيوتر، تابلت، هاتف)</li>
                    <li>✅ تأكد من أن LocalStorage يعمل بشكل صحيح</li>
                    <li>✅ تحقق من عناوين الصور والروابط</li>
                    <li>✅ أضف تحليلات (اختياري)</li>
                </ul>
                
                <div class="example-box">
                    <strong>📝 هيكل الملفات النهائي:</strong>
                    <div class="code-block">
📁 task-manager/
├── 📄 index.html      (الهيكل الرئيسي)
├── 📄 style.css       (التنسيقات)
├── 📄 app.js          (منطق التطبيق)
├── 📄 chapter1.js     (فصول التعلم)
├── 📄 chapter2.js
├── 📄 chapter3.js
├── 📄 chapter4.js
├── 📄 chapter5.js
├── 📄 README.md       (شرح المشروع)
└── 📄 .gitignore      (لتجاهل الملفات غير المهمة)
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎉 تهانينا!</strong>
                    <p>لقد أكملت بناء مشروع إدارة المهام بالكامل! أنت الآن تمتلك:</p>
                    <ul>
                        <li>فهم عميق لـ HTML و CSS و JavaScript</li>
                        <li>مشروع كامل يمكن إضافته للسيرة الذاتية</li>
                        <li>خبرة في بناء تطبيقات تفاعلية</li>
                        <li>معرفة بإمكانية الوصول وتحسين الأداء</li>
                    </ul>
                    <p>🌟 استمر في التطوير وأضف ميزات جديدة بنفسك!</p>
                </div>
                
                <h4>أفكار لتطوير المشروع</h4>
                <ul>
                    <li>إضافة تصنيفات (Tags) للمهام</li>
                    <li>إضافة تواريخ استحقاق مع إشعارات</li>
                    <li>إضافة وضع السحب والإفلات لترتيب المهام</li>
                    <li>إضافة تصدير المهام إلى CSV أو PDF</li>
                    <li>إضافة مشاركة المهام مع الآخرين</li>
                    <li>إضافة مزامنة مع الخادم (Backend)</li>
                </ul>
            `
        }
    ]
};
