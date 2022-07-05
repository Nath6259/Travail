"use strict";
const h1 = document.querySelector('#mainTitle');
console.log(h1);

/*  nos éléments html possèdent une propriété style qui permet de modifier leurs css.
Ce css ajouté par JS deviendra du css inline (dans la balise de l'élément)
Pour selectionner une propriété css, il suffit de faire suivre le .style par 
le nom de la propriété css.
! ATTENTION, les propriétés css s'écrivant avec "-" sont remplacé par une version 
! camelcase : background-color devient backgroundColor */
h1.style.backgroundColor = "rgb(123,45,98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3)";
h1.style.fontSize = "5rem";

// Si on se trompe sur le nom de la propriété, aucune erreur n'est envoyé.
h1.style.couleur = "red"; // mais évidement, ca ne fonctionne pas.
// De même si la valeur est fausse.
h1.style.color = "rgbaa(255,255,255,0.8)";

// ---------------------------- les classes ----------------------------------------------
// l'attribut classList contient un tableau représentant toute les classes de mon élément.
console.log(h1.classList);
// classList.add() permet l'ajout d'une classe
h1.classList.add("banane");
// classList.remove() permet de retirer une classe
h1.classList.remove("banane");
// classList.toggle() ajout ou supprime la classe selon si l'élément la possède ou non.
h1.classList.toggle("banane");
// classList.contains() retourne true si l'élément possède la classe, sinon false.
console.log(h1.classList.contains("banane"));
h1.classList.toggle("banane");
//----------------------- les autres attribut --------------------------------
console.log(h1.id);
// h1.id = h1.id+"2";
h1.id +="2";

console.log(h1.getAttribute("id"));

const a = document.querySelector('footer ul li a');
console.log(a);
// setAttribute permet d'ajouter ou modifier un attribut de notre élément html.
// Le premier paramètre est le nom de l'attribut. le second sa valeur.
a.setAttribute("target", "_blank");
// getAttribute permet de récupérer la valeur d'un attribut donné en paramètre.
console.log(a.getAttribute("href"));
/* Cela dit pour la majorité des attributs, ils sont tout simplement modifiable
ou récupérable en appelant directement leurs noms :*/
console.log(a.href, a.target);

// On peut selectionner, modifier ou créer des data-attribute via .dataset
// On récupère sa valeur avec .dataset.nomDuDataAttribute
// par exemple je veux récupérer data-truc je devrais taper .dataset.truc
console.log(a.dataset.color);
a.dataset.color ="ca ne marche pas avec les couleurs";
// Modifier un élément qui n'existe pas l'ajoutera simplement.
a.dataset.bidule ="Coucou, je ne sert à rien !";