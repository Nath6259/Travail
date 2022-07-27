"use strict";
import C from "./Carousel-v3.js";
const carousel = new C(["./images/sea.jpg", "./images/lava.jpg"]);
document.body.append(carousel.carousel);
carousel.init();
C.style();
const carousel2 = new C(["./images/pizza.jpg", "./images/space.jpg"]);
document.body.append(carousel2.carousel);
carousel2.init();
import CE from "./Carousel-v3Extend.js";
const carousel3 = new CE(["./images/sea.jpg", "./images/lava.jpg","./images/pizza.jpg", "./images/space.jpg"])
document.body.append(carousel3.carousel);
carousel3.init()