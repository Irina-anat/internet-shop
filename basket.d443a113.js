!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r,a=n("9thGE"),i=n("1n1Fu"),s=n("1CIOV"),l=n("aWUWK"),c=n("87LyB"),d=n("h6c0i");console.log(s.btn);var f=null!==(r=JSON.parse(localStorage.getItem(i.common.basketItems)))&&void 0!==r?r:[],u=document.querySelector(".js-basket");(0,a.createMarcup)(u,f),u.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-information")){var t=(0,l.findProduct)(e.target);(0,c.createModal)(t)}else if(e.target.classList.contains("js-delete")){var o=(0,l.findProduct)(e.target);console.log(o);var n=f.findIndex((function(e){return e.id===o.id}));-1!==n&&(f.splice(n,1),(0,a.createMarcup)(u,f),localStorage.setItem(i.common.basketItems,JSON.stringify(f)),d.Notify.success("The product has been removed from basket"),console.log(f))}}))}();
//# sourceMappingURL=basket.d443a113.js.map
