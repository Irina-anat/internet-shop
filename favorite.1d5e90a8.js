var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("7FFal"),i=n("hU4M9"),s=n("bh8hC"),l=n("8C1lk"),a=n("l5ICX"),c=n("iQIUW");console.log(s.btn);const d=JSON.parse(localStorage.getItem(i.common.favoriteItems))??[],f=document.querySelector(".js-list");(0,r.createMarcup)(f,d),f.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-information")){const t=(0,l.findProduct)(e.target);(0,a.createModal)(t)}else if(e.target.classList.contains("js-delete")){const t=(0,l.findProduct)(e.target);console.log(t);const o=d.findIndex((({id:e})=>e===t.id));-1!==o&&(d.splice(o,1),(0,r.createMarcup)(f,d),localStorage.setItem(i.common.favoriteItems,JSON.stringify(d)),c.Notify.success("The product has been removed from favorites"),console.log(d))}}));
//# sourceMappingURL=favorite.1d5e90a8.js.map
