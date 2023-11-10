import{a3 as N,I as T}from"./index.js";var x={exports:{}};(function(O,z){(function(y,a){O.exports=a()})(N,function(){var y,a,v=1e3,p=6e4,g=36e5,M=864e5,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S=31536e6,Y=2628e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:S,months:Y,days:M,hours:g,minutes:p,seconds:v,milliseconds:1,weeks:6048e5},$=function(n){return n instanceof w},m=function(n,t,s){return new w(n,s,t.$l)},l=function(n){return a.p(n)+"s"},k=function(n){return n<0},d=function(n){return k(n)?Math.ceil(n):Math.floor(n)},F=function(n){return Math.abs(n)},c=function(n,t){return n?k(n)?{negative:!0,format:""+F(n)+t}:{negative:!1,format:""+n+t}:{negative:!1,format:""}},w=function(){function n(s,i,r){var e=this;if(this.$d={},this.$l=r,s===void 0&&(this.$ms=0,this.parseFromMilliseconds()),i)return m(s*f[l(i)],this);if(typeof s=="number")return this.$ms=s,this.parseFromMilliseconds(),this;if(typeof s=="object")return Object.keys(s).forEach(function(h){e.$d[l(h)]=s[h]}),this.calMilliseconds(),this;if(typeof s=="string"){var o=s.match(P);if(o){var u=o.slice(2).map(function(h){return h!=null?Number(h):0});return this.$d.years=u[0],this.$d.months=u[1],this.$d.weeks=u[2],this.$d.days=u[3],this.$d.hours=u[4],this.$d.minutes=u[5],this.$d.seconds=u[6],this.calMilliseconds(),this}}return this}var t=n.prototype;return t.calMilliseconds=function(){var s=this;this.$ms=Object.keys(this.$d).reduce(function(i,r){return i+(s.$d[r]||0)*f[r]},0)},t.parseFromMilliseconds=function(){var s=this.$ms;this.$d.years=d(s/S),s%=S,this.$d.months=d(s/Y),s%=Y,this.$d.days=d(s/M),s%=M,this.$d.hours=d(s/g),s%=g,this.$d.minutes=d(s/p),s%=p,this.$d.seconds=d(s/v),s%=v,this.$d.milliseconds=s},t.toISOString=function(){var s=c(this.$d.years,"Y"),i=c(this.$d.months,"M"),r=+this.$d.days||0;this.$d.weeks&&(r+=7*this.$d.weeks);var e=c(r,"D"),o=c(this.$d.hours,"H"),u=c(this.$d.minutes,"M"),h=this.$d.seconds||0;this.$d.milliseconds&&(h+=this.$d.milliseconds/1e3,h=Math.round(1e3*h)/1e3);var b=c(h,"S"),E=s.negative||i.negative||e.negative||o.negative||u.negative||b.negative,I=o.format||u.format||b.format?"T":"",D=(E?"-":"")+"P"+s.format+i.format+e.format+I+o.format+u.format+b.format;return D==="P"||D==="-P"?"P0D":D},t.toJSON=function(){return this.toISOString()},t.format=function(s){var i=s||"YYYY-MM-DDTHH:mm:ss",r={Y:this.$d.years,YY:a.s(this.$d.years,2,"0"),YYYY:a.s(this.$d.years,4,"0"),M:this.$d.months,MM:a.s(this.$d.months,2,"0"),D:this.$d.days,DD:a.s(this.$d.days,2,"0"),H:this.$d.hours,HH:a.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:a.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:a.s(this.$d.seconds,2,"0"),SSS:a.s(this.$d.milliseconds,3,"0")};return i.replace(j,function(e,o){return o||String(r[e])})},t.as=function(s){return this.$ms/f[l(s)]},t.get=function(s){var i=this.$ms,r=l(s);return r==="milliseconds"?i%=1e3:i=r==="weeks"?d(i/f[r]):this.$d[r],i||0},t.add=function(s,i,r){var e;return e=i?s*f[l(i)]:$(s)?s.$ms:m(s,this).$ms,m(this.$ms+e*(r?-1:1),this)},t.subtract=function(s,i){return this.add(s,i,!0)},t.locale=function(s){var i=this.clone();return i.$l=s,i},t.clone=function(){return m(this.$ms,this)},t.humanize=function(s){return y().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},t.valueOf=function(){return this.asMilliseconds()},t.milliseconds=function(){return this.get("milliseconds")},t.asMilliseconds=function(){return this.as("milliseconds")},t.seconds=function(){return this.get("seconds")},t.asSeconds=function(){return this.as("seconds")},t.minutes=function(){return this.get("minutes")},t.asMinutes=function(){return this.as("minutes")},t.hours=function(){return this.get("hours")},t.asHours=function(){return this.as("hours")},t.days=function(){return this.get("days")},t.asDays=function(){return this.as("days")},t.weeks=function(){return this.get("weeks")},t.asWeeks=function(){return this.as("weeks")},t.months=function(){return this.get("months")},t.asMonths=function(){return this.as("months")},t.years=function(){return this.get("years")},t.asYears=function(){return this.as("years")},n}(),H=function(n,t,s){return n.add(t.years()*s,"y").add(t.months()*s,"M").add(t.days()*s,"d").add(t.hours()*s,"h").add(t.minutes()*s,"m").add(t.seconds()*s,"s").add(t.milliseconds()*s,"ms")};return function(n,t,s){y=s,a=s().$utils(),s.duration=function(e,o){var u=s.locale();return m(e,{$l:u},o)},s.isDuration=$;var i=t.prototype.add,r=t.prototype.subtract;t.prototype.add=function(e,o){return $(e)?H(this,e,1):i.bind(this)(e,o)},t.prototype.subtract=function(e,o){return $(e)?H(this,e,-1):r.bind(this)(e,o)}}})})(x);var W=x.exports;const C=T(W);export{C as d};
