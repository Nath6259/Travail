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