const chapter2 = {
    id: 'ch2',
    title: 'HTML المتقدم - بناء هيكل المواقع',
    description: 'تعلم HTML بشكل احترافي مع كل التفاصيل والسمات والتطبيقات العملية',
    lessons: [
        {
            id: '2-1',
            title: 'هيكل HTML5 الأساسي وDOCTYPE',
            content: `
                <h3>الهيكل الأساسي لأي صفحة HTML5</h3>
                <p>كل صفحة ويب تبدأ بهيكل أساسي ثابت. هذا الهيكل يخبر المتصفح بنوع المستند وكيفية تفسيره.</p>
                
                <h4>مكونات الهيكل الأساسي</h4>
                <div class="code-block">
                    <span class="comment">&lt;!--DOCTYPE يخبر المتصفح بأن هذا مستند HTML5 --&gt;</span>
                    <span class="keyword">&lt;!DOCTYPE</span> <span class="function">html</span><span class="keyword">&gt;</span>
                    <span class="keyword">&lt;html</span> <span class="function">lang</span>=<span class="string">"ar"</span><span class="keyword">&gt;</span>
                        <span class="keyword">&lt;head&gt;</span>
                            <span class="comment">&lt;!-- معلومات عن الصفحة (غير مرئية للمستخدم) --&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">charset</span>=<span class="string">"UTF-8"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">name</span>=<span class="string">"viewport"</span> <span class="function">content</span>=<span class="string">"width=device-width, initial-scale=1.0"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;title&gt;</span>عنوان الصفحة<span class="keyword">&lt;/title&gt;</span>
                        <span class="keyword">&lt;/head&gt;</span>
                        <span class="keyword">&lt;body&gt;</span>
                            <span class="comment">&lt;!-- المحتوى المرئي للمستخدم --&gt;</span>
                            <span class="keyword">&lt;h1&gt;</span>مرحباً في موقعي<span class="keyword">&lt;/h1&gt;</span>
                            <span class="keyword">&lt;p&gt;</span>هذا هو محتوى الصفحة<span class="keyword">&lt;/p&gt;</span>
                        <span class="keyword">&lt;/body&gt;</span>
                    <span class="keyword">&lt;/html&gt;</span>
                </div>
                
                <h4>شرح كل عنصر بالتفصيل</h4>
                <ul>
                    <li><strong>&lt;!DOCTYPE html&gt;</strong>: يخبر المتصفح أن هذا مستند HTML5 (أحدث إصدار)</li>
                    <li><strong>&lt;html lang="ar"&gt;</strong>: العنصر الجذر للصفحة، lang تحدد اللغة (ar للعربية)</li>
                    <li><strong>&lt;head&gt;</strong>: يحتوي على معلومات غير مرئية مثل العنوان، الترميز، والروابط</li>
                    <li><strong>&lt;meta charset="UTF-8"&gt;</strong>: يحدد ترميز الأحرف (يدعم العربية والعالمية)</li>
                    <li><strong>&lt;meta name="viewport"&gt;</strong>: يجعل الصفحة متجاوبة مع الشاشات المختلفة</li>
                    <li><strong>&lt;title&gt;</strong>: عنوان الصفحة الذي يظهر في تبويب المتصفح</li>
                    <li><strong>&lt;body&gt;</strong>: يحتوي على كل المحتوى المرئي للمستخدم</li>
                </ul>
                
                <div class="note-box">
                    <strong>⭐ أفضل الممارسات:</strong>
                    <ul>
                        <li>استخدم دائماً <code>lang="ar"</code> للمواقع العربية</li>
                        <li>ضع <code>meta charset="UTF-8"</code> في أول الـ head</li>
                        <li>استخدم <code>meta viewport</code> لضمان تجاوب الموقع</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال تطبيقي:</strong>
                    <p>هذا هو الهيكل الذي نستخدمه في جميع مشاريعنا. جرب إنشاء ملف جديد وانسخ هذا الهيكل وافتحه في المتصفح.</p>
                </div>
            `
        },
        {
            id: '2-2',
            title: 'العناوين (Headings) وأهميتها لتحسين محركات البحث',
            content: `
                <h3>عناوين HTML (h1 إلى h6) وأهميتها في SEO</h3>
                <p>العناوين هي العناصر التي تنظم المحتوى وترتبه هرمياً. محركات البحث توليها أهمية كبيرة.</p>
                
                <h4>أنواع العناوين واستخداماتها</h4>
                <div class="code-block">
                    <span class="keyword">&lt;h1&gt;</span>العنوان الرئيسي للصفحة (مرة واحدة فقط)<span class="keyword">&lt;/h1&gt;</span>
                    <span class="keyword">&lt;h2&gt;</span>عنوان قسم رئيسي<span class="keyword">&lt;/h2&gt;</span>
                    <span class="keyword">&lt;h3&gt;</span>عنوان فرعي داخل القسم<span class="keyword">&lt;/h3&gt;</span>
                    <span class="keyword">&lt;h4&gt;</span>عنوان تفصيلي أكثر<span class="keyword">&lt;/h4&gt;</span>
                    <span class="keyword">&lt;h5&gt;</span>عنوان فرعي دقيق<span class="keyword">&lt;/h5&gt;</span>
                    <span class="keyword">&lt;h6&gt;</span>أصغر عنوان<span class="keyword">&lt;/h6&gt;</span>
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
                        <span class="keyword">&lt;h1&gt;</span>دليل تعلم HTML الشامل<span class="keyword">&lt;/h1&gt;</span>
                        <span class="keyword">&lt;h2&gt;</span>الفصل الأول: أساسيات HTML<span class="keyword">&lt;/h2&gt;</span>
                        <span class="keyword">&lt;h3&gt;</span>ما هو HTML؟<span class="keyword">&lt;/h3&gt;</span>
                        <span class="keyword">&lt;h3&gt;</span>تاريخ HTML<span class="keyword">&lt;/h3&gt;</span>
                        <span class="keyword">&lt;h2&gt;</span>الفصل الثاني: عناصر HTML المتقدمة<span class="keyword">&lt;/h2&gt;</span>
                        <span class="keyword">&lt;h3&gt;</span>السمات (Attributes)<span class="keyword">&lt;/h3&gt;</span>
                        <span class="keyword">&lt;h4&gt;</span>سمة class<span class="keyword">&lt;/h4&gt;</span>
                        <span class="keyword">&lt;h4&gt;</span>سمة id<span class="keyword">&lt;/h4&gt;</span>
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🔍 لماذا العناوين مهمة لتحسين محركات البحث؟</strong>
                    <p>محركات البحث مثل Google تعطي وزناً كبيراً للعناوين لفهم محتوى الصفحة. العناوين المنظمة تساعد في ظهور موقعك في نتائج البحث.</p>
                </div>
            `
        },
        {
            id: '2-3',
            title: 'الروابط التشعبية (Links) - بناء شبكة الاتصال',
            content: `
                <h3>الروابط - ربط الصفحات معاً</h3>
                <p>الروابط هي ما يجعل الويب شبكة مترابطة. بدونها، الإنترنت مجرد صفحات منفصلة.</p>
                
                <h4>عنصر الرابط الأساسي (a)</h4>
                <div class="code-block">
                    <span class="comment">&lt;!-- رابط بسيط --&gt;</span>
                    <span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"https://google.com"</span><span class="keyword">&gt;</span>زيارة جوجل<span class="keyword">&lt;/a&gt;</span>
                    
                    <span class="comment">&lt;!-- رابط مع سمات الأمان (موصى بها) --&gt;</span>
                    <span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"https://example.com"</span> 
                           <span class="function">target</span>=<span class="string">"_blank"</span> 
                           <span class="function">rel</span>=<span class="string">"noopener noreferrer"</span><span class="keyword">&gt;</span>
                        فتح في نافذة جديدة بأمان
                    <span class="keyword">&lt;/a&gt;</span>
                    
                    <span class="comment">&lt;!-- رابط لمرساة داخل الصفحة --&gt;</span>
                    <span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"#section2"</span><span class="keyword">&gt;</span>الذهاب للقسم الثاني<span class="keyword">&lt;/a&gt;</span>
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
                
                <div class="example-box">
                    <strong>📝 مثال عملي:</strong>
                    <div class="code-block">
                        <span class="comment">&lt;!-- رابط لموقع خارجي مع أمان --&gt;</span>
                        <span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"https://github.com"</span> 
                               <span class="function">target</span>=<span class="string">"_blank"</span> 
                               <span class="function">rel</span>=<span class="string">"noopener noreferrer"</span> 
                               <span class="function">title</span>=<span class="string">"زيارة جيثب"</span><span class="keyword">&gt;</span>
                            🐙 زيارة جيثب
                        <span class="keyword">&lt;/a&gt;</span>
                        
                        <span class="comment">&lt;!-- رابط لتحميل ملف PDF --&gt;</span>
                        <span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"/files/document.pdf"</span> 
                               <span class="function">download</span><span class="keyword">&gt;</span>
                            📄 تحميل المستند
                        <span class="keyword">&lt;/a&gt;</span>
                    </div>
                </div>
            `
        },
        {
            id: '2-4',
            title: 'الوسائط والصور - إضافة الحياة للصفحات',
            content: `
                <h3>إدراج الصور والوسائط المتعددة</h3>
                <p>الوسائط تجعل الصفحات غنية وجذابة. تعلم كيفية إضافتها بشكل صحيح مع مراعاة إمكانية الوصول.</p>
                
                <h4>عنصر الصورة (img)</h4>
                <div class="code-block">
                    <span class="comment">&lt;!-- صورة أساسية مع نص بديل --&gt;</span>
                    <span class="keyword">&lt;img</span> 
                         <span class="function">src</span>=<span class="string">"images/photo.jpg"</span> 
                         <span class="function">alt</span>=<span class="string">"وصف الصورة لضعاف البصر"</span> 
                         <span class="function">width</span>=<span class="string">"800"</span> 
                         <span class="function">height</span>=<span class="string">"600"</span> 
                         <span class="function">loading</span>=<span class="string">"lazy"</span><span class="keyword">&gt;</span>
                    
                    <span class="comment">&lt;!-- صورة مع تنسيق متجاوب --&gt;</span>
                    <span class="keyword">&lt;img</span> 
                         <span class="function">src</span>=<span class="string">"images/banner.jpg"</span> 
                         <span class="function">alt</span>=<span class="string">"بانر الموقع"</span> 
                         <span class="function">style</span>=<span class="string">"max-width: 100%; height: auto;"</span><span class="keyword">&gt;</span>
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
                
                <div class="example-box">
                    <strong>📝 مثال عملي متكامل:</strong>
                    <div class="code-block">
                        <span class="comment">&lt;!-- صورة مع تحسين SEO وإمكانية الوصول --&gt;</span>
                        <span class="keyword">&lt;figure&gt;</span>
                            <span class="keyword">&lt;img</span> 
                                 <span class="function">src</span>=<span class="string">"images/team.jpg"</span> 
                                 <span class="function">alt</span>=<span class="string">"فريق العمل في أكاديمية الكومندا"</span> 
                                 <span class="function">loading</span>=<span class="string">"lazy"</span> 
                                 <span class="function">width</span>=<span class="string">"1200"</span> 
                                 <span class="function">height</span>=<span class="string">"800"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;figcaption&gt;</span>
                                فريق أكاديمية الكومندا - 2026
                            <span class="keyword">&lt;/figcaption&gt;</span>
                        <span class="keyword">&lt;/figure&gt;</span>
                    </div>
                </div>
            `
        },
        {
            id: '2-5',
            title: 'القوائم والجداول - تنظيم البيانات',
            content: `
                <h3>تنظيم البيانات باستخدام القوائم والجداول</h3>
                <p>القوائم والجداول هي أدوات أساسية لتنظيم وعرض البيانات بطريقة منظمة وسهلة القراءة.</p>
                
                <h4>أنواع القوائم</h4>
                <div class="code-block">
                    <span class="comment">&lt;!-- قائمة غير مرتبة (نقاط) --&gt;</span>
                    <span class="keyword">&lt;ul&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>العنصر الأول<span class="keyword">&lt;/li&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>العنصر الثاني<span class="keyword">&lt;/li&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>العنصر الثالث<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;/ul&gt;</span>
                    
                    <span class="comment">&lt;!-- قائمة مرتبة (أرقام) --&gt;</span>
                    <span class="keyword">&lt;ol&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>الخطوة الأولى<span class="keyword">&lt;/li&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>الخطوة الثانية<span class="keyword">&lt;/li&gt;</span>
                        <span class="keyword">&lt;li&gt;</span>الخطوة الثالثة<span class="keyword">&lt;/li&gt;</span>
                    <span class="keyword">&lt;/ol&gt;</span>
                    
                    <span class="comment">&lt;!-- قائمة تعريفية --&gt;</span>
                    <span class="keyword">&lt;dl&gt;</span>
                        <span class="keyword">&lt;dt&gt;</span>HTML<span class="keyword">&lt;/dt&gt;</span>
                        <span class="keyword">&lt;dd&gt;</span>لغة ترميز النصوص التشعبية<span class="keyword">&lt;/dd&gt;</span>
                        <span class="keyword">&lt;dt&gt;</span>CSS<span class="keyword">&lt;/dt&gt;</span>
                        <span class="keyword">&lt;dd&gt;</span>لغة تنسيق الصفحات<span class="keyword">&lt;/dd&gt;</span>
                    <span class="keyword">&lt;/dl&gt;</span>
                </div>
                
                <h4>الجداول - عرض البيانات الجدولية</h4>
                <div class="code-block">
                    <span class="keyword">&lt;table&gt;</span>
                        <span class="keyword">&lt;thead&gt;</span>
                            <span class="keyword">&lt;tr&gt;</span>
                                <span class="keyword">&lt;th&gt;</span>الاسم<span class="keyword">&lt;/th&gt;</span>
                                <span class="keyword">&lt;th&gt;</span>العمر<span class="keyword">&lt;/th&gt;</span>
                                <span class="keyword">&lt;th&gt;</span>المدينة<span class="keyword">&lt;/th&gt;</span>
                            <span class="keyword">&lt;/tr&gt;</span>
                        <span class="keyword">&lt;/thead&gt;</span>
                        <span class="keyword">&lt;tbody&gt;</span>
                            <span class="keyword">&lt;tr&gt;</span>
                                <span class="keyword">&lt;td&gt;</span>أحمد محمد<span class="keyword">&lt;/td&gt;</span>
                                <span class="keyword">&lt;td&gt;</span>25<span class="keyword">&lt;/td&gt;</span>
                                <span class="keyword">&lt;td&gt;</span>القاهرة<span class="keyword">&lt;/td&gt;</span>
                            <span class="keyword">&lt;/tr&gt;</span>
                            <span class="keyword">&lt;tr&gt;</span>
                                <span class="keyword">&lt;td&gt;</span>سارة علي<span class="keyword">&lt;/td&gt;</span>
                                <span class="keyword">&lt;td&gt;</span>22<span class="keyword">&lt;/td&gt;</span>
                                <span class="keyword">&lt;td&gt;</span>الرياض<span class="keyword">&lt;/td&gt;</span>
                            <span class="keyword">&lt;/tr&gt;</span>
                        <span class="keyword">&lt;/tbody&gt;</span>
                    <span class="keyword">&lt;/table&gt;</span>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للجداول:</strong>
                    <ul>
                        <li>استخدم <code>&lt;thead&gt;</code> و <code>&lt;tbody&gt;</code> لتنظيم الجدول</li>
                        <li>استخدم <code>&lt;th&gt;</code> لخلايا الرأس لتسهيل القراءة</li>
                        <li>أضف <code>scope="col"</code> أو <code>scope="row"</code> لتحسين إمكانية الوصول</li>
                    </ul>
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي:</strong>
                    <p>استخدم القوائم لعرض عناصر القائمة في موقع، والجداول لعرض بيانات مثل قائمة الطلاب أو المنتجات.</p>
                </div>
            `
        },
        {
            id: '2-6',
            title: 'النماذج التفاعلية (Forms) - جمع البيانات',
            content: `
                <h3>بناء نماذج تفاعلية لجمع بيانات المستخدمين</h3>
                <p>النماذج هي وسيلة التفاعل الأساسية مع المستخدمين لجمع البيانات وإرسالها للخادم.</p>
                
                <h4>هيكل النموذج الأساسي</h4>
                <div class="code-block">
                    <span class="keyword">&lt;form</span> 
                          <span class="function">action</span>=<span class="string">"/submit"</span> 
                          <span class="function">method</span>=<span class="string">"POST"</span><span class="keyword">&gt;</span>
                        
                        <span class="comment">&lt;!-- حقل النص --&gt;</span>
                        <span class="keyword">&lt;label</span> <span class="function">for</span>=<span class="string">"name"</span><span class="keyword">&gt;</span>الاسم:<span class="keyword">&lt;/label&gt;</span>
                        <span class="keyword">&lt;input</span> <span class="function">type</span>=<span class="string">"text"</span> 
                               <span class="function">id</span>=<span class="string">"name"</span> 
                               <span class="function">name</span>=<span class="string">"name"</span> 
                               <span class="function">placeholder</span>=<span class="string">"أدخل اسمك"</span> 
                               <span class="function">required</span><span class="keyword">&gt;</span>
                        
                        <span class="comment">&lt;!-- البريد الإلكتروني --&gt;</span>
                        <span class="keyword">&lt;label</span> <span class="function">for</span>=<span class="string">"email"</span><span class="keyword">&gt;</span>البريد الإلكتروني:<span class="keyword">&lt;/label&gt;</span>
                        <span class="keyword">&lt;input</span> <span class="function">type</span>=<span class="string">"email"</span> 
                               <span class="function">id</span>=<span class="string">"email"</span> 
                               <span class="function">name</span>=<span class="string">"email"</span> 
                               <span class="function">placeholder</span>=<span class="string">"example@email.com"</span> 
                               <span class="function">required</span><span class="keyword">&gt;</span>
                        
                        <span class="comment">&lt;!-- منطقة نصية --&gt;</span>
                        <span class="keyword">&lt;label</span> <span class="function">for</span>=<span class="string">"message"</span><span class="keyword">&gt;</span>الرسالة:<span class="keyword">&lt;/label&gt;</span>
                        <span class="keyword">&lt;textarea</span> 
                                  <span class="function">id</span>=<span class="string">"message"</span> 
                                  <span class="function">name</span>=<span class="string">"message"</span> 
                                  <span class="function">rows</span>=<span class="string">"5"</span> 
                                  <span class="function">placeholder</span>=<span class="string">"اكتب رسالتك هنا..."</span><span class="keyword">&gt;</span>
                        <span class="keyword">&lt;/textarea&gt;</span>
                        
                        <span class="comment">&lt;!-- زر الإرسال --&gt;</span>
                        <span class="keyword">&lt;button</span> <span class="function">type</span>=<span class="string">"submit"</span><span class="keyword">&gt;</span>إرسال<span class="keyword">&lt;/button&gt;</span>
                    <span class="keyword">&lt;/form&gt;</span>
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
                    <li><strong>radio:</strong> زر اختيار</li>
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
                
                <div class="example-box">
                    <strong>📝 مثال عملي متكامل:</strong>
                    <div class="code-block">
                        <span class="keyword">&lt;form</span> <span class="function">action</span>=<span class="string">"/register"</span> <span class="function">method</span>=<span class="string">"POST"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;fieldset&gt;</span>
                                <span class="keyword">&lt;legend&gt;</span>معلومات المستخدم<span class="keyword">&lt;/legend&gt;</span>
                                
                                <span class="keyword">&lt;label</span> <span class="function">for</span>=<span class="string">"username"</span><span class="keyword">&gt;</span>اسم المستخدم:<span class="keyword">&lt;/label&gt;</span>
                                <span class="keyword">&lt;input</span> <span class="function">type</span>=<span class="string">"text"</span> <span class="function">id</span>=<span class="string">"username"</span> <span class="function">name</span>=<span class="string">"username"</span> <span class="function">minlength</span>=<span class="string">"3"</span> <span class="function">required</span><span class="keyword">&gt;</span>
                                
                                <span class="keyword">&lt;label</span> <span class="function">for</span>=<span class="string">"password"</span><span class="keyword">&gt;</span>كلمة المرور:<span class="keyword">&lt;/label&gt;</span>
                                <span class="keyword">&lt;input</span> <span class="function">type</span>=<span class="string">"password"</span> <span class="function">id</span>=<span class="string">"password"</span> <span class="function">name</span>=<span class="string">"password"</span> <span class="function">minlength</span>=<span class="string">"8"</span> <span class="function">required</span><span class="keyword">&gt;</span>
                                
                                <span class="keyword">&lt;button</span> <span class="function">type</span>=<span class="string">"submit"</span><span class="keyword">&gt;</span>تسجيل<span class="keyword">&lt;/button&gt;</span>
                            <span class="keyword">&lt;/fieldset&gt;</span>
                        <span class="keyword">&lt;/form&gt;</span>
                    </div>
                </div>
            `
        },
        {
            id: '2-7',
            title: 'العناصر الدلالية (Semantic Elements) - تنظيم هيكلي متقدم',
            content: `
                <h3>العناصر الدلالية - بناء هيكل منطقي للصفحات</h3>
                <p>العناصر الدلالية تعطي معنى للهيكل، وتساعد محركات البحث وقارئات الشاشة في فهم المحتوى.</p>
                
                <h4>العناصر الدلالية الرئيسية</h4>
                <div class="code-block">
                    <span class="comment">&lt;!-- الهيكل الدلالي لصفحة نموذجية --&gt;</span>
                    <span class="keyword">&lt;header&gt;</span>
                        <span class="keyword">&lt;h1&gt;</span>عنوان الموقع<span class="keyword">&lt;/h1&gt;</span>
                        <span class="keyword">&lt;nav&gt;</span>
                            <span class="keyword">&lt;ul&gt;</span>
                                <span class="keyword">&lt;li&gt;</span><span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"#"</span><span class="keyword">&gt;</span>الرئيسية<span class="keyword">&lt;/a&gt;&lt;/li&gt;</span>
                                <span class="keyword">&lt;li&gt;</span><span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"#"</span><span class="keyword">&gt;</span>الدروس<span class="keyword">&lt;/a&gt;&lt;/li&gt;</span>
                                <span class="keyword">&lt;li&gt;</span><span class="keyword">&lt;a</span> <span class="function">href</span>=<span class="string">"#"</span><span class="keyword">&gt;</span>اتصل بنا<span class="keyword">&lt;/a&gt;&lt;/li&gt;</span>
                            <span class="keyword">&lt;/ul&gt;</span>
                        <span class="keyword">&lt;/nav&gt;</span>
                    <span class="keyword">&lt;/header&gt;</span>
                    
                    <span class="keyword">&lt;main&gt;</span>
                        <span class="keyword">&lt;section&gt;</span>
                            <span class="keyword">&lt;h2&gt;</span>قسم المقالات<span class="keyword">&lt;/h2&gt;</span>
                            <span class="keyword">&lt;article&gt;</span>
                                <span class="keyword">&lt;h3&gt;</span>مقال: أساسيات البرمجة<span class="keyword">&lt;/h3&gt;</span>
                                <span class="keyword">&lt;p&gt;</span>محتوى المقال...<span class="keyword">&lt;/p&gt;</span>
                            <span class="keyword">&lt;/article&gt;</span>
                            <span class="keyword">&lt;article&gt;</span>
                                <span class="keyword">&lt;h3&gt;</span>مقال: مقدمة في HTML<span class="keyword">&lt;/h3&gt;</span>
                                <span class="keyword">&lt;p&gt;</span>محتوى المقال...<span class="keyword">&lt;/p&gt;</span>
                            <span class="keyword">&lt;/article&gt;</span>
                        <span class="keyword">&lt;/section&gt;</span>
                        
                        <span class="keyword">&lt;aside&gt;</span>
                            <span class="keyword">&lt;
