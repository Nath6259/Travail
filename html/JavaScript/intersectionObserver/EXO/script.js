"use strict";
/*
-------------------------- EXO 1 ---------------------------- 
1. Rendre tous les paragraphes du main, invisible.
2. Ajouter Une observation sur chaque paragraphes.
3. Lorsque l'élément est au moins à moitié dans le wiewport, le rendre visible.
4. Désactiver la détection de l'élément une fois l'action terminé.
(Bonus). Faire venir le paragraphe depuis le côté.
-------------------------- EXO 2 ---------------------------- 
1. Lorsque le dernier paragraphe est à 200px en dessous du viewport.
*     Créer 10 paragraphes et les ajouter à la suite du main.
2. Désactiver la détection du précédent dernier paragraphe.
3. Ajouter l'animation de l'exercice 1 aux nouveaux dernier paragraphe. 
*/

// -------------------------- EXO 1 ---------------------------- 

// const mainp = document.querySelectorAll('main p');
// for(let i = 0; i<mainp.length;i++){
//     mainp[i].style.visibility= "hidden";
//     const visible = new IntersectionObserver(setVisible)
//     visible.observe(mainp[i])
// }
// function setVisible(entries){
//     let entry = entries[0];
//     console.log(entry);
//     if(entry.isVisible){
//         window.addEventListener("scroll", indicatorAnimation)
//     }else{
//         window.removeEventListener("scroll", indicatorAnimation)
//     }
// }
// function indicatorAnimation(){
//     if(window.scrollY == (main.scrollHeight/2)){
//         mainp.foreach(p=> p.style.display="block");
//     }
// }

// ------------------------- correction exo 1 -------------------

const ps = document.querySelectorAll('main p');
const obs = new IntersectionObserver(showPara, {threshold: 0.5});

// J'observe chacun de mes éléments un à un.
ps.forEach(p=>obs.observe(p));

function showPara(entries){
    entries.forEach(reveal)
}
function reveal(entry){
    if(entry.isIntersecting){
        entry.target.style.opacity = "1";
        entry.target.style.transform= "translateX(0)";
        obs.unobserve(entry.target);
    }
}
// ------------------------- correction exo 2 -------------------

const lastP = document.querySelector('main p:last-child');
const obsLast = new IntersectionObserver(addMore, {rootMargin: "200px"});
const m = document.querySelector('main');
obsLast.observe(lastP);

function addMore(entries){
    let ent = entries[0];
    if(ent.isIntersecting){
        let p;
        for (let i = 0; i < 10; i++) {
            p = document.createElement("p")
            p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat hic quisquam dolorem autem nisi ipsam inventore odit, asperiores suscipit nam tempore reiciendis obcaecati deserunt assumenda esse nostrum. Iusto, tempora asperiores!Voluptas laudantium eum cum, atque doloribus ipsa. Natus, error voluptate! Consequuntur ratione pariatur at perspiciatis excepturi nam veniam facere voluptas? Ad necessitatibus vitae voluptate soluta expedita iure inventore nihil repellendus!Saepe voluptatibus quia, repellendus rerum magni dolores voluptates modi quibusdam illum tenetur repellat, possimus nulla aspernatur nesciunt blanditiis earum soluta provident quasi quam. Cupiditate laboriosam cum odit earum nihil quibusdam!Commodi harum obcaecati iure blanditiis ducimus autem tempore et distinctio id, possimus officia quaerat porro a voluptas aliquam doloremque necessitatibus. Minus sapiente dolores facilis repellendus consequatur tenetur recusandae numquam sunt!Sunt nisi tempora blanditiis non mollitia a doloremque vel reprehenderit, dolore quod debitis odit accusantium aut placeat fugiat voluptatum, commodi repellendus amet dolorum tenetur quas. Nobis dolore ipsa animi hic?Nisi veritatis similique dicta veniam nostrum aliquam explicabo doloremque, cum tempore molestias vel laudantium, tenetur dolores voluptatem, harum iure itaque impedit numquam illum assumenda. Nihil beatae commodi cumque tempora atque!Dignissimos eveniet iure quidem rem consequuntur repellendus laudantium sit tempora veniam molestiae obcaecati, magnam eaque maxime dicta mollitia voluptates inventore debitis blanditiis libero odit. Optio perferendis soluta nemo cupiditate numquam.Laborum, delectus pariatur labore veritatis nisi odio adipisci aperiam facere, nemo at amet voluptas eveniet deleniti magni odit, quod et provident libero commodi? Porro accusamus officia corrupti at, recusandae illo!Adipisci praesentium id reiciendis porro earum, expedita corrupti! Ratione deleniti, rerum ipsam modi quis quos inventore beatae, qui consectetur consequatur cumque atque, possimus dolor soluta itaque. Maiores aut quaerat esse.Dolor consequatur repellat sit possimus repellendus velit voluptatem ratione magnam id, dolore illum deserunt pariatur nisi neque fugit, dolorum quibusdam quod illo molestias optio. Deserunt corporis voluptates officia autem consectetur."
            m.append(p);
            obs.observe(p);
        }
        obsLast.unobserve(lastP);
        obsLast.observe(p)
    }
}