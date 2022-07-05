"use strict";

const dark = document.querySelector('#darkTheme');

dark.addEventListener("input", changeTheme2);

function changeTheme2(){
//     Si notre checkbox est coché on ajoute le thème dark, sinon on lui retire.
    document.body.classList.toggle("dark", dark.checked);
}
// changeTheme();

function changeTheme2(){
    if(dark.checked){
    localStorage.setItem("theme", "dark");
    document.documentElement.style.setProperty("--fond", "#333");
    document.documentElement.style.setProperty("--text", "antiquewhite");
}
else{
    localStorage.setItem("theme", "light")
    document.documentElement.style.setProperty("--fond", "antiquewhite");
    document.documentElement.style.setProperty("--text", "#333" );
}

//     document.documentElement.style.setProperty("--fond", randColor());
//     document.documentElement.style.setProperty("--text", randColor());
}
changeTheme2();
function loadTheme(){
    let theme = localStorage.getItem("theme");
    if(theme === "dark"){
        
    }
}
function randColor(){
    let rgb = [];
    for(let i = 0; i<3; i++){
        let c = Math.floor(Math.random()*256);
        rgb.push(c);
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

/* session et local storage permettent de sauvegarder des informations dans le navigateur
de l'utilisateur.
session se supprimera automatiquement, à la fermeture du navigateur (voir de l'onglet)
Alors que local devra être supprimé manuellement.
Ceux ci sont accessible uniquement depuis le site qui l'utilise (normalement)
!ATTENTION localStorage ne fonctionne peu ou pas si on se contente d'ouvrir le fichier
! il faudra utiliser un serveur local. 
les deux utilisent les mêmes fonctions(méthodes) et propriétés.
setItem permet de sauvegarder ou modifier une information.
Le premier paramètre est son index (son nom) et le second sa valeur.
Toutes les informations seront stocké sous forme de string */
sessionStorage.setItem("Salutation", "Bonjour tous le monde !");
localStorage.setItem("Salutation", "Bonjour tous le monde !");

// Pour récupérer une information, on utilisera .getItem() en lui donnant en paramètre
// l'index (le nom) que l'on veut récupérer.
console.log(localStorage.getItem("salutation"));
// Pour en supprimer un, il suffit de lui donner son index en paramètre de removeItem;
localStorage.removeItem("salutation");

// .clear() videra tous le stockage.
// localStorage.clear();

// console.log(sessionStorage.key(0));
for(let i = 0; i<sessionStorage.length; i++){
    let index = sessionStorage.key(i);
    console.log(index, "->", sessionStorage.getItem(index));
}