"use strict";
import C from "./Carousel-v2.js";

const carousel = C.create(["./images/sea.jpg", "./images/lava.jpg"]);
document.body.append(carousel);
C.style();
C.init();
/**
 * Mais avec cette solution, il est difficile de générer un second carousel.
 * les deux vont entrer en conflit l'un avec l'autre.
 * Ce qui va nous ammener à la suite, les classes !
 */
// const carousel2 = C.create(["./images/space.jpg", "./images/pizza.jpg"])
// document.body.append(carousel2);
// C.init();