"use strict";
/* pour déclarer une fonction, j'utilise le mot "function" suivi de parenthèse qui accueillerons les possibles arguments
Et ensuite des accolades qui contiendrons le fonctionnement de ma fonction. */
function salut(){
    console.log("Bonjour tout le monde !");
}

/* Pour appeler une fonction, il me suffit de taper son nom suivi de parenthèses les opérations d'une fonction, ne sont effectué qu'une fois appelé, si on ne l'appelle pas,
alors ce qu'elle contient ne s'effectuera jamais.*/
salut();
// Il existe d'autres facons de déclarer une fonction.
const salut2 = function(){
    /* On peut ranger une fonction dans une variable, son nom sera alors celui
    de la variable, on ne met pas de nom après le mot function */
    console.log("Salut tout le monde !");
}
salut2();
// Ici on utilise une fonction fléché.
const salut3 = ()=>{
    console.log("Coucou tout le monde !");
}
salut3();
// Je peux aussi avoir des fonctions rangé dans des objets
const s = {
    salut: ()=>console.log("Salutation tout le monde")
};
s.salut();
// On peut aussi ranger des fonctions dans un tableau, même si c'est peu utilisé
let arr= [function(){console.log("test")}]
arr[0]()