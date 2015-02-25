zupu.js
====

###JS powfull dump!
不会陷入死循环.比如 :
```js
var a={a1:'a1' };
a.a2=a;
for(var i in a){
//died
}
```
用for in 会死掉. 事实上其它任何语言遍历都会死掉.<br/>
而用zupu会得到: 
```js
[0]this=>Object
   this.[0]a1=>String = "a1" 
   this.[1]a2 = this [0 
```
的结果.<br/>
可以遍历 window 对象(除了IE);
<h2>安装</h2>
npm install zupu.js (不是zupu,第一次用npm 多加了 .js);
<h2>用法</h2>
<h3>前端(browser)：</h3>
只需:<br/>
&lt;script src="zupu.js " &gt;&lt;/ script &gt;<br/>
document.write(zupu( var ));<br/>

<h3>后端(nodejs): </h3>
var http = require('http');<br/>
var zupu = require('../zupu.js');<br/>
http.createServer(function (req, res) {<br/>
  res.writeHead(200, {'Content-Type': 'text/html'});<br/>
  zupu.init(res);<br/>
  res.write(zupu(process));<br/>
  res.end('Hello World\n');<br/>
}).listen(1337, '127.0.0.1');<br/>
console.log('Server running at http://127.0.0.1:1337/');<br/>

<h2>demo:</h2>
http://godmod.cn/zupu
