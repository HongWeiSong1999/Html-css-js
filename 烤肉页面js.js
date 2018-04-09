<script type="text/javascript">
 
         //1.数据定义（实际生产环境中，应有后台给出）
         var data = [
             {img:1,h2:'澳洲牛排'},
             {img:2,h2:'法式小牛排'},
             {img:3,h2:'T骨牛排'},
             {img:4,h2:'菲力牛排'},
             {img:5,h2:'西冷牛排'},
             {img:6,h2:'沙朗牛排'},
             {img:7,h2:'肋眼牛排'}
         ];
 
         //2.通用函数
         var g = function(id){
             if(id.substr(0,1) == "."){
                 return document.getElementsByClassName(id.substr(1));
             }
             return document.getElementById(id);
         }
 
         //3.添加所有幻灯片&对应按钮
         function addSliders(){
         //3.1获取模板
             var tpl_main= g('template_main').innerHTML
                              .replace(/^\s*/,'')
                             .replace(/\s*$/,'');
             var tpl_ctrl= g('template_ctrl').innerHTML
                              .replace(/^\s*/,'')
                             .replace(/\s*$/,'');
             //3.2定义最终输出 html的变量
             var out_main = []; //所有幻灯片变量
             var out_ctrl = []; //所有控制按钮变量
             //3.3遍历所有数据，构建最终输出的 HTML
             for(i in data){
                 var _html_main = tpl_main
                         .replace(/{{index}}/g,data[i].img)
                         .replace(/{{h2}}/g,data[i].h1)
                         .replace(/{{h3}}/g,data[i].h2)
                         .replace(/{{css}}/g,['','main-i_right'][i%2]);
                 var _html_ctrl = tpl_ctrl
                         .replace(/{{index}}/g,data[i].img);
                 out_main.push(_html_main);
                 out_ctrl.push(_html_ctrl);
         }
         //3.4吧HTML回写到对应的DOM里面
         g('template_main').innerHTML = out_main.join('');
         g('template_ctrl').innerHTML = out_ctrl.join('');
 
         //7.增加 #main_background,以免出现空白背景
         g('template_main').innerHTML += tpl_main
                         .replace(/{{index}}/g,'{{index}}');
         g('main_{{index}}').id = 'main_background';
         }
 
         //5.幻灯片切换
         function switchSlider(n){
             //5.1获得要展现的幻丁片&控制按钮 DOM
             var main = g('main_'+n);
             var ctrl = g('ctrl_'+n);
             //5.2获得所有幻灯片以及控制按钮
             var clear_main = g('.main-i');
             var clear_ctrl = g('.ctrl-i');
             //5.3清除他们的active样式
             for(i=0;i<clear_ctrl.length;i++){
                 clear_main[i].className = clear_main[i].className.replace('main-i_active','');
                 clear_ctrl[i].className = clear_ctrl[i].className.replace('ctrl-i_active','');
             }
             for(i=0;i<clear_ctrl.length; i++ ){   //标准的遍历语法，真正意义上的数组对象可以用 for in循环。
                  clear_main[i].className = clear_main[i].className
                                     .replace(' main-i_active','');
                  clear_ctrl[i].className = clear_ctrl[i].className
                                     .replace(' ctrl-i_active','');
                         }
             //5.4为当前控制按钮和图片加样式
             main.className += ' main-i_active';
             ctrl.className += ' ctrl-i_active';
             //7.2切换时复制上一张幻灯片到 main_background 中
             setTimeout(function(){
                 g('main_background').innerHTML = main.innerHTML;
             },1000)
         }
         //6.动态调整图片的 margin-top ,使其垂直居中
         function movePictures(){
             var pictures = g('.picture');
             for(i=0; i<pictures.length; i++){
                 pictures[i].style.marginTop = (-1 * pictures[i].clientHeight/2) + 'px';
             }
         }
         //4.定义何时处理幻灯片输出
         window.onload = function(){
             addSliders();
             switchSlider(2);
             setTimeout(function(){
                 movePictures();
             },100); 
        }
     </script>