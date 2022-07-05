"use strict";

const   indicator = document.querySelector('.scroll-indicator'),
        main  = document.querySelector('main'),
        options ={
            /* l'option root permet de changer le scrolling observé.
            par défaut c'est celui du document, mais si on a ajouté un scrolling
            sur un élément html, on pourrait faire nos observation par rapport à celui ci
             */
            // root: main
            /* 
            rootMargin permet d'étendre ou réduire la zone de détection.
            avec un nombre positif, la détection sera hors de l'écran.
            avec un nombre négatif, elle se fera dans une zone réduite de l'écran.
            Que ce soit pour l'entré ou la sortie de l'élément.
            */
            // rootMargin: "-200px"
            /* 
            threshold indique via un chiffre entre 0 et 1, combien de pourcentage
            de l'élément doit être visible pour lancer l'evènement.
            */
            // threshold: 0.15
        },
    /* L'intersection Oberserver est un objet qui prend une fonction 
    callback lors de sa création. */
        observer= new IntersectionObserver(setIndicator, options);
/* L'intersection observer a besoin qu'on lui indique
ce qu'il doit observer.
Ici on utilise sa variable.observe(la cible à observer) */
observer.observe(main);
// On peut observer autant d'élémnent qu'on le souhaite
// par exemple avec un querySelectorAll et un foreach.
function setIndicator(entries){
    /* 
    La fonction donné en callback sera lancé à chaque fois
    qu'un élément observé, entre ou sort de l'écran. */
    let entry = entries[0];
    console.log(entry);
    /* 
    On trouvera dans cet objet tout un tas d'information utile :
    target => pareil qu'avec les évènements, c'est la cible qui a été intersecté
    *         (qui est entré dans le viewport)
    isIntersecting => un boolean qui indique si l'élément est dans le viewport ou non
    intersectionRatio => un chiffre entre 0 et 1, qui indique à quel point l'élément est visible
    boundingClientRect => Position et taille de notre élément.
    intersectionRect => Position et taille VISIBLE de notre element.
    rootBounds => position et taille de l'élément racine (par défaut viewport) */
    if(entry.isIntersecting){
        window.addEventListener("scroll", indicatorAnimation);
    }else{
        // Pour alleger mon site, je coupe mon évènement quand je n'ai pas besoin.
        window.removeEventListener("scroll", indicatorAnimation);
    }
}
function indicatorAnimation(){
    // scrollY représente combien de pixel on a scrool.
    // offsetTop représente la position par rapport au top de notre élément.
    if(window.scrollY > main.offsetTop){
        // scrollHeight représente la hauteur de l'élément incluant le padding vertical
        // .toFixed retourne un string correspondant à notre nombre avec "n" chiffres
        // après la virgule.
        const prc = ((window.scrollY - main.offsetTop)/main.scrollHeight).toFixed(2);
        // On obtient un chiffre entre 0 et 1 représentant le pourcentage de scroll
        // sur notre main.
        // console.log(prc);
        indicator.style.transform = `scaleX(${prc})`;
    }else{
        indicator.style.transform = "scaleX(0)";
    }
}
/* 
On peut arrêter l'observation d'un élément avec :
variableObserver.unobserver(élémént observé);
ici ca donnerait :
oberver.unobserve(main);

On peut arrêter toute observation de notre observer avec:
variableObserver.disconnect()
ici:
observer.disconnect();

Chaque observer étant lié à une fonction, si on veut lancer des observations
au fonctionnement totalement différent, il vaudra mieux créer un nouvel observer.*/