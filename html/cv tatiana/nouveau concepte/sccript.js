"use strict";
//------------------ partie d'accueil------------------------
const title = document.querySelectorAll('main span');

for(let i=0; i<title.length; i++){
    setTimeout (()=>title[i].style.opacity ="1", 400*(1+i));
}

// --------------------------partie personnelle------------------

// --------------------------competence--------------------------
const comp = document.querySelector('article.comp');

// ---------------------------expérience--------------------------
const exp = document.querySelectorAll('article.event');
const obsexp=  new IntersectionObserver (showpara, {threshold: 0.3});

exp.forEach(a=> obsexp.observe(a));

function showpara(entries) {
    entries.forEach(reveal)
}
function reveal (entry){
    if(entry.isIntersecting){
        entry.target.classList.add("fadeInUp")
        obsexp.unobserve(entry.target);
    }
}
