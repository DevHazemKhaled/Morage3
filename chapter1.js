const chapter1 = {
    id: 'ch1',
    title: 'أساسيات البرمجة والويب',
    description: 'افهم كيف يعمل الكمبيوتر والإنترنت، ولماذا نتعلم البرمجة، وما هي الخوارزميات',
    lessons: [
        {
            id: '1-1',
            title: 'ما هو الكمبيوتر وكيف يفهمنا؟',
            content: `
                <h3>فهم الكمبيوتر وآلية عمله</h3>
                <p>الكمبيوتر هو آلة إلكترونية تستقبل البيانات، تعالجها، وتخرج لنا نتائج مفيدة. لكن كيف يفهم الكمبيوتر لغتنا؟</p>
                
                <h4>لغة الكمبيوتر الأساسية</h4>
                <p>الكمبيوتر يفهم لغة واحدة فقط: <strong>لغة الآلة</strong> (Machine Language) والتي تتكون من 0 و 1 فقط. كل شيء نراه على الشاشة هو في النهاية ترجمة لهذه الأصفار والواحدات.</p>
                
                <div class="code-block">
                    <span class="comment">// مثال: تمثيل الحرف "A" في لغة الآلة</span>
                    <span class="string">01000001</span>
                </div>
                
                <div class="note-box">
                    <strong>💡 معلومة مهمة:</strong> كل حرف، رقم، أو صورة يتم تخزينها في الكمبيوتر على شكل 0 و 1. هذا هو أساس كل شيء!
                </div>
                
                <h4>مكونات الكمبيوتر الأساسية</h4>
                <ul>
                    <li><strong>المعالج (CPU):</strong> عقل الكمبيوتر الذي ينفذ التعليمات</li>
                    <li><strong>الذاكرة العشوائية (RAM):</strong> الذاكرة المؤقتة للتشغيل السريع</li>
                    <li><strong>القرص الصلب (Storage):</strong> التخزين الدائم للبيانات</li>
                    <li><strong>المدخلات والمخرجات (I/O):</strong> لوحة المفاتيح، الشاشة، الماوس، إلخ</li>
                </ul>
                
                <div class="example-box">
                    <strong>📝 مثال عملي:</strong>
                    <p>عندما تضغط على حرف "A" في لوحة المفاتيح:</p>
                    <ol>
                        <li>اللوحة ترسل إشارة كهربائية للمعالج</li>
                        <li>المعالج يترجمها إلى رمز ASCII (65)</li>
                        <li>يتم تحويل 65 إلى النظام الثنائي: 1000001</li>
                        <li>يتم تخزينها في الذاكرة</li>
                        <li>يتم عرضها على الشاشة كحرف "A"</li>
                    </ol>
                </div>
                
                <h4>ما هي لغات البرمجة؟</h4>
                <p>لغات البرمجة هي وسيط بين لغة الإنسان ولغة الآلة. نكتب كود بلغة قريبة من البشر (مثل JavaScript، Python)، ثم يترجمها الكمبيوتر إلى 0 و 1.</p>
                
                <div class="code-block">
                    <span class="comment">// مثال: كود JavaScript بسيط</span>
                    <span class="keyword">let</span> name = <span class="string">"أحمد"</span>;
                    <span class="function">console.log</span>(<span class="string">"مرحباً " + name</span>);
                    <span class="comment">// الناتج: مرحباً أحمد</span>
                </div>
            `
        },
        {
            id: '1-2',
            title: 'لماذا نتعلم البرمجة؟',
            content: `
                <h3>أهمية البرمجة في العصر الحديث</h3>
                <p>البرمجة أصبحت لغة العصر. كل شيء حولنا يعتمد على البرمجيات: الهواتف، السيارات، المستشفيات، البنوك، وحتى الثلاجات!</p>
                
                <h4>فوائد تعلم البرمجة</h4>
                <ul>
                    <li><strong>حل المشكلات:</strong> البرمجة تعلمك التفكير المنطقي وتحليل المشكلات</li>
                    <li><strong>الإبداع والابتكار:</strong> يمكنك بناء أي شيء تتخيله</li>
                    <li><strong>فرص عمل واسعة:</strong> الطلب على المبرمجين في ازدياد مستمر</li>
                    <li><strong>التحكم في التكنولوجيا:</strong> بدلاً من أن تكون مستهلكاً، تصبح منتجاً</li>
                    <li><strong>تطوير الذات:</strong> التعلم المستمر والتحدي الذهني</li>
                </ul>
                
                <div class="note-box">
                    <strong>🚀 حقيقة مثيرة:</strong> عدد المبرمجين في العالم يتجاوز 27 مليون مبرمج، وهذا الرقم في تزايد مستمر!
                </div>
                
                <h4>مجالات البرمجة المتنوعة</h4>
                <ul>
                    <li><strong>تطوير الويب:</strong> بناء مواقع وتطبيقات الإنترنت</li>
                    <li><strong>تطوير التطبيقات:</strong> تطبيقات الهواتف الذكية</li>
                    <li><strong>الذكاء الاصطناعي:</strong> تعليم الآلات التفكير</li>
                    <li><strong>الأمن السيبراني:</strong> حماية البيانات والأنظمة</li>
                    <li><strong>ألعاب الفيديو:</strong> بناء عوالم تفاعلية</li>
                    <li><strong>تحليل البيانات:</strong> استخراج المعلومات من البيانات الضخمة</li>
                </ul>
                
                <div class="example-box">
                    <strong>📊 إحصائية مهمة:</strong>
                    <p>متوسط رواتب المبرمجين في العالم يتراوح بين 70,000 - 150,000 دولار سنوياً، مع فرص نمو كبيرة.</p>
                </div>
            `
        },
        {
            id: '1-3',
            title: 'ما هي الخوارزميات؟',
            content: `
                <h3>فهم الخوارزميات - قلب البرمجة</h3>
                <p>الخوارزمية هي مجموعة من الخطوات المنطقية المرتبة لحل مشكلة معينة. هي الخطة التي يتبعها الكمبيوتر لإنجاز مهمة ما.</p>
                
                <h4>خصائص الخوارزمية الجيدة</h4>
                <ul>
                    <li><strong>الوضوح:</strong> كل خطوة مفهومة ولا تحتمل التأويل</li>
                    <li><strong>الترتيب:</strong> خطوات متسلسلة ومنطقية</li>
                    <li><strong>النهاية:</strong> يجب أن تنتهي الخوارزمية بعد عدد محدود من الخطوات</li>
                    <li><strong>الفعالية:</strong> تحل المشكلة بكفاءة عالية</li>
                </ul>
                
                <div class="example-box">
                    <strong>🍳 مثال من الحياة اليومية:</strong>
                    <p>تحضير كوب شاي كخوارزمية:</p>
                    <ol>
                        <li>ضع الماء في الغلاية</li>
                        <li>شغل الغلاية حتى يغلي الماء</li>
                        <li>ضع كيس الشاي في الكوب</li>
                        <li>صب الماء المغلي في الكوب</li>
                        <li>اتركه 3 دقائق</li>
                        <li>أخرج كيس الشاي</li>
                        <li>أضف السكر حسب الرغبة</li>
                        <li>قلب واشرب</li>
                    </ol>
                </div>
                
                <h4>الخوارزميات في البرمجة</h4>
                <p>في البرمجة، نكتب الخوارزميات باستخدام الكود. مثال بسيط: خوارزمية لإيجاد أكبر رقم في قائمة:</p>
                
                <div class="code-block">
                    <span class="comment">// خوارزمية إيجاد الرقم الأكبر</span>
                    <span class="keyword">function</span> <span class="function">findMax</span>(numbers) {
                        <span class="keyword">let</span> max = numbers[0];
                        <span class="keyword">for</span> (<span class="keyword">let</span> i = 1; i < numbers.length; i++) {
                            <span class="keyword">if</span> (numbers[i] > max) {
                                max = numbers[i];
                            }
                        }
                        <span class="keyword">return</span> max;
                    }
                    
                    <span class="comment">// استخدام الخوارزمية</span>
                    <span class="keyword">let</span> result = <span class="function">findMax</span>([3, 7, 2, 9, 5]);
                    <span class="function">console</span>.<span class="function">log</span>(result); <span class="comment">// الناتج: 9</span>
                </div>
                
                <div class="note-box">
                    <strong>🎯 تذكر:</strong> كل برنامج هو عبارة عن مجموعة من الخوارزميات المتعاونة لحل مشكلة أكبر!
                </div>
            `
        },
        {
            id: '1-4',
            title: 'ماهو الإنترنت وكيف يعمل؟',
            content: `
                <h3>فهم الإنترنت - شبكة الشبكات</h3>
                <p>الإنترنت هو شبكة عالمية تربط ملايين أجهزة الكمبيوتر مع بعضها البعض. لكن كيف تعمل هذه الشبكة المعقدة؟</p>
                
                <h4>مكونات الإنترنت الأساسية</h4>
                <ul>
                    <li><strong>الخوادم (Servers):</strong> أجهزة تخزن المواقع والخدمات</li>
                    <li><strong>العملاء (Clients):</strong> الأجهزة التي تطلب الخدمات (هاتفك، كمبيوترك)</li>
                    <li><strong>بروتوكولات الاتصال:</strong> قواعد التواصل بين الأجهزة</li>
                    <li><strong>الكابلات والأقمار الصناعية:</strong> البنية التحتية الفيزيائية</li>
                </ul>
                
                <h4>كيف تصل البيانات عبر الإنترنت؟</h4>
                <p>عندما تفتح موقعاً، تحدث الخطوات التالية:</p>
                <ol>
                    <li>تكتب عنوان الموقع (مثل google.com)</li>
                    <li>يتم تحويل الاسم إلى عنوان IP (مثل 142.250.185.46)</li>
                    <li>يتم إرسال طلب للخادم عبر بروتوكول HTTP</li>
                    <li>الخادم يستقبل الطلب ويجهز الرد</li>
                    <li>يتم إرسال البيانات (صفحة الموقع) لجهازك</li>
                    <li>المتصفح يعرض الصفحة على شاشتك</li>
                </ol>
                
                <div class="code-block">
                    <span class="comment">// مثال: طلب HTTP بسيط</span>
                    <span class="function">fetch</span>(<span class="string">'https://api.example.com/data'</span>)
                        .<span class="function">then</span>(response => response.<span class="function">json</span>())
                        .<span class="function">then</span>(data => <span class="function">console</span>.<span class="function">log</span>(data));
                </div>
                
                <div class="note-box">
                    <strong>🌐 معلومة مثيرة:</strong> هناك أكثر من 5 مليار مستخدم للإنترنت في العالم، وهذا الرقم في تزايد!
                </div>
                
                <div class="example-box">
                    <strong>📱 مثال تطبيقي:</strong>
                    <p>عندما ترسل رسالة واتساب، البيانات تنتقل عبر الإنترنت في أجزاء من الثانية من هاتفك إلى خوادم واتساب ثم إلى هاتف صديقك.</p>
                </div>
            `
        },
        {
            id: '1-5',
            title: 'أنواع لغات البرمجة واختيار الأنسب',
            content: `
                <h3>دليلك لاختيار لغة البرمجة المناسبة</h3>
                <p>هناك مئات لغات البرمجة، لكنها تصنف إلى عدة أنواع حسب استخدامها ومستوى التجريد.</p>
                
                <h4>تصنيفات لغات البرمجة</h4>
                
                <h4>1. حسب المستوى</h4>
                <ul>
                    <li><strong>لغات منخفضة المستوى:</strong> قريبة من لغة الآلة (مثل Assembly)</li>
                    <li><strong>لغات عالية المستوى:</strong> قريبة من لغة البشر (مثل Python, JavaScript)</li>
                </ul>
                
                <h4>2. حسب الاستخدام</h4>
                <ul>
                    <li><strong>تطوير الويب (Frontend):</strong> HTML, CSS, JavaScript</li>
                    <li><strong>تطوير الويب (Backend):</strong> Node.js, Python, PHP, Java</li>
                    <li><strong>تطبيقات الهواتف:</strong> Kotlin (Android), Swift (iOS), React Native</li>
                    <li><strong>الذكاء الاصطناعي:</strong> Python (TensorFlow, PyTorch)</li>
                    <li><strong>ألعاب الفيديو:</strong> C++, C#, Unity</li>
                    <li><strong>علوم البيانات:</strong> Python, R, SQL</li>
                </ul>
                
                <div class="code-block">
                    <span class="comment">// نفس المهمة بلغات مختلفة</span>
                    
                    <span class="comment">// JavaScript</span>
                    <span class="keyword">let</span> message = <span class="string">"مرحباً بالعالم"</span>;
                    <span class="function">console</span>.<span class="function">log</span>(message);
                    
                    <span class="comment">// Python</span>
                    message = <span class="string">"مرحباً بالعالم"</span>
                    <span class="function">print</span>(message)
                    
                    <span class="comment">// Java</span>
                    <span class="keyword">public class</span> Hello {
                        <span class="keyword">public static void</span> <span class="function">main</span>(String[] args) {
                            String message = <span class="string">"مرحباً بالعالم"</span>;
                            System.<span class="function">out</span>.<span class="function">println</span>(message);
                        }
                    }
                </div>
                
                <div class="note-box">
                    <strong>💡 نصيحة للمبتدئين:</strong>
                    <p>ابدأ بلغة JavaScript أو Python، فهي سهلة التعلم ولها مجتمع كبير ومكتبات غنية.</p>
                </div>
            `
        }
    ]
};
