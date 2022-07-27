"use strict";
import P1, {Person2 as P2} from "./Person.js";
console.log(P1);
console.log(P1.name.prenom);
P1.salutation();
P1.anniversaire();

P1.name.nom = "fontaine";
console.log(P1.name.nom);
P1.nom = "martin";
console.log(P1.name.nom);
P1.prenom= "pIeRrE";
console.log(P1.name.prenom);
P1.Age = "78";
console.log(P1.age);
console.log(P1.name.prenom + " "+ P1.name.nom);
console.log(P1.fullName);
P1.salutation();
P2.salutation();