"use strict";
/**
 * Le plus gros apport de typescript est dans son nom, c'est le typage, c'est à dire
 * que comme dans de nombreux langages comme Java par exemple, il va nous falloir
 * indiquer de quel type sont nos variables, argument...
 */
const mot = "bonjour";
const chiffre = 45;
const bool = true;
const nu = null;
// On peut aussi indiquer ce que doivent contenir nos tableaux.
const arr1 = ["truc", "bidule"];
/**
 * Si une variable, ou un tableau (ou autre) doit contenir plusieurs types,
 * alors on a le mot clef "any"
 * Mais on évitera au maximum de l'utiliser. Typescript perd de son intérêt si on
 * peut utiliser n'importe quel type comme en JS vanilla.
 */
let truc = 5;
truc = "bidule";
const arr2 = [4, true, "bonjour"];
/**
 * Pour définir un objet, ce sera un peu plus verbeux.
 * La définition de l'objet indique ici qu'il doit contenir une propriété
 * "prenom" qui devra avoir une valeur de type string.
 * et grâce à "?" il peut ou non contenir une propriété age qui devra être un nombre.
 * Il ne devra pas contenir d'autres propriétés.
 */
const person = { prenom: "maurice" };
// Si le nombre de propriété de notre objet est variable, on peut faire cela :
const person2 = { prenom: "Paul", nom: "Dupont", age: "54" };
// Chaque autre propriété sera un string contenant un string.
/**
 * Nos variables peuvent parfois contenir des objets créé à partir de classe
 * ou des fonctions, cela fonctionnera de la facon suivante :
 */
const today = new Date();
const salut = function () { };
/**
 * En parlant de fonction on pourra typer les arguments et les valeurs de retour.
 * le mot clef void indique ici que notre fonction ne retourne rien.
 */
function clickMoi(e) {
    console.log("Merci de cliquer sur", e.target);
}
// Si l'argument ne correspond pas, ce sera une erreur.
// document.addEventListener("click", clickMoi);
document.addEventListener("pointerdown", clickMoi);
const compte = (nom) => { return nom.length; };
// Le premier est une erreur, le second n'en est pas une.
// compte(54)
compte("truc");
// Le readonly permet d'indiquer que l'argument ne doit pas être modifié.
function tri(arg) {
    // return arg.sort();
    return [...arg].sort();
}
/**
 * La plupart du temps, indiquer le type n'est pas obligatoire, il permet juste une
 * relecture plus facile, comprendre directement ce que contient une variable.
 * Si on ne met pas de type, Typescript tentera de deviner par lui même.
 *
 * Ici il refuse de mettre "bonjour" dans x car la première valeur de x étant un nombre
 * Il indiquera que x doit toujours être de type nombre.
 */
let x = 5;
// x = "bonjour";
/**
 * Mais parfois il reste important d'indiquer le type de notre variable.
 * car Typescript peut se tromper.
 */
// const btn1 = document.querySelector("#compte") as HTMLButtonElement;
// btn1.style.color = "red";
/**
 * Cette première facon dira à TS que notre querySelector retourne un HTMLButtonElement
 * au lieu de simple Element.
 * ! Attention, par défaut typescript sait que querySelector peut être null.
 * ! Mais cette facon de faire, lui retire cette possibilité.
 * const btn1 = <HTMLButtonElement>document.querySelector("#compte")
 * Cette dernière facon lui indiquera que le querySelector sera soit HTMLButtonElement
 * soit null, plutôt que de réécrire totalement les retours possible.
 * const btn1 = document.querySelector<HTMLButtonElement>("#compte")
 *
 * const btn = document.querySelector<HTMLButtonElement>("#compte")!
 */
const btn1 = document.querySelector("#compte");
if (btn1) {
    btn1.style.color = "red";
}
/**
 * Parfois une variable peut avoir un ou plusieurs types différents.
 * Dans ce cas on utilisera l'union type.
 */
let y = 5;
y = "salut";
y = true;
