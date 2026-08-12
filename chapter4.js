const chapter4 = {
    id: 'ch4',
    title: 'JavaScript المتقدم - البرمجة والتفاعل',
    description: 'تعلم JavaScript بشكل احترافي مع DOM، الأحداث، الـ API، والتخزين المحلي، مع تطبيقات عملية لمشروع إدارة المهام',
    lessons: [
        {
            id: '4-1',
            title: 'المتغيرات وأنواع البيانات (let, const, var)',
            content: `
                <h3>المتغيرات في JavaScript - أساس البرمجة</h3>
                <p>المتغيرات هي حاويات تخزن البيانات. تعلم الفرق بين let و const و var.</p>
                
                <h4>أنواع المتغيرات</h4>
                <div class="code-block">
// var - الطريقة القديمة (لا تستخدمها في الكود الحديث)
var name = "أحمد";
var age = 25;

// let - متغير يمكن تغيير قيمته
let userName = "سارة";
userName = "سارة محمد"; // مسموح

// const - ثابت لا يمكن تغيير قيمته
const PI = 3.14159;
// PI = 3.14; // خطأ! لا يمكن تغيير const

// الفرق في النطاق (Scope)
if (true) {
    var oldVar = "مرئي خارج النطاق";
    let newLet = "غير مرئي خارج النطاق";
    const newConst = "أيضاً غير مرئي";
}
console.log(oldVar); // يعمل
// console.log(newLet); // خطأ! غير معرف
                </div>
                
                <h4>أنواع البيانات الأساسية</h4>
                <ul>
                    <li><strong>String (نص):</strong> <code>"أهلاً بالعالم"</code> أو <code>'مرحباً'</code></li>
                    <li><strong>Number (رقم):</strong> <code>42</code>، <code>3.14</code>، <code>-10</code></li>
                    <li><strong>Boolean (منطقي):</strong> <code>true</code> أو <code>false</code></li>
                    <li><strong>Undefined:</strong> متغير لم يعطى قيمة</li>
                    <li><strong>Null:</strong> قيمة فارغة متعمدة</li>
                    <li><strong>Object (كائن):</strong> مجموعة من الخصائص</li>
                    <li><strong>Array (مصفوفة):</strong> قائمة من القيم</li>
                </ul>
                
                <div class="code-block">
// أمثلة على أنواع البيانات
let studentName = "محمد علي"; // String
let studentAge = 22; // Number
let isActive = true; // Boolean
let address; // Undefined
let phone = null; // Null

// معرفة نوع المتغير
console.log(typeof studentName); // "string"
console.log(typeof studentAge); // "number"
console.log(typeof isActive); // "boolean"
                </div>
                
                <div class="note-box">
                    <strong>💡 قواعد استخدام المتغيرات:</strong>
                    <ul>
                        <li>استخدم <code>const</code> بشكل افتراضي، و <code>let</code> عندما تحتاج للتغيير</li>
                        <li>لا تستخدم <code>var</code> في الكود الحديث</li>
                        <li>استخدم أسماء ذات معنى للمتغيرات</li>
                        <li>استخدم <code>camelCase</code> لتسمية المتغيرات (مثل: firstName)</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// تعريف بيانات المهمة
const task = {
    id: Date.now(),
    title: "تعلم JavaScript",
    description: "دراسة الفصل الرابع من كورس البرمجة",
    status: "pending", // pending, progress, completed
    priority: "high", // high, medium, low
    createdAt: new Date().toISOString(),
    dueDate: "2026-08-20"
};

// مصفوفة لتخزين المهام
let tasks = [];

// إضافة مهمة جديدة
function addTask(taskData) {
    const newTask = {
        id: Date.now(),
        ...taskData,
        createdAt: new Date().toISOString(),
        status: "pending"
    };
    tasks.push(newTask);
    return newTask;
}
                    </div>
                </div>
            `
        },
        {
            id: '4-2',
            title: 'الجمل الشرطية (if, else, switch)',
            content: `
                <h3>اتخاذ القرارات في البرمجة - الجمل الشرطية</h3>
                <p>الجمل الشرطية تسمح للبرنامج باتخاذ قرارات مختلفة بناءً على شروط معينة.</p>
                
                <h4>if, else if, else</h4>
                <div class="code-block">
// هيكل if الأساسي
let age = 18;

if (age >= 18) {
    console.log("أنت بالغ");
} else {
    console.log("أنت قاصر");
}

// if, else if, else
let score = 85;

if (score >= 90) {
    console.log("ممتاز");
} else if (score >= 80) {
    console.log("جيد جداً");
} else if (score >= 70) {
    console.log("جيد");
} else {
    console.log("تحتاج للمراجعة");
}
                </div>
                
                <h4>switch - بديل متقدم</h4>
                <div class="code-block">
let day = "الأحد";

switch (day) {
    case "الأحد":
        console.log("أول أيام الأسبوع");
        break;
    case "الجمعة":
    case "السبت":
        console.log("عطلة نهاية الأسبوع");
        break;
    default:
        console.log("يوم عمل");
}
                </div>
                
                <h4>العوامل المنطقية والشرطية</h4>
                <div class="code-block">
// العوامل المنطقية
let age = 25;
let hasLicense = true;

// AND (&&) - يجب أن يكون الكل true
if (age >= 18 && hasLicense) {
    console.log("يمكنك القيادة");
}

// OR (||) - يكفي شرط واحد true
let isStudent = true;
let isTeacher = false;
if (isStudent || isTeacher) {
    console.log("أنت عضو في المؤسسة التعليمية");
}

// NOT (!) - عكس القيمة
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("الرجاء تسجيل الدخول");
}

// العامل الثلاثي (Ternary) - اختصار للـ if/else
let message = age >= 18 ? "بالغ" : "قاصر";
console.log(message);
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// تصفية المهام حسب الحالة
function filterTasks(status) {
    if (status === "all") {
        return tasks;
    } else if (status === "pending") {
        return tasks.filter(task => task.status === "pending");
    } else if (status === "progress") {
        return tasks.filter(task => task.status === "progress");
    } else if (status === "completed") {
        return tasks.filter(task => task.status === "completed");
    } else {
        return tasks;
    }
}

// تحديد أولوية المهمة
function getPriorityLabel(priority) {
    switch (priority) {
        case "high":
            return "🔴 عالية";
        case "medium":
            return "🟡 متوسطة";
        case "low":
            return "🟢 منخفضة";
        default:
            return "غير محددة";
    }
}

// التحقق من صحة المهمة
function validateTask(task) {
    if (!task.title || task.title.trim() === "") {
        return { valid: false, message: "عنوان المهمة مطلوب" };
    }
    if (task.title.length < 3) {
        return { valid: false, message: "عنوان المهمة قصير جداً" };
    }
    return { valid: true, message: "مهمة صحيحة" };
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للجمل الشرطية:</strong>
                    <ul>
                        <li>استخدم <code>===</code> (مقارنة صارمة) بدلاً من <code>==</code></li>
                        <li>رتب الشروط من الأكثر تحديداً إلى الأقل</li>
                        <li>استخدم العامل الثلاثي للشروط البسيطة فقط</li>
                        <li>استخدم switch عند وجود العديد من الحالات الثابتة</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-3',
            title: 'الحلقات التكرارية والمصفوفات والكائنات',
            content: `
                <h3>الحلقات التكرارية - معالجة البيانات بكفاءة</h3>
                <p>الحلقات تسمح بتكرار تنفيذ كود معين عدة مرات، وهي أساسية لمعالجة المصفوفات والكائنات.</p>
                
                <h4>أنواع الحلقات</h4>
                <div class="code-block">
// for - الحلقة الأكثر استخداماً
for (let i = 0; i < 5; i++) {
    console.log(\`الرقم: \${i}\`);
}

// while - تنفذ طالما الشرط true
let count = 0;
while (count < 3) {
    console.log(\`العد: \${count}\`);
    count++;
}

// do...while - تنفذ مرة واحدة على الأقل
let num = 5;
do {
    console.log(\`الرقم: \${num}\`);
    num++;
} while (num < 3);
                </div>
                
                <h4>المصفوفات (Arrays) - تخزين قوائم البيانات</h4>
                <div class="code-block">
// إنشاء مصفوفة
let fruits = ["تفاح", "موز", "برتقال"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["نص", 42, true, {name: "أحمد"}];

// الوصول إلى عناصر المصفوفة
console.log(fruits[0]); // "تفاح"
console.log(fruits.length); // 3

// إضافة وحذف عناصر
fruits.push("عنب"); // إضافة في النهاية
fruits.pop(); // حذف من النهاية
fruits.unshift("فراولة"); // إضافة في البداية
fruits.shift(); // حذف من البداية

// التكرار على المصفوفة
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach - طريقة حديثة للتكرار
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// map - تحويل المصفوفة
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - تصفية المصفوفة
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

// find - البحث عن عنصر
let found = numbers.find(n => n > 3);
console.log(found); // 4

// reduce - تجميع القيم
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15
                </div>
                
                <h4>الكائنات (Objects) - تخزين بيانات منظمة</h4>
                <div class="code-block">
// إنشاء كائن
let person = {
    name: "سارة",
    age: 25,
    city: "الرياض",
    skills: ["HTML", "CSS", "JavaScript"],
    isStudent: false
};

// الوصول إلى خصائص الكائن
console.log(person.name); // "سارة"
console.log(person["age"]); // 25

// تعديل الخصائص
person.age = 26;
person["city"] = "جدة";

// إضافة خصائص جديدة
person.email = "sara@email.com";

// التكرار على خصائص الكائن
for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}

// Object.keys, Object.values, Object.entries
console.log(Object.keys(person)); // ["name", "age", ...]
console.log(Object.values(person)); // ["سارة", 26, ...]
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// معالجة المهام باستخدام دوال المصفوفات
function getTaskStatistics() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === "completed").length;
    const pending = tasks.filter(t => t.status === "pending").length;
    const progress = tasks.filter(t => t.status === "progress").length;
    
    return { total, completed, pending, progress };
}

// البحث عن مهمة
function findTask(id) {
    return tasks.find(task => task.id === id);
}

// حذف مهمة
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}

// تحديث حالة المهمة
function updateTaskStatus(id, newStatus) {
    const task = findTask(id);
    if (task) {
        task.status = newStatus;
        return true;
    }
    return false;
}

// ترتيب المهام حسب التاريخ
function sortTasksByDate() {
    return [...tasks].sort((a, b) => 
        new Date(a.createdAt) - new Date(b.createdAt)
    );
}

// تجميع المهام حسب الأولوية
function groupTasksByPriority() {
    return tasks.reduce((groups, task) => {
        const priority = task.priority || "medium";
        if (!groups[priority]) {
            groups[priority] = [];
        }
        groups[priority].push(task);
        return groups;
    }, {});
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للتعامل مع المصفوفات والكائنات:</strong>
                    <ul>
                        <li>استخدم <code>const</code> للمصفوفات والكائنات (يمكن تعديل المحتوى)</li>
                        <li>استخدم <code>map</code> و <code>filter</code> بدلاً من الحلقات التقليدية</li>
                        <li>استخدم <code>...spread</code> لنسخ المصفوفات والكائنات</li>
                        <li>استخدم <code>find</code> للبحث عن عنصر واحد</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-4',
            title: 'الدوال (Functions) - تنظيم الكود وإعادة الاستخدام',
            content: `
                <h3>الدوال - بناء كود قابل لإعادة الاستخدام</h3>
                <p>الدوال هي كتل برمجية قابلة لإعادة الاستخدام، تنفذ مهمة محددة.</p>
                
                <h4>أنواع الدوال</h4>
                <div class="code-block">
// 1. الدوال التقليدية (Function Declaration)
function greet(name) {
    return \`مرحباً \${name}!\`;
}
console.log(greet("أحمد"));

// 2. الدوال السهمية (Arrow Functions) - ES6
const greetArrow = (name) => {
    return \`مرحباً \${name}!\`;
};

// اختصار إذا كان هناك parameter واحد و return بسيط
const double = x => x * 2;
console.log(double(5)); // 10

// 3. تعبير الدوال (Function Expression)
const add = function(a, b) {
    return a + b;
};
                </div>
                
                <h4>معاملات الدوال والقيم الافتراضية</h4>
                <div class="code-block">
// معاملات افتراضية (Default Parameters)
function createUser(name, age = 18, city = "غير محدد") {
    return { name, age, city };
}

console.log(createUser("سارة"));
// {name: "سارة", age: 18, city: "غير محدد"}

// Rest Parameters (...args) - تجميع المعاملات في مصفوفة
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
                </div>
                
                <h4>دوال متقدمة - closure, callback, higher-order</h4>
                <div class="code-block">
// 1. Callback - دالة تُمرر كمعامل لدالة أخرى
function processUser(name, callback) {
    const processed = \`مرحباً \${name}\`;
    callback(processed);
}

processUser("أحمد", (message) => {
    console.log(message);
});

// 2. Higher-Order Function - دالة ترجع دالة
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const doubleNumber = multiplyBy(2);
console.log(doubleNumber(5)); // 10

// 3. Closure - دالة تتذكر بيئتها
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// دوال إدارة المهام
class TaskManager {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }
    
    // إضافة مهمة
    addTask(taskData) {
        const task = {
            id: Date.now(),
            title: taskData.title,
            description: taskData.description || "",
            status: "pending",
            priority: taskData.priority || "medium",
            createdAt: new Date().toISOString(),
            dueDate: taskData.dueDate || null
        };
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }
    
    // حذف مهمة
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
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
    
    // الحصول على جميع المهام
    getAllTasks() {
        return [...this.tasks];
    }
    
    // تصفية المهام
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }
    
    // حفظ المهام في LocalStorage
    saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
    
    // تحميل المهام من LocalStorage
    loadTasks() {
        const saved = localStorage.getItem("tasks");
        if (saved) {
            this.tasks = JSON.parse(saved);
        }
    }
    
    // إحصائيات المهام
    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.status === "completed").length;
        const pending = this.tasks.filter(t => t.status === "pending").length;
        const progress = this.tasks.filter(t => t.status === "progress").length;
        
        return {
            total,
            completed,
            pending,
            progress,
            completionRate: total > 0 ? (completed / total * 100).toFixed(1) : 0
        };
    }
}

// استخدام TaskManager
const taskManager = new TaskManager();

// إضافة مهمة
taskManager.addTask({
    title: "تعلم JavaScript",
    description: "دراسة الفصل الرابع من كورس البرمجة",
    priority: "high",
    dueDate: "2026-08-20"
});

// عرض الإحصائيات
console.log(taskManager.getStats());
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للدوال:</strong>
                    <ul>
                        <li>اسم الدالة يجب أن يعبر عن وظيفتها (مثل: getUserData)</li>
                        <li>الدالة يجب أن تقوم بمهمة واحدة فقط</li>
                        <li>استخدم الدوال السهمية للدوال البسيطة</li>
                        <li>استخدم <code>return</code> لإرجاع القيم (أو <code>undefined</code> إذا لم ترجع)</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-5',
            title: 'DOM Manipulation - التحكم في عناصر الصفحة',
            content: `
                <h3>التفاعل مع DOM - التحكم في عناصر الصفحة</h3>
                <p>DOM (Document Object Model) هو تمثيل برمجي لصفحة HTML، يسمح لـ JavaScript بالتحكم في العناصر.</p>
                
                <h4>اختيار العناصر</h4>
                <div class="code-block">
// اختيار عنصر بواسطة ID
const header = document.getElementById("header");

// اختيار عناصر بواسطة Class
const cards = document.getElementsByClassName("card");

// اختيار عناصر بواسطة Tag
const paragraphs = document.getElementsByTagName("p");

// اختيار عنصر بواسطة CSS Selector (الأحدث والأفضل)
const mainContent = document.querySelector(".main-content");
const allButtons = document.querySelectorAll("button.primary");
                </div>
                
                <h4>تعديل المحتوى والخصائص</h4>
                <div class="code-block">
// تغيير النص
const title = document.querySelector("h1");
title.textContent = "مرحباً في أكاديمية الكومندا";
title.innerHTML = "<span style='color: gold;'>مرحباً</span> في الأكاديمية";

// تغيير السمات (Attributes)
const link = document.querySelector("a");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");

// تغيير التنسيقات (Styles)
const box = document.querySelector(".box");
box.style.backgroundColor = "#facc15";
box.style.padding = "20px";
box.style.borderRadius = "8px";

// إضافة/إزالة Classes
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("highlight");
if (box.classList.contains("active")) {
    console.log("العنصر نشط");
}
                </div>
                
                <h4>إنشاء وحذف العناصر</h4>
                <div class="code-block">
// إنشاء عنصر جديد
const newDiv = document.createElement("div");
newDiv.textContent = "عنصر جديد";
newDiv.className = "new-item";

// إضافة العنصر إلى الصفحة
const container = document.querySelector(".container");
container.appendChild(newDiv); // في النهاية
container.prepend(newDiv); // في البداية
container.insertBefore(newDiv, container.firstChild); // قبل عنصر محدد

// حذف عنصر
const oldElement = document.querySelector(".old");
oldElement.remove(); // الطريقة الحديثة

// إنشاء عناصر مع محتوى HTML
container.innerHTML += '<div class="card">بطاقة جديدة</div>';
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// عرض المهام في DOM
function renderTasks(tasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.className = \`task-card \${task.status}\`;
        taskCard.dataset.id = task.id;
        
        taskCard.innerHTML = \`
            <div class="task-header">
                <h3 class="task-title">\${task.title}</h3>
                <span class="task-status">\${getStatusLabel(task.status)}</span>
            </div>
            <p class="task-description">\${task.description || "لا يوجد وصف"}</p>
            <div class="task-footer">
                <span class="task-priority">\${getPriorityLabel(task.priority)}</span>
                <span class="task-date">\${formatDate(task.createdAt)}</span>
            </div>
            <div class="task-actions">
                <button class="complete-btn" onclick="completeTask(\${task.id})">✓ إكمال</button>
                <button class="delete-btn" onclick="deleteTask(\${task.id})">✕ حذف</button>
            </div>
        \`;
        
        taskList.appendChild(taskCard);
    });
}

// إضافة مهمة جديدة من DOM
function addTaskFromForm() {
    const titleInput = document.getElementById("taskTitle");
    const descInput = document.getElementById("taskDesc");
    
    if (titleInput.value.trim() === "") {
        alert("الرجاء إدخال عنوان المهمة");
        return;
    }
    
    const newTask = taskManager.addTask({
        title: titleInput.value,
        description: descInput.value
    });
    
    titleInput.value = "";
    descInput.value = "";
    
    renderTasks(taskManager.getAllTasks());
    updateStats();
}

// تحديث الإحصائيات
function updateStats() {
    const stats = taskManager.getStats();
    document.getElementById("totalTasks").textContent = stats.total;
    document.getElementById("completedTasks").textContent = stats.completed;
    document.getElementById("pendingTasks").textContent = stats.pending;
    document.getElementById("progressTasks").textContent = stats.progress;
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للتعامل مع DOM:</strong>
                    <ul>
                        <li>استخدم <code>querySelector</code> و <code>querySelectorAll</code> للاختيار</li>
                        <li>خزّن العناصر في متغيرات لتجنب البحث المتكرر</li>
                        <li>استخدم <code>textContent</code> بدلاً من <code>innerHTML</code> إذا لم تحتج HTML</li>
                        <li>استخدم <code>classList</code> لإدارة الفئات بدلاً من <code>className</code></li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-6',
            title: 'الأحداث (Event Listeners) - الاستجابة للمستخدم',
            content: `
                <h3>الأحداث - جعل الصفحة تفاعلية</h3>
                <p>الأحداث تسمح للصفحة بالاستجابة لأفعال المستخدم مثل النقر، الكتابة، والتمرير.</p>
                
                <h4>أنواع الأحداث الشائعة</h4>
                <ul>
                    <li><strong>click:</strong> عند النقر على عنصر</li>
                    <li><strong>mouseover / mouseout:</strong> عند دخول/خروج المؤشر</li>
                    <li><strong>keydown / keyup:</strong> عند الضغط/رفع مفتاح</li>
                    <li><strong>input:</strong> عند تغيير محتوى حقل الإدخال</li>
                    <li><strong>submit:</strong> عند إرسال نموذج</li>
                    <li><strong>scroll:</strong> عند التمرير</li>
                    <li><strong>load:</strong> عند اكتمال تحميل الصفحة</li>
                </ul>
                
                <div class="code-block">
// 1. حدث النقر
const button = document.querySelector("#myButton");
button.addEventListener("click", (event) => {
    console.log("تم النقر على الزر");
    console.log(event.target); // العنصر الذي تم النقر عليه
});

// 2. حدث الإدخال
const input = document.querySelector("#nameInput");
input.addEventListener("input", (event) => {
    console.log(\`القيمة الحالية: \${event.target.value}\`);
});

// 3. حدث التمرير
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log(\`التمرير: \${scrollY}px\`);
});

// 4. حدث تحميل الصفحة
window.addEventListener("load", () => {
    console.log("تم تحميل الصفحة بالكامل");
});

// 5. منع السلوك الافتراضي
const form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    console.log("تم إرسال النموذج");
});
                </div>
                
                <h4>تفويض الأحداث (Event Delegation)</h4>
                <div class="code-block">
// بدلاً من إضافة حدث لكل عنصر، نضيفه للعنصر الأب
const list = document.querySelector("#taskList");
list.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.closest("li");
        taskItem.remove();
        console.log("تم حذف المهمة");
    }
});
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// ربط الأحداث في مشروع إدارة المهام
document.addEventListener("DOMContentLoaded", function() {
    // تحميل المهام
    renderTasks(taskManager.getAllTasks());
    updateStats();
    
    // زر إضافة مهمة
    document.getElementById("addTaskBtn").addEventListener("click", addTaskFromForm);
    
    // إضافة مهمة بالضغط على Enter
    document.getElementById("taskTitle").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTaskFromForm();
        }
    });
    
    // فلترة المهام
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const status = this.dataset.status;
            const filtered = status === "all" 
                ? taskManager.getAllTasks() 
                : taskManager.getTasksByStatus(status);
            renderTasks(filtered);
            
            // تفعيل الزر المحدد
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    // تفويض الأحداث لقائمة المهام
    document.getElementById("taskList").addEventListener("click", function(e) {
        const taskCard = e.target.closest(".task-card");
        if (!taskCard) return;
        
        const taskId = parseInt(taskCard.dataset.id);
        
        if (e.target.classList.contains("complete-btn")) {
            taskManager.updateTask(taskId, { status: "completed" });
            renderTasks(taskManager.getAllTasks());
            updateStats();
        }
        
        if (e.target.classList.contains("delete-btn")) {
            if (confirm("هل أنت متأكد من حذف هذه المهمة؟")) {
                taskManager.deleteTask(taskId);
                renderTasks(taskManager.getAllTasks());
                updateStats();
            }
        }
    });
});
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للأحداث:</strong>
                    <ul>
                        <li>استخدم <code>addEventListener</code> بدلاً من <code>onclick</code></li>
                        <li>استخدم <code>event.preventDefault()</code> لمنع السلوك الافتراضي</li>
                        <li>استخدم تفويض الأحداث (Event Delegation) للعناصر المتعددة</li>
                        <li>أزل الأحداث غير المستخدمة لتجنب تسرب الذاكرة</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-7',
            title: 'التخزين المحلي (LocalStorage) - حفظ البيانات',
            content: `
                <h3>LocalStorage - حفظ البيانات في المتصفح</h3>
                <p>LocalStorage يسمح بحفظ البيانات في متصفح المستخدم بشكل دائم حتى بعد إغلاق المتصفح.</p>
                
                <h4>أساسيات LocalStorage</h4>
                <div class="code-block">
// حفظ بيانات
localStorage.setItem("username", "أحمد");
localStorage.setItem("age", "25");

// استرجاع بيانات
const username = localStorage.getItem("username");
const age = localStorage.getItem("age");
console.log(\`الاسم: \${username}, العمر: \${age}\`);

// حذف بيانات
localStorage.removeItem("age");

// حذف كل البيانات
localStorage.clear();
                </div>
                
                <h4>تخزين الكائنات والمصفوفات</h4>
                <div class="code-block">
// تخزين كائن
const user = {
    name: "سارة",
    email: "sara@email.com",
    preferences: {
        theme: "dark",
        fontSize: "large"
    }
};

// تحويل الكائن إلى JSON وتخزينه
localStorage.setItem("user", JSON.stringify(user));

// استرجاع الكائن وتحويله من JSON
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // "سارة"
console.log(storedUser.preferences.theme); // "dark"

// تخزين مصفوفة
const tasks = ["مهمة 1", "مهمة 2", "مهمة 3"];
localStorage.setItem("tasks", JSON.stringify(tasks));

// استرجاع المصفوفة
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
console.log(storedTasks[0]); // "مهمة 1"
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// حفظ تفضيلات المستخدم
function savePreferences(prefs) {
    localStorage.setItem("preferences", JSON.stringify(prefs));
}

function loadPreferences() {
    const stored = localStorage.getItem("preferences");
    if (stored) {
        return JSON.parse(stored);
    }
    return null;
}

// حفظ المهام تلقائياً
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskManager.tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        taskManager.tasks = JSON.parse(saved);
        return true;
    }
    return false;
}

// حفظ حالة التطبيق
function saveAppState() {
    const state = {
        tasks: taskManager.tasks,
        theme: document.documentElement.getAttribute("data-theme"),
        fontSize: document.documentElement.style.fontSize
    };
    localStorage.setItem("appState", JSON.stringify(state));
}

function loadAppState() {
    const saved = localStorage.getItem("appState");
    if (saved) {
        const state = JSON.parse(saved);
        if (state.tasks) taskManager.tasks = state.tasks;
        if (state.theme) document.documentElement.setAttribute("data-theme", state.theme);
        if (state.fontSize) document.documentElement.style.fontSize = state.fontSize;
        return true;
    }
    return false;
}

// تصدير واستيراد المهام
function exportTasks() {
    const data = JSON.stringify(taskManager.tasks, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks_backup.json";
    a.click();
    URL.revokeObjectURL(url);
}

function importTasks(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const tasks = JSON.parse(e.target.result);
            taskManager.tasks = tasks;
            taskManager.saveTasks();
            renderTasks(tasks);
            updateStats();
            alert("تم استيراد المهام بنجاح!");
        } catch (error) {
            alert("خطأ في استيراد المهام: " + error.message);
        }
    };
    reader.readAsText(file);
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح لاستخدام LocalStorage:</strong>
                    <ul>
                        <li>لا تخزن بيانات حساسة (كلمات مرور، معلومات بطاقات)</li>
                        <li>استخدم JSON.stringify و JSON.parse للكائنات والمصفوفات</li>
                        <li>تحقق من وجود البيانات قبل استخدامها</li>
                        <li>حدود التخزين حوالي 5-10 ميجابايت</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-8',
            title: 'Fetch API و Async/Await - جلب البيانات',
            content: `
                <h3>Fetch API و Async/Await - التواصل مع الخوادم</h3>
                <p>Fetch API يسمح لجلب البيانات من الخوادم بشكل غير متزامن (Asynchronous).</p>
                
                <h4>أساسيات Fetch</h4>
                <div class="code-block">
// fetch مع Promise
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('خطأ:', error);
    });
                </div>
                
                <h4>Async/Await - الطريقة الحديثة</h4>
                <div class="code-block">
// async function مع await
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(\`HTTP خطأ! الحالة: \${response.status}\`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('حدث خطأ:', error);
    }
}

// استخدام الدالة
getUsers();
                </div>
                
                <h4>طلبات POST (إرسال بيانات)</h4>
                <div class="code-block">
async function createUser(userData) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        const result = await response.json();
        console.log('تم الإنشاء:', result);
        return result;
    } catch (error) {
        console.log('خطأ في الإنشاء:', error);
    }
}

// استخدام POST
createUser({
    name: "أحمد محمد",
    email: "ahmed@email.com"
});
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// مزامنة المهام مع الخادم
async function syncTasks() {
    try {
        // تحميل المهام من الخادم
        const response = await fetch('/api/tasks');
        const serverTasks = await response.json();
        
        // دمج المهام المحلية مع المهام من الخادم
        const mergedTasks = mergeTasks(taskManager.tasks, serverTasks);
        taskManager.tasks = mergedTasks;
        taskManager.saveTasks();
        renderTasks(mergedTasks);
        updateStats();
        
        console.log("تمت المزامنة بنجاح");
    } catch (error) {
        console.log("خطأ في المزامنة:", error);
    }
}

// دمج المهام
function mergeTasks(localTasks, serverTasks) {
    const allTasks = [...localTasks];
    
    serverTasks.forEach(serverTask => {
        const exists = allTasks.some(t => t.id === serverTask.id);
        if (!exists) {
            allTasks.push(serverTask);
        }
    });
    
    return allTasks;
}

// حفظ المهام على الخادم
async function saveTasksToServer() {
    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskManager.tasks)
        });
        
        if (response.ok) {
            console.log("تم حفظ المهام على الخادم");
        }
    } catch (error) {
        console.log("خطأ في الحفظ:", error);
    }
}

// مثال: جلب اقتباسات تحفيزية
async function getMotivationalQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById("quoteDisplay").textContent = \`"\${data.content}" - \${data.author}\`;
    } catch (error) {
        document.getElementById("quoteDisplay").textContent = "💪 استمر في العمل، أنت تبني شيئاً عظيماً!";
    }
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح Fetch و Async/Await:</strong>
                    <ul>
                        <li>استخدم <code>try...catch</code> للتعامل مع الأخطاء</li>
                        <li>تحقق من <code>response.ok</code> للتأكد من نجاح الطلب</li>
                        <li>استخدم <code>await</code> فقط داخل <code>async</code> function</li>
                        <li>لا تنسى تحويل الـ response باستخدام <code>.json()</code> أو <code>.text()</code></li>
                        <li>استخدم <code>Promise.all</code> للطلبات المتعددة المتوازية</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-9',
            title: 'Web Speech API - القراءة الصوتية',
            content: `
                <h3>Web Speech API - تحويل النص إلى كلام</h3>
                <p>Web Speech API يسمح للمتصفح بقراءة النصوص بصوت مسموع، مما يحسن إمكانية الوصول.</p>
                
                <h4>أساسيات Speech Synthesis</h4>
                <div class="code-block">
// التحقق من دعم المتصفح
if ('speechSynthesis' in window) {
    console.log("المتصفح يدعم القراءة الصوتية");
} else {
    console.log("المتصفح لا يدعم القراءة الصوتية");
}

// إنشاء كائن النطق
function speak(text, lang = 'ar-SA', rate = 1, pitch = 1) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate; // سرعة القراءة (0.1 - 10)
    utterance.pitch = pitch; // طبقة الصوت (0 - 2)
    utterance.volume = 1; // مستوى الصوت (0 - 1)
    
    // أحداث النطق
    utterance.addEventListener('start', () => {
        console.log('بدء القراءة');
    });
    utterance.addEventListener('end', () => {
        console.log('انتهت القراءة');
    });
    utterance.addEventListener('error', (event) => {
        console.error('خطأ في القراءة:', event);
    });
    
    window.speechSynthesis.speak(utterance);
}

// استخدام الدالة
speak("مرحباً في أكاديمية الكومندا");
                </div>
                
                <h4>التحكم في القراءة (إيقاف، توقف، استئناف)</h4>
                <div class="code-block">
// إيقاف القراءة
function stopSpeaking() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        console.log('تم إيقاف القراءة');
    }
}

// إيقاف مؤقت
function pauseSpeaking() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        console.log('تم إيقاف القراءة مؤقتاً');
    }
}

// استئناف القراءة
function resumeSpeaking() {
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        console.log('تم استئناف القراءة');
    }
}
                </div>
                
                <h4>الحصول على الأصوات المتاحة</h4>
                <div class="code-block">
function getAvailableVoices() {
    const voices = window.speechSynthesis.getVoices();
    console.log('الأصوات المتاحة:');
    voices.forEach((voice, index) => {
        console.log(\`\${index + 1}. \${voice.name} (\${voice.lang})\`);
    });
    return voices;
}

// اختيار صوت معين
function speakWithVoice(text, voiceName) {
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === voiceName);
    
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }
    window.speechSynthesis.speak(utterance);
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// قراءة المهام بصوت عالٍ
function readTasksAloud() {
    const tasks = taskManager.getAllTasks();
    if (tasks.length === 0) {
        speak("لا توجد مهام لعرضها");
        return;
    }
    
    let text = "لديك " + tasks.length + " مهام. ";
    const pending = tasks.filter(t => t.status === "pending");
    const completed = tasks.filter(t => t.status === "completed");
    const progress = tasks.filter(t => t.status === "progress");
    
    if (pending.length > 0) {
        text += pending.length + " مهام معلقة. ";
    }
    if (progress.length > 0) {
        text += progress.length + " مهام قيد التنفيذ. ";
    }
    if (completed.length > 0) {
        text += completed.length + " مهام مكتملة. ";
    }
    
    text += "المهام الأكثر أهمية: ";
    const highPriority = tasks.filter(t => t.priority === "high");
    highPriority.forEach((task, index) => {
        text += (index + 1) + ". " + task.title + ". ";
    });
    
    speak(text);
}

// قراءة تفاصيل مهمة محددة
function readTaskDetails(taskId) {
    const task = taskManager.findTask(taskId);
    if (!task) {
        speak("المهمة غير موجودة");
        return;
    }
    
    let text = "المهمة: " + task.title + ". ";
    if (task.description) {
        text += "الوصف: " + task.description + ". ";
    }
    text += "الحالة: " + task.status + ". ";
    text += "الأولوية: " + task.priority + ". ";
    if (task.dueDate) {
        text += "التاريخ المحدد: " + task.dueDate + ". ";
    }
    
    speak(text);
}

// قراءة الإحصائيات
function readStats() {
    const stats = taskManager.getStats();
    let text = "إحصائيات المهام: ";
    text += "إجمالي المهام: " + stats.total + ". ";
    text += "المهام المكتملة: " + stats.completed + ". ";
    text += "المهام المعلقة: " + stats.pending + ". ";
    text += "المهام قيد التنفيذ: " + stats.progress + ". ";
    text += "نسبة الإنجاز: " + stats.completionRate + " بالمائة. ";
    
    if (stats.completed === stats.total && stats.total > 0) {
        text += "مبارك! لقد أنجزت جميع المهام!";
    } else if (stats.completionRate > 50) {
        text += "أداء ممتاز، استمر في العمل!";
    }
    
    speak(text);
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح لاستخدام Web Speech API:</strong>
                    <ul>
                        <li>تحقق من دعم المتصفح قبل استخدام الـ API</li>
                        <li>استخدم <code>cancel()</code> لإيقاف القراءة تماماً</li>
                        <li>بعض المتصفحات تحتاج إلى تفاعل المستخدم أولاً (click)</li>
                        <li>استخدم <code>onvoiceschanged</code> لتحميل الأصوات</li>
                        <li>اختبر على متصفحات مختلفة للتأكد من التوافق</li>
                    </ul>
                </div>
            `
        },
        {
            id: '4-10',
            title: 'Drag & Drop - السحب والإفلات',
            content: `
                <h3>السحب والإفلات (Drag & Drop) - تفاعل متقدم</h3>
                <p>تقنية السحب والإفلات تسمح للمستخدمين بنقل العناصر عن طريق سحبها وإفلاتها في مكان آخر.</p>
                
                <h4>أساسيات Drag & Drop</h4>
                <div class="code-block">
// جعل العنصر قابل للسحب
<div draggable="true" id="dragElement">اسحبني</div>

// أحداث السحب
const dragElement = document.getElementById("dragElement");
const dropZone = document.getElementById("dropZone");

// أحداث العنصر المسحوب
dragElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.style.opacity = "0.5";
});

dragElement.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1";
});

// أحداث منطقة الإفلات
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault(); // ضروري للسماح بالإفلات
    e.target.style.background = "#facc15";
});

dropZone.addEventListener("dragleave", (e) => {
    e.target.style.background = "";
});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(id);
    e.target.appendChild(draggedElement);
    e.target.style.background = "";
});
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
// ترتيب المهام بالسحب والإفلات
let draggedTaskId = null;

function makeTasksDraggable() {
    document.querySelectorAll(".task-card").forEach(card => {
        card.setAttribute("draggable", "true");
        
        card.addEventListener("dragstart", function(e) {
            draggedTaskId = parseInt(this.dataset.id);
            e.dataTransfer.setData("text/plain", this.dataset.id);
            this.classList.add("dragging");
        });
        
        card.addEventListener("dragend", function(e) {
            this.classList.remove("dragging");
        });
    });
}

function setupDropZones() {
    const statusColumns = document.querySelectorAll(".task-column");
    
    statusColumns.forEach(column => {
        const status = column.dataset.status;
        
        column.addEventListener("dragover", function(e) {
            e.preventDefault();
            this.classList.add("drag-over");
        });
        
        column.addEventListener("dragleave", function(e) {
            this.classList.remove("drag-over");
        });
        
        column.addEventListener("drop", function(e) {
            e.preventDefault();
            this.classList.remove("drag-over");
            
            if (draggedTaskId !== null) {
                // تحديث حالة المهمة حسب العمود الذي أفلت فيه
                taskManager.updateTask(draggedTaskId, { status: status });
                renderTasks(taskManager.getAllTasks());
                updateStats();
                makeTasksDraggable();
                setupDropZones();
                draggedTaskId = null;
            }
        });
    });
}

// إعادة ترتيب المهام بالسحب
function reorderTasks(draggedId, targetId) {
    const tasks = taskManager.tasks;
    const draggedIndex = tasks.findIndex(t => t.id === draggedId);
    const targetIndex = tasks.findIndex(t => t.id === targetId);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    // إزالة العنصر من مكانه
    const [draggedTask] = tasks.splice(draggedIndex, 1);
    // إضافة العنصر في المكان الجديد
    tasks.splice(targetIndex, 0, draggedTask);
    
    taskManager.saveTasks();
    renderTasks(tasks);
    makeTasksDraggable();
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح لـ Drag & Drop:</strong>
                    <ul>
                        <li>استخدم <code>e.preventDefault()</code> في حدث <code>dragover</code> للسماح بالإفلات</li>
                        <li>استخدم <code>dataTransfer</code> لنقل البيانات بين الأحداث</li>
                        <li>أضف مؤشرات بصرية للمستخدم أثناء السحب</li>
                        <li>تأكد من إمكانية الوصول (وفر بدائل للوحة المفاتيح)</li>
                    </ul>
                </div>
            `
        }
    ]
};
