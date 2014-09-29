zuPu
====

JS powfull dump!<br/>
并且不会陷入死循环.比如 : <br/>
var a={a1:'a1' }
a.a2=a; 
用for in 会死掉. 事实上其它任何语言遍历都会死掉.<br/>
而用zupu会得到: <br/>
[0]this=>Object <br/>
   this.[0]a1=>String = "a1" <br/>
   this.[1]a2 = this [0 <br/>
的结果.
<h2>安装</h2>
npm install zupu;
<h2>用法</h2>
<h3>前端(browser)：</h3>
只需:<br/>
&lt;script src="<span style="color:#999">node_modules路径/</span>zuPu.js " &gt;&lt;/ script &gt;<br/>
(window): document.write(zuPu( var )) .<br/>
注意:这里zuPu是大写!

<h3>后端(nodejs): </h3>
<div>var zupu=require('zupu')<span style="color:red">.F </span>.</div>
后端zupu是小写.记住一定加 .F 哦  <br/>
还有再加上前端不然没样式:<br/>
&lt;script src="<span style="color:#999">node_modules路径/</span>zuPu.js " &gt;&lt;/ script &gt;<br/>
然后 <br/>
res.write(zupu( var )) .<br/>

<h2>demo:</h2>
http://godmod.cn/zupu
