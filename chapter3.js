const chapter3 = {
    id: 'ch3',
    title: 'CSS المتقدم - التصميم والتنسيق الاحترافي',
    description: 'تعلم CSS بشكل متقدم مع Flexbox، Grid، الثيمات، والاستجابة للشاشات',
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
                    <span class="comment">/* ربط خارجي في HTML */</span>
                    <span class="keyword">&lt;link</span> <span class="function">rel</span>=<span class="string">"stylesheet"</span> <span class="function">href</span>=<span class="string">"style.css"</span><span class="keyword">&gt;</span>
                    
                    <span class="comment">/* ربط داخلي */</span>
                    <span class="keyword">&lt;style&gt;</span>
                        <span class="selector">body</span> {
                            <span class="property">background-color</span>: <span class="value">#0b0f19</span>;
                        }
                    <span class="keyword">&lt;/style&gt;</span>
                </div>
                
                <h4>المحددات المتقدمة</h4>
                <div class="code-block">
                    <span class="comment">/* محدد العنصر */</span>
                    <span class="selector">p</span> {
                        <span class="property">color</span>: <span class="value">#f8fafc</span>;
                    }
                    
                    <span class="comment">/* محدد الفئة (class) */</span>
                    <span class="selector">.gold-text</span> {
                        <span class="property">color</span>: <span class="value">#facc15</span>;
                    }
                    
                    <span class="comment">/* محدد المعرف (id) */</span>
                    <span class="selector">#header</span> {
                        <span class="property">background</span>: <span class="value">#131d31</span>;
                    }
                    
                    <span class="comment">/* المحددات المركبة */</span>
                    <span class="selector">div .container p</span> {
                        <span class="property">margin</span>: <span class="value">10px</span>; <span class="comment">/* p داخل container داخل div */</span>
                    }
                    
                    <span class="selector">h1, h2, h3</span> {
                        <span class="property">font-weight</span>: <span class="value">bold</span>; <span class="comment">/* عدة عناصر */</span>
                    }
                    
                    <span class="comment">/* المحددات المتقدمة */</span>
                    <span class="selector">a:hover</span> {
                        <span class="property">color</span>: <span class="value">#facc15</span>; <span class="comment">/* عند تمرير الماوس */</span>
                    }
                    
                    <span class="selector">input:focus</span> {
                        <span class="property">border-color</span>: <span class="value">#facc15</span>; <span class="comment">/* عند التركيز */</span>
                    }
                    
                    <span class="selector">p:first-child</span> {
                        <span class="property">font-weight</span>: <span class="value">bold</span>; <span class="comment">/* أول عنصر p */</span>
                    }
                    
                    <span class="selector">div > p</span> {
                        <span class="property">color</span>: <span class="value">blue</span>; <span class="comment">/* p مباشر داخل div */</span>
                    }
                    
                    <span class="selector">div + p</span> {
                        <span class="property">margin-top</span>: <span class="value">0</span>; <span class="comment">/* p الذي يلي div مباشرة */</span>
                    }
                </div>
                
                <div class="note-box">
                    <strong>💡 نصائح للمحددات:</strong>
                    <ul>
                        <li>استخدم <code>class</code> للتنسيق العام</li>
                        <li>استخدم <code>id</code> للعناصر الفريدة</li>
                        <li>تجنب المحددات العميقة للحفاظ على الأداء</li>
                    </ul>
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
                    <span class="comment">/* مثال على نموذج الصندوق */</span>
                    <span class="selector">.box</span> {
                        <span class="property">width</span>: <span class="value">300px</span>;
                        <span class="property">height</span>: <span class="value">200px</span>;
                        <span class="property">padding</span>: <span class="value">20px</span>; <span class="comment">/* داخلي */</span>
                        <span class="property">border</span>: <span class="value">2px solid #facc15</span>; <span class="comment">/* حدود */</span>
                        <span class="property">margin</span>: <span class="value">30px</span>; <span class="comment">/* خارجي */</span>
                    }
                    
                    <span class="comment">/* padding و margin باتجاهات محددة */</span>
                    <span class="selector">.box</span> {
                        <span class="property">padding-top</span>: <span class="value">10px</span>;
                        <span class="property">padding-right</span>: <span class="value">15px</span>;
                        <span class="property">padding-bottom</span>: <span class="value">10px</span>;
                        <span class="property">padding-left</span>: <span class="value">15px</span>;
                        <span class="comment">/* اختصار: padding: 10px 15px 10px 15px; */</span>
                    }
                    
                    <span class="comment">/* box-sizing: border-box لتسهيل الحسابات */</span>
                    <span class="selector">*</span> {
                        <span class="property">box-sizing</span>: <span class="value">border-box</span>;
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي:</strong>
                    <div class="code-block">
                        <span class="comment">/* تصميم بطاقة (Card) باستخدام Box Model */</span>
                        <span class="selector">.card</span> {
                            <span class="property">background</span>: <span class="value">#131d31</span>;
                            <span class="property">padding</span>: <span class="value">2rem</span>;
                            <span class="property">border-radius</span>: <span class="value">12px</span>;
                            <span class="property">border</span>: <span class="value">1px solid #2a3a5e</span>;
                            <span class="property">margin</span>: <span class="value">1rem 0</span>;
                            <span class="property">box-shadow</span>: <span class="value">0 8px 32px rgba(0,0,0,0.4)</span>;
                        }
                    </div>
                </div>
                
                <div class="note-box">
                    <strong>🎯 قاعدة ذهبية:</strong>
                    <p>استخدم <code>box-sizing: border-box</code> لجعل العرض والارتفاع يشملان الـ padding والـ border، مما يسهل التخطيط.</p>
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
                    <span class="comment">/* block - يأخذ عرض الصفحة بالكامل */</span>
                    <span class="selector">div</span> {
                        <span class="property">display</span>: <span class="value">block</span>;
                    }
                    
                    <span class="comment">/* inline - يأخذ حجم المحتوى فقط */</span>
                    <span class="selector">span</span> {
                        <span class="property">display</span>: <span class="value">inline</span>;
                    }
                    
                    <span class="comment">/* inline-block - يجمع بين خصائص inline و block */</span>
                    <span class="selector">.btn</span> {
                        <span class="property">display</span>: <span class="value">inline-block</span>;
                        <span class="property">padding</span>: <span class="value">10px 20px</span>;
                    }
                </div>
                
                <h4>Flexbox الأساسيات</h4>
                <div class="code-block">
                    <span class="comment">/* الحاوية الرئيسية (Flex Container) */</span>
                    <span class="selector">.flex-container</span> {
                        <span class="property">display</span>: <span class="value">flex</span>;
                        <span class="property">flex-direction</span>: <span class="value">row</span>; <span class="comment">/* row, column, row-reverse, column-reverse */</span>
                        <span class="property">justify-content</span>: <span class="value">center</span>; <span class="comment">/* توزيع أفقي: flex-start, flex-end, center, space-between, space-around, space-evenly */</span>
                        <span class="property">align-items</span>: <span class="value">center</span>; <span class="comment">/* توزيع عمودي: stretch, flex-start, flex-end, center, baseline */</span>
                        <span class="property">flex-wrap</span>: <span class="value">wrap</span>; <span class="comment">/* wrap, nowrap, wrap-reverse */</span>
                        <span class="property">gap</span>: <span class="value">1rem</span>; <span class="comment">/* المسافة بين العناصر */</span>
                    }
                    
                    <span class="comment">/* العناصر الفرعية (Flex Items) */</span>
                    <span class="selector">.flex-item</span> {
                        <span class="property">flex</span>: <span class="value">1</span>; <span class="comment">/* يأخذ مساحة متساوية */</span>
                        <span class="property">flex-grow</span>: <span class="value">1</span>; <span class="comment">/* يسمح بالنمو */</span>
                        <span class="property">flex-shrink</span>: <span class="value">0</span>; <span class="comment">/* يمنع الانكماش */</span>
                        <span class="property">flex-basis</span>: <span class="value">200px</span>; <span class="comment">/* الحجم الأساسي */</span>
                        <span class="property">align-self</span>: <span class="value">flex-start</span>; <span class="comment">/* تجاوز align-items */</span>
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 أمثلة عملية على Flexbox:</strong>
                    <div class="code-block">
                        <span class="comment">/* 1. توسيط عنصر في المنتصف */</span>
                        <span class="selector">.center-box</span> {
                            <span class="property">display</span>: <span class="value">flex</span>;
                            <span class="property">justify-content</span>: <span class="value">center</span>;
                            <span class="property">align-items</span>: <span class="value">center</span>;
                            <span class="property">height</span>: <span class="value">100vh</span>;
                        }
                        
                        <span class="comment">/* 2. تصميم شريط تنقل */</span>
                        <span class="selector">.navbar</span> {
                            <span class="property">display</span>: <span class="value">flex</span>;
                            <span class="property">justify-content</span>: <span class="value">space-between</span>;
                            <span class="property">align-items</span>: <span class="value">center</span>;
                            <span class="property">padding</span>: <span class="value">1rem 2rem</span>;
                            <span class="property">background</span>: <span class="value">#131d31</span>;
                        }
                        
                        <span class="comment">/* 3. شبكة بطاقات مرنة */</span>
                        <span class="selector">.cards-grid</span> {
                            <span class="property">display</span>: <span class="value">flex</span>;
                            <span class="property">flex-wrap</span>: <span class="value">wrap</span>;
                            <span class="property">gap</span>: <span class="value">1.5rem</span>;
                        }
                        <span class="selector">.cards-grid .card</span> {
                            <span class="property">flex</span>: <span class="value">1 1 250px</span>; <span class="comment">/* grow shrink basis */</span>
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
                    <span class="comment">/* تعريف الشبكة */</span>
                    <span class="selector">.grid-container</span> {
                        <span class="property">display</span>: <span class="value">grid</span>;
                        <span class="property">grid-template-columns</span>: <span class="value">repeat(3, 1fr)</span>; <span class="comment">/* 3 أعمدة متساوية */</span>
                        <span class="property">grid-template-rows</span>: <span class="value">auto 200px auto</span>; <span class="comment">/* 3 صفوف بأحجام مختلفة */</span>
                        <span class="property">gap</span>: <span class="value">1.5rem</span>; <span class="comment">/* المسافات بين الصفوف والأعمدة */</span>
                    }
                    
                    <span class="comment">/* تخصيص العناصر داخل الشبكة */</span>
                    <span class="selector">.grid-item-1</span> {
                        <span class="property">grid-column</span>: <span class="value">1 / 3</span>; <span class="comment">/* يبدأ من العمود 1 وينتهي عند 3 (يمتد لعمودين) */</span>
                        <span class="property">grid-row</span>: <span class="value">1 / 2</span>; <span class="comment">/* يبدأ من الصف 1 وينتهي عند 2 */</span>
                    }
                </div>
                
                <h4>أنماط الشبكات الشائعة</h4>
                <div class="code-block">
                    <span class="comment">/* شبكة متجاوبة */</span>
                    <span class="selector">.responsive-grid</span> {
                        <span class="property">display</span>: <span class="value">grid</span>;
                        <span class="property">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(250px, 1fr))</span>;
                        <span class="property">gap</span>: <span class="value">1.5rem</span>;
                    }
                    
                    <span class="comment">/* تخطيط صفحة كاملة (header, main, sidebar, footer) */</span>
                    <span class="selector">.page-layout</span> {
                        <span class="property">display</span>: <span class="value">grid</span>;
                        <span class="property">grid-template-areas</span>: 
                            <span class="string">"header header header"</span>
                            <span class="string">"main main sidebar"</span>
                            <span class="string">"footer footer footer"</span>;
                        <span class="property">grid-template-columns</span>: <span class="value">1fr 2fr 1fr</span>;
                        <span class="property">gap</span>: <span class="value">1rem</span>;
                        <span class="property">min-height</span>: <span class="value">100vh</span>;
                    }
                    
                    <span class="selector">.header</span> {
                        <span class="property">grid-area</span>: <span class="value">header</span>;
                        <span class="property">background</span>: <span class="value">#131d31</span>;
                        <span class="property">padding</span>: <span class="value">1rem</span>;
                    }
                    <span class="selector">.main</span> {
                        <span class="property">grid-area</span>: <span class="value">main</span>;
                        <span class="property">background</span>: <span class="value">#0b0f19</span>;
                        <span class="property">padding</span>: <span class="value">1rem</span>;
                    }
                    <span class="selector">.sidebar</span> {
                        <span class="property">grid-area</span>: <span class="value">sidebar</span>;
                        <span class="property">background</span>: <span class="value">#131d31</span>;
                        <span class="property">padding</span>: <span class="value">1rem</span>;
                    }
                    <span class="selector">.footer</span> {
                        <span class="property">grid-area</span>: <span class="value">footer</span>;
                        <span class="property">background</span>: <span class="value">#131d31</span>;
                        <span class="property">padding</span>: <span class="value">1rem</span>;
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: معرض صور</strong>
                    <div class="code-block">
                        <span class="selector">.gallery</span> {
                            <span class="property">display</span>: <span class="value">grid</span>;
                            <span class="property">grid-template-columns</span>: <span class="value">repeat(auto-fill, minmax(200px, 1fr))</span>;
                            <span class="property">gap</span>: <span class="value">1rem</span>;
                        }
                        
                        <span class="selector">.gallery img</span> {
                            <span class="property">width</span>: <span class="value">100%</span>;
                            <span class="property">height</span>: <span class="value">200px</span>;
                            <span class="property">object-fit</span>: <span class="value">cover</span>;
                            <span class="property">border-radius</span>: <span class="value">8px</span>;
                            <span class="property">transition</span>: <span class="value">transform 0.3s</span>;
                        }
                        
                        <span class="selector">.gallery img:hover</span> {
                            <span class="property">transform</span>: <span class="value">scale(1.05)</span>;
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
                    <span class="comment">/* position: static (الوضع الافتراضي) */</span>
                    <span class="selector">.static-element</span> {
                        <span class="property">position</span>: <span class="value">static</span>; <span class="comment">/* يتبع تدفق الصفحة الطبيعي */</span>
                    }
                    
                    <span class="comment">/* position: relative (نسبي) */</span>
                    <span class="selector">.relative-element</span> {
                        <span class="property">position</span>: <span class="value">relative</span>;
                        <span class="property">top</span>: <span class="value">10px</span>; <span class="comment">/* يتحرك 10px للأسفل */</span>
                        <span class="property">left</span>: <span class="value">20px</span>; <span class="comment">/* يتحرك 20px لليمين */</span>
                    }
                    
                    <span class="comment">/* position: absolute (مطلق) */</span>
                    <span class="selector">.absolute-element</span> {
                        <span class="property">position</span>: <span class="value">absolute</span>;
                        <span class="property">top</span>: <span class="value">0</span>;
                        <span class="property">right</span>: <span class="value">0</span>; <span class="comment">/* يتوضع في أعلى يمين أقرب عنصر relative */</span>
                    }
                    
                    <span class="comment">/* position: fixed (ثابت) */</span>
                    <span class="selector">.fixed-element</span> {
                        <span class="property">position</span>: <span class="value">fixed</span>;
                        <span class="property">bottom</span>: <span class="value">20px</span>;
                        <span class="property">right</span>: <span class="value">20px</span>; <span class="comment">/* يثبت في مكانه حتى عند التمرير */</span>
                        <span class="property">z-index</span>: <span class="value">1000</span>;
                    }
                    
                    <span class="comment">/* position: sticky (لاصق) - مزيج بين relative و fixed */</span>
                    <span class="selector">.sticky-element</span> {
                        <span class="property">position</span>: <span class="value">sticky</span>;
                        <span class="property">top</span>: <span class="value">0</span>; <span class="comment">/* يلتصق بأعلى الصفحة عند التمرير */</span>
                        <span class="property">background</span>: <span class="value">#131d31</span>;
                        <span class="property">padding</span>: <span class="value">1rem</span>;
                        <span class="property">z-index</span>: <span class="value">100</span>;
                    }
                </div>
                
                <h4>تطبيقات عملية</h4>
                <div class="code-block">
                    <span class="comment">/* زر "العودة للأعلى" ثابت في الزاوية */</span>
                    <span class="selector">.back-to-top</span> {
                        <span class="property">position</span>: <span class="value">fixed</span>;
                        <span class="property">bottom</span>: <span class="value">30px</span>;
                        <span class="property">right</span>: <span class="value">30px</span>;
                        <span class="property">background</span>: <span class="value">#facc15</span>;
                        <span class="property">color</span>: <span class="value">#0b0f19</span>;
                        <span class="property">padding</span>: <span class="value">12px 16px</span>;
                        <span class="property">border-radius</span>: <span class="value">50%</span>;
                        <span class="property">cursor</span>: <span class="value">pointer</span>;
                        <span class="property">border</span>: <span class="value">none</span>;
                        <span class="property">box-shadow</span>: <span class="value">0 4px 12px rgba(250,204,21,0.3)</span>;
                        <span class="property">transition</span>: <span class="value">transform 0.3s</span>;
                    }
                    
                    <span class="selector">.back-to-top:hover</span> {
                        <span class="property">transform</span>: <span class="value">translateY(-3px)</span>;
                    }
                    
                    <span class="comment">/* شريط تنقل لاصق */</span>
                    <span class="selector">.sticky-nav</span> {
                        <span class="property">position</span>: <span class="value">sticky</span>;
                        <span class="property">top</span>: <span class="value">0</span>;
                        <span class="property">background</span>: <span class="value">rgba(19, 29, 49, 0.95)</span>;
                        <span class="property">backdrop-filter</span>: <span class="value">blur(10px)</span>;
                        <span class="property">padding</span>: <span class="value">1rem 2rem</span>;
                        <span class="property">border-bottom</span>: <span class="value">1px solid #2a3a5e</span>;
                        <span class="property">z-index</span>: <span class="value">100</span>;
                    }
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
                    <span class="comment">/* تعريف المتغيرات في الجذر */</span>
                    <span class="selector">:root</span> {
                        <span class="comment">/* الألوان الرئيسية */</span>
                        <span class="property">--gold</span>: <span class="value">#facc15</span>;
                        <span class="property">--bg-dark</span>: <span class="value">#0b0f19</span>;
                        <span class="property">--bg-card</span>: <span class="value">#131d31</span>;
                        <span class="property">--text-light</span>: <span class="value">#f8fafc</span>;
                        <span class="property">--text-muted</span>: <span class="value">#94a3b8</span>;
                        
                        <span class="comment">/* الأحجام */</span>
                        <span class="property">--radius</span>: <span class="value">12px</span>;
                        <span class="property">--shadow</span>: <span class="value">0 8px 32px rgba(0,0,0,0.4)</span>;
                        
                        <span class="comment">/* الخطوط */</span>
                        <span class="property">--font-base</span>: <span class="value">1rem</span>;
                        <span class="property">--font-heading</span>: <span class="value">2.5rem</span>;
                    }
                    
                    <span class="comment">/* استخدام المتغيرات */</span>
                    <span class="selector">body</span> {
                        <span class="property">background-color</span>: <span class="value">var(--bg-dark)</span>;
                        <span class="property">color</span>: <span class="value">var(--text-light)</span>;
                        <span class="property">font-size</span>: <span class="value">var(--font-base)</span>;
                    }
                    
                    <span class="selector">.card</span> {
                        <span class="property">background</span>: <span class="value">var(--bg-card)</span>;
                        <span class="property">border-radius</span>: <span class="value">var(--radius)</span>;
                        <span class="property">box-shadow</span>: <span class="value">var(--shadow)</span>;
                        <span class="property">border</span>: <span class="value">1px solid var(--gold)</span>;
                    }
                </div>
                
                <h4>بناء الثيمات باستخدام المتغيرات</h4>
                <div class="code-block">
                    <span class="comment">/* الثيم الافتراضي (داكن) */</span>
                    <span class="selector">:root</span> {
                        <span class="property">--bg-primary</span>: <span class="value">#0b0f19</span>;
                        <span class="property">--text-primary</span>: <span class="value">#f8fafc</span>;
                        <span class="property">--bg-card</span>: <span class="value">#131d31</span>;
                    }
                    
                    <span class="comment">/* الثيم الفاتح */</span>
                    <span class="selector">[data-theme="light"]</span> {
                        <span class="property">--bg-primary</span>: <span class="value">#f8fafc</span>;
                        <span class="property">--text-primary</span>: <span class="value">#0b0f19</span>;
                        <span class="property">--bg-card</span>: <span class="value">#ffffff</span>;
                    }
                    
                    <span class="comment">/* الثيم عالي التباين */</span>
                    <span class="selector">.high-contrast</span> {
                        <span class="property">--bg-primary</span>: <span class="value">#000000</span> <span class="value">!important</span>;
                        <span class="property">--text-primary</span>: <span class="value">#ffff00</span> <span class="value">!important</span>;
                        <span class="property">--bg-card</span>: <span class="value">#1a1a1a</span> <span class="value">!important</span>;
                    }
                    
                    <span class="comment">/* استخدام المتغيرات في العناصر */</span>
                    <span class="selector">body</span> {
                        <span class="property">background</span>: <span class="value">var(--bg-primary)</span>;
                        <span class="property">color</span>: <span class="value">var(--text-primary)</span>;
                    }
                    
                    <span class="selector">.card</span> {
                        <span class="property">background</span>: <span class="value">var(--bg-card)</span>;
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: تبديل الثيمات</strong>
                    <div class="code-block">
                        <span class="comment">/* JavaScript لتبديل الثيم */</span>
                        <span class="selector">// تبديل الثيم الفاتح/الداكن</span>
                        <span class="selector">document.documentElement.setAttribute('data-theme', 'light');</span>
                        
                        <span class="comment">/* CSS مع تنسيقات الثيم */</span>
                        <span class="selector">.theme-toggle</span> {
                            <span class="property">background</span>: <span class="value">var(--gold)</span>;
                            <span class="property">color</span>: <span class="value">var(--bg-primary)</span>;
                            <span class="property">padding</span>: <span class="value">0.5rem 1rem</span>;
                            <span class="property">border</span>: <span class="value">none</span>;
                            <span class="property">border-radius</span>: <span class="value">var(--radius)</span>;
                            <span class="property">cursor</span>: <span class="value">pointer</span>;
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
                    <span class="comment">/* نقاط التوقف الشائعة */</span>
                    
                    <span class="comment">/* الهواتف (أقل من 600px) */</span>
                    <span class="selector">@media (max-width: 600px)</span> {
                        <span class="selector">body</span> {
                            <span class="property">font-size</span>: <span class="value">14px</span>;
                        }
                        <span class="selector">.container</span> {
                            <span class="property">padding</span>: <span class="value">0.5rem</span>;
                        }
                    }
                    
                    <span class="comment">/* الأجهزة اللوحية (601px - 900px) */</span>
                    <span class="selector">@media (min-width: 601px) and (max-width: 900px)</span> {
                        <span class="selector">.grid</span> {
                            <span class="property">grid-template-columns</span>: <span class="value">repeat(2, 1fr)</span>;
                        }
                    }
                    
                    <span class="comment">/* أجهزة الكمبيوتر (أكثر من 900px) */</span>
                    <span class="selector">@media (min-width: 901px)</span> {
                        <span class="selector">.grid</span> {
                            <span class="property">grid-template-columns</span>: <span class="value">repeat(4, 1fr)</span>;
                        }
                    }
                </div>
                
                <h4>استراتيجيات التصميم المتجاوب</h4>
                <div class="code-block">
                    <span class="comment">/* 1. Mobile-first (تبدأ بالهواتف ثم تكبر) */</span>
                    <span class="selector">/* أنماط الهواتف (افتراضية) */</span>
                    <span class="selector">.container</span> {
                        <span class="property">width</span>: <span class="value">100%</span>;
                        <span class="property">padding</span>: <span class="value">1rem</span>;
                    }
                    
                    <span class="selector">/* تحسينات للأجهزة اللوحية */</span>
                    <span class="selector">@media (min-width: 768px)</span> {
                        <span class="selector">.container</span> {
                            <span class="property">max-width</span>: <span class="value">720px</span>;
                            <span class="property">margin</span>: <span class="value">0 auto</span>;
                        }
                    }
                    
                    <span class="selector">/* تحسينات للكمبيوتر */</span>
                    <span class="selector">@media (min-width: 1024px)</span> {
                        <span class="selector">.container</span> {
                            <span class="property">max-width</span>: <span class="value">960px</span>;
                        }
                    }
                    
                    <span class="comment">/* 2. توجيه الشاشة (Portrait / Landscape) */</span>
                    <span class="selector">@media (orientation: portrait)</span> {
                        <span class="selector">.sidebar</span> {
                            <span class="property">display</span>: <span class="value">none</span>; <span class="comment">/* إخفاء القائمة الجانبية في الوضع الرأسي */</span>
                        }
                    }
                    
                    <span class="selector">@media (orientation: landscape)</span> {
                        <span class="selector">.header</span> {
                            <span class="property">flex-direction</span>: <span class="value">row</span>;
                        }
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 مثال عملي: شبكة متجاوبة كاملة</strong>
                    <div class="code-block">
                        <span class="comment">/* شبكة تتغير حسب حجم الشاشة */</span>
                        <span class="selector">.product-grid</span> {
                            <span class="property">display</span>: <span class="value">grid</span>;
                            <span class="property">gap</span>: <span class="value">1.5rem</span>;
                            <span class="property">grid-template-columns</span>: <span class="value">1fr</span>; <span class="comment">/* عمود واحد افتراضي */</span>
                        }
                        
                        <span class="selector">@media (min-width: 600px)</span> {
                            <span class="selector">.product-grid</span> {
                                <span class="property">grid-template-columns</span>: <span class="value">repeat(2, 1fr)</span>;
                            }
                        }
                        
                        <span class="selector">@media (min-width: 900px)</span> {
                            <span class="selector">.product-grid</span> {
                                <span class="property">grid-template-columns</span>: <span class="value">repeat(3, 1fr)</span>;
                            }
                        }
                        
                        <span class="selector">@media (min-width: 1200px)</span> {
                            <span class="selector">.product-grid</span> {
                                <span class="property">grid-template-columns</span>: <span class="value">repeat(4, 1fr)</span>;
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
                    <span class="comment">/* transition: property duration timing-function delay */</span>
                    <span class="selector">.button</span> {
                        <span class="property">background</span>: <span class="value">#131d31</span>;
                        <span class="property">color</span>: <span class="value">#f8fafc</span>;
                        <span class="property">padding</span>: <span class="value">10px 20px</span>;
                        <span class="property">border</span>: <span class="value">2px solid #facc15</span>;
                        <span class="property">transition</span>: <span class="value">all 0.3s ease</span>;
                    }
                    
                    <span class="selector">.button:hover</span> {
                        <span class="property">background</span>: <span class="value">#facc15</span>;
                        <span class="property">color</span>: <span class="value">#0b0f19</span>;
                        <span class="property">transform</span>: <span class="value">scale(1.05)</span>;
                        <span class="property">box-shadow</span>: <span class="value">0 4px 20px rgba(250,204,21,0.3)</span>;
                    }
                    
                    <span class="comment">/* transition متعددة */</span>
                    <span class="selector">.card</span> {
                        <span class="property">transition</span>: 
                            <span class="value">transform 0.3s ease,</span>
                            <span class="value">box-shadow 0.3s ease,</span>
                            <span class="value">opacity 0.5s ease-in</span>;
                    }
                </div>
                
                <h4>الأنيميشن (Keyframes Animation)</h4>
                <div class="code-block">
                    <span class="comment">/* تعريف الحركة باستخدام keyframes */</span>
                    <span class="selector">@keyframes fadeInUp</span> {
                        <span class="selector">0%</span> {
                            <span class="property">opacity</span>: <span class="value">0</span>;
                            <span class="property">transform</span>: <span class="value">translateY(20px)</span>;
                        }
                        <span class="selector">100%</span> {
                            <span class="property">opacity</span>: <span class="value">1</span>;
                            <span class="property">transform</span>: <span class="value">translateY(0)</span>;
                        }
                    }
                    
                    <span class="selector">@keyframes pulse</span> {
                        <span class="selector">0%</span>, <span class="selector">100%</span> {
                            <span class="property">transform</span>: <span class="value">scale(1)</span>;
                        }
                        <span class="selector">50%</span> {
                            <span class="property">transform</span>: <span class="value">scale(1.05)</span>;
                        }
                    }
                    
                    <span class="selector">@keyframes spin</span> {
                        <span class="selector">0%</span> {
                            <span class="property">transform</span>: <span class="value">rotate(0deg)</span>;
                        }
                        <span class="selector">100%</span> {
                            <span class="property">transform</span>: <span class="value">rotate(360deg)</span>;
                        }
                    }
                    
                    <span class="comment">/* استخدام الأنيميشن */</span>
                    <span class="selector">.hero-text</span> {
                        <span class="property">animation</span>: <span class="value">fadeInUp 0.8s ease-out</span>;
                    }
                    
                    <span class="selector">.notification-badge</span> {
                        <span class="property">animation</span>: <span class="value">pulse 2s ease-in-out infinite</span>;
                    }
                    
                    <span class="selector">.loading-spinner</span> {
                        <span class="property">animation</span>: <span class="value">spin 1s linear infinite</span>;
                    }
                </div>
                
                <div class="example-box">
                    <strong>📝 أمثلة عملية متقدمة</strong>
                    <div class="code-block">
                        <span class="comment">/* 1. تأثير كتابة (Typewriter) */</span>
                        <span class="selector">@keyframes typing</span> {
                            <span class="selector">0%</span> {
                                <span class="property">width</span>: <span class="value">0</span>;
                            }
                            <span class="selector">100%</span> {
                                <span class="property">width</span>: <span class="value">100%</span>;
                            }
                        }
                        
                        <span class="selector">.typewriter</span> {
                            <span class="property">overflow</span>: <span class="value">hidden</span>;
                            <span class="property">white-space</span>: <span class="value">nowrap</span>;
                            <span class="property">animation</span>: <span class="value">typing 3s steps(40) 1s forwards</span>;
                        }
                        
                        <span class="comment">/* 2. تأثير تلاشي عند التحميل */</span>
                        <span class="selector">@keyframes fadeIn</span> {
                            <span class="selector">0%</span> {
                                <span class="property">opacity</span>: <span class="value">0</span>;
                                <span class="property">transform</span>: <span class="value">translateY(30px)</span>;
                            }
                            <span class="selector">100%</span> {
                                <span class="property">opacity</span>: <span class="value">1</span>;
                                <span class="property">transform</span>: <span class="value">translateY(0)</span>;
                            }
                        }
                        
                        <span class="selector">.fade-in</span> {
                            <span class="property">animation</span>: <span class="value">fadeIn 0.6s ease-out forwards</span>;
                        }
                        
                        <span class="comment">/* 3. تأثير hover مع transition */</span>
                        <span class="selector">.image-card</span> {
                            <span class="property">transition</span>: <span class="value">transform 0.3s ease, box-shadow 0.3s ease</span>;
                        }
                        
                        <span class="selector">.image-card:hover</span> {
                            <span class="property">transform</span>: <span class="value">scale(1.02) rotate(-1deg)</span>;
                            <span class="property">box-shadow</span>: <span class="value">0 12px 40px rgba(0,0,0,0.3)</span>;
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
                    
                    <div class="code-block">
                        <span class="comment">/* احترام تفضيلات المستخدم للحركة */</span>
                        <span class="selector">@media (prefers-reduced-motion: reduce)</span> {
                            <span class="selector">*</span> {
                                <span class="property">animation-duration</span>: <span class="value">0.01ms</span> <span class="value">!important</span>;
                                <span class="property">animation-iteration-count</span>: <span class="value">1</span> <span class="value">!important</span>;
                                <span class="property">transition-duration</span>: <span class="value">0.01ms</span> <span class="value">!important</span>;
                            }
                        }
                    </div>
                </div>
            `
        }
    ]
};
