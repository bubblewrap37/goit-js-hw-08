var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",i=0/0,o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=l.test(e);return r||u.test(e)?f(e.slice(2),r?2:8):a.test(e)?i:+e}t.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(e,t,n){var i,o,a,l,u,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(r);function O(t){var n=i,r=o;return i=o=void 0,s=t,l=e.apply(r,n)}function x(e){var n=e-f,r=e-s;return void 0===f||n>=t||n<0||m&&r>=a}function T(){var e,n,r,i=g();if(x(i))return h(i);u=setTimeout(T,(e=i-f,n=i-s,r=t-e,m?p(r,a-n):r))}function h(e){return(u=void 0,d&&i)?O(e):(i=o=void 0,l)}function j(){var e,n=g(),r=x(n);if(i=arguments,o=this,f=n,r){if(void 0===u)return s=e=f,u=setTimeout(T,t),c?O(e):l;if(m)return u=setTimeout(T,t),O(f)}return void 0===u&&(u=setTimeout(T,t)),l}return t=y(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(y(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),j.cancel=function(){void 0!==u&&clearTimeout(u),s=0,i=f=o=u=void 0},j.flush=function(){return void 0===u?l:h(g())},j}(e,t,{leading:i,maxWait:t,trailing:o})}});var i=r("9OeKo");const o=document.querySelector(".feedback-form"),a=localStorage.getItem("feedback-form-state"),l=JSON.parse(a);a&&(o.elements.email.value=l.email,o.elements.message.value=l.message);const u=(i&&i.__esModule?i.default:i)(function(e){let t=JSON.stringify({email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value});localStorage.setItem("feedback-form-state",t)},500);o.addEventListener("input",u),o.addEventListener("submit",function(e){e.preventDefault(),console.log({[o.elements.email.name]:o.elements.email.value,[o.elements.message.name]:o.elements.message.value}),o.reset(),localStorage.clear()});
//# sourceMappingURL=03-feedback.8114f51d.js.map
