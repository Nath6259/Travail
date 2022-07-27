"use strict";
/**
 * ----------------- EXO 1 -------------------------
 * Créer un objet "Game" qui contiendra un jeu de plus ou moins
 * Le jeu devra être généré entièrement par JS (pas de html)
 * Le jeu devra contenir au moins :
 *      Un input de type nombre,
 *      Un bouton pour valider,
 *      Un p pour afficher les messages du jeu.
 * Vous êtes libre de le personnaliser bien plus.
 */
const Game = {
    create: function(){
        /* Si on fait appel un à une propriété qui n'existe pas, il va la créer lui même */
        this.input = document.createElement("input");
        this.input.setAttribute("type", "number");
        this.btn = document.createElement("button");
        this.btn.textContent = "Tenter votre chance";
        this.p = document.createElement("p");
        this.p.textContent = "Choisi un nombre entre 0 et 100";
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.append(this.p, this.input, this.btn);
        /*
            Je bind mon this de l'évènement sur le this actuel.
            C'est à dire que mon évènement au lieu de rendre avec this, 
            la cible de mon évènement (le bouton)
            il me rendra l'objet (Game)
        */
        this.btn.addEventListener("click", this.check.bind(this));
        return div;
    },
    start: function(){
        this.target = Math.floor(Math.random()*100);
        this.input.focus();
    },
    check: function(){
        if(this.input.value < this.target){
            this.p.textContent = "C'est plus grand !";
        }else if(this.input.value > this.target){
            this.p.textContent = "C'est plus petit !";
        }else{
            this.p.textContent = "Félicitation, tu as gagné !"
            this.btn.disabled = true;
        }
        this.input.value = "";
        this.input.focus();
    }
}
export default Game;