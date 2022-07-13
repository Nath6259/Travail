"use strict";

export function create(imgs){
    // Crée mon caroussel
    const container = document.createElement("div");
    container.classList.add("carousel-container");
    const dots = document.createElement("div");
    dots.classList.add("dots");
    imgs.forEach((img, i)=>{
        const div = document.createElement("div");
        div.classList.add("items", "fade");
        const image = document.createElement("img");
        image.src = img;
        div.append(image);
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.id = i;
        dots.append(dot);
        container.append(div);
    })
    container.append(dots);
    const next = document.createElement("a");
    next.classList.add("next");
    next.innerHTML = "&#10095;";
    const prev = document.createElement("a");
    prev.classList.add("prev");
    prev.innerHTML = "&#10094;";
    container.append(next, prev);
    return container;
}
function select(){
    // Selectionne les éléments intéractif de mon carousel.
    return{
        dots: document.querySelectorAll(".dot"),
        items: document.querySelectorAll(".items"),
        btns: document.querySelectorAll(".next, .prev"),
    }
}
function showItems(n){
    // Affiche un élément de mon carousel et cache les autres.
    const carousel = select();
    let index = n> carousel.items.length -1 ? 0: n<0? carousel.items.length-1: n;
    // if(n > carousel.items.length-1){
    //     let index = 0;
    // }
    // else if(n<0){
    //     let index = carousel.items.length-1;
    // }
    // else{
    //     let index = n;
    // }
    carousel.items.forEach((item, i)=>{
        item.style.display = "none";
        carousel.dots[i].classList.remove("active");
    })
    carousel.items[index].style.display = "block";
    carousel.dots[index].classList.add("active");
}
function currentItem(e){
    // Affiche l'image qui correspond au point.
    let n = parseInt(e.target.dataset.id);
    showItems(n);
}
function changeItem(e){
    let n = document.querySelector(".dot.active").dataset.id;
    if(e.target.classList.contains("next")){
        showItems(++n);
    }else{
        showItems(--n);
    }
}
export default function init(){
    // Affiche la première image et ajoute les écouteurs d'évènement.
    showItems(0);
    const carousel = select();
    carousel.dots.forEach(dot=>dot.addEventListener("pointerdown", currentItem));
    carousel.btns.forEach(btn=>btn.addEventListener("pointerdown", changeItem));
}
// ------------------------------ Version innerHTML de la function create -------------------------
// function create2(imgs){
//     const container = document.createElement("div");
//     container.classList.add("carousel-container");
//     imgs.forEach(img=>{
//         container.innerHTML += `<div class="items fade"><img src="${img}"></div>`;
//     })
//     container.innerHTML += "<div class='dots'>";
//     for(let i = 0; i< imgs.length; i++){
//         container.innerHTML += `<span class="dot active" data-id="${i}"></span>`
//     }
//     container.innerHTML += '</div><a class="next">&#10095;</a><a class="prev">&#10094;</a>';
//     return container;
// }