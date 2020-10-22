!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.JSNOZJS=e():t.JSNOZJS=e()}(this,(function(){return function(t){var e={};function n(M){if(e[M])return e[M].exports;var d=e[M]={i:M,l:!1,exports:{}};return t[M].call(d.exports,d,d.exports,n),d.l=!0,d.exports}return n.m=t,n.c=e,n.d=function(t,e,M){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:M})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var M=Object.create(null);if(n.r(M),Object.defineProperty(M,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)n.d(M,d,function(e){return t[e]}.bind(null,d));return M},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){function n(...t){let e=t[t.length-1],n=[e];for(let M=t.length-2;M>-1;M--)e*=t[M],n.unshift(e);return n}function M(t,...e){let M,d;e=n(...e);let r=[];for(let n=0;n<e.length;n++){let Y=e[n];d=t%Y,M=(t-d)/Y,t=d,r.push(M)}return r.push(d),r}t.exports={append:function(t,e,n){let M=t.toString();n=n.toString();let d=M.length;return M+=n.repeat(e-d),M.substring(0,e)},prepend:function(t,e,n){let M=t.toString();n=n.toString();let d=M.length;return M=n.repeat(e-d)+M,M.substring(0,e)},calc_units:n,get_qr:M,get_unit_dict:function(t,e,n){let d=M(t,...e);d=d.slice(d.length-n.length);let r=Array.from({length:n.length}).map((t,e)=>[n[e],d[e]]);return Object.fromEntries(r)}}},function(t,e){t.exports={UNITS:{DAY_MS:864e5,DAY_S:86400,DAY_MIN:1440,DAY_HOUR:24,HOUR_MS:36e5,HOUR_S:3600,HOUR_MIN:60,MIN_MS:6e4,MIN_S:60,S_MS:1e3},DICT_KL:["y","m","d","h","min","s","ms","ts","mts","tzname","soffset","msoffset","yq","yw","yd","qm","qw","qd","mt","mw","td","wd"],PY_DATE_FMT_MD:{"%a, %d %b %Y %H:%M:%S GMT":"rfc1123","%d %b %Y %H:%M:%S GMT":"rfc1123_nowkday","%a, %d %b %Y %H:%M:%S":"rfc1123_notz","%a, %d %b %Y %H:%M:%S %z":"rfc1123_tzoffset","%a, %d-%b-%Y %H:%M:%S GMT":"rfc1123_hypen","%A, %d-%b-%y %H:%M:%S GMT":"rfc850","%d-%b-%y %H:%M:%S GMT":"rfc850_nowkday","%a, %d-%b-%y %H:%M:%S GMT":"rfc850_a","%A, %d-%b-%Y %H:%M:%S GMT":"rfc850_broken","%d-%b-%Y %H:%M:%S GMT":"rfc850_broken_nowkday","%a, %b %d %H:%M:%S %Y":"asctime","%Y-%m-%d %H:%M:%S %z":"iso8601","%a %b %d %Y %H:%M:%S %Z%z":"abdYHMSZz","%a %b %d %Y %H:%M:%S":"abdYHMS","%Y-%m-%dT%H:%M:%S.%fZ":"nodejs","%Y-%m-%d %H:%M:%S.%f":"YmdHMSf","%Y-%m-%d %H:%M:%S.%f %Z%z":"YmdHMSfZz","%Y-%m-%d %H:%M:%S %Z %z":"YmdHMSZz",rfc1123:"%a, %d %b %Y %H:%M:%S GMT",rfc1123_nowkday:"%d %b %Y %H:%M:%S GMT",rfc1123_notz:"%a, %d %b %Y %H:%M:%S",rfc1123_tzoffset:"%a, %d %b %Y %H:%M:%S %z",rfc1123_hypen:"%a, %d-%b-%Y %H:%M:%S GMT",rfc850:"%A, %d-%b-%y %H:%M:%S GMT",rfc850_nowkday:"%d-%b-%y %H:%M:%S GMT",rfc850_a:"%a, %d-%b-%y %H:%M:%S GMT",rfc850_broken:"%A, %d-%b-%Y %H:%M:%S GMT",rfc850_broken_nowkday:"%d-%b-%Y %H:%M:%S GMT",asctime:"%a, %b %d %H:%M:%S %Y",iso8601:"%Y-%m-%d %H:%M:%S %z",abdYHMSZz:"%a %b %d %Y %H:%M:%S %Z %z",abdYHMS:"%a %b %d %Y %H:%M:%S",nodejs:"%Y-%m-%dT%H:%M:%S.%fZ",YmdHMSf:"%Y-%m-%d %H:%M:%S.%f",YmdHMSfZz:"%Y-%m-%d %H:%M:%S.%f %Z %z",YmdHMSZz:"%Y-%m-%d %H:%M:%S %Z %z"},DATE_FMT_MD:{"ddd, DD MMM YYYY HH:mm:ss G\\MT":"rfc1123","DD MMM YYYY HH:mm:ss G\\MT":"rfc1123_nowkday","ddd, DD MMM YYYY HH:mm:ss":"rfc1123_notz","ddd, DD MMM YYYY HH:mm:ss Z":"rfc1123_tzoffset","ddd, DD-MMM-YYYY HH:mm:ss G\\MT":"rfc1123_hypen","dddd, DD-MMM-YY HH:mm:ss G\\MT":"rfc850","YYYY-MM-DD HH:mm:ss Z":"iso8601","ddd MMM DD YYYY HH:mm:ss z Z":"abdYHMSZz","ddd MMM DD YYYY HH:mm:ss":"abdYHMS","YYYY-MM-DD HH:mm:ss z Z":"YmdHMSZz",rfc1123:"ddd, DD MMM YYYY HH:mm:ss G\\MT",rfc1123_nowkday:"DD MMM YYYY HH:mm:ss G\\MT",rfc1123_notz:"ddd, DD MMM YYYY HH:mm:ss",rfc1123_tzoffset:"ddd, DD MMM YYYY HH:mm:ss Z",rfc1123_hypen:"ddd, DD-MMM-YYYY HH:mm:ss G\\MT",rfc850:"dddd, DD-MMM-YY HH:mm:ss G\\MT",iso8601:"YYYY-MM-DD HH:mm:ss Z",abdYHMSZz:"ddd MMM DD YYYY HH:mm:ss z Z",abdYHMS:"ddd MMM DD YYYY HH:mm:ss",YmdHMSZz:"YYYY-MM-DD HH:mm:ss z Z"},PY_NAME_TO_FMT_DICT:{rfc1123:"%a, %d %b %Y %H:%M:%S GMT",rfc1123_nowkday:"%d %b %Y %H:%M:%S GMT",rfc1123_notz:"%a, %d %b %Y %H:%M:%S",rfc1123_tzoffset:"%a, %d %b %Y %H:%M:%S %z",rfc1123_hypen:"%a, %d-%b-%Y %H:%M:%S GMT",rfc850:"%A, %d-%b-%y %H:%M:%S GMT",rfc850_nowkday:"%d-%b-%y %H:%M:%S GMT",rfc850_a:"%a, %d-%b-%y %H:%M:%S GMT",rfc850_broken:"%A, %d-%b-%Y %H:%M:%S GMT",rfc850_broken_nowkday:"%d-%b-%Y %H:%M:%S GMT",asctime:"%a, %b %d %H:%M:%S %Y",iso8601:"%Y-%m-%d %H:%M:%S %z",abdYHMSZz:"%a %b %d %Y %H:%M:%S %Z %z",abdYHMS:"%a %b %d %Y %H:%M:%S",nodejs:"%Y-%m-%dT%H:%M:%S.%fZ",YmdHMSf:"%Y-%m-%d %H:%M:%S.%f",YmdHMSfZz:"%Y-%m-%d %H:%M:%S.%f %Z %z",YmdHMSZz:"%Y-%m-%d %H:%M:%S %Z %z"},NAME_TO_FMT_DICT:{rfc1123:"ddd, DD MMM YYYY HH:mm:ss G\\MT",rfc1123_nowkday:"DD MMM YYYY HH:mm:ss G\\MT",rfc1123_notz:"ddd, DD MMM YYYY HH:mm:ss",rfc1123_tzoffset:"ddd, DD MMM YYYY HH:mm:ss Z",rfc1123_hypen:"ddd, DD-MMM-YYYY HH:mm:ss G\\MT",rfc850:"dddd, DD-MMM-YY HH:mm:ss G\\MT",iso8601:"YYYY-MM-DD HH:mm:ss Z",abdYHMSZz:"ddd MMM DD YYYY HH:mm:ss z Z",abdYHMS:"ddd MMM DD YYYY HH:mm:ss",YmdHMSZz:"YYYY-MM-DD HH:mm:ss z Z"},PY_FMT_TO_NAME_DICT:{"%a, %d %b %Y %H:%M:%S GMT":"rfc1123","%d %b %Y %H:%M:%S GMT":"rfc1123_nowkday","%a, %d %b %Y %H:%M:%S":"rfc1123_notz","%a, %d %b %Y %H:%M:%S %z":"rfc1123_tzoffset","%a, %d-%b-%Y %H:%M:%S GMT":"rfc1123_hypen","%A, %d-%b-%y %H:%M:%S GMT":"rfc850","%d-%b-%y %H:%M:%S GMT":"rfc850_nowkday","%a, %d-%b-%y %H:%M:%S GMT":"rfc850_a","%A, %d-%b-%Y %H:%M:%S GMT":"rfc850_broken","%d-%b-%Y %H:%M:%S GMT":"rfc850_broken_nowkday","%a, %b %d %H:%M:%S %Y":"asctime","%Y-%m-%d %H:%M:%S %z":"iso8601","%a %b %d %Y %H:%M:%S %Z%z":"abdYHMSZz","%a %b %d %Y %H:%M:%S":"abdYHMS","%Y-%m-%dT%H:%M:%S.%fZ":"nodejs","%Y-%m-%d %H:%M:%S.%f":"YmdHMSf","%Y-%m-%d %H:%M:%S.%f %Z%z":"YmdHMSfZz","%Y-%m-%d %H:%M:%S %Z %z":"YmdHMSZz"},FMT_TO_NAME_DICT:{"ddd, DD MMM YYYY HH:mm:ss G\\MT":"rfc1123","DD MMM YYYY HH:mm:ss G\\MT":"rfc1123_nowkday","ddd, DD MMM YYYY HH:mm:ss":"rfc1123_notz","ddd, DD MMM YYYY HH:mm:ss Z":"rfc1123_tzoffset","ddd, DD-MMM-YYYY HH:mm:ss G\\MT":"rfc1123_hypen","dddd, DD-MMM-YY HH:mm:ss G\\MT":"rfc850","YYYY-MM-DD HH:mm:ss Z":"iso8601","ddd MMM DD YYYY HH:mm:ss z Z":"abdYHMSZz","ddd MMM DD YYYY HH:mm:ss":"abdYHMS","YYYY-MM-DD HH:mm:ss z Z":"YmdHMSZz"}}},function(t,e,n){const M=n(3),d=n(1),r=n(0);t.exports={sjsnoz:M,consts:d,cmmn:r}},function(t,e,n){const M=n(0),{DICT_KL:d,DATE_FMT_MD:r,NAME_TO_FMT_DICT:Y,FMT_TO_NAME_DICT:o,UNITS:f}=n(1);function s(t){return((t-=1)-t%3)/3+1}function m(t){return t%4==0&&t%100!=0||t%400==0}function c(t){return M.prepend(t,4,0)}function H(t){return M.prepend(t,2,0)}function _(t){return M.prepend(t,2,0)}function u(t,e){return(t=c(t))+"-"+(e=H(e))}function i(t,e,n){return(t=c(t))+"-"+(e=H(e))+"-"+(n=_(n))}function S(t){return M.prepend(t,2,0)}function a(t){return M.prepend(t,2,0)}function D(t){return M.prepend(t,2,0)}function b(t,e,n){return S(t)+":"+a(e)+":"+D(n)}function T(t){let e;try{e=void 0===t?getDate():getDate(t)}catch(n){e=void 0===t?new Date:new Date(t)}return e}function l(t,e,n){let M=T(i(t,e,n)).getDay();return M=0===M?7:M,M}function y(t,e,n){let M=T(i(t,e,n)).getUTCDay();return M=0===M?7:M,M}function z(t,e){u(t,e);const n={1:31,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};let M=m(t);return 2===e?M?29:28:n[e]}function g(t,e,n){yd=0;for(let n=1;n<e;n++)yd+=z(t,n);return yd+=n,yd}function p(t,e,n){let M=g(t,1,1),d=7-l(t,1,1)+1,r=(g(t,e,n)-M+1-d-l(t,e,n))/7;return r+=2,r}function Z(t,e,n){let M=g(t,1,1),d=7-y(t,1,1)+1,r=(g(t,e,n)-M+1-d-y(t,e,n))/7;return r+=2,r}function h(t){let e=t%3;return qm=e||3,qm}function G(t,e){let n=1;return 1==e||(n=2==e?4:3==e?7:10),T(i(t,n,1))}function w(t,e,n,M){let d=G(t,e),r=Z(t,d.getUTCMonth()+1,d.getUTCDate()),Y=Z(t,n,M);return qw=Y-r+1,qw}function A(t,e,n,M){let d=G(t,e),r=g(t,d.getUTCMonth()+1,d.getUTCDate());return g(t,n,M)-r+1}function O(t,e){return e>=1&&e<=10?1:e>=10&&e<=20?2:3}function U(t,e){return T(i(t,e,1))}function k(t,e,n){let M=U(t,e),d=Z(t,M.getUTCMonth()+1,M.getUTCDate());return Z(t,e,n)-d+1}function I(t,e,n){let M=O(0,n);return 1==M?n:2==M?n-10:n-20}function q(t){let e=t%60,n=(t-e)/60;return e=M.prepend(e,2,0),n=M.prepend(n,2,0),(t>0?"+":"-")+n+e}function C(t){let e=t[0],n=parseInt(t.slice(1,3)),M=parseInt(t.slice(3,5));return M=60*n+M,M="+"===e?M:-M,M}function N(t){return q(-t.getTimezoneOffset())}function j(t){return x(t,N(t))}function x(t,e){const n=e,M=e,d=60*C(e),r=1e3*d,Y=t.getTime(),o=Y/1e3,f=T(Y+r),m=f.getUTCFullYear(),c=f.getUTCMonth()+1,H=f.getUTCDate(),_=f.getUTCHours(),u=f.getUTCMinutes(),i=f.getUTCSeconds(),S=f.getUTCMilliseconds(),a=s(c);return{y:m,m:c,d:H,h:_,min:u,s:i,ms:S,ts:o,mts:Y,z:e,zone:M,tzname:n,soffset:d,msoffset:r,yq:a,yw:Z(m,c,H),yd:g(m,c,H),qm:h(c),qw:w(m,a,c,H),qd:A(m,a,c,H),mt:O(0,H),mw:k(m,c,H),td:I(0,0,H),wd:y(m,c,H)}}function R(t,e){let n=x(t,e);return i(n.y,n.m,n.d)+" "+b(n.h,n.min,n.s)+" "+(e=n.z)}function v(t){if(function(t){return t instanceof Date}(t))return j(t);if("number"==typeof t)return j(new Date(t));if("string"==typeof t)return j(new Date(t));if("object"==typeof t)return t;throw new Error("only can be string date dict")}t.exports={get_yq_via_m:s,is_leap_year:m,get_days_num_of_year:function(t){return m(t)?366:365},year2str:c,month2str:H,day2str:_,ym2str:u,ymd2str:i,hour2str:S,min2str:a,sec2str:D,hms2str:b,get_dt:T,get_local_wd:l,get_utc_wd:y,get_days_num_of_month:z,get_yd:g,get_local_yw:p,get_utc_yw:Z,get_qm:h,get_fst_date_of_q:G,get_local_qw:function(t,e,n,M){let d=G(t,e),r=p(t,d.getMonth()+1,d.getDate()),Y=p(t,n,M);return qw=Y-r+1,qw},get_utc_qw:w,get_local_qd:function(t,e,n,M){let d=G(t,e),r=g(t,d.getMonth()+1,d.getDate());return g(t,n,M)-r+1},get_utc_qd:A,get_mt:O,get_fst_date_of_m:U,get_local_mw:function(t,e,n){let M=U(t,e),d=p(t,M.getMonth()+1,M.getDate());return p(t,e,n)-d+1},get_utc_mw:k,get_td:I,moffset2z:q,z2moffset:C,get_z:N,dt2local_dict:j,dt2utc_dict:function(t){return x(t,"+0000")},dt2dict:x,dt2ts:function(t){return t.getTime()/1e3},dt2local_str:function(t){return R(t,N(t))},dt2utc_str:function(t){return R(t,"+0000")},dt2str:R,obj2local_dict:v,sub:function(t,e){let n=v(t).mts-v(e).mts;return M.get_unit_dict(n,[24,60,60,1e3],["d","h","min","s","ms"])},dhmsms_dict_to_mts:function(t){return t.d*f.DAY_MS+t.h*f.HOUR_MS+t.min*f.MIN_MS+t.s*f.S_MS+t.ms},dhmsms_dict_to_ts:function(t){return t.d*f.DAY_S+t.h*f.HOUR_S+t.min*f.MIN_S+t.s+t.ms/f.S_MS},dhmsms_dict_to_min:function(t){return t.d*f.DAY_MIN+t.h*f.HOUR_MIN+t.min+t.s/f.MIN_S+t.ms/f.MIN_MS},dhmsms_dict_to_hour:function(t){return t.d*f.DAY_HOUR+t.h+t.min/f.HOUR_MIN+t.s/f.HOUR_S+t.ms/f.HOUR_MS},dhmsms_dict_to_day:function(t){return t.d+t.h/f.DAY_HOUR+t.min/f.DAY_MIN+t.s/f.DAY_S+t.ms/f.DAY_MS}}}])}));
//# sourceMappingURL=jsnoz.js.map