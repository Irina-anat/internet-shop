var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("7FFal"),s=n("hU4M9"),a=n("8C1lk"),i=n("l5ICX");const l=JSON.parse(localStorage.getItem(s.common.basketItems))??[],c=document.querySelector(".js-basket");(0,r.createMarcup)(c,l),console.log(c),c.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-information")){const t=(0,a.findProduct)(e.target);(0,i.createModal)(t)}else if(e.target.classList.contains("js-basketBtn")){const t=(0,a.findProduct)(e.target);if(l.some((({id:e})=>e===t.id)))return;l.push(t),console.log(l),localStorage.setItem(s.common.basketItems,JSON.stringify(l))}}));
//# sourceMappingURL=basket.e2d6d742.js.map
