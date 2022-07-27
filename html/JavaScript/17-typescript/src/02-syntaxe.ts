"use strict";
/**
 * Le plus gros apport de typescript est dans son nom, c'est le typage, c'est à dire
 * que comme dans de nombreux langages comme Java par exemple, il va nous falloir
 * indiquer de quel type sont nos variables, argument...
 */
const mot: string = "bonjour";
const chiffre: number = 45;
const bool: boolean = true;
const nu: null = null;

// On peut aussi indiquer ce que doivent contenir nos tableaux.
const arr1: string[] = ["truc", "bidule"];
/**
 * Si une variable, ou un tableau (ou autre) doit contenir plusieurs types,
 * alors on a le mot clef "any"
 * Mais on évitera au maximum de l'utiliser. Typescript perd de son intérêt si on
 * peut utiliser n'importe quel type comme en JS vanilla.
 */
let truc: any = 5;
truc = "bidule";
const arr2: any[] = [4, true, "bonjour"];

/**
 * Pour définir un objet, ce sera un peu plus verbeux.
 * La définition de l'objet indique ici qu'il doit contenir une propriété
 * "prenom" qui devra avoir une valeur de type string.
 * et grâce à "?" il peut ou non contenir une propriété age qui devra être un nombre.
 * Il ne devra pas contenir d'autres propriétés.
 */
const person: {prenom: string, age?: number} = {prenom: "maurice"};
// Si le nombre de propriété de notre objet est variable, on peut faire cela :
const person2: {prenom: string, [key: string]: string} = {prenom: "Paul", nom: "Dupont", age: "54"};
// Chaque autre propriété sera un string contenant un string.