"use strict";
/**
 *
 * Le narrowing c'est le fait de diminuer les possibilités
 */
function birthday(age) {
    console.log(age);
    // age++ Erreur car peut être un string
    if (typeof age === "number") {
        age++;
    }
    else {
        age = parseInt(age) + 1;
    }
    // return age; Erreur cas retourne un nombre.
    return age + " ans";
}
function chaussette(droite, gauche) {
    // Ici ils ont bien leur types défini plus haut.
    console.log(droite, gauche);
    if (droite === gauche) {
        // Ici seul le type string reste car il est le seul en commun aux deux.
        console.log(droite, gauche);
    }
}
function planning(date, days) {
    // console.log(date.getDate()); erreur car possiblement un string.
    if (date instanceof Date) {
        // Ici date est forcément de la classe Date.
        console.log(date.getDate());
    }
    // console.log(days+1); peut être un tableau
    if (!Array.isArray(days)) {
        console.log(days + 1);
    }
}
document.addEventListener("keypress", clavier);
function clavier(e) {
    if ("truc" in e) {
        // Le type never indique que selon typescript, il ne peut y avoir aucun type
        // qui correspond à cette variable. (sans provoquer d'erreur)
        console.log(e);
    }
}
// Avec un boolean en retour, TS n'arrive pas à savoir à quoi correspond le boolean
// function idDate(a: any): boolean{
function isDate(a) {
    // En lui indiquant a is Date, TS comprend que le boolean indique si a est une
    // Date ou non.
    return a instanceof Date;
}
function check(a) {
    if (isDate(a)) {
        console.log(a.getDate());
    }
}
