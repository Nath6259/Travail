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
 *  "set-executionpolicy remotesigned" dans powershell en administrateur.
 * Pour compiler un fichier :
 * (npx) tsc "chemin vers le fichier"
 * Pour compiler dans un dossier différent :
 * (npx) tsc "chemin vers le fichier" --outDir "chemin vers le dossier js"
 *
 * Il est possible de créer un fichier tsconfig.json à la racine de notre projet
 * afin d'éviter de nous répéter.
 * l'option compilerOptions: {outDir: "chemin vers le dossier"}
 * permet de ne pas avoir à retaper le dossier de sortie à chaque fois.
 * L'option files: [] permet de lister les fichiers à compiler.
 * Une fois cela fait, nous avons juste à taper :
 * (npx) tsc
 * Maisla encore, c'est trop demander aux développeurs.
 * (npx) tsc --watch
 * Permettra de lancer une surveillance de nos fichiers ts, et de compiler à chaque
 * sauvegarde
 */
var btn = document.querySelector("#compte");
var i = 0;
btn.addEventListener("pointerdown", function () {
    i++;
    // btn?.textContent = i;
});
