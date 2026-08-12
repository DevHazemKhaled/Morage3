const chapter4 = {
    // معرف الفصل - يستخدم للربط بين الفصول
    id: 'ch4',
    
    // عنوان الفصل الذي سيظهر في القائمة الجانبية
    title: 'JavaScript المتقدم - البرمجة والتفاعل',
    
    // وصف مختصر للفصل
    description: 'تعلم JavaScript بشكل احترافي مع DOM، الأحداث، الـ API، والتخزين المحلي',
    
    // قائمة الدروس - كل درس هو كائن يحتوي على id, title, content
    lessons: [
        // ============================================================
        // الدرس الأول: المتغيرات وأنواع البيانات
        // ============================================================
        {
            id: '4-1',
            title: 'المتغيرات وأنواع البيانات (let, const, var)',
            content: `
                <h3>المتغيرات في JavaScript - أساس البرمجة</h3>
                <p>المتغيرات هي حاويات تخزن البيانات. تعلم الفرق بين let و const و var.</p>
                
                <div class="code-block">
                    // ==========================================
                    // 1. var - الطريقة القديمة (لا تستخدمها)
                    // ==========================================
                    // var: متغير يمكن إعادة تعريفه وتغيير قيمته
                    // له نطاق وظيفي (Function Scope) وليس نطاق كتلي (Block Scope)
                    var name = "أحمد";   // تعريف متغير name بقيمة "أحمد"
                    var age = 25;        // تعريف متغير age بقيمة 25
                    
                    // يمكن إعادة تعريف var
                    var name = "محمد";   // إعادة تعريف name - مسموح (خطأ شائع)
                    
                    // ==========================================
                    // 2. let - متغير قابل للتغيير (محدث)
                    // ==========================================
                    // let: متغير يمكن تغيير قيمته ولكن لا يمكن إعادة تعريفه
                    // له نطاق كتلي (Block Scope) - يقتصر على الأقواس {}
                    let userName = "سارة";
                    userName = "سارة محمد";  // تغيير القيمة - مسموح
                    // let userName = "أحمد";  // إعادة تعريف - خطأ! غير مسموح
                    
                    // ==========================================
                    // 3. const - ثابت لا يمكن تغيير قيمته
                    // ==========================================
                    // const: قيمة ثابتة لا يمكن تغييرها أو إعادة تعريفها
                    const PI = 3.14159;
                    // PI = 3.14;  // تغيير القيمة - خطأ! غير مسموح
                    // const PI = 3.14;  // إعادة تعريف - خطأ! غير مسموح
                    
                    // ==========================================
                    // الفرق في النطاق (Scope)
                    // ==========================================
                    if (true) {
                        // var: مرئي خارج الأقواس (نطاق وظيفي)
                        var oldVar = "مرئي خارج النطاق";
                        
                        // let: غير مرئي خارج الأقواس (نطاق كتلي)
                        let newLet = "غير مرئي خارج النطاق";
                        
                        // const: غير مرئي خارج الأقواس (نطاق كتلي)
                        const newConst = "أيضاً غير مرئي";
                    }
                    
                    console.log(oldVar);   // يعمل - var مرئي خارج النطاق
                    // console.log(newLet);   // خطأ! newLet غير معرف
                    // console.log(newConst); // خطأ! newConst غير معرف
                </div>
                
                <h4>أنواع البيانات الأساسية</h4>
                <ul>
                    <li><strong>String (نص):</strong> <code>"أهلاً بالعالم"</code> أو <code>'مرحباً'</code> - أي نص بين علامتي تنصيص</li>
                    <li><strong>Number (رقم):</strong> <code>42</code>، <code>3.14</code>، <code>-10</code> - أي رقم صحيح أو عشري</li>
                    <li><strong>Boolean (منطقي):</strong> <code>true</code> أو <code>false</code> - قيم صواب أو خطأ</li>
                    <li><strong>Undefined:</strong> متغير لم يعطى قيمة - قيمته غير محددة</li>
                    <li><strong>Null:</strong> قيمة فارغة متعمدة - تعني "لا توجد قيمة"</li>
                    <li><strong>Object (كائن):</strong> مجموعة من الخصائص - مثل {name: "أحمد"}</li>
                    <li><strong>Array (مصفوفة):</strong> قائمة من القيم - مثل [1, 2, 3]</li>
                </ul>
                
                <div class="code-block">
                    // ==========================================
                    // أمثلة على أنواع البيانات
                    // ==========================================
                    let studentName = "محمد علي";  // String - نص
                    let studentAge = 22;           // Number - رقم
                    let isActive = true;           // Boolean - صواب
                    let address;                   // Undefined - غير محدد
                    let phone = null;              // Null - فارغ
                    
                    // ==========================================
                    // معرفة نوع المتغير باستخدام typeof
                    // ==========================================
                    console.log(typeof studentName);  // "string" - نوع النص
                    console.log(typeof studentAge);   // "number" - نوع الرقم
                    console.log(typeof isActive);     // "boolean" - نوع منطقي
                    console.log(typeof address);      // "undefined" - غير محدد
                    console.log(typeof phone);        // "object" - (null يعتبر object في JavaScript)
                </div>
                
                <div class="note-box">
                    <strong>💡 قواعد استخدام المتغيرات:</strong>
                    <ul>
                        <li>استخدم <code>const</code> بشكل افتراضي للمتغيرات التي لا تتغير</li>
                        <li>استخدم <code>let</code> عندما تحتاج لتغيير القيمة</li>
                        <li><strong>لا تستخدم <code>var</code></strong> في الكود الحديث</li>
                        <li>استخدم أسماء ذات معنى للمتغيرات (مثل: userAge, isLoggedIn)</li>
                        <li>استخدم <code>camelCase</code> لتسمية المتغيرات (تبدأ بحرف صغير، كل كلمة جديدة بحرف كبير)</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // تعريف بيانات المهمة باستخدام const و let
                        // ==========================================
                        
                        // const للقيم الثابتة التي لا تتغير
                        const task = {
                            id: Date.now(),              // معرف فريد باستخدام الوقت
                            title: "تعلم JavaScript",    // عنوان المهمة
                            description: "دراسة الفصل الرابع من كورس البرمجة",
                            status: "pending",           // الحالة: pending, progress, completed
                            priority: "high",            // الأولوية: high, medium, low
                            createdAt: new Date().toISOString(),  // تاريخ الإنشاء
                            dueDate: "2026-08-20"        // تاريخ الاستحقاق
                        };
                        
                        // let للقيم التي ستتغير
                        let tasks = [];  // مصفوفة لتخزين المهام - ستتغير بإضافة وحذف
                        
                        // ==========================================
                        // دالة لإضافة مهمة جديدة
                        // ==========================================
                        function addTask(taskData) {
                            // const للمتغيرات التي لا تتغير داخل الدالة
                            const newTask = {
                                id: Date.now(),           // معرف فريد
                                ...taskData,              // نسخ البيانات المرسلة (spread operator)
                                createdAt: new Date().toISOString(),  // تاريخ الإنشاء
                                status: "pending"         // الحالة الافتراضية
                            };
                            
                            tasks.push(newTask);  // إضافة المهمة إلى المصفوفة
                            return newTask;       // إرجاع المهمة المضافة
                        }
                    </div>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الثاني: الجمل الشرطية
        // ============================================================
        {
            id: '4-2',
            title: 'الجمل الشرطية (if, else, switch)',
            content: `
                <h3>اتخاذ القرارات في البرمجة - الجمل الشرطية</h3>
                <p>الجمل الشرطية تسمح للبرنامج باتخاذ قرارات مختلفة بناءً على شروط معينة.</p>
                
                <div class="code-block">
                    // ==========================================
                    // 1. if - الشرط الأساسي
                    // ==========================================
                    let age = 18;
                    
                    // if: إذا تحقق الشرط
                    if (age >= 18) {
                        console.log("أنت بالغ");  // سيتم تنفيذ هذا السطر
                    }
                    
                    // ==========================================
                    // 2. if...else - شرط مع بديل
                    // ==========================================
                    if (age >= 18) {
                        console.log("أنت بالغ");    // إذا تحقق الشرط
                    } else {
                        console.log("أنت قاصر");    // إذا لم يتحقق الشرط
                    }
                    
                    // ==========================================
                    // 3. if...else if...else - شروط متعددة
                    // ==========================================
                    let score = 85;
                    
                    // يتم التحقق من الشروط بالترتيب
                    if (score >= 90) {
                        console.log("ممتاز");        // score >= 90
                    } else if (score >= 80) {
                        console.log("جيد جداً");     // score بين 80 و 89
                    } else if (score >= 70) {
                        console.log("جيد");          // score بين 70 و 79
                    } else {
                        console.log("تحتاج للمراجعة");  // score أقل من 70
                    }
                </div>
                
                <h4>switch - بديل متقدم للشروط المتعددة</h4>
                <div class="code-block">
                    // ==========================================
                    // switch: يستخدم عندما يكون هناك قيم محددة
                    // ==========================================
                    let day = "الأحد";
                    
                    // switch: يتحقق من قيمة المتغير
                    switch (day) {
                        case "الأحد":   // إذا day === "الأحد"
                            console.log("أول أيام الأسبوع");
                            break;      // break: يخرج من الـ switch
                            
                        case "الجمعة":  // إذا day === "الجمعة"
                        case "السبت":   // أو day === "السبت"
                            console.log("عطلة نهاية الأسبوع");
                            break;
                            
                        default:        // إذا لم تطابق أي حالة
                            console.log("يوم عمل");
                    }
                </div>
                
                <h4>العوامل المنطقية والشرطية</h4>
                <div class="code-block">
                    // ==========================================
                    // العوامل المنطقية (Logical Operators)
                    // ==========================================
                    let age = 25;
                    let hasLicense = true;
                    
                    // && (AND) - يجب أن يكون الكل true
                    if (age >= 18 && hasLicense) {
                        console.log("يمكنك القيادة");  // الشرطان معاً true
                    }
                    
                    // || (OR) - يكفي شرط واحد true
                    let isStudent = true;
                    let isTeacher = false;
                    if (isStudent || isTeacher) {
                        console.log("أنت عضو في المؤسسة التعليمية");  // شرط واحد true
                    }
                    
                    // ! (NOT) - عكس القيمة
                    let isLoggedIn = false;
                    if (!isLoggedIn) {  // !false = true
                        console.log("الرجاء تسجيل الدخول");
                    }
                    
                    // ==========================================
                    // العامل الثلاثي (Ternary Operator)
                    // ==========================================
                    // اختصار للـ if...else في سطر واحد
                    // الشرط ? القيمة_إذا_تحقق : القيمة_إذا_لم_يتحقق
                    let message = age >= 18 ? "بالغ" : "قاصر";
                    console.log(message);  // "بالغ"
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // تصفية المهام حسب الحالة باستخدام if
                        // ==========================================
                        function filterTasks(status) {
                            // if: التحقق من الحالة المطلوبة
                            if (status === "all") {
                                return tasks;  // إرجاع جميع المهام
                            } else if (status === "pending") {
                                // filter: تصفية المهام المعلقة
                                return tasks.filter(task => task.status === "pending");
                            } else if (status === "progress") {
                                return tasks.filter(task => task.status === "progress");
                            } else if (status === "completed") {
                                return tasks.filter(task => task.status === "completed");
                            } else {
                                return tasks;  // في حالة الحالة غير معروفة
                            }
                        }
                        
                        // ==========================================
                        // تحديد أولوية المهمة باستخدام switch
                        // ==========================================
                        function getPriorityLabel(priority) {
                            switch (priority) {
                                case "high":
                                    return "🔴 عالية";    // أولوية عالية
                                case "medium":
                                    return "🟡 متوسطة";   // أولوية متوسطة
                                case "low":
                                    return "🟢 منخفضة";    // أولوية منخفضة
                                default:
                                    return "غير محددة";   // إذا لم تطابق أي حالة
                            }
                        }
                        
                        // ==========================================
                        // التحقق من صحة المهمة
                        // ==========================================
                        function validateTask(task) {
                            // if: التحقق من وجود عنوان
                            if (!task.title || task.title.trim() === "") {
                                return { valid: false, message: "عنوان المهمة مطلوب" };
                            }
                            
                            // if: التحقق من طول العنوان
                            if (task.title.length < 3) {
                                return { valid: false, message: "عنوان المهمة قصير جداً" };
                            }
                            
                            // العامل الثلاثي: اختصار
                            return { 
                                valid: true, 
                                message: "مهمة صحيحة" 
                            };
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للجمل الشرطية:</strong>
                    <ul>
                        <li>استخدم <code>===</code> (مقارنة صارمة) بدلاً من <code>==</code> للمقارنة</li>
                        <li>رتب الشروط من الأكثر تحديداً إلى الأقل</li>
                        <li>استخدم العامل الثلاثي للشروط البسيطة فقط</li>
                        <li>استخدم switch عند وجود العديد من الحالات الثابتة</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الثالث: الحلقات التكرارية والمصفوفات والكائنات
        // ============================================================
        {
            id: '4-3',
            title: 'الحلقات التكرارية والمصفوفات والكائنات',
            content: `
                <h3>الحلقات التكرارية - معالجة البيانات بكفاءة</h3>
                <p>الحلقات تسمح بتكرار تنفيذ كود معين عدة مرات، وهي أساسية لمعالجة المصفوفات والكائنات.</p>
                
                <div class="code-block">
                    // ==========================================
                    // 1. for - الحلقة الأكثر استخداماً
                    // ==========================================
                    // for (البداية; الشرط; التحديث)
                    for (let i = 0; i < 5; i++) {
                        // i = 0: متغير البداية
                        // i < 5: الشرط - يستمر طالما i أقل من 5
                        // i++: التحديث - يزيد i بمقدار 1 بعد كل تكرار
                        console.log(\`الرقم: \${i}\`);  // يطبع 0, 1, 2, 3, 4
                    }

                    // ==========================================
                    // 2. while - تنفذ طالما الشرط true
                    // ==========================================
                    let count = 0;
                    while (count < 3) {  // يستمر طالما count أقل من 3
                        console.log(\`العد: \${count}\`);
                        count++;  // زيادة العداد لتجنب حلقة لا نهائية
                    }

                    // ==========================================
                    // 3. do...while - تنفذ مرة واحدة على الأقل
                    // ==========================================
                    let num = 5;
                    do {
                        console.log(\`الرقم: \${num}\`);  // تنفذ مرة واحدة
                        num++;
                    } while (num < 3);  // الشرط false، لكن نفذت مرة واحدة
                </div>
                
                <h4>المصفوفات (Arrays) - تخزين قوائم البيانات</h4>
                <div class="code-block">
                    // ==========================================
                    // إنشاء مصفوفة
                    // ==========================================
                    let fruits = ["تفاح", "موز", "برتقال"];  // مصفوفة نصوص
                    let numbers = [1, 2, 3, 4, 5];            // مصفوفة أرقام
                    let mixed = ["نص", 42, true, {name: "أحمد"}];  // مصفوفة مختلطة

                    // ==========================================
                    // الوصول إلى عناصر المصفوفة
                    // ==========================================
                    console.log(fruits[0]);   // "تفاح" - العنصر الأول (يبدأ من 0)
                    console.log(fruits[1]);   // "موز" - العنصر الثاني
                    console.log(fruits.length);  // 3 - طول المصفوفة

                    // ==========================================
                    // إضافة وحذف عناصر
                    // ==========================================
                    fruits.push("عنب");       // push: إضافة في النهاية
                    fruits.pop();             // pop: حذف من النهاية
                    fruits.unshift("فراولة"); // unshift: إضافة في البداية
                    fruits.shift();           // shift: حذف من البداية

                    // ==========================================
                    // التكرار على المصفوفة (طرق مختلفة)
                    // ==========================================
                    // الطريقة التقليدية: for
                    for (let i = 0; i < fruits.length; i++) {
                        console.log(fruits[i]);
                    }
                    
                    // forEach: طريقة حديثة للتكرار
                    fruits.forEach(function(fruit) {
                        console.log(fruit);
                    });
                    
                    // forEach مع دالة سهمية (اختصار)
                    fruits.forEach(fruit => console.log(fruit));

                    // ==========================================
                    // دوال متقدمة للمصفوفات
                    // ==========================================
                    // map: تحويل المصفوفة إلى مصفوفة جديدة
                    let doubled = numbers.map(n => n * 2);
                    console.log(doubled);  // [2, 4, 6, 8, 10]

                    // filter: تصفية المصفوفة
                    let evenNumbers = numbers.filter(n => n % 2 === 0);
                    console.log(evenNumbers);  // [2, 4]

                    // find: البحث عن عنصر
                    let found = numbers.find(n => n > 3);
                    console.log(found);  // 4 (أول عنصر أكبر من 3)

                    // reduce: تجميع القيم
                    let sum = numbers.reduce((total, n) => total + n, 0);
                    console.log(sum);  // 15 (1+2+3+4+5)
                </div>
                
                <h4>الكائنات (Objects) - تخزين بيانات منظمة</h4>
                <div class="code-block">
                    // ==========================================
                    // إنشاء كائن
                    // ==========================================
                    let person = {
                        name: "سارة",          // خاصية name
                        age: 25,               // خاصية age
                        city: "الرياض",        // خاصية city
                        skills: ["HTML", "CSS", "JavaScript"],  // مصفوفة
                        isStudent: false       // خاصية منطقية
                    };

                    // ==========================================
                    // الوصول إلى خصائص الكائن
                    // ==========================================
                    console.log(person.name);     // "سارة" - نقطة (.)
                    console.log(person["age"]);   // 25 - أقواس مربعة []

                    // ==========================================
                    // تعديل الخصائص
                    // ==========================================
                    person.age = 26;              // تغيير قيمة موجودة
                    person["city"] = "جدة";       // تغيير قيمة موجودة

                    // ==========================================
                    // إضافة خصائص جديدة
                    // ==========================================
                    person.email = "sara@email.com";  // إضافة خاصية جديدة

                    // ==========================================
                    // التكرار على خصائص الكائن
                    // ==========================================
                    for (let key in person) {
                        console.log(\`\${key}: \${person[key]}\`);
                        // key: اسم الخاصية
                        // person[key]: قيمة الخاصية
                    }

                    // ==========================================
                    // دوال مساعدة للكائنات
                    // ==========================================
                    console.log(Object.keys(person));    // ["name", "age", ...]
                    console.log(Object.values(person));  // ["سارة", 26, ...]
                    console.log(Object.entries(person)); // [["name","سارة"], ...]
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // معالجة المهام باستخدام دوال المصفوفات
                        // ==========================================
                        
                        // دالة لإحصائيات المهام
                        function getTaskStatistics() {
                            const total = tasks.length;  // عدد المهام الكلي
                            
                            // filter: تصفية المهام حسب الحالة
                            const completed = tasks.filter(t => t.status === "completed").length;
                            const pending = tasks.filter(t => t.status === "pending").length;
                            const progress = tasks.filter(t => t.status === "progress").length;
                            
                            // إرجاع كائن يحتوي على الإحصائيات
                            return { total, completed, pending, progress };
                        }
                        
                        // ==========================================
                        // البحث عن مهمة باستخدام find
                        // ==========================================
                        function findTask(id) {
                            // find: يبحث عن مهمة بنفس الـ id
                            return tasks.find(task => task.id === id);
                        }
                        
                        // ==========================================
                        // حذف مهمة باستخدام findIndex و splice
                        // ==========================================
                        function deleteTask(id) {
                            // findIndex: يبحث عن index المهمة
                            const index = tasks.findIndex(task => task.id === id);
                            
                            if (index !== -1) {  // إذا وجدت المهمة
                                tasks.splice(index, 1);  // splice: حذف عنصر من المصفوفة
                                return true;  // تم الحذف
                            }
                            return false;  // لم يتم الحذف
                        }
                        
                        // ==========================================
                        // تجميع المهام حسب الأولوية باستخدام reduce
                        // ==========================================
                        function groupTasksByPriority() {
                            // reduce: تجميع المهام في كائن حسب الأولوية
                            return tasks.reduce((groups, task) => {
                                const priority = task.priority || "medium";
                                
                                if (!groups[priority]) {
                                    groups[priority] = [];  // إنشاء مصفوفة جديدة
                                }
                                groups[priority].push(task);  // إضافة المهمة للمجموعة
                                return groups;
                            }, {});
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للتعامل مع المصفوفات والكائنات:</strong>
                    <ul>
                        <li>استخدم <code>const</code> للمصفوفات والكائنات (يمكن تعديل المحتوى لكن لا يمكن إعادة تعريفه)</li>
                        <li>استخدم <code>map</code> و <code>filter</code> بدلاً من الحلقات التقليدية</li>
                        <li>استخدم <code>...spread</code> لنسخ المصفوفات والكائنات</li>
                        <li>استخدم <code>find</code> للبحث عن عنصر واحد</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الرابع: الدوال (Functions)
        // ============================================================
        {
            id: '4-4',
            title: 'الدوال (Functions) - تنظيم الكود وإعادة الاستخدام',
            content: `
                <h3>الدوال - بناء كود قابل لإعادة الاستخدام</h3>
                <p>الدوال هي كتل برمجية قابلة لإعادة الاستخدام، تنفذ مهمة محددة.</p>
                
                <div class="code-block">
                    // ==========================================
                    // 1. الدوال التقليدية (Function Declaration)
                    // ==========================================
                    // function: الكلمة المفتاحية لتعريف دالة
                    // greet: اسم الدالة
                    // (name): المعاملات (parameters)
                    function greet(name) {
                        return \`مرحباً \${name}!\`;  // return: إرجاع القيمة
                    }
                    console.log(greet("أحمد"));  // استدعاء الدالة

                    // ==========================================
                    // 2. الدوال السهمية (Arrow Functions) - ES6
                    // ==========================================
                    // =>: رمز الدالة السهمية
                    const greetArrow = (name) => {
                        return \`مرحباً \${name}!\`;
                    };
                    
                    // اختصار: إذا كان هناك معامل واحد و return بسيط
                    const double = x => x * 2;  // بدون أقواس وبدون return
                    console.log(double(5));  // 10

                    // ==========================================
                    // 3. تعبير الدوال (Function Expression)
                    // ==========================================
                    const add = function(a, b) {
                        return a + b;
                    };
                </div>
                
                <h4>معاملات الدوال والقيم الافتراضية</h4>
                <div class="code-block">
                    // ==========================================
                    // معاملات افتراضية (Default Parameters)
                    // ==========================================
                    // age = 18: إذا لم يتم إرسال age، سيتم استخدام 18
                    function createUser(name, age = 18, city = "غير محدد") {
                        return { name, age, city };
                    }
                    
                    console.log(createUser("سارة"));
                    // {name: "سارة", age: 18, city: "غير محدد"}

                    // ==========================================
                    // Rest Parameters (...args)
                    // ==========================================
                    // ...numbers: يجمع جميع المعاملات في مصفوفة
                    function sum(...numbers) {
                        // reduce: يجمع جميع الأرقام
                        return numbers.reduce((total, num) => total + num, 0);
                    }
                    console.log(sum(1, 2, 3, 4, 5));  // 15
                </div>
                
                <h4>دوال متقدمة - Callback و Higher-Order</h4>
                <div class="code-block">
                    // ==========================================
                    // 1. Callback - دالة تُمرر كمعامل
                    // ==========================================
                    // callback: دالة يتم استدعاؤها داخل الدالة الأخرى
                    function processUser(name, callback) {
                        const processed = \`مرحباً \${name}\`;
                        callback(processed);  // استدعاء الدالة المرسلة
                    }
                    
                    // استخدام callback
                    processUser("أحمد", (message) => {
                        console.log(message);  // "مرحباً أحمد"
                    });

                    // ==========================================
                    // 2. Higher-Order Function - دالة ترجع دالة
                    // ==========================================
                    function multiplyBy(factor) {
                        // ترجع دالة جديدة
                        return function(number) {
                            return number * factor;
                        };
                    }
                    
                    const doubleNumber = multiplyBy(2);  // دالة تضرب في 2
                    console.log(doubleNumber(5));  // 10

                    // ==========================================
                    // 3. Closure - دالة تتذكر بيئتها
                    // ==========================================
                    function counter() {
                        let count = 0;  // متغير محلي
                        return function() {
                            count++;  // يزيد العداد
                            return count;
                        };
                    }
                    
                    const myCounter = counter();
                    console.log(myCounter());  // 1
                    console.log(myCounter());  // 2
                    console.log(myCounter());  // 3
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // فئة إدارة المهام باستخدام الدوال
                        // ==========================================
                        class TaskManager {
                            constructor() {
                                this.tasks = [];  // مصفوفة المهام
                                this.loadTasks();  // تحميل المهام من التخزين
                            }
                            
                            // ==========================================
                            // إضافة مهمة
                            // ==========================================
                            addTask(taskData) {
                                // إنشاء كائن المهمة
                                const task = {
                                    id: Date.now(),
                                    title: taskData.title,
                                    description: taskData.description || "",
                                    status: "pending",
                                    priority: taskData.priority || "medium",
                                    createdAt: new Date().toISOString(),
                                    dueDate: taskData.dueDate || null
                                };
                                
                                this.tasks.push(task);  // إضافة للمصفوفة
                                this.saveTasks();  // حفظ في التخزين
                                return task;
                            }
                            
                            // ==========================================
                            // حذف مهمة
                            // ==========================================
                            deleteTask(id) {
                                // filter: يحذف المهمة التي تحمل الـ id
                                this.tasks = this.tasks.filter(task => task.id !== id);
                                this.saveTasks();
                            }
                            
                            // ==========================================
                            // تحديث مهمة
                            // ==========================================
                            updateTask(id, updates) {
                                const task = this.tasks.find(t => t.id === id);
                                if (task) {
                                    // Object.assign: دمج التحديثات مع المهمة
                                    Object.assign(task, updates);
                                    this.saveTasks();
                                    return true;
                                }
                                return false;
                            }
                            
                            // ==========================================
                            // الحصول على جميع المهام
                            // ==========================================
                            getAllTasks() {
                                // ...: Spread Operator - نسخ المصفوفة
                                return [...this.tasks];
                            }
                            
                            // ==========================================
                            // تصفية المهام حسب الحالة
                            // ==========================================
                            getTasksByStatus(status) {
                                if (status === "all") {
                                    return this.getAllTasks();
                                }
                                return this.tasks.filter(task => task.status === status);
                            }
                            
                            // ==========================================
                            // حفظ في LocalStorage
                            // ==========================================
                            saveTasks() {
                                // JSON.stringify: تحويل الكائن إلى نص
                                localStorage.setItem("tasks", JSON.stringify(this.tasks));
                            }
                            
                            // ==========================================
                            // تحميل من LocalStorage
                            // ==========================================
                            loadTasks() {
                                const saved = localStorage.getItem("tasks");
                                if (saved) {
                                    // JSON.parse: تحويل النص إلى كائن
                                    this.tasks = JSON.parse(saved);
                                }
                            }
                        }
                        
                        // ==========================================
                        // استخدام TaskManager
                        // ==========================================
                        const taskManager = new TaskManager();
                        
                        // إضافة مهمة
                        taskManager.addTask({
                            title: "تعلم JavaScript",
                            description: "دراسة الفصل الرابع",
                            priority: "high"
                        });
                        
                        console.log(taskManager.getAllTasks());  // عرض المهام
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للدوال:</strong>
                    <ul>
                        <li>اسم الدالة يجب أن يعبر عن وظيفتها (مثل: getUserData)</li>
                        <li>الدالة يجب أن تقوم بمهمة واحدة فقط</li>
                        <li>استخدم الدوال السهمية للدوال البسيطة</li>
                        <li>استخدم <code>return</code> لإرجاع القيم</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الخامس: DOM Manipulation
        // ============================================================
        {
            id: '4-5',
            title: 'DOM Manipulation - التحكم في عناصر الصفحة',
            content: `
                <h3>التفاعل مع DOM - التحكم في عناصر الصفحة</h3>
                <p>DOM (Document Object Model) هو تمثيل برمجي لصفحة HTML، يسمح لـ JavaScript بالتحكم في العناصر.</p>
                
                <div class="code-block">
                    // ==========================================
                    // اختيار العناصر
                    // ==========================================
                    
                    // getElementById: اختيار عنصر بواسطة id
                    const header = document.getElementById("header");
                    
                    // getElementsByClassName: اختيار عناصر بواسطة class
                    const cards = document.getElementsByClassName("card");
                    
                    // getElementsByTagName: اختيار عناصر بواسطة Tag
                    const paragraphs = document.getElementsByTagName("p");
                    
                    // ==========================================
                    // querySelector - الأحدث والأفضل
                    // ==========================================
                    
                    // querySelector: يختار أول عنصر مطابق
                    const mainContent = document.querySelector(".main-content");
                    
                    // querySelectorAll: يختار جميع العناصر المطابقة
                    const allButtons = document.querySelectorAll("button.primary");
                </div>
                
                <h4>تعديل المحتوى والخصائص</h4>
                <div class="code-block">
                    // ==========================================
                    // تغيير النص
                    // ==========================================
                    const title = document.querySelector("h1");
                    
                    // textContent: يغير النص فقط (آمن)
                    title.textContent = "مرحباً في أكاديمية الكومندا";
                    
                    // innerHTML: يغير النص مع إمكانية إضافة HTML
                    title.innerHTML = "<span style='color: gold;'>مرحباً</span> في الأكاديمية";

                    // ==========================================
                    // تغيير السمات (Attributes)
                    // ==========================================
                    const link = document.querySelector("a");
                    
                    // setAttribute: تغيير سمة
                    link.setAttribute("href", "https://google.com");
                    link.setAttribute("target", "_blank");

                    // ==========================================
                    // تغيير التنسيقات (Styles)
                    // ==========================================
                    const box = document.querySelector(".box");
                    
                    // style: تغيير التنسيقات مباشرة
                    box.style.backgroundColor = "#facc15";  // لون الخلفية
                    box.style.padding = "20px";             // المسافة الداخلية
                    box.style.borderRadius = "8px";         // الزوايا الدائرية

                    // ==========================================
                    // إضافة/إزالة Classes
                    // ==========================================
                    // classList: إدارة الفئات
                    box.classList.add("active");        // إضافة فئة
                    box.classList.remove("inactive");   // إزالة فئة
                    box.classList.toggle("highlight");  // تبديل الفئة
                    
                    // contains: التحقق من وجود فئة
                    if (box.classList.contains("active")) {
                        console.log("العنصر نشط");
                    }
                </div>
                
                <h4>إنشاء وحذف العناصر</h4>
                <div class="code-block">
                    // ==========================================
                    // إنشاء عنصر جديد
                    // ==========================================
                    const newDiv = document.createElement("div");  // إنشاء عنصر
                    newDiv.textContent = "عنصر جديد";              // إضافة نص
                    newDiv.className = "new-item";                 // إضافة فئة

                    // ==========================================
                    // إضافة العنصر إلى الصفحة
                    // ==========================================
                    const container = document.querySelector(".container");
                    
                    container.appendChild(newDiv);    // إضافة في النهاية
                    container.prepend(newDiv);        // إضافة في البداية
                    container.insertBefore(newDiv, container.firstChild);  // قبل عنصر محدد

                    // ==========================================
                    // حذف عنصر
                    // ==========================================
                    const oldElement = document.querySelector(".old");
                    oldElement.remove();  // remove: حذف العنصر

                    // ==========================================
                    // إنشاء عناصر مع محتوى HTML
                    // ==========================================
                    container.innerHTML += '<div class="card">بطاقة جديدة</div>';
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // عرض المهام في DOM
                        // ==========================================
                        function renderTasks(tasks) {
                            const taskList = document.getElementById("taskList");
                            taskList.innerHTML = "";  // مسح المحتوى
                            
                            // التكرار على المهام وعرضها
                            tasks.forEach(task => {
                                // إنشاء بطاقة المهمة
                                const taskCard = document.createElement("div");
                                taskCard.className = \`task-card \${task.status}\`;
                                taskCard.dataset.id = task.id;  // تخزين id
                                
                                // إضافة محتوى البطاقة
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
                                
                                taskList.appendChild(taskCard);  // إضافة للصفحة
                            });
                        }

                        // ==========================================
                        // إضافة مهمة جديدة من DOM
                        // ==========================================
                        function addTaskFromForm() {
                            const titleInput = document.getElementById("taskTitle");
                            const descInput = document.getElementById("taskDesc");
                            
                            // التحقق من صحة الإدخال
                            if (titleInput.value.trim() === "") {
                                alert("الرجاء إدخال عنوان المهمة");
                                return;
                            }
                            
                            // إضافة المهمة
                            const newTask = taskManager.addTask({
                                title: titleInput.value,
                                description: descInput.value
                            });
                            
                            // تنظيف الحقول
                            titleInput.value = "";
                            descInput.value = "";
                            
                            // تحديث العرض
                            renderTasks(taskManager.getAllTasks());
                            updateStats();
                        }

                        // ==========================================
                        // تحديث الإحصائيات
                        // ==========================================
                        function updateStats() {
                            const stats = taskManager.getStats();
                            
                            // تحديث عناصر DOM
                            document.getElementById("totalTasks").textContent = stats.total;
                            document.getElementById("completedTasks").textContent = stats.completed;
                            document.getElementById("pendingTasks").textContent = stats.pending;
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للتعامل مع DOM:</strong>
                    <ul>
                        <li>استخدم <code>querySelector</code> و <code>querySelectorAll</code> للاختيار</li>
                        <li>خزّن العناصر في متغيرات لتجنب البحث المتكرر</li>
                        <li>استخدم <code>textContent</code> بدلاً من <code>innerHTML</code> إذا لم تحتج HTML</li>
                        <li>استخدم <code>classList</code> لإدارة الفئات</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس السادس: الأحداث (Event Listeners)
        // ============================================================
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
                    // ==========================================
                    // 1. حدث النقر (click)
                    // ==========================================
                    const button = document.querySelector("#myButton");
                    
                    // addEventListener: إضافة مستمع للحدث
                    button.addEventListener("click", (event) => {
                        console.log("تم النقر على الزر");
                        console.log(event.target);  // العنصر الذي تم النقر عليه
                    });

                    // ==========================================
                    // 2. حدث الإدخال (input)
                    // ==========================================
                    const input = document.querySelector("#nameInput");
                    
                    input.addEventListener("input", (event) => {
                        // event.target.value: القيمة المدخلة
                        console.log(\`القيمة الحالية: \${event.target.value}\`);
                    });

                    // ==========================================
                    // 3. حدث التمرير (scroll)
                    // ==========================================
                    window.addEventListener("scroll", () => {
                        // window.scrollY: مقدار التمرير العمودي
                        console.log(\`التمرير: \${window.scrollY}px\`);
                    });

                    // ==========================================
                    // 4. حدث تحميل الصفحة (load)
                    // ==========================================
                    window.addEventListener("load", () => {
                        console.log("تم تحميل الصفحة بالكامل");
                    });

                    // ==========================================
                    // 5. منع السلوك الافتراضي (preventDefault)
                    // ==========================================
                    const form = document.querySelector("#myForm");
                    
                    form.addEventListener("submit", (event) => {
                        event.preventDefault();  // منع إعادة تحميل الصفحة
                        console.log("تم إرسال النموذج");
                    });
                </div>
                
                <h4>تفويض الأحداث (Event Delegation)</h4>
                <div class="code-block">
                    // ==========================================
                    // Event Delegation: إضافة حدث للعنصر الأب
                    // ==========================================
                    // بدلاً من إضافة حدث لكل عنصر، نضيفه للعنصر الأب
                    const list = document.querySelector("#taskList");
                    
                    list.addEventListener("click", (event) => {
                        // event.target: العنصر الذي تم النقر عليه
                        // closest: البحث عن أقرب عنصر مطابق
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
                        // ==========================================
                        // ربط الأحداث في مشروع إدارة المهام
                        // ==========================================
                        document.addEventListener("DOMContentLoaded", function() {
                            // DOMContentLoaded: يحدث بعد تحميل الـ DOM
                            
                            // ==========================================
                            // تحميل المهام
                            // ==========================================
                            renderTasks(taskManager.getAllTasks());
                            updateStats();
                            
                            // ==========================================
                            // زر إضافة مهمة
                            // ==========================================
                            document.getElementById("addTaskBtn")
                                .addEventListener("click", addTaskFromForm);
                            
                            // ==========================================
                            // إضافة مهمة بالضغط على Enter
                            // ==========================================
                            document.getElementById("taskTitle")
                                .addEventListener("keydown", (e) => {
                                    if (e.key === "Enter") {  // إذا ضغط Enter
                                        addTaskFromForm();
                                    }
                                });
                            
                            // ==========================================
                            // فلترة المهام
                            // ==========================================
                            document.querySelectorAll(".filter-btn").forEach(btn => {
                                btn.addEventListener("click", function() {
                                    // data-filter: الحالة المطلوبة للفلترة
                                    const status = this.dataset.filter;
                                    
                                    const filtered = status === "all" 
                                        ? taskManager.getAllTasks() 
                                        : taskManager.getTasksByStatus(status);
                                    
                                    renderTasks(filtered);
                                    
                                    // تفعيل الزر المحدد
                                    document.querySelectorAll(".filter-btn")
                                        .forEach(b => b.classList.remove("active"));
                                    this.classList.add("active");
                                });
                            });
                            
                            // ==========================================
                            // تفويض الأحداث لقائمة المهام
                            // ==========================================
                            document.getElementById("taskList")
                                .addEventListener("click", function(e) {
                                    // closest: البحث عن أقرب بطاقة مهمة
                                    const taskCard = e.target.closest(".task-card");
                                    if (!taskCard) return;
                                    
                                    const taskId = parseInt(taskCard.dataset.id);
                                    
                                    // زر إكمال المهمة
                                    if (e.target.classList.contains("complete-btn")) {
                                        taskManager.updateTask(taskId, { status: "completed" });
                                        renderTasks(taskManager.getAllTasks());
                                        updateStats();
                                    }
                                    
                                    // زر حذف المهمة
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
        
        // ============================================================
        // الدرس السابع: التخزين المحلي (LocalStorage)
        // ============================================================
        {
            id: '4-7',
            title: 'التخزين المحلي (LocalStorage) - حفظ البيانات',
            content: `
                <h3>LocalStorage - حفظ البيانات في المتصفح</h3>
                <p>LocalStorage يسمح بحفظ البيانات في متصفح المستخدم بشكل دائم حتى بعد إغلاق المتصفح.</p>
                
                <div class="code-block">
                    // ==========================================
                    // أساسيات LocalStorage
                    // ==========================================
                    
                    // setItem: حفظ بيانات
                    localStorage.setItem("username", "أحمد");
                    localStorage.setItem("age", "25");
                    
                    // getItem: استرجاع بيانات
                    const username = localStorage.getItem("username");
                    const age = localStorage.getItem("age");
                    console.log(\`الاسم: \${username}, العمر: \${age}\`);
                    
                    // removeItem: حذف بيانات
                    localStorage.removeItem("age");
                    
                    // clear: حذف كل البيانات
                    localStorage.clear();
                </div>
                
                <h4>تخزين الكائنات والمصفوفات</h4>
                <div class="code-block">
                    // ==========================================
                    // تخزين كائن
                    // ==========================================
                    const user = {
                        name: "سارة",
                        email: "sara@email.com",
                        preferences: {
                            theme: "dark",
                            fontSize: "large"
                        }
                    };
                    
                    // JSON.stringify: تحويل الكائن إلى نص
                    localStorage.setItem("user", JSON.stringify(user));
                    
                    // JSON.parse: تحويل النص إلى كائن
                    const storedUser = JSON.parse(localStorage.getItem("user"));
                    console.log(storedUser.name);  // "سارة"
                    console.log(storedUser.preferences.theme);  // "dark"

                    // ==========================================
                    // تخزين مصفوفة
                    // ==========================================
                    const tasks = ["مهمة 1", "مهمة 2", "مهمة 3"];
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                    
                    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
                    console.log(storedTasks[0]);  // "مهمة 1"
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // حفظ تفضيلات المستخدم
                        // ==========================================
                        function savePreferences(prefs) {
                            localStorage.setItem("preferences", JSON.stringify(prefs));
                        }
                        
                        function loadPreferences() {
                            const stored = localStorage.getItem("preferences");
                            if (stored) {
                                return JSON.parse(stored);
                            }
                            return null;  // لا توجد تفضيلات محفوظة
                        }

                        // ==========================================
                        // حفظ المهام تلقائياً
                        // ==========================================
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

                        // ==========================================
                        // حفظ حالة التطبيق بالكامل
                        // ==========================================
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

                        // ==========================================
                        // تصدير واستيراد المهام
                        // ==========================================
                        function exportTasks() {
                            // تحويل المهام إلى JSON
                            const data = JSON.stringify(taskManager.tasks, null, 2);
                            
                            // إنشاء ملف للتحميل
                            const blob = new Blob([data], { type: "application/json" });
                            const url = URL.createObjectURL(blob);
                            
                            // إنشاء رابط تحميل
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = "tasks_backup.json";
                            a.click();
                            
                            URL.revokeObjectURL(url);  // تحرير الذاكرة
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
        
        // ============================================================
        // الدرس الثامن: Fetch API و Async/Await
        // ============================================================
        {
            id: '4-8',
            title: 'Fetch API و Async/Await - جلب البيانات',
            content: `
                <h3>Fetch API و Async/Await - التواصل مع الخوادم</h3>
                <p>Fetch API يسمح لجلب البيانات من الخوادم بشكل غير متزامن (Asynchronous).</p>
                
                <div class="code-block">
                    // ==========================================
                    // fetch مع Promise
                    // ==========================================
                    fetch('https://api.example.com/users')
                        .then(response => response.json())  // تحويل الاستجابة إلى JSON
                        .then(data => {
                            console.log(data);  // البيانات المستلمة
                        })
                        .catch(error => {
                            console.log('خطأ:', error);  // التعامل مع الخطأ
                        });
                </div>
                
                <h4>Async/Await - الطريقة الحديثة</h4>
                <div class="code-block">
                    // ==========================================
                    // async function مع await
                    // ==========================================
                    
                    // async: الكلمة المفتاحية للدوال غير المتزامنة
                    async function getUsers() {
                        try {
                            // await: انتظار اكتمال الـ fetch
                            const response = await fetch('https://jsonplaceholder.typicode.com/users');
                            
                            // التحقق من نجاح الطلب
                            if (!response.ok) {
                                throw new Error(\`HTTP خطأ! الحالة: \${response.status}\`);
                            }
                            
                            // تحويل الاستجابة إلى JSON
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
                    // ==========================================
                    // إرسال بيانات باستخدام POST
                    // ==========================================
                    async function createUser(userData) {
                        try {
                            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                                method: 'POST',  // طريقة الإرسال
                                headers: {
                                    'Content-Type': 'application/json'  // نوع البيانات
                                },
                                body: JSON.stringify(userData)  // تحويل البيانات إلى JSON
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
                        // ==========================================
                        // مزامنة المهام مع الخادم
                        // ==========================================
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
                        
                        // ==========================================
                        // دمج المهام
                        // ==========================================
                        function mergeTasks(localTasks, serverTasks) {
                            // نسخ المهام المحلية
                            const allTasks = [...localTasks];
                            
                            // إضافة المهام من الخادم التي لا توجد محلياً
                            serverTasks.forEach(serverTask => {
                                const exists = allTasks.some(t => t.id === serverTask.id);
                                if (!exists) {
                                    allTasks.push(serverTask);
                                }
                            });
                            
                            return allTasks;
                        }
                        
                        // ==========================================
                        // حفظ المهام على الخادم
                        // ==========================================
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
                        
                        // ==========================================
                        // جلب اقتباسات تحفيزية
                        // ==========================================
                        async function getMotivationalQuote() {
                            try {
                                const response = await fetch('https://api.quotable.io/random');
                                const data = await response.json();
                                
                                const quoteDisplay = document.getElementById("quoteDisplay");
                                quoteDisplay.textContent = \`"\${data.content}" - \${data.author}\`;
                                
                            } catch (error) {
                                document.getElementById("quoteDisplay")
                                    .textContent = "💪 استمر في العمل، أنت تبني شيئاً عظيماً!";
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
                        <li>استخدم <code>.json()</code> لتحويل الاستجابة إلى كائن</li>
                        <li>استخدم <code>Promise.all</code> للطلبات المتعددة المتوازية</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس التاسع: Web Speech API - القراءة الصوتية
        // ============================================================
        {
            id: '4-9',
            title: 'Web Speech API - القراءة الصوتية',
            content: `
                <h3>Web Speech API - تحويل النص إلى كلام</h3>
                <p>Web Speech API يسمح للمتصفح بقراءة النصوص بصوت مسموع، مما يحسن إمكانية الوصول.</p>
                
                <div class="code-block">
                    // ==========================================
                    // التحقق من دعم المتصفح
                    // ==========================================
                    if ('speechSynthesis' in window) {
                        console.log("المتصفح يدعم القراءة الصوتية");
                    } else {
                        console.log("المتصفح لا يدعم القراءة الصوتية");
                    }

                    // ==========================================
                    // إنشاء كائن النطق
                    // ==========================================
                    function speak(text, lang = 'ar-SA', rate = 1, pitch = 1) {
                        // SpeechSynthesisUtterance: كائن النطق
                        const utterance = new SpeechSynthesisUtterance(text);
                        
                        utterance.lang = lang;    // اللغة (ar-SA للعربية)
                        utterance.rate = rate;    // سرعة القراءة (0.1 - 10)
                        utterance.pitch = pitch;  // طبقة الصوت (0 - 2)
                        utterance.volume = 1;     // مستوى الصوت (0 - 1)
                        
                        // ==========================================
                        // أحداث النطق
                        // ==========================================
                        utterance.addEventListener('start', () => {
                            console.log('بدء القراءة');
                        });
                        
                        utterance.addEventListener('end', () => {
                            console.log('انتهت القراءة');
                        });
                        
                        utterance.addEventListener('error', (event) => {
                            console.error('خطأ في القراءة:', event);
                        });
                        
                        // تشغيل القراءة
                        window.speechSynthesis.speak(utterance);
                    }
                    
                    // استخدام الدالة
                    speak("مرحباً في أكاديمية الكومندا");
                </div>
                
                <h4>التحكم في القراءة (إيقاف، توقف، استئناف)</h4>
                <div class="code-block">
                    // ==========================================
                    // إيقاف القراءة
                    // ==========================================
                    function stopSpeaking() {
                        if (window.speechSynthesis.speaking) {
                            window.speechSynthesis.cancel();  // إلغاء القراءة
                            console.log('تم إيقاف القراءة');
                        }
                    }

                    // ==========================================
                    // إيقاف مؤقت
                    // ==========================================
                    function pauseSpeaking() {
                        if (window.speechSynthesis.speaking) {
                            window.speechSynthesis.pause();  // إيقاف مؤقت
                            console.log('تم إيقاف القراءة مؤقتاً');
                        }
                    }

                    // ==========================================
                    // استئناف القراءة
                    // ==========================================
                    function resumeSpeaking() {
                        if (window.speechSynthesis.paused) {
                            window.speechSynthesis.resume();  // استئناف
                            console.log('تم استئناف القراءة');
                        }
                    }
                </div>
                
                <h4>الحصول على الأصوات المتاحة</h4>
                <div class="code-block">
                    // ==========================================
                    // الحصول على قائمة الأصوات
                    // ==========================================
                    function getAvailableVoices() {
                        const voices = window.speechSynthesis.getVoices();
                        console.log('الأصوات المتاحة:');
                        voices.forEach((voice, index) => {
                            console.log(\`\${index + 1}. \${voice.name} (\${voice.lang})\`);
                        });
                        return voices;
                    }

                    // ==========================================
                    // اختيار صوت معين
                    // ==========================================
                    function speakWithVoice(text, voiceName) {
                        const voices = window.speechSynthesis.getVoices();
                        const selectedVoice = voices.find(voice => voice.name === voiceName);
                        
                        const utterance = new SpeechSynthesisUtterance(text);
                        if (selectedVoice) {
                            utterance.voice = selectedVoice;  // تعيين الصوت
                        }
                        window.speechSynthesis.speak(utterance);
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // قراءة المهام بصوت عالٍ
                        // ==========================================
                        function readTasksAloud() {
                            const tasks = taskManager.getAllTasks();
                            
                            if (tasks.length === 0) {
                                speak("لا توجد مهام لعرضها");
                                return;
                            }
                            
                            // بناء النص للقراءة
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
                            
                            // إضافة المهام الأكثر أهمية
                            text += "المهام الأكثر أهمية: ";
                            const highPriority = tasks.filter(t => t.priority === "high");
                            highPriority.forEach((task, index) => {
                                text += (index + 1) + ". " + task.title + ". ";
                            });
                            
                            speak(text);  // قراءة النص
                        }

                        // ==========================================
                        // قراءة تفاصيل مهمة محددة
                        // ==========================================
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

                        // ==========================================
                        // قراءة الإحصائيات
                        // ==========================================
                        function readStats() {
                            const stats = taskManager.getStats();
                            
                            let text = "إحصائيات المهام: ";
                            text += "إجمالي المهام: " + stats.total + ". ";
                            text += "المهام المكتملة: " + stats.completed + ". ";
                            text += "المهام المعلقة: " + stats.pending + ". ";
                            text += "المهام قيد التنفيذ: " + stats.progress + ". ";
                            text += "نسبة الإنجاز: " + stats.completionRate + " بالمائة. ";
                            
                            // إضافة رسالة تحفيزية
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
        
        // ============================================================
        // الدرس العاشر: Drag & Drop - السحب والإفلات
        // ============================================================
        {
            id: '4-10',
            title: 'Drag & Drop - السحب والإفلات',
            content: `
                <h3>السحب والإفلات (Drag & Drop) - تفاعل متقدم</h3>
                <p>تقنية السحب والإفلات تسمح للمستخدمين بنقل العناصر عن طريق سحبها وإفلاتها في مكان آخر.</p>
                
                <div class="code-block">
                    // ==========================================
                    // جعل العنصر قابل للسحب
                    // ==========================================
                    // في HTML: draggable="true"
                    // <div draggable="true" id="dragElement">اسحبني</div>

                    // ==========================================
                    // أحداث السحب
                    // ==========================================
                    const dragElement = document.getElementById("dragElement");
                    const dropZone = document.getElementById("dropZone");

                    // ==========================================
                    // أحداث العنصر المسحوب
                    // ==========================================
                    dragElement.addEventListener("dragstart", (e) => {
                        // dataTransfer: لنقل البيانات بين الأحداث
                        e.dataTransfer.setData("text/plain", e.target.id);
                        e.target.style.opacity = "0.5";  // جعل العنصر شفافاً
                    });

                    dragElement.addEventListener("dragend", (e) => {
                        e.target.style.opacity = "1";  // إعادة الشفافية
                    });

                    // ==========================================
                    // أحداث منطقة الإفلات
                    // ==========================================
                    dropZone.addEventListener("dragover", (e) => {
                        e.preventDefault();  // ضروري للسماح بالإفلات
                        e.target.style.background = "#facc15";  // تغيير اللون
                    });

                    dropZone.addEventListener("dragleave", (e) => {
                        e.target.style.background = "";  // إعادة اللون
                    });

                    dropZone.addEventListener("drop", (e) => {
                        e.preventDefault();
                        
                        // استرجاع البيانات المرسلة
                        const id = e.dataTransfer.getData("text/plain");
                        const draggedElement = document.getElementById(id);
                        
                        // إضافة العنصر إلى منطقة الإفلات
                        e.target.appendChild(draggedElement);
                        e.target.style.background = "";
                    });
                </div>
                
                <div class="example-box">
                    <strong>📝 تطبيق في مشروع إدارة المهام:</strong>
                    <div class="code-block">
                        // ==========================================
                        // ترتيب المهام بالسحب والإفلات
                        // ==========================================
                        let draggedTaskId = null;  // تخزين id المهمة المسحوبة
                        
                        // ==========================================
                        // جعل المهام قابلة للسحب
                        // ==========================================
                        function makeTasksDraggable() {
                            document.querySelectorAll(".task-card").forEach(card => {
                                card.setAttribute("draggable", "true");  // جعلها قابلة للسحب
                                
                                // حدث بدء السحب
                                card.addEventListener("dragstart", function(e) {
                                    // تخزين id المهمة
                                    draggedTaskId = parseInt(this.dataset.id);
                                    e.dataTransfer.setData("text/plain", this.dataset.id);
                                    this.classList.add("dragging");
                                });
                                
                                // حدث نهاية السحب
                                card.addEventListener("dragend", function(e) {
                                    this.classList.remove("dragging");
                                });
                            });
                        }
                        
                        // ==========================================
                        // إعداد مناطق الإفلات
                        // ==========================================
                        function setupDropZones() {
                            const statusColumns = document.querySelectorAll(".task-column");
                            
                            statusColumns.forEach(column => {
                                const status = column.dataset.status;  // الحالة (pending, progress, completed)
                                
                                // عند مرور العنصر فوق المنطقة
                                column.addEventListener("dragover", function(e) {
                                    e.preventDefault();
                                    this.classList.add("drag-over");
                                });
                                
                                // عند خروج العنصر من المنطقة
                                column.addEventListener("dragleave", function(e) {
                                    this.classList.remove("drag-over");
                                });
                                
                                // عند إفلات العنصر
                                column.addEventListener("drop", function(e) {
                                    e.preventDefault();
                                    this.classList.remove("drag-over");
                                    
                                    if (draggedTaskId !== null) {
                                        // تحديث حالة المهمة حسب العمود
                                        taskManager.updateTask(draggedTaskId, { status: status });
                                        
                                        // إعادة عرض المهام
                                        renderTasks(taskManager.getAllTasks());
                                        updateStats();
                                        
                                        // إعادة تفعيل السحب
                                        makeTasksDraggable();
                                        setupDropZones();
                                        
                                        draggedTaskId = null;
                                    }
                                });
                            });
                        }
                        
                        // ==========================================
                        // إعادة ترتيب المهام بالسحب
                        // ==========================================
                        function reorderTasks(draggedId, targetId) {
                            const tasks = taskManager.tasks;
                            
                            // البحث عن مواقع العناصر
                            const draggedIndex = tasks.findIndex(t => t.id === draggedId);
                            const targetIndex = tasks.findIndex(t => t.id === targetId);
                            
                            if (draggedIndex === -1 || targetIndex === -1) return;
                            
                            // إزالة العنصر من مكانه
                            const [draggedTask] = tasks.splice(draggedIndex, 1);
                            
                            // إضافة العنصر في المكان الجديد
                            tasks.splice(targetIndex, 0, draggedTask);
                            
                            // حفظ التغييرات
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
