!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequiref2dc;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,n){t[e]=n},e.parcelRequiref2dc=o);var i=o("h6c0i"),c=(document.querySelector(".form"),document.querySelector("input[name=delay]")),r=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]"),u=document.querySelector("button"),l=0;function f(e,n){var t=Math.random()>.3;return new Promise((function(o,i){t?o({position:e,delay:n}):i({position:e,delay:n})}))}u.addEventListener("click",(function(e){e.preventDefault();var n=c.value,t=r.value,o=a.value,u=setTimeout((function(){f(l+=1,t).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}));var e=setInterval((function(){f(l+=1,t).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),l===Number(o)&&(clearInterval(e),clearTimeout(u),l=0)}),t)}),n)}))}();
//# sourceMappingURL=03-promises.063ef582.js.map
