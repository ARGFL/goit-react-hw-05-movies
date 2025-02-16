"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(439),a=e(791),c=e(203),u=e(794),s="Cast_castList__YLyW5",o="Cast_castItem__safj9",i="Cast_castImage__4sbG2",p="Cast_error__MhI3P",f=e(184);var l=function(){var r=(0,c.UO)().movieId,t=(0,a.useState)([]),e=(0,n.Z)(t,2),l=e[0],h=e[1],v=(0,a.useState)(!0),m=(0,n.Z)(v,2),d=m[0],x=m[1],g=(0,a.useState)(null),b=(0,n.Z)(g,2),_=b[0],k=b[1];return(0,a.useEffect)((function(){x(!0),(0,u.zv)(r).then((function(r){r&&r.cast?h(r.cast):h([])})).catch((function(r){console.error("Error fetching cast:",r),k("Failed to load cast information.")})).finally((function(){return x(!1)}))}),[r]),d?(0,f.jsx)("p",{children:"Loading cast..."}):_?(0,f.jsx)("p",{className:p,children:_}):l.length?(0,f.jsx)("div",{className:s,children:l.map((function(r){return(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w200".concat(r.profile_path):"https://via.placeholder.com/100x150?text=No+Image",alt:r.name||"Unknown Actor",className:i}),(0,f.jsx)("p",{children:(0,f.jsx)("strong",{children:r.name||"Unknown"})}),(0,f.jsxs)("p",{children:["Character: ",r.character||"N/A"]})]},r.id)}))}):(0,f.jsx)("p",{children:"No cast information available."})}},794:function(r,t,e){e.d(t,{Df:function(){return o},TP:function(){return l},tx:function(){return d},z1:function(){return p},zv:function(){return v}});var n=e(861),a=e(757),c=e.n(a),u="f0c7b0ac86278732798f28655b779cf2",s="https://api.themoviedb.org/3";function o(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat(s,"/trending/movie/day?api_key=").concat(u,"&language=en-US"));case 3:return t=r.sent,r.next=6,t.json();case 6:return e=r.sent,r.abrupt("return",e.results||[]);case 10:return r.prev=10,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function p(r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t){r.next=3;break}return r.abrupt("return",[]);case 3:return r.next=5,fetch("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&language=en-US"));case 5:return e=r.sent,r.next=8,e.json();case 8:return n=r.sent,r.abrupt("return",n.results||[]);case 12:return r.prev=12,r.t0=r.catch(0),console.error("Error searching for movies:",r.t0),r.abrupt("return",[]);case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))).apply(this,arguments)}function l(r){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t){r.next=3;break}return r.abrupt("return",null);case 3:return r.next=5,fetch("".concat(s,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 5:return e=r.sent,r.abrupt("return",e.json());case 9:return r.prev=9,r.t0=r.catch(0),console.error("Error fetching details for movie ID ".concat(t,":"),r.t0),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function v(r){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t){r.next=3;break}return r.abrupt("return",{cast:[]});case 3:return r.next=5,fetch("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 5:return e=r.sent,r.abrupt("return",e.json());case 9:return r.prev=9,r.t0=r.catch(0),console.error("Error fetching cast for movie ID ".concat(t,":"),r.t0),r.abrupt("return",{cast:[]});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function d(r){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,t){r.next=3;break}return r.abrupt("return",[]);case 3:return r.next=5,fetch("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 5:return e=r.sent,r.next=8,e.json();case 8:return n=r.sent,r.abrupt("return",n.results||[]);case 12:return r.prev=12,r.t0=r.catch(0),console.error("Error fetching reviews for movie ID ".concat(t,":"),r.t0),r.abrupt("return",[]);case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=76.1468c6f0.chunk.js.map