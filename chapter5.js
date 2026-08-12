const chapter5 = {
    id: 'ch5',
    title: 'المشروع العملي النهائي - بناء تطبيق متكامل',
    description: 'تطبيق كل ما تعلمته في مشروع واحد متكامل خطوة بخطوة',
    lessons: [
        {
            id: '5-1',
            title: 'التخطيط الهندسي - تحليل المشكلة وتحديد المتطلبات',
            content: `
                <h3>التخطيط الهندسي - أساس أي مشروع ناجح</h3>
                <p>قبل كتابة أي كود، يجب التخطيط للمشروع بشكل كامل. هذا يضمن نجاح المشروع وتجنب المشاكل لاحقاً.</p>
                
                <h4>مراحل التخطيط الهندسي</h4>
                <ul>
                    <li><strong>تحليل المشكلة:</strong> فهم المشكلة التي سنحلها بالضبط</li>
                    <li><strong>تحديد المتطلبات:</strong> ما هي الميزات التي يحتاجها المشروع؟</li>
                    <li><strong>تصميم الهيكل:</strong> كيف سيكون شكل التطبيق؟</li>
                    <li><strong>اختيار التقنيات:</strong> ما هي الأدوات والتقنيات المناسبة؟</li>
                    <li><strong>تخطيط الوقت:</strong> جدولة المهام والمراحل الزمنية</li>
                </ul>
                
                <h4>مشروع أكاديمية الكومندا - التحليل</h4>
                <div class="code-block">
                    <span class="comment">// تحليل المشكلة</span>
                    <span class="keyword">const</span> problemAnalysis = {
                        <span class="property">المشكلة</span>: <span class="string">"الحاجة إلى منصة تعلم برمجة متكاملة للمبتدئين"</span>,
                        <span class="property">الحل</span>: <span class="string">"بناء منصة تعلم ذاتي تحتوي على فصول ودروس مع أدوات تفاعلية"</span>,
                        <span class="property">المستخدمون</span>: <span class="string">"المبتدئين في البرمجة"</span>,
                        <span class="property">القيمة</span>: <span class="string">"توفير محتوى منظم وشامل مع أدوات دعم للتعلم"</span>
                    };
                </div>
                
                <h4>تحديد المتطلبات الوظيفية</h4>
                <ul>
                    <li><strong>عرض الفصول والدروس:</strong> قائمة جانبية تعرض الفصول والدروس</li>
                    <li><strong>عرض المحتوى:</strong> عرض شرح الدروس مع أمثلة وأكواد</li>
                    <li><strong>شريط إمكانية الوصول:</strong> تكبير الخط، تباين عالي، قراءة صوتية</li>
                    <li><strong>التفاعل:</strong> استجابة للأحداث (نقر، تمرير، كتابة)</li>
                    <li><strong>حفظ التفضيلات:</strong> حفظ إعدادات المستخدم في LocalStorage</li>
                </ul>
                
                <h4>المتطلبات غير الوظيفية</h4>
                <ul>
                    <li><strong>الأداء:</strong> تحميل سريع واستجابة فورية</li>
                    <li><strong>إمكانية الوصول:</strong> متوافق مع WCAG 2.1</li>
                    <li><strong>التوافق:</strong> يعمل على جميع المتصفحات الحديثة</li>
                    <li><strong>التجاوب:</strong> متوافق مع جميع أحجام الشاشات</li>
                </ul>
                
                <div class="example-box">
                    <strong>📝 أداة التخطيط - قائمة المهام</strong>
                    <div class="code-block">
                        <span class="comment">// قائمة مهام المشروع (Project Backlog)</span>
                        <span class="keyword">const</span> projectTasks = [
                            { <span class="property">id</span>: 1, <span class="property">task</span>: <span class="string">"إنشاء هيكل HTML الأساسي"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 2, <span class="property">task</span>: <span class="string">"تصميم الثيم والتنسيقات CSS"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 3, <span class="property">task</span>: <span class="string">"برمجة شريط إمكانية الوصول"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 4, <span class="property">task</span>: <span class="string">"بناء قائمة الفصول الجانبية"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 5, <span class="property">task</span>: <span class="string">"عرض الدروس والمحتوى"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 6, <span class="property">task</span>: <span class="string">"تفعيل القراءة الصوتية"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 7, <span class="property">task</span>: <span class="string">"حفظ تفضيلات المستخدم"</span>, <span class="property">status</span>: <span class="string">"pending"</span> },
                            { <span class="property">id</span>: 8, <span class="property">task</span>: <span class="string">"تحسين الأداء والاختبار"</span>, <span class="property">status</span>: <span class="string">"pending"</span> }
                        ];
                        
                        <span class="comment">// عرض التقدم</span>
                        <span class="keyword">function</span> <span class="function">showProgress</span>() {
                            <span class="keyword">const</span> done = projectTasks.<span class="function">filter</span>(t => t.status === <span class="string">"done"</span>).length;
                            <span class="keyword">const</span> total = projectTasks.length;
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`التقدم: \${done}/\${total} مهام مكتملة\`</span>);
                            <span class="keyword">return</span> done / total;
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 خطوات التخطيط العملي:</strong>
                    <ol>
                        <li>افهم المشكلة التي تحلها</li>
                        <li>اكتب قائمة بجميع الميزات المطلوبة</li>
                        <li>رتب الميزات حسب الأولوية</li>
                        <li>صمم واجهة المستخدم (رسم تخطيطي)</li>
                        <li>حدد التقنيات والأدوات المناسبة</li>
                        <li>قسم العمل إلى مراحل صغيرة</li>
                        <li>ابدأ التنفيذ واختبر كل مرحلة</li>
                    </ol>
                </div>
            `
        },
        {
            id: '5-2',
            title: 'بناء الهيكل باستخدام HTML5 الدلالي',
            content: `
                <h3>كتابة الهيكل الكامل للمنصة باستخدام HTML5 الدلالي</h3>
                <p>الهيكل الدلالي يحسن SEO ويسهل إمكانية الوصول ويجعل الكود أكثر قراءة.</p>
                
                <h4>هيكل الصفحة الدلالي</h4>
                <div class="code-block">
                    <span class="comment">&lt;!-- هيكل المنصة التعليمية --&gt;</span>
                    <span class="keyword">&lt;!DOCTYPE</span> <span class="function">html</span><span class="keyword">&gt;</span>
                    <span class="keyword">&lt;html</span> <span class="function">lang</span>=<span class="string">"ar"</span> <span class="function">dir</span>=<span class="string">"rtl"</span><span class="keyword">&gt;</span>
                        <span class="keyword">&lt;head&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">charset</span>=<span class="string">"UTF-8"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">name</span>=<span class="string">"viewport"</span> <span class="function">content</span>=<span class="string">"width=device-width, initial-scale=1.0"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;title&gt;</span>أكاديمية الكومندا - منصة التعلم المتكاملة<span class="keyword">&lt;/title&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">name</span>=<span class="string">"description"</span> <span class="function">content</span>=<span class="string">"منصة تعلم برمجة متكاملة للمبتدئين"</span><span class="keyword">&gt;</span>
                            
                            <span class="comment">&lt;!-- Open Graph --&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">property</span>=<span class="string">"og:title"</span> <span class="function">content</span>=<span class="string">"أكاديمية الكومندا"</span><span class="keyword">&gt;</span>
                            <span class="keyword">&lt;meta</span> <span class="function">property</span>=<span class="string">"og:description"</span> <span class="function">content</span>=<span class="string">"تعلم البرمجة من الصفر حتى الاحتراف"</span><span class="keyword">&gt;</span>
                            
                            <span class="keyword">&lt;link</span> <span class="function">rel</span>=<span class="string">"stylesheet"</span> <span class="function">href</span>=<span class="string">"style.css"</span><span class="keyword">&gt;</span>
                        <span class="keyword">&lt;/head&gt;</span>
                        
                        <span class="keyword">&lt;body&gt;</span>
                            <span class="comment">&lt;!-- شريط إمكانية الوصول --&gt;</span>
                            <span class="keyword">&lt;header</span> <span class="function">role</span>=<span class="string">"banner"</span><span class="keyword">&gt;</span>
                                <span class="keyword">&lt;div</span> <span class="function">class</span>=<span class="string">"toolbar"</span> <span class="function">id</span>=<span class="string">"accessibilityToolbar"</span><span class="keyword">&gt;</span>
                                    <span class="keyword">&lt;button</span> <span class="function">id</span>=<span class="string">"fontDec"</span><span class="keyword">&gt;</span>أ-<span class="keyword">&lt;/button&gt;</span>
                                    <span class="keyword">&lt;button</span> <span class="function">id</span>=<span class="string">"fontInc"</span><span class="keyword">&gt;</span>أ+<span class="keyword">&lt;/button&gt;</span>
                                    <span class="keyword">&lt;button</span> <span class="function">id</span>=<span class="string">"contrastToggle"</span><span class="keyword">&gt;</span>🌓 تباين عالي<span class="keyword">&lt;/button&gt;</span>
                                    <span class="keyword">&lt;button</span> <span class="function">id</span>=<span class="string">"speakBtn"</span><span class="keyword">&gt;</span>🔊 استماع<span class="keyword">&lt;/button&gt;</span>
                                    <span class="keyword">&lt;button</span> <span class="function">id</span>=<span class="string">"stopSpeakBtn"</span><span class="keyword">&gt;</span>⏹️ إيقاف<span class="keyword">&lt;/button&gt;</span>
                                <span class="keyword">&lt;/div&gt;</span>
                            <span class="keyword">&lt;/header&gt;</span>
                            
                            <span class="comment">&lt;!-- المحتوى الرئيسي --&gt;</span>
                            <span class="keyword">&lt;main</span> <span class="function">class</span>=<span class="string">"container"</span><span class="keyword">&gt;</span>
                                <span class="comment">&lt;!-- الهيدر الرئيسي --&gt;</span>
                                <span class="keyword">&lt;header</span> <span class="function">class</span>=<span class="string">"main-header"</span><span class="keyword">&gt;</span>
                                    <span class="keyword">&lt;h1&gt;</span>⚡ أكاديمية الكومندا<span class="keyword">&lt;/h1&gt;</span>
                                    <span class="keyword">&lt;p</span> <span class="function">class</span>=<span class="string">"subtitle"</span><span class="keyword">&gt;</span>منصة التعلم الذاتي المتكاملة<span class="keyword">&lt;/p&gt;</span>
                                <span class="keyword">&lt;/header&gt;</span>
                                
                                <span class="comment">&lt;!-- الشبكة الرئيسية --&gt;</span>
                                <span class="keyword">&lt;div</span> <span class="function">class</span>=<span class="string">"academy-grid"</span><span class="keyword">&gt;</span>
                                    <span class="comment">&lt;!-- القائمة الجانبية --&gt;</span>
                                    <span class="keyword">&lt;aside</span> <span class="function">class</span>=<span class="string">"sidebar"</span> <span class="function">id</span>=<span class="string">"chapterSidebar"</span> 
                                           <span class="function">role</span>=<span class="string">"navigation"</span> <span class="function">aria-label</span>=<span class="string">"فصول الأكاديمية"</span><span class="keyword">&gt;</span>
                                        <span class="comment">&lt;!-- سيتم إنشاؤها بواسطة JavaScript --&gt;</span>
                                    <span class="keyword">&lt;/aside&gt;</span>
                                    
                                    <span class="comment">&lt;!-- منطقة المحتوى --&gt;</span>
                                    <span class="keyword">&lt;section</span> <span class="function">class</span>=<span class="string">"main-content"</span> <span class="function">id</span>=<span class="string">"mainContent"</span> 
                                             <span class="function">role</span>=<span class="string">"main"</span> <span class="function">aria-live</span>=<span class="string">"polite"</span><span class="keyword">&gt;</span>
                                        <span class="keyword">&lt;div</span> <span class="function">id</span>=<span class="string">"contentRenderer"</span><span class="keyword">&gt;</span>
                                            <span class="comment">&lt;!-- المحتوى المعروض --&gt;</span>
                                        <span class="keyword">&lt;/div&gt;</span>
                                    <span class="keyword">&lt;/section&gt;</span>
                                <span class="keyword">&lt;/div&gt;</span>
                            <span class="keyword">&lt;/main&gt;</span>
                            
                            <span class="comment">&lt;!-- الفوتر --&gt;</span>
                            <span class="keyword">&lt;footer</span> <span class="function">role</span>=<span class="string">"contentinfo"</span><span class="keyword">&gt;</span>
                                <span class="keyword">&lt;p&gt;</span>© 2026 أكاديمية الكومندا - جميع الحقوق محفوظة<span class="keyword">&lt;/p&gt;</span>
                            <span class="keyword">&lt;/footer&gt;</span>
                            
                            <span class="keyword">&lt;script</span> <span class="function">src</span>=<span class="string">"chapter1.js"</span><span class="keyword">&gt;&lt;/script&gt;</span>
                            <span class="keyword">&lt;script</span> <span class="function">src</span>=<span class="string">"app.js"</span><span class="keyword">&gt;&lt;/script&gt;</span>
                        <span class="keyword">&lt;/body&gt;</span>
                    <span class="keyword">&lt;/html&gt;</span>
                </div>
                
                <div class="note-box">
                    <strong>⭐ أهمية الهيكل الدلالي:</strong>
                    <ul>
                        <li><strong>SEO:</strong> محركات البحث تفهم المحتوى بشكل أفضل</li>
                        <li><strong>إمكانية الوصول:</strong> قارئات الشاشة تتنقل بسهولة</li>
                        <li><strong>الصيانة:</strong> كود نظيف ومنظم يسهل تعديله</li>
                        <li><strong>التوافق:</strong> يدعم التقنيات الحديثة</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-3',
            title: 'تصميم واجهات المستخدم وشريط إمكانية الوصول',
            content: `
                <h3>تصميم واجهات المستخدم وتفعيل شريط إمكانية الوصول</h3>
                <p>واجهة المستخدم الجيدة تجمع بين الجمال والوظيفة، مع مراعاة جميع المستخدمين.</p>
                
                <h4>مبادئ تصميم الواجهات</h4>
                <ul>
                    <li><strong>البساطة:</strong> تصميم نظيف بدون فوضى</li>
                    <li><strong>الوضوح:</strong> محتوى مفهوم وسهل القراءة</li>
                    <li><strong>الاستجابة:</strong> يعمل على جميع الأجهزة</li>
                    <li><strong>الاتساق:</strong> تنسيق موحد في جميع الصفحات</li>
                    <li><strong>التغذية الراجعة:</strong> استجابة فورية لأفعال المستخدم</li>
                </ul>
                
                <h4>شريط إمكانية الوصول - الكود</h4>
                <div class="code-block">
                    <span class="comment">// التحكم في حجم الخط</span>
                    <span class="keyword">let</span> fontSize = 16;
                    
                    <span class="keyword">function</span> <span class="function">changeFontSize</span>(direction) {
                        <span class="keyword">const</span> step = 1.2;
                        <span class="keyword">if</span> (direction === <span class="string">'increase'</span>) {
                            fontSize *= step;
                        } <span class="keyword">else</span> {
                            fontSize /= step;
                            <span class="keyword">if</span> (fontSize < 10) fontSize = 10;
                        }
                        document.documentElement.style.fontSize = fontSize + <span class="string">'px'</span>;
                        localStorage.<span class="function">setItem</span>(<span class="string">'fontSize'</span>, fontSize);
                    }
                    
                    <span class="comment">// التباين العالي</span>
                    <span class="keyword">function</span> <span class="function">toggleContrast</span>() {
                        document.body.classList.<span class="function">toggle</span>(<span class="string">'high-contrast'</span>);
                        <span class="keyword">const</span> isHighContrast = document.body.classList.<span class="function">contains</span>(<span class="string">'high-contrast'</span>);
                        localStorage.<span class="function">setItem</span>(<span class="string">'highContrast'</span>, isHighContrast);
                    }
                    
                    <span class="comment">// القراءة الصوتية</span>
                    <span class="keyword">function</span> <span class="function">speakContent</span>() {
                        <span class="keyword">const</span> content = document.<span class="function">querySelector</span>(<span class="string">'#contentRenderer'</span>);
                        <span class="keyword">const</span> text = content.textContent.<span class="function">trim</span>();
                        <span class="keyword">if</span> (text) {
                            <span class="keyword">const</span> utterance = <span class="keyword">new</span> <span class="function">SpeechSynthesisUtterance</span>(text);
                            utterance.lang = <span class="string">'ar-SA'</span>;
                            utterance.rate = 0.9;
                            window.speechSynthesis.<span class="function">speak</span>(utterance);
                        }
                    }
                    
                    <span class="comment">// ربط الأحداث</span>
                    document.<span class="function">getElementById</span>(<span class="string">'fontInc'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => <span class="function">changeFontSize</span>(<span class="string">'increase'</span>));
                    document.<span class="function">getElementById</span>(<span class="string">'fontDec'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => <span class="function">changeFontSize</span>(<span class="string">'decrease'</span>));
                    document.<span class="function">getElementById</span>(<span class="string">'contrastToggle'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="function">toggleContrast</span>);
                    document.<span class="function">getElementById</span>(<span class="string">'speakBtn'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, <span class="function">speakContent</span>);
                </div>
                
                <div class="example-box">
                    <strong>📝 تصميم متجاوب - مثال عملي</strong>
                    <div class="code-block">
                        <span class="comment">// CSS للتجاوب</span>
                        <span class="selector">/* Mobile First */</span>
                        <span class="selector">.academy-grid</span> {
                            <span class="property">display</span>: <span class="value">grid</span>;
                            <span class="property">grid-template-columns</span>: <span class="value">1fr</span>;
                            <span class="property">gap</span>: <span class="value">1rem</span>;
                        }
                        
                        <span class="selector">@media (min-width: 768px)</span> {
                            <span class="selector">.academy-grid</span> {
                                <span class="property">grid-template-columns</span>: <span class="value">280px 1fr</span>;
                            }
                        }
                        
                        <span class="selector">@media (min-width: 1024px)</span> {
                            <span class="selector">.academy-grid</span> {
                                <span class="property">grid-template-columns</span>: <span class="value">320px 1fr</span>;
                                <span class="property">gap</span>: <span class="value">2rem</span>;
                            }
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>♿ مبادئ إمكانية الوصول:</strong>
                    <ul>
                        <li>استخدم <code>role</code> و <code>aria-*</code> للعناصر الديناميكية</li>
                        <li>تأكد من تباين الألوان الكافي (4.5:1 على الأقل)</li>
                        <li>وفر طريقة للتحكم في حجم الخط</li>
                        <li>دعم التنقل عبر لوحة المفاتيح</li>
                        <li>قدم نصوص بديلة للصور والوسائط</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-4',
            title: 'برمجة أدوات تكبير الخط والتباين',
            content: `
                <h3>برمجة أدوات تكبير/تصغير الخطوط وتغيير التباين</h3>
                <p>هذه الأدوات تجعل التطبيق متاحاً للجميع، بما في ذلك ذوي الاحتياجات الخاصة.</p>
                
                <h4>نظام تكبير الخطوط</h4>
                <div class="code-block">
                    <span class="comment">// نظام إدارة حجم الخط</span>
                    <span class="keyword">class</span> <span class="function">FontManager</span> {
                        <span class="function">constructor</span>() {
                            <span class="keyword">this</span>.minSize = 10;
                            <span class="keyword">this</span>.maxSize = 40;
                            <span class="keyword">this</span>.defaultSize = 16;
                            <span class="keyword">this</span>.currentSize = <span class="keyword">this</span>.<span class="function">loadSize</span>() || <span class="keyword">this</span>.defaultSize;
                            <span class="keyword">this</span>.<span class="function">applySize</span>();
                        }
                        
                        <span class="function">increase</span>() {
                            <span class="keyword">if</span> (<span class="keyword">this</span>.currentSize < <span class="keyword">this</span>.maxSize) {
                                <span class="keyword">this</span>.currentSize *= 1.1;
                                <span class="keyword">this</span>.<span class="function">applySize</span>();
                                <span class="keyword">this</span>.<span class="function">saveSize</span>();
                            }
                        }
                        
                        <span class="function">decrease</span>() {
                            <span class="keyword">if</span> (<span class="keyword">this</span>.currentSize > <span class="keyword">this</span>.minSize) {
                                <span class="keyword">this</span>.currentSize /= 1.1;
                                <span class="keyword">if</span> (<span class="keyword">this</span>.currentSize < <span class="keyword">this</span>.minSize) {
                                    <span class="keyword">this</span>.currentSize = <span class="keyword">this</span>.minSize;
                                }
                                <span class="keyword">this</span>.<span class="function">applySize</span>();
                                <span class="keyword">this</span>.<span class="function">saveSize</span>();
                            }
                        }
                        
                        <span class="function">applySize</span>() {
                            document.documentElement.style.fontSize = <span class="keyword">this</span>.currentSize + <span class="string">'px'</span>;
                            <span class="keyword">this</span>.<span class="function">updateDisplay</span>();
                        }
                        
                        <span class="function">updateDisplay</span>() {
                            <span class="keyword">const</span> display = document.<span class="function">querySelector</span>(<span class="string">'.font-size-display'</span>);
                            <span class="keyword">if</span> (display) {
                                display.textContent = <span class="string">\`حجم الخط: \${Math.<span class="function">round</span>(<span class="keyword">this</span>.currentSize)}px\`</span>;
                            }
                        }
                        
                        <span class="function">saveSize</span>() {
                            localStorage.<span class="function">setItem</span>(<span class="string">'fontSize'</span>, <span class="keyword">this</span>.currentSize);
                        }
                        
                        <span class="function">loadSize</span>() {
                            <span class="keyword">const</span> saved = localStorage.<span class="function">getItem</span>(<span class="string">'fontSize'</span>);
                            <span class="keyword">return</span> saved ? <span class="keyword">parseFloat</span>(saved) : <span class="keyword">null</span>;
                        }
                    }
                </div>
                
                <h4>نظام التباين العالي</h4>
                <div class="code-block">
                    <span class="comment">// نظام إدارة التباين</span>
                    <span class="keyword">class</span> <span class="function">ContrastManager</span> {
                        <span class="function">constructor</span>() {
                            <span class="keyword">this</span>.isHighContrast = <span class="keyword">this</span>.<span class="function">loadState</span>() || <span class="keyword">false</span>;
                            <span class="keyword">this</span>.<span class="function">applyState</span>();
                        }
                        
                        <span class="function">toggle</span>() {
                            <span class="keyword">this</span>.isHighContrast = !<span class="keyword">this</span>.isHighContrast;
                            <span class="keyword">this</span>.<span class="function">applyState</span>();
                            <span class="keyword">this</span>.<span class="function">saveState</span>();
                        }
                        
                        <span class="function">applyState</span>() {
                            <span class="keyword">if</span> (<span class="keyword">this</span>.isHighContrast) {
                                document.body.classList.<span class="function">add</span>(<span class="string">'high-contrast'</span>);
                                <span class="keyword">this</span>.<span class="function">updateButton</span>(<span class="string">'🌓 تباين عادي'</span>);
                            } <span class="keyword">else</span> {
                                document.body.classList.<span class="function">remove</span>(<span class="string">'high-contrast'</span>);
                                <span class="keyword">this</span>.<span class="function">updateButton</span>(<span class="string">'🌓 تباين عالي'</span>);
                            }
                        }
                        
                        <span class="function">updateButton</span>(text) {
                            <span class="keyword">const</span> btn = document.<span class="function">getElementById</span>(<span class="string">'contrastToggle'</span>);
                            <span class="keyword">if</span> (btn) btn.textContent = text;
                        }
                        
                        <span class="function">saveState</span>() {
                            localStorage.<span class="function">setItem</span>(<span class="string">'highContrast'</span>, JSON.<span class="function">stringify</span>(<span class="keyword">this</span>.isHighContrast));
                        }
                        
                        <span class="function">loadState</span>() {
                            <span class="keyword">const</span> saved = localStorage.<span class="function">getItem</span>(<span class="string">'highContrast'</span>);
                            <span class="keyword">return</span> saved ? JSON.<span class="function">parse</span>(saved) : <span class="keyword">null</span>;
                        }
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 دمج الأدوات في التطبيق</strong>
                    <div class="code-block">
                        <span class="comment">// تهيئة الأدوات عند تحميل الصفحة</span>
                        <span class="keyword">const</span> fontManager = <span class="keyword">new</span> <span class="function">FontManager</span>();
                        <span class="keyword">const</span> contrastManager = <span class="keyword">new</span> <span class="function">ContrastManager</span>();
                        
                        <span class="comment">// ربط الأحداث</span>
                        document.<span class="function">getElementById</span>(<span class="string">'fontInc'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => fontManager.<span class="function">increase</span>());
                        document.<span class="function">getElementById</span>(<span class="string">'fontDec'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => fontManager.<span class="function">decrease</span>());
                        document.<span class="function">getElementById</span>(<span class="string">'contrastToggle'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => contrastManager.<span class="function">toggle</span>());
                        
                        <span class="comment">// عرض الحجم الحالي</span>
                        <span class="keyword">const</span> sizeDisplay = document.<span class="function">createElement</span>(<span class="string">'span'</span>);
                        sizeDisplay.className = <span class="string">'font-size-display'</span>;
                        sizeDisplay.textContent = <span class="string">\`حجم الخط: \${Math.<span class="function">round</span>(fontManager.currentSize)}px\`</span>;
                        document.<span class="function">querySelector</span>(<span class="string">'.toolbar'</span>).<span class="function">appendChild</span>(sizeDisplay);
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح لتحسين الأدوات:</strong>
                    <ul>
                        <li>احفظ تفضيلات المستخدم في LocalStorage</li>
                        <li>وفر ردود فعل بصرية لتأكيد التغييرات</li>
                        <li>اختبر الأدوات مع مستخدمين حقيقيين</li>
                        <li>قدم إرشادات واضحة لاستخدام الأدوات</li>
                        <li>تأكد من أن الأدوات تعمل على جميع الأجهزة</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-5',
            title: 'تفعيل محرك القراءة الصوتية',
            content: `
                <h3>تفعيل محرك القراءة الصوتية لقراءة محتوى الدروس</h3>
                <p>محرك القراءة الصوتية يحسن إمكانية الوصول ويساعد في التعلم السمعي.</p>
                
                <h4>محرك القراءة الكامل</h4>
                <div class="code-block">
                    <span class="comment">// محرك القراءة الصوتية المتقدم</span>
                    <span class="keyword">class</span> <span class="function">SpeechEngine</span> {
                        <span class="function">constructor</span>() {
                            <span class="keyword">this</span>.utterance = <span class="keyword">null</span>;
                            <span class="keyword">this</span>.isSpeaking = <span class="keyword">false</span>;
                            <span class="keyword">this</span>.isPaused = <span class="keyword">false</span>;
                            <span class="keyword">this</span>.voices = [];
                            <span class="keyword">this</span>.selectedVoice = <span class="keyword">null</span>;
                            <span class="keyword">this</span>.<span class="function">initVoices</span>();
                        }
                        
                        <span class="function">initVoices</span>() {
                            <span class="keyword">if</span> (<span class="string">'speechSynthesis'</span> <span class="keyword">in</span> window) {
                                <span class="keyword">this</span>.voices = window.speechSynthesis.<span class="function">getVoices</span>();
                                window.speechSynthesis.<span class="function">addEventListener</span>(<span class="string">'voiceschanged'</span>, () => {
                                    <span class="keyword">this</span>.voices = window.speechSynthesis.<span class="function">getVoices</span>();
                                    <span class="keyword">this</span>.<span class="function">selectArabicVoice</span>();
                                });
                                <span class="keyword">this</span>.<span class="function">selectArabicVoice</span>();
                            }
                        }
                        
                        <span class="function">selectArabicVoice</span>() {
                            <span class="keyword">const</span> arabicVoice = <span class="keyword">this</span>.voices.<span class="function">find</span>(v => v.lang.<span class="function">startsWith</span>(<span class="string">'ar'</span>));
                            <span class="keyword">if</span> (arabicVoice) {
                                <span class="keyword">this</span>.selectedVoice = arabicVoice;
                            }
                        }
                        
                        <span class="function">speak</span>(text, rate = 0.9, pitch = 1) {
                            <span class="keyword">if</span> (!text) <span class="keyword">return</span>;
                            
                            <span class="comment">// إيقاف أي قراءة جارية</span>
                            <span class="keyword">this</span>.<span class="function">stop</span>();
                            
                            <span class="keyword">this</span>.utterance = <span class="keyword">new</span> <span class="function">SpeechSynthesisUtterance</span>(text);
                            <span class="keyword">this</span>.utterance.lang = <span class="string">'ar-SA'</span>;
                            <span class="keyword">this</span>.utterance.rate = rate;
                            <span class="keyword">this</span>.utterance.pitch = pitch;
                            <span class="keyword">this</span>.utterance.volume = 1;
                            
                            <span class="keyword">if</span> (<span class="keyword">this</span>.selectedVoice) {
                                <span class="keyword">this</span>.utterance.voice = <span class="keyword">this</span>.selectedVoice;
                            }
                            
                            <span class="keyword">this</span>.utterance.<span class="function">addEventListener</span>(<span class="string">'start'</span>, () => {
                                <span class="keyword">this</span>.isSpeaking = <span class="keyword">true</span>;
                                <span class="keyword">this</span>.<span class="function">updateUI</span>(<span class="string">'▶️ جاري القراءة...'</span>);
                            });
                            
                            <span class="keyword">this</span>.utterance.<span class="function">addEventListener</span>(<span class="string">'end'</span>, () => {
                                <span class="keyword">this</span>.isSpeaking = <span class="keyword">false</span>;
                                <span class="keyword">this</span>.<span class="function">updateUI</span>(<span class="string">'🔊 استماع'</span>);
                            });
                            
                            <span class="keyword">this</span>.utterance.<span class="function">addEventListener</span>(<span class="string">'error'</span>, (e) => {
                                <span class="keyword">this</span>.isSpeaking = <span class="keyword">false</span>;
                                <span class="keyword">this</span>.<span class="function">updateUI</span>(<span class="string">'⚠️ خطأ في القراءة'</span>);
                                <span class="function">console</span>.<span class="function">error</span>(<span class="string">'خطأ في النطق:'</span>, e);
                            });
                            
                            window.speechSynthesis.<span class="function">speak</span>(<span class="keyword">this</span>.utterance);
                        }
                        
                        <span class="function">stop</span>() {
                            <span class="keyword">if</span> (window.speechSynthesis) {
                                window.speechSynthesis.<span class="function">cancel</span>();
                                <span class="keyword">this</span>.isSpeaking = <span class="keyword">false</span>;
                                <span class="keyword">this</span>.isPaused = <span class="keyword">false</span>;
                                <span class="keyword">this</span>.<span class="function">updateUI</span>(<span class="string">'🔊 استماع'</span>);
                            }
                        }
                        
                        <span class="function">pause</span>() {
                            <span class="keyword">if</span> (window.speechSynthesis && <span class="keyword">this</span>.isSpeaking) {
                                window.speechSynthesis.<span class="function">pause</span>();
                                <span class="keyword">this</span>.isPaused = <span class="keyword">true</span>;
                                <span class="keyword">this</span>.<span class="function">updateUI</span>(<span class="string">'⏸️ متوقف مؤقتاً'</span>);
                            }
                        }
                        
                        <span class="function">resume</span>() {
                            <span class="keyword">if</span> (window.speechSynthesis && <span class="keyword">this</span>.isPaused) {
                                window.speechSynthesis.<span class="function">resume</span>();
                                <span class="keyword">this</span>.isPaused = <span class="keyword">false</span>;
                                <span class="keyword">this</span>.<span class="function">updateUI</span>(<span class="string">'▶️ جاري القراءة...'</span>);
                            }
                        }
                        
                        <span class="function">updateUI</span>(status) {
                            <span class="keyword">const</span> btn = document.<span class="function">getElementById</span>(<span class="string">'speakBtn'</span>);
                            <span class="keyword">if</span> (btn) btn.textContent = status;
                        }
                        
                        <span class="function">getContentToRead</span>() {
                            <span class="keyword">const</span> content = document.<span class="function">querySelector</span>(<span class="string">'#contentRenderer'</span>);
                            <span class="keyword">if</span> (content) {
                                <span class="keyword">return</span> content.textContent.<span class="function">trim</span>();
                            }
                            <span class="keyword">return</span> <span class="string">''</span>;
                        }
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 استخدام المحرك في التطبيق</strong>
                    <div class="code-block">
                        <span class="comment">// تهيئة محرك القراءة</span>
                        <span class="keyword">const</span> speechEngine = <span class="keyword">new</span> <span class="function">SpeechEngine</span>();
                        
                        <span class="comment">// ربط الأحداث</span>
                        document.<span class="function">getElementById</span>(<span class="string">'speakBtn'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
                            <span class="keyword">const</span> text = speechEngine.<span class="function">getContentToRead</span>();
                            <span class="keyword">if</span> (text) {
                                speechEngine.<span class="function">speak</span>(text);
                            } <span class="keyword">else</span> {
                                <span class="function">alert</span>(<span class="string">'لا يوجد محتوى للقراءة'</span>);
                            }
                        });
                        
                        document.<span class="function">getElementById</span>(<span class="string">'stopSpeakBtn'</span>).<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
                            speechEngine.<span class="function">stop</span>();
                        });
                        
                        <span class="comment">// إضافة أزرار إضافية للتحكم</span>
                        <span class="keyword">const</span> pauseBtn = document.<span class="function">createElement</span>(<span class="string">'button'</span>);
                        pauseBtn.textContent = <span class="string">'⏸️ إيقاف مؤقت'</span>;
                        pauseBtn.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => speechEngine.<span class="function">pause</span>());
                        document.<span class="function">querySelector</span>(<span class="string">'.toolbar'</span>).<span class="function">appendChild</span>(pauseBtn);
                        
                        <span class="keyword">const</span> resumeBtn = document.<span class="function">createElement</span>(<span class="string">'button'</span>);
                        resumeBtn.textContent = <span class="string">'▶️ استئناف'</span>;
                        resumeBtn.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => speechEngine.<span class="function">resume</span>());
                        document.<span class="function">querySelector</span>(<span class="string">'.toolbar'</span>).<span class="function">appendChild</span>(resumeBtn);
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح للقراءة الصوتية:</strong>
                    <ul>
                        <li>اختبر على متصفحات مختلفة (Chrome, Firefox, Safari)</li>
                        <li>وفر تحكماً في سرعة القراءة</li>
                        <li>أضف إشارة بصرية أثناء القراءة</li>
                        <li>تأكد من أن النص واضح ومنظم للقراءة</li>
                        <li>اختبر مع مستخدمين حقيقيين</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-6',
            title: 'ربط بيانات الفصول والدروس ديناميكياً',
            content: `
                <h3>ربط بيانات الفصول والدروس ديناميكياً في لوحة عرض تفاعلية</h3>
                <p>العرض الديناميكي للبيانات هو قلب أي تطبيق حديث، حيث يتم تحميل المحتوى وعرضه بدون إعادة تحميل الصفحة.</p>
                
                <h4>نظام إدارة المحتوى الديناميكي</h4>
                <div class="code-block">
                    <span class="comment">// مدير المحتوى الديناميكي</span>
                    <span class="keyword">class</span> <span class="function">ContentManager</span> {
                        <span class="function">constructor</span>() {
                            <span class="keyword">this</span>.chapters = [];
                            <span class="keyword">this</span>.currentChapter = <span class="keyword">null</span>;
                            <span class="keyword">this</span>.currentLesson = <span class="keyword">null</span>;
                            <span class="keyword">this</span>.<span class="function">loadChapters</span>();
                        }
                        
                        <span class="function">loadChapters</span>() {
                            <span class="keyword">this</span>.chapters = [
                                chapter1,
                                chapter2,
                                chapter3,
                                chapter4,
                                chapter5
                            ];
                        }
                        
                        <span class="function">renderSidebar</span>() {
                            <span class="keyword">const</span> sidebar = document.<span class="function">getElementById</span>(<span class="string">'chapterSidebar'</span>);
                            sidebar.innerHTML = <span class="string">''</span>;
                            
                            <span class="keyword">this</span>.chapters.<span class="function">forEach</span>((chapter, index) => {
                                <span class="keyword">const</span> accordion = document.<span class="function">createElement</span>(<span class="string">'div'</span>);
                                accordion.className = <span class="string">'chapter-accordion'</span>;
                                
                                <span class="comment">// رأس الفصل</span>
                                <span class="keyword">const</span> header = document.<span class="function">createElement</span>(<span class="string">'div'</span>);
                                header.className = <span class="string">'chapter-header'</span>;
                                header.innerHTML = <span class="string">\`
                                    <span><span class="chapter-num">\${index + 1}.</span> \${chapter.title}</span>
                                    <span class="arrow">▼</span>
                                \`</span>;
                                
                                <span class="comment">// قائمة الدروس</span>
                                <span class="keyword">const</span> lessonsContainer = document.<span class="function">createElement</span>(<span class="string">'div'</span>);
                                lessonsContainer.className = <span class="string">'chapter-lessons'</span>;
                                
                                chapter.lessons.<span class="function">forEach</span>((lesson, lessonIndex) => {
                                    <span class="keyword">const</span> lessonItem = document.<span class="function">createElement</span>(<span class="string">'div'</span>);
                                    lessonItem.className = <span class="string">'lesson-item-sidebar'</span>;
                                    lessonItem.innerHTML = <span class="string">\`
                                        <span class="lesson-num">\${lessonIndex + 1}.</span> \${lesson.title}
                                    \`</span>;
                                    lessonItem.dataset.chapterId = chapter.id;
                                    lessonItem.dataset.lessonId = lesson.id;
                                    
                                    lessonItem.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
                                        <span class="keyword">this</span>.<span class="function">loadLesson</span>(chapter.id, lesson.id);
                                    });
                                    
                                    lessonsContainer.<span class="function">appendChild</span>(lessonItem);
                                });
                                
                                <span class="comment">// فتح/غلق الفصل</span>
                                header.<span class="function">addEventListener</span>(<span class="string">'click'</span>, () => {
                                    header.classList.<span class="function">toggle</span>(<span class="string">'active'</span>);
                                    lessonsContainer.classList.<span class="function">toggle</span>(<span class="string">'open'</span>);
                                    <span class="keyword">const</span> arrow = header.<span class="function">querySelector</span>(<span class="string">'.arrow'</span>);
                                    arrow.classList.<span class="function">toggle</span>(<span class="string">'open'</span>);
                                });
                                
                                accordion.<span class="function">appendChild</span>(header);
                                accordion.<span class="function">appendChild</span>(lessonsContainer);
                                sidebar.<span class="function">appendChild</span>(accordion);
                            });
                        }
                        
                        <span class="function">loadLesson</span>(chapterId, lessonId) {
                            <span class="keyword">const</span> chapter = <span class="keyword">this</span>.chapters.<span class="function">find</span>(c => c.id === chapterId);
                            <span class="keyword">if</span> (!chapter) <span class="keyword">return</span>;
                            
                            <span class="keyword">const</span> lesson = chapter.lessons.<span class="function">find</span>(l => l.id === lessonId);
                            <span class="keyword">if</span> (!lesson) <span class="keyword">return</span>;
                            
                            <span class="keyword">this</span>.currentChapter = chapter;
                            <span class="keyword">this</span>.currentLesson = lesson;
                            <span class="keyword">this</span>.<span class="function">renderContent</span>(chapter, lesson);
                            <span class="keyword">this</span>.<span class="function">highlightActiveLesson</span>(chapterId, lessonId);
                            
                            <span class="comment">// تحديث عنوان الصفحة</span>
                            document.title = <span class="string">\`\${lesson.title} - أكاديمية الكومندا\`</span>;
                        }
                        
                        <span class="function">renderContent</span>(chapter, lesson) {
                            <span class="keyword">const</span> container = document.<span class="function">getElementById</span>(<span class="string">'contentRenderer'</span>);
                            container.innerHTML = <span class="string">\`
                                <h2>\${lesson.title}</h2>
                                <div class="lesson-content">
                                    \${lesson.content}
                                </div>
                            \`</span>;
                            
                            <span class="comment">// إعادة تطبيق إعدادات إمكانية الوصول</span>
                            <span class="keyword">this</span>.<span class="function">reapplyAccessibility</span>();
                        }
                        
                        <span class="function">highlightActiveLesson</span>(chapterId, lessonId) {
                            document.<span class="function">querySelectorAll</span>(<span class="string">'.lesson-item-sidebar'</span>).<span class="function">forEach</span>(item => {
                                item.classList.<span class="function">remove</span>(<span class="string">'active'</span>);
                                <span class="keyword">if</span> (item.dataset.chapterId === chapterId && item.dataset.lessonId === lessonId) {
                                    item.classList.<span class="function">add</span>(<span class="string">'active'</span>);
                                }
                            });
                        }
                        
                        <span class="function">reapplyAccessibility</span>() {
                            <span class="comment">// إعادة تطبيق حجم الخط</span>
                            <span class="keyword">const</span> savedFont = localStorage.<span class="function">getItem</span>(<span class="string">'fontSize'</span>);
                            <span class="keyword">if</span> (savedFont) {
                                document.documentElement.style.fontSize = savedFont + <span class="string">'px'</span>;
                            }
                            
                            <span class="comment">// إعادة تطبيق التباين</span>
                            <span class="keyword">const</span> savedContrast = localStorage.<span class="function">getItem</span>(<span class="string">'highContrast'</span>);
                            <span class="keyword">if</span> (savedContrast === <span class="string">'true'</span>) {
                                document.body.classList.<span class="function">add</span>(<span class="string">'high-contrast'</span>);
                            }
                        }
                        
                        <span class="function">loadFirstLesson</span>() {
                            <span class="keyword">if</span> (<span class="keyword">this</span>.chapters.length > 0 && <span class="keyword">this</span>.chapters[0].lessons.length > 0) {
                                <span class="keyword">const</span> firstChapter = <span class="keyword">this</span>.chapters[0];
                                <span class="keyword">const</span> firstLesson = firstChapter.lessons[0];
                                <span class="keyword">this</span>.<span class="function">loadLesson</span>(firstChapter.id, firstLesson.id);
                            }
                        }
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 تهيئة وإدارة المحتوى</strong>
                    <div class="code-block">
                        <span class="comment">// تهيئة مدير المحتوى</span>
                        <span class="keyword">const</span> contentManager = <span class="keyword">new</span> <span class="function">ContentManager</span>();
                        contentManager.<span class="function">renderSidebar</span>();
                        
                        <span class="comment">// تحميل أول درس أو استعادة آخر درس</span>
                        <span class="keyword">const</span> lastLesson = localStorage.<span class="function">getItem</span>(<span class="string">'lastLesson'</span>);
                        <span class="keyword">if</span> (lastLesson) {
                            <span class="keyword">try</span> {
                                <span class="keyword">const</span> { chapterId, lessonId } = JSON.<span class="function">parse</span>(lastLesson);
                                contentManager.<span class="function">loadLesson</span>(chapterId, lessonId);
                            } <span class="keyword">catch</span> {
                                contentManager.<span class="function">loadFirstLesson</span>();
                            }
                        } <span class="keyword">else</span> {
                            contentManager.<span class="function">loadFirstLesson</span>();
                        }
                        
                        <span class="comment">// حفظ آخر درس عند التغيير</span>
                        document.<span class="function">addEventListener</span>(<span class="string">'lessonChanged'</span>, (e) => {
                            localStorage.<span class="function">setItem</span>(<span class="string">'lastLesson'</span>, JSON.<span class="function">stringify</span>({
                                <span class="property">chapterId</span>: e.detail.chapterId,
                                <span class="property">lessonId</span>: e.detail.lessonId
                            }));
                        });
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح لإدارة المحتوى الديناميكي:</strong>
                    <ul>
                        <li>استخدم <code>data-*</code> attributes لربط البيانات</li>
                        <li>احفظ تقدم المستخدم في LocalStorage</li>
                        <li>استخدم Event-driven architecture للتفاعل</li>
                        <li>وفر تجربة سلسة بدون إعادة تحميل الصفحة</li>
                        <li>اختبر الأداء مع كميات كبيرة من البيانات</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-7',
            title: 'تحسين الأداء واختبار السرعة',
            content: `
                <h3>تنقية الأكواد واختبار الأداء وسرعة التحميل</h3>
                <p>تحسين الأداء هو جزء أساسي من تطوير التطبيقات الحديثة، حيث يؤثر على تجربة المستخدم بشكل كبير.</p>
                
                <h4>استراتيجيات تحسين الأداء</h4>
                <ul>
                    <li><strong>تقليل حجم الملفات:</strong> ضغط CSS و JavaScript و HTML</li>
                    <li><strong>تحسين الصور:</strong> استخدام صيغ حديثة (WebP) وتقليل الحجم</li>
                    <li><strong>التحميل البطيء (Lazy Loading):</strong> تحميل المحتوى عند الحاجة</li>
                    <li><strong>التخزين المؤقت (Caching):</strong> استخدام LocalStorage و Cache API</li>
                    <li><strong>تحسين الشيفرة:</strong> إزالة الكود غير المستخدم وتبسيط المنطق</li>
                </ul>
                
                <h4>أدوات قياس الأداء</h4>
                <div class="code-block">
                    <span class="comment">// 1. قياس وقت التحميل</span>
                    <span class="keyword">const</span> loadTime = performance.<span class="function">now</span>();
                    window.<span class="function">addEventListener</span>(<span class="string">'load'</span>, () => {
                        <span class="keyword">const</span> endTime = performance.<span class="function">now</span>();
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`وقت التحميل: \${(endTime - loadTime).<span class="function">toFixed</span>(2)}ms\`</span>);
                    });
                    
                    <span class="comment">// 2. قياس وقت العرض</span>
                    <span class="keyword">const</span> renderStart = performance.<span class="function">now</span>();
                    <span class="comment">// ... تنفيذ عمليات العرض ...</span>
                    <span class="keyword">const</span> renderEnd = performance.<span class="function">now</span>();
                    <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`وقت العرض: \${(renderEnd - renderStart).<span class="function">toFixed</span>(2)}ms\`</span>);
                    
                    <span class="comment">// 3. تحليل الذاكرة</span>
                    <span class="keyword">if</span> (performance.memory) {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`الذاكرة المستخدمة: \${(performance.memory.usedJSHeapSize / 1024 / 1024).<span class="function">toFixed</span>(2)} MB\`</span>);
                    }
                </div>
                
                <h4>تقنيات تحسين الكود</h4>
                <div class="code-block">
                    <span class="comment">// 1. استخدام debounce للأحداث المتكررة</span>
                    <span class="keyword">function</span> <span class="function">debounce</span>(func, wait) {
                        <span class="keyword">let</span> timeout;
                        <span class="keyword">return</span> <span class="keyword">function</span>(...args) {
                            <span class="keyword">clearTimeout</span>(timeout);
                            timeout = <span class="keyword">setTimeout</span>(() => func.<span class="function">apply</span>(<span class="keyword">this</span>, args), wait);
                        };
                    }
                    
                    <span class="comment">// استخدام debounce للتمرير</span>
                    window.<span class="function">addEventListener</span>(<span class="string">'scroll'</span>, <span class="function">debounce</span>(() => {
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">'تم التمرير'</span>);
                    }, 200));
                    
                    <span class="comment">// 2. استخدام throttle للأحداث المتكررة</span>
                    <span class="keyword">function</span> <span class="function">throttle</span>(func, limit) {
                        <span class="keyword">let</span> inThrottle;
                        <span class="keyword">return</span> <span class="keyword">function</span>(...args) {
                            <span class="keyword">if</span> (!inThrottle) {
                                func.<span class="function">apply</span>(<span class="keyword">this</span>, args);
                                inThrottle = <span class="keyword">true</span>;
                                <span class="keyword">setTimeout</span>(() => inThrottle = <span class="keyword">false</span>, limit);
                            }
                        };
                    }
                    
                    <span class="comment">// 3. تجنب التلاعب المباشر بـ DOM</span>
                    <span class="comment">// سيء:</span>
                    <span class="keyword">for</span> (<span class="keyword">let</span> i = 0; i < 1000; i++) {
                        document.body.innerHTML += <span class="string">'&lt;div&gt;عنصر&lt;/div&gt;'</span>;
                    }
                    
                    <span class="comment">// جيد:</span>
                    <span class="keyword">const</span> fragment = document.<span class="function">createDocumentFragment</span>();
                    <span class="keyword">for</span> (<span class="keyword">let</span> i = 0; i < 1000; i++) {
                        <span class="keyword">const</span> div = document.<span class="function">createElement</span>(<span class="string">'div'</span>);
                        div.textContent = <span class="string">'عنصر'</span>;
                        fragment.<span class="function">appendChild</span>(div);
                    }
                    document.body.<span class="function">appendChild</span>(fragment);
                </div>
                
                <div class="example-box">
                    <strong>📝 أدوات اختبار الأداء</strong>
                    <div class="code-block">
                        <span class="comment">// أداة اختبار أداء مدمجة</span>
                        <span class="keyword">class</span> <span class="function">PerformanceTester</span> {
                            <span class="function">constructor</span>() {
                                <span class="keyword">this</span>.metrics = {};
                            }
                            
                            <span class="function">start</span>(name) {
                                <span class="keyword">this</span>.metrics[name] = performance.<span class="function">now</span>();
                            }
                            
                            <span class="function">end</span>(name) {
                                <span class="keyword">if</span> (<span class="keyword">this</span>.metrics[name]) {
                                    <span class="keyword">const</span> duration = performance.<span class="function">now</span>() - <span class="keyword">this</span>.metrics[name];
                                    <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`\${name}: \${duration.<span class="function">toFixed</span>(2)}ms\`</span>);
                                    <span class="keyword">delete</span> <span class="keyword">this</span>.metrics[name];
                                    <span class="keyword">return</span> duration;
                                }
                                <span class="keyword">return</span> <span class="keyword">null</span>;
                            }
                            
                            <span class="function">measure</span>(name, fn) {
                                <span class="keyword">this</span>.<span class="function">start</span>(name);
                                <span class="keyword">const</span> result = <span class="function">fn</span>();
                                <span class="keyword">this</span>.<span class="function">end</span>(name);
                                <span class="keyword">return</span> result;
                            }
                        }
                        
                        <span class="comment">// استخدام الأداة</span>
                        <span class="keyword">const</span> tester = <span class="keyword">new</span> <span class="function">PerformanceTester</span>();
                        tester.<span class="function">measure</span>(<span class="string">'تحميل البيانات'</span>, () => {
                            <span class="comment">// تحميل البيانات</span>
                            <span class="keyword">return</span> chapter1.lessons;
                        });
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 نصائح لتحسين الأداء:</strong>
                    <ul>
                        <li>استخدم أدوات Chrome DevTools (Performance, Lighthouse)</li>
                        <li>اختبر على أجهزة مختلفة (هواتف، أجهزة ضعيفة)</li>
                        <li>راقب استخدام الذاكرة (Memory Leaks)</li>
                        <li>استخدم CDN للمكتبات الخارجية</li>
                        <li>قم بتقليل عدد طلبات HTTP</li>
                        <li>استخدم Service Workers للتخزين المؤقت</li>
                    </ul>
                </div>
            `
        },
        {
            id: '5-8',
            title: 'رفع المشروع على الاستضافة السحابية',
            content: `
                <h3>رفع المشروع على الاستضافة السحابية وتفعيل النطاق الحي</h3>
                <p>نشر المشروع على الإنترنت هو الخطوة الأخيرة لجعله متاحاً للجميع.</p>
                
                <h4>خطوات النشر على الاستضافة</h4>
                <ul>
                    <li><strong>اختيار خدمة الاستضافة:</strong> Netlify، Vercel، GitHub Pages، أو Hostinger</li>
                    <li><strong>رفع الملفات:</strong> استخدام FTP أو Git أو السحب والإفلات</li>
                    <li><strong>إعداد النطاق:</strong> ربط النطاق الخاص بك مع الاستضافة</li>
                    <li><strong>تفعيل SSL:</strong> تأمين الموقع باستخدام شهادة HTTPS</li>
                    <li><strong>اختبار الموقع:</strong> التأكد من أن كل شيء يعمل بشكل صحيح</li>
                </ul>
                
                <h4>نشر على Netlify (مجاني وسهل)</h4>
                <div class="code-block">
                    <span class="comment">// 1. إنشاء حساب على Netlify</span>
                    <span class="comment">// 2. سحب المشروع من GitHub أو رفع الملفات مباشرة</span>
                    <span class="comment">// 3. إعدادات النشر:</span>
                    
                    <span class="comment">// ملف netlify.toml (اختياري)</span>
                    <span class="string">[build]</span>
                    <span class="string">  publish = "."</span>
                    <span class="string">  command = "echo 'Build complete'"</span>
                    
                    <span class="string">[[redirects]]</span>
                    <span class="string">  from = "/*"</span>
                    <span class="string">  to = "/index.html"</span>
                    <span class="string">  status = 200</span>
                </div>
                
                <h4>نشر على GitHub Pages</h4>
                <div class="code-block">
                    <span class="comment">// 1. إنشاء مستودع على GitHub</span>
                    <span class="comment">// 2. رفع ملفات المشروع</span>
                    <span class="comment">// 3. تفعيل GitHub Pages من الإعدادات</span>
                    
                    <span class="comment">// الأوامر الأساسية</span>
                    <span class="keyword">git</span> init
                    <span class="keyword">git</span> add .
                    <span class="keyword">git</span> commit -m <span class="string">"Initial commit"</span>
                    <span class="keyword">git</span> remote add origin https://github.com/username/repo.git
                    <span class="keyword">git</span> push -u origin main
                </div>
                
                <h4>نشر على Vercel</h4>
                <div class="code-block">
                    <span class="comment">// تثبيت Vercel CLI</span>
                    <span class="keyword">npm</span> install -g vercel
                    
                    <span class="comment">// نشر المشروع</span>
                    <span class="keyword">vercel</span>
                    
                    <span class="comment">// نشر للإنتاج</span>
                    <span class="keyword">vercel</span> --prod
                </div>
                
                <div class="example-box">
                    <strong>📝 قائمة التحقق قبل النشر</strong>
                    <div class="code-block">
                        <span class="keyword">const</span> deploymentChecklist = {
                            <span class="property">code</span>: {
                                <span class="property">validation</span>: <span class="string">"✅ لا توجد أخطاء في الكود"</span>,
                                <span class="property">optimization</span>: <span class="string">"✅ تم تحسين الأداء"</span>,
                                <span class="property">testing</span>: <span class="string">"✅ تم اختبار الموقع"</span>
                            },
                            <span class="property">assets</span>: {
                                <span class="property">images</span>: <span class="string">"✅ تم تحسين الصور"</span>,
                                <span class="property">files</span>: <span class="string">"✅ جميع الملفات مرفوعة"</span>,
                                <span class="property">links</span>: <span class="string">"✅ جميع الروابط تعمل"</span>
                            },
                            <span class="property">seo</span>: {
                                <span class="property">title</span>: <span class="string">"✅ العنوان محسن"</span>,
                                <span class="property">description</span>: <span class="string">"✅ الوصف محسن"</span>,
                                <span class="property">og</span>: <span class="string">"✅ Open Graph مفعل"</span>
                            },
                            <span class="property">accessibility</span>: {
                                <span class="property">contrast</span>: <span class="string">"✅ التباين مناسب"</span>,
                                <span class="property">keyboard</span>: <span class="string">"✅ التنقل يعمل"</span>,
                                <span class="property">screenReader</span>: <span class="string">"✅ متوافق مع قارئات الشاشة"</span>
                            },
                            <span class="property">performance</span>: {
                                <span class="property">speed</span>: <span class="string">"✅ سرعة التحميل جيدة"</span>,
                                <span class="property">mobile</span>: <span class="string">"✅ متجاوب مع الهواتف"</span>,
                                <span class="property">caching</span>: <span class="string">"✅ التخزين المؤقت مفعل"</span>
                            }
                        };
                        
                        <span class="comment">// عرض قائمة التحقق</span>
                        <span class="function">console</span>.<span class="function">log</span>(<span class="string">'📋 قائمة التحقق للنشر:'</span>);
                        <span class="keyword">for</span> (<span class="keyword">const</span> category <span class="keyword">in</span> deploymentChecklist) {
                            <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`\${category}:\`</span>);
                            <span class="keyword">const</span> items = deploymentChecklist[category];
                            <span class="keyword">for</span> (<span class="keyword">const</span> key <span class="keyword">in</span> items) {
                                <span class="function">console</span>.<span class="function">log</span>(<span class="string">\`  \${items[key]}\`</span>);
                            }
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🚀 نصائح للنشر الاحترافي:</strong>
                    <ul>
                        <li>استخدم HTTPS دائماً لتأمين الموقع</li>
                        <li>أضف Google Analytics لمراقبة الزوار</li>
                        <li>أضف sitemap.xml لتحسين SEO</li>
                        <li>اختبر الموقع على أجهزة ومتصفحات مختلفة</li>
                        <li>وفر وسيلة للتواصل مع المستخدمين</li>
                        <li>قم بعمل نسخ احتياطية منتظمة</li>
                    </ul>
                </div>
            `
        }
    ]
};
