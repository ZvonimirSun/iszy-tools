import{aR as H,j as J,R as M,o as Q,l as T,w as S,K as y,m as j,W as B,$ as X}from"./index-Abyzm83G.js";import{a as ee,E as te}from"./el-form-item-l8KE9Pcj.js";import"./castArray-DSBHn2Wt.js";var A={},Y=/^([+-])?0*(\d+)(\.(\d+))?$/,K=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,re=A.e2ten=function(r){var e=K.exec(r.toString());if(!e)return r;var n=e[2],t=e[4]||"",a=e[5]?+e[5]:0;if(a>0){var c=t.substr(0,a);c=c.length<a?c+new Array(a-c.length+1).join("0"):c,t=t.substr(a),n+=c}else{a=-a;var u=n.length-a;u=u<0?0:u;var o=n.substr(u,a);o=o.length<a?new Array(a-o.length+1).join("0")+o:o,n=n.substring(0,u),t=o+t}return n=n==""?"0":n,(e[1]=="-"?"-":"")+n+(t?"."+t:"")};A.getNumbResult=function(r){var e=Y.exec(r.toString());if(!e&&K.test(r.toString())&&(e=Y.exec(re(r.toString()))),e)return{int:e[2],decimal:e[4],minus:e[1]=="-",num:e.slice(1,3).join("")}};A.centerArray=function r(e,n){if(e.splice.apply(e,[0,n.length].concat(n.splice(0,n.length))),arguments.length>2){var t=[].slice.call(arguments,2);t.unshift(e),r.apply(null,t)}return e};var ne=A.hasAttr=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)};A.extend=function(r){for(var e,n=arguments[0]||{},t=Array.prototype.slice.call(arguments,1),a=0;a<t.length;a++){var c=t[a];for(e in c)ne(c,e)&&(n[e]=c[e])}return n};A.getDigit=function(r){return r>=5?(r-4)*4+4:r};A.unshiftZero=function(r,e){if(e==null&&(e=1),!(e<=0))for(;e--;)r.unshift(0)};A.clearZero=function(r,e,n){if(r==null)return"";var t=~"*.?+$^[](){}|\\/".indexOf(e)?"\\"+e:e,a=new RegExp("^"+t+"+"),c=new RegExp(t+"+$"),u=new RegExp(t+"{2}","g");return r=r.toString(),n=="^"&&(r=r.replace(a,"")),(!n||n=="$")&&(r=r.replace(c,"")),(!n||n=="nto1")&&(r=r.replace(u,e)),r};var m=A;function $(r,e){var n=m.getNumbResult(r);if(!n)return r;e=e||{};var t=this.ch,a=this.ch_u,c=this.ch_f||"",u=this.ch_d||".",o=t.charAt(0),f=n.int,l=n.decimal,h=n.minus,s="",i="",v=h?c:"",_=function R(d,me,ve){d=m.getNumbResult(d).int;var C="",Z=arguments.length>1?arguments[1]:e.tenMin,V=d.length;if(V==1)return t.charAt(+d);if(V<=4)for(var k=0,z=V;z--;){var I=+d.charAt(k);C+=Z&&V==2&&k==0&&I==1?"":t.charAt(I),C+=I&&z?a.charAt(z):"",k++}else{for(var U=d.length/4>>0,L=d.length%4;L==0||!a.charAt(3+U);)L+=4,U--;var q=d.substr(0,L),D=d.substr(L);C=R(q,Z)+a.charAt(3+U)+(D.charAt(0)=="0"?o:"")+R(D,D.length>4?Z:!1)}return C=m.clearZero(C,o),C};if(l){l=m.clearZero(l,"0","$");for(var g=0;g<l.length;g++)i+=t.charAt(+l.charAt(g));i=i?u+i:""}if(s=_(f),e.ww&&a.length>5){var b=a.charAt(4),x=a.charAt(5),p=s.lastIndexOf(x);~p&&(s=s.substring(0,p).replace(new RegExp(x,"g"),b+b)+s.substring(p))}return v+s+i}function ae(r,e){r=r.toString();var n=r.split(this.ch_d),t=n[0].replace(this.ch_f,""),a=n[1],c=!!~n[0].indexOf(this.ch_f),u=this.ch_u.charAt(1),o=this.ch_u.charAt(4),f=this.ch_u.charAt(5);t=t.replace(new RegExp(o+"{2}(?!"+o+")","g"),f);for(var l=t.split(""),h=0,s=0,i=[],v=[],_=[],g=0;g<l.length;g++){var b=l[g],x=0,p=0;if(~(x=this.ch.indexOf(b)))x>0&&_.unshift(x);else if(~(p=this.ch_u.indexOf(b))){var R=m.getDigit(p);h>p?(m.unshiftZero(_,R),m.centerArray(v,_)):p>=s?(g==0&&(_=[1]),m.centerArray(i,v,_),i.length>0&&m.unshiftZero(i,R),s=p):(_.length==0&&u==b&&(_=[1]),m.centerArray(v,_),m.unshiftZero(v,m.getDigit(p)),h=p)}}m.centerArray(i,v,_).reverse(),i.length==0&&i.push(0);var d=0;if(a){i.push("."),d="0.";for(var g=0;g<a.length;g++)d+=this.ch.indexOf(a.charAt(g)),i.push(this.ch.indexOf(a.charAt(g)));d=+d}return c&&i.unshift("-"),e&&e.outputString?i.join(""):parseFloat(i.join(""))}function le(r,e){var n={ww:!0,complete:!1,outSymbol:!0,unOmitYuan:!1,forceZheng:!1},t=m.getNumbResult(r),a=this.ch.charAt(0);if(e=typeof e=="object"?e:{},!t)return r;e=m.extend(n,e);var c=t.int,u=t.decimal||"",o=e.outSymbol?this.m_t:"",f=t.minus?this.ch_f:"",l="";if(e.complete){for(var h=1;h<this.m_u.length;h++)l+=$.call(this,u.charAt(h-1)||"0")+this.m_u.charAt(h);f+=$.call(this,c,e)+this.m_u.charAt(0)}else{var s=e.unOmitYuan||c!=="0";if(u=u.substr(0,this.m_u.length-1),u=m.clearZero(u,"0","$"),u)for(var i,h=0;h<this.m_u.length-1;h++)u.charAt(h)&&u.charAt(h)!="0"&&(l+=$.call(this,u.charAt(h))+this.m_u.charAt(h+1),i=!1),u.charAt(h)==="0"&&!i&&((h!=0||c!=="0")&&(l+=a),i=!0);(s||!l)&&(f+=$.call(this,c,e)+this.m_u.charAt(0)),e.forceZheng?(l==""||l.charAt(l.length-1)!==this.m_u[2])&&(l+=this.m_z):f+=t.decimal?"":this.m_z,e.forceZheng}return o+f+l}var P={CL:$,unCL:ae,toMoney:le},E=P,F=A;function ue(r,e){return{encodeS:function(n,t){return t=F.extend({ww:!0,tenMin:!0},t),E.CL.call(r,n,t)},encodeB:function(n,t){return t=F.extend({ww:!0},t),E.CL.call(e,n,t)},decodeS:function(){return E.unCL.apply(r,arguments)},decodeB:function(){return E.unCL.apply(e,arguments)},toMoney:function(n,t){return t=F.extend({ww:!0},t),E.toMoney.call(e,n,t)}}}var ce=ue,he={ch:"零一二三四五六七八九",ch_u:"个十百千万亿",ch_f:"负",ch_d:"点"},ie={ch:"零壹贰叁肆伍陆柒捌玖",ch_u:"个拾佰仟万亿",ch_f:"负",ch_d:"点",m_t:"人民币",m_z:"整",m_u:"元角分"},fe={ch:"零一二三四五六七八九",ch_u:"個十百千萬億",ch_f:"負",ch_d:"點"},oe={ch:"零壹貳參肆伍陸柒捌玖",ch_u:"個拾佰仟萬億",ch_f:"負",ch_d:"點",m_t:"$",m_z:"整",m_u:"圓角分"},G=P,W=ce,O={s:he,b:ie,hk_s:fe,hk_b:oe},N=function(r){this.lang=r,this.encode=function(){return G.CL.apply(r,arguments)},this.decode=function(){return G.unCL.apply(r,arguments)},this.toMoney=function(){return G.toMoney.apply(r,arguments)}};N.langs=O;N.cn=W(O.s,O.b);N.hk=W(O.hk_s,O.hk_b);var se=N;const w=H(se),pe=J({__name:"nzh",setup(r){const e=M(""),n=M(""),t=M(""),a=M("");function c(f){if(f)try{n.value=w.cn.encodeS(f),t.value=w.cn.encodeB(f),e.value=w.cn.toMoney(f)}catch{}}function u(f){if(f)try{a.value=w.cn.decodeS(f),t.value=w.cn.encodeB(a.value),e.value=w.cn.toMoney(a.value)}catch{}}function o(f){if(f)try{a.value=w.cn.decodeB(f),n.value=w.cn.encodeS(a.value),e.value=w.cn.toMoney(a.value)}catch{}}return(f,l)=>{const h=X,s=ee,i=te;return Q(),T(i,{"label-position":"top"},{default:S(()=>[y(s,{label:"小写"},{default:S(()=>[y(h,{modelValue:j(a),"onUpdate:modelValue":l[0]||(l[0]=v=>B(a)?a.value=v:null),onChange:c},null,8,["modelValue"])]),_:1}),y(s,{label:"中文小写"},{default:S(()=>[y(h,{modelValue:j(n),"onUpdate:modelValue":l[1]||(l[1]=v=>B(n)?n.value=v:null),onChange:u},null,8,["modelValue"])]),_:1}),y(s,{label:"中文大写"},{default:S(()=>[y(h,{modelValue:j(t),"onUpdate:modelValue":l[2]||(l[2]=v=>B(t)?t.value=v:null),onChange:o},null,8,["modelValue"])]),_:1}),y(s,{label:"中文金额"},{default:S(()=>[y(h,{modelValue:j(e),"onUpdate:modelValue":l[3]||(l[3]=v=>B(e)?e.value=v:null),readonly:""},null,8,["modelValue"])]),_:1})]),_:1})}}});export{pe as default};