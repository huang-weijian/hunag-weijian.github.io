(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{530:function(e,t,n){var r=n(531),o=n(532),s=n(533),c=n(535);e.exports=function(e,t){return r(e)||o(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},531:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},532:function(e,t){e.exports=function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,s=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},533:function(e,t,n){var r=n(534);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},534:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},535:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},618:function(e,t,n){"use strict";var r=n(138),o=n.n(r),s=n(139),c=n.n(s)()(o.a);c.push([e.i,".demo-colon-class {\n  color: red;\n}\n","",{version:3,sources:["webpack://./src/views/DemoCountDown/index.less"],names:[],mappings:"AAAA;EACE,UAAA;AACF",sourcesContent:[".demo-colon-class {\n  color: red;\n}\n\n"],sourceRoot:""}]),t.a=c},638:function(e,t,n){"use strict";n.r(t);var r=n(530),o=n.n(r),s=(n(218),n(11)),c=n(526),i=n(527),u=n(2),a=n(137),l=n.n(a),d=n(618),p={insert:"head",singleton:!1};l()(d.a,p),d.a.locals;function f(e){var t=Object(u.useRef)(),n=Object(u.useState)(0),r=o()(n,2),a=r[0],l=r[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"推荐直接使用本包内的useCountDown hook，有更多的扩展方法，可随时更改递减时间、递减值等"},void 0),Object(s.jsx)("p",{children:"It is recommended to directly use useCountDown hook in this package. There are more extension methods, and you can change the decrement time and decrement value at any time"},void 0),Object(s.jsx)(c.a,{title:"countDown"},void 0),Object(s.jsx)(i.e,{time:6e5,ref:t,interval:1e3,colonClassName:"demo-colon-class"},void 0),Object(s.jsxs)("div",{children:[Object(s.jsx)(i.b,Object.assign({type:"primary",onClick:function(){t.current&&t.current.restart()}},{children:"restart"}),void 0),Object(s.jsx)(i.b,Object.assign({type:"primary",onClick:function(){t.current&&t.current.continue()}},{children:"continue"}),void 0),Object(s.jsx)(i.b,Object.assign({type:"primary",onClick:function(){t.current&&t.current.stop()}},{children:"stop"}),void 0)]},void 0),Object(s.jsxs)("p",{children:[Object(s.jsx)(i.h,{type:"int",onInput:function(e){return l(parseInt(e))}},void 0),Object(s.jsx)(i.b,Object.assign({size:"mini",type:"primary",onClick:function(){t.current&&t.current.restart(a)}},{children:"reset input"}),void 0)]},void 0),Object(s.jsx)(c.a,{title:"custom"},void 0),Object(s.jsx)(i.e,{time:1e4,render:function(e){return"".concat(e.day,"天").concat(e.hour,"小时").concat(e.minute,"分").concat(e.second,"秒")}},void 0)]},void 0)}!function(e){e.displayName="DemoCountDown"}(f||(f={}));t.default=f}}]);
//# sourceMappingURL=6.js.map