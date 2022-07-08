"use strict";
/**
 * à partir du code suivant,
 * faire que lorsque que l'on clique sur un lien de la navigation
 * le changement de page ne se fasse pas,
 * que l'adresse de la page change,
 * que l'on charge des données différentes dans le main.
 */
const main = document.querySelector('main');
const liens = document.querySelector('a');

// liens.foreach(a=>addEventListener("click", router));
for(let i = 0; i<liens.length; i++){
    liens[i].addEventListener("click", router);
}
//  Je fais la liste de mes routes avec en clef la route voulu
// et en valeur la route réelle.
const routes = {
    "/":"pages/home.html",
    "/index.html":"pages/home.html",
    "/contact":"pages/contact.html",
    "/about":"pages/about.html",
    404: "pages/404.html"
};
function router(e) {
    // Je previens l'activation du lien.
    e.preventDefault();
    // Je change le lien de ma page par celui du href de mon a.
    window.history.pushState({},"",e.target.href);
    // Je charge la page correspondante.
    loadPage();
}
function loadPage(){
    // Je récupère le chemin de la page.
    const path = window.location.pathname;
    // Je récupère le chemin qui correspond dans ma liste.
    const route = routes[path] || routes[404];
    // console.log(route);
    // Je fetch ma route.
    fetch(route).then(resp =>{
        if(resp.ok){
            // Je récupère les données textuelles.
            resp.text().then(data=>{
                // je les affiches dans mon html.
                main.innerHTML = data
            })
        }
    })
}
console.log(window.history);
// window.history.pushState({},"","/")
loadPage();