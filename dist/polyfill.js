!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSvgIconPolyfill=t():e.VueSvgIconPolyfill=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"===("undefined"==typeof document?"undefined":o(document))&&"string"!=typeof document.createElementNS("http://www.w3.org/2000/svg","svg").innerHTML&&Object(r.a)()},function(e,t,n){"use strict";t.a=function(){var e=function e(t,n){var r=t.nodeType;if(3==r)n.push(t.textContent.replace(/&/,"&amp;").replace(/</,"&lt;").replace(">","&gt;"));else if(1==r){if(n.push("<",t.tagName),t.hasAttributes())for(var o=t.attributes,i=0,s=o.length;i<s;++i){var u=o.item(i);n.push(" ",u.name,"='",u.value,"'")}if(t.hasChildNodes()){n.push(">");for(var f=t.childNodes,i=0,s=f.length;i<s;++i)e(f.item(i),n);n.push("</",t.tagName,">")}else n.push("/>")}else{if(8!=r)throw"Error serializing XML. Unhandled node of type: "+r;n.push("\x3c!--",t.nodeValue,"--\x3e")}};Object.defineProperty(SVGElement.prototype,"innerHTML",{get:function(){for(var t=[],n=this.firstChild;n;)e(n,t),n=n.nextSibling;return t.join("")},set:function(e){for(;this.firstChild;)this.removeChild(this.firstChild);try{var t=new DOMParser;t.async=!1;for(var n="<svg xmlns='http://www.w3.org/2000/svg'>"+e+"</svg>",r=t.parseFromString(n,"text/xml").documentElement,o=r.firstChild;o;)this.appendChild(this.ownerDocument.importNode(o,!0)),o=o.nextSibling}catch(e){throw console.error(e),new Error("Error parsing XML string")}}}),Object.defineProperty(SVGElement.prototype,"innerSVG",{get:function(){return this.innerHTML},set:function(e){this.innerHTML=e}})}}])});