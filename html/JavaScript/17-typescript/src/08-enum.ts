"use strict";

function hasard(arg: unknown){
    /**
     * Le type unknown indique que l'on ne connaît pas le type de notre argument.
     * Mais à la différence de any qui acceptera n'importe quel traitement sur notre
     * argument, le type unknow va loquer tout ce qui aurait une chance de ne pas
     * fonctionner.
     * Par exemple ici, toString() ne fonctionnera pas si notre arg est un objet.
     */
    // arg.toString();
    if(typeof arg === "number"){
        // Mais une fois sûr que c'est un nombre, là il fonctionnera
        arg.toString();
    }
}
// a est de type literal "bonjour" alors que a1 est de type "string"
const a = "bonjour";
let a1 = "bonjour";
/**
 * a étant une constante, il ne pourra pas varier, TS lui donne sa valeur comme type
 * litéral, alors que a1 étant une variable en let, il pourra prendre d'autres valeurs
 * le type string lui est plus adapté.
 * 
 * Dans le cas d'un objet en constante, les types de ses propriétés sont de type
 * variable (ici sttring);
 * Si je ne peux pas changer le contenant, je peux changer le contenu.
 */
const obj = {truc: "banane", machin: "camion"};
/**
 * le mot clef as me permet de renommer ou change le type.
 * Ici j'indique que le type de truc se nomme "fruit"
 * et avec le mot clef const, j'indique que machin est une propriété constante.
 * machin prendra donc sa propre valeur comme type literal.
 */
const obj1 = {truc: "banane" as "fruit", machin: "camion" as const};
/**
 * en mettant le as const à la fin, il placera automatiquement toute les propriétés
 * de mon objet en constance (utilisant leur valeur comme type literal)
 * et en plus de cela ajoutera le readonly.
 */
const obj2 = {truc: "banane", machin: "camion"} as const;
// Je peux aussi utiliser as const sur un tableau.
const ar1 = [3,5,1] as const;

// ------------------------------ Tuple --------------------------------
// ar2 est un tableau puvant contenir que des nombres et des strings.
const ar2: (string|number)[] = [4, "truc", 45];
// ar3 DOIT contenir UN string suivi d'un nombre;
const ar3: [string, number] = ["truc", 34];
// const ar3: [string, number] = ["truc", 34, "test"]; erreur

type ListeBool = [string, boolean];
const ar4: ListeBool = ["chaussette", true];
const ar5: ListeBool = ["tongue", true];

function fusion<T1 extends unknown[],T2 extends unknown[]>(tab1: T1, tab2: T2):[...T1,...T2]{
    /**
     * Notre fonction fusion prend deux argument qui seront des tableaux inconnu.
     * Et elle devra retourner un élément qui sera la fusion des types des
     * deux tableaux.
     */
    return [...tab1, ...tab2];
}
// function fusion(tab1: any[], tab2: any[]){
//     return [...tab1, ...tab2];
// }
const ar6 = fusion(ar4, ar5);
// la fonction fusion fait l'équivalent de ceci:
type DoubleLB = [...ListeBool, ...ListeBool]
const ar6bis: DoubleLB = [...ar4, ...ar5];
// ----------------------- ENUM ---------------------
/**
 * Les énumérateurs permettent de lister des valeurs qui seront les seuls utilisable.
 */
// enum Fruits{
//     banane,
//     fraise,
//     pomme,
//     cerise
// }
/**
 * Par défaut, ce qu'affichera notre énumerateur, ce n'est que l'index de l'élément
 * choisi, par exmple banane affichera 0;
 * Mais en leur disant à chacun à quel string ils sont égale, on peut afficher leur nom.
 */
// enum Fruits{
//     banane = "banane",
//     fraise = "fraise",
//     pomme = "pomme",
//     cerise = "cerise"
// }
/**
 * Aujourd'hui les enum ne sont pas géré en JS vanilla, on aura donc un constructeur
 * assez complexe dans notre code compilé, mais on peut le faire disparaître grâce
 * au mot clef const placé avant l'enum, il sera alors utilsé uniquement en TS
 * et en JS on aura juste la valeur directement donné à notre objet.
 */
const enum Fruits{
    banane,
    fraise,
    pomme,
    cerise
}
interface favorite{
    fruit: Fruits;
    legume: string;
}
const maurice: favorite = {
    legume: "carotte",
    fruit: Fruits.banane
}