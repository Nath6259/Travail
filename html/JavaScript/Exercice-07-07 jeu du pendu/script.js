"use strict";

var document;
var letters = "abcdefghijklmnopqrstuvwxyz";
var lettersarray = Array.from(letters);
var letterscontainer = document.querySelector(".letters");
lettersarray.forEach(function (letter) {
    var span = document.createElement("span");
    var theletter = document.createTextNode(letter);
    span.appendChild(theletter);
    span.className = 'letter-box';
    letterscontainer.appendChild(span);
});

var words = {
    Programmation: ["php", "javascript", "go", "scale", "fortran", "r", "mysql", "python"],
    Films: ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento", "coco", "up"],
    Personnalité: ["albert einstein", "hitchcok", "alexander", "cleoppatra", "mahatma ghandi"],
    Pays: ["syrie", "palestine", "yemen", "egypte", "france", "qatar", "allemagne", "russie", "chine", "japon", "bresil", "argentine", "etats unis", "suisse", "roumanie", "italie",
    "espagne"],
    jeux_video: ["overwatch","darksouls", "god of war", "uncharted", "infamous"]
};
var allkeys = Object.keys(words);
var randompropnumber = Math.floor(Math.random() * allkeys.length);
var randompropname = allkeys[randompropnumber];
var randompropvalue = words[randompropname];
var randomvaluenumber = Math.floor(Math.random() * randompropvalue.length);
var randomvaluevalue = randompropvalue[randomvaluenumber];
document.querySelector(".gameinfo .category span ").innerHTML = randompropname;
var lettersguesscontainer = document.querySelector(".lettersguess");
var lettersandspace = Array.from(randomvaluevalue);
lettersandspace.forEach(function (letter) {
    var emptyspan = document.createElement("span");
    if (letter === ' ') {
        emptyspan.className = 'with-space';
    }
    lettersguesscontainer.appendChild(emptyspan);
});
var guessspans = document.querySelectorAll(".lettersguess span");
var wrongatempts = 0;
var error = document.querySelector(".error-left");

document.addEventListener("click",  function (e) {
    var thestates = true;
    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
        var theclickedletter = e.target.innerHTML.toLowerCase();
        var thechosenword = Array.from(randomvaluevalue.toLowerCase());
        
        lettersandspace.forEach(function (wordletter, wordindex) {
            if (theclickedletter === wordletter) {
                thestates = false;
                guessspans.forEach(function (span, spanindex) {
                    if (wordindex === spanindex) {
                        span.innerHTML = theclickedletter;
                    }
                });
                
            }
        });
        if (thestates !== false) {
            wrongatempts++;
            error.classList.add('wrong-' + wrongatempts);
            if (wrongatempts === 7) {
                endgame();
                letterscontainer.classList.add(".finished");
            }
        }
    }

});
function endgame() {
    var div = document.createElement("div");
    var divtext = document.createTextNode('Dommage, le mot été ' + randomvaluevalue);
    div.appendChild(divtext);
    div.className = 'popup';
    document.body.appendChild(div);
}