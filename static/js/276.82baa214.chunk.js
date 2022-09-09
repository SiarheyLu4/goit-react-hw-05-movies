"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{126:function(n,e,t){t.d(e,{e:function(){return s}});var r,c,o=t(168),a=t(501),u=t(444),i=t(184),s=function(n){var e=n.items.map((function(n){var e=n.id,t=n.title;return(0,i.jsx)(f,{children:(0,i.jsx)(p,{to:"/movies/".concat(e),children:t})},e)}));return(0,i.jsx)("ul",{children:e})};s.defaultProps={items:[]};var p=(0,u.ZP)(a.rU)(r||(r=(0,o.Z)(["\n  text-decoration: none;\n  color: inherit;\n  &: hover{\n    color: #5941e8;\n  }\n"]))),f=u.ZP.li(c||(c=(0,o.Z)(["\npadding-bottom: 4px;\nfont-size: 24px;\n"])))},276:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r=t(168),c=t(444),o=t(907);var a=t(181);function u(n){return function(n){if(Array.isArray(n))return(0,o.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i,s,p,f=t(413),l=t(861),v=t(885),h=t(757),d=t.n(h),m=t(791),x=t(275),Z=t(126),y=t(184),g=function(){var n=(0,m.useState)({items:[],loading:!1,error:null}),e=(0,v.Z)(n,2),t=e[0],r=e[1];(0,m.useEffect)((function(){var n=function(){var n=(0,l.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r((function(n){return(0,f.Z)((0,f.Z)({},n),{},{loading:!0,error:null})})),n.next=4,(0,x._L)();case 4:e=n.sent,r((function(n){return(0,f.Z)((0,f.Z)({},n),{},{items:[].concat(u(n.items),u(e))})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r((function(e){return(0,f.Z)((0,f.Z)({},e),{},{error:n.t0})}));case 11:return n.prev=11,r((function(n){return(0,f.Z)((0,f.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]);var c=t.items,o=t.loading,a=t.error;return(0,y.jsxs)(w,{children:[c.length>0&&(0,y.jsx)(Z.e,{items:c}),o&&(0,y.jsx)("p",{children:"Loading movies"}),a&&(0,y.jsx)("p",{children:"Loading movies failed"})]})},w=c.ZP.div(i||(i=(0,r.Z)(["\n  margin: 12px;\n"]))),b=c.ZP.div(s||(s=(0,r.Z)(["\nmax-width: 1140px;\nmargin: 0 auto;\n"]))),k=c.ZP.h2(p||(p=(0,r.Z)(["\nfont-size: 32px;\ntext-align: center;\nmargin:12px;\n"]))),j=function(){return(0,y.jsxs)(b,{children:[(0,y.jsx)(k,{children:"Trending Today"}),(0,y.jsx)(g,{})]})}},275:function(n,e,t){t.d(e,{IQ:function(){return f},Jh:function(){return l},V0:function(){return p},X:function(){return s},_L:function(){return i}});var r=t(861),c=t(757),o=t.n(c),a="https://api.themoviedb.org/3",u="b562b6919245407f9980120c8923230e",i=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"/trending/movie/day?api_key=").concat(u));case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,n.abrupt("return",t.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"/movie/").concat(e,"?api_key=").concat(u));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(u));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,console.log(r),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,console.log(r),n.abrupt("return",r);case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=276.82baa214.chunk.js.map