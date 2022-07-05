"use strict";
// -----------DOM-----------
// Document Objet Model
const h = document.createElement("header");
/* je fais appelle à la méthode (fonction) createElement de l'objet document
Celle ci prendra le nom d'une balise html en argument. */
console.log(h);
/* On obtien un objet "balise header" qui contient énormément de propriété et méthode
Celles ci sont accessible de la même façon que n'importe quel objet js. */
const m = document.createElement("main");
const f = document.createElement("footer");
h.innerHTML = "<h1>Super site en JS</h1>";
// Sans utiliser create Element, on a modifié le HTML de notre header avec innerHTML
console.log(h);
f.innerHTML = "<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>";
console.log(f);

for(let i = 0; i<5; i++){
    // à chaque itération de notre boucle, on crée un nouveau p 
    const p = document.createElement("p");
    // On lui ajoute notre texte
    p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque totam vel unde, beatae aperiam accusamus optio provident assumenda maxime perspiciatis, facilis incidunt aut repellat quibusdam natus officia velit delectus.";
    m.appendChild(p);
}
console.log(m);
console.log(document.body);
if(document.body){
    document.body.append(h,m,f);
}