const chapter2 = {
    // معرف الفصل - يستخدم للربط بين الفصول
    id: 'ch2',
    
    // عنوان الفصل الذي سيظهر في القائمة الجانبية
    title: 'HTML المتقدم - بناء هيكل المواقع',
    
    // وصف مختصر للفصل
    description: 'تعلم HTML بشكل احترافي مع كل التفاصيل والسمات والتطبيقات العملية',
    
    // قائمة الدروس - كل درس هو كائن يحتوي على id, title, content
    lessons: [
        // ============================================================
        // الدرس الأول: هيكل HTML5 الأساسي
        // ============================================================
        {
            // معرف فريد للدرس - يستخدم للتنقل بين الدروس
            id: '2-1',
            
            // عنوان الدرس
            title: 'هيكل HTML5 الأساسي وDOCTYPE',
            
            // محتوى الدرس - نص HTML مع تنسيقات خاصة
            content: `
                <!-- h3: عنوان رئيسي للدرس -->
                <h3>الهيكل الأساسي لأي صفحة HTML5</h3>
                
                <!-- p: فقرة نصية تشرح المفهوم -->
                <p>كل صفحة ويب تبدأ بهيكل أساسي ثابت. هذا الهيكل يخبر المتصفح بنوع المستند وكيفية تفسيره.</p>
                
                <!-- div.code-block: لعرض الأكواد البرمجية مع تنسيق خاص -->
                <div class="code-block">
                    <!-- التعليقات في الكود توضح كل جزء -->
                    &lt;!DOCTYPE html&gt;    <!-- إعلان نوع المستند - يخبر المتصفح أن هذا HTML5 -->
                    &lt;html lang="ar"&gt;    <!-- العنصر الجذر - lang="ar" يحدد اللغة العربية -->
                        &lt;head&gt;          <!-- رأس الصفحة - معلومات غير مرئية -->
                            &lt;meta charset="UTF-8"&gt;  <!-- ترميز الأحرف - يدعم العربية -->
                            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;  <!-- للتجاوب مع الشاشات -->
                            &lt;title&gt;عنوان الصفحة&lt;/title&gt;  <!-- عنوان يظهر في تبويب المتصفح -->
                        &lt;/head&gt;
                        &lt;body&gt;           <!-- جسم الصفحة - كل المحتوى المرئي -->
                            &lt;h1&gt;مرحباً في موقعي&lt;/h1&gt;  <!-- عنوان رئيسي -->
                            &lt;p&gt;هذا هو محتوى الصفحة&lt;/p&gt;  <!-- فقرة نصية -->
                        &lt;/body&gt;
                    &lt;/html&gt;
                </div>
                
                <!-- h4: عنوان فرعي -->
                <h4>شرح كل عنصر بالتفصيل</h4>
                
                <!-- ul: قائمة غير مرتبة (نقاط) -->
                <ul>
                    <!-- li: عنصر في القائمة -->
                    <li><strong>&lt;!DOCTYPE html&gt;</strong>: يخبر المتصفح بأن هذا مستند HTML5 (أحدث إصدار)</li>
                    <li><strong>&lt;html lang="ar"&gt;</strong>: العنصر الجذر للصفحة، lang تحدد اللغة (ar للعربية)</li>
                    <li><strong>&lt;head&gt;</strong>: يحتوي على معلومات غير مرئية مثل العنوان، الترميز، والروابط</li>
                    <li><strong>&lt;meta charset="UTF-8"&gt;</strong>: يحدد ترميز الأحرف (يدعم العربية والعالمية)</li>
                    <li><strong>&lt;meta name="viewport"&gt;</strong>: يجعل الصفحة متجاوبة مع الشاشات المختلفة</li>
                    <li><strong>&lt;title&gt;</strong>: عنوان الصفحة الذي يظهر في تبويب المتصفح</li>
                    <li><strong>&lt;body&gt;</strong>: يحتوي على كل المحتوى المرئي للمستخدم</li>
                </ul>
                
                <!-- div.note-box: صندوق ملاحظات بلون مميز -->
                <div class="note-box">
                    <strong>⭐ أفضل الممارسات:</strong>
                    <ul>
                        <li>استخدم دائماً <code>lang="ar"</code> للمواقع العربية</li>
                        <li>ضع <code>meta charset="UTF-8"</code> في أول الـ head</li>
                        <li>استخدم <code>meta viewport</code> لضمان تجاوب الموقع</li>
                    </ul>
                </div>
                
                <!-- div.example-box: صندوق أمثلة عملية -->
                <div class="example-box">
                    <strong>📝 مثال تطبيقي:</strong>
                    <p>هذا هو الهيكل الذي نستخدمه في جميع مشاريعنا. جرب إنشاء ملف جديد وانسخ هذا الهيكل وافتحه في المتصفح.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الثاني: العناوين (Headings)
        // ============================================================
        {
            id: '2-2',
            title: 'العناوين (Headings) وأهميتها لتحسين محركات البحث',
            content: `
                <h3>العناوين (h1 إلى h6) وأهميتها في SEO</h3>
                <p>العناوين هي العناصر التي تنظم المحتوى وترتبه هرمياً. محركات البحث توليها أهمية كبيرة.</p>
                
                <div class="code-block">
                    &lt;!-- h1: العنوان الرئيسي للصفحة - يستخدم مرة واحدة فقط --&gt;
                    &lt;h1&gt;العنوان الرئيسي للصفحة (مرة واحدة فقط)&lt;/h1&gt;
                    
                    &lt;!-- h2: عنوان قسم رئيسي --&gt;
                    &lt;h2&gt;عنوان قسم رئيسي&lt;/h2&gt;
                    
                    &lt;!-- h3: عنوان فرعي داخل القسم --&gt;
                    &lt;h3&gt;عنوان فرعي داخل القسم&lt;/h3&gt;
                    
                    &lt;!-- h4: عنوان تفصيلي أكثر --&gt;
                    &lt;h4&gt;عنوان تفصيلي أكثر&lt;/h4&gt;
                    
                    &lt;!-- h5: عنوان فرعي دقيق --&gt;
                    &lt;h5&gt;عنوان فرعي دقيق&lt;/h5&gt;
                    
                    &lt;!-- h6: أصغر عنوان --&gt;
                    &lt;h6&gt;أصغر عنوان&lt;/h6&gt;
                </div>
                
                <h4>قواعد ذهبية للعناوين</h4>
                <ul>
                    <li><strong>استخدم h1 مرة واحدة فقط</strong> في كل صفحة، ويعبر عن الموضوع الرئيسي</li>
                    <li><strong>التسلسل الهرمي:</strong> h1 ← h2 ← h3 ← h4 وهكذا</li>
                    <li><strong>لا تقفز بالمستويات:</strong> لا تضع h4 بعد h2 مباشرة</li>
                    <li><strong>ضع الكلمات المفتاحية</strong> في العناوين المهمة</li>
                </ul>
                
                <div class="example-box">
                    <strong>🎯 مثال صحيح للتسلسل:</strong>
                    <div class="code-block">
                        &lt;h1&gt;دليل تعلم HTML الشامل&lt;/h1&gt;
                            &lt;h2&gt;الفصل الأول: أساسيات HTML&lt;/h2&gt;
                                &lt;h3&gt;ما هو HTML؟&lt;/h3&gt;
                                &lt;h3&gt;تاريخ HTML&lt;/h3&gt;
                            &lt;h2&gt;الفصل الثاني: عناصر HTML المتقدمة&lt;/h2&gt;
                                &lt;h3&gt;السمات (Attributes)&lt;/h3&gt;
                                    &lt;h4&gt;سمة class&lt;/h4&gt;
                                    &lt;h4&gt;سمة id&lt;/h4&gt;
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🔍 لماذا العناوين مهمة لتحسين محركات البحث؟</strong>
                    <p>محركات البحث مثل Google تعطي وزناً كبيراً للعناوين لفهم محتوى الصفحة. العناوين المنظمة تساعد في ظهور موقعك في نتائج البحث.</p>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الثالث: الروابط التشعبية
        // ============================================================
        {
            id: '2-3',
            title: 'الروابط التشعبية (Links) - بناء شبكة الاتصال',
            content: `
                <h3>الروابط - ربط الصفحات معاً</h3>
                <p>الروابط هي ما يجعل الويب شبكة مترابطة. بدونها، الإنترنت مجرد صفحات منفصلة.</p>
                
                <div class="code-block">
                    &lt;!-- رابط بسيط - href تحدد الوجهة --&gt;
                    &lt;a href="https://google.com"&gt;زيارة جوجل&lt;/a&gt;

                    &lt;!-- رابط مع سمات الأمان (موصى بها) --&gt;
                    &lt;!-- target="_blank" تفتح في نافذة جديدة --&gt;
                    &lt;!-- rel="noopener noreferrer" تمنع الصفحة الجديدة من التحكم بالصفحة الأصلية --&gt;
                    &lt;a href="https://example.com" target="_blank" rel="noopener noreferrer"&gt;
                        فتح في نافذة جديدة بأمان
                    &lt;/a&gt;

                    &lt;!-- رابط لمرساة داخل الصفحة - # تشير إلى عنصر له id="section2" --&gt;
                    &lt;a href="#section2"&gt;الذهاب للقسم الثاني&lt;/a&gt;
                </div>
                
                <h4>سمات الرابط المهمة</h4>
                <ul>
                    <li><strong>href:</strong> الوجهة التي سينتقل إليها المستخدم (رابط، مسار ملف، أو مرساة)</li>
                    <li><strong>target="_blank":</strong> يفتح الرابط في نافذة أو تبويب جديد</li>
                    <li><strong>rel="noopener":</strong> يمنع الصفحة الجديدة من التحكم بالصفحة الأصلية (أمان)</li>
                    <li><strong>rel="noreferrer":</strong> يمنع إرسال معلومات الصفحة الأصلية (خصوصية)</li>
                    <li><strong>title:</strong> يظهر تلميح عند تمرير المؤشر على الرابط</li>
                    <li><strong>download:</strong> يجبر المتصفح على تحميل الملف بدلاً من فتحه</li>
                </ul>
                
                <div class="note-box">
                    <strong>🛡️ نصائح أمان مهمة:</strong>
                    <ul>
                        <li>استخدم دائماً <code>rel="noopener noreferrer"</code> مع <code>target="_blank"</code></li>
                        <li>لا تستخدم <code>href="javascript:void(0)"</code> فهي طريقة قديمة</li>
                        <li>للروابط الخارجية، استخدم <code>rel="nofollow"</code> إذا كان الرابط غير موثوق</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الرابع: الوسائط والصور
        // ============================================================
        {
            id: '2-4',
            title: 'الوسائط والصور - إضافة الحياة للصفحات',
            content: `
                <h3>إدراج الصور والوسائط المتعددة</h3>
                <p>الوسائط تجعل الصفحات غنية وجذابة. تعلم كيفية إضافتها بشكل صحيح مع مراعاة إمكانية الوصول.</p>
                
                <div class="code-block">
                    &lt;!-- صورة أساسية مع نص بديل --&gt;
                    &lt;!-- src: مصدر الصورة --&gt;
                    &lt;!-- alt: نص بديل للصورة (ضروري لإمكانية الوصول) --&gt;
                    &lt;!-- width/height: أبعاد الصورة --&gt;
                    &lt;!-- loading="lazy": تحميل الصورة فقط عندما تكون مرئية --&gt;
                    &lt;img src="images/photo.jpg" alt="وصف الصورة لضعاف البصر" width="800" height="600" loading="lazy"&gt;

                    &lt;!-- صورة مع تنسيق متجاوب --&gt;
                    &lt;img src="images/banner.jpg" alt="بانر الموقع" style="max-width: 100%; height: auto;"&gt;
                </div>
                
                <h4>سمات الصورة المهمة</h4>
                <ul>
                    <li><strong>src:</strong> مصدر الصورة (رابط أو مسار ملف)</li>
                    <li><strong>alt:</strong> نص بديل للصورة (ضروري لإمكانية الوصول وتحسين محركات البحث)</li>
                    <li><strong>width / height:</strong> أبعاد الصورة (تساعد في منع الاهتزاز أثناء التحميل)</li>
                    <li><strong>loading="lazy":</strong> تحميل الصورة فقط عندما تكون مرئية (يحسن الأداء)</li>
                    <li><strong>title:</strong> يظهر عند تمرير المؤشر (اختياري)</li>
                </ul>
                
                <div class="note-box">
                    <strong>♿ قواعد إمكانية الوصول للصور:</strong>
                    <ul>
                        <li>الصور التزيينية: استخدم <code>alt=""</code> (فارغ)</li>
                        <li>الصور المعلوماتية: اكتب وصفاً دقيقاً للمعلومة</li>
                        <li>الصور التي تحمل رابطاً: اكتب وصفاً يوضح وجهة الرابط</li>
                    </ul>
                </div>
                
                <h4>الصيغ المدعومة ونصائح الأداء</h4>
                <ul>
                    <li><strong>JPEG:</strong> للصور الفوتوغرافية (حجم صغير، جودة جيدة)</li>
                    <li><strong>PNG:</strong> للصور الشفافة أو التي تحتاج دقة عالية</li>
                    <li><strong>WebP:</strong> صيغة حديثة تجمع بين جودة JPEG وحجم PNG (موصى بها)</li>
                    <li><strong>SVG:</strong> للرسومات المتجهة (قابلة للتكبير بدون فقدان الجودة)</li>
                </ul>
            `
        },
        
        // ============================================================
        // الدرس الخامس: القوائم والجداول
        // ============================================================
        {
            id: '2-5',
            title: 'القوائم والجداول - تنظيم البيانات',
            content: `
                <h3>تنظيم البيانات باستخدام القوائم والجداول</h3>
                <p>القوائم والجداول هي أدوات أساسية لتنظيم وعرض البيانات بطريقة منظمة وسهلة القراءة.</p>
                
                <div class="code-block">
                    &lt;!-- ul: قائمة غير مرتبة (نقاط) --&gt;
                    &lt;ul&gt;
                        &lt;li&gt;العنصر الأول&lt;/li&gt;
                        &lt;li&gt;العنصر الثاني&lt;/li&gt;
                        &lt;li&gt;العنصر الثالث&lt;/li&gt;
                    &lt;/ul&gt;

                    &lt;!-- ol: قائمة مرتبة (أرقام) --&gt;
                    &lt;ol&gt;
                        &lt;li&gt;الخطوة الأولى&lt;/li&gt;
                        &lt;li&gt;الخطوة الثانية&lt;/li&gt;
                        &lt;li&gt;الخطوة الثالثة&lt;/li&gt;
                    &lt;/ol&gt;

                    &lt;!-- dl: قائمة تعريفية (مصطلحات وتعريفات) --&gt;
                    &lt;dl&gt;
                        &lt;dt&gt;HTML&lt;/dt&gt;  <!-- مصطلح -->
                        &lt;dd&gt;لغة ترميز النصوص التشعبية&lt;/dd&gt;  <!-- تعريف -->
                        &lt;dt&gt;CSS&lt;/dt&gt;
                        &lt;dd&gt;لغة تنسيق الصفحات&lt;/dd&gt;
                    &lt;/dl&gt;
                </div>
                
                <h4>الجداول - عرض البيانات الجدولية</h4>
                <div class="code-block">
                    &lt;table&gt;  <!-- بداية الجدول -->
                        &lt;thead&gt;  <!-- رأس الجدول -->
                            &lt;tr&gt;  <!-- صف -->
                                &lt;th&gt;الاسم&lt;/th&gt;  <!-- خلية رأس -->
                                &lt;th&gt;العمر&lt;/th&gt;
                                &lt;th&gt;المدينة&lt;/th&gt;
                            &lt;/tr&gt;
                        &lt;/thead&gt;
                        &lt;tbody&gt;  <!-- جسم الجدول (البيانات) -->
                            &lt;tr&gt;
                                &lt;td&gt;أحمد محمد&lt;/td&gt;  <!-- خلية بيانات -->
                                &lt;td&gt;25&lt;/td&gt;
                                &lt;td&gt;القاهرة&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;سارة علي&lt;/td&gt;
                                &lt;td&gt;22&lt;/td&gt;
                                &lt;td&gt;الرياض&lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للجداول:</strong>
                    <ul>
                        <li>استخدم <code>&lt;thead&gt;</code> و <code>&lt;tbody&gt;</code> لتنظيم الجدول</li>
                        <li>استخدم <code>&lt;th&gt;</code> لخلايا الرأس لتسهيل القراءة</li>
                        <li>أضف <code>scope="col"</code> أو <code>scope="row"</code> لتحسين إمكانية الوصول</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس السادس: النماذج التفاعلية
        // ============================================================
        {
            id: '2-6',
            title: 'النماذج التفاعلية (Forms) - جمع البيانات',
            content: `
                <h3>بناء نماذج تفاعلية لجمع بيانات المستخدمين</h3>
                <p>النماذج هي وسيلة التفاعل الأساسية مع المستخدمين لجمع البيانات وإرسالها للخادم.</p>
                
                <div class="code-block">
                    &lt;!-- form: نموذج لجمع البيانات --&gt;
                    &lt;!-- action: عنوان الوجهة التي سترسل لها البيانات --&gt;
                    &lt;!-- method: طريقة الإرسال (GET أو POST) --&gt;
                    &lt;form action="/submit" method="POST"&gt;
                        
                        &lt;!-- label: تسمية للحقل --&gt;
                        &lt;!-- for: يربط التسمية بالحقل عن طريق id --&gt;
                        &lt;label for="name"&gt;الاسم:&lt;/label&gt;
                        
                        &lt;!-- input: حقل إدخال --&gt;
                        &lt;!-- type="text": نص عادي --&gt;
                        &lt;!-- id: معرف فريد يربطه بالتسمية --&gt;
                        &lt;!-- name: اسم الحقل عند الإرسال --&gt;
                        &lt;!-- placeholder: نص توجيهي --&gt;
                        &lt;!-- required: يجعل الحقل إلزامياً --&gt;
                        &lt;input type="text" id="name" name="name" placeholder="أدخل اسمك" required&gt;
                        
                        &lt;label for="email"&gt;البريد الإلكتروني:&lt;/label&gt;
                        &lt;!-- type="email": يتحقق من صيغة البريد الإلكتروني --&gt;
                        &lt;input type="email" id="email" name="email" placeholder="example@email.com" required&gt;
                        
                        &lt;label for="message"&gt;الرسالة:&lt;/label&gt;
                        &lt;!-- textarea: منطقة نصية متعددة الأسطر --&gt;
                        &lt;!-- rows: عدد الأسطر المرئية --&gt;
                        &lt;textarea id="message" name="message" rows="5" placeholder="اكتب رسالتك هنا..."&gt;&lt;/textarea&gt;
                        
                        &lt;!-- button: زر إرسال --&gt;
                        &lt;!-- type="submit": يرسل النموذج --&gt;
                        &lt;button type="submit"&gt;إرسال&lt;/button&gt;
                    &lt;/form&gt;
                </div>
                
                <h4>أنواع المدخلات (Input Types)</h4>
                <ul>
                    <li><strong>text:</strong> نص عادي</li>
                    <li><strong>email:</strong> بريد إلكتروني (يتم التحقق من الصيغة)</li>
                    <li><strong>password:</strong> كلمة مرور (تظهر بنقاط)</li>
                    <li><strong>number:</strong> أرقام فقط</li>
                    <li><strong>tel:</strong> رقم هاتف</li>
                    <li><strong>url:</strong> رابط</li>
                    <li><strong>date:</strong> تاريخ</li>
                    <li><strong>file:</strong> رفع ملف</li>
                    <li><strong>checkbox:</strong> خانة اختيار</li>
                    <li><strong>radio:</strong> زر اختيار (واحد من مجموعة)</li>
                    <li><strong>range:</strong> شريط تحكم</li>
                    <li><strong>color:</strong> اختيار لون</li>
                </ul>
                
                <div class="note-box">
                    <strong>♿ إمكانية الوصول في النماذج:</strong>
                    <ul>
                        <li>استخدم <code>&lt;label&gt;</code> مع <code>for</code> لكل مدخل</li>
                        <li>أضف <code>aria-label</code> للحقول بدون تسميات مرئية</li>
                        <li>استخدم <code>required</code> للحقول المهمة مع رسائل خطأ واضحة</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس السابع: العناصر الدلالية
        // ============================================================
        {
            id: '2-7',
            title: 'العناصر الدلالية (Semantic Elements) - تنظيم هيكلي متقدم',
            content: `
                <h3>العناصر الدلالية - بناء هيكل منطقي للصفحات</h3>
                <p>العناصر الدلالية تعطي معنى للهيكل، وتساعد محركات البحث وقارئات الشاشة في فهم المحتوى.</p>
                
                <div class="code-block">
                    &lt;!-- header: رأس الصفحة أو القسم --&gt;
                    &lt;header&gt;
                        &lt;h1&gt;عنوان الموقع&lt;/h1&gt;
                        &lt;!-- nav: قائمة التنقل الرئيسية --&gt;
                        &lt;nav&gt;
                            &lt;ul&gt;
                                &lt;li&gt;&lt;a href="#"&gt;الرئيسية&lt;/a&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;a href="#"&gt;الدروس&lt;/a&gt;&lt;/li&gt;
                                &lt;li&gt;&lt;a href="#"&gt;اتصل بنا&lt;/a&gt;&lt;/li&gt;
                            &lt;/ul&gt;
                        &lt;/nav&gt;
                    &lt;/header&gt;

                    &lt;!-- main: المحتوى الرئيسي للصفحة (يوجد مرة واحدة فقط) --&gt;
                    &lt;main&gt;
                        &lt;!-- section: قسم منطقي من المحتوى --&gt;
                        &lt;section&gt;
                            &lt;h2&gt;قسم المقالات&lt;/h2&gt;
                            &lt;!-- article: محتوى مستقل وقائم بذاته --&gt;
                            &lt;article&gt;
                                &lt;h3&gt;مقال: أساسيات البرمجة&lt;/h3&gt;
                                &lt;p&gt;محتوى المقال...&lt;/p&gt;
                            &lt;/article&gt;
                            &lt;article&gt;
                                &lt;h3&gt;مقال: مقدمة في HTML&lt;/h3&gt;
                                &lt;p&gt;محتوى المقال...&lt;/p&gt;
                            &lt;/article&gt;
                        &lt;/section&gt;
                        
                        &lt;!-- aside: محتوى جانبي مرتبط بشكل غير مباشر --&gt;
                        &lt;aside&gt;
                            &lt;h3&gt;معلومات جانبية&lt;/h3&gt;
                            &lt;p&gt;محتويات جانبية مثل الإعلانات أو روابط مفيدة&lt;/p&gt;
                        &lt;/aside&gt;
                    &lt;/main&gt;

                    &lt;!-- footer: تذييل الصفحة أو القسم --&gt;
                    &lt;footer&gt;
                        &lt;p&gt;جميع الحقوق محفوظة © 2026&lt;/p&gt;
                    &lt;/footer&gt;
                </div>
                
                <h4>شرح كل عنصر</h4>
                <ul>
                    <li><strong>&lt;header&gt;:</strong> رأس الصفحة أو القسم (يحتوي على شعار، عنوان، قوائم)</li>
                    <li><strong>&lt;nav&gt;:</strong> قائمة التنقل الرئيسية</li>
                    <li><strong>&lt;main&gt;:</strong> المحتوى الرئيسي للصفحة (يوجد مرة واحدة فقط)</li>
                    <li><strong>&lt;section&gt;:</strong> قسم منطقي من المحتوى (له موضوع محدد)</li>
                    <li><strong>&lt;article&gt;:</strong> محتوى مستقل وقائم بذاته (مقال، منشور)</li>
                    <li><strong>&lt;aside&gt;:</strong> محتوى جانبي مرتبط بشكل غير مباشر</li>
                    <li><strong>&lt;footer&gt;:</strong> تذييل الصفحة أو القسم</li>
                </ul>
                
                <div class="note-box">
                    <strong>🔍 فوائد العناصر الدلالية:</strong>
                    <ul>
                        <li>تحسين ظهور الموقع في محركات البحث (SEO)</li>
                        <li>تسهيل التنقل لقارئات الشاشة (إمكانية الوصول)</li>
                        <li>جعل الكود أكثر قابلية للقراءة والصيانة</li>
                    </ul>
                </div>
            `
        },
        
        // ============================================================
        // الدرس الثامن: تحسين محركات البحث
        // ============================================================
        {
            id: '2-8',
            title: 'تحسين محركات البحث (SEO) وأوبن جراف',
            content: `
                <h3>تحسين محركات البحث التقني والأوبن جراف</h3>
                <p>SEO يجعل موقعك يظهر في نتائج البحث. الأوبن جراف يتحكم في مظهر الرابط عند المشاركة في وسائل التواصل.</p>
                
                <div class="code-block">
                    &lt;head&gt;
                        &lt;!-- الترميز واللغة --&gt;
                        &lt;meta charset="UTF-8"&gt;
                        &lt;meta name="language" content="ar"&gt;
                        
                        &lt;!-- العنوان والوصف --&gt;
                        &lt;!-- title: يظهر في نتائج البحث وتبويب المتصفح --&gt;
                        &lt;title&gt;أكاديمية الكومندا - تعلم البرمجة من الصفر&lt;/title&gt;
                        &lt;!-- description: وصف مختصر للصفحة يظهر في نتائج البحث --&gt;
                        &lt;meta name="description" content="منصة تعلم برمجة متكاملة للمبتدئين والمحترفين"&gt;
                        
                        &lt;!-- الكلمات المفتاحية - تساعد محركات البحث في فهم محتوى الصفحة --&gt;
                        &lt;meta name="keywords" content="برمجة, ويب, HTML, CSS, JavaScript, أكاديمية"&gt;
                        
                        &lt;!-- الروبوتات - تتحكم في كيفية فهرسة الصفحة --&gt;
                        &lt;!-- index: السماح بالفهرسة, follow: السماح بمتابعة الروابط --&gt;
                        &lt;meta name="robots" content="index, follow"&gt;
                        
                        &lt;!-- Open Graph (لوسائل التواصل الاجتماعي) --&gt;
                        &lt;!-- og:title: العنوان الذي يظهر عند المشاركة --&gt;
                        &lt;meta property="og:title" content="أكاديمية الكومندا - تعلم البرمجة"&gt;
                        &lt;!-- og:description: الوصف الذي يظهر عند المشاركة --&gt;
                        &lt;meta property="og:description" content="منصة تعلم برمجة متكاملة مع شروحات وأمثلة عملية"&gt;
                        &lt;!-- og:image: الصورة التي تظهر عند المشاركة --&gt;
                        &lt;meta property="og:image" content="https://academy.com/logo.jpg"&gt;
                        &lt;!-- og:url: الرابط الأصلي للصفحة --&gt;
                        &lt;meta property="og:url" content="https://academy.com"&gt;
                        &lt;!-- og:type: نوع المحتوى (website, article, product...) --&gt;
                        &lt;meta property="og:type" content="website"&gt;
                        
                        &lt;!-- Twitter Card - للظهور بشكل جيد على تويتر --&gt;
                        &lt;meta name="twitter:card" content="summary_large_image"&gt;
                        &lt;meta name="twitter:title" content="أكاديمية الكومندا"&gt;
                    &lt;/head&gt;
                </div>
                
                <h4>نصائح ذهبية لتحسين SEO</h4>
                <ul>
                    <li><strong>العنوان (Title):</strong> اجعله بين 50-60 حرفاً، يحتوي على الكلمات المفتاحية</li>
                    <li><strong>الوصف (Description):</strong> بين 150-160 حرفاً، يشرح محتوى الصفحة بدقة</li>
                    <li><strong>العناوين (Headings):</strong> استخدم h1 للموضوع الرئيسي، h2 للأقسام، h3 للتفاصيل</li>
                    <li><strong>الروابط (Links):</strong> استخدم نصوص وصفية للروابط (لا تستخدم "اضغط هنا")</li>
                    <li><strong>الصور (Images):</strong> استخدم alt وصفي واسم ملف مناسب</li>
                    <li><strong>السرعة:</strong> حسّن أداء الصفحة باستخدام lazy loading وتقليل حجم الملفات</li>
                </ul>
                
                <div class="note-box">
                    <strong>📱 أهمية الأوبن جراف:</strong>
                    <p>عند مشاركة رابط موقعك على فيسبوك أو تويتر أو واتساب، الأوبن جراف يتحكم في كيفية ظهور المعاينة (العنوان، الوصف، الصورة).</p>
                </div>
            `
        }
    ]
};
