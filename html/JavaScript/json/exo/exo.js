"use strict"

/*
 * 1. Créer une todo list. A chaque appui sur le bouton ajout, créer un nouvel élément dans la liste
 * Cet élément doit contenir la valeur de l'input et une croix
 * On en profitera pour vider l'input.
 * 2. Le clic sur un élément de la liste lui ajoutera une classe qui aura pour effet de barrer l'élément.
 * 3. Le clic sur la croix supprimera l'élément concerné.
 * 4  sauvegarder le ficher en localstorage.
 * 5. afficher la liste sauvegardé au chargement de la page.
 * 6. éditer la liste lorsque l'on coche ou supprime un élément.
 */

let todo = document.querySelector('#todo'),
ul = document.createElement('ul');
const add = document.querySelector('#add');


add.addEventListener("click", subTask) 

function subTask(e) {
    e.preventDefault(); 
    let li = document.createElement('li')
    li.textContent=todo.value;
    li.classList.add('task')
    li.style.display = "block";
    let span = document.createElement ('span')
    span.textContent='x'
    span.style.display="inline-block"
    ul.append(li);
    li.append(span)
    document.body.append(ul);  
    console.log(span); 
    span.addEventListener("click", ()=>{li.style.display = "none";})
    li.addEventListener("click", ()=> li.style.textDecoration = "line-through")
    todo.value=""
    }



