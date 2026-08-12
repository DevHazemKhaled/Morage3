const chapter4 = {
    id: 'ch4',
    title: 'JavaScript المتقدم - البرمجة والتفاعل',
    description: 'تعلم JavaScript بشكل احترافي مع DOM، الأحداث، الـ API، والتخزين المحلي',
    lessons: [
        {
            id: '4-1',
            title: 'المتغيرات وأنواع البيانات (let, const, var)',
            content: `
                <h3>المتغيرات في JavaScript - أساس البرمجة</h3>
                <p>المتغيرات هي حاويات تخزن البيانات. تعلم الفرق بين let و const و var.</p>
                
                <h4>أنواع المتغيرات</h4>
                <div class="code-block">
                    <span class="comment">// var - الطريقة القديمة (لا تستخدمها في الكود الحديث)</span>
                    <span class="keyword">var</span> name = <span class="string">"أحمد"</span>;
                    <span class="keyword">var</span> age = 25;
                    
                    <span class="comment">// let - متغير يمكن تغيير قيمته</span>
                    <span class="keyword">let</span> userName = <span class="string">"سارة"</span>;
                    userName = <span class="string">"سارة محمد"</span>; <span class="comment">// مسموح</span>
                    
                    <span class="comment">// const - ثابت لا يمكن تغيير قيمته</span>
                    <span class="keyword">const</span> PI = 3.14159;
                    <span class="comment">// PI = 3.14; // خطأ! لا يمكن تغيير const</span>
                    
                    <span class="comment">// الفرق في النطاق (Scope)</span>
                    <span class="keyword">if</span> (<span class="keyword">true</span>) {
                        <span class="keyword">var</span> oldVar = <span class="string">"مرئي خارج النطاق"</span>;
                        <span class="keyword">let</span> newLet = <span class="string">"غير مرئي خارج النطاق"</span>;
                        <span class="keyword">const</span> newConst = <span class="string">"أيضاً غير مرئي"</span>;
                    }
                    <span class="function">console</span>.<span class="function">log</span>(oldVar); <span class="comment">// يعمل</span>
                    <span class="comment">// console.log(newLet); // خطأ! غير معرف</span>
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
                    <span class="comment">// أمثلة على أنواع البيانات</span>
                    <span class="keyword">let</span> studentName = <span class="string">"محمد علي"</span>; <span class="comment">// String</span>
                    <span class="keyword">let</span> studentAge = 22; <span class="comment">// Number</span>
                    <span class="keyword">let</span> isActive = <span class="keyword">true</span>; <span class="comment">// Boolean</span>
                    <span class="keyword">let</span> address; <span class="comment">// Undefined</span>
                    <span class="keyword">let</span> phone = <span class="keyword">null</span>; <span class="comment">// Null</span>
                    
                    <span class="comment">// معرفة نوع المتغير</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="keyword">typeof</span> studentName); <span class="comment">// "string"</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="keyword">typeof</span> studentAge); <span class="comment">// "number"</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="keyword">typeof</span> isActive); <span class="comment">// "boolean"</span>
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي:</strong>
                    <div class="code-block">
                        <span class="comment">// تطبيق بسيط لإدارة بيانات طالب</span>
                        <span class="keyword">const</span> student = {
                            <span class="property">name</span>: <span class="string">"أحمد"</span>,
                            <span class="property">age</span>: 20,
                            <span class="property">courses</span>: [<span class="string">"HTML"</span>, <span class="string">"CSS"</span>, <span class="string">"JavaScript"</span>],
                            <span class="property">isGraduated</span>: <span class="keyword">false</span>
                        };
                        
                        <span class="comment">// عرض معلومات الطالب</span>
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الطالب: \${student.name}\`</span>);
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الدورات: \${student.courses.join(', ')}\`</span>);
                    </div>
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
                    <span class="comment">// هيكل if الأساسي</span>
                    <span class="keyword">let</span> age = 18;
                    
                    <span class="keyword">if</span> (age >= 18) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"أنت بالغ"</span>);
                    } <span class="keyword">else</span> {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"أنت قاصر"</span>);
                    }
                    
                    <span class="comment">// if, else if, else</span>
                    <span class="keyword">let</span> score = 85;
                    
                    <span class="keyword">if</span> (score >= 90) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"ممتاز"</span>);
                    } <span class="keyword">else if</span> (score >= 80) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"جيد جداً"</span>);
                    } <span class="keyword">else if</span> (score >= 70) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"جيد"</span>);
                    } <span class="keyword">else</span> {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"تحتاج للمراجعة"</span>);
                    }
                </div>
                
                <h4>switch - بديل متقدم</h4>
                <div class="code-block">
                    <span class="keyword">let</span> day = <span class="string">"الأحد"</span>;
                    
                    <span class="keyword">switch</span> (day) {
                        <span class="keyword">case</span> <span class="string">"الأحد"</span>:
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">"أول أيام الأسبوع"</span>);
                            <span class="keyword">break</span>;
                        <span class="keyword">case</span> <span class="string">"الجمعة"</span>:
                        <span class="keyword">case</span> <span class="string">"السبت"</span>:
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">"عطلة نهاية الأسبوع"</span>);
                            <span class="keyword">break</span>;
                        <span class="keyword">default</span>:
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">"يوم عمل"</span>);
                    }
                </div>
                
                <h4>العوامل المنطقية والشرطية</h4>
                <div class="code-block">
                    <span class="comment">// العوامل المنطقية</span>
                    <span class="keyword">let</span> age = 25;
                    <span class="keyword">let</span> hasLicense = <span class="keyword">true</span>;
                    
                    <span class="comment">// AND (&&) - يجب أن يكون الكل true</span>
                    <span class="keyword">if</span> (age >= 18 && hasLicense) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"يمكنك القيادة"</span>);
                    }
                    
                    <span class="comment">// OR (||) - يكفي شرط واحد true</span>
                    <span class="keyword">let</span> isStudent = <span class="keyword">true</span>;
                    <span class="keyword">let</span> isTeacher = <span class="keyword">false</span>;
                    <span class="keyword">if</span> (isStudent || isTeacher) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"أنت عضو في المؤسسة التعليمية"</span>);
                    }
                    
                    <span class="comment">// NOT (!) - عكس القيمة</span>
                    <span class="keyword">let</span> isLoggedIn = <span class="keyword">false</span>;
                    <span class="keyword">if</span> (!isLoggedIn) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"الرجاء تسجيل الدخول"</span>);
                    }
                    
                    <span class="comment">// العامل الثلاثي (Ternary) - اختصار للـ if/else</span>
                    <span class="keyword">let</span> message = age >= 18 ? <span class="string">"بالغ"</span> : <span class="string">"قاصر"</span>;
                    <span class="function">console</span>.<span class="function">log</span>(message);
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: نظام تسجيل الدخول</strong>
                    <div class="code-block">
                        <span class="keyword">const</span> username = <span class="string">"admin"</span>;
                        <span class="keyword">const</span> password = <span class="string">"12345"</span>;
                        
                        <span class="keyword">function</span> <span class="function">login</span>(user, pass) {
                            <span class="keyword">if</span> (user === <span class="string">"admin"</span> && pass === <span class="string">"12345"</span>) {
                                <span class="keyword">return</span> <span class="string">"✅ تسجيل دخول ناجح"</span>;
                            } <span class="keyword">else if</span> (user === <span class="string">"admin"</span>) {
                                <span class="keyword">return</span> <span class="string">"❌ كلمة مرور خاطئة"</span>;
                            } <span class="keyword">else if</span> (pass === <span class="string">"12345"</span>) {
                                <span class="keyword">return</span> <span class="string">"❌ اسم مستخدم خاطئ"</span>;
                            } <span class="keyword">else</span> {
                                <span class="keyword">return</span> <span class="string">"❌ اسم المستخدم وكلمة المرور خاطئان"</span>;
                            }
                        }
                        
                        <span class="function">console</span>.<span class="function">log</span>(<span class="function">login</span>(<span class="string">"admin"</span>, <span class="string">"12345"</span>)); <span class="comment">// ✅ تسجيل دخول ناجح</span>
                        <span class="function">console</span>.<span class="function">log</span>(<span class="function">login</span>(<span class="string">"user"</span>, <span class="string">"12345"</span>)); <span class="comment">// ❌ اسم مستخدم خاطئ</span>
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
                    <span class="comment">// for - الحلقة الأكثر استخداماً</span>
                    <span class="keyword">for</span> (<span class="keyword">let</span> i = 0; i < 5; i++) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الرقم: \${i}\`</span>);
                    }
                    
                    <span class="comment">// while - تنفذ طالما الشرط true</span>
                    <span class="keyword">let</span> count = 0;
                    <span class="keyword">while</span> (count < 3) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`العد: \${count}\`</span>);
                        count++;
                    }
                    
                    <span class="comment">// do...while - تنفذ مرة واحدة على الأقل</span>
                    <span class="keyword">let</span> num = 5;
                    <span class="keyword">do</span> {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الرقم: \${num}\`</span>);
                        num++;
                    } <span class="keyword">while</span> (num < 3);
                </div>
                
                <h4>المصفوفات (Arrays) - تخزين قوائم البيانات</h4>
                <div class="code-block">
                    <span class="comment">// إنشاء مصفوفة</span>
                    <span class="keyword">let</span> fruits = [<span class="string">"تفاح"</span>, <span class="string">"موز"</span>, <span class="string">"برتقال"</span>];
                    <span class="keyword">let</span> numbers = [1, 2, 3, 4, 5];
                    <span class="keyword">let</span> mixed = [<span class="string">"نص"</span>, 42, <span class="keyword">true</span>, {<span class="property">name</span>: <span class="string">"أحمد"</span>}];
                    
                    <span class="comment">// الوصول إلى عناصر المصفوفة</span>
                    <span class="function">console</span>.<span class="function">log</span>(fruits[0]); <span class="comment">// "تفاح"</span>
                    <span class="function">console</span>.<span class="function">log</span>(fruits.length); <span class="comment">// 3</span>
                    
                    <span class="comment">// إضافة وحذف عناصر</span>
                    fruits.<span class="function">push</span>(<span class="string">"عنب"</span>); <span class="comment">// إضافة في النهاية</span>
                    fruits.<span class="function">pop</span>(); <span class="comment">// حذف من النهاية</span>
                    fruits.<span class="function">unshift</span>(<span class="string">"فراولة"</span>); <span class="comment">// إضافة في البداية</span>
                    fruits.<span class="function">shift</span>(); <span class="comment">// حذف من البداية</span>
                    
                    <span class="comment">// التكرار على المصفوفة</span>
                    <span class="keyword">for</span> (<span class="keyword">let</span> i = 0; i < fruits.length; i++) {
                        <span class="function">console</span>.<span class="function">log</span>(fruits[i]);
                    }
                    
                    <span class="comment">// forEach - طريقة حديثة للتكرار</span>
                    fruits.<span class="function">forEach</span>(<span class="keyword">function</span>(fruit) {
                        <span class="function">console</span>.<span class="function">log</span>(fruit);
                    });
                    
                    <span class="comment">// map - تحويل المصفوفة</span>
                    <span class="keyword">let</span> doubled = numbers.<span class="function">map</span>(n => n * 2);
                    <span class="function">console</span>.<span class="function">log</span>(doubled); <span class="comment">// [2, 4, 6, 8, 10]</span>
                </div>
                
                <h4>الكائنات (Objects) - تخزين بيانات منظمة</h4>
                <div class="code-block">
                    <span class="comment">// إنشاء كائن</span>
                    <span class="keyword">let</span> person = {
                        <span class="property">name</span>: <span class="string">"سارة"</span>,
                        <span class="property">age</span>: 25,
                        <span class="property">city</span>: <span class="string">"الرياض"</span>,
                        <span class="property">skills</span>: [<span class="string">"HTML"</span>, <span class="string">"CSS"</span>, <span class="string">"JavaScript"</span>],
                        <span class="property">isStudent</span>: <span class="keyword">false</span>
                    };
                    
                    <span class="comment">// الوصول إلى خصائص الكائن</span>
                    <span class="function">console</span>.<span class="function">log</span>(person.name); <span class="comment">// "سارة"</span>
                    <span class="function">console</span>.<span class="function">log</span>(person[<span class="string">"age"</span>]); <span class="comment">// 25</span>
                    
                    <span class="comment">// تعديل الخصائص</span>
                    person.age = 26;
                    person[<span class="string">"city"</span>] = <span class="string">"جدة"</span>;
                    
                    <span class="comment">// إضافة خصائص جديدة</span>
                    person.email = <span class="string">"sara@email.com"</span>;
                    
                    <span class="comment">// التكرار على خصائص الكائن</span>
                    <span class="keyword">for</span> (<span class="keyword">let</span> key <span class="keyword">in</span> person) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`\${key}: \${person[key]}\`</span>);
                    }
                    
                    <span class="comment">// Object.keys, Object.values, Object.entries</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="keyword">Object</span>.<span class="function">keys</span>(person)); <span class="comment">// ["name", "age", ...]</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="keyword">Object</span>.<span class="function">values</span>(person)); <span class="comment">// ["سارة", 26, ...]</span>
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: نظام إدارة الطلاب</strong>
                    <div class="code-block">
                        <span class="comment">// قائمة الطلاب</span>
                        <span class="keyword">let</span> students = [
                            { <span class="property">id</span>: 1, <span class="property">name</span>: <span class="string">"أحمد"</span>, <span class="property">grade</span>: 85 },
                            { <span class="property">id</span>: 2, <span class="property">name</span>: <span class="string">"سارة"</span>, <span class="property">grade</span>: 92 },
                            { <span class="property">id</span>: 3, <span class="property">name</span>: <span class="string">"محمد"</span>, <span class="property">grade</span>: 78 }
                        ];
                        
                        <span class="comment">// حساب متوسط الدرجات</span>
                        <span class="keyword">let</span> total = 0;
                        students.<span class="function">forEach</span>(student => {
                            total += student.grade;
                        });
                        <span class="keyword">let</span> average = total / students.length;
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`المتوسط: \${average}\`</span>);
                        
                        <span class="comment">// البحث عن طالب</span>
                        <span class="keyword">function</span> <span class="function">findStudent</span>(id) {
                            <span class="keyword">return</span> students.<span class="function">find</span>(student => student.id === id);
                        }
                        <span class="function">console</span>.<span class="function">log</span>(<span class="function">findStudent</span>(2)); <span class="comment">// {id: 2, name: "سارة", grade: 92}</span>
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
                    <span class="comment">// 1. الدوال التقليدية (Function Declaration)</span>
                    <span class="keyword">function</span> <span class="function">greet</span>(name) {
                        <span class="keyword">return</span> <span class="string">\`مرحباً \${name}!\`</span>;
                    }
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">greet</span>(<span class="string">"أحمد"</span>));
                    
                    <span class="comment">// 2. الدوال السهمية (Arrow Functions) - ES6</span>
                    <span class="keyword">const</span> <span class="function">greetArrow</span> = (name) => {
                        <span class="keyword">return</span> <span class="string">\`مرحباً \${name}!\`</span>;
                    };
                    
                    <span class="comment">// اختصار إذا كان هناك parameter واحد و return بسيط</span>
                    <span class="keyword">const</span> <span class="function">double</span> = x => x * 2;
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">double</span>(5)); <span class="comment">// 10</span>
                    
                    <span class="comment">// 3. تعبير الدوال (Function Expression)</span>
                    <span class="keyword">const</span> <span class="function">add</span> = <span class="keyword">function</span>(a, b) {
                        <span class="keyword">return</span> a + b;
                    };
                </div>
                
                <h4>معاملات الدوال والقيم الافتراضية</h4>
                <div class="code-block">
                    <span class="comment">// معاملات افتراضية (Default Parameters)</span>
                    <span class="keyword">function</span> <span class="function">createUser</span>(name, age = 18, city = <span class="string">"غير محدد"</span>) {
                        <span class="keyword">return</span> { name, age, city };
                    }
                    
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">createUser</span>(<span class="string">"سارة"</span>));
                    <span class="comment">// {name: "سارة", age: 18, city: "غير محدد"}</span>
                    
                    <span class="comment">// Rest Parameters (...args) - تجميع المعاملات في مصفوفة</span>
                    <span class="keyword">function</span> <span class="function">sum</span>(...numbers) {
                        <span class="keyword">return</span> numbers.<span class="function">reduce</span>((total, num) => total + num, 0);
                    }
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">sum</span>(1, 2, 3, 4, 5)); <span class="comment">// 15</span>
                </div>
                
                <h4>دوال متقدمة - closure, callback, higher-order</h4>
                <div class="code-block">
                    <span class="comment">// 1. Callback - دالة تُمرر كمعامل لدالة أخرى</span>
                    <span class="keyword">function</span> <span class="function">processUser</span>(name, callback) {
                        <span class="keyword">const</span> processed = <span class="string">\`مرحباً \${name}\`</span>;
                        <span class="function">callback</span>(processed);
                    }
                    
                    <span class="function">processUser</span>(<span class="string">"أحمد"</span>, (message) => {
                        <span class="function">console</span>.<span class="function">log</span>(message);
                    });
                    
                    <span class="comment">// 2. Higher-Order Function - دالة ترجع دالة</span>
                    <span class="keyword">function</span> <span class="function">multiplyBy</span>(factor) {
                        <span class="keyword">return</span> <span class="keyword">function</span>(number) {
                            <span class="keyword">return</span> number * factor;
                        };
                    }
                    
                    <span class="keyword">const</span> <span class="function">doubleNumber</span> = <span class="function">multiplyBy</span>(2);
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">doubleNumber</span>(5)); <span class="comment">// 10</span>
                    
                    <span class="comment">// 3. Closure - دالة تتذكر بيئتها</span>
                    <span class="keyword">function</span> <span class="function">counter</span>() {
                        <span class="keyword">let</span> count = 0;
                        <span class="keyword">return</span> <span class="keyword">function</span>() {
                            count++;
                            <span class="keyword">return</span> count;
                        };
                    }
                    
                    <span class="keyword">const</span> myCounter = <span class="function">counter</span>();
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">myCounter</span>()); <span class="comment">// 1</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">myCounter</span>()); <span class="comment">// 2</span>
                    <span class="function">console</span>.<span class="function">log</span>(<span class="function">myCounter</span>()); <span class="comment">// 3</span>
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: نظام معالجة الطلبات</strong>
                    <div class="code-block">
                        <span class="comment">// نظام معالجة الطلبات مع دوال</span>
                        <span class="keyword">const</span> orders = [
                            { <span class="property">id</span>: 1, <span class="property">product</span>: <span class="string">"لابتوب"</span>, <span class="property">price</span>: 1200, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 2, <span class="property">product</span>: <span class="string">"هاتف"</span>, <span class="property">price</span>: 800, <span class="property">status</span>: <span class="string">"shipped"</span> }
                        ];
                        
                        <span class="comment">// دالة لتصفية الطلبات</span>
                        <span class="keyword">const</span> <span class="function">filterOrders</span> = (status) => {
                            <span class="keyword">return</span> orders.<span class="function">filter</span>(order => order.status === status);
                        };
                        
                        <span class="comment">// دالة لحساب المجموع</span>
                        <span class="keyword">const</span> <span class="function">calculateTotal</span> = () => {
                            <span class="keyword">return</span> orders.<span class="function">reduce</span>((total, order) => total + order.price, 0);
                        };
                        
                        <span class="function">console</span>.<span class="function">log</span>(<span class="function">filterOrders</span>(<span class="string">"pending"</span>));
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`المجموع: \${<span class="function">calculateTotal</span>()}\`</span>);
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
                    <span class="comment">// اختيار عنصر بواسطة ID</span>
                    <span class="keyword">const</span> header = document.<span class="function">getElementById</span>(<span class="string">"header"</span>);
                    
                    <span class="comment">// اختيار عناصر بواسطة Class</span>
                    <span class="keyword">const</span> cards = document.<span class="function">getElementsByClassName</span>(<span class="string">"card"</span>);
                    
                    <span class="comment">// اختيار عناصر بواسطة Tag</span>
                    <span class="keyword">const</span> paragraphs = document.<span class="function">getElementsByTagName</span>(<span class="string">"p"</span>);
                    
                    <span class="comment">// اختيار عنصر بواسطة CSS Selector (الأحدث والأفضل)</span>
                    <span class="keyword">const</span> mainContent = document.<span class="function">querySelector</span>(<span class="string">".main-content"</span>);
                    <span class="keyword">const</span> allButtons = document.<span class="function">querySelectorAll</span>(<span class="string">"button.primary"</span>);
                </div>
                
                <h4>تعديل المحتوى والخصائص</h4>
                <div class="code-block">
                    <span class="comment">// تغيير النص</span>
                    <span class="keyword">const</span> title = document.<span class="function">querySelector</span>(<span class="string">"h1"</span>);
                    title.textContent = <span class="string">"مرحباً في أكاديمية الكومندا"</span>;
                    title.innerHTML = <span class="string">"<span style='color: gold;'>مرحباً</span> في الأكاديمية"</span>;
                    
                    <span class="comment">// تغيير السمات (Attributes)</span>
                    <span class="keyword">const</span> link = document.<span class="function">querySelector</span>(<span class="string">"a"</span>);
                    link.<span class="function">setAttribute</span>(<span class="string">"href"</span>, <span class="string">"https://google.com"</span>);
                    link.<span class="function">setAttribute</span>(<span class="string">"target"</span>, <span class="string">"_blank"</span>);
                    
                    <span class="comment">// تغيير التنسيقات (Styles)</span>
                    <span class="keyword">const</span> box = document.<span class="function">querySelector</span>(<span class="string">".box"</span>);
                    box.style.backgroundColor = <span class="string">"#facc15"</span>;
                    box.style.padding = <span class="string">"20px"</span>;
                    box.style.borderRadius = <span class="string">"8px"</span>;
                    
                    <span class="comment">// إضافة/إزالة Classes</span>
                    box.classList.<span class="function">add</span>(<span class="string">"active"</span>);
                    box.classList.<span class="function">remove</span>(<span class="string">"inactive"</span>);
                    box.classList.<span class="function">toggle</span>(<span class="string">"highlight"</span>);
                    <span class="keyword">if</span> (box.classList.<span class="function">contains</span>(<span class="string">"active"</span>)) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"العنصر نشط"</span>);
                    }
                </div>
                
                <h4>إنشاء وحذف العناصر</h4>
                <div class="code-block">
                    <span class="comment">// إنشاء عنصر جديد</span>
                    <span class="keyword">const</span> newDiv = document.<span class="function">createElement</span>(<span class="string">"div"</span>);
                    newDiv.textContent = <span class="string">"عنصر جديد"</span>;
                    newDiv.className = <span class="string">"new-item"</span>;
                    
                    <span class="comment">// إضافة العنصر إلى الصفحة</span>
                    <span class="keyword">const</span> container = document.<span class="function">querySelector</span>(<span class="string">".container"</span>);
                    container.<span class="function">appendChild</span>(newDiv); <span class="comment">// في النهاية</span>
                    container.<span class="function">prepend</span>(newDiv); <span class="comment">// في البداية</span>
                    container.<span class="function">insertBefore</span>(newDiv, container.firstChild); <span class="comment">// قبل عنصر محدد</span>
                    
                    <span class="comment">// حذف عنصر</span>
                    <span class="keyword">const</span> oldElement = document.<span class="function">querySelector</span>(<span class="string">".old"</span>);
                    oldElement.<span class="function">remove</span>(); <span class="comment">// الطريقة الحديثة</span>
                    
                    <span class="comment">// إنشاء عناصر مع محتوى HTML</span>
                    container.innerHTML += <span class="string">'<div class="card">بطاقة جديدة</div>'</span>;
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: تطبيق إضافة مهمات</strong>
                    <div class="code-block">
                        <span class="comment">// إضافة مهمة جديدة</span>
                        <span class="keyword">const</span> addTask = () => {
                            <span class="keyword">const</span> input = document.<span class="function">querySelector</span>(<span class="string">"#taskInput"</span>);
                            <span class="keyword">const</span> taskText = input.value.<span class="function">trim</span>();
                            
                            <span class="keyword">if</span> (taskText === <span class="string">""</span>) {
                                <span class="function">alert</span>(<span class="string">"الرجاء إدخال مهمة"</span>);
                                <span class="keyword">return</span>;
                            }
                            
                            <span class="comment">// إنشاء عنصر المهمة</span>
                            <span class="keyword">const</span> li = document.<span class="function">createElement</span>(<span class="string">"li"</span>);
                            li.textContent = taskText;
                            
                            <span class="comment">// إضافة زر حذف</span>
                            <span class="keyword">const</span> deleteBtn = document.<span class="function">createElement</span>(<span class="string">"button"</span>);
                            deleteBtn.textContent = <span class="string">"✕"</span>;
                            deleteBtn.className = <span class="string">"delete-btn"</span>;
                            deleteBtn.<span class="function">addEventListener</span>(<span class="string">"click"</span>, () => {
                                li.<span class="function">remove</span>();
                            });
                            
                            li.<span class="function">appendChild</span>(deleteBtn);
                            document.<span class="function">querySelector</span>(<span class="string">"#taskList"</span>).<span class="function">appendChild</span>(li);
                            
                            <span class="comment">// مسح الحقل</span>
                            input.value = <span class="string">""</span>;
                        };
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للتعامل مع DOM:</strong>
                    <ul>
                        <li>استخدم <code>querySelector</code> و <code>querySelectorAll</code> للاختيار</li>
                        <li>خزّن العناصر في متغيرات لتجنب البحث المتكرر</li>
                        <li>استخدم <code>textContent</code> بدلاً من <code>innerHTML</code> إذا لم تحتاج HTML</li>
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
                    <span class="comment">// 1. حدث النقر</span>
                    <span class="keyword">const</span> button = document.<span class="function">querySelector</span>(<span class="string">"#myButton"</span>);
                    button.<span class="function">addEventListener</span>(<span class="string">"click"</span>, (event) => {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"تم النقر على الزر"</span>);
                        <span class="function">console</span>.<span class="function">log</span>(event.target); <span class="comment">// العنصر الذي تم النقر عليه</span>
                    });
                    
                    <span class="comment">// 2. حدث الإدخال</span>
                    <span class="keyword">const</span> input = document.<span class="function">querySelector</span>(<span class="string">"#nameInput"</span>);
                    input.<span class="function">addEventListener</span>(<span class="string">"input"</span>, (event) => {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`القيمة الحالية: \${event.target.value}\`</span>);
                    });
                    
                    <span class="comment">// 3. حدث التمرير</span>
                    window.<span class="function">addEventListener</span>(<span class="string">"scroll"</span>, () => {
                        <span class="keyword">const</span> scrollY = window.scrollY;
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`التمرير: \${scrollY}px\`</span>);
                    });
                    
                    <span class="comment">// 4. حدث تحميل الصفحة</span>
                    window.<span class="function">addEventListener</span>(<span class="string">"load"</span>, () => {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"تم تحميل الصفحة بالكامل"</span>);
                    });
                    
                    <span class="comment">// 5. منع السلوك الافتراضي</span>
                    <span class="keyword">const</span> form = document.<span class="function">querySelector</span>(<span class="string">"#myForm"</span>);
                    form.<span class="function">addEventListener</span>(<span class="string">"submit"</span>, (event) => {
                        event.<span class="function">preventDefault</span>(); <span class="comment">// منع إعادة تحميل الصفحة</span>
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"تم إرسال النموذج"</span>);
                    });
                </div>
                
                <h4>تفويض الأحداث (Event Delegation)</h4>
                <div class="code-block">
                    <span class="comment">// بدلاً من إضافة حدث لكل عنصر، نضيفه للعنصر الأب</span>
                    <span class="keyword">const</span> list = document.<span class="function">querySelector</span>(<span class="string">"#taskList"</span>);
                    list.<span class="function">addEventListener</span>(<span class="string">"click"</span>, (event) => {
                        <span class="keyword">if</span> (event.target.classList.<span class="function">contains</span>(<span class="string">"delete-btn"</span>)) {
                            <span class="keyword">const</span> taskItem = event.target.closest(<span class="string">"li"</span>);
                            taskItem.<span class="function">remove</span>();
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">"تم حذف المهمة"</span>);
                        }
                    });
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: نموذج تسجيل مع تحقق فوري</strong>
                    <div class="code-block">
                        <span class="comment">// عناصر النموذج</span>
                        <span class="keyword">const</span> usernameInput = document.<span class="function">querySelector</span>(<span class="string">"#username"</span>);
                        <span class="keyword">const</span> emailInput = document.<span class="function">querySelector</span>(<span class="string">"#email"</span>);
                        <span class="keyword">const</span> submitBtn = document.<span class="function">querySelector</span>(<span class="string">"#submitBtn"</span>);
                        <span class="keyword">const</span> statusDiv = document.<span class="function">querySelector</span>(<span class="string">"#status"</span>);
                        
                        <span class="comment">// تحقق من اسم المستخدم أثناء الكتابة</span>
                        usernameInput.<span class="function">addEventListener</span>(<span class="string">"input"</span>, () => {
                            <span class="keyword">const</span> value = usernameInput.value;
                            <span class="keyword">if</span> (value.length < 3) {
                                statusDiv.textContent = <span class="string">"❌ اسم المستخدم يجب أن يكون 3 أحرف على الأقل"</span>;
                                statusDiv.style.color = <span class="string">"red"</span>;
                            } <span class="keyword">else</span> {
                                statusDiv.textContent = <span class="string">"✅ اسم المستخدم صحيح"</span>;
                                statusDiv.style.color = <span class="string">"green"</span>;
                            }
                        });
                        
                        <span class="comment">// تحقق من البريد الإلكتروني</span>
                        emailInput.<span class="function">addEventListener</span>(<span class="string">"input"</span>, () => {
                            <span class="keyword">const</span> value = emailInput.value;
                            <span class="keyword">if</span> (!value.<span class="function">includes</span>(<span class="string">"@"</span>) || !value.<span class="function">includes</span>(<span class="string">"."</span>)) {
                                statusDiv.textContent = <span class="string">"❌ بريد إلكتروني غير صحيح"</span>;
                                statusDiv.style.color = <span class="string">"red"</span>;
                            } <span class="keyword">else</span> {
                                statusDiv.textContent = <span class="string">"✅ بريد إلكتروني صحيح"</span>;
                                statusDiv.style.color = <span class="string">"green"</span>;
                            }
                        });
                        
                        <span class="comment">// معالجة إرسال النموذج</span>
                        submitBtn.<span class="function">addEventListener</span>(<span class="string">"click"</span>, (event) => {
                            event.<span class="function">preventDefault</span>();
                            <span class="keyword">const</span> username = usernameInput.value;
                            <span class="keyword">const</span> email = emailInput.value;
                            
                            <span class="keyword">if</span> (username.length >= 3 && email.<span class="function">includes</span>(<span class="string">"@"</span>)) {
                                <span class="function">alert</span>(<span class="string">\`✅ تم تسجيل \${username} بنجاح!\`</span>);
                            } <span class="keyword">else</span> {
                                <span class="function">alert</span>(<span class="string">"❌ الرجاء تصحيح البيانات"</span>);
                            }
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
                    <span class="comment">// حفظ بيانات</span>
                    localStorage.<span class="function">setItem</span>(<span class="string">"username"</span>, <span class="string">"أحمد"</span>);
                    localStorage.<span class="function">setItem</span>(<span class="string">"age"</span>, <span class="string">"25"</span>);
                    
                    <span class="comment">// استرجاع بيانات</span>
                    <span class="keyword">const</span> username = localStorage.<span class="function">getItem</span>(<span class="string">"username"</span>);
                    <span class="keyword">const</span> age = localStorage.<span class="function">getItem</span>(<span class="string">"age"</span>);
                    <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الاسم: \${username}, العمر: \${age}\`</span>);
                    
                    <span class="comment">// حذف بيانات</span>
                    localStorage.<span class="function">removeItem</span>(<span class="string">"age"</span>);
                    
                    <span class="comment">// حذف كل البيانات</span>
                    localStorage.<span class="function">clear</span>();
                </div>
                
                <h4>تخزين الكائنات والمصفوفات</h4>
                <div class="code-block">
                    <span class="comment">// تخزين كائن</span>
                    <span class="keyword">const</span> user = {
                        <span class="property">name</span>: <span class="string">"سارة"</span>,
                        <span class="property">email</span>: <span class="string">"sara@email.com"</span>,
                        <span class="property">preferences</span>: {
                            <span class="property">theme</span>: <span class="string">"dark"</span>,
                            <span class="property">fontSize</span>: <span class="string">"large"</span>
                        }
                    };
                    
                    <span class="comment">// تحويل الكائن إلى JSON وتخزينه</span>
                    localStorage.<span class="function">setItem</span>(<span class="string">"user"</span>, JSON.<span class="function">stringify</span>(user));
                    
                    <span class="comment">// استرجاع الكائن وتحويله من JSON</span>
                    <span class="keyword">const</span> storedUser = JSON.<span class="function">parse</span>(localStorage.<span class="function">getItem</span>(<span class="string">"user"</span>));
                    <span class="function">console</span>.<span class="function">log</span>(storedUser.name); <span class="comment">// "سارة"</span>
                    <span class="function">console</span>.<span class="function">log</span>(storedUser.preferences.theme); <span class="comment">// "dark"</span>
                    
                    <span class="comment">// تخزين مصفوفة</span>
                    <span class="keyword">const</span> tasks = [<span class="string">"مهمة 1"</span>, <span class="string">"مهمة 2"</span>, <span class="string">"مهمة 3"</span>];
                    localStorage.<span class="function">setItem</span>(<span class="string">"tasks"</span>, JSON.<span class="function">stringify</span>(tasks));
                    
                    <span class="comment">// استرجاع المصفوفة</span>
                    <span class="keyword">const</span> storedTasks = JSON.<span class="function">parse</span>(localStorage.<span class="function">getItem</span>(<span class="string">"tasks"</span>));
                    <span class="function">console</span>.<span class="function">log</span>(storedTasks[0]); <span class="comment">// "مهمة 1"</span>
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: حفظ تفضيلات المستخدم</strong>
                    <div class="code-block">
                        <span class="comment">// حفظ تفضيلات التطبيق</span>
                        <span class="keyword">function</span> <span class="function">savePreferences</span>(theme, fontSize, language) {
                            <span class="keyword">const</span> preferences = { theme, fontSize, language };
                            localStorage.<span class="function">setItem</span>(<span class="string">"preferences"</span>, JSON.<span class="function">stringify</span>(preferences));
                        }
                        
                        <span class="keyword">function</span> <span class="function">loadPreferences</span>() {
                            <span class="keyword">const</span> stored = localStorage.<span class="function">getItem</span>(<span class="string">"preferences"</span>);
                            <span class="keyword">if</span> (stored) {
                                <span class="keyword">return</span> JSON.<span class="function">parse</span>(stored);
                            }
                            <span class="keyword">return</span> <span class="keyword">null</span>;
                        }
                        
                        <span class="comment">// استخدام التفضيلات</span>
                        <span class="keyword">function</span> <span class="function">applyPreferences</span>() {
                            <span class="keyword">const</span> prefs = <span class="function">loadPreferences</span>();
                            <span class="keyword">if</span> (prefs) {
                                <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الثيم: \${prefs.theme}\`</span>);
                                <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`حجم الخط: \${prefs.fontSize}\`</span>);
                                <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`اللغة: \${prefs.language}\`</span>);
                            }
                        }
                        
                        <span class="comment">// حفظ التفضيلات</span>
                        <span class="function">savePreferences</span>(<span class="string">"dark"</span>, <span class="string">"large"</span>, <span class="string">"ar"</span>);
                        <span class="function">applyPreferences</span>();
                    </div>
                </div>
                
                <h4>الفرق بين LocalStorage و SessionStorage</h4>
                <ul>
                    <li><strong>LocalStorage:</strong> يبقى حتى بعد إغلاق المتصفح (دائم)</li>
                    <li><strong>SessionStorage:</strong> يحذف عند إغلاق التبويب أو المتصفح</li>
                </ul>
                
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
                    <span class="comment">// fetch مع Promise</span>
                    <span class="function">fetch</span>(<span class="string">'https://api.example.com/users'</span>)
                        .<span class="function">then</span>(response => response.<span class="function">json</span>())
                        .<span class="function">then</span>(data => {
                            <span class="function">console</span>.<span class="function">log</span>(data);
                        })
                        .<span class="function">catch</span>(error => {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'خطأ:'</span>, error);
                        });
                </div>
                
                <h4>Async/Await - الطريقة الحديثة</h4>
                <div class="code-block">
                    <span class="comment">// async function مع await</span>
                    <span class="keyword">async</span> <span class="keyword">function</span> <span class="function">getUsers</span>() {
                        <span class="keyword">try</span> {
                            <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'https://jsonplaceholder.typicode.com/users'</span>);
                            <span class="keyword">if</span> (!response.ok) {
                                <span class="keyword">throw</span> <span class="keyword">new</span> <span class="function">Error</span>(<span class="string">\`HTTP خطأ! الحالة: \${response.status}\`</span>);
                            }
                            <span class="keyword">const</span> data = <span class="keyword">await</span> response.<span class="function">json</span>();
                            <span class="function">console</span>.<span class="function">log</span>(data);
                            <span class="keyword">return</span> data;
                        } <span class="keyword">catch</span> (error) {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'حدث خطأ:'</span>, error);
                        }
                    }
                    
                    <span class="comment">// استخدام الدالة</span>
                    <span class="function">getUsers</span>();
                </div>
                
                <h4>طلبات POST (إرسال بيانات)</h4>
                <div class="code-block">
                    <span class="keyword">async</span> <span class="keyword">function</span> <span class="function">createUser</span>(userData) {
                        <span class="keyword">try</span> {
                            <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'https://jsonplaceholder.typicode.com/users'</span>, {
                                <span class="property">method</span>: <span class="string">'POST'</span>,
                                <span class="property">headers</span>: {
                                    <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span>
                                },
                                <span class="property">body</span>: JSON.<span class="function">stringify</span>(userData)
                            });
                            
                            <span class="keyword">const</span> result = <span class="keyword">await</span> response.<span class="function">json</span>();
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'تم الإنشاء:'</span>, result);
                            <span class="keyword">return</span> result;
                        } <span class="keyword">catch</span> (error) {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'خطأ في الإنشاء:'</span>, error);
                        }
                    }
                    
                    <span class="comment">// استخدام POST</span>
                    <span class="function">createUser</span>({
                        <span class="property">name</span>: <span class="string">"أحمد محمد"</span>,
                        <span class="property">email</span>: <span class="string">"ahmed@email.com"</span>
                    });
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: تطبيق عرض بيانات المستخدمين</strong>
                    <div class="code-block">
                        <span class="keyword">async</span> <span class="keyword">function</span> <span class="function">loadUsers</span>() {
                            <span class="keyword">const</span> userList = document.<span class="function">querySelector</span>(<span class="string">"#userList"</span>);
                            userList.textContent = <span class="string">"جاري التحميل..."</span>;
                            
                            <span class="keyword">try</span> {
                                <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'https://jsonplaceholder.typicode.com/users'</span>);
                                <span class="keyword">const</span> users = <span class="keyword">await</span> response.<span class="function">json</span>();
                                
                                userList.innerHTML = <span class="string">""</span>;
                                users.<span class="function">forEach</span>(user => {
                                    <span class="keyword">const</span> li = document.<span class="function">createElement</span>(<span class="string">"li"</span>);
                                    li.textContent = <span class="string">\`\${user.name} - \${user.email}\`</span>;
                                    userList.<span class="function">appendChild</span>(li);
                                });
                            } <span class="keyword">catch</span> (error) {
                                userList.textContent = <span class="string">"❌ خطأ في تحميل البيانات"</span>;
                                <span class="function">console</span>.<span class="function">error</span>(error);
                            }
                        }
                        
                        <span class="comment">// تحميل المستخدمين عند تحميل الصفحة</span>
                        window.<span class="function">addEventListener</span>(<span class="string">"load"</span>, <span class="function">loadUsers</span>);
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
                    <span class="comment">// التحقق من دعم المتصفح</span>
                    <span class="keyword">if</span> (<span class="string">'speechSynthesis'</span> <span class="keyword">in</span> window) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"المتصفح يدعم القراءة الصوتية"</span>);
                    } <span class="keyword">else</span> {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">"المتصفح لا يدعم القراءة الصوتية"</span>);
                    }
                    
                    <span class="comment">// إنشاء كائن النطق</span>
                    <span class="keyword">function</span> <span class="function">speak</span>(text, lang = <span class="string">'ar-SA'</span>, rate = 1, pitch = 1) {
                        <span class="keyword">const</span> utterance = <span class="keyword">new</span> <span class="function">SpeechSynthesisUtterance</span>(text);
                        utterance.lang = lang;
                        utterance.rate = rate; <span class="comment">// سرعة القراءة (0.1 - 10)</span>
                        utterance.pitch = pitch; <span class="comment">// طبقة الصوت (0 - 2)</span>
                        utterance.volume = 1; <span class="comment">// مستوى الصوت (0 - 1)</span>
                        
                        <span class="comment">// أحداث النطق</span>
                        utterance.<span class="function">addEventListener</span>(<span class="string">'start'</span>, () => {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'بدء القراءة'</span>);
                        });
                        utterance.<span class="function">addEventListener</span>(<span class="string">'end'</span>, () => {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'انتهت القراءة'</span>);
                        });
                        utterance.<span class="function">addEventListener</span>(<span class="string">'error'</span>, (event) => {
                            <span class="function">console</span>.<span class="function">error</span>(<span class="string">'خطأ في القراءة:'</span>, event);
                        });
                        
                        window.speechSynthesis.<span class="function">speak</span>(utterance);
                    }
                    
                    <span class="comment">// استخدام الدالة</span>
                    <span class="function">speak</span>(<span class="string">"مرحباً في أكاديمية الكومندا"</span>);
                </div>
                
                <h4>التحكم في القراءة (إيقاف، توقف، استئناف)</h4>
                <div class="code-block">
                    <span class="comment">// إيقاف القراءة</span>
                    <span class="keyword">function</span> <span class="function">stopSpeaking</span>() {
                        <span class="keyword">if</span> (window.speechSynthesis.<span class="function">speaking</span>) {
                            window.speechSynthesis.<span class="function">cancel</span>();
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'تم إيقاف القراءة'</span>);
                        }
                    }
                    
                    <span class="comment">// إيقاف مؤقت</span>
                    <span class="keyword">function</span> <span class="function">pauseSpeaking</span>() {
                        <span class="keyword">if</span> (window.speechSynthesis.<span class="function">speaking</span>) {
                            window.speechSynthesis.<span class="function">pause</span>();
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'تم إيقاف القراءة مؤقتاً'</span>);
                        }
                    }
                    
                    <span class="comment">// استئناف القراءة</span>
                    <span class="keyword">function</span> <span class="function">resumeSpeaking</span>() {
                        <span class="keyword">if</span> (window.speechSynthesis.<span class="function">paused</span>) {
                            window.speechSynthesis.<span class="function">resume</span>();
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">'تم استئناف القراءة'</span>);
                        }
                    }
                </div>
                
                <h4>الحصول على الأصوات المتاحة</h4>
                <div class="code-block">
                    <span class="keyword">function</span> <span class="function">getAvailableVoices</span>() {
                        <span class="keyword">const</span> voices = window.speechSynthesis.<span class="function">getVoices</span>();
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">'الأصوات المتاحة:'</span>);
                        voices.<span class="function">forEach</span>((voice, index) => {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`\${index + 1}. \${voice.name} (\${voice.lang})\`</span>);
                        });
                        <span class="keyword">return</span> voices;
                    }
                    
                    <span class="comment">// اختيار صوت معين</span>
                    <span class="keyword">function</span> <span class="function">speakWithVoice</span>(text, voiceName) {
                        <span class="keyword">const</span> voices = window.speechSynthesis.<span class="function">getVoices</span>();
                        <span class="keyword">const</span> selectedVoice = voices.<span class="function">find</span>(voice => voice.name === voiceName);
                        
                        <span class="keyword">const</span> utterance = <span class="keyword">new</span> <span class="function">SpeechSynthesisUtterance</span>(text);
                        <span class="keyword">if</span> (selectedVoice) {
                            utterance.voice = selectedVoice;
                        }
                        window.speechSynthesis.<span class="function">speak</span>(utterance);
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: تطبيق قراءة المحتوى</strong>
                    <div class="code-block">
                        <span class="comment">// عناصر التحكم</span>
                        <span class="keyword">const</span> readBtn = document.<span class="function">querySelector</span>(<span class="string">"#readBtn"</span>);
                        <span class="keyword">const</span> stopBtn = document.<span class="function">querySelector</span>(<span class="string">"#stopBtn"</span>);
                        <span class="keyword">const</span> contentDiv = document.<span class="function">querySelector</span>(<span class="string">"#content"</span>);
                        
                        <span class="keyword">function</span> <span class="function">readContent</span>() {
                            <span class="comment">// استخراج النص من المحتوى</span>
                            <span class="keyword">const</span> text = contentDiv.textContent.<span class="function">trim</span>();
                            <span class="keyword">if</span> (text) {
                                <span class="function">speak</span>(text, <span class="string">'ar-SA'</span>, 0.9, 1);
                            }
                        }
                        
                        <span class="comment">// إضافة أحداث للأزرار</span>
                        readBtn.<span class="function">addEventListener</span>(<span class="string">"click"</span>, <span class="function">readContent</span>);
                        stopBtn.<span class="function">addEventListener</span>(<span class="string">"click"</span>, <span class="function">stopSpeaking</span>);
                        
                        <span class="comment">// تحميل الأصوات عند تحميل الصفحة</span>
                        window.<span class="function">addEventListener</span>(<span class="string">"load"</span>, () => {
                            <span class="comment">// بعض المتصفحات تحتاج إلى تحميل الأصوات</span>
                            window.speechSynthesis.<span class="function">getVoices</span>();
                        });
                        
                        <span class="comment">// في بعض المتصفحات، الأصوات تحتاج إلى وقت للتحميل</span>
                        window.speechSynthesis.<span class="function">addEventListener</span>(<span class="string">"voiceschanged"</span>, () => {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">"تم تحميل الأصوات"</span>);
                        });
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
        }
    ]
};
