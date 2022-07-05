"use strict";
// Selectionne des éléments par leurs noms de balise.
const li = document.getElementsByTagName("li");
// retourne un objet contenant tous les éléments trouvés.
console.log(li);
li[0].textContent = "Marbre";

// Selectionne des éléments par un nom de classe.
const p = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
// Même si on a qu'un seul élément, on aura un objet contenant cet élément.
console.log(p, p1);
// p1.textContent ne fonctionne pas, il faudra bien faire p1[0].textContent.

// Selectionne directement l'élément qui possède cet id
const h1 = document.getElementById("mainTitle");
// Ici pas de HTMLCollection, il n'y a qu'un élément, on obtient donc directement celui ci
console.log(h1);

/* les querySelector prennent en argument n'importe quel selecteur CSS
Il rendra le premier élément qui correspond à ce selecteur */

const p2 = document.querySelector(".marche2");
// Les deux suivants rendrons le même élément que le précédent.
// const p2 = document.querySelector("main > p:nth-of-type(2)");
// const p2 = document.querySelector("main p.marche2.step");
// Celui ci rendra le premier p
// const p2 = document.querySelector(".step");
console.log(p2);

/* Fonctionne comme le querySelector mais rend un objet "NodeList" contenant tous 
    les éléments correspondant*/
const li2 = document.querySelectorAll("footer li");
// ! Attention certaines fonctions qui pourraient marcher sur NodeList pourrais ne pas fonctionner sur HTMLCollection.
console.log(li2);

const header = document.querySelector('header');
// On peut selectionner unélément html à l'intérieur d'un autre plutôt que dans tout le document.
const h = header.querySelector('h1');
console.log(h);

// Récupère l'élément frère suivant mon header (ici main)
console.log(header.nextElementSibling);
// Récupère le frère suivant peu importe si c'est un élément en html ou non. (ici un "\n")
console.log(header.nextSibling);
// pareil mais pour le précédent.
console.log(li2[2].previousElementSibling);
console.log(li2[2].previousSibling);
// Récupère l'élément html parent.
console.log(header.parentElement);
// Selectionne le parent le plus proche qui correspond à mon selecteur css.
console.log(li2[0].closest("footer"));
// Donne la liste des éléments html enfant.
console.log(header.children);
// Je retire l'élément selectonné de notre page.
// h.remove();
// Retire l'élément selectionné qui se trouve dans ce parent.
// header.removeChild(h);