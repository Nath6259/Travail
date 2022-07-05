"use strict";

const form = document.querySelector('form');

form.addEventListener("submit", saveData);

function saveData(e){
    // J'empêche mon formulaire de recharger la page
    e.preventDefault();
    // Je transfère les données de mon formulaire à l'objet FormData
    const data = new FormData(form);
    // Je déclare un objet vide
    let user = {};
    // Je boucle sur mon FormData pour obtenir toute les valeurs et indexation.
    data.forEach((value, name)=>{
        // J'ajoute ces valeurs en tant que propriété
        user[name] = value;
    })
    // J'obtient un objet contenant toute les valeurs de mon formulaire.
    showUser(user);
    const strUser = JSON.stringify(user)
    localStorage.setItem("user", strUser);
}

function showUser(u){
    const h1 = document.querySelector('h1');
    h1.textContent = `Je suis ${u.prenom}, ${u.age} ans !`
}

const userString = localStorage.getItem("user");
if(userString){
    console.log(userString);
    const user = JSON.parse(userString);
    console.log(user);
    showUser(user);
}