"use strict";
const div = document.querySelector('.anime');
document.querySelector(".b1").addEventListener("click", Animation1);
document.querySelector(".b2").addEventListener("click", Animation2);
document.querySelector(".b3").addEventListener("click", Animation3);
document.querySelector(".b4").addEventListener("click", Animation4);
document.querySelector(".b5").addEventListener("click", Animation5);
/**
 * .animate() est une méthode de web animation API.
 * Elle prend deux arguments, le premier est une liste des keyframes que l'élément html
 * ciblé devra parcourir.
 * le second est un objet contenant les options de l'animation.
 */
function Animation1(){
    // les keyframes peuvent être un tableau d'objet dont chaque propriété est du CSS
    const keyframes =[
        {left: 0, top: 0},
        {left: "80%", top: "-200px"},
        {left: "20%", top: "500px"}
    ];
    const options = {
        duration: 2000,
        iterations: 3,
        // Indique à l'élément de rester sur la dernière étape de son animation.
        fill: "forwards",
        direction: "alternate"
    }
    div.animate(keyframes, options);
}
function Animation2(){
    /* Les keyframes peuvent aussi être un seul objet, dont chaque propriété
    à un tableau indiquant les différences étapes clef. */
    const keyframes = {
        backgroundColor: ["blue", "red", "green"],
        opacity: [1, 0, 0.5]
    }
    div.animate(keyframes, {
        duration: 2000,
        direction: "alternate",
        iterations: 2
    })
}
function Animation3(){
    /* On peut sauvegarder l'objet animation dans une variable pour accèder à 
    certaines méthodes et propriétés. */
    let anime = div.animate({
        transform: ["skew(0deg, 0deg)", "skew(360deg, 180deg)", "skew(180deg, 360deg)",]
    },{duration: 1500, direction: "alternate"})
    console.log(anime);
    anime.addEventListener("finish", ()=>{
        // l'évènement finish se déclenchera une fois l'animation terminé.
        document.querySelector(".b4").style.opacity = 1;
    })
}
let a4 = false;
function Animation4(){
    if(a4){
        // La méthode cancel va annuler toute action de l'animation.
        a4.cancel();
        a4 = false;
    }else{
        a4 = div.animate({borderRadius: ["0%", "50%", "5px", "25%"]},{
            duration: 2500,
            fill: "forwards"
        })
    }
}
/**
 * La méthode animate n'est qu'un raccourci pour l'utilisation des objets
 * KeyframeEffect et Animation
 * KeyframeEffect prend en premier argument la cible de l'animation
 *      en second les étapes clef
 */
const keyframes = new KeyframeEffect(
    div,
    [{transform: "translate(0,0)"}, {transform: "translate(100%, 50%)"}],
    {duration: 3000, fill: "forwards"}
);
/**
 * Animation prend en premier argument l'objet KeyframeEffect et en second
 * sur quel timeline il doit se baser, (généralement celle du document.)
 */
const anime5 = new Animation(keyframes, document.timeline);
async function Animation5(){
    // la propriété playState indique l'état de l'animation.
    switch(anime5.playState){
        case "idle":
            anime5.play();
            this.textContent = "Pause";
            /* La propriété finished est une promesse se réalisant quad l'animation
            est terminé */
            await anime5.finished
            this.textContent = "Reverse";
            break;
        case "paused":
            anime5.play();
            this.textContent = "Pause";
            break;
        case "finished":
            anime5.reverse();
            await anime5.finished
            this.textContent = "Start";
            // Une fois terminé, je remet l'animation dans son etat de base.
            anime5.reverse();
            anime5.cancel();
            break;
        case "running":
            anime5.pause();
            this.textContent = "Continue";
            break;
    }
}