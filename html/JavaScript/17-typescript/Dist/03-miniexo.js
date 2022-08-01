"use strict";
/**
 * faire fonctionner le compteur de la partie 1.
*/
const btn = document.querySelector("#compte");
let i = 0;
btn?.addEventListener("pointerdown", () => {
    i++;
    btn.textContent = i.toString();
});
if (btn) {
    btn.style.backgroundColor = "orange";
}
