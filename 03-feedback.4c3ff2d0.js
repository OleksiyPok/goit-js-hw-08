!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}var i="Expected a function",o=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,m=s||v||Function("return this")(),p=Object.prototype.toString,b=Math.max,y=Math.min,g=function(){return m.Date.now()};function S(e,t,n){var r,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function m(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function S(){var e=g();if(p(e))return w(e);a=setTimeout(S,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function w(e){return a=void 0,v&&r?m(e):(r=o=void 0,f)}function O(){var e=g(),n=p(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(S,t),d?m(e):f}(c);if(s)return a=setTimeout(S,t),m(c)}return void 0===a&&(a=setTimeout(S,t)),f}return t=h(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},O.flush=function(){return void 0===a?f:w(g())},O}function j(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==u}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):a.test(e)?o:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,maxWait:t,trailing:o})};var w=document.querySelector(".feedback-form"),O=(document.querySelector(".feedback-form input"),document.querySelector(".feedback-form textarea"),"feedback-form-state"),T={};w.addEventListener("input",e(t)((function(e){(T=JSON.parse(localStorage.getItem(O)))[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(T))}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(O),e.target.reset()}))}();
//# sourceMappingURL=03-feedback.4c3ff2d0.js.map
