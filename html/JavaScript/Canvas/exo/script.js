"use strict";
/**
 * EXERCICE :
 * Déclarer une variable painting à false.
 * déclarer une fonction "start position" qui prend un argument.
 *      passe painting à true, et appelle une fonction draw en 
 *      lui donnant son argument.
 * déclarer une fonction  "finished position" qui passe painting à 
 *      false puis fait un beginpath();
 * déclarer une fonction "draw" qui prend un argument.
 *      si painting est faux alors on met fin à la fonction
 *      sinon on donne une largeur de trait de 10,
 *      on donne une couleur noir,
 *      on met un linecap à round.
 *      on fait un lineTo sur la position x et y de la souris
 *          que l'on aura récupéré de notre argument.
 *      on fait un stroke 
 *      On fait un begin path
 *      On fait un moveTo à la position x et y de la souris.
 * Ajoutons 3 évènements sur notre canvas,
 *      mousedown on appelle startPosition
 *      mouseup on appelle finishedPosition
 *      mousemove on appelle draw
 * ------------- BONUS -----------------
 * Permettre de changer la couleur,
 * Permettre de changer la taille,
 * Permettre le retour en arrière (annuler)
 * Permettre le retour en avant (refaire)
 * Permettre de sauvegarder :
 *      L'utilisation de .toDataURL("image/png") pourra s'avérer utile
 * Permettre le chargement d'une image,
 *      L'utilisation de new FileReader() et de readAsDataURL pourra s'avérer utile.
 */
let painting = false;
const canvas = document.querySelector('canvas');

function startPosition(e){
    painting = true;
    draw(e);
}

function finishedPosition(e){
    painting = false;
    ctx.beginPath();
}

function draw(e){
    if(painting == false){
    return draw(e)
    }else{
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = "black";
        ctx.lineCap = "round";
        ctx.lineTo(x,y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
}
mousedown = addEventListener("mousedown", startPosition);
mouseup = addEventListener("mouseup", finishedPosition);
mousemove = addEventListener("mousemove", draw);










// Optionnelle.
// color = "black", size = 10,
// undolist = [], lastAction = [], redoList = [];