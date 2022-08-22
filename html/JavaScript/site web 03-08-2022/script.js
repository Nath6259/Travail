"use strict";
import CE from "./Carousel-v3Extend.js";
const carousel3 = new CE(["./images/immobilier1.jpg", "./images/immobilier2.jpg","./images/immobilier3.jpg"])
document.body.prepend(carousel3.carousel);
carousel3.init()
CE.style();