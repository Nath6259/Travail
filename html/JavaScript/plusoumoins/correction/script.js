"use strict";
/*
-------------------- étape 0 -----------------
Faire un jolie html et css pour notre jeu 
(soyez imaginatif, vous n'êtes pas obligé de suivre mon design)
-------------------- étape 1 -----------------
faire un jeu de plus ou moins.
générer un nombre aléatoire entre 1 et 100.
Afficher un message indiquant les règles du jeu.
(optionnelle : la logique du jeu de base peut être fait dans la console avec un prompt)
-----------------étape 1.5 ----------------
le joueur peut rentrer un nombre dans l'input.
en appuyant sur entrée (event keydown)
ou en cliquant sur le bouton
on va changer le texte de la page pour indiquer si le joueur a donné un 
nombre inferieur, superrieur ou si il a gagné.
------------------- étape 2 -----------------------
Afficher un message d'erreur si le joueur met autre chose que des nombres
dans l'input.
de même si le joueur rentre une valeur inferieur à 1 ou supperieur à 100.
------------------- étape 3 -----------------------
On doit pouvoir limiter le nombre d'essai du joueur à 7 par exemple.
Si au bout du 7ème tour le joueur ne trouve pas, on va lui révéler 
le nombre et indiquer un message de défaite.
------------------- étape 4 -------------------------
lorsque la partie est terminé, on va désactiver le bouton et l'input
(tester l'attribut disabled sur ces éléments à true ou false)
------------------- étape 5 ---------------------------
Lorsque le joueur termine de jouer, (défaite ou victoire)
On va faire apparaître un bouton lui permettant de recommencer.
il faudra un nouveau nombre et réactiver notre bouton et input.
------------------- étape 6 ----------------------------
faire que la révélation du nombre et du bouton se fasse avec 
une carte qui se retourne.
*/

let number, turn;
const max = 7,
badShadow = "1px 1px 5px red ,-1px -1px 5px red",
goodShadow = "1px 1px 5px green ,-1px -1px 5px green",
restart = document.querySelector(".card .front button"),
answer = document.querySelector(".card .front span"),
card = document.querySelector(".card"),
messageP = document.querySelector(".message"),
guess = document.querySelector(".gameZone input"),
submit = document.querySelector(".gameZone button");
function start(){
    turn = 0;
    answer.textContent = "?";
    // Je choisi un nombre entre 1 et 100.
    number = Math.ceil(Math.random()*100);
    // Je retire les possibles ombres ajouté précédement
    messageP.style.textShadow ="";
    messageP.textContent = `Veuillez choisir un nombre entre 1 et 100, vous avez ${max} essais`;
    // Je retire une possible class "reveal"
    card.classList.remove("reveal");
    // Je met les attributs disabled false
    guess.disabled = false;
    submit.disabled = false;
    guess.focus();
}
function endOfGame(win){
    // win doit être un boolean.
    if(win){
        messageP.textContent = `Bien joué ! vous avez trouvé en ${turn} tours.`;
        messageP.style.textShadow = goodShadow; 
    }
    else{
        messageP.textContent = `C'est perdu ! les ${max} tours sont écoulés.`;
        messageP.style.textShadow = badShadow;
    }
    // J'affiche la réponse
    answer.textContent = number;
    card.classList.add("reveal");
    // Je bloque mon bouton et mon input
    guess.disabled = true;
    submit.disabled = true;
}
function check(){
    // Je récupère le nombre rentré par l'utilisateur
    let nb = parseInt(guess.value);
    messageP.style.textShadow = badShadow;
    if(isNaN(nb)){
        messageP.textContent = "J'ai demandé un nombre !";
        return;
    }
    else if(nb<1 || nb>100){
        messageP.textContent = "J'ai dit entre 1 et 100 !";
        return;
    }
    turn++
    messageP.style.textShadow = "";
    if(nb === number){
        endOfGame(true);
    }
    else if(turn === max){
        endOfGame(false);
    }
    else if(nb < number){
        messageP.textContent = `C'est plus grand que ${nb}!`;
    }
    else{
        messageP.textContent = `C'est plus petit que ${nb} !`;
    }
    guess.value = "";
}
start();

restart.addEventListener("click", start);
submit.addEventListener("click", check);
guess.addEventListener("keyup", (e)=>{
    if(e.key == "Enter"){ check()}
});