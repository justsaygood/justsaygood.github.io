!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(1),new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",slidesPerGroup:1,watchOverflow:!0,breakpoints:{768:{slidesPerView:1/0}}});var n=document.querySelector(".button-all__brands"),r=document.querySelector(".icon-more"),c=document.querySelector(".brands");n.addEventListener("click",(function(){"Показать все"===n.textContent?(c.classList.add("brands--open"),n.textContent="Скрыть",r.classList.add("icon-more--reverse")):"Скрыть"===n.textContent&&(c.classList.remove("brands--open"),n.textContent="Показать все",r.classList.remove("icon-more--reverse"))}));var i=document.querySelector(".button-all__devices"),s=document.querySelector(".icon-more"),d=document.querySelector(".devices");function u(e,t,o){d.style.height=e,s.src=t,i.textContent=o}i.addEventListener("click",(function(){"100%"!==d.style.height?u("100%","image/icon-close.svg","Скрыть"):u("200px","image/icon.svg","Показать все")}));var a=document.querySelector(".popup__feedback"),l=a.querySelector(".button-close");document.querySelectorAll(".button--chat").forEach((function(e){e.addEventListener("click",(function(e){a.classList.add("popup__feedback--active"),document.body.classList.add("body--disabled")}))})),l.addEventListener("click",(function(){a.classList.remove("popup__feedback--active"),document.body.classList.remove("body--disabled")}));var p=document.querySelector(".popup__call"),b=p.querySelector(".button-close");document.querySelectorAll(".button--call").forEach((function(e){e.addEventListener("click",(function(e){p.classList.add("popup__call--active"),document.body.classList.add("body--disabled")}))})),b.addEventListener("click",(function(){p.classList.remove("popup__call--active"),document.body.classList.remove("body--disabled")}));var f=document.querySelector(".side-wrap"),v=document.querySelector(".menu__button--burger"),y=f.querySelector(".button--burger"),m=document.querySelector(".additional-wrapper");v.addEventListener("click",(function(){f.classList.add("side-wrap--show"),document.body.classList.add("body--disabled")})),y.addEventListener("click",(function(){f.classList.remove("side-wrap--show"),document.body.classList.remove("body--disabled")})),m.addEventListener("click",(function(e){e.preventDefault(),f.classList.remove("side-wrap--show"),document.body.classList.remove("body--disabled"),document.querySelector(".side-wrap").addEventListener("click",(function(e){e.stopPropagation()}))})),console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map