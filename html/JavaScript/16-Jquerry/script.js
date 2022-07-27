"use strict";
/**
 * Jquery fut créé en 2006 par John Resig
 * Il est représenté par la ^hrase "Faire plus en écrivant moins".
 * 
 * toute la documentation est dispo ici:
 * https://jquery.com
 * 
 * Il existe aussi des variantes comme Jquery UI qui apporte plus de fonctionnalité
 * adapté à la création d'interface utilisateur.
 * 
 * Cela reste une bibliothèque JS, on ne change pas de langage, donc tout ce qui est
 * faisable en JS, est faisable avec Jquery.
 * 
 * Attention, seulement certains objets Jquery peuvent différer des objets JS vanilla
 * Et donc ne pas avoir les mêmes méthodes.
 */
/**
 * $("") sert à la fois de querySelector et à la fois de createElement.
 * $("div") selectionnera toute les divs.
 * $("<div>") créera une nouvelle div.
 */
const btnSlide = $("#slide");
// $("") nous retourne un tableau d'élément html. même si il y en a qu'un
console.log(btnSlide[0]);

/* 
.on() remplace avec Jquery le addEventListener()
il y a aussi des versions raccourci comme .click(fonction)
btnSlide.click(slideTitle);
*/
btnSlide.on("click", slideTitle)

function slideTitle(){
    /* 
    Certains effets classqiue utilisé en CSS comme fade, slide ou hide ont
    implémenté de base dans Jquery, avec des méthodes comme slideIn, slideOut,
    slideToggle.
    Pzr exemple ici je peux lui donner une durée et une fonction à faire une fois
    terminé
    */
   $("h1").slideToggle(1000, function(){
    /* 
    Pour accèder aux propriétés css avec Jquery, on peut tout simplement utiliser
    la méthode .css() à laquelle si on ne donne qu'un argument, elle nous rend
    la valeur correspondante.
    Si on lui en donne 2, elle changera la propriété.
    .css("background-color") retourne la couleur de mon élément en (en rgb())
    .css("background-color", "red") change la couleur de l'élément en rouge.
    */
   let color = btnSlide.css("background-color")==="rgb(255, 0, 0)"? "green": "red";
   btnSlide.css("background-color", color);
   })
}
$("#fade").click(fadeSpan);
function fadeSpan(){
    /* 
    Peu importe si je selectionne un ou plusieurs éléments (ici il y deux span)
    la plupart des méthodes Jquery sont faite pour être effective sur
    plusieurs éléments à la fois.
    */
   $("h1 span").fadeToggle();
}
/* 
.hover() est l'équivalent de .on ("mouseenter", callback1);
mais la méthode .hover() me permet au choix un ou deux callback.
Si le premier est bien l'équivalent de "mouseleave" 
on notera aussi que comme pour le fadToggle, nos évènements
peuvent être ajouté à plusieurs éléments html en même temps.
*/
$("h1 span").hover(callback1, callback2);

function callback1(){
    // La facon la plus classique de récupérer la cible d'un évènement avec Jquery est :
    $(this).css("font-size", "4rem");
}
function callback2(){
    $(this).css("font-size", "");
}
$("document").ready(function(){
    /**
     * Un classique de Jquery, est d'utiliser cet évènement pour coder toute la logique
     * à l'interieur. il se déclenchera une fois le document entièrement chargé.
     * Cela permet entre autre de remplacer l'attribut defer avant qu'il n'existe.
     */
    $("h1").dblclick(function(){
        // je cache mon titre au double clique dessus.
        $(this).hide();
    })
    $("#load").click(function(){
        $("ol").hide(200);
        // Ajax est le fecth de Jquery
        $.ajax("liste.json")
            // .done() est lancé en cas de requête réussite
            .done(data=>{
                /* Jquery traite automatiquement les données récupéré
                si elles sont de type text, html, ou json. */
                console.log(data);
                data.forEach(d=>{
                    /* 
                    Pour chaque donné de mon json,
                    je crée un li, je lui ajoute la donnée
                    et j'ajoute mon li à mon ol
                    Attention .appendTo c'est du Jquery
                    .append c'est du JS
                    et pour les deux, le conteneur et l'élément ajouté échangent
                    leur place.
                    conteneur.append(element)
                    element.appendTo(conteneur) */
                    $("<li>").text(d).appendTo($("ol"))
                })
                $("ol").show(500);
            })
            // .fail() est lancé en cas d'échec de la requête
            .fail(err=>console.log(err))
            // .always() toujours lancé, une fois la requête terminé.
            .always(()=>console.log("Requête terminé"))
    })
    /**
     * ! Attention lorsque vous utilisez des bibliothèques, parfois vos méthodes
     * ! peuvent partager un même nom.
     */
    $("#anime").click(function(){
        $(this).css("position", "absolute");
        // .animate() de Jquery, n'est pas le même que le .animate()de JS
        $(this).animate({
            with: "50vw",
            height: "5rem",
            top: "+=50px",
            left: "-=50px"
        }, 1000);
    })
})