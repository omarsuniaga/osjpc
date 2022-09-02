import{ap as Mt,aq as Pt,ar as Y,c as Ee,a as b,h as v,d as Dt,as as zt,y as Xt,z as Jt,at as Ut,r as E,w as se,T as ve,q as Wt,au as Gt,av as Kt,K as rt,U as V,aw as ea,ax as ta,ay as aa,ae as Be,az as na,J as ra,aA as Fe,aB as oa,O as De,P as L,Q as la,R as P,S as I,W as T,aC as ot,aD as U,Z as ue,a3 as z,$ as lt,_ as st,aE as sa,aF as ua,aG as ut,a0 as be,V as ia,aH as it}from"./index.2d26860d.js";import{u as ca}from"./use-cache.b0833c75.js";import{a as ct,b as dt,Q as we}from"./QItem.32fb5874.js";import{b as da,c as va}from"./QLayout.7a0d6d7b.js";import{u as fa}from"./use-quasar.fe387073.js";const K=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function ma(e,r,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),_a(Qe(e,r,l))}function vt(e,r,l){return wt(ya(e,r,l))}function ha(e){return ga(e)===0}function pe(e,r){return r<=6?31:r<=11||ha(e)?30:29}function ga(e){const r=K.length;let l=K[0],s,c,o,y,u;if(e<l||e>=K[r-1])throw new Error("Invalid Jalaali year "+e);for(u=1;u<r&&(s=K[u],c=s-l,!(e<s));u+=1)l=s;return y=e-l,c-y<6&&(y=y-c+S(c+4,33)*33),o=Q(Q(y+1,33)-1,4),o===-1&&(o=4),o}function bt(e,r){const l=K.length,s=e+621;let c=-14,o=K[0],y,u,h,H,f;if(e<o||e>=K[l-1])throw new Error("Invalid Jalaali year "+e);for(f=1;f<l&&(y=K[f],u=y-o,!(e<y));f+=1)c=c+S(u,33)*8+S(Q(u,33),4),o=y;H=e-o,c=c+S(H,33)*8+S(Q(H,33)+3,4),Q(u,33)===4&&u-H===4&&(c+=1);const w=S(s,4)-S((S(s,100)+1)*3,4)-150,O=20+c-w;return r||(u-H<6&&(H=H-u+S(u+4,33)*33),h=Q(Q(H+1,33)-1,4),h===-1&&(h=4)),{leap:h,gy:s,march:O}}function ya(e,r,l){const s=bt(e,!0);return Qe(s.gy,3,s.march)+(r-1)*31-S(r,7)*(r-7)+l-1}function _a(e){const r=wt(e).gy;let l=r-621,s,c,o;const y=bt(l,!1),u=Qe(r,3,y.march);if(o=e-u,o>=0){if(o<=185)return c=1+S(o,31),s=Q(o,31)+1,{jy:l,jm:c,jd:s};o-=186}else l-=1,o+=179,y.leap===1&&(o+=1);return c=7+S(o,30),s=Q(o,30)+1,{jy:l,jm:c,jd:s}}function Qe(e,r,l){let s=S((e+S(r-8,6)+100100)*1461,4)+S(153*Q(r+9,12)+2,5)+l-34840408;return s=s-S(S(e+100100+S(r-8,6),100)*3,4)+752,s}function wt(e){let r=4*e+139361631;r=r+S(S(4*e+183187720,146097)*3,4)*4-3908;const l=S(Q(r,1461),4)*5+308,s=S(Q(l,153),5)+1,c=Q(S(l,153),12)+1;return{gy:S(r,1461)-100100+S(8-c,6),gm:c,gd:s}}function S(e,r){return~~(e/r)}function Q(e,r){return e-~~(e/r)*r}const xt=864e5,Ma=36e5,Le=6e4,pt="YYYY-MM-DDTHH:mm:ss.SSSZ",Da=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,ba=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Ae={};function wa(e,r){const l="("+r.days.join("|")+")",s=e+l;if(Ae[s]!==void 0)return Ae[s];const c="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",y="("+r.monthsShort.join("|")+")",u={};let h=0;const H=e.replace(ba,w=>{switch(h++,w){case"YY":return u.YY=h,"(-?\\d{1,2})";case"YYYY":return u.YYYY=h,"(-?\\d{1,4})";case"M":return u.M=h,"(\\d{1,2})";case"MM":return u.M=h,"(\\d{2})";case"MMM":return u.MMM=h,y;case"MMMM":return u.MMMM=h,o;case"D":return u.D=h,"(\\d{1,2})";case"Do":return u.D=h++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return u.D=h,"(\\d{2})";case"H":return u.H=h,"(\\d{1,2})";case"HH":return u.H=h,"(\\d{2})";case"h":return u.h=h,"(\\d{1,2})";case"hh":return u.h=h,"(\\d{2})";case"m":return u.m=h,"(\\d{1,2})";case"mm":return u.m=h,"(\\d{2})";case"s":return u.s=h,"(\\d{1,2})";case"ss":return u.s=h,"(\\d{2})";case"S":return u.S=h,"(\\d{1})";case"SS":return u.S=h,"(\\d{2})";case"SSS":return u.S=h,"(\\d{3})";case"A":return u.A=h,"(AM|PM)";case"a":return u.a=h,"(am|pm)";case"aa":return u.aa=h,"(a\\.m\\.|p\\.m\\.)";case"ddd":return c;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return u.Z=h,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return u.ZZ=h,"(Z|[+-]\\d{2}\\d{2})";case"X":return u.X=h,"(-?\\d+)";case"x":return u.x=h,"(-?\\d{4,})";default:return h--,w[0]==="["&&(w=w.substring(1,w.length-1)),w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),f={map:u,regex:new RegExp("^"+H)};return Ae[s]=f,f}function Ct(e,r){return e!==void 0?e:r!==void 0?r.date:Pt.date}function ft(e,r=""){const l=e>0?"-":"+",s=Math.abs(e),c=Math.floor(s/60),o=s%60;return l+Y(c)+r+Y(o)}function xa(e,r,l,s,c){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(c!==void 0&&Object.assign(o,c),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=pt);const y=Ct(l,Mt.props),u=y.months,h=y.monthsShort,{regex:H,map:f}=wa(r,y),w=e.match(H);if(w===null)return o;let O="";if(f.X!==void 0||f.x!==void 0){const j=parseInt(w[f.X!==void 0?f.X:f.x],10);if(isNaN(j)===!0||j<0)return o;const p=new Date(j*(f.X!==void 0?1e3:1));o.year=p.getFullYear(),o.month=p.getMonth()+1,o.day=p.getDate(),o.hour=p.getHours(),o.minute=p.getMinutes(),o.second=p.getSeconds(),o.millisecond=p.getMilliseconds()}else{if(f.YYYY!==void 0)o.year=parseInt(w[f.YYYY],10);else if(f.YY!==void 0){const j=parseInt(w[f.YY],10);o.year=j<0?j:2e3+j}if(f.M!==void 0){if(o.month=parseInt(w[f.M],10),o.month<1||o.month>12)return o}else f.MMM!==void 0?o.month=h.indexOf(w[f.MMM])+1:f.MMMM!==void 0&&(o.month=u.indexOf(w[f.MMMM])+1);if(f.D!==void 0){if(o.day=parseInt(w[f.D],10),o.year===null||o.month===null||o.day<1)return o;const j=s!=="persian"?new Date(o.year,o.month,0).getDate():pe(o.year,o.month);if(o.day>j)return o}f.H!==void 0?o.hour=parseInt(w[f.H],10)%24:f.h!==void 0&&(o.hour=parseInt(w[f.h],10)%12,(f.A&&w[f.A]==="PM"||f.a&&w[f.a]==="pm"||f.aa&&w[f.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),f.m!==void 0&&(o.minute=parseInt(w[f.m],10)%60),f.s!==void 0&&(o.second=parseInt(w[f.s],10)%60),f.S!==void 0&&(o.millisecond=parseInt(w[f.S],10)*10**(3-w[f.S].length)),(f.Z!==void 0||f.ZZ!==void 0)&&(O=f.Z!==void 0?w[f.Z].replace(":",""):w[f.ZZ],o.timezoneOffset=(O[0]==="+"?-1:1)*(60*O.slice(1,3)+1*O.slice(3,5)))}return o.dateHash=Y(o.year,6)+"/"+Y(o.month)+"/"+Y(o.day),o.timeHash=Y(o.hour)+":"+Y(o.minute)+":"+Y(o.second)+O,o}function mt(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const l=new Date(r.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const s=r.getTimezoneOffset()-l.getTimezoneOffset();r.setHours(r.getHours()-s);const c=(r-l)/(xt*7);return 1+Math.floor(c)}function X(e,r,l){const s=new Date(e),c=`set${l===!0?"UTC":""}`;switch(r){case"year":case"years":s[`${c}Month`](0);case"month":case"months":s[`${c}Date`](1);case"day":case"days":case"date":s[`${c}Hours`](0);case"hour":case"hours":s[`${c}Minutes`](0);case"minute":case"minutes":s[`${c}Seconds`](0);case"second":case"seconds":s[`${c}Milliseconds`](0)}return s}function xe(e,r,l){return(e.getTime()-e.getTimezoneOffset()*Le-(r.getTime()-r.getTimezoneOffset()*Le))/l}function Yt(e,r,l="days"){const s=new Date(e),c=new Date(r);switch(l){case"years":case"year":return s.getFullYear()-c.getFullYear();case"months":case"month":return(s.getFullYear()-c.getFullYear())*12+s.getMonth()-c.getMonth();case"days":case"day":case"date":return xe(X(s,"day"),X(c,"day"),xt);case"hours":case"hour":return xe(X(s,"hour"),X(c,"hour"),Ma);case"minutes":case"minute":return xe(X(s,"minute"),X(c,"minute"),Le);case"seconds":case"second":return xe(X(s,"second"),X(c,"second"),1e3)}}function ht(e){return Yt(e,X(e,"year"),"days")+1}function gt(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const yt={YY(e,r,l){const s=this.YYYY(e,r,l)%100;return s>=0?Y(s):"-"+Y(Math.abs(s))},YYYY(e,r,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return Y(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return gt(this.Q(e))},D(e){return e.getDate()},Do(e){return gt(e.getDate())},DD(e){return Y(e.getDate())},DDD(e){return ht(e)},DDDD(e){return Y(ht(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return mt(e)},ww(e){return Y(mt(e))},H(e){return e.getHours()},HH(e){return Y(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return Y(this.h(e))},m(e){return e.getMinutes()},mm(e){return Y(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return Y(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return Y(Math.floor(e.getMilliseconds()/10))},SSS(e){return Y(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,l,s){const c=s==null?e.getTimezoneOffset():s;return ft(c,":")},ZZ(e,r,l,s){const c=s==null?e.getTimezoneOffset():s;return ft(c)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function pa(e,r,l,s,c){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=pt);const y=Ct(l,Mt.props);return r.replace(Da,(u,h)=>u in yt?yt[u](o,y,s,c):h===void 0?u:h.split("\\]").join("]"))}var Ca=Ee({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:r}){const l=b(()=>{const s=["unelevated","outline","flat","rounded","push","stretch","glossy"].filter(c=>e[c]===!0).map(c=>`q-btn-group--${c}`).join(" ");return`q-btn-group row no-wrap${s.length>0?" "+s:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>v("div",{class:l.value},Dt(r.default))}});const Ya=["gregorian","persian"],Sa={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Ya.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},ka=["update:modelValue"];function W(e){return e.year+"/"+Y(e.month)+"/"+Y(e.day)}function qa(e,r){const l=b(()=>e.disable!==!0&&e.readonly!==!0),s=b(()=>e.editable===!0?0:-1),c=b(()=>{const u=[];return e.color!==void 0&&u.push(`bg-${e.color}`),e.textColor!==void 0&&u.push(`text-${e.textColor}`),u.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function y(u){const h=new Date,H=u===!0?null:0;if(e.calendar==="persian"){const f=ma(h);return{year:f.jy,month:f.jm,day:f.jd}}return{year:h.getFullYear(),month:h.getMonth()+1,day:h.getDate(),hour:H,minute:H,second:H,millisecond:H}}return{editable:l,tabindex:s,headerClass:c,getLocale:o,getCurrentDate:y}}const ae=20,Ha=["Calendar","Years","Months"],_t=e=>Ha.includes(e),Ne=e=>/^-?[\d]+\/[0-1]\d$/.test(e),ie=" \u2014 ";function G(e){return e.year+"/"+Y(e.month)}var Ia=Ee({name:"QDate",props:{...Sa,...zt,...Xt,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ne},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ne},navigationMaxYearMonth:{type:String,validator:Ne},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:_t}},emits:[...ka,"range-start","range-end","navigation"],setup(e,{slots:r,emit:l}){const{proxy:s}=Wt(),{$q:c}=s,o=Jt(e,c),{getCache:y}=ca(),{tabindex:u,headerClass:h,getLocale:H,getCurrentDate:f}=qa(e,c);let w;const O=Ut(e),j=Gt(O),p=E(null),_=E(We()),x=E(H()),M=b(()=>We()),A=b(()=>H()),k=b(()=>f()),g=E(Ge(_.value,x.value)),N=E(e.defaultView),Ze=c.lang.rtl===!0?"right":"left",fe=E(Ze.value),Ce=E(Ze.value),Ye=g.value.year,me=E(Ye-Ye%ae-(Ye<0?ae:0)),$=E(null),St=b(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),ee=b(()=>e.color||"primary"),ne=b(()=>e.textColor||"white"),he=b(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),Se=b(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),R=b(()=>Se.value.filter(t=>typeof t=="string").map(t=>Ie(t,_.value,x.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),re=b(()=>{const t=a=>Ie(a,_.value,x.value);return Se.value.filter(a=>Kt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ge=b(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=vt(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ke=b(()=>e.calendar==="persian"?W:(t,a,n)=>pa(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?_.value:a,n===void 0?x.value:n,t.year,t.timezoneOffset)),ce=b(()=>R.value.length+re.value.reduce((t,a)=>t+1+Yt(ge.value(a.to),ge.value(a.from)),0)),Re=b(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length>0)return e.title;if($.value!==null){const n=$.value.init,d=ge.value(n);return x.value.daysShort[d.getDay()]+", "+x.value.monthsShort[n.month-1]+" "+n.day+ie+"?"}if(ce.value===0)return ie;if(ce.value>1)return`${ce.value} ${x.value.pluralDay}`;const t=R.value[0],a=ge.value(t);return isNaN(a.valueOf())===!0?ie:x.value.headerTitle!==void 0?x.value.headerTitle(a,t):x.value.daysShort[a.getDay()]+", "+x.value.monthsShort[t.month-1]+" "+t.day}),kt=b(()=>R.value.concat(re.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),qt=b(()=>R.value.concat(re.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Pe=b(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length>0)return e.subtitle;if(ce.value===0)return ie;if(ce.value>1){const t=kt.value,a=qt.value,n=x.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+ie+n[a.month-1]+" ":t.month!==a.month?ie+n[a.month-1]:"")+" "+a.year}return R.value[0].year}),ye=b(()=>{const t=[c.iconSet.datetime.arrowLeft,c.iconSet.datetime.arrowRight];return c.lang.rtl===!0?t.reverse():t}),ze=b(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):x.value.firstDayOfWeek),Ht=b(()=>{const t=x.value.daysShort,a=ze.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),J=b(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():pe(t.year,t.month)}),It=b(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),B=b(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),F=b(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),qe=b(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return B.value!==null&&B.value.year>=g.value.year&&(t.year.prev=!1,B.value.year===g.value.year&&B.value.month>=g.value.month&&(t.month.prev=!1)),F.value!==null&&F.value.year<=g.value.year&&(t.year.next=!1,F.value.year===g.value.year&&F.value.month<=g.value.month&&(t.month.next=!1)),t}),_e=b(()=>{const t={};return R.value.forEach(a=>{const n=G(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Xe=b(()=>{const t={};return re.value.forEach(a=>{const n=G(a.from),d=G(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===d?a.to.day:void 0,range:a}),n<d){let i;const{year:C,month:m}=a.from,D=m<12?{year:C,month:m+1}:{year:C+1,month:1};for(;(i=G(D))<=d;)t[i]===void 0&&(t[i]=[]),t[i].push({from:void 0,to:i===d?a.to.day:void 0,range:a}),D.month++,D.month>12&&(D.year++,D.month=1)}}),t}),de=b(()=>{if($.value===null)return;const{init:t,initHash:a,final:n,finalHash:d}=$.value,[i,C]=a<=d?[t,n]:[n,t],m=G(i),D=G(C);if(m!==Z.value&&D!==Z.value)return;const q={};return m===Z.value?(q.from=i.day,q.includeFrom=!0):q.from=1,D===Z.value?(q.to=C.day,q.includeTo=!0):q.to=J.value,q}),Z=b(()=>G(g.value)),Ot=b(()=>{const t={};if(e.options===void 0){for(let n=1;n<=J.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=J.value;n++){const d=Z.value+"/"+Y(n);t[n]=a(d)}return t}),jt=b(()=>{const t={};if(e.events===void 0)for(let a=1;a<=J.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=J.value;n++){const d=Z.value+"/"+Y(n);t[n]=a(d)===!0&&It.value(d)}}return t}),Tt=b(()=>{let t,a;const{year:n,month:d}=g.value;if(e.calendar!=="persian")t=new Date(n,d-1,1),a=new Date(n,d-1,0).getDate();else{const i=vt(n,d,1);t=new Date(i.gy,i.gm-1,i.gd);let C=d-1,m=n;C===0&&(C=12,m--),a=pe(m,C)}return{days:t.getDay()-ze.value-1,endDay:a}}),Je=b(()=>{const t=[],{days:a,endDay:n}=Tt.value,d=a<0?a+7:a;if(d<6)for(let m=n-d;m<=n;m++)t.push({i:m,fill:!0});const i=t.length;for(let m=1;m<=J.value;m++){const D={i:m,event:jt.value[m],classes:[]};Ot.value[m]===!0&&(D.in=!0,D.flat=!0),t.push(D)}if(_e.value[Z.value]!==void 0&&_e.value[Z.value].forEach(m=>{const D=i+m-1;Object.assign(t[D],{selected:!0,unelevated:!0,flat:!1,color:ee.value,textColor:ne.value})}),Xe.value[Z.value]!==void 0&&Xe.value[Z.value].forEach(m=>{if(m.from!==void 0){const D=i+m.from-1,q=i+(m.to||J.value)-1;for(let $e=D;$e<=q;$e++)Object.assign(t[$e],{range:m.range,unelevated:!0,color:ee.value,textColor:ne.value});Object.assign(t[D],{rangeFrom:!0,flat:!1}),m.to!==void 0&&Object.assign(t[q],{rangeTo:!0,flat:!1})}else if(m.to!==void 0){const D=i+m.to-1;for(let q=i;q<=D;q++)Object.assign(t[q],{range:m.range,unelevated:!0,color:ee.value,textColor:ne.value});Object.assign(t[D],{flat:!1,rangeTo:!0})}else{const D=i+J.value-1;for(let q=i;q<=D;q++)Object.assign(t[q],{range:m.range,unelevated:!0,color:ee.value,textColor:ne.value})}}),de.value!==void 0){const m=i+de.value.from-1,D=i+de.value.to-1;for(let q=m;q<=D;q++)t[q].color=ee.value,t[q].editRange=!0;de.value.includeFrom===!0&&(t[m].editRangeFrom=!0),de.value.includeTo===!0&&(t[D].editRangeTo=!0)}g.value.year===k.value.year&&g.value.month===k.value.month&&(t[i+k.value.day-1].today=!0);const C=t.length%7;if(C>0){const m=7-C;for(let D=1;D<=m;D++)t.push({i:D,fill:!0})}return t.forEach(m=>{let D="q-date__calendar-item ";m.fill===!0?D+="q-date__calendar-item--fill":(D+=`q-date__calendar-item--${m.in===!0?"in":"out"}`,m.range!==void 0&&(D+=` q-date__range${m.rangeTo===!0?"-to":m.rangeFrom===!0?"-from":""}`),m.editRange===!0&&(D+=` q-date__edit-range${m.editRangeFrom===!0?"-from":""}${m.editRangeTo===!0?"-to":""}`),(m.range!==void 0||m.editRange===!0)&&(D+=` text-${m.color}`)),m.classes=D}),t}),Vt=b(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});se(()=>e.modelValue,t=>{if(w===t)w=0;else{const{year:a,month:n}=Ge(_.value,x.value);oe(a,n)}}),se(N,()=>{p.value!==null&&p.value.focus()}),se(()=>g.value.year,t=>{l("navigation",{year:t,month:g.value.month})}),se(()=>g.value.month,t=>{l("navigation",{year:g.value.year,month:t})}),se(M,t=>{nt(t,x.value,"mask"),_.value=t}),se(A,t=>{nt(_.value,t,"locale"),x.value=t});function Ue(){const t=k.value,a=_e.value[G(t)];(a===void 0||a.includes(t.day)===!1)&&je(t),He(t.year,t.month)}function $t(t){_t(t)===!0&&(N.value=t)}function Bt(t,a){["month","year"].includes(t)&&(t==="month"?et:Oe)(a===!0?-1:1)}function He(t,a){N.value="Calendar",oe(t,a)}function Ft(t,a){if(e.range===!1||!t){$.value=null;return}const n=Object.assign({...g.value},t),d=a!==void 0?Object.assign({...g.value},a):n;$.value={init:n,initHash:W(n),final:d,finalHash:W(d)},He(n.year,n.month)}function We(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function Ie(t,a,n){return xa(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Ge(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ke();const d=n[n.length-1],i=Ie(d.from!==void 0?d.from:d,t,a);return i.dateHash===null?Ke():i}function Ke(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=k.value!==void 0?k.value:f();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+Y(a)+"/01"}}function et(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),oe(a,n),he.value===!0&&Me("month")}function Oe(t){const a=Number(g.value.year)+t;oe(a,g.value.month),he.value===!0&&Me("year")}function At(t){oe(t,g.value.month),N.value=e.defaultView==="Years"?"Months":"Calendar",he.value===!0&&Me("year")}function Nt(t){oe(g.value.year,t),N.value="Calendar",he.value===!0&&Me("month")}function Lt(t,a){const n=_e.value[a];(n!==void 0&&n.includes(t.day)===!0?Te:je)(t)}function te(t){return{year:t.year,month:t.month,day:t.day}}function oe(t,a){B.value!==null&&t<=B.value.year&&(t=B.value.year,a<B.value.month&&(a=B.value.month)),F.value!==null&&t>=F.value.year&&(t=F.value.year,a>F.value.month&&(a=F.value.month));const n=t+"/"+Y(a)+"/01";n!==g.value.dateHash&&(fe.value=g.value.dateHash<n==(c.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(Ce.value=fe.value),rt(()=>{me.value=t-t%ae-(t<0?ae:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:n})}))}function tt(t,a,n){const d=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;w=d;const{reason:i,details:C}=at(a,n);l("update:modelValue",d,i,C)}function Me(t){const a=R.value[0]!==void 0&&R.value[0].dateHash!==null?{...R.value[0]}:{...g.value};rt(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():pe(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const d=le(a);w=d;const{details:i}=at("",a);l("update:modelValue",d,t,i)})}function at(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...te(a.target),from:te(a.from),to:te(a.to)}}:{reason:`${t}-day`,details:te(a)}}function le(t,a,n){return t.from!==void 0?{from:ke.value(t.from,a,n),to:ke.value(t.to,a,n)}:ke.value(t,a,n)}function je(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=W(t.from),d=W(t.to),i=R.value.filter(m=>m.dateHash<n||m.dateHash>d),C=re.value.filter(({from:m,to:D})=>D.dateHash<n||m.dateHash>d);a=i.concat(C).concat(t).map(m=>le(m))}else{const n=Se.value.slice();n.push(le(t)),a=n}else a=le(t);tt(a,"add",t)}function Te(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=le(t);t.from!==void 0?a=e.modelValue.filter(d=>d.from!==void 0?d.from!==n.from&&d.to!==n.to:!0):a=e.modelValue.filter(d=>d!==n),a.length===0&&(a=null)}tt(a,"remove",t)}function nt(t,a,n){const d=R.value.concat(re.value).map(i=>le(i,t,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);l("update:modelValue",(e.multiple===!0?d:d[0])||null,n)}Object.assign(s,{setToday:Ue,setView:$t,offsetCalendar:Bt,setCalendarTo:He,setEditingRange:Ft});function Et(){if(e.minimal!==!0)return v("div",{class:"q-date__header "+h.value},[v("div",{class:"relative-position"},[v(ve,{name:"q-transition--fade"},()=>v("div",{key:"h-yr-"+Pe.value,class:"q-date__header-subtitle q-date__header-link "+(N.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:u.value,...y("vY",{onClick(){N.value="Years"},onKeyup(t){t.keyCode===13&&(N.value="Years")}})},[Pe.value]))]),v("div",{class:"q-date__header-title relative-position flex no-wrap"},[v("div",{class:"relative-position col"},[v(ve,{name:"q-transition--fade"},()=>v("div",{key:"h-sub"+Re.value,class:"q-date__header-title-label q-date__header-link "+(N.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:u.value,...y("vC",{onClick(){N.value="Calendar"},onKeyup(t){t.keyCode===13&&(N.value="Calendar")}})},[Re.value]))]),e.todayBtn===!0?v(V,{class:"q-date__header-today self-start",icon:c.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:u.value,onClick:Ue}):null])])}function Ve({label:t,type:a,key:n,dir:d,goTo:i,boundaries:C,cls:m}){return[v("div",{class:"row items-center q-date__arrow"},[v(V,{round:!0,dense:!0,size:"sm",flat:!0,icon:ye.value[0],tabindex:u.value,disable:C.prev===!1,...y("go-#"+a,{onClick(){i(-1)}})})]),v("div",{class:"relative-position overflow-hidden flex flex-center"+m},[v(ve,{name:"q-transition--jump-"+d},()=>v("div",{key:n},[v(V,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:u.value,...y("view#"+a,{onClick:()=>{N.value=a}})})]))]),v("div",{class:"row items-center q-date__arrow"},[v(V,{round:!0,dense:!0,size:"sm",flat:!0,icon:ye.value[1],tabindex:u.value,disable:C.next===!1,...y("go+#"+a,{onClick(){i(1)}})})])]}const Qt={Calendar:()=>[v("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[v("div",{class:"q-date__navigation row items-center no-wrap"},Ve({label:x.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:fe.value,goTo:et,boundaries:qe.value.month,cls:" col"}).concat(Ve({label:g.value.year,type:"Years",key:g.value.year,dir:Ce.value,goTo:Oe,boundaries:qe.value.year,cls:""}))),v("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Ht.value.map(t=>v("div",{class:"q-date__calendar-item"},[v("div",t)]))),v("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[v(ve,{name:"q-transition--slide-"+fe.value},()=>v("div",{key:Z.value,class:"q-date__calendar-days fit"},Je.value.map(t=>v("div",{class:t.classes},[t.in===!0?v(V,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:u.value,...y("day#"+t.i,{onClick:()=>{Zt(t.i)},onMouseover:()=>{Rt(t.i)}})},t.event!==!1?()=>v("div",{class:"q-date__event bg-"+t.event}):null):v("div",""+t.i)]))))])])],Months(){const t=g.value.year===k.value.year,a=d=>B.value!==null&&g.value.year===B.value.year&&B.value.month>d||F.value!==null&&g.value.year===F.value.year&&F.value.month<d,n=x.value.monthsShort.map((d,i)=>{const C=g.value.month===i+1;return v("div",{class:"q-date__months-item flex flex-center"},[v(V,{class:t===!0&&k.value.month===i+1?"q-date__today":null,flat:C!==!0,label:d,unelevated:C,color:C===!0?ee.value:null,textColor:C===!0?ne.value:null,tabindex:u.value,disable:a(i+1),...y("month#"+i,{onClick:()=>{Nt(i+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(v("div",{class:"row no-wrap full-width"},[Ve({label:g.value.year,type:"Years",key:g.value.year,dir:Ce.value,goTo:Oe,boundaries:qe.value.year,cls:" col"})])),v("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=me.value,a=t+ae,n=[],d=i=>B.value!==null&&B.value.year>i||F.value!==null&&F.value.year<i;for(let i=t;i<=a;i++){const C=g.value.year===i;n.push(v("div",{class:"q-date__years-item flex flex-center"},[v(V,{key:"yr"+i,class:k.value.year===i?"q-date__today":null,flat:!C,label:i,dense:!0,unelevated:C,color:C===!0?ee.value:null,textColor:C===!0?ne.value:null,tabindex:u.value,disable:d(i),...y("yr#"+i,{onClick:()=>{At(i)}})})]))}return v("div",{class:"q-date__view q-date__years flex flex-center"},[v("div",{class:"col-auto"},[v(V,{round:!0,dense:!0,flat:!0,icon:ye.value[0],tabindex:u.value,disable:d(t),...y("y-",{onClick:()=>{me.value-=ae}})})]),v("div",{class:"q-date__years-content col self-stretch row items-center"},n),v("div",{class:"col-auto"},[v(V,{round:!0,dense:!0,flat:!0,icon:ye.value[1],tabindex:u.value,disable:d(a),...y("y+",{onClick:()=>{me.value+=ae}})})])])}};function Zt(t){const a={...g.value,day:t};if(e.range===!1){Lt(a,Z.value);return}if($.value===null){const n=Je.value.find(i=>i.fill!==!0&&i.i===t);if(e.noUnset!==!0&&n.range!==void 0){Te({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Te(a);return}const d=W(a);$.value={init:a,initHash:d,final:a,finalHash:d},l("range-start",te(a))}else{const n=$.value.initHash,d=W(a),i=n<=d?{from:$.value.init,to:a}:{from:a,to:$.value.init};$.value=null,je(n===d?a:{target:a,...i}),l("range-end",{from:te(i.from),to:te(i.to)})}}function Rt(t){if($.value!==null){const a={...g.value,day:t};Object.assign($.value,{final:a,finalHash:W(a)})}}return()=>{const t=[v("div",{class:"q-date__content col relative-position"},[v(ve,{name:"q-transition--fade"},Qt[N.value])])],a=Dt(r.default);return a!==void 0&&t.push(v("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&j(t,"push"),v("div",{class:St.value,...Vt.value},[Et(),v("div",{ref:p,class:"q-date__main col column",tabindex:-1},t)])}}});const Oa=[v("rect",{x:"0",y:"0",width:" 100",height:"100",fill:"none"}),v("g",{transform:"translate(25 25)"},[v("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.9"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),v("g",{transform:"translate(75 25)"},[v("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.8"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),v("g",{transform:"translate(25 75)"},[v("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.7"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),v("g",{transform:"translate(75 75)"},[v("rect",{x:"-20",y:"-20",width:" 40",height:"40",fill:"currentColor",opacity:"0.6"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])])];var ja=Ee({name:"QSpinnerCube",props:ea,setup(e){const{cSize:r,classes:l}=ta(e);return()=>v("svg",{class:l.value,width:r.value,height:r.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},Oa)}});const Ta=aa("sesion",{state:()=>({sesion:!1}),getters:{},actions:{setSesion(e){}}});const Va={class:"q-pa-md"},$a={class:"row justify-end flex"},Ba={key:0,class:"col"},Fa=T("h6",null,"Calendario",-1),Aa={class:"q-pa-sm row justify-center scrollList"},Na={style:{width:"100%","max-width":"300px","min-width":"100px"}},La={class:"q-pa-md"},Ea={class:"q-gutter-md row items-start"},Qa={key:1,class:"q-px-md flex justify-center text-md text-h6"},Za={class:"q-pa-lg doc-container"},Ra={class:"row"},Pa={class:"col-6"},za=T("span",{class:"text-body1"},"Ausentes",-1),Xa={key:0},Ja={key:1,class:"q-pa-md row flex justify-center scrollList",ref:"chatRef"},Ua={style:{width:"100%","max-width":"700px","min-width":"100px"}},Wa={class:"col-6"},Ga=T("span",{class:"text-body1"},"Presentes",-1),Ka={class:"q-pa-md row flex justify-center scrollList",ref:"chatRef"},en={style:{width:"100%","max-width":"700px","min-width":"100px"}},ln={__name:"IndexPage",setup(e){fa(),Ta();let r=E(!1),l=Be([]),s=Be([]),c=E(!1),o=Be([]),y=E(na().format("YYYY/MM/DD"));E("https://placeimg.com/500/300/nature?t="+Math.random()),ra(()=>{o=Fe().then(p=>p.map(_=>_.data()))});const u=async p=>{l.filter(_=>_.id===p.id?s.push({..._,asistencia:!0})&&s.reverse()&&l.splice(l.indexOf(_),1):null)},h=p=>{s.filter(_=>_.id===p.id?l.push({..._,asistencia:!1})&&l.reverse().sort((x,M)=>x.nombre.localeCompare(M.nombre))&&s.splice(s.indexOf(_),1):null),l=l.reverse().sort((_,x)=>_.nombre.localeCompare(x.nombre))},H=async()=>{const p=l.map(M=>M.id),_=s.map(M=>M.id),x=y.value.split("/").join("-");await sa(_,p,x)},f=async()=>{o=await Fe(),o.forEach(p=>{l.push({...p.data(),asistencia:!1})})},w=async p=>{let{presentes:_,ausentes:x}=p;try{_.map(M=>{it(M).then(A=>{s.push({...A,id:A.id,asistencia:!0}),s.reverse().sort((k,g)=>k.nombre.localeCompare(g.nombre))})}),x.map(M=>{it(M).then(A=>{l.push({...A,id:A.id,asistencia:!1}),l.reverse().sort((k,g)=>k.nombre.localeCompare(g.nombre))})})}catch(M){console.log(M)}},O=()=>{l.length=0,s.length=0};oa(()=>{ua(y.value.split("/").join("-")).then(p=>{p?(O(),w(p.Data).then()):(O(),f().then(c.value=!1))}).then(()=>r.value=!1).catch(p=>{console.log(p)})});const j=async p=>{switch(o=await Fe().then(_=>_.map(x=>x.data())),p){case"Orq":let _=o.filter(k=>k.grupo==="Orquesta");O(),l.push(..._);break;case"Coro":let x=o.filter(k=>k.grupo==="Coro");O(),l.push(...x);break;case"Ini2":let M=o.filter(k=>k.grupo==="Iniciacion 2");O(),l.push(...M);break;case"Ini1":let A=o.filter(k=>k.grupo==="Iniciacion 1");O(),l.push(...A);break;default:f()}};return(p,_)=>{const x=la("router-view");return P(),De(da,null,{default:L(()=>[I(va,null,{default:L(()=>[T("div",Va,[T("div",$a,[I(Ca,{rounded:"","col-12":"","justify-end":"",flex:""},{default:L(()=>[I(V,{flat:"",style:{color:"#ff0080"},label:"Orquesta",onClick:_[0]||(_[0]=M=>j("Orq"))}),I(V,{flat:"",style:{color:"#ff0080"},label:"Coro",onClick:_[1]||(_[1]=M=>j("Coro"))}),I(V,{flat:"",style:{color:"#ff0080"},label:"Iniciacion II",onClick:_[2]||(_[2]=M=>j("Ini2"))}),I(V,{flat:"",style:{color:"#ff0080"},label:"Iniciacion I",onClick:_[3]||(_[3]=M=>j("Ini1"))}),I(V,{color:"purple",rounded:"",icon:"today",onClick:_[4]||(_[4]=M=>ot(r)?r.value=!U(r):r=!U(r))}),I(V,{color:"purple",rounded:"","icon-right":"save",label:"Guardar",onClick:H})]),_:1})])]),U(r)?(P(),ue("div",Ba,[Fa,T("div",Aa,[T("div",Na,[T("div",La,[T("div",Ea,[I(Ia,{modelValue:U(y),"onUpdate:modelValue":_[5]||(_[5]=M=>ot(y)?y.value=M:y=M),minimal:""},null,8,["modelValue"])])])])])])):(P(),ue("div",Qa,z(U(y)),1)),T("div",Za,[T("div",Ra,[T("div",Pa,[za,U(c)?(P(),ue("div",Xa,[I(ja,{color:"indigo"})])):(P(),ue("div",Ja,[T("div",Ua,[(P(!0),ue(lt,null,st(U(l),(M,A)=>(P(),De(ut,{class:"q-ma-sm bg-red-3",key:A,onClick:k=>u(M)},{default:L(()=>[M.asistencia?ia("",!0):(P(),De(ct,{key:0},{default:L(()=>[I(dt,{class:"col-6"},{default:L(()=>[I(we,{class:"text-weight-regular"},{default:L(()=>[be(z(M.nombre)+" "+z(M.apellido),1)]),_:2},1024),I(we,{caption:""},{default:L(()=>[be(z(M.instrumento==="N/A"?M.grupo+" - ":M.instrumento+" - ")+" "+z(M.edad),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))]),_:2},1032,["onClick"]))),128))])],512))]),T("div",Wa,[Ga,T("div",Ka,[T("div",en,[(P(!0),ue(lt,null,st(U(s),(M,A)=>(P(),De(ut,{class:"q-ma-xs bg-green-3",key:A,onClick:k=>h(M)},{default:L(()=>[I(ct,null,{default:L(()=>[I(dt,null,{default:L(()=>[I(we,{class:"text-weight-regular"},{default:L(()=>[be(z(M.nombre)+" "+z(M.apellido),1)]),_:2},1024),I(we,{caption:""},{default:L(()=>[be(z(M.instrumento==="N/A"?M.grupo+" - ":M.instrumento+" - ")+" "+z(M.edad),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])],512)])])]),I(x)]),_:1})]),_:1})}}};export{ln as default};
