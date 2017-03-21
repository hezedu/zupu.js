zupu.js
====

### JS powfull var dump!
不会陷入死循环.比如 :
```javascript
var a={a1:'a1'};
a.a2=a;
```
用zupu会得到(在浏览器输出): 
```js
[0]this=>Object
   this.[0]a1=>String = "a1" 
   this.[1]a2 = this [0 
```
的结果.<br/>
可以遍历 window 对象(除了IE);
<h2>安装</h2>
### nodejs
`npm install zupu.js` (注意有 ___.js___ 后缀)
<h2>用法</h2>
#### 前端(browser)：
只需

```javascript
<script src="zupu.js"></script>;
document.write(zupu( //变量 ));
```
#### 后端(nodejs): 
```javascript
var http = require('http');
var zupu = require('zupu.js');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  zupu.init(res);//初始代，只需一次
  res.write(zupu(global));
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```
<h2>demo:</h2>
http://godmod.cn/zupu
