function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return v.Date.now()};function b(e,t,n){var i,o,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=y();if(b(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&i?m(e):(i=o=void 0,a)}function O(){var e=y(),n=b(e);if(i=arguments,o=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(h,t),d?m(e):a}(c);if(s)return f=setTimeout(h,t),m(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=S(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},O.flush=function(){return void 0===f?a:w(y())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&m.call(e)==o}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):a.test(e)?i:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};const h=document.querySelector(".feedback-form"),w=document.querySelector(".feedback-form input"),O=document.querySelector(".feedback-form textarea"),T="feedback-form-state";let x={};function E(){return data=JSON.parse(localStorage.getItem(T)),data||{}}h.addEventListener("input",e(t)((function(e){x=E(),x[e.target.name]=e.target.value,t=T,n=x,localStorage.setItem(t,JSON.stringify(n));var t,n}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(T),e.target.reset()})),function(e){const{email:t,message:n}=e;t&&(w.value=t),n&&(O.value=n)}(E());
//# sourceMappingURL=03-feedback.7665201f.js.map
