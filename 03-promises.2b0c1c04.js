var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("7Y9D8");r=o("7Y9D8");function i(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const t=parseInt(e.target.elements.delay.value),n=parseInt(e.target.elements.step.value),o=parseInt(e.target.elements.amount.value);for(let e=0;e<o;e++){i(e+1,t+e*n).then((({position:e,delay:t})=>{r.Notify.Success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.Failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.2b0c1c04.js.map
