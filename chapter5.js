// ========================================
// دوال معاينة وتنزيل المشروع
// ========================================

// أكواد المشروع النهائي
const projectFiles = {
    'index.html': `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدير المهام - أكاديمية الكومندا</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="accessibility-bar" id="accessBar">
        <button id="fontDec">أ-</button>
        <span id="fontSizeDisplay">16</span>
        <button id="fontInc">أ+</button>
        <button id="themeToggle">🌙</button>
        <button id="contrastToggle">♿</button>
        <button id="speakBtn">🔊</button>
    </div>
    
    <header class="main-header">
        <div class="header-content">
            <h1>📋 مدير المهام</h1>
            <div class="header-stats">
                <div class="stat">
                    <span id="totalTasks">0</span>
                    <label>الإجمالي</label>
                </div>
                <div class="stat">
                    <span id="completedTasks">0</span>
                    <label>مكتملة</label>
                </div>
                <div class="stat">
                    <span id="pendingTasks">0</span>
                    <label>معلقة</label>
                </div>
            </div>
        </div>
    </header>
    
    <main class="main-content">
        <section class="control-bar">
            <button id="showAddTask" class="btn-primary">➕ إضافة مهمة</button>
            <div class="filters">
                <button class="filter-btn active" data-filter="all">الكل</button>
                <button class="filter-btn" data-filter="pending">معلقة</button>
                <button class="filter-btn" data-filter="progress">قيد التنفيذ</button>
                <button class="filter-btn" data-filter="completed">مكتملة</button>
            </div>
            <input type="text" id="searchInput" placeholder="🔍 بحث عن مهمة...">
        </section>
        
        <div class="modal" id="taskModal">
            <div class="modal-content">
                <span class="close" id="closeModal">&times;</span>
                <h2>إضافة مهمة جديدة</h2>
                <form id="taskForm">
                    <input type="text" id="taskTitle" placeholder="عنوان المهمة" required>
                    <textarea id="taskDesc" placeholder="وصف المهمة (اختياري)"></textarea>
                    <select id="taskPriority">
                        <option value="high">🔴 عالية</option>
                        <option value="medium" selected>🟡 متوسطة</option>
                        <option value="low">🟢 منخفضة</option>
                    </select>
                    <input type="date" id="taskDueDate">
                    <button type="submit" class="btn-primary">💾 حفظ المهمة</button>
                </form>
            </div>
        </div>
        
        <section class="tasks-container">
            <div class="tasks-grid" id="tasksGrid"></div>
        </section>
    </main>
    
    <footer class="main-footer">
        <p>© 2026 أكاديمية الكومندا - مشروع إدارة المهام</p>
    </footer>
    
    <script src="app.js"></script>
</body>
</html>`,
    
    'style.css': `/* ======================================== الثيمات والمتغيرات ======================================== */
:root {
    --bg-body: #0a0e17;
    --bg-surface: #111927;
    --bg-card: #1a2332;
    --bg-hover: #243044;
    --bg-input: #0d1420;
    --text-primary: #e8edf5;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
    --border-color: #2a3a5e;
    --border-light: #1e2d4a;
    --gold: #fbbf24;
    --gold-glow: rgba(251, 191, 36, 0.12);
    --status-pending: #facc15;
    --status-progress: #3b82f6;
    --status-completed: #22c55e;
    --shadow: 0 8px 32px rgba(0,0,0,0.4);
    --radius: 12px;
    --radius-lg: 16px;
    --transition: all 0.3s ease;
}

[data-theme="light"] {
    --bg-body: #f0f4f8;
    --bg-surface: #ffffff;
    --bg-card: #ffffff;
    --bg-hover: #e8edf5;
    --bg-input: #f0f4f8;
    --text-primary: #0a0e17;
    --text-secondary: #334155;
    --text-muted: #64748b;
    --border-color: #cbd5e1;
    --border-light: #e2e8f0;
    --gold: #d97706;
    --gold-glow: rgba(217,119,6,0.08);
    --shadow: 0 8px 32px rgba(0,0,0,0.08);
}

body.high-contrast {
    --bg-body: #000 !important;
    --bg-surface: #0a0a0a !important;
    --bg-card: #1a1a1a !important;
    --text-primary: #ffff00 !important;
    --text-secondary: #ffff00 !important;
    --text-muted: #ffff00 !important;
    --border-color: #ffff00 !important;
    --gold: #ffff00 !important;
    --status-pending: #ffff00 !important;
    --status-progress: #00ffff !important;
    --status-completed: #00ff00 !important;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Cairo', system-ui, sans-serif;
    background: var(--bg-body);
    color: var(--text-primary);
    font-size: 16px;
    line-height: 1.7;
    transition: var(--transition);
    min-height: 100vh;
    padding-top: 50px;
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-surface); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 10px; }

.accessibility-bar {
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-color);
    padding: 0.3rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.accessibility-bar button {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 0.15rem 0.5rem;
    border-radius: 30px;
    font-size: 0.75rem;
    cursor: pointer;
    transition: var(--transition);
    min-height: 26px;
    min-width: 30px;
}

.accessibility-bar button:hover {
    background: var(--bg-hover);
    border-color: var(--gold);
    color: var(--text-primary);
}

.accessibility-bar span {
    font-size: 0.75rem;
    color: var(--text-secondary);
    min-width: 24px;
    text-align: center;
}

.main-header {
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-color);
    padding: 0.5rem 1.5rem;
    position: fixed;
    top: 38px;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: var(--shadow);
}

.header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.header-content h1 {
    font-size: 1.2rem;
    color: var(--gold);
}

.header-stats {
    display: flex;
    gap: 1.5rem;
}

.stat {
    display: flex;
    align-items: baseline;
    gap: 0.3rem;
}

.stat span {
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--gold);
}

.stat label {
    font-size: 0.65rem;
    color: var(--text-secondary);
}

.main-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    margin-top: 80px;
}

.control-bar {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: var(--bg-card);
    border-radius: var(--radius);
    border: 1px solid var(--border-light);
}

.btn-primary {
    background: var(--gold);
    border: none;
    color: var(--bg-body);
    padding: 0.5rem 1.2rem;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.9rem;
}

.btn-primary:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(251, 191, 36, 0.3);
}

.filters {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
}

.filter-btn {
    background: transparent;
    border: 1px solid var(--border-color);
    color: var(--text-secondary);
    padding: 0.3rem 0.8rem;
    border-radius: 30px;
    cursor: pointer;
    transition: var(--transition);
    font-size: 0.8rem;
}

.filter-btn:hover {
    border-color: var(--gold);
    color: var(--text-primary);
}

.filter-btn.active {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--bg-body);
}

#searchInput {
    flex: 1;
    min-width: 150px;
    padding: 0.4rem 1rem;
    border-radius: 30px;
    border: 1px solid var(--border-color);
    background: var(--bg-input);
    color: var(--text-primary);
    font-size: 0.85rem;
}

#searchInput:focus {
    outline: none;
    border-color: var(--gold);
}

.tasks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
}

.task-card {
    background: var(--bg-card);
    border-radius: var(--radius);
    padding: 1rem;
    border: 1px solid var(--border-light);
    border-right: 4px solid var(--status-pending);
    transition: var(--transition);
    animation: slideIn 0.3s ease-out;
}

.task-card:hover {
    transform: translateX(-4px);
    box-shadow: var(--shadow);
}

.task-card.status-pending { border-right-color: var(--status-pending); }
.task-card.status-progress { border-right-color: var(--status-progress); }
.task-card.status-completed { 
    border-right-color: var(--status-completed);
    opacity: 0.7;
}
.task-card.status-completed .task-title {
    text-decoration: line-through;
    color: var(--text-muted);
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.3rem;
}

.task-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
}

.task-priority {
    font-size: 0.65rem;
    padding: 0.1rem 0.4rem;
    border-radius: 30px;
    background: var(--bg-hover);
    color: var(--text-secondary);
    white-space: nowrap;
}

.task-priority.high { color: #ef4444; background: rgba(239,68,68,0.1); }
.task-priority.medium { color: #f59e0b; background: rgba(245,158,11,0.1); }
.task-priority.low { color: #22c55e; background: rgba(34,197,94,0.1); }

.task-description {
    color: var(--text-secondary);
    font-size: 0.85rem;
    margin: 0.3rem 0;
    line-height: 1.5;
}

.task-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid var(--border-light);
}

.task-date {
    font-size: 0.7rem;
    color: var(--text-muted);
}

.task-actions {
    display: flex;
    gap: 0.3rem;
}

.task-actions button {
    background: transparent;
    border: none;
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: var(--transition);
}

.task-actions .complete-btn:hover { color: #22c55e; background: rgba(34,197,94,0.1); }
.task-actions .delete-btn:hover { color: #ef4444; background: rgba(239,68,68,0.1); }

.modal {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
}

.modal.open { display: flex; }

.modal-content {
    background: var(--bg-card);
    border-radius: var(--radius-lg);
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    border: 1px solid var(--border-color);
    animation: modalIn 0.3s ease-out;
}

@keyframes modalIn {
    from { opacity: 0; transform: scale(0.9) translateY(20px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
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
    font-size: 1.3rem;
}

.modal-content form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.modal-content input,
.modal-content textarea,
.modal-content select {
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.9rem;
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
    min-height: 70px;
}

.empty-state {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-secondary);
}

.empty-state span {
    font-size: 4rem;
    display: block;
    margin-bottom: 0.5rem;
}

.empty-state h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.2rem;
}

.main-footer {
    background: var(--bg-surface);
    border-top: 1px solid var(--border-color);
    padding: 0.5rem 1.5rem;
    margin-top: 1.5rem;
    text-align: center;
    font-size: 0.75rem;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    body { padding-top: 80px; }
    .main-header { top: 60px; padding: 0.4rem 0.8rem; }
    .header-content { flex-direction: column; align-items: stretch; gap: 0.3rem; }
    .header-stats { justify-content: space-around; }
    .control-bar { flex-direction: column; }
    .filters { justify-content: center; }
    .tasks-grid { grid-template-columns: 1fr; }
    .modal-content { padding: 1.2rem; margin: 0.5rem; }
}

@media (max-width: 480px) {
    body { padding-top: 75px; }
    .main-header { top: 55px; }
    .main-content { padding: 0.5rem; margin-top: 70px; }
    .accessibility-bar { padding: 0.2rem 0.3rem; gap: 0.2rem; }
    .accessibility-bar button { font-size: 0.6rem; min-height: 20px; min-width: 22px; padding: 0.05rem 0.2rem; }
    .accessibility-bar span { font-size: 0.6rem; min-width: 16px; }
    .header-content h1 { font-size: 1rem; }
    .stat span { font-size: 0.9rem; }
    .stat label { font-size: 0.55rem; }
}
`,
    
    'app.js': `// ======================================== فئة إدارة المهام ========================================
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.loadTasks();
    }
    
    addTask(taskData) {
        const task = {
            id: Date.now(),
            title: taskData.title.trim(),
            description: taskData.description ? taskData.description.trim() : '',
            status: 'pending',
            priority: taskData.priority || 'medium',
            createdAt: new Date().toISOString(),
            dueDate: taskData.dueDate || null
        };
        if (!task.title || task.title.length < 3) {
            throw new Error('عنوان المهمة يجب أن يكون 3 أحرف على الأقل');
        }
        this.tasks.unshift(task);
        this.saveTasks();
        return task;
    }
    
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.saveTasks();
            return true;
        }
        return false;
    }
    
    updateTask(id, updates) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            Object.assign(task, updates);
            this.saveTasks();
            return true;
        }
        return false;
    }
    
    changeStatus(id, newStatus) {
        const validStatuses = ['pending', 'progress', 'completed'];
        if (!validStatuses.includes(newStatus)) {
            throw new Error('حالة غير صالحة');
        }
        return this.updateTask(id, { status: newStatus });
    }
    
    getAllTasks() { return [...this.tasks]; }
    
    getTasksByStatus(status) {
        if (status === 'all') return this.getAllTasks();
        return this.tasks.filter(task => task.status === status);
    }
    
    searchTasks(query) {
        if (!query || query.trim() === '') {
            return this.getTasksByStatus(this.currentFilter);
        }
        const searchTerm = query.toLowerCase().trim();
        return this.tasks.filter(task => 
            task.title.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm)
        );
    }
    
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.status === 'completed').length;
        const pending = this.tasks.filter(t => t.status === 'pending').length;
        const progress = this.tasks.filter(t => t.status === 'progress').length;
        return { total, completed, pending, progress, completionRate: total > 0 ? Math.round((completed / total) * 100) : 0 };
    }
    
    saveTasks() {
        try { localStorage.setItem('tasks', JSON.stringify(this.tasks)); } 
        catch (error) { console.error('خطأ في حفظ المهام:', error); }
    }
    
    loadTasks() {
        try {
            const saved = localStorage.getItem('tasks');
            if (saved) { this.tasks = JSON.parse(saved); }
        } catch (error) {
            console.error('خطأ في تحميل المهام:', error);
            this.tasks = [];
        }
    }
}

// ======================================== تهيئة التطبيق ========================================
const taskManager = new TaskManager();
const tasksGrid = document.getElementById('tasksGrid');

function getPriorityLabel(priority) {
    const labels = { high: '🔴 عالية', medium: '🟡 متوسطة', low: '🟢 منخفضة' };
    return labels[priority] || priority;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderTasks(tasks) {
    if (!tasks) tasks = taskManager.getTasksByStatus(taskManager.currentFilter);
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

function updateStats() {
    const stats = taskManager.getStats();
    document.getElementById('totalTasks').textContent = stats.total;
    document.getElementById('completedTasks').textContent = stats.completed;
    document.getElementById('pendingTasks').textContent = stats.pending;
}

function renderFilteredTasks() {
    renderTasks(taskManager.getTasksByStatus(taskManager.currentFilter));
}

window.markComplete = function(id) {
    taskManager.changeStatus(id, 'completed');
    renderFilteredTasks();
    updateStats();
};

window.deleteTask = function(id) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        taskManager.deleteTask(id);
        renderFilteredTasks();
        updateStats();
    }
};

// ======================================== ربط الأحداث ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderFilteredTasks();
    updateStats();
    
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
            showNotification('✅ تم إضافة المهمة بنجاح!');
        } catch (error) {
            alert(error.message);
        }
    });
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            taskManager.currentFilter = this.dataset.filter;
            renderFilteredTasks();
        });
    });
    
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            if (this.value.trim() === '') {
                renderFilteredTasks();
            } else {
                renderTasks(taskManager.searchTasks(this.value));
            }
        }, 300);
    });
    
    setupAccessibility();
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = \`
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 0.8rem 1.5rem;
        border-radius: 12px;
        border: 1px solid var(--gold);
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        z-index: 3000;
        opacity: 0;
        transition: all 0.3s ease;
        font-weight: 500;
    \`;
    document.body.appendChild(notification);
    setTimeout(() => notification.style.cssText = notification.style.cssText.replace('opacity: 0;', 'opacity: 1; transform: translateX(-50%) translateY(0);'), 10);
    setTimeout(() => {
        notification.style.cssText = notification.style.cssText.replace('opacity: 1;', 'opacity: 0; transform: translateX(-50%) translateY(100px);');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function setupAccessibility() {
    const fontInc = document.getElementById('fontInc');
    const fontDec = document.getElementById('fontDec');
    const fontSizeDisplay = document.getElementById('fontSizeDisplay');
    let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;
    function applyFontSize() {
        document.documentElement.style.fontSize = fontSize + 'px';
        fontSizeDisplay.textContent = fontSize;
        localStorage.setItem('fontSize', fontSize);
    }
    fontInc.addEventListener('click', function() { if (fontSize < 32) { fontSize++; applyFontSize(); } });
    fontDec.addEventListener('click', function() { if (fontSize > 12) { fontSize--; applyFontSize(); } });
    applyFontSize();
    
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
    themeToggle.addEventListener('click', function() { isDark = !isDark; applyTheme(); });
    applyTheme();
    
    const contrastToggle = document.getElementById('contrastToggle');
    let isHighContrast = localStorage.getItem('highContrast') === 'true';
    function applyContrast() {
        document.body.classList.toggle('high-contrast', isHighContrast);
        localStorage.setItem('highContrast', isHighContrast);
    }
    contrastToggle.addEventListener('click', function() { isHighContrast = !isHighContrast; applyContrast(); });
    applyContrast();
    
    const speakBtn = document.getElementById('speakBtn');
    let isSpeaking = false;
    speakBtn.addEventListener('click', function() {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            isSpeaking = false;
            speakBtn.textContent = '🔊';
            return;
        }
        if (!('speechSynthesis' in window)) { alert('المتصفح لا يدعم القراءة الصوتية'); return; }
        const tasks = taskManager.getAllTasks();
        if (tasks.length === 0) { alert('لا توجد مهام للقراءة'); return; }
        let text = 'لديك ' + tasks.length + ' مهام. ';
        const pending = tasks.filter(t => t.status === 'pending');
        const completed = tasks.filter(t => t.status === 'completed');
        const progress = tasks.filter(t => t.status === 'progress');
        if (pending.length > 0) text += pending.length + ' مهام معلقة. ';
        if (progress.length > 0) text += progress.length + ' مهام قيد التنفيذ. ';
        if (completed.length > 0) text += completed.length + ' مهام مكتملة. ';
        text += 'المهام: ';
        tasks.slice(0, 5).forEach((task, i) => { text += (i + 1) + '. ' + task.title + '. '; });
        if (tasks.length > 5) text += 'وغيرها. ';
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.onstart = function() { isSpeaking = true; speakBtn.textContent = '⏹️'; };
        utterance.onend = function() { isSpeaking = false; speakBtn.textContent = '🔊'; };
        utterance.onerror = function() { isSpeaking = false; speakBtn.textContent = '🔊'; };
        window.speechSynthesis.speak(utterance);
    });
}

// ======================================== دوال معاينة وتنزيل المشروع ========================================
function previewProject() {
    // فتح المشروع في نافذة جديدة
    const previewWindow = window.open('', '_blank', 'width=1200,height=800');
    if (!previewWindow) {
        alert('الرجاء السماح للنوافذ المنبثقة');
        return;
    }
    
    // بناء HTML كامل للمشروع
    const htmlContent = \`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدير المهام - أكاديمية الكومندا</title>
    <style>\${projectFiles['style.css']}</style>
</head>
<body>
    \${projectFiles['index.html'].replace('<link rel="stylesheet" href="style.css">', '').replace('<script src="app.js"></script>', '')}
    <script>\${projectFiles['app.js']}<\/script>
</body>
</html>\`;
    
    previewWindow.document.write(htmlContent);
    previewWindow.document.close();
}

function downloadProject() {
    // إنشاء ملف ZIP باستخدام JSZip
    if (typeof JSZip === 'undefined') {
        // تحميل مكتبة JSZip إذا لم تكن موجودة
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        document.head.appendChild(script);
        
        script.onload = function() {
            createAndDownloadZip();
        };
        return;
    }
    createAndDownloadZip();
}

function createAndDownloadZip() {
    const zip = new JSZip();
    
    // إضافة الملفات
    zip.file('index.html', projectFiles['index.html']);
    zip.file('style.css', projectFiles['style.css']);
    zip.file('app.js', projectFiles['app.js']);
    
    // إنشاء ملف README
    const readme = \`# 📋 مدير المهام - مشروع أكاديمية الكومندا

## 🎯 عن المشروع
تطبيق إدارة مهام متكامل يسمح للمستخدم بإضافة وتنظيم ومتابعة المهام اليومية.

## ✨ الميزات
- إضافة مهام جديدة مع عنوان ووصف وأولوية
- تغيير حالة المهمة (معلقة، قيد التنفيذ، مكتملة)
- حذف المهام
- تصفية المهام حسب الحالة
- البحث عن المهام
- حفظ المهام تلقائياً في المتصفح
- دعم الثيم الداكن والفاتح
- دعم التباين العالي
- قراءة المهام بصوت عالٍ
- تصميم متجاوب مع جميع الأجهزة

## 📁 هيكل الملفات
- \`index.html\` - الهيكل الرئيسي
- \`style.css\` - التنسيقات والثيمات
- \`app.js\` - منطق التطبيق

## 🚀 كيفية التشغيل
1. قم بتحميل الملفات
2. افتح \`index.html\` في المتصفح
3. استمتع بإدارة مهامك!

## 📚 التقنيات المستخدمة
- HTML5 (عناصر دلالية)
- CSS3 (Flexbox, Grid, متغيرات, ثيمات)
- JavaScript (ES6+, LocalStorage, DOM Manipulation)
- Web Speech API (للقراءة الصوتية)

## 👨‍💻 تم الإنشاء بواسطة
أكاديمية الكومندا - كورس تطوير الويب المتكامل
\`;
    zip.file('README.md', readme);
    
    // إنشاء الملف وتحميله
    zip.generateAsync({ type: 'blob' }).then(function(content) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'task-manager-project.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    });
}

// تحميل JSZip مسبقاً
(function loadJSZip() {
    if (typeof JSZip === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        document.head.appendChild(script);
    }
})();`
};

