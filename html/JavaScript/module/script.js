"use strict";

/**------------------------------ EXPORT ----------------------
 * On peut importer avec un script de type module les fonctions ou objet d'un
 * autre script. Pour cela il faut que ce script à importer comporte le mot clef
 * "export" devant la déclaration de fonction.
 * On peut exporter autant d'élément que l'on souhaite, mais seul l'un d'entre eux
 * peut profiter de "export default"
 * ------------------------------ IMPORT -------------------------
 * Par défaut, l'import ne peut se trouver que dans le block le plus haut.
 * C'est à dire pas dans une fonction, une condition, une boucle ou autre.
 * 
 * Sans default dans le fichier, il suffit d'utiliser le mot clef import,
 * suivi d'entre accolade, séparé de virgule les fonctions que l'on veut importer.
 * puis le mot clef from et en string le chemin vers le fichier.
 *          import {init, create} from "./carousel.js";
 * Si un mot clef default à été utilisé, avant les accoladeson peut donner un nom
 * peu importe lequel et il sera utilisé pour importer la fonction par défaut.
 *          import s, {create} from "./carousel.js";
 * On peut aussi renommer les fonctions exporté avec le mot clef "as" 
 *          import s, {create as c} from "./carousel.js";
 * On peut aussi tout simplement tout importer dans un objet
 */
// import start, {create} from "./carousel.js";
const images = ["./img/giant-cat-on-beach.jpg", "./img/staline l'oréaljpeg.jpg", "./img/shining-eyes-dog.jpg"];
// const carousel = create(images);
// document.body.append(carousel);
// start();
/**
 * Pour faire un import sans être au top level du script (dans une condition, une boucle
 * un évènement ou autre). On n'utilisera pas le mot clef import mais la fonction
 * import()qui retournera une promesse un peu comme un fetch.
 */
window.addEventListener("click", addCarousel)
async function addCarousel(){
    const slides = await import("./carousel.js")
    const carousel = slides.create(images);
    document.body.append(carousel);
    slides.default();
    window.removeEventListener("click", addCarousel);
}