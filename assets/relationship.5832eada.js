import{C as s}from"./container.00ca171b.js";import{a2 as f,T as x,_ as d,a0 as l,a9 as e,aj as o,a as b,o as m,c as t,w as r,b1 as w,$ as a,b as h,e as n,U as p,p as u,h as i,g as c}from"./vendor.80c566e1.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as v}from"./index.8be3106b.js";var $={exports:{}};!function(s){var x,d;x="undefined"!=typeof window?window:f,d=function(){function s(s,f){var x=[],d={};f<0&&(0==s.indexOf(",w")?f=1:0==s.indexOf(",h")&&(f=0)),f>-1&&(s=","+f+s);var e=function(s){var f="";if(!d[s]){d[s]=!0;var o=!0;do{for(var b in f=s,l){var m=l[b];if((s=s.replace(m.exp,m.str)).indexOf("#")>-1){var t=s.split("#");for(b=0;b<t.length;b++)e(t[b]);o=!1;break}}}while(f!=s);o&&(s=s.replace(/,[01]/,"").substr(1),x.push(s))}};return e(s),x}function f(s){var f=[],x=/&[olx]/g;for(var d in e)d.replace(x,"")==s&&f.push(e[d]);return f}function x(s,f){var x={f:["d","s"],m:["d","s"],h:["w",""],w:["","h"],s:["m","f"],d:["m","f"],lb:["os","ob"],ob:["ls","lb"],xb:["xs","xb"],ls:["os","ob"],os:["ls","lb"],xs:["xs","xb"]},d="";if(s.indexOf("&o")>-1?d="&l":s.indexOf("&l")>-1&&(d="&o"),s){var l=(","+(f=f?1:0)+","+(s=s.replace(/&[ol]/g,""))).replace(/,[fhs]|,[olx]b/g,",1").replace(/,[mwd]|,[olx]s/g,",0");l=l.substring(0,l.lastIndexOf(","));for(var e=s.split(",").reverse(),o=l.split(",").reverse(),b=[],m=0;m<e.length;m++)b.push(x[e[m]][o[m]]);return b.join(",")+d}return""}function d(s){for(var f=s.split(","),x=[],d=0;d<f.length;d++){var l=f[d].replace(/&[ol]/,"");x.push(e[l][0])}return x.join("的")}var l=[{exp:/^(.+)&o([^#]+)&l/g,str:"$1$2"},{exp:/^(.+)&l([^#]+)&o/g,str:"$1$2"},{exp:/(,[ds],(.+),[ds])&[ol]/g,str:"$1"},{exp:/m,h/g,str:"f"},{exp:/f,w/g,str:"m"},{exp:/,[xol][sb](,[mf])/g,str:"$1"},{exp:/,[mf],d&([ol])/,str:",$1s"},{exp:/,[mf],s&([ol])/,str:",$1b"},{exp:/^(.*)(,[fh1]|[xol]b),[mf],s(.*)$/,str:"$1$2,xb$3#$1$2$3"},{exp:/^(.*)(,[mw0]|[xol]s),[mf],d(.*)$/,str:"$1$2,xs$3#$1$2$3"},{exp:/(,[mw0]|[xol]s),[mf],s/,str:"$1,xb"},{exp:/(,[fh1]|[xol]b),[mf],d/,str:"$1,xs"},{exp:/^,[mf],s(.+)?$/,str:",1$1#,xb$1"},{exp:/^,[mf],d(.+)?$/,str:",0$1#,xs$1"},{exp:/(,o[sb])+(,o[sb])/,str:"$2"},{exp:/(,l[sb])+(,l[sb])/,str:"$2"},{exp:/^(.*)(,[fh1])(,[olx][sb])+,[olx]b(.*)$/,str:"$1$2,xb$4#$1$2$4"},{exp:/^(.*)(,[mw0])(,[olx][sb])+,[olx]s(.*)$/,str:"$1$2,xs$4#$1$2$4"},{exp:/(,[fh1])(,[olx][sb])+,[olx]s/g,str:"$1,xs"},{exp:/(,[mw0])(,[olx][sb])+,[olx]b/g,str:"$1,xb"},{exp:/^,[olx][sb],[olx]b(.+)?$/,str:"$1#,xb$1"},{exp:/^,[olx][sb],[olx]s(.+)?$/,str:"$1#,xs$1"},{exp:/^,x([sb])$/,str:",o$1#,l$1"},{exp:/,[ds]&o,ob/g,str:",s&o"},{exp:/,[ds]&o,os/g,str:",d&o"},{exp:/,[ds]&l,lb/g,str:",s&l"},{exp:/,[ds]&l,ls/g,str:",d&l"},{exp:/,[ds](&[ol])?,[olx]s/g,str:",d"},{exp:/,[ds](&[ol])?,[olx]b/g,str:",s"},{exp:/(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,m/g,str:"$1"},{exp:/(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,f/g,str:"$1,h"},{exp:/(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,f/g,str:"$1"},{exp:/(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,m/g,str:"$1,w"},{exp:/^,[ds],m(.+)?$/,str:"$1#,w$1"},{exp:/^,[ds],f(.+)?$/,str:"$1#,h$1"},{exp:/,[wh](,[ds])/g,str:"$1"},{exp:/,w,h|,h,w/g,str:""}],e={"":["自己","我"],f:["爸爸","父亲","阿爸","老爸","老窦","爹","爹爹","爹地","爹啲","老爷子"],"f,f":["爷爷","祖父","阿爷","奶爷"],"f,f,f":["曾祖父","太爷","太爷爷","太公","祖公","祖奶爷"],"f,f,f,f":["高祖父","老太爷"],"f,f,f,f,ob":["伯高祖父"],"f,f,f,f,lb":["叔高祖父"],"f,f,f,m":["高祖母","老太太"],"f,f,f,ob":["伯曽祖父","曾伯祖父","伯公太"],"f,f,f,ob,w":["叔曽祖母","曾伯祖母","伯婆太"],"f,f,f,lb":["伯曽祖父","曾叔祖父","叔公太"],"f,f,f,lb,w":["叔曽祖母","曾叔祖母","叔婆太"],"f,f,f,xb,s&o":["堂伯祖父"],"f,f,f,xb,s&o,w":["堂伯祖母"],"f,f,f,xb,s&l":["堂叔祖父"],"f,f,f,xb,s&l,w":["堂叔祖母"],"f,f,f,xb,s,s&o":["从伯父"],"f,f,f,xb,s,s&o,w":["从伯母"],"f,f,f,xb,s,s&l":["从叔父"],"f,f,f,xb,s,s&l,w":["从叔母"],"f,f,f,xb,s,s,s&o":["族兄"],"f,f,f,xb,s,s,s&l":["族弟"],"f,f,f,xs":["太姑婆","姑婆太","曾祖姑母"],"f,f,f,xs,h":["太姑丈公","姑丈公太","曾祖姑丈"],"f,f,f,xs,s&o":["表伯祖父"],"f,f,f,xs,s&o,w":["表伯祖母"],"f,f,f,xs,s&l":["表叔祖父"],"f,f,f,xs,s&l,w":["表叔祖母"],"f,f,m":["曾祖母","太奶奶","太婆","祖婆","祖奶奶"],"f,f,m,xb":["太舅公","太舅爷"],"f,f,m,xb,w":["太舅婆"],"f,f,m,xb,s&o":["表伯祖父"],"f,f,m,xb,s&o,w":["表伯祖母"],"f,f,m,xb,s&l":["表叔祖父"],"f,f,m,xb,s&l,w":["表叔祖母"],"f,f,m,xs":["太姨奶","曾姨奶奶"],"f,f,m,xs,h":["太姨爷"],"f,f,m,xs,s&o":["表伯祖父"],"f,f,m,xs,s&o,w":["表伯祖母"],"f,f,m,xs,s&l":["表叔祖父"],"f,f,m,xs,s&l,w":["表叔祖母"],"f,f,xb":["堂祖父","x爷爷"],"f,f,xb,w":["堂祖母"],"f,f,xb,s&o":["堂伯","堂伯父"],"f,f,xb,s&o,w":["堂伯母"],"f,f,xb,s&l":["堂叔"],"f,f,xb,s,w":["堂婶","堂叔母","堂婶母"],"f,f,xb,s,s&o":["从兄","从兄弟"],"f,f,xb,s,s&o,w":["从嫂"],"f,f,xb,s,s&l":["从弟","从兄弟"],"f,f,xb,s,s&l,w":["从弟妹"],"f,f,xb,s,s,s":["从侄","从侄子"],"f,f,xb,s,s,s,w":["从侄媳妇"],"f,f,xb,s,s,s,s":["从侄孙"],"f,f,xb,s,s,s,d":["从侄孙女"],"f,f,xb,s,s,d":["从侄女"],"f,f,xb,s,s,d,h":["从侄女婿"],"f,f,xb,s,d&o":["从姐","从姐妹"],"f,f,xb,s,d&o,h":["从姐夫"],"f,f,xb,s,d&l":["从妹","从姐妹"],"f,f,xb,s,d&l,h":["从妹夫"],"f,f,xb,d":["堂姑"],"f,f,xb,d,h":["堂姑丈"],"f,f,ob":["伯祖父","伯公","大爷爷","大爷","堂祖父","伯爷爷","伯老爷"],"f,f,ob,w":["伯祖母","伯婆","大奶奶","堂祖母"],"f,f,lb":["叔祖父","叔公","小爷爷","堂祖父","叔爷爷","叔老爷"],"f,f,lb,w":["叔祖母","叔婆","小奶奶","堂祖母","叔奶奶"],"f,f,xs":["姑婆","姑祖母","祖姑母","姑奶奶"],"f,f,xs,h":["姑丈公","姑祖父","祖姑丈","姑爷爷","姑奶爷","姑老爷"],"f,f,xs,s&o":["表伯","表伯父"],"f,f,xs,s&o,w":["表伯母"],"f,f,xs,s&l":["表叔","表叔父"],"f,f,xs,s&l,w":["表婶","表叔母"],"f,f,xs,d":["表姑"],"f,f,xs,d,h":["表姑丈"],"f,m":["奶奶","祖母","阿嫲","嫲嫲"],"f,m,f":["曾外祖父","外太公"],"f,m,m":["曾外祖母","外太婆"],"f,m,xb":["舅公","舅老爷","舅爷爷","舅爷","舅祖","舅奶爷","舅祖父","太舅父"],"f,m,xb,w":["舅婆","舅奶奶","舅祖母","妗婆","太舅母"],"f,m,xb,s&o":["表伯","表伯父"],"f,m,xb,s&o,w":["表伯母"],"f,m,xb,s&l":["表叔","表叔父"],"f,m,xb,s&l,w":["表婶","表叔母"],"f,m,xb,d":["表姑"],"f,m,xb,d,h":["表姑丈"],"f,m,xs":["姨婆","姨奶奶","姨祖父"],"f,m,xs,h":["姨丈公","姨爷爷","姨祖母","姨爷","姨老爷","姨奶爷"],"f,m,xs,s&o":["表伯","表伯父"],"f,m,xs,s&o,w":["表伯母"],"f,m,xs,s&l":["表叔","表叔父"],"f,m,xs,s&l,w":["表婶","表叔母"],"f,m,xs,d":["表姑"],"f,m,xs,d,h":["表姑丈"],"f,xb,s&o":["堂哥","堂兄"],"f,xb,s&o,w":["堂嫂"],"f,xb,s&l":["堂弟"],"f,xb,s&l,w":["堂弟媳"],"f,xb,s,s":["堂侄","堂侄子"],"f,xb,s,s,w":["堂侄媳妇"],"f,xb,s,s,s":["堂侄孙"],"f,xb,s,s,s,w":["堂侄孙媳妇"],"f,xb,s,s,d":["堂侄孙女"],"f,xb,s,s,d,h":["堂侄孙女婿"],"f,xb,s,d":["堂侄女"],"f,xb,s,d,h":["堂侄女婿"],"f,xb,d&o":["堂姐"],"f,xb,d&o,h":["堂姐夫"],"f,xb,d&l":["堂妹"],"f,xb,d&l,h":["堂妹夫"],"f,xb,d,s":["堂外甥"],"f,xb,d,d":["堂外甥女"],"f,ob":["伯父","伯伯","大伯","x伯"],"f,ob,w":["伯母","大娘"],"f,lb":["叔叔","叔父","阿叔","叔","仲父","x叔"],"f,lb,w":["婶婶","婶母","阿婶","家婶","婶","季母"],"f,xs":["姑妈","姑母","姑姑","姑"],"f,xs,h":["姑丈","姑父","姑夫"],"f,xs,s&o":["表哥(姑家)","表哥"],"f,xs,s&o,w":["表嫂(姑家)","表嫂"],"f,xs,s&l":["表弟(姑家)","表弟"],"f,xs,s&l,w":["表弟媳(姑家)","表弟媳"],"f,xs,s,s":["表侄子"],"f,xs,s,s,s":["表侄孙"],"f,xs,s,s,s,w":["表侄孙媳妇"],"f,xs,s,s,d":["表侄孙女"],"f,xs,s,s,d,h":["表侄孙女婿"],"f,xs,s,d":["表侄女"],"f,xs,s,d,s":["外表侄孙"],"f,xs,s,d,s,w":["外表侄孙媳妇"],"f,xs,s,d,d":["外表侄孙女"],"f,xs,s,d,d,h":["外表侄孙女婿"],"f,xs,d&o":["表姐(姑家)","表姐"],"f,xs,d&o,h":["表姐夫(姑家)","表姐夫","表姐丈"],"f,xs,d&l":["表妹(姑家)","表妹"],"f,xs,d&l,h":["表妹夫(姑家)","表妹夫"],"f,xs,d,s":["表外甥"],"f,xs,d,d":["表外甥女"],"f,os":["姑母"],"f,ls":["姑姐"],m:["妈妈","母亲","老妈","阿妈","老母","老妈子","娘","娘亲","妈咪"],"m,f":["外公","姥爷","阿公"],"m,f,f":["外曾祖父","外太祖父","太外祖父","太姥爷","外太公"],"m,f,f,xb":["外太伯公"],"m,f,f,xb,w":["外太伯母"],"m,f,f,xs":["外太姑婆"],"m,f,f,xs,h":["外太姑丈公"],"m,f,f,xs,s&o":["外表伯祖父"],"m,f,f,xs,s&o,w":["外表伯祖母"],"m,f,f,xs,s&l":["外表叔祖父"],"m,f,f,xs,s&l,w":["外表叔祖母"],"m,f,m":["外曾祖母","外太祖母","太外祖母","太姥姥","外太婆"],"m,f,m,xb":["外太舅公"],"m,f,m,xb,w":["外太舅母","外太舅婆"],"m,f,m,xs":["外太姨婆"],"m,f,m,xs,h":["外太姑姨公"],"m,f,xb":["小姥爷","x姥爷"],"m,f,xb,s":["堂舅","堂舅父"],"m,f,xb,s,w":["堂舅妈","堂舅母"],"m,f,xb,d":["堂姨"],"m,f,xb,d,h":["堂姨丈"],"m,f,ob":["外伯祖父","伯姥爷","大姥爷","外伯祖"],"m,f,ob,w":["外伯祖母","伯姥姥","大姥姥","外姆婆"],"m,f,lb":["外叔祖父","叔姥爷","小姥爷","外叔祖"],"m,f,lb,w":["外叔祖母","叔姥姥","小姥姥","外姆婆"],"m,f,xs":["外姑祖母","姑姥姥","外太姑母"],"m,f,xs,h":["外姑祖父","姑姥爷","外太姑父"],"m,f,xs,s":["表舅","表舅父"],"m,f,xs,s,w":["表舅妈","表舅母"],"m,f,xs,d":["表姨","表姨母","表姨妈","表阿姨"],"m,f,xs,d,h":["表姨丈","表姨父"],"m,m":["外婆","姥姥","阿婆"],"m,m,f":["外曾外祖父","外太外公","太姥爷"],"m,m,m":["外曾外祖母","外太外婆","太姥姥"],"m,m,xb":["外舅公","外舅祖父","舅姥爷","舅外祖父","舅外公","舅公"],"m,m,xb,w":["外舅婆","外舅祖母","舅姥姥"],"m,m,xb,s":["表舅","表舅父"],"m,m,xb,s,w":["表舅妈","表舅母"],"m,m,xb,d":["表姨","表姨母","表姨妈","表阿姨"],"m,m,xb,d,h":["表姨丈","表姨父"],"m,m,xs":["外姨婆","外姨祖母","姨姥姥","姨婆"],"m,m,xs,h":["外姨丈公","外姨祖父","姨姥爷"],"m,m,xs,s":["表舅","表舅父"],"m,m,xs,s,w":["表舅妈","表舅母"],"m,m,xs,d":["表姨","表姨母","表姨妈","表阿姨"],"m,m,xs,d,h":["表姨丈","表姨父"],"m,xb":["舅舅","舅父","舅","娘舅","舅仔","x舅"],"m,xb,w":["舅妈","舅母","妗妗","妗母","阿妗","x舅妈"],"m,xb,s&o":["表哥(舅家)","表哥"],"m,xb,s&o,w":["表嫂(舅家)","表嫂"],"m,xb,s&l":["表弟(舅家)","表弟"],"m,xb,s&l,w":["表弟媳(舅家)","表弟媳"],"m,xb,s,s":["表侄子"],"m,xb,s,s,s":["表侄孙"],"m,xb,s,s,s,w":["表侄孙媳妇"],"m,xb,s,s,d":["表侄孙女"],"m,xb,s,s,d,h":["表侄孙女婿"],"m,xb,s,d":["表侄女"],"m,xb,s,d,s":["外表侄孙"],"m,xb,s,d,s,w":["外表侄孙媳妇"],"m,xb,s,d,d":["外表侄孙女"],"m,xb,s,d,d,h":["外表侄孙女婿"],"m,xb,d&o":["表姐(舅家)","表姐"],"m,xb,d&o,h":["表姐夫(舅家)","表姐夫","表姐丈"],"m,xb,d&l":["表妹(舅家)","表妹"],"m,xb,d&l,h":["表妹夫(舅家)","表妹夫"],"m,xb,d,s":["表外甥"],"m,xb,d,d":["表外甥女"],"m,ob":["大舅"],"m,ob,w":["大舅妈"],"m,lb":["小舅","舅父仔"],"m,lb,w":["小舅妈"],"m,xs":["姨妈","姨母","姨姨","姨娘","阿姨","姨","x姨","x姨妈"],"m,xs,h":["姨丈","姨夫","姨父","x姨父"],"m,xs,s&o":["表哥(姨家)","表哥"],"m,xs,s&o,w":["表嫂(姨家)","表嫂"],"m,xs,s&l":["表弟(姨家)","表弟"],"m,xs,s&l,w":["表弟媳(姨家)","表弟媳"],"m,xs,s,s":["表侄子"],"m,xs,s,s,s":["表侄孙"],"m,xs,s,s,s,w":["表侄孙媳妇"],"m,xs,s,s,d":["表侄孙女"],"m,xs,s,s,d,h":["表侄孙女婿"],"m,xs,s,d":["表侄女"],"m,xs,s,d,s":["外表侄孙"],"m,xs,s,d,s,w":["外表侄孙媳妇"],"m,xs,s,d,d":["外表侄孙女"],"m,xs,s,d,d,h":["外表侄孙女婿"],"m,xs,d&o":["表姐(姨家)","表姐"],"m,xs,d&o,h":["表姐夫(姨家)","表姐夫","表姐丈"],"m,xs,d&l":["表妹(姨家)","表妹"],"m,xs,d&l,h":["表妹夫(姨家)","表妹夫"],"m,xs,d,s":["表外甥"],"m,xs,d,d":["表外甥女"],"m,os":["大姨","大姨妈"],"m,os,h":["大姨父","大姨丈","大姨夫"],"m,ls":["小姨","小姨妈","姨仔"],"m,ls,h":["小姨父","小姨丈","小姨夫"],h:["老公","丈夫","先生","官人","男人","汉子","夫","夫君","爱人"],"h,f":["公公"],"h,f,f":["祖翁"],"h,f,f,f":["太公翁"],"h,f,f,m":["太奶亲"],"h,f,m":["祖婆"],"h,f,ob":["伯翁"],"h,f,ob,w":["伯婆"],"h,f,lb":["叔翁"],"h,f,lb,w":["叔婆"],"h,f,xb,s&o":["堂大伯","堂兄"],"h,f,xb,s&o,w":["堂嫂"],"h,f,xb,s&l":["堂叔仔","堂弟"],"h,f,xb,s&l,w":["堂小弟"],"h,m":["婆婆"],"h,m,xb":["舅公"],"h,m,xb,w":["舅婆"],"h,m,xs":["姨婆"],"h,m,xs,h":["姨公"],"h,xb,s":["侄子","侄儿"],"h,xb,s,w":["侄媳","侄媳妇"],"h,xb,s,s":["侄孙","侄孙子"],"h,xb,s,s,w":["侄孙媳"],"h,xb,s,d":["侄孙女"],"h,xb,s,d,h":["侄孙女婿"],"h,xb,d":["侄女"],"h,xb,d,h":["侄女婿","侄婿"],"h,xb,d,s":["外侄孙"],"h,xb,d,s,w":["外侄媳妇"],"h,xb,d,d":["外侄孙女"],"h,xb,d,d,h":["外侄孙女婿"],"h,ob":["大伯子","大伯哥","夫兄"],"h,ob,w":["大婶子","大伯嫂","大伯妇","伯娘","大伯娘","大嫂","夫兄嫂","妯娌"],"h,lb":["小叔子","小叔弟"],"h,lb,w":["小婶子","小叔妇","小叔媳妇","妯娌"],"h,xs,s":["外甥"],"h,xs,s,w":["外甥媳妇"],"h,xs,s,s":["外甥孙"],"h,xs,s,s,w":["外甥孙媳妇"],"h,xs,s,s,s":["外曾甥孙"],"h,xs,s,s,d":["外曾甥孙女"],"h,xs,s,d":["外甥孙女"],"h,xs,s,d,h":["外甥孙女婿"],"h,xs,s,d,s":["外曾甥孙"],"h,xs,s,d,d":["外曾甥孙女"],"h,xs,d":["外甥女"],"h,xs,d,h":["外甥女婿"],"h,xs,d,s":["外甥孙"],"h,xs,d,s,w":["外甥孙媳妇"],"h,xs,d,s,s":["外曾甥孙"],"h,xs,d,s,d":["外曾甥孙女"],"h,xs,d,d":["外甥孙女"],"h,xs,d,d,h":["外甥孙女婿"],"h,xs,d,d,s":["外曾甥孙"],"h,xs,d,d,d":["外曾甥孙女"],"h,os":["大姑子","大姑","大娘姑"],"h,os,h":["大姑夫","姊丈","大姑姐夫"],"h,ls":["小姑子","小姑","姑仔"],"h,ls,h":["小姑夫","小姑妹夫"],w:["老婆","妻子","太太","媳妇","夫人","女人","婆娘","妻","内人","娘子","爱人"],"w,f":["岳父","老丈人","丈人","泰山","妻父"],"w,f,f":["太岳父"],"w,f,f,ob":["太伯岳"],"w,f,f,ob,w":["太伯岳母"],"w,f,f,lb,":["太叔岳"],"w,f,f,lb,w":["太叔岳母"],"w,f,f,xb,s&o":["姻伯"],"w,f,f,xb,s&o,w":["姻姆"],"w,f,f,xb,s&l":["姻叔"],"w,f,f,xb,s&l,w":["姻婶"],"w,f,f,xs":["太姑岳母"],"w,f,f,xs,h":["太姑岳父"],"w,f,m":["太岳母"],"w,f,m,xb":["太舅岳父"],"w,f,m,xb,w":["太舅岳母"],"w,f,m,xs":["太姨岳母"],"w,f,m,xs,h":["太姨岳父"],"w,f,xb,s&o":["堂大舅","姻家兄"],"w,f,xb,s&l":["堂舅仔","姻家弟"],"w,f,xb,d&o":["堂大姨"],"w,f,xb,d&l":["堂姨仔"],"w,f,ob":["伯岳","伯岳父"],"w,f,ob,w":["伯岳母"],"w,f,lb":["叔岳","叔岳父"],"w,f,lb,w":["叔岳母"],"w,f,xs":["姑岳母"],"w,f,xs,s&o":["表大舅"],"w,f,xs,s&l":["表舅仔"],"w,f,xs,d&o":["表大姨"],"w,f,xs,d&l":["表姨仔"],"w,m":["岳母","丈母娘"],"w,m,f":["外太岳父"],"w,m,m":["外太岳母"],"w,m,xb":["舅岳父"],"w,m,xb,w":["舅岳母"],"w,m,xb,s&o":["表大舅"],"w,m,xb,s&l":["表舅仔"],"w,m,xb,d&o":["表大姨"],"w,m,xb,d&l":["表姨仔"],"w,m,xs":["姨岳母"],"w,m,xs,h":["姨岳父"],"w,m,xs,s&o":["表大舅"],"w,m,xs,s&l":["表舅仔"],"w,m,xs,d&o":["表大姨"],"w,m,xs,d&l":["表姨仔"],"w,xb,s":["内侄","妻侄"],"w,xb,s,w":["内侄媳妇"],"w,xb,s,s":["侄孙"],"w,xb,s,s,w":["侄孙媳妇"],"w,xb,s,d":["侄孙女"],"w,xb,s,d,h":["侄孙女婿"],"w,xb,d":["内侄女","妻侄女"],"w,xb,d,h":["内侄女婿"],"w,xb,d,s":["外侄孙"],"w,xb,d,s,w":["外侄孙媳妇"],"w,xb,d,d":["外侄孙女"],"w,xb,d,d,h":["外侄孙女婿"],"w,ob":["大舅哥","大舅子","内兄"],"w,ob,w":["舅嫂","大舅妇","大舅媳妇","大妗子","内嫂"],"w,lb":["小舅子","内弟"],"w,lb,w":["舅弟媳","小舅妇","小舅媳妇","小妗子"],"w,xs,s":["姨甥","妻外甥"],"w,xs,s,w":["姨甥媳妇"],"w,xs,s,s":["姨甥孙"],"w,xs,s,s,w":["姨甥孙媳妇"],"w,xs,s,d":["姨甥孙女"],"w,xs,s,d,h":["姨甥孙女婿"],"w,xs,d":["姨甥女","妻外甥女"],"w,xs,d,h":["姨甥女婿"],"w,xs,d,s":["姨甥孙"],"w,xs,d,s,w":["姨甥孙媳妇"],"w,xs,d,d":["姨甥孙女"],"w,xs,d,d,h":["姨甥孙女婿"],"w,os":["大姨子","大姨姐","妻姐"],"w,os,h":["大姨夫","大姨姐夫","襟兄","连襟"],"w,ls":["小姨子","小姨姐","妻妹","小妹儿"],"w,ls,h":["小姨夫","小姨妹夫","襟弟","连襟"],xb:["兄弟"],"xb,w,f":["姻世伯","亲家爷","亲爹","亲伯"],"xb,w,m":["姻伯母","亲家娘","亲娘"],"xb,s":["侄子","侄儿"],"xb,s,w":["侄媳","侄媳妇"],"xb,s,s":["侄孙","侄孙子"],"xb,s,s,w":["侄孙媳"],"xb,s,s,s":["侄曾孙"],"xb,s,s,d":["侄曾孙女"],"xb,s,d":["侄孙女"],"xb,s,d,h":["侄孙女婿"],"xb,d":["侄女"],"xb,d,h":["侄女婿"],"xb,d,s":["外侄孙","外侄孙子"],"xb,d,s,w":["外侄孙媳妇"],"xb,d,d":["外侄孙女"],"xb,d,d,h":["外侄孙女婿"],ob:["哥哥","哥","兄","阿哥","大哥","大佬","老哥"],"ob,w":["嫂子","大嫂","嫂","阿嫂"],"ob,w,f":["姻伯父"],"ob,w,m":["姻伯母"],lb:["弟弟","弟","细佬","老弟"],"lb,w":["弟妹","弟媳","弟媳妇"],"lb,w,f":["姻叔父"],"lb,w,m":["姻叔母"],xs:["姐妹"],"xs,h,f":["姻世伯","亲家爷","亲爹","亲伯"],"xs,h,m":["姻伯母","亲家娘","亲娘"],"xs,s":["外甥"],"xs,s,w":["外甥媳妇"],"xs,s,s":["外甥孙"],"xs,s,s,w":["外甥孙媳妇"],"xs,s,s,s":["外曾甥孙"],"xs,s,s,d":["外曾甥孙女"],"xs,s,d":["外甥孙女"],"xs,s,d,h":["外甥孙女婿"],"xs,s,d,s":["外曾甥孙"],"xs,s,d,d":["外曾甥孙女"],"xs,d":["外甥女"],"xs,d,h":["外甥女婿"],"xs,d,s":["外甥孙"],"xs,d,s,w":["外甥孙媳妇"],"xs,d,s,s":["外曾甥孙"],"xs,d,s,d":["外曾甥孙女"],"xs,d,d":["外甥孙女"],"xs,d,d,h":["外甥孙女婿"],"xs,d,d,s":["外曾甥孙"],"xs,d,d,d":["外曾甥孙女"],os:["姐姐","姐","家姐","阿姐","阿姊"],"os,h":["姐夫","姊夫","姊婿"],ls:["妹妹","妹","老妹"],"ls,h":["妹夫","妹婿"],s:["儿子","仔","阿仔","仔仔"],"s,w":["儿媳妇","儿媳"],"s,w,xb":["姻侄"],"s,w,xs":["姻侄女"],"s,s":["孙子"],"s,s,w":["孙媳妇","孙媳"],"s,s,s":["曾孙"],"s,s,s,w":["曾孙媳妇"],"s,s,s,s":["玄孙","元孙","膀孙"],"s,s,s,d":["玄孙女"],"s,s,s,s,s":["来孙"],"s,s,d":["曾孙女"],"s,s,d,h":["曾孙女婿"],"s,s,d,s":["外玄孙"],"s,s,d,d":["外玄孙女"],"s,d":["孙女"],"s,d,h":["孙女婿"],"s,d,s":["曾外孙"],"s,d,d":["曾外孙女"],d:["女儿","千金","女","阿女","女女","掌上明珠"],"d,h":["女婿","女婿子","女婿儿"],"d,h,xb":["姻侄"],"d,h,xs":["姻侄女"],"d,s":["外孙"],"d,s,w":["外孙媳"],"d,s,s":["外曾孙","重外孙"],"d,s,d":["外曾孙女","重外孙女"],"d,d":["外孙女"],"d,d,h":["外孙女婿"],"d,d,s":["外曾外孙"],"d,d,d":["外曾外孙女"],"s,w,m":["亲家母"],"s,w,f":["亲家公","亲家翁"],"s,w,f,f":["太姻翁"],"s,w,f,m":["太姻姆"],"s,w,f,ob":["姻兄"],"s,w,f,lb":["姻弟"],"d,h,m":["亲家母"],"d,h,f":["亲家公","亲家翁"],"d,h,f,f":["太姻翁"],"d,h,f,m":["太姻姆"],"d,h,f,ob":["姻兄"],"d,h,f,lb":["姻弟"]},o=function(s){for(var f,x=[],d={},l=0;null!=(f=s[l]);l++)d[f]||(x.push(f),d[f]=!0);return x};return function(l){var b={text:"",sex:-1,type:"default",reverse:!1};for(var m in l)b[m]=l[m];for(var t=function(s){for(var f=(s=s.replace(/[二|三|四|五|六|七|八|九|十]{1,2}/g,"x")).split("的"),x=[],d=!0;f.length;){var l=f.shift(),o=[],b=!1;for(var m in e)e[m].indexOf(l)>-1&&(!m&&f.length||o.push(m),b=!0);if(b||(d=!1),x.length){var t=[];for(m=0;m<x.length;m++)for(var r=0;r<o.length;r++)t.push(x[m]+","+o[r]);x=t}else for(m=0;m<o.length;m++)x.push(","+o[m])}return d?x:[]}(b.text),r=[],w=0;w<t.length;w++)for(var a=s(t[w],b.sex),h=0;h<a.length;h++){var n=a[h];if("chain"==b.type)(p=d(n))&&r.push(p);else if(b.reverse&&(n=x(n,b.sex)),e[n])r.push(e[n][0]);else{var p;if((p=f(n)).length||(p=f(n=n.replace(/&[ol]/g,""))),p.length||(p=f(n=n.replace(/[ol]/g,"x"))),!p.length){p=f(n.replace(/x/g,"l"));var u=n.replace(/x/g,"o");p=p.concat(f(u))}for(var i=0;i<p.length;i++)r.push(p[i][0])}}return o(r)}},s.exports?s.exports=d():x.relationship=d()}($);var g=$.exports,_=".ant-form-item[data-v-69e14324] {\n  margin-bottom: 0.8rem;\n}\n.ant-typography textarea[data-v-69e14324] {\n  margin-bottom: 0.8rem;\n}\n.ant-typography h5[data-v-69e14324] {\n  margin: 0 0 0.8rem;\n}\n.ant-space[data-v-69e14324] {\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 0.8rem;\n}";const{Button:y,Group:k}=w,{Item:C}=d,{TextArea:j}=a,O={name:"relationship",components:{Container:s,Typography:x,RadioGroup:k,RadioButton:y,Form:d,FormItem:C,TextArea:j,Button:l,Space:e,Divider:o},data:()=>({type:"default",sex:1,reverse:0,input:""}),computed:{result(){try{return g({text:this.input,sex:this.sex,type:this.type,reverse:Boolean(this.reverse)}).join("\n")+"\n"}catch(s){return"\n"}}},methods:{add(s){if(!s)return;const f=this.input.split("的").map((s=>s.trim())).filter((s=>s));f.push(s),this.input=f.join("的")},clear(){this.input=""},backspace(){const s=this.input.split("的").map((s=>s.trim())).filter((s=>s));s.length&&s.pop(),this.input=s.join("的")}}},B=s=>(u("data-v-69e14324"),s=s(),i(),s),R=B((()=>n("blockquote",null,[n("p",null,"逢年过节遇到三姑六婆，拒绝叫不出口的尴尬！轻松搞定亲戚关系～"),n("p",null,[c("来源: "),n("a",{href:"https://github.com/mumuy/relationship"},"mumuy/relationship")])],-1))),T=c("找称呼"),I=c("找关系"),U=c("男"),z=c("女"),F=c("我称呼对方"),A=c("对方称呼我"),G=B((()=>n("h5",null,"快速选择：",-1))),D=c("父"),S=c("母"),q=c("夫"),E=c("妻"),H=c("兄"),J=c("弟"),K=c("姐"),L=c("妹"),M=c("子"),N=c("女"),P=c("回退"),Q=c("清空"),V=c("计算"),W=B((()=>n("h5",null,"计算结果：",-1))),X=B((()=>n("h5",null,"使用案例",-1))),Y=B((()=>n("ol",null,[n("li",null,[c("使用别称查询："),n("code",null,"姥姥的爸爸的老窦"),c(" / "),n("code",null,"娘子的爹地的母亲"),c(" / "),n("code",null,"岳丈的妈咪")]),n("li",null,[c("使用合称查询："),n("code",null,"舅舅的孙辈"),c(" / "),n("code",null,"爸爸的祖父母"),c(" / "),n("code",null,"姑妈的兄弟姐妹")]),n("li",null,[c("大小数字混合查询："),n("code",null,"儿子的大舅的二姑妈的七舅姥爷")]),n("li",null,[c("不限制方向祖辈孙辈跨度，反复查询："),n("code",null,"舅妈的婆婆的外甥的姨妈的侄子的爷爷")])],-1)));function Z(s,f,x,d,l,e){const o=b("RadioButton"),w=b("RadioGroup"),a=b("FormItem"),u=b("Form"),i=b("TextArea"),c=b("Button"),v=b("Divider"),$=b("Space"),g=b("Typography"),_=b("container");return m(),t(_,null,{default:r((()=>[h(g,null,{default:r((()=>[R,h(u,null,{default:r((()=>[h(a,{label:"计算类型"},{default:r((()=>[h(w,{value:s.type,"onUpdate:value":f[0]||(f[0]=f=>s.type=f)},{default:r((()=>[h(o,{value:"default"},{default:r((()=>[T])),_:1}),h(o,{value:"chain"},{default:r((()=>[I])),_:1})])),_:1},8,["value"])])),_:1}),h(a,{label:"我的性别"},{default:r((()=>[h(w,{value:s.sex,"onUpdate:value":f[1]||(f[1]=f=>s.sex=f)},{default:r((()=>[h(o,{value:1},{default:r((()=>[U])),_:1}),h(o,{value:0},{default:r((()=>[z])),_:1})])),_:1},8,["value"])])),_:1}),h(a,{label:"称呼方式"},{default:r((()=>[h(w,{value:s.reverse,"onUpdate:value":f[2]||(f[2]=f=>s.reverse=f)},{default:r((()=>[h(o,{value:0},{default:r((()=>[F])),_:1}),h(o,{value:1},{default:r((()=>[A])),_:1})])),_:1},8,["value"])])),_:1})])),_:1}),h(i,{value:s.input,"onUpdate:value":f[3]||(f[3]=f=>s.input=f),placeholder:"称谓间用'的'字分开...","auto-size":{minRows:2,maxRows:5},style:{resize:"none"}},null,8,["value"]),G,h($,{size:8},{default:r((()=>[h(c,{onClick:f[4]||(f[4]=s=>e.add("爸爸"))},{default:r((()=>[D])),_:1}),h(c,{onClick:f[5]||(f[5]=s=>e.add("妈妈"))},{default:r((()=>[S])),_:1}),h(v,{type:"vertical"}),h(c,{onClick:f[6]||(f[6]=s=>e.add("老公"))},{default:r((()=>[q])),_:1}),h(c,{onClick:f[7]||(f[7]=s=>e.add("老婆"))},{default:r((()=>[E])),_:1}),h(v,{type:"vertical"}),h(c,{onClick:f[8]||(f[8]=s=>e.add("哥哥"))},{default:r((()=>[H])),_:1}),h(c,{onClick:f[9]||(f[9]=s=>e.add("弟弟"))},{default:r((()=>[J])),_:1}),h(v,{type:"vertical"}),h(c,{onClick:f[10]||(f[10]=s=>e.add("姐姐"))},{default:r((()=>[K])),_:1}),h(c,{onClick:f[11]||(f[11]=s=>e.add("妹妹"))},{default:r((()=>[L])),_:1}),h(v,{type:"vertical"}),h(c,{onClick:f[12]||(f[12]=s=>e.add("儿子"))},{default:r((()=>[M])),_:1}),h(c,{onClick:f[13]||(f[13]=s=>e.add("女儿"))},{default:r((()=>[N])),_:1})])),_:1}),h($,{size:8},{default:r((()=>[h(c,{type:"primary",onClick:e.backspace},{default:r((()=>[P])),_:1},8,["onClick"]),h(c,{type:"primary",onClick:e.clear},{default:r((()=>[Q])),_:1},8,["onClick"]),h(c,{type:"primary"},{default:r((()=>[V])),_:1})])),_:1}),W,n("pre",null,p(e.result),1),h(v),X,Y])),_:1})])),_:1})}var ss=v(O,[["render",Z],["__scopeId","data-v-69e14324"]]);export{ss as default};
