"use strict";

const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');

// Crée un objet date qui contient la date et l'heure du moment de sa création
let date = new Date();
// getFullYear nous rend l'année
console.log(date);
copyright.textContent = date.getFullYear();
// toLocaleTimeString nous rend l'heure, les minutes et les secondes en un string.
mainTime.textContent = date.toLocaleTimeString();

function timer() {
    // console.log("yo");
    const dateTimer = new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();
}
/* setInterval relance une fonction donné en premier paramètre au rythme donné 
en second paramètre (en ms) */
let idInterval = setInterval(timer, 1000);
// Je range l'identifiant de mon interval dans une variable.

function stop(){
    clearInterval(idInterval);
}
mainBtn.addEventListener("click", stop);

// setTimeout effectue la fonction donné en premier argument au bout du temps donné
// en second argument (en ms);
let idTimeout = setTimeout(()=>console.log("Coucou en retard !"),3000);
// Comme avec l'interval, on peut récupérer l'identifiant du timeout et l'arrêter avant son execution.
clearTimeout(idTimeout);

const progress = document.querySelector('.progress');
let w = 0;
function load() {
    if(w === 100){
        return;
    }else{
        w++;
        progress.style.width = w+"%";
        setTimeout(load, 100);
    }
}
load();