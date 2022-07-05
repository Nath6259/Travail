"use strict";

// ET = && et OU = ||
// -------------------------------EXO 5.1 ------------------------------------
/* écrire un alogrithme qui demande à l'utlisateur un nombre compris entre 1 et 3
jusqu'a ce que la réponse convienne.*/

/*let x;

do{
   x = prompt("Donne moi un chiffre entre 1 et 3.");
}while(x<1 || x>3);*/

// --------------------------- Exo 5.2 -----------------------------
/* Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu'a ce que la réponse convienne,
en cas de réponse supérieur à 20, on ferra apparaître un message "Plus petit !" et inversement "Plus grand !" si inférieur à 10.*/

/*let y, m = "Donne moi un chiffre entre 10 et 20."

do{
    y = prompt(m);
    m = y<10? "Plus grand !" : "Plus petit !";
    /* équivalent à 
    if(y<10){
        m = "Plus grand !"
    }
    else {
        m = "Plus petit !"
    }
    /
}while(y<10 || y>20); */

// -------------------------------- EXO 5.3 ------------------------------
/* Demander un nombre à l'utilisateur, puis afficher les dix nombres suivants. */

/*let z = parseInt(prompt("Donne moi un nombre et je te répondrais les dix suivants."))

for(let i = z+1; i<=z+10; i++){
    console.log(i);
}
*/

// --------------------------------- EXO 5.4 ---------------------------------
/* Ecrire un algorithme qui demande un nombre puis écrit la table de multiplication de ce nombre.*/

/*let w =  prompt("Donne moi le nombre dont tu veux voir la table de multiplication.")

for(let i =1; i<10; i++){
    console.log(`${w} * ${i} = ${w*i}`);
}*/

// -------------------------------- EXO 5.6 (5.5) ---------------------------------

/* Ecrire un algorithme qui demande un nombre puis calcul la factoriel de ce nombre
(le 5.5 demande la même chose mais avec des additions plutôt que des multiplications) */

/*let v = prompt("Donne moi un nombre !"), total = 1;
for(let i = 1; i<=v; i++){
    total *= i; // total = total *i;
}
console.log("La factoriel de "+v+" vaut "+ total);*/
/*
total == 1;
i == 1;
première boucle:
total = 1*1;
seconde boucle:
total = 1*2
troisième boucle:
total = 2*3
quatrième boucle:
total = 6*4
cinquième boucle:
total = 24*5
i == 6 donc étant 
*/


// -------------------------------- EXO 5.7 --------------------------------------------

/*let nb, max, pos;
for(let i = 1; i<=5; i++){
    nb = parseInt(prompt("Donne moi un fichu nombre !"))
    if (i==1 || max<nb){
        max = nb;
        pos = i;
    }
}
console.log(`Le nombre le plus grand est ${max} et a été donné à la saisie numero ${pos}`);*/

// ------------------------------- EXO 5.8 -----------------------------------------------

/*let nb, max, pos;
let i =1 ;
do{
    nb = parseInt(prompt("Donne moi un fichu nombre !"));
    if (i==1 || max<nb){
        max = nb;
        pos = i;
    }
    i++;
}while(nb != 0)
console.log(`Le nombre le plus grand est ${max} et a été donné à la saisie numero ${pos}`);*/

// -------------------------------- EXO 5.9 ------------------------------------------------

/* Lire la suite des prix (en euro entier) des achats d'un client */

