"use strict";
/*
Math.random() retourne une valeur comprise entre 0 et 1
*20 pour le multiplier par 20 (on obtient une valeur entre 0 et 20)
Math.floor() arrondi à l'inférieur (on obtient un nombre entier (sans virgule))
*/
let x = Math.floor(Math.random()*20);
if(x<10){
    // On commence avec un if pour vérifier une condition.
    console.log(x+ "Est plus petit que 10");
}
else if(x>10){
    // si le if est faux, on peut mettre ou pas autant de else if qu'on veut pour
    // vérifier autant de conditions supplémentaires
    console.log(x+ "Est plus grand que 10");
}
else{
    // Et on peut accéssoirement terminer par un else pour gérer tout les cas qui
    // ne correspondent pas aux conditions précédentes.
    console.log("Il vaut 10");
}
// Une ternaire est une condition résumé en une ligne, utile dans le cas ou l'on
// a peu de conditions et peu de réponse possible:
// condition? true: false; 
let message = x<=10 ? x+"Plus petit ou égale à 10": x+"Est plus grand que 10";
console.log(message);
// Attention de ne pas allé trop loin avec les ternaires pour rester visible ici:
// condition ? true : condition? true: false
let m2 = x<10 ? x+"Est plus petit que 10": x>10? x + "Est plus grand que 10": "Il vaut 10";
console.log(message); 

// ----------------------- SWITCH ------------------------

let ville = prompt("De quel ville venez-vous?")
console.log(ville);
ville = ville??"pas de ville";
// .toLowerCase() transforme toute les lettres d'un string en minuscule
switch(ville.toLowerCase()){
    case "pas de ville":
        console.log("pourquoi tu ne veux pas repondre?");
        break;
    // switch compare ce qui est mit entre parenthèse et selectionne le cas qui
    // correspond
    case "paris":
    case "londre":
    case "tokyo":
        // si je met plusieurs cas les un après les autres,
        // Ils effecturont la même action
        console.log("De la capitale donc");
        break;
        // Le mot clef break indique ou doit s'arrêter le cas.
    case "Lille":
        console.log("Moule frite et bière");
        break;
    case "Roubaix":
        console.log("L'ancienne capital du textile");
        break;
    case "Armentière":
        console.log("Une ville pauvre mais fière");
        break;
        // Default permet de gérer ce que doit faire le switch si aucun cas ne correspond
    default:
        console.log("je ne connais pas");
}
// ----------------------- ?? ------------------

let a, b = undefined, c = null, d = "Chaussette", e = {nom:"Bruno"}, f = ["test"];
// L'opérateur ?? permet de selectionner le premier élément si il n'est pas
// null ou undefined, sinon il selectionnera le second élément.
console.log(a??"coucou");
console.log(b??"coucou");
console.log(c??"coucou");
console.log(d??"coucou");
console.log(e.nom??"coucou");
console.log(e.prenom??"coucou");
console.log(f[0]??"coucou");
console.log(f[1]??"coucou");