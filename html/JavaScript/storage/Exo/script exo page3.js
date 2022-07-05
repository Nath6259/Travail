"use strict";
/** 
*1.Ajouter un bouton qui permettra de choisir entre 3 thèmes.
*2.Appliquer ce thème grâce a Javascript (Pas besoin de faire un thème compliqué)
*3.Faire en sorte que le choix de l'utilisateur soit toujours appliqué quand il change 
*de page. 
*/

const select = document.querySelector('#themes');

select.addEventListener("input", switchTheme);

function switchTheme(){
    switch(select.value){
        case "rose":
            document.documentElement.style.setProperty("--fond", "pink");
            document.documentElement.style.setProperty("--text", "purple");
            break;
        case "bleu":
            document.documentElement.style.setProperty("--fond", "cyan");
            document.documentElement.style.setProperty("--text", "blue");
            break;
        case "tortue":
            document.documentElement.style.setProperty("--fond", "greenyellow");
            document.documentElement.style.setProperty("--text", "green");
            break;
    }
    localStorage.setItem("theme", select.value);
}
function loadTheme(){
    let t = localStorage.getItem("theme");
    if(t){
        let option = select.querySelector(`[value="${t}"]`);
        if (option){
            option.selected= true;
            switchTheme();
        }
    }
}
loadTheme();