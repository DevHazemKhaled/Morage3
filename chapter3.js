const chapter3 = {
    id: 'ch3',
    title: 'CSS المتقدم - التصميم والتنسيق الاحترافي',
    description: 'تعلم CSS بشكل متقدم مع Flexbox، Grid، الثيمات، والاستجابة للشاشات، مع تطبيقات عملية لمشروع إدارة المهام',
    lessons: [
        {
            id: '3-1',
            title: 'ربط الأنماط والمحددات المتقدمة',
            content: `
                <h3>ربط CSS والمحددات المتقدمة</h3>
                <p>CSS هي لغة تنسيق الصفحات. تعلم كيفية ربطها واختيار العناصر بدقة.</p>
                
                <h4>طرق ربط CSS</h4>
                <ul>
                    <li><strong>Internal (داخلي):</strong> داخل وسم <code>&lt;style&gt;</code> في الـ head</li>
                    <li><strong>External (خارجي):</strong> ملف منفصل <code>.css</code> يتم ربطه بـ <code>&lt;link&gt;</code></li>
                    <li><strong>Inline (مباشر):</strong> داخل وسم HTML باستخدام <code>style=""</code></li>
                </ul>
                
                <div class="code-block">
/* ربط خارجي في HTML */
&lt;link rel="stylesheet" href="style.css"&gt;

/* ربط داخلي */
&lt;style&gt;
    body {
        background-color: #0b0f19;
    }
&lt;/style&gt;
                </div>
                
                <h4>المحددات المتقدمة</h4>
                <div class="code-block">
/* محدد العنصر */
p {
    color: #f8fafc;
}

/* محدد الفئة (class) */
.gold-text {
    color: #facc15;
}

/* محدد المعرف (id) */
#header {
    background: #131d31;
}

/* المحددات المركبة */
div .container p {
    margin: 10px; /* p داخل container داخل div */
}

h1, h2, h3 {
    font-weight: bold; /* عدة عناصر */
}

/* المحددات المتقدمة */
a:hover {
    color: #facc15; /* عند تمرير الماوس */
}

input:focus {
    border-color: #facc15; /* عند التركيز */
}

p:first-child {
    font-weight: bold; /* أول عنصر p */
}

div > p {
    color: blue; /* p مباشر داخل div */
}

div + p {
    margin-top: 0; /* p الذي يلي div مباشرة */
}

/* محددات الصفات */
input[type="text"] {
    border: 1px solid #ccc;
}

a[href^="https"] {
    color: green; /* روابط آمنة */
}

a[href$=".pdf"] {
    color: red; /* روابط PDF */
}
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للمحددات:</strong>
                    <ul>
                        <li>استخدم <code>class</code> للتنسيق العام</li>
                        <li>استخدم <code>id</code> للعناصر الفريدة</li>
                        <li>تجنب المحددات العميقة للحفاظ على الأداء</li>
                        <li>استخدم محددات الصفات للتحكم الدقيق</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* تنسيق بطاقة المهمة */
.task-card {
    background: var(--bg-card);
    padding: 1rem;
    border-radius: 8px;
    border-right: 4px solid var(--gold);
    transition: all 0.3s ease;
}

.task-card:hover {
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.task-card.completed {
    border-right-color: #22c55e;
    opacity: 0.7;
}

.task-card .task-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
}

.task-card .task-date {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.task-card .delete-btn {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.2s;
}

.task-card .delete-btn:hover {
    transform: scale(1.2);
}
                    </div>
                </div>
            `
        },
        {
            id: '3-2',
            title: 'نموذج الصندوق (Box Model) - التحكم في المسافات',
            content: `
                <h3>فهم نموذج الصندوق</h3>
                <p>كل عنصر في HTML هو صندوق. فهم نموذج الصندوق هو أساس التحكم في التخطيط.</p>
                
                <h4>مكونات نموذج الصندوق</h4>
                <ul>
                    <li><strong>Content:</strong> المحتوى الفعلي (نص، صورة، إلخ)</li>
                    <li><strong>Padding:</strong> المسافة بين المحتوى والحدود</li>
                    <li><strong>Border:</strong> الحدود حول المحتوى والـ Padding</li>
                    <li><strong>Margin:</strong> المسافة خارج الصندوق عن العناصر الأخرى</li>
                </ul>
                
                <div class="code-block">
/* مثال على نموذج الصندوق */
.box {
    width: 300px;
    height: 200px;
    padding: 20px; /* داخلي */
    border: 2px solid #facc15; /* حدود */
    margin: 30px; /* خارجي */
}

/* padding و margin باتجاهات محددة */
.box {
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-left: 15px;
    /* اختصار: padding: 10px 15px 10px 15px; */
}

/* box-sizing: border-box لتسهيل الحسابات */
* {
    box-sizing: border-box;
}
                </div>
                
                <div class="note-box">
                    <strong>🎯 قاعدة ذهبية:</strong>
                    <p>استخدم <code>box-sizing: border-box</code> لجعل العرض والارتفاع يشملان الـ padding والـ border، مما يسهل التخطيط.</p>
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* تصميم بطاقة المهمة باستخدام Box Model */
.task-card {
    background: var(--bg-card);
    padding: 1rem 1.2rem;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--border-light);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

/* مسافات داخلية لعناصر البطاقة */
.task-card .task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.task-card .task-title {
    margin: 0;
    font-size: 1rem;
}

.task-card .task-actions {
    display: flex;
    gap: 0.5rem;
}

.task-card .task-actions button {
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
}
                    </div>
                </div>
            `
        },
        {
            id: '3-3',
            title: 'خصائص العرض (Display) و Flexbox',
            content: `
                <h3>Flexbox - توزيع العناصر بمرونة</h3>
                <p>Flexbox هو نظام تخطيط حديث يسهل توزيع العناصر وتوسيطها بشكل مرن.</p>
                
                <h4>خصائص العرض الأساسية</h4>
                <div class="code-block">
/* block - يأخذ عرض الصفحة بالكامل */
div {
    display: block;
}

/* inline - يأخذ حجم المحتوى فقط */
span {
    display: inline;
}

/* inline-block - يجمع بين خصائص inline و block */
.btn {
    display: inline-block;
    padding: 10px 20px;
}
                </div>
                
                <h4>Flexbox الأساسيات</h4>
                <div class="code-block">
/* الحاوية الرئيسية (Flex Container) */
.flex-container {
    display: flex;
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    justify-content: center; /* توزيع أفقي: flex-start, flex-end, center, space-between, space-around, space-evenly */
    align-items: center; /* توزيع عمودي: stretch, flex-start, flex-end, center, baseline */
    flex-wrap: wrap; /* wrap, nowrap, wrap-reverse */
    gap: 1rem; /* المسافة بين العناصر */
}

/* العناصر الفرعية (Flex Items) */
.flex-item {
    flex: 1; /* يأخذ مساحة متساوية */
    flex-grow: 1; /* يسمح بالنمو */
    flex-shrink: 0; /* يمنع الانكماش */
    flex-basis: 200px; /* الحجم الأساسي */
    align-self: flex-start; /* تجاوز align-items */
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* توزيع بطاقات المهام */
.tasks-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 0;
}

.tasks-grid .task-card {
    flex: 1 1 280px; /* grow shrink basis */
    max-width: 100%;
}

/* شريط التنقل العلوي */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1.5rem;
    background: var(--bg-surface);
    border-bottom: 1px solid var(--border-color);
}

.navbar .nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}

.navbar .nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
}

.navbar .nav-links a:hover {
    color: var(--gold);
}

/* توزيع أزرار التحكم */
.task-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.task-actions button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    transition: all 0.2s;
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح Flexbox:</strong>
                    <ul>
                        <li>استخدم <code>justify-content</code> للتوزيع الأفقي</li>
                        <li>استخدم <code>align-items</code> للتوزيع العمودي</li>
                        <li>استخدم <code>gap</code> بدلاً من margin للحصول على مسافات متساوية</li>
                        <li>استخدم <code>flex: 1</code> لتوزيع المساحة بالتساوي</li>
                    </ul>
                </div>
            `
        },
        {
            id: '3-4',
            title: 'CSS Grid - التخطيط ثنائي الأبعاد',
            content: `
                <h3>CSS Grid - نظام شبكات قوي</h3>
                <p>CSS Grid هو نظام تخطيط ثنائي الأبعاد (صفوف وأعمدة) يمنحك تحكماً كاملاً في توزيع العناصر.</p>
                
                <h4>أساسيات CSS Grid</h4>
                <div class="code-block">
/* تعريف الشبكة */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 أعمدة متساوية */
    grid-template-rows: auto 200px auto; /* 3 صفوف بأحجام مختلفة */
    gap: 1.5rem; /* المسافات بين الصفوف والأعمدة */
}

/* تخصيص العناصر داخل الشبكة */
.grid-item-1 {
    grid-column: 1 / 3; /* يبدأ من العمود 1 وينتهي عند 3 (يمتد لعمودين) */
    grid-row: 1 / 2; /* يبدأ من الصف 1 وينتهي عند 2 */
}
                </div>
                
                <h4>أنماط الشبكات الشائعة</h4>
                <div class="code-block">
/* شبكة متجاوبة */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

/* تخطيط صفحة كاملة (header, main, sidebar, footer) */
.page-layout {
    display: grid;
    grid-template-areas: 
        "header header header"
        "main main sidebar"
        "footer footer footer";
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    min-height: 100vh;
}

.header {
    grid-area: header;
    background: var(--bg-surface);
    padding: 1rem;
}

.main {
    grid-area: main;
    background: var(--bg-body);
    padding: 1rem;
}

.sidebar {
    grid-area: sidebar;
    background: var(--bg-card);
    padding: 1rem;
}

.footer {
    grid-area: footer;
    background: var(--bg-surface);
    padding: 1rem;
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* تخطيط صفحة إدارة المهام */
.task-dashboard {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
    min-height: 80vh;
}

/* قائمة المهام الجانبية */
.task-sidebar {
    background: var(--bg-card);
    border-radius: 12px;
    padding: 1.2rem;
    border: 1px solid var(--border-light);
}

/* منطقة المهام الرئيسية */
.task-main {
    background: var(--bg-card);
    border-radius: 12px;
    padding: 1.2rem;
    border: 1px solid var(--border-light);
}

/* شبكة المهام */
.tasks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

/* استجابة للشاشات الصغيرة */
@media (max-width: 768px) {
    .task-dashboard {
        grid-template-columns: 1fr;
    }
    
    .tasks-grid {
        grid-template-columns: 1fr;
    }
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 متى تستخدم Flexbox ومتى تستخدم Grid؟</strong>
                    <ul>
                        <li><strong>Flexbox:</strong> للتوزيع في اتجاه واحد (صف أو عمود) - مثالي للقوائم والأشرطة</li>
                        <li><strong>Grid:</strong> للتوزيع في اتجاهين (صفوف وأعمدة) - مثالي للتخطيط الكامل للصفحة</li>
                    </ul>
                </div>
            `
        },
        {
            id: '3-5',
            title: 'التموضع (Positioning) والثبات (Sticky)',
            content: `
                <h3>التموضع المتقدم - التحكم في مكان العناصر</h3>
                <p>خاصية <code>position</code> تتحكم في كيفية وضع العناصر في الصفحة.</p>
                
                <h4>أنواع التموضع</h4>
                <div class="code-block">
/* position: static (الوضع الافتراضي) */
.static-element {
    position: static; /* يتبع تدفق الصفحة الطبيعي */
}

/* position: relative (نسبي) */
.relative-element {
    position: relative;
    top: 10px; /* يتحرك 10px للأسفل */
    left: 20px; /* يتحرك 20px لليمين */
}

/* position: absolute (مطلق) */
.absolute-element {
    position: absolute;
    top: 0;
    right: 0; /* يتوضع في أعلى يمين أقرب عنصر relative */
}

/* position: fixed (ثابت) */
.fixed-element {
    position: fixed;
    bottom: 20px;
    right: 20px; /* يثبت في مكانه حتى عند التمرير */
    z-index: 1000;
}

/* position: sticky (لاصق) - مزيج بين relative و fixed */
.sticky-element {
    position: sticky;
    top: 0; /* يلتصق بأعلى الصفحة عند التمرير */
    background: var(--bg-surface);
    padding: 1rem;
    z-index: 100;
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* زر "إضافة مهمة" ثابت */
.add-task-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--gold);
    color: var(--bg-body);
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(251, 191, 36, 0.3);
    transition: all 0.3s;
    z-index: 100;
}

.add-task-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 24px rgba(251, 191, 36, 0.4);
}

/* رأس القائمة الثابت */
.task-header-sticky {
    position: sticky;
    top: 0;
    background: var(--bg-card);
    padding: 0.8rem 1rem;
    border-bottom: 2px solid var(--border-color);
    z-index: 10;
    backdrop-filter: blur(8px);
}

/* مؤشرات حالة المهام */
.status-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #22c55e;
    color: white;
    font-size: 0.6rem;
    padding: 0.1rem 0.4rem;
    border-radius: 50%;
    min-width: 18px;
    text-align: center;
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 متى تستخدم كل نوع؟</strong>
                    <ul>
                        <li><strong>relative:</strong> لتحريك العنصر قليلاً دون التأثير على الآخرين</li>
                        <li><strong>absolute:</strong> لوضع عنصر داخل عنصر آخر بدقة</li>
                        <li><strong>fixed:</strong> للعناصر التي تبقى ثابتة (أزرار، إشعارات)</li>
                        <li><strong>sticky:</strong> للقوائم أو الرؤوس التي تثبت عند التمرير</li>
                    </ul>
                </div>
            `
        },
        {
            id: '3-6',
            title: 'المتغيرات في CSS والثيمات',
            content: `
                <h3>CSS Custom Properties (المتغيرات) - توحيد التصميم</h3>
                <p>المتغيرات في CSS تسمح بتخزين القيم وإعادة استخدامها بسهولة، مما يسهل إدارة الثيمات.</p>
                
                <h4>تعريف واستخدام المتغيرات</h4>
                <div class="code-block">
/* تعريف المتغيرات في الجذر */
:root {
    /* الألوان الرئيسية */
    --gold: #facc15;
    --bg-dark: #0b0f19;
    --bg-card: #131d31;
    --text-light: #f8fafc;
    --text-muted: #94a3b8;
    
    /* الأحجام */
    --radius: 12px;
    --shadow: 0 8px 32px rgba(0,0,0,0.4);
    
    /* الخطوط */
    --font-base: 1rem;
    --font-heading: 2.5rem;
}

/* استخدام المتغيرات */
body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    font-size: var(--font-base);
}

.card {
    background: var(--bg-card);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 1px solid var(--gold);
}
                </div>
                
                <h4>بناء الثيمات باستخدام المتغيرات</h4>
                <div class="code-block">
/* الثيم الافتراضي (داكن) */
:root {
    --bg-primary: #0b0f19;
    --text-primary: #f8fafc;
    --bg-card: #131d31;
}

/* الثيم الفاتح */
[data-theme="light"] {
    --bg-primary: #f8fafc;
    --text-primary: #0b0f19;
    --bg-card: #ffffff;
}

/* الثيم عالي التباين */
.high-contrast {
    --bg-primary: #000000 !important;
    --text-primary: #ffff00 !important;
    --bg-card: #1a1a1a !important;
}

/* استخدام المتغيرات في العناصر */
body {
    background: var(--bg-primary);
    color: var(--text-primary);
}

.card {
    background: var(--bg-card);
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* متغيرات مخصصة لمشروع المهام */
:root {
    /* ألوان الحالات */
    --status-pending: #facc15;
    --status-progress: #3b82f6;
    --status-completed: #22c55e;
    --status-overdue: #ef4444;
    
    /* أحجام المهام */
    --task-padding: 0.8rem 1.2rem;
    --task-radius: 8px;
}

/* استخدام المتغيرات */
.task-card.pending {
    border-right-color: var(--status-pending);
}

.task-card.progress {
    border-right-color: var(--status-progress);
}

.task-card.completed {
    border-right-color: var(--status-completed);
}

.task-card.overdue {
    border-right-color: var(--status-overdue);
}

/* تغيير الثيم ديناميكياً */
[data-theme="light"] .task-card {
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

[data-theme="dark"] .task-card {
    background: #1a2332;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 فوائد المتغيرات في CSS:</strong>
                    <ul>
                        <li>تسهيل تغيير الثيمات (داكن/فاتح)</li>
                        <li>الحفاظ على تناسق الألوان والأحجام</li>
                        <li>تسهيل الصيانة والتحديث</li>
                        <li>إمكانية التغيير الديناميكي باستخدام JavaScript</li>
                    </ul>
                </div>
            `
        },
        {
            id: '3-7',
            title: 'الاستجابة للشاشات (Media Queries)',
            content: `
                <h3>التصميم المتجاوب - Media Queries</h3>
                <p>Media Queries تسمح بتطبيق أنماط مختلفة حسب حجم الشاشة، مما يجعل الموقع يعمل على جميع الأجهزة.</p>
                
                <h4>أساسيات Media Queries</h4>
                <div class="code-block">
/* نقاط التوقف الشائعة */

/* الهواتف (أقل من 600px) */
@media (max-width: 600px) {
    body {
        font-size: 14px;
    }
    .container {
        padding: 0.5rem;
    }
}

/* الأجهزة اللوحية (601px - 900px) */
@media (min-width: 601px) and (max-width: 900px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* أجهزة الكمبيوتر (أكثر من 900px) */
@media (min-width: 901px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
                </div>
                
                <h4>استراتيجيات التصميم المتجاوب</h4>
                <div class="code-block">
/* 1. Mobile-first (تبدأ بالهواتف ثم تكبر) */
/* أنماط الهواتف (افتراضية) */
.container {
    width: 100%;
    padding: 1rem;
}

/* تحسينات للأجهزة اللوحية */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* تحسينات للكمبيوتر */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}

/* 2. توجيه الشاشة (Portrait / Landscape) */
@media (orientation: portrait) {
    .sidebar {
        display: none; /* إخفاء القائمة الجانبية في الوضع الرأسي */
    }
}

@media (orientation: landscape) {
    .header {
        flex-direction: row;
    }
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* تصميم متجاوب لإدارة المهام */

/* الشاشات الكبيرة (ديسكتوب) */
.task-dashboard {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
}

/* الأجهزة اللوحية */
@media (max-width: 1024px) {
    .task-dashboard {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .task-sidebar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.5rem;
    }
}

/* الهواتف */
@media (max-width: 600px) {
    .task-dashboard {
        padding: 0.5rem;
    }
    
    .tasks-grid {
        grid-template-columns: 1fr;
    }
    
    .task-card {
        padding: 0.6rem;
    }
    
    .task-card .task-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;
    }
    
    .task-actions {
        width: 100%;
        justify-content: flex-start;
    }
    
    .add-task-btn {
        bottom: 1rem;
        right: 1rem;
        padding: 0.8rem 1.2rem;
        font-size: 0.9rem;
    }
}

/* الشاشات الصغيرة جداً */
@media (max-width: 400px) {
    body {
        font-size: 14px;
    }
    
    .task-card .task-title {
        font-size: 0.9rem;
    }
    
    .task-card .task-date {
        font-size: 0.7rem;
    }
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>📱 نصائح للتصميم المتجاوب:</strong>
                    <ul>
                        <li>استخدم <code>rem</code> بدلاً من <code>px</code> للخطوط</li>
                        <li>استخدم <code>%</code> و <code>vw/vh</code> للأحجام</li>
                        <li>اختبر على أجهزة حقيقية أو باستخدام أدوات المطورين</li>
                        <li>استخدم <code>max-width: 100%</code> للصور</li>
                        <li>فكر في إمكانية اللمس (زيادة حجم الأزرار للهواتف)</li>
                    </ul>
                </div>
            `
        },
        {
            id: '3-8',
            title: 'الأنيميشن والترانزيشن - تحريك العناصر',
            content: `
                <h3>الأنيميشن والترانزيشن - إضافة الحياة للتصميم</h3>
                <p>الحركات تجعل التصميم أكثر جاذبية وتفاعلية. تعلم كيفية استخدام transition و animation.</p>
                
                <h4>الترانزيشن (Transition)</h4>
                <div class="code-block">
/* transition: property duration timing-function delay */
.button {
    background: #131d31;
    color: #f8fafc;
    padding: 10px 20px;
    border: 2px solid #facc15;
    transition: all 0.3s ease;
}

.button:hover {
    background: #facc15;
    color: #0b0f19;
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(250,204,21,0.3);
}

/* transition متعددة */
.card {
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        opacity 0.5s ease-in;
}
                </div>
                
                <h4>الأنيميشن (Keyframes Animation)</h4>
                <div class="code-block">
/* تعريف الحركة باستخدام keyframes */
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* استخدام الأنيميشن */
.hero-text {
    animation: fadeInUp 0.8s ease-out;
}

.notification-badge {
    animation: pulse 2s ease-in-out infinite;
}

.loading-spinner {
    animation: spin 1s linear infinite;
}
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
/* تأثيرات المهام */

/* إضافة مهمة جديدة */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.task-card {
    animation: slideIn 0.3s ease-out;
}

/* حذف مهمة */
@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(20px);
    }
}

.task-card.removing {
    animation: slideOut 0.3s ease-in forwards;
}

/* تأثير hover على المهام */
.task-card {
    transition: all 0.3s ease;
}

.task-card:hover {
    transform: translateX(-4px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

/* إكمال المهمة */
@keyframes completeTask {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
}

.task-card.completing {
    animation: completeTask 0.4s ease;
}

.task-card.completed {
    opacity: 0.7;
    border-right-color: #22c55e;
}

.task-card.completed .task-title {
    text-decoration: line-through;
    color: var(--text-muted);
}

/* تقدم المهمة */
.progress-bar {
    width: 100%;
    height: 4px;
    background: var(--border-color);
    border-radius: 2px;
    overflow: hidden;
    margin-top: 0.5rem;
}

.progress-bar .progress-fill {
    height: 100%;
    background: var(--gold);
    border-radius: 2px;
    transition: width 0.5s ease;
}
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للحركات:</strong>
                    <ul>
                        <li>استخدم <code>transform</code> و <code>opacity</code> للحصول على أداء أفضل</li>
                        <li>لا تبالغ في الحركات (اعتبرها دعم وليس أساساً)</li>
                        <li>استخدم <code>prefers-reduced-motion</code> لمراعاة المستخدمين الذين لا يحبون الحركة</li>
                        <li>اختبر الحركات على مختلف الأجهزة</li>
                    </ul>
                </div>
            `
        }
    ]
};
