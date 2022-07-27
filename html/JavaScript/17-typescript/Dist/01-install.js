"use strict";
/**
 * Typescript est une surcouche à Javascript, c'est à dire que tout ce qui est faisable
 * en Javascript, l'est aussi en typescript.
 * Mais au contraire d'une simple bibliothèque (library), on se trouve dans des fichiers
 * .ts. Le défaut, c'est qu'ils sont illisible par nos navigateurs.
 * Il faudra donc les compilers en fichiers Javascript avant de pouvoir les lire.
 * --------------------------- Avantage ----------------------------
 * TS apporte le typage, cela nous force à coder avec rigueur en indiquant le type de
 * chaque variable, argument...
 * Cela peut nous permettre d'éviter plus facilement nous permettre d'adapter un code moderne à de vieux
 * navigateurs.
 * à la différence d'une bibliothèque, une fois compilé, il n'y a rien à ajouté à
 * votre site. votre code ne sera pas aloudi par TS.
 * ---------------------------- Désavantage ------------------------------------
 * On est forcé de compiler notre code.
 * Cela rajoute un outil en plus à paramètrer en début de projet.
 * ---------------------------- Installation ----------------------------------
 * Nous avons besoin de NPM.
 * npm install typescript --save-dev (-g pour le global)
 * On peut vérifier si l'installation a bien été effectué avec :
 * (en local) npx tsc -v
 * (en global) tsc -v
 * En cas de non reconnaissance de la commande :
 * Vérifier si c'est en global que NPM est bien dans les variables d'environnement
 * et si l'éxecution est bloqué, lancer:
 *  "set-executionpolicy"
 */
var btn = document.querySelector("#compte");
var i = 0;
btn === null || btn === void 0 ? void 0 : btn.addEventListener("pointerdown", function () {
    i++;
    btn.textContent = i;
});
