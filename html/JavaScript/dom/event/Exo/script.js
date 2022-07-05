"use strict";

// --------------- EXO 1 -----------------
/* 
Faire que lors de la selection d'une couleur dans la div 2
le texte du bouton change de couleur,
et lors de l'appuie sur le bouton,
le background de la div change de couleur.
*/

function test(f){
    console.log(f);
}

const div2 = document.querySelector('.div2 button');
const div5 = document.querySelector('.div2');
const input = document.querySelector('.div2 input');
div2.style.color = input

div2.onclick = ()=> (div5.style.backgroundColor = input.value)
input.addEventListener ("input", ()=> (div2.style.color = input.value));


// --------------- EXO 2 -------------------
/* Lors du clique sur le bouton de la div 3,
faire apparaître une modale (soit déja crée en html/ soit que l'on crée en js)
Cette modale doit contenir un élément permettant de la faire disparaître.
*/

// constante pour réponse 2 et 3
const m2 = document.querySelector('.m2');
const m2btn = m2.querySelector('button:last-of-type');
// réponse 2:
function modal2(){
    m2.classList.toggle("hidden");
}

// réponse 3:
b3.addEventListener("click", ()=>m2.style.display = "grid");
m2btn.addEventListener("click", ()=>m2.style.display = "none");
// ------------------ EXO 3 -----------------------------
/* Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
Puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
const liste = document.querySelectorall('nav li');
function double (e){
    let li = f.target;
    if(li.style.transform == "scale(2)"){
        li.style.transform = "scale(1)";
    }
    else{
        li.style.transform = "scale(2)";
    }
}
liste.forEach(l=>l.addEventListener ("click", double));

// ------------------ EXO 4 ------------------------------
/* 
Utilise les évènements "mouseover" et "mousemove" pour
faire que lorsque l'on passe sur le span d footer, il commence à suivre la souris
et cela jusqu'à */













