const buttons = document.querySelectorAll("button");
// const resultat = document.querySelector(".resultat");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const Vous = buttons[i].innerHTML;
    const Godzicat = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat = "";
    // resultat.innerHTML = joueur + "       " + robot;
    if (Vous===Godzicat) {
      resultat = "Draw, Godzicat and you stare at each other in a confused way ";
    }
    else if ((Vous === "Pierre" && Godzicat === "Ciseaux") || (Vous === "Ciseaux" && Godzicat === "Feuilles") || (Vous === "Feuilles") && (Godzicat === "Pierre")) {
      resultat = "Victory, Godzicat has been slain !"; 
    }
    else {
      resultat = "Defeat, Fear the judgment of Godzicat !";

}
document.querySelector(".resultat").innerHTML = `
  Vous : ${Vous} </br>
  Godzicat : ${Godzicat} <br/>
  Résultat : ${resultat}
`  ;
    
});
  
  
}