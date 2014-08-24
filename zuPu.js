function zuPu(a){ 
var mod={
first:'<div class="dw_zupu_first">',
suoyin:function(qian,id,hou){
return '<span class="dw_zupu_zu1">'+qian+'</span><span style="color:black">['+(id)+']'+hou+'</span>';
},
type:function(type){
return '=&gt;<b class="dw_zupu_'+type+'">'+type+'</b>';
},
other:function(type,ot){
return '=&gt;<b class="dw_zupu_Other">'+type+'</b>= '+ot.toString();
}, 
wai:"<span class='dw_zupu_wai'><外></span>",
count:function(c){
return '<span class="dw_zupu_count" id="dw_zupu_'+c+'">'+idarr2+'['+c+']</span>';
},
native:' = <span style="color:lime">[native scode]</span>',
end:'</div>'
}
var zu=['this'],point =[[a,'this',0]],dump='<pre class="dw_zupu_show">',tmp,id2=0,zu1='',zu2='this',count=0,notxt='<span noTtxt="1"',wai=false,idarr=[0],idarr2=0;
(function quchong(a){
var ty=zuPu.is(a),y=zuPu.isyinyong(ty),id=0,
zj='<span class="dw_zupu_zu1">'+zu1+'</span><span style="color:black">['+(id2)+']'+zu2+'</span>';
dump+=mod.count(count,idarr2)+mod.first+zj;
if(wai){
dump+=mod.wai;
}
switch(ty){
case 'String':
if(a.substr(0,16)===notxt){
dump+=a;
}else{
dump+=mod.type(ty)+' = "'+zuPu.toTXT(a)+'"';
}
break;
case 'Number':
case 'Boolean':
dump+=mod.type(ty)+' = '+a;
break;
case 'Null':
case 'Undefined':
case 'Object':
case 'Array':
dump+=mod.type(ty);
break;
case 'Function':
var funtoStr=a.toString(),fin=funtoStr.search(/^function([\s\S]*?)\(([\s\S]*?)\)\s*\{\s*\[native\scode\]\s*\}\s*$/);
if(fin==0){
dump+=mod.type(ty)+mod.native;
}else{
dump+='<span  class="dw_zupu_funb"  onclick="zuPu.showChild(this)">'+mod.type(ty)+'<span class="dw_zupu_funj">+</span></span><div class="dw_zupu_fund">'+zuPu.toTXT(a.toString())+'</div>';
}
break;
default:
dump+=mod.other(ty,a);
break;
}
dump+=mod.end;
count=count+1;
if(y>0 && zuPu.isforin(a)){
for(var i in a)
{   	
	if(a.hasOwnProperty(i)){
	wai=false;
	}else{
	wai=true;
	}
	var ty=	zuPu.is(a[i]),y=zuPu.isyinyong(ty);
	id2=id;zu2=i;zu1=zu.join('.')+'.';
	
	tmp=(y===1) ? points(a[i],zu1+i,count) : ((y===2) ?'<span noTtxt="1">'+mod.other(zuPu.is(a[i]),a[i])+'</span>' : a[i]);
	zu.push(i);
	idarr.push(id);
	idarr2=idarr.join('-');
	quchong(tmp);
	zu.pop();
	idarr.pop(id);
	id++;
}
}
})(a);
function points(o,z,ic){
var len=point.length,i=0;
for(;i<len;i=i+1){
if(point[i][0]===o){
return '<span noTtxt="1"> = <a href="#dw_zupu_'+point[i][2]+'">'+point[i][1]+' ['+point[i][2]+'</a></span>';
}
}
point[len]=[o,z,ic];
return  o;
}
dump+='</pre>';
return dump;
}
///族谱用到的函数////////////////////////////////////////////////////////////////////////////
var zuPu =zuPu || function(){};
zuPu.head=(function(){
if(typeof(document)!=='undefined'){
document.write("<style>.dw_zupu_show{padding:10px;font-family:'Courier new';word-wrap:break-word;font-size:16px;}.dw_zupu_first:hover{background:#FFEBCD;}.dw_zupu_wai{background:fuchsia;font-size:12px}.dw_zupu_Function , .dw_same{color:blue}.dw_zupu_same1{color:darkgoldenrod}.dw_zupu_Object{color:red}.dw_zupu_Array{color:orangered}.dw_zupu_String{color:yellowgreen}.dw_zupu_Number{color:green}.dw_zupu_Boolean{color:darkgoldenrod}.dw_zupu_Other{font-style:italic;}.dw_zupu_Undefined , .dw_zupu_Null{color:silver}.dw_zupu_zu1{color:#fff;}.dw_zupu_first:hover .dw_zupu_zu1{color:#999}.dw_zupu_count{float:right;color:dimgray;font-size:14px}.dw_zupu_fund{display:none;font-size:14px;color:#001432}.dw_zupu_funb{cursor:pointer}.dw_zupu_funj{display:inline-block;height:14px;width:14px;border:1px solid #666;line-height:14px;text-align:center;margin-left:1px}</style>");
}
})();
zuPu.toTXT = function(str) {
//Html结构转字符串形式显示
    //var RexStr = /\<|\>|\"|\'|\&|　| /g;
    var RexStr = /\<|\>/g;
    str = str.replace(RexStr,
    function (MatchStr) {
        switch (MatchStr) {
            case "<":
                return "&lt;";
                break;
            case ">":
                return "&gt;";
                break;
            /*case "\"":
                return "&quot;";
                break;
            case "'":
                return "&#39;";
                break;
            case "&":
                return "&amp;";
                break;
            case " ":
                return "&ensp;";
                break;
            case "　":
                return "&emsp;";
                break;*/
            default:
			return MatchStr;
        }
    }
    );
    return str;
}

zuPu.is = function(obj){
return Object.prototype.toString.call(obj).slice(8,-1);
}
zuPu.isyinyong = function(ty){
if(ty==='String'|| ty==='Number' || ty==='Undefined' || ty==='Null' || ty==='Boolean')
return 0;
if(ty==='Function'|| ty==='Object' || ty==='Array')
return 1;
return 2;
}
zuPu.isforin = function(obj){
try {
for(var i in obj)
{
return true;
}
return false;
}catch (e) {
return false;
}
}
zuPu.showChild = function(a){
var last=a.lastChild;
last.innerHTML=(last.innerHTML!='+') ? '+' : '-';
a=a.nextSibling;
a.style.display= (a.style.display!='block') ? 'block' :"none";
}
if(exports)exports.F=zuPu;