// دوال المعاينة والتنزيل
function previewProject() {
    const previewWindow = window.open('', '_blank', 'width=1200,height=800');
    if (!previewWindow) {
        alert('الرجاء السماح للنوافذ المنبثقة');
        return;
    }
    
    const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مدير المهام - أكاديمية الكومندا</title>
    <style>${projectFiles['style.css']}</style>
</head>
<body>
    ${projectFiles['index.html'].replace('<link rel="stylesheet" href="style.css">', '').replace('<script src="app.js"></script>', '')}
    <script>${projectFiles['app.js']}</script>
</body>
</html>`;
    
    previewWindow.document.write(htmlContent);
    previewWindow.document.close();
}

function downloadProject() {
    if (typeof JSZip === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        document.head.appendChild(script);
        script.onload = function() {
            createAndDownloadZip();
        };
        return;
    }
    createAndDownloadZip();
}

function createAndDownloadZip() {
    const zip = new JSZip();
    zip.file('index.html', projectFiles['index.html']);
    zip.file('style.css', projectFiles['style.css']);
    zip.file('app.js', projectFiles['app.js']);
    
    const readme = `# 📋 مدير المهام - مشروع أكاديمية الكومندا

## 🎯 عن المشروع
تطبيق إدارة مهام متكامل يسمح للمستخدم بإضافة وتنظيم ومتابعة المهام اليومية.

## ✨ الميزات
- إضافة مهام جديدة مع عنوان ووصف وأولوية
- تغيير حالة المهمة (معلقة، قيد التنفيذ، مكتملة)
- حذف المهام
- تصفية المهام حسب الحالة
- البحث عن المهام
- حفظ المهام تلقائياً في المتصفح
- دعم الثيم الداكن والفاتح
- دعم التباين العالي
- قراءة المهام بصوت عالٍ
- تصميم متجاوب مع جميع الأجهزة

## 📁 هيكل الملفات
- \`index.html\` - الهيكل الرئيسي
- \`style.css\` - التنسيقات والثيمات
- \`app.js\` - منطق التطبيق

## 🚀 كيفية التشغيل
1. قم بتحميل الملفات
2. افتح \`index.html\` في المتصفح
3. استمتع بإدارة مهامك!

## 📚 التقنيات المستخدمة
- HTML5 (عناصر دلالية)
- CSS3 (Flexbox, Grid, متغيرات, ثيمات)
- JavaScript (ES6+, LocalStorage, DOM Manipulation)
- Web Speech API (للقراءة الصوتية)

## 👨‍💻 تم الإنشاء بواسطة
أكاديمية الكومندا - كورس تطوير الويب المتكامل`;
    zip.file('README.md', readme);
    
    zip.generateAsync({ type: 'blob' }).then(function(content) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = 'task-manager-project.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    });
}

// تحميل JSZip مسبقاً
(function loadJSZip() {
    if (typeof JSZip === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
        document.head.appendChild(script);
    }
})();
