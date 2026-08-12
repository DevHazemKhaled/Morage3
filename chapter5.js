const chapter5 = {
    id: 'ch5',
    title: 'المشروع العملي النهائي - تطبيق إدارة المهام',
    description: 'تطبيق كل ما تعلمته في مشروع واحد متكامل خطوة بخطوة مع شرح تفصيلي',
    lessons: [
        // ============================================================
        // الدرس 1: مقدمة المشروع وفكرته
        // ============================================================
        {
            id: '5-1',
            title: 'مقدمة المشروع - ما الذي سنبنيه؟',
            content: `
                <h3>مرحباً بك في المشروع النهائي!</h3>
                <p>بعد أن تعلمت HTML و CSS و JavaScript في الفصول السابقة، حان الوقت لتطبيق كل ما تعلمته في مشروع واحد متكامل.</p>
                
                <h4>ما هو تطبيق إدارة المهام؟</h4>
                <p>هو تطبيق ويب يساعد المستخدم على تنظيم مهامه اليومية. يمكنك من:</p>
                <ul>
                    <li><strong>إضافة مهام جديدة</strong> مع عنوان ووصف وأولوية وتاريخ</li>
                    <li><strong>عرض جميع المهام</strong> في قائمة منظمة</li>
                    <li><strong>تغيير حالة المهمة</strong> (معلقة → قيد التنفيذ → مكتملة)</li>
                    <li><strong>حذف المهام</strong> غير المرغوب فيها</li>
                    <li><strong>تصفية المهام</strong> حسب حالتها (الكل، معلقة، قيد التنفيذ، مكتملة)</li>
                    <li><strong>البحث عن مهمة</strong> باستخدام كلمات مفتاحية</li>
                    <li><strong>حفظ المهام</strong> في المتصفح حتى لا تضيع عند إغلاق الصفحة</li>
                </ul>
                
                <h4>لماذا هذا المشروع؟</h4>
                <ul>
                    <li>يطبق <strong>جميع</strong> مفاهيم HTML التي تعلمتها (العناصر الدلالية، النماذج، الجداول)</li>
                    <li>يطبق <strong>جميع</strong> مفاهيم CSS التي تعلمتها (Flexbox، Grid، الثيمات، المتغيرات، الاستجابة)</li>
                    <li>يطبق <strong>جميع</strong> مفاهيم JavaScript التي تعلمتها (DOM، الأحداث، LocalStorage، الدوال)</li>
                    <li>مشروع <strong>واقعي</strong> يمكنك استخدامه في حياتك اليومية</li>
                    <li>مشروع <strong>قابل للتطوير</strong> يمكنك إضافة ميزات جديدة له</li>
                </ul>
                
                <h4>ما سنبنيه بالضبط؟</h4>
                <p>سنبني تطبيقاً كاملاً يحتوي على:</p>
                <ul>
                    <li><strong>شريط إمكانية الوصول</strong> - لتكبير الخط وتغيير الثيم والتباين والقراءة الصوتية</li>
                    <li><strong>هيدر</strong> - يحتوي على عنوان التطبيق وإحصائيات سريعة (عدد المهام الكلي، المكتملة، المعلقة)</li>
                    <li><strong>شريط التحكم</strong> - زر لإضافة مهام جديدة، أزرار لتصفية المهام، وحقل للبحث</li>
                    <li><strong>نافذة منبثقة (مودال)</strong> - لإضافة مهمة جديدة مع عنوان ووصف وأولوية وتاريخ</li>
                    <li><strong>شبكة المهام</strong> - تعرض جميع المهام على شكل بطاقات</li>
                    <li><strong>الفوتر</strong> - معلومات حقوق النشر</li>
                </ul>
                
                <div class="note-box">
                    <strong>📋 هذا المشروع سيكون إضافة رائعة لسيرتك الذاتية!</strong>
                    <p>المشاريع العملية هي أفضل طريقة لإثبات مهاراتك لأصحاب العمل.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 2: هيكل المشروع والملفات
        // ============================================================
        {
            id: '5-2',
            title: 'هيكل المشروع - تنظيم الملفات',
            content: `
                <h3>تنظيم ملفات المشروع</h3>
                <p>قبل أن نبدأ في كتابة الكود، دعنا ننظم ملفات المشروع بشكل صحيح.</p>
                
                <h4>هيكل الملفات</h4>
                <p>سنحتاج إلى 3 ملفات فقط:</p>
                <div class="code-block">
📁 مشروع-إدارة-المهام/
├── 📄 index.html      (الهيكل الرئيسي - كل ما يظهر في الصفحة)
├── 📄 style.css       (التنسيقات - الألوان، الأحجام، التخطيط)
└── 📄 app.js          (المنطق - التفاعل، البيانات، الأحداث)
                </div>
                
                <h4>ماذا يحتوي كل ملف؟</h4>
                <ul>
                    <li><strong>index.html:</strong> يحتوي على كل عناصر الصفحة (الأزرار، النماذج، القوائم). هذا هو الملف الذي نفتحه في المتصفح.</li>
                    <li><strong>style.css:</strong> يحتوي على كل التنسيقات (الألوان، الخطوط، التخطيط، الثيمات). يتحكم في شكل الصفحة.</li>
                    <li><strong>app.js:</strong> يحتوي على كل المنطق (إضافة المهام، حذفها، حفظها، الأحداث). يتحكم في سلوك الصفحة.</li>
                </ul>
                
                <h4>كيف ترتبط الملفات ببعضها؟</h4>
                <ul>
                    <li>ملف <code>index.html</code> يربط ملف <code>style.css</code> باستخدام <code>&lt;link&gt;</code></li>
                    <li>ملف <code>index.html</code> يربط ملف <code>app.js</code> باستخدام <code>&lt;script&gt;</code></li>
                    <li>ملف <code>app.js</code> يتعامل مع عناصر <code>index.html</code> عبر DOM</li>
                </ul>
                
                <div class="note-box">
                    <strong>💡 نصيحة:</strong>
                    <p>حافظ على تنظيم ملفاتك. هذا يجعل المشروع سهل الصيانة والتطوير.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 3: بناء الهيكل - شريط إمكانية الوصول
        // ============================================================
        {
            id: '5-3',
            title: 'بناء الهيكل - شريط إمكانية الوصول',
            content: `
                <h3>بناء شريط إمكانية الوصول</h3>
                <p>شريط إمكانية الوصول هو أول عنصر في الصفحة. يحتوي على أدوات تساعد جميع المستخدمين على استخدام التطبيق بسهولة.</p>
                
                <h4>ما هي أدوات إمكانية الوصول؟</h4>
                <ul>
                    <li><strong>تكبير/تصغير الخط:</strong> يساعد ضعاف البصر على قراءة النصوص بسهولة</li>
                    <li><strong>تبديل الثيم:</strong> يمكن المستخدم من اختيار الثيم الداكن أو الفاتح حسب راحته</li>
                    <li><strong>التباين العالي:</strong> يساعد المستخدمين الذين يعانون من صعوبة في تمييز الألوان</li>
                    <li><strong>القراءة الصوتية:</strong> تقرأ محتوى الصفحة بصوت مسموع لضعاف البصر أو لمن يفضلون الاستماع</li>
                </ul>
                
                <h4>كود شريط إمكانية الوصول</h4>
                <div class="code-block">
                    &lt;!-- شريط إمكانية الوصول --&gt;
                    &lt;div class="accessibility-bar" id="accessBar"&gt;
                        &lt;!-- زر تصغير الخط --&gt;
                        &lt;button id="fontDec"&gt;أ-&lt;/button&gt;
                        
                        &lt;!-- عرض حجم الخط الحالي --&gt;
                        &lt;span id="fontSizeDisplay"&gt;16&lt;/span&gt;
                        
                        &lt;!-- زر تكبير الخط --&gt;
                        &lt;button id="fontInc"&gt;أ+&lt;/button&gt;
                        
                        &lt;!-- زر تبديل الثيم (داكن/فاتح) --&gt;
                        &lt;button id="themeToggle"&gt;🌙&lt;/button&gt;
                        
                        &lt;!-- زر التباين العالي --&gt;
                        &lt;button id="contrastToggle"&gt;♿&lt;/button&gt;
                        
                        &lt;!-- زر القراءة الصوتية --&gt;
                        &lt;button id="speakBtn"&gt;🔊&lt;/button&gt;
                    &lt;/div&gt;
                </div>
                
                <h4>شرح كل عنصر</h4>
                <ul>
                    <li><strong>div.accessibility-bar:</strong> الحاوية الرئيسية للشريط، تحمل class للتصميم و id للتحكم من JavaScript</li>
                    <li><strong>button#fontDec:</strong> زر تصغير الخط، عند الضغط عليه يصغر حجم النص</li>
                    <li><strong>span#fontSizeDisplay:</strong> يعرض حجم الخط الحالي بالميلمتر (px)</li>
                    <li><strong>button#fontInc:</strong> زر تكبير الخط، عند الضغط عليه يكبر حجم النص</li>
                    <li><strong>button#themeToggle:</strong> زر تبديل الثيم بين الداكن والفاتح</li>
                    <li><strong>button#contrastToggle:</strong> زر تفعيل/إلغاء التباين العالي</li>
                    <li><strong>button#speakBtn:</strong> زر تشغيل/إيقاف القراءة الصوتية للمحتوى</li>
                </ul>
                
                <div class="note-box">
                    <strong>♿ إمكانية الوصول مهمة للجميع!</strong>
                    <p>حوالي 15% من سكان العالم لديهم إعاقة ما. جعل تطبيقك متاحاً للجميع ليس فقط واجباً أخلاقياً، بل يزيد من عدد المستخدمين المحتملين.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 4: بناء الهيكل - الهيدر والإحصائيات
        // ============================================================
        {
            id: '5-4',
            title: 'بناء الهيكل - الهيدر والإحصائيات',
            content: `
                <h3>بناء الهيدر وعرض الإحصائيات</h3>
                <p>الهيدر هو الجزء العلوي من الصفحة. يحتوي على عنوان التطبيق وإحصائيات سريعة عن المهام.</p>
                
                <h4>ماذا يحتوي الهيدر؟</h4>
                <ul>
                    <li><strong>عنوان التطبيق:</strong> "📋 مدير المهام" - يظهر في أعلى الصفحة</li>
                    <li><strong>الإحصائيات:</strong> عدد المهام الكلي، عدد المهام المكتملة، عدد المهام المعلقة</li>
                </ul>
                
                <h4>لماذا نحتاج الإحصائيات؟</h4>
                <p>الإحصائيات تعطي المستخدم نظرة سريعة على حالة مهامه بدون الحاجة لعدّها يدوياً. هذا يحسن تجربة المستخدم.</p>
                
                <h4>كود الهيدر والإحصائيات</h4>
                <div class="code-block">
                    &lt;!-- الهيدر --&gt;
                    &lt;header class="main-header"&gt;
                        &lt;div class="header-content"&gt;
                            &lt;!-- عنوان التطبيق --&gt;
                            &lt;h1&gt;📋 مدير المهام&lt;/h1&gt;
                            
                            &lt;!-- الإحصائيات --&gt;
                            &lt;div class="header-stats"&gt;
                                &lt;!-- المهام الكلية --&gt;
                                &lt;div class="stat"&gt;
                                    &lt;span id="totalTasks"&gt;0&lt;/span&gt;  &lt;!-- الرقم --&gt;
                                    &lt;label&gt;الإجمالي&lt;/label&gt;    &lt;!-- التسمية --&gt;
                                &lt;/div&gt;
                                
                                &lt;!-- المهام المكتملة --&gt;
                                &lt;div class="stat"&gt;
                                    &lt;span id="completedTasks"&gt;0&lt;/span&gt;
                                    &lt;label&gt;مكتملة&lt;/label&gt;
                                &lt;/div&gt;
                                
                                &lt;!-- المهام المعلقة --&gt;
                                &lt;div class="stat"&gt;
                                    &lt;span id="pendingTasks"&gt;0&lt;/span&gt;
                                    &lt;label&gt;معلقة&lt;/label&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/header&gt;
                </div>
                
                <h4>شرح كل عنصر</h4>
                <ul>
                    <li><strong>header.main-header:</strong> الهيدر الرئيسي للصفحة، يحمل class للتصميم</li>
                    <li><strong>div.header-content:</strong> حاوية داخلية لتنظيم المحتوى</li>
                    <li><strong>h1:</strong> عنوان التطبيق الرئيسي (يظهر مرة واحدة فقط في الصفحة)</li>
                    <li><strong>div.header-stats:</strong> حاوية الإحصائيات</li>
                    <li><strong>div.stat:</strong> كل إحصائية منفصلة</li>
                    <li><strong>span#totalTasks:</strong> يعرض عدد المهام الكلي (يتم تحديثه من JavaScript)</li>
                    <li><strong>span#completedTasks:</strong> يعرض عدد المهام المكتملة</li>
                    <li><strong>span#pendingTasks:</strong> يعرض عدد المهام المعلقة</li>
                    <li><strong>label:</strong> تسمية توضيحية لكل إحصائية</li>
                </ul>
                
                <div class="note-box">
                    <strong>🎯 ملاحظة:</strong>
                    <p>الأرقام في الإحصائيات تبدأ بـ 0، وسيتم تحديثها تلقائياً عند إضافة أو حذف أو تغيير حالة المهام.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 5: بناء الهيكل - شريط التحكم
        // ============================================================
        {
            id: '5-5',
            title: 'بناء الهيكل - شريط التحكم (الأزرار والبحث)',
            content: `
                <h3>بناء شريط التحكم</h3>
                <p>شريط التحكم يحتوي على أدوات التفاعل الرئيسية: إضافة مهمة، تصفية المهام، والبحث.</p>
                
                <h4>ماذا يحتوي شريط التحكم؟</h4>
                <ul>
                    <li><strong>زر إضافة مهمة:</strong> يفتح نافذة لإضافة مهمة جديدة</li>
                    <li><strong>أزرار التصفية:</strong> تعرض المهام حسب حالتها (الكل، معلقة، قيد التنفيذ، مكتملة)</li>
                    <li><strong>حقل البحث:</strong> يسمح بالبحث عن مهمة محددة</li>
                </ul>
                
                <h4>كود شريط التحكم</h4>
                <div class="code-block">
                    &lt;!-- شريط التحكم --&gt;
                    &lt;section class="control-bar"&gt;
                        &lt;!-- زر إضافة مهمة --&gt;
                        &lt;button id="showAddTask" class="btn-primary"&gt;➕ إضافة مهمة&lt;/button&gt;
                        
                        &lt;!-- أزرار التصفية --&gt;
                        &lt;div class="filters"&gt;
                            &lt;button class="filter-btn active" data-filter="all"&gt;الكل&lt;/button&gt;
                            &lt;button class="filter-btn" data-filter="pending"&gt;معلقة&lt;/button&gt;
                            &lt;button class="filter-btn" data-filter="progress"&gt;قيد التنفيذ&lt;/button&gt;
                            &lt;button class="filter-btn" data-filter="completed"&gt;مكتملة&lt;/button&gt;
                        &lt;/div&gt;
                        
                        &lt;!-- حقل البحث --&gt;
                        &lt;input type="text" id="searchInput" placeholder="🔍 بحث عن مهمة..."&gt;
                    &lt;/section&gt;
                </div>
                
                <h4>شرح كل عنصر</h4>
                <ul>
                    <li><strong>section.control-bar:</strong> حاوية شريط التحكم</li>
                    <li><strong>button#showAddTask:</strong> زر فتح نافذة إضافة مهمة، يحمل class للتصميم</li>
                    <li><strong>div.filters:</strong> حاوية أزرار التصفية</li>
                    <li><strong>button.filter-btn:</strong> كل زر تصفية، يحمل class للتصميم</li>
                    <li><strong>data-filter="all":</strong> يحدد نوع التصفية (الكل، معلقة، إلخ)</li>
                    <li><strong>class="active":</strong> يجعل الزر مميزاً (يظهر أي فلتر نشط حالياً)</li>
                    <li><strong>input#searchInput:</strong> حقل إدخال للبحث عن المهام</li>
                    <li><strong>placeholder:</strong> نص توجيهي يظهر داخل الحقل</li>
                </ul>
                
                <div class="note-box">
                    <strong>💡 كيف تعمل أزرار التصفية؟</strong>
                    <p>عند الضغط على زر "مكتملة" مثلاً، سيتم عرض المهام المكتملة فقط. الزر النشط يظهر بلون مختلف ليدل المستخدم على الفلتر الحالي.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 6: بناء الهيكل - نافذة إضافة المهمة (المودال)
        // ============================================================
        {
            id: '5-6',
            title: 'بناء الهيكل - نافذة إضافة المهمة (المودال)',
            content: `
                <h3>بناء نافذة إضافة المهمة</h3>
                <p>نافذة المودال هي نافذة منبثقة تظهر فوق المحتوى لإضافة مهمة جديدة.</p>
                
                <h4>ما هي النافذة المنبثقة (المودال)؟</h4>
                <p>المودال هو عنصر يظهر في منتصف الشاشة فوق كل المحتوى، ويمنع التفاعل مع بقية الصفحة حتى يتم إغلاقه. يستخدم عادة للنماذج والتنبيهات.</p>
                
                <h4>ماذا يحتوي المودال؟</h4>
                <ul>
                    <li><strong>زر إغلاق:</strong> لإغلاق النافذة</li>
                    <li><strong>عنوان:</strong> "إضافة مهمة جديدة"</li>
                    <li><strong>نموذج (Form):</strong> يحتوي على حقول لإدخال بيانات المهمة</li>
                </ul>
                
                <h4>كود المودال</h4>
                <div class="code-block">
                    &lt;!-- نافذة إضافة مهمة (مودال) --&gt;
                    &lt;div class="modal" id="taskModal"&gt;
                        &lt;div class="modal-content"&gt;
                            &lt;!-- زر الإغلاق --&gt;
                            &lt;span class="close" id="closeModal"&gt;&times;&lt;/span&gt;
                            
                            &lt;!-- عنوان النافذة --&gt;
                            &lt;h2&gt;إضافة مهمة جديدة&lt;/h2&gt;
                            
                            &lt;!-- نموذج إضافة المهمة --&gt;
                            &lt;form id="taskForm"&gt;
                                &lt;!-- حقل عنوان المهمة (إلزامي) --&gt;
                                &lt;input type="text" id="taskTitle" placeholder="عنوان المهمة" required&gt;
                                
                                &lt;!-- حقل وصف المهمة (اختياري) --&gt;
                                &lt;textarea id="taskDesc" placeholder="وصف المهمة (اختياري)"&gt;&lt;/textarea&gt;
                                
                                &lt;!-- قائمة منسدلة لاختيار الأولوية --&gt;
                                &lt;select id="taskPriority"&gt;
                                    &lt;option value="high"&gt;🔴 عالية&lt;/option&gt;
                                    &lt;option value="medium" selected&gt;🟡 متوسطة&lt;/option&gt;
                                    &lt;option value="low"&gt;🟢 منخفضة&lt;/option&gt;
                                &lt;/select&gt;
                                
                                &lt;!-- حقل تاريخ الاستحقاق --&gt;
                                &lt;input type="date" id="taskDueDate"&gt;
                                
                                &lt;!-- زر إرسال النموذج --&gt;
                                &lt;button type="submit" class="btn-primary"&gt;💾 حفظ المهمة&lt;/button&gt;
                            &lt;/form&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                </div>
                
                <h4>شرح كل عنصر</h4>
                <ul>
                    <li><strong>div.modal:</strong> خلفية المودال (تغطي الصفحة بالكامل)</li>
                    <li><strong>div.modal-content:</strong> محتوى المودال (يظهر في المنتصف)</li>
                    <li><strong>span.close:</strong> زر إغلاق المودال (×)</li>
                    <li><strong>h2:</strong> عنوان النافذة</li>
                    <li><strong>form#taskForm:</strong> نموذج إضافة المهمة</li>
                    <li><strong>input#taskTitle:</strong> حقل عنوان المهمة (required يعني إلزامي)</li>
                    <li><strong>textarea#taskDesc:</strong> حقل وصف المهمة (نص طويل)</li>
                    <li><strong>select#taskPriority:</strong> قائمة منسدلة لاختيار الأولوية</li>
                    <li><strong>option value="high":</strong> خيار عالية</li>
                    <li><strong>option selected:</strong> الخيار الافتراضي (متوسطة)</li>
                    <li><strong>input#taskDueDate:</strong> حقل تاريخ (type="date" يظهر تقويم)</li>
                    <li><strong>button type="submit":</strong> زر حفظ المهمة</li>
                </ul>
                
                <div class="note-box">
                    <strong>📝 كيف يعمل المودال؟</strong>
                    <p>المودال مخفي في البداية (display: none). عند الضغط على زر "إضافة مهمة"، يظهر المودال (display: flex). عند الضغط على زر الإغلاق أو خارج المودال، يختفي مرة أخرى.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 7: بناء الهيكل - شبكة المهام والفوتر
        // ============================================================
        {
            id: '5-7',
            title: 'بناء الهيكل - شبكة المهام والفوتر',
            content: `
                <h3>بناء شبكة المهام والفوتر</h3>
                <p>شبكة المهام هي المكان الذي تعرض فيه جميع المهام على شكل بطاقات. الفوتر هو الجزء السفلي من الصفحة.</p>
                
                <h4>ماذا تحتوي شبكة المهام؟</h4>
                <ul>
                    <li><strong>بطاقات المهام:</strong> كل مهمة تعرض كبطاقة تحتوي على العنوان والوصف والحالة والأولوية</li>
                    <li><strong>حالة فارغة:</strong> رسالة تظهر عندما لا توجد مهام</li>
                </ul>
                
                <h4>ماذا يحتوي الفوتر؟</h4>
                <ul>
                    <li><strong>حقوق النشر:</strong> معلومات عن صاحب التطبيق</li>
                </ul>
                
                <h4>كود شبكة المهام والفوتر</h4>
                <div class="code-block">
                    &lt;!-- قائمة المهام --&gt;
                    &lt;section class="tasks-container" id="tasksContainer"&gt;
                        &lt;div class="tasks-grid" id="tasksGrid"&gt;
                            &lt;!-- سيتم عرض المهام هنا بواسطة JavaScript --&gt;
                        &lt;/div&gt;
                    &lt;/section&gt;
                    
                    &lt;!-- الفوتر --&gt;
                    &lt;footer class="main-footer"&gt;
                        &lt;p&gt;© 2026 أكاديمية الكومندا - مشروع إدارة المهام&lt;/p&gt;
                    &lt;/footer&gt;
                </div>
                
                <h4>شرح كل عنصر</h4>
                <ul>
                    <li><strong>section.tasks-container:</strong> حاوية شبكة المهام</li>
                    <li><strong>div.tasks-grid:</strong> شبكة المهام (سيتم ملؤها بواسطة JavaScript)</li>
                    <li><strong>footer.main-footer:</strong> الفوتر الرئيسي للصفحة</li>
                    <li><strong>p:</strong> نص حقوق النشر</li>
                </ul>
                
                <div class="note-box">
                    <strong>💡 ملاحظة:</strong>
                    <p>شبكة المهام تبدأ فارغة. سيتم ملؤها بواسطة JavaScript عند تحميل الصفحة أو عند إضافة/حذف المهام.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 8: تصميم CSS - المتغيرات والثيمات
        // ============================================================
        {
            id: '5-8',
            title: 'تصميم CSS - المتغيرات والثيمات',
            content: `
                <h3>تصميم CSS باستخدام المتغيرات والثيمات</h3>
                <p>سنستخدم المتغيرات في CSS لتوحيد الألوان والأحجام، وسنضيف دعم للثيم الداكن والفاتح.</p>
                
                <h4>ما هي المتغيرات في CSS؟</h4>
                <p>المتغيرات هي قيم يمكن إعادة استخدامها في جميع أنحاء ملف CSS. تبدأ بـ -- ويمكن الوصول إليها باستخدام var().</p>
                
                <h4>لماذا نستخدم المتغيرات؟</h4>
                <ul>
                    <li><strong>تسهيل التغيير:</strong> تغيير لون واحد يغير كل الألوان المرتبطة به</li>
                    <li><strong>توحيد التصميم:</strong> كل الألوان متسقة</li>
                    <li><strong>سهولة الصيانة:</strong> تعديل الكود يصبح أسهل</li>
                </ul>
                
                <h4>كود المتغيرات والثيمات</h4>
                <div class="code-block">
                    /* ========================================
                       الثيمات والمتغيرات
                       ======================================== */

                    /* :root هو الجذر (عنصر html) */
                    /* المتغيرات هنا تنطبق على الصفحة كلها */
                    :root {
                        /* الثيم الداكن (افتراضي) */
                        --bg-body: #0a0e17;        /* خلفية الصفحة */
                        --bg-surface: #111927;     /* خلفية الأسطح (الهيدر، الشريط) */
                        --bg-card: #1a2332;        /* خلفية البطاقات */
                        --bg-hover: #243044;       /* خلفية عند التمرير */
                        --bg-input: #0d1420;       /* خلفية حقول الإدخال */
                        
                        --text-primary: #e8edf5;   /* لون النص الرئيسي */
                        --text-secondary: #94a3b8; /* لون النص الثانوي */
                        --text-muted: #64748b;     /* لون النص الباهت */
                        
                        --border-color: #2a3a5e;   /* لون الحدود */
                        --border-light: #1e2d4a;   /* لون الحدود الفاتحة */
                        
                        --gold: #fbbf24;           /* اللون الذهبي الأساسي */
                        --gold-glow: rgba(251, 191, 36, 0.12); /* تأثير التوهج الذهبي */
                        
                        /* ألوان حالات المهام */
                        --status-pending: #facc15;   /* معلقة - أصفر */
                        --status-progress: #3b82f6;  /* قيد التنفيذ - أزرق */
                        --status-completed: #22c55e; /* مكتملة - أخضر */
                        
                        --shadow: 0 8px 32px rgba(0, 0, 0, 0.4); /* الظل */
                        --radius: 12px;               /* نصف قطر الزوايا */
                        --transition: all 0.3s ease;  /* مدة الحركة */
                    }

                    /* ==========================================
                       الثيم الفاتح
                       ========================================== */
                    /* [data-theme="light"]: يطبق على العنصر الذي يحمل data-theme="light" */
                    [data-theme="light"] {
                        --bg-body: #f0f4f8;        /* خلفية فاتحة */
                        --bg-surface: #ffffff;     /* أسطح بيضاء */
                        --bg-card: #ffffff;        /* بطاقات بيضاء */
                        --bg-hover: #e8edf5;       /* تمرير فاتح */
                        --bg-input: #f0f4f8;       /* حقول إدخال فاتحة */
                        
                        --text-primary: #0a0e17;   /* نص داكن */
                        --text-secondary: #334155; /* نص رمادي غامق */
                        --text-muted: #64748b;     /* نص رمادي */
                        
                        --border-color: #cbd5e1;   /* حدود رمادية */
                        --border-light: #e2e8f0;   /* حدود رمادية فاتحة */
                        
                        --gold: #d97706;           /* ذهبي داكن */
                        --gold-glow: rgba(217, 119, 6, 0.08);
                        
                        --shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    }

                    /* ==========================================
                       التباين العالي
                       ========================================== */
                    /* body.high-contrast: يطبق عند إضافة class="high-contrast" على body */
                    body.high-contrast {
                        --bg-body: #000000 !important;
                        --bg-surface: #0a0a0a !important;
                        --bg-card: #1a1a1a !important;
                        --text-primary: #ffff00 !important;  /* نص أصفر ساطع */
                        --text-secondary: #ffff00 !important;
                        --text-muted: #ffff00 !important;
                        --border-color: #ffff00 !important;
                        --gold: #ffff00 !important;
                        --status-pending: #ffff00 !important;
                        --status-progress: #00ffff !important;
                        --status-completed: #00ff00 !important;
                    }
                </div>
                
                <div class="note-box">
                    <strong>💡 كيف تعمل الثيمات؟</strong>
                    <ul>
                        <li><strong>الداكن:</strong> هو الثيم الافتراضي (في :root)</li>
                        <li><strong>الفاتح:</strong> يتم تفعيله بإضافة data-theme="light" على عنصر html</li>
                        <li><strong>التباين العالي:</strong> يتم تفعيله بإضافة class="high-contrast" على body</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 9: تصميم CSS - الشريط والهيدر
        // ============================================================
        {
            id: '5-9',
            title: 'تصميم CSS - شريط الوصول والهيدر',
            content: `
                <h3>تصميم شريط إمكانية الوصول والهيدر</h3>
                <p>في هذا الدرس سنقوم بتصميم شريط إمكانية الوصول والهيدر باستخدام CSS.</p>
                
                <h4>تصميم شريط إمكانية الوصول</h4>
                <div class="code-block">
                    /* ========================================
                       شريط إمكانية الوصول
                       ======================================== */
                    
                    /* الحاوية الرئيسية للشريط */
                    .accessibility-bar {
                        background: var(--bg-surface);  /* خلفية حسب الثيم */
                        border-bottom: 1px solid var(--border-color);
                        padding: 0.3rem 1rem;
                        position: fixed;     /* ثابت في الأعلى */
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 1000;       /* يظهر فوق كل العناصر */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                        flex-wrap: wrap;
                    }
                    
                    /* تنسيق الأزرار في الشريط */
                    .accessibility-bar button {
                        background: transparent;
                        border: 1px solid var(--border-color);
                        color: var(--text-secondary);
                        padding: 0.15rem 0.5rem;
                        border-radius: 30px;   /* زوايا دائرية */
                        font-size: 0.75rem;
                        cursor: pointer;
                        transition: var(--transition);
                        min-height: 26px;
                        min-width: 30px;
                    }
                    
                    /* تغيير لون الزر عند التمرير */
                    .accessibility-bar button:hover {
                        background: var(--bg-hover);
                        border-color: var(--gold);
                        color: var(--text-primary);
                    }
                    
                    /* تنسيق عرض حجم الخط */
                    .accessibility-bar span {
                        font-size: 0.75rem;
                        color: var(--text-secondary);
                        min-width: 24px;
                        text-align: center;
                    }
                </div>
                
                <h4>تصميم الهيدر</h4>
                <div class="code-block">
                    /* ========================================
                       الهيدر
                       ======================================== */
                    
                    /* الهيدر الرئيسي */
                    .main-header {
                        background: var(--bg-surface);
                        border-bottom: 1px solid var(--border-color);
                        padding: 0.5rem 1.5rem;
                        position: fixed;
                        top: 38px;           /* تحت شريط الوصول مباشرة */
                        left: 0;
                        right: 0;
                        z-index: 999;
                        box-shadow: var(--shadow);
                    }
                    
                    /* محتوى الهيدر */
                    .header-content {
                        max-width: 1400px;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 1rem;
                        flex-wrap: wrap;
                    }
                    
                    /* عنوان التطبيق */
                    .header-content h1 {
                        font-size: 1.2rem;
                        color: var(--gold);
                    }
                    
                    /* حاوية الإحصائيات */
                    .header-stats {
                        display: flex;
                        gap: 1.5rem;
                    }
                    
                    /* كل إحصائية */
                    .stat {
                        display: flex;
                        align-items: baseline;
                        gap: 0.3rem;
                    }
                    
                    /* الرقم في الإحصائية */
                    .stat span {
                        font-size: 1.1rem;
                        font-weight: 800;
                        color: var(--gold);
                    }
                    
                    /* تسمية الإحصائية */
                    .stat label {
                        font-size: 0.65rem;
                        color: var(--text-secondary);
                    }
                </div>
                
                <div class="note-box">
                    <strong>🎯 ملاحظة:</strong>
                    <p>الهيدر وشريط الوصول هما position: fixed، مما يعني أنهما يثبتان في مكانهما حتى عند التمرير لأسفل.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 10: تصميم CSS - شريط التحكم والمودال
        // ============================================================
        {
            id: '5-10',
            title: 'تصميم CSS - شريط التحكم والمودال',
            content: `
                <h3>تصميم شريط التحكم والمودال</h3>
                <p>في هذا الدرس سنقوم بتصميم شريط التحكم ونافذة إضافة المهمة.</p>
                
                <h4>تصميم شريط التحكم</h4>
                <div class="code-block">
                    /* ========================================
                       شريط التحكم
                       ======================================== */
                    
                    /* المحتوى الرئيسي - يعطي مسافة للهيدر */
                    .main-content {
                        max-width: 1400px;
                        margin: 0 auto;
                        padding: 1rem 1.5rem;
                        margin-top: 80px;  /* مسافة للهيدر */
                    }
                    
                    /* شريط التحكم */
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
                    
                    /* الزر الرئيسي (ذهبي) */
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
                    
                    /* تأثير التمرير على الزر */
                    .btn-primary:hover {
                        transform: scale(1.03);
                        box-shadow: 0 4px 16px rgba(251, 191, 36, 0.3);
                    }
                    
                    /* حاوية أزرار التصفية */
                    .filters {
                        display: flex;
                        gap: 0.3rem;
                        flex-wrap: wrap;
                    }
                    
                    /* أزرار التصفية */
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
                    
                    /* تأثير التمرير على أزرار التصفية */
                    .filter-btn:hover {
                        border-color: var(--gold);
                        color: var(--text-primary);
                    }
                    
                    /* الزر النشط (المحدد) */
                    .filter-btn.active {
                        background: var(--gold);
                        border-color: var(--gold);
                        color: var(--bg-body);
                    }
                    
                    /* حقل البحث */
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
                    
                    /* حقل البحث عند التركيز */
                    #searchInput:focus {
                        outline: none;
                        border-color: var(--gold);
                    }
                </div>
                
                <h4>تصميم المودال</h4>
                <div class="code-block">
                    /* ========================================
                       المودال (نافذة إضافة المهمة)
                       ======================================== */
                    
                    /* خلفية المودال */
                    .modal {
                        display: none;  /* مخفي في البداية */
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.6);  /* خلفية شفافة */
                        z-index: 2000;
                        align-items: center;
                        justify-content: center;
                        backdrop-filter: blur(4px);  /* تأثير زجاجي */
                    }
                    
                    /* عند إضافة class="open" يظهر المودال */
                    .modal.open {
                        display: flex;
                    }
                    
                    /* محتوى المودال */
                    .modal-content {
                        background: var(--bg-card);
                        border-radius: var(--radius-lg);
                        padding: 2rem;
                        max-width: 500px;
                        width: 90%;
                        border: 1px solid var(--border-color);
                        animation: modalIn 0.3s ease-out;  /* حركة دخول */
                    }
                    
                    /* حركة دخول المودال */
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
                    
                    /* زر إغلاق المودال */
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
                    
                    /* عنوان المودال */
                    .modal-content h2 {
                        color: var(--gold);
                        margin-bottom: 1rem;
                        font-size: 1.3rem;
                    }
                    
                    /* نموذج المودال */
                    .modal-content form {
                        display: flex;
                        flex-direction: column;
                        gap: 0.6rem;
                    }
                    
                    /* حقول الإدخال في المودال */
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
                    
                    /* حقول الإدخال عند التركيز */
                    .modal-content input:focus,
                    .modal-content textarea:focus,
                    .modal-content select:focus {
                        outline: none;
                        border-color: var(--gold);
                        box-shadow: 0 0 0 3px var(--gold-glow);
                    }
                    
                    /* حقل الوصف */
                    .modal-content textarea {
                        resize: vertical;
                        min-height: 70px;
                    }
                </div>
                
                <div class="note-box">
                    <strong>🎯 كيف يعمل المودال؟</strong>
                    <p>المودال يبدأ مخفياً (display: none). عند الضغط على زر "إضافة مهمة"، نضيف class="open" فيظهر. عند الضغط على زر الإغلاق أو خارج المودال، نزيل class="open" فيختفي.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 11: تصميم CSS - بطاقات المهام والاستجابة
        // ============================================================
        {
            id: '5-11',
            title: 'تصميم CSS - بطاقات المهام والاستجابة للشاشات',
            content: `
                <h3>تصميم بطاقات المهام وجعل التطبيق متجاوباً</h3>
                <p>في هذا الدرس سنقوم بتصميم بطاقات المهام وجعل التطبيق يعمل على جميع الأجهزة.</p>
                
                <h4>تصميم بطاقات المهام</h4>
                <div class="code-block">
                    /* ========================================
                       بطاقات المهام
                       ======================================== */
                    
                    /* شبكة المهام */
                    .tasks-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 1rem;
                    }
                    
                    /* حركة ظهور البطاقات */
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
                    
                    /* بطاقة المهمة */
                    .task-card {
                        background: var(--bg-card);
                        border-radius: var(--radius);
                        padding: 1rem;
                        border: 1px solid var(--border-light);
                        border-right: 4px solid var(--status-pending);  /* لون حسب الحالة */
                        transition: var(--transition);
                        animation: slideIn 0.3s ease-out;
                    }
                    
                    /* تأثير التمرير على البطاقة */
                    .task-card:hover {
                        transform: translateX(-4px);
                        box-shadow: var(--shadow);
                    }
                    
                    /* ألوان البطاقات حسب الحالة */
                    .task-card.status-pending {
                        border-right-color: var(--status-pending);
                    }
                    .task-card.status-progress {
                        border-right-color: var(--status-progress);
                    }
                    .task-card.status-completed {
                        border-right-color: var(--status-completed);
                        opacity: 0.7;  /* شفافية للمهام المكتملة */
                    }
                    
                    /* شطب عنوان المهمة المكتملة */
                    .task-card.status-completed .task-title {
                        text-decoration: line-through;
                        color: var(--text-muted);
                    }
                    
                    /* رأس البطاقة (العنوان والأولوية) */
                    .task-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                        margin-bottom: 0.3rem;
                    }
                    
                    /* عنوان المهمة */
                    .task-title {
                        font-size: 1rem;
                        font-weight: 600;
                        color: var(--text-primary);
                    }
                    
                    /* شارة الأولوية */
                    .task-priority {
                        font-size: 0.65rem;
                        padding: 0.1rem 0.4rem;
                        border-radius: 30px;
                        background: var(--bg-hover);
                        color: var(--text-secondary);
                        white-space: nowrap;
                    }
                    
                    /* ألوان الأولويات */
                    .task-priority.high {
                        color: #ef4444;
                        background: rgba(239, 68, 68, 0.1);
                    }
                    .task-priority.medium {
                        color: #f59e0b;
                        background: rgba(245, 158, 11, 0.1);
                    }
                    .task-priority.low {
                        color: #22c55e;
                        background: rgba(34, 197, 94, 0.1);
                    }
                    
                    /* وصف المهمة */
                    .task-description {
                        color: var(--text-secondary);
                        font-size: 0.85rem;
                        margin: 0.3rem 0;
                        line-height: 1.5;
                    }
                    
                    /* تذييل البطاقة (التاريخ والأزرار) */
                    .task-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 0.5rem;
                        padding-top: 0.5rem;
                        border-top: 1px solid var(--border-light);
                    }
                    
                    /* تاريخ المهمة */
                    .task-date {
                        font-size: 0.7rem;
                        color: var(--text-muted);
                    }
                    
                    /* أزرار التحكم في البطاقة */
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
                    
                    /* تأثير التمرير على الأزرار */
                    .task-actions .complete-btn:hover {
                        color: #22c55e;
                        background: rgba(34, 197, 94, 0.1);
                    }
                    .task-actions .delete-btn:hover {
                        color: #ef4444;
                        background: rgba(239, 68, 68, 0.1);
                    }
                    
                    /* حالة فارغة (لا توجد مهام) */
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
                </div>
                
                <h4>الاستجابة للشاشات (Responsive)</h4>
                <div class="code-block">
                    /* ========================================
                       الاستجابة للشاشات المختلفة
                       ======================================== */
                    
                    /* الأجهزة اللوحية والهواتف الكبيرة (أقل من 768px) */
                    @media (max-width: 768px) {
                        body {
                            padding-top: 80px;
                        }
                        
                        .main-header {
                            top: 60px;
                            padding: 0.4rem 0.8rem;
                        }
                        
                        .header-content {
                            flex-direction: column;
                            align-items: stretch;
                            gap: 0.3rem;
                        }
                        
                        .header-stats {
                            justify-content: space-around;
                        }
                        
                        .control-bar {
                            flex-direction: column;
                        }
                        
                        .filters {
                            justify-content: center;
                        }
                        
                        .tasks-grid {
                            grid-template-columns: 1fr;  /* عمود واحد */
                        }
                        
                        .modal-content {
                            padding: 1.2rem;
                            margin: 0.5rem;
                        }
                    }
                    
                    /* الهواتف الصغيرة (أقل من 480px) */
                    @media (max-width: 480px) {
                        body {
                            padding-top: 75px;
                        }
                        
                        .main-header {
                            top: 55px;
                        }
                        
                        .main-content {
                            padding: 0.5rem;
                            margin-top: 70px;
                        }
                        
                        .accessibility-bar {
                            padding: 0.2rem 0.3rem;
                            gap: 0.2rem;
                        }
                        
                        .accessibility-bar button {
                            font-size: 0.6rem;
                            min-height: 20px;
                            min-width: 22px;
                            padding: 0.05rem 0.2rem;
                        }
                        
                        .accessibility-bar span {
                            font-size: 0.6rem;
                            min-width: 16px;
                        }
                        
                        .header-content h1 {
                            font-size: 1rem;
                        }
                        
                        .stat span {
                            font-size: 0.9rem;
                        }
                        
                        .stat label {
                            font-size: 0.55rem;
                        }
                    }
                </div>
                
                <div class="note-box">
                    <strong>📱 كيف يعمل التجاوب؟</strong>
                    <ul>
                        <li>على الشاشات الكبيرة: شبكة المهام تعرض عدة أعمدة</li>
                        <li>على الشاشات المتوسطة: شبكة المهام تعرض عمودين</li>
                        <li>على الشاشات الصغيرة: شبكة المهام تعرض عمود واحد</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 12: برمجة JavaScript - فئة إدارة المهام
        // ============================================================
        {
            id: '5-12',
            title: 'برمجة JavaScript - فئة إدارة المهام',
            content: `
                <h3>برمجة فئة إدارة المهام (TaskManager)</h3>
                <p>هذه هي قلب التطبيق. تحتوي على كل المنطق المتعلق بالمهام: الإضافة، الحذف، التحديث، الحفظ.</p>
                
                <h4>ما هي الفئة (Class) في JavaScript؟</h4>
                <p>الفئة هي قالب لإنشاء كائنات. تحتوي على خصائص (متغيرات) ودوال (وظائف). في مشروعنا، فئة TaskManager تدير كل عمليات المهام.</p>
                
                <h4>كود فئة TaskManager</h4>
                <div class="code-block">
                    // ========================================
                    // فئة إدارة المهام
                    // ========================================
                    
                    class TaskManager {
                        // المُنشئ (Constructor): ينفذ عند إنشاء كائن جديد
                        constructor() {
                            this.tasks = [];           // مصفوفة لتخزين المهام
                            this.currentFilter = 'all'; // الفلتر الحالي (الكل افتراضياً)
                            this.loadTasks();          // تحميل المهام من التخزين
                        }
                        
                        // ========================================
                        // إضافة مهمة جديدة
                        // ========================================
                        addTask(taskData) {
                            // إنشاء كائن المهمة
                            const task = {
                                id: Date.now(),           // معرف فريد (الوقت الحالي)
                                title: taskData.title.trim(),  // العنوان (إزالة المسافات الزائدة)
                                description: taskData.description ? taskData.description.trim() : '',
                                status: 'pending',        // الحالة الافتراضية: معلقة
                                priority: taskData.priority || 'medium',  // الأولوية
                                createdAt: new Date().toISOString(),  // تاريخ الإنشاء
                                dueDate: taskData.dueDate || null     // تاريخ الاستحقاق
                            };
                            
                            // التحقق من صحة البيانات
                            if (!task.title || task.title.length < 3) {
                                throw new Error('عنوان المهمة يجب أن يكون 3 أحرف على الأقل');
                            }
                            
                            // إضافة المهمة في بداية المصفوفة (الأحدث أولاً)
                            this.tasks.unshift(task);
                            
                            // حفظ المهام في التخزين
                            this.saveTasks();
                            
                            return task;  // إرجاع المهمة المضافة
                        }
                        
                        // ========================================
                        // حذف مهمة
                        // ========================================
                        deleteTask(id) {
                            // البحث عن موقع المهمة في المصفوفة
                            const index = this.tasks.findIndex(task => task.id === id);
                            
                            if (index !== -1) {  // إذا وجدت المهمة
                                this.tasks.splice(index, 1);  // حذفها من المصفوفة
                                this.saveTasks();  // حفظ التغييرات
                                return true;  // تم الحذف بنجاح
                            }
                            return false;  // لم يتم الحذف
                        }
                        
                        // ========================================
                        // تحديث مهمة
                        // ========================================
                        updateTask(id, updates) {
                            // البحث عن المهمة
                            const task = this.tasks.find(t => t.id === id);
                            
                            if (task) {
                                // دمج التحديثات مع المهمة
                                Object.assign(task, updates);
                                this.saveTasks();  // حفظ التغييرات
                                return true;
                            }
                            return false;
                        }
                        
                        // ========================================
                        // تغيير حالة المهمة
                        // ========================================
                        changeStatus(id, newStatus) {
                            // التحقق من صحة الحالة
                            const validStatuses = ['pending', 'progress', 'completed'];
                            if (!validStatuses.includes(newStatus)) {
                                throw new Error('حالة غير صالحة');
                            }
                            
                            // تحديث الحالة
                            return this.updateTask(id, { status: newStatus });
                        }
                        
                        // ========================================
                        // الحصول على جميع المهام
                        // ========================================
                        getAllTasks() {
                            // إرجاع نسخة من المصفوفة (للتعديل الآمن)
                            return [...this.tasks];
                        }
                        
                        // ========================================
                        // تصفية المهام حسب الحالة
                        // ========================================
                        getTasksByStatus(status) {
                            if (status === 'all') {
                                return this.getAllTasks();
                            }
                            // filter: تعيد مصفوفة جديدة تحتوي على المهام المطابقة
                            return this.tasks.filter(task => task.status === status);
                        }
                        
                        // ========================================
                        // البحث عن المهام
                        // ========================================
                        searchTasks(query) {
                            // إذا كان البحث فارغاً، عرض المهام حسب الفلتر الحالي
                            if (!query || query.trim() === '') {
                                return this.getTasksByStatus(this.currentFilter);
                            }
                            
                            const searchTerm = query.toLowerCase().trim();
                            
                            // filter: تبحث في العنوان والوصف
                            return this.tasks.filter(task => 
                                task.title.toLowerCase().includes(searchTerm) ||
                                task.description.toLowerCase().includes(searchTerm)
                            );
                        }
                        
                        // ========================================
                        // الحصول على إحصائيات
                        // ========================================
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
                                // نسبة الإنجاز (مقربة لأقرب عدد صحيح)
                                completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
                            };
                        }
                        
                        // ========================================
                        // حفظ في LocalStorage
                        // ========================================
                        saveTasks() {
                            try {
                                // JSON.stringify: تحويل المصفوفة إلى نص
                                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                            } catch (error) {
                                console.error('خطأ في حفظ المهام:', error);
                            }
                        }
                        
                        // ========================================
                        // تحميل من LocalStorage
                        // ========================================
                        loadTasks() {
                            try {
                                const saved = localStorage.getItem('tasks');
                                if (saved) {
                                    // JSON.parse: تحويل النص إلى مصفوفة
                                    this.tasks = JSON.parse(saved);
                                }
                            } catch (error) {
                                console.error('خطأ في تحميل المهام:', error);
                                this.tasks = [];
                            }
                        }
                    }
                </div>
                
                <div class="note-box">
                    <strong>🎯 شرح الدوال المهمة:</strong>
                    <ul>
                        <li><strong>constructor:</strong> ينفذ عند إنشاء الكائن، يهيئ المصفوفة ويحمل البيانات</li>
                        <li><strong>addTask:</strong> يضيف مهمة جديدة، يتحقق من صحة البيانات، يحفظ التغييرات</li>
                        <li><strong>deleteTask:</strong> يحذف مهمة باستخدام findIndex و splice</li>
                        <li><strong>updateTask:</strong> يحدث مهمة باستخدام find و Object.assign</li>
                        <li><strong>saveTasks:</strong> يحفظ المهام في LocalStorage</li>
                        <li><strong>loadTasks:</strong> يحمل المهام من LocalStorage</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 13: برمجة JavaScript - عرض المهام
        // ============================================================
        {
            id: '5-13',
            title: 'برمجة JavaScript - عرض المهام في الصفحة',
            content: `
                <h3>عرض المهام في DOM</h3>
                <p>في هذا الدرس سنقوم بعرض المهام في الصفحة باستخدام JavaScript.</p>
                
                <h4>الدوال المساعدة</h4>
                <div class="code-block">
                    // ========================================
                    // دوال مساعدة
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
                </div>
                
                <h4>دالة عرض المهام</h4>
                <div class="code-block">
                    // ========================================
                    // عرض المهام في DOM
                    // ========================================
                    
                    // تهيئة مدير المهام
                    const taskManager = new TaskManager();
                    
                    // اختيار عنصر شبكة المهام
                    const tasksGrid = document.getElementById('tasksGrid');
                    
                    // دالة عرض المهام
                    function renderTasks(tasks) {
                        // إذا لم يتم إرسال مهام، استخدم المهام حسب الفلتر الحالي
                        if (!tasks) {
                            tasks = taskManager.getTasksByStatus(taskManager.currentFilter);
                        }
                        
                        // إذا كانت المهام فارغة
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
                        
                        // map: تحويل كل مهمة إلى كود HTML
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
                        \`).join('');  // join: دمج المصفوفة في نص واحد
                    }
                </div>
                
                <h4>شرح دالة renderTasks</h4>
                <ul>
                    <li><strong>if (!tasks):</strong> إذا لم يتم إرسال مهام، استخدم المهام حسب الفلتر</li>
                    <li><strong>if (tasks.length === 0):</strong> إذا كانت المهام فارغة، اعرض رسالة "لا توجد مهام"</li>
                    <li><strong>tasks.map():</strong> تحويل كل مهمة إلى كود HTML</li>
                    <li><strong>task-card:</strong> البطاقة التي تمثل المهمة</li>
                    <li><strong>data-id:</strong> لتخزين معرف المهمة (يستخدم في الأحداث)</li>
                    <li><strong>onclick="markComplete(...)":</strong> استدعاء الدالة عند النقر على زر الإكمال</li>
                    <li><strong>onclick="deleteTask(...)":</strong> استدعاء الدالة عند النقر على زر الحذف</li>
                </ul>
                
                <div class="note-box">
                    <strong>💡 كيف يعمل العرض؟</strong>
                    <p>الدالة تأخذ مصفوفة المهام، وتحولها إلى كود HTML، ثم تضعه في عنصر tasksGrid. بهذه الطريقة يتم تحديث العرض تلقائياً عند إضافة أو حذف المهام.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 14: برمجة JavaScript - الأحداث والتفاعل
        // ============================================================
        {
            id: '5-14',
            title: 'برمجة JavaScript - الأحداث والتفاعل',
            content: `
                <h3>ربط الأحداث لجعل التطبيق تفاعلياً</h3>
                <p>في هذا الدرس سنقوم بربط الأحداث بالعناصر لجعل التطبيق يستجيب لأفعال المستخدم.</p>
                
                <h4>دوال التحكم في المهام</h4>
                <div class="code-block">
                    // ========================================
                    // دوال التحكم في المهام
                    // ========================================
                    
                    // تحديث الإحصائيات
                    function updateStats() {
                        const stats = taskManager.getStats();
                        document.getElementById('totalTasks').textContent = stats.total;
                        document.getElementById('completedTasks').textContent = stats.completed;
                        document.getElementById('pendingTasks').textContent = stats.pending;
                    }
                    
                    // عرض المهام حسب الفلتر الحالي
                    function renderFilteredTasks() {
                        renderTasks(taskManager.getTasksByStatus(taskManager.currentFilter));
                    }
                    
                    // إكمال مهمة (دالة عامة للاستخدام في onclick)
                    window.markComplete = function(id) {
                        taskManager.changeStatus(id, 'completed');
                        renderFilteredTasks();
                        updateStats();
                    };
                    
                    // حذف مهمة (دالة عامة للاستخدام في onclick)
                    window.deleteTask = function(id) {
                        if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
                            taskManager.deleteTask(id);
                            renderFilteredTasks();
                            updateStats();
                        }
                    };
                </div>
                
                <h4>تهيئة التطبيق وربط الأحداث</h4>
                <div class="code-block">
                    // ========================================
                    // تهيئة التطبيق وربط الأحداث
                    // ========================================
                    
                    document.addEventListener('DOMContentLoaded', function() {
                        // العرض الأولي
                        renderFilteredTasks();
                        updateStats();
                        
                        // ========================================
                        // إضافة مهمة (المودال)
                        // ========================================
                        const modal = document.getElementById('taskModal');
                        const showAddBtn = document.getElementById('showAddTask');
                        const closeModal = document.getElementById('closeModal');
                        const taskForm = document.getElementById('taskForm');
                        
                        // فتح المودال
                        function openModal() {
                            modal.classList.add('open');
                            document.getElementById('taskTitle').focus();  // التركيز على حقل العنوان
                        }
                        
                        // إغلاق المودال
                        function closeModalFn() {
                            modal.classList.remove('open');
                            taskForm.reset();  // إعادة تعيين النموذج
                        }
                        
                        // ربط الأحداث
                        showAddBtn.addEventListener('click', openModal);
                        closeModal.addEventListener('click', closeModalFn);
                        
                        // إغلاق المودال عند الضغط خارج المحتوى
                        modal.addEventListener('click', function(e) {
                            if (e.target === this) closeModalFn();
                        });
                        
                        // إغلاق المودال عند الضغط على Escape
                        document.addEventListener('keydown', function(e) {
                            if (e.key === 'Escape') closeModalFn();
                        });
                        
                        // ========================================
                        // إرسال النموذج (إضافة مهمة)
                        // ========================================
                        taskForm.addEventListener('submit', function(e) {
                            e.preventDefault();  // منع إعادة تحميل الصفحة
                            
                            // الحصول على قيم الحقول
                            const title = document.getElementById('taskTitle');
                            const description = document.getElementById('taskDesc');
                            const priority = document.getElementById('taskPriority');
                            const dueDate = document.getElementById('taskDueDate');
                            
                            try {
                                // إضافة المهمة
                                taskManager.addTask({
                                    title: title.value,
                                    description: description.value,
                                    priority: priority.value,
                                    dueDate: dueDate.value || null
                                });
                                
                                // تحديث العرض
                                renderFilteredTasks();
                                updateStats();
                                
                                // إغلاق المودال
                                closeModalFn();
                                
                                // عرض إشعار نجاح
                                showNotification('✅ تم إضافة المهمة بنجاح!');
                                
                            } catch (error) {
                                alert(error.message);  // عرض رسالة الخطأ
                            }
                        });
                        
                        // ========================================
                        // أزرار التصفية
                        // ========================================
                        document.querySelectorAll('.filter-btn').forEach(btn => {
                            btn.addEventListener('click', function() {
                                // إزالة التفعيل من جميع الأزرار
                                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                                
                                // تفعيل الزر المضغوط
                                this.classList.add('active');
                                
                                // تغيير الفلتر وعرض المهام
                                taskManager.currentFilter = this.dataset.filter;
                                renderFilteredTasks();
                            });
                        });
                        
                        // ========================================
                        // البحث
                        // ========================================
                        let searchTimeout;
                        document.getElementById('searchInput').addEventListener('input', function() {
                            // تأخير البحث لتقليل العمليات (debounce)
                            clearTimeout(searchTimeout);
                            searchTimeout = setTimeout(() => {
                                if (this.value.trim() === '') {
                                    renderFilteredTasks();
                                } else {
                                    renderTasks(taskManager.searchTasks(this.value));
                                }
                            }, 300);
                        });
                        
                        // ========================================
                        // إعدادات إمكانية الوصول
                        // ========================================
                        setupAccessibility();
                    });
                </div>
                
                <div class="note-box">
                    <strong>🎯 شرح الأحداث الرئيسية:</strong>
                    <ul>
                        <li><strong>DOMContentLoaded:</strong> يحدث بعد تحميل HTML بالكامل، نستخدمه لتهيئة التطبيق</li>
                        <li><strong>click:</strong> عند النقر على زر إضافة المهمة، يفتح المودال</li>
                        <li><strong>submit:</strong> عند إرسال النموذج، يضيف المهمة</li>
                        <li><strong>input:</strong> عند الكتابة في حقل البحث، يبحث عن المهام</li>
                        <li><strong>keydown (Escape):</strong> عند الضغط على Escape، يغلق المودال</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 15: برمجة JavaScript - إمكانية الوصول
        // ============================================================
        {
            id: '5-15',
            title: 'برمجة JavaScript - إمكانية الوصول',
            content: `
                <h3>إضافة ميزات إمكانية الوصول</h3>
                <p>في هذا الدرس سنقوم ببرمجة ميزات إمكانية الوصول: تكبير الخط، الثيمات، التباين، والقراءة الصوتية.</p>
                
                <h4>كود إعدادات إمكانية الوصول</h4>
                <div class="code-block">
                    // ========================================
                    // إعدادات إمكانية الوصول
                    // ========================================
                    
                    function setupAccessibility() {
                        // ========================================
                        // 1. تكبير/تصغير الخط
                        // ========================================
                        const fontInc = document.getElementById('fontInc');
                        const fontDec = document.getElementById('fontDec');
                        const fontSizeDisplay = document.getElementById('fontSizeDisplay');
                        
                        // تحميل حجم الخط المحفوظ أو استخدام 16 كافتراضي
                        let fontSize = parseInt(localStorage.getItem('fontSize')) || 16;
                        
                        // تطبيق حجم الخط
                        function applyFontSize() {
                            document.documentElement.style.fontSize = fontSize + 'px';
                            fontSizeDisplay.textContent = fontSize;
                            localStorage.setItem('fontSize', fontSize);
                        }
                        
                        // تكبير
                        fontInc.addEventListener('click', function() {
                            if (fontSize < 32) {
                                fontSize++;
                                applyFontSize();
                            }
                        });
                        
                        // تصغير
                        fontDec.addEventListener('click', function() {
                            if (fontSize > 12) {
                                fontSize--;
                                applyFontSize();
                            }
                        });
                        
                        applyFontSize();  // تطبيق الحجم عند التحميل
                        
                        // ========================================
                        // 2. تبديل الثيم (داكن/فاتح)
                        // ========================================
                        const themeToggle = document.getElementById('themeToggle');
                        
                        // تحميل الثيم المحفوظ
                        let isDark = localStorage.getItem('theme') !== 'light';
                        
                        // تطبيق الثيم
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
                        
                        // ========================================
                        // 3. التباين العالي
                        // ========================================
                        const contrastToggle = document.getElementById('contrastToggle');
                        
                        // تحميل حالة التباين
                        let isHighContrast = localStorage.getItem('highContrast') === 'true';
                        
                        // تطبيق التباين
                        function applyContrast() {
                            document.body.classList.toggle('high-contrast', isHighContrast);
                            localStorage.setItem('highContrast', isHighContrast);
                        }
                        
                        contrastToggle.addEventListener('click', function() {
                            isHighContrast = !isHighContrast;
                            applyContrast();
                        });
                        
                        applyContrast();
                        
                        // ========================================
                        // 4. القراءة الصوتية (Web Speech API)
                        // ========================================
                        const speakBtn = document.getElementById('speakBtn');
                        let isSpeaking = false;
                        
                        speakBtn.addEventListener('click', function() {
                            // إذا كانت القراءة نشطة، إيقافها
                            if (isSpeaking) {
                                window.speechSynthesis.cancel();
                                isSpeaking = false;
                                speakBtn.textContent = '🔊';
                                return;
                            }
                            
                            // التحقق من دعم المتصفح
                            if (!('speechSynthesis' in window)) {
                                alert('المتصفح لا يدعم القراءة الصوتية');
                                return;
                            }
                            
                            // الحصول على المهام
                            const tasks = taskManager.getAllTasks();
                            if (tasks.length === 0) {
                                alert('لا توجد مهام للقراءة');
                                return;
                            }
                            
                            // بناء النص للقراءة
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
                            
                            // إنشاء كائن النطق
                            const utterance = new SpeechSynthesisUtterance(text);
                            utterance.lang = 'ar-SA';  // اللغة العربية
                            utterance.rate = 0.9;      // سرعة القراءة
                            utterance.pitch = 1;       // طبقة الصوت
                            
                            // أحداث النطق
                            utterance.onstart = function() {
                                isSpeaking = true;
                                speakBtn.textContent = '⏹️';
                            };
                            
                            utterance.onend = function() {
                                isSpeaking = false;
                                speakBtn.textContent = '🔊';
                            };
                            
                            utterance.onerror = function() {
                                isSpeaking = false;
                                speakBtn.textContent = '🔊';
                            };
                            
                            // تشغيل القراءة
                            window.speechSynthesis.speak(utterance);
                        });
                    }
                </div>
                
                <div class="note-box">
                    <strong>🔊 كيف تعمل القراءة الصوتية؟</strong>
                    <ul>
                        <li>نستخدم <strong>Web Speech API</strong> المدمج في المتصفح</li>
                        <li>نقوم بجمع أسماء المهام وبناء جملة مفهومة</li>
                        <li>نستخدم <strong>SpeechSynthesisUtterance</strong> لإنشاء كائن النطق</li>
                        <li>نحدد اللغة العربية (ar-SA) وسرعة القراءة</li>
                        <li>نستمع لأحداث (start, end, error) للتحكم في واجهة المستخدم</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 16: إشعارات وتحسينات
        // ============================================================
        {
            id: '5-16',
            title: 'إشعارات وتحسينات إضافية',
            content: `
                <h3>إضافة الإشعارات وتحسينات إضافية</h3>
                <p>في هذا الدرس سنضيف إشعارات لتأكيد إجراءات المستخدم، ونتأكد من حفظ البيانات في LocalStorage.</p>
                
                <h4>دالة الإشعارات</h4>
                <div class="code-block">
                    // ========================================
                    // إشعارات
                    // ========================================
                    
                    function showNotification(message) {
                        // إنشاء عنصر الإشعار
                        const notification = document.createElement('div');
                        notification.className = 'notification';
                        notification.textContent = message;
                        
                        // تنسيق الإشعار (باستخدام CSS)
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
                        
                        // إضافة الإشعار للصفحة
                        document.body.appendChild(notification);
                        
                        // إظهار الإشعار مع حركة انزلاق
                        setTimeout(() => {
                            notification.style.cssText = notification.style.cssText
                                .replace('opacity: 0;', 'opacity: 1;')
                                .replace('translateY(100px)', 'translateY(0)');
                        }, 10);
                        
                        // إخفاء الإشعار بعد 3 ثوانٍ
                        setTimeout(() => {
                            notification.style.cssText = notification.style.cssText
                                .replace('opacity: 1;', 'opacity: 0;')
                                .replace('translateY(0)', 'translateY(100px)');
                            
                            // حذف الإشعار من الصفحة
                            setTimeout(() => {
                                notification.remove();
                            }, 300);
                        }, 3000);
                    }
                </div>
                
                <h4>تأكيد حفظ البيانات في LocalStorage</h4>
                <div class="code-block">
                    // ========================================
                    // التحقق من حفظ البيانات
                    // ========================================
                    
                    // عند تحميل الصفحة، تأكد من وجود بيانات
                    window.addEventListener('load', function() {
                        const saved = localStorage.getItem('tasks');
                        if (saved) {
                            console.log('✅ تم تحميل ' + JSON.parse(saved).length + ' مهام من LocalStorage');
                        } else {
                            console.log('ℹ️ لا توجد مهام محفوظة');
                        }
                    });
                    
                    // عند إضافة مهمة، تأكد من الحفظ
                    const originalAddTask = taskManager.addTask.bind(taskManager);
                    taskManager.addTask = function(taskData) {
                        const result = originalAddTask(taskData);
                        console.log('✅ تم حفظ المهمة في LocalStorage');
                        return result;
                    };
                    
                    // عند حذف مهمة، تأكد من الحفظ
                    const originalDeleteTask = taskManager.deleteTask.bind(taskManager);
                    taskManager.deleteTask = function(id) {
                        const result = originalDeleteTask(id);
                        if (result) {
                            console.log('✅ تم حذف المهمة من LocalStorage');
                        }
                        return result;
                    };
                </div>
                
                <div class="note-box">
                    <strong>💡 لماذا نستخدم LocalStorage؟</strong>
                    <ul>
                        <li><strong>الاستمرارية:</strong> المهام تبقى حتى بعد إغلاق المتصفح</li>
                        <li><strong>السرعة:</strong> البيانات مخزنة محلياً، لا حاجة للاتصال بالخادم</li>
                        <li><strong>البساطة:</strong> API بسيط وسهل الاستخدام</li>
                        <li><strong>السعة:</strong> تصل إلى 5-10 ميجابايت</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس 17: معاينة وتنزيل المشروع
        // ============================================================
        {
            id: '5-17',
            title: 'معاينة وتنزيل المشروع النهائي',
            content: `
                <h3>معاينة المشروع وتنزيل الأكواد</h3>
                <p>تهانينا! لقد أكملت بناء تطبيق إدارة المهام بالكامل. الآن يمكنك معاينته وتنزيل الأكواد.</p>
                
                <h4>ماذا تعلمت في هذا المشروع؟</h4>
                <ul>
                    <li><strong>HTML:</strong> استخدام العناصر الدلالية، النماذج، الروابط، القوائم</li>
                    <li><strong>CSS:</strong> المتغيرات، الثيمات، Flexbox، Grid، الاستجابة، الحركات</li>
                    <li><strong>JavaScript:</strong> الفئات، المصفوفات، الكائنات، الدوال، الأحداث، DOM، LocalStorage، Web Speech API</li>
                </ul>
                
                <h4>المشروع يحتوي على:</h4>
                <ul>
                    <li>✅ 3 ملفات (index.html, style.css, app.js)</li>
                    <li>✅ شريط إمكانية وصول كامل</li>
                    <li>✅ إضافة وحذف وتحديث المهام</li>
                    <li>✅ تصفية وبحث</li>
                    <li>✅ حفظ تلقائي في LocalStorage</li>
                    <li>✅ ثيمات داكن/فاتح وتباين عالي</li>
                    <li>✅ قراءة صوتية للمهام</li>
                    <li>✅ تصميم متجاوب مع جميع الأجهزة</li>
                </ul>
                
                <div class="project-actions">
                    <button class="preview-btn" onclick="previewProject()">👁️ معاينة المشروع</button>
                    <button class="download-btn" onclick="downloadProject()">📥 تنزيل الأكواد (ZIP)</button>
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
