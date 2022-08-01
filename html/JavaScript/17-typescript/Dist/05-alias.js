"use strict";
let b = { nom: "Banane", couleur: "Verte" };
// let b: Fruit = {nom: "Banane", color: "Verte"}; Erreur car color != couleur
let p = { nom: "Maurice", age: 54 };
// let p: Person = {nom: "Maurice", age: true} Erreur
let bs = [b, { nom: "Fraise", couleur: "blanche" }];
let f = "age";
// let f: Full= "Truc"; Erreur car ce n'est ni "age" ni "nom"
const machin = { a: true, b: "truc", chose: ["test"] };
// -------------------------------- Generics -----------------------------------
function useless(arg) {
    return arg;
}
// la fonction indique qu'elle retourne "any" donc peu importe ce qui est rendu
// machine sera de type "any"
const machine = useless("chausette");
function useful(arg) {
    return arg;
}
const machine2 = useful("Coucou");
/**
 * machine2 est de type "Coucou" car il comprend qu'il doit retenir le type du premier
 * argument dans le generix "type1" et qu'il doit retourner ce même type.
 * Mais plutôt que la valeur litéral, je préfère avoir un type plus classique,
 * je peux alors utiliser un generic juste avant l'appel de la fonction.
 */
const machine3 = useful("Coucou");
function lastof(arg) {
    return arg.at(-1);
}
/**
 * TS comprend qu'il doit récupérer le type du tableau, et retourner un élément
 * qui sera de ce même type.
 */
const last = lastof([34, 23, 12]);
const last2 = lastof(["34", "23", "12"]);
const last3 = lastof(["34", 23, "12", true]);
// On indique que la fonction accepte n'importe quel type tant qu'il a une
// propriété length.
function logSize(arg) {
    console.log(arg.length);
    return arg;
}
logSize("chaussette");
logSize([]);
