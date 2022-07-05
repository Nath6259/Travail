"use strict";

function test(e){
    console.log(e);
}
const h1 = document.querySelector('header > h1');
/* On peut ajouter un écouteur d'événement à un élément selectionné via la
méthode (fonction) addEventListener.
Le premier argument est le type de l'événement, le second est une fonction callback
On verra les arguments optionnels plus tard */
h1.addEventListener("click", test);
// On peut ajouter autant d'événement que l'on souhaite.
// On peut donner en fonction callback, une fonctionnalité défini ailleurs comme
// une fonction anonyme ou fléché.
let x = 0;
h1.addEventListener("click", function(e){
    let r = Math.floor(Math.random()*360);
    // La cible de mon évènement tourne aléatoirement.
    e.target.style.transform = `rotate(${r}deg)`;
    // Si la cible de mon évènement a des enfants. e.target peut devenir ces enfants.
    // h1.style.transform = `rotate(${r}deg)`;
    x++;
    // ma cible change de couleur au bout de 5 cliques.
    if(x==5){
        e.target.style.color = "red";
    }
});

const menu1 = document.querySelector('.menu1');
/* Un evènement peut aussi être ajouté avec on...nomDel'évènement (onclick, onload...)
Seulement étant un attribut qui prend une fonction comme valeur, si on tente d'en
ajouter plusieurs, cela remplacera les précédents. */
menu1.onclick = test;
menu1.onclick = (e)=>{
    if(e.target.style.fontSize == "2rem"){
        e.target.style.fontSize = "1rem"
    }
    else{
        e.target.style.fontSize = "2rem"
    }
};
// Une troisième facon existe pour ajouter un évènement, voir HTML
/* Pour retirer un écouteur d'évènement appliqué via addEventListener.
Il me suffit d'utiliser removeEventListener, en lui indiquant sur quel evènement cela
a lieu et quelle fonction doit être retiré.
Il est impossible de retirer un évènement placé via une fonction anonyme. */
h1.removeEventListener("click", test);
// Pour retirer un évènement onclick, il suffit de modifier l'attribut.
menu1.onclick = "";

// ------------------ input ---------------------
const div1 = document.querySelector('.div1');
const input1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');
// L'évènement input se déclenchera à la moindre modification d'un élément de formulaire
// (input, textarea, checkbox, radio...)
input1.addEventListener("input", e=>{
    console.log(e.target.value);
    if(e.target.value != ""){
    btn1.textContent = e.target.value;
    }
    else{
        btn1.textContent = "CLIQUE MOI !!!";
    }
});
// --------------------- Options ----------------------------
/* On peut ajouter des options à notre addEventListerner,
pour cela on ajoute un objet {} après la fonction:
element.addEventListener ("event", function, {option:valeur})
L'une de ces options est "once" qui si mis à "true" empêchera l'évènement
de se déclencher plus d'une fois. */
btn1.addEventListener("click", ()=>{
    h1.textContent = input1.value;
}, {once: true})

const div4 = document.querySelector('.div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');

/* Si plusieurs evènement sont déclenché par une même action,
Alors l'ordre sera défini, du parent le plus proche au plus éloigné.
Ici si je clique sur mon bouton, par défaut, ce sera en, puis pa, puis gp et enfin div4
On parle de phase de bulle (bubbling phase) */
div4.addEventListener("click", ()=>console.log("div4"), {capture: true});
gp.addEventListener("click", ()=>console.log("gp"));
pa.addEventListener("click", (e)=>{
    e.stopPropagation
    console.log("pa");
});
en.addEventListener("click", ()=>console.log("en"));
/* Avant la phase de bulle, il y a la phase de capture, celle ci normalement
n'enclenche pas les évènements, mais on peut ajouter l'option capture à true.
pour qu'elle lance les évènements à ce moment. 

La phase de bulle est ascendante, elle part de l'enfant vers les parents.
La phase de capture est descendante, elle part des parents vers les enfants.*/

const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", e=>{
    // preventDefault() bloque les évènement par défaut.
    // ici le clique sur le lien ne produit absolument rien.
    e.preventDefault();
})