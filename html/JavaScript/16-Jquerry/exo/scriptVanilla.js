"use strict";
let idInterval;
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("#slider ul li:nth-child(odd)").forEach(li=>{
        li.style.background = "#aaa";
    })
    document.querySelector("#checkbox").addEventListener("change", function(){
        if(this.checked){
            idInterval = setInterval(moveRight, 1500);
        }else{
            clearInterval(idInterval);
        }
    });
    let slider = document.querySelector("#slider");
    let sliderUl = document.querySelector("#slider ul");
    let sliderLi = document.querySelectorAll("#slider ul li");
    let slideCount = sliderLi.length;
    let slideWidth = sliderLi[0].offsetWidth;
    let slideHeight = sliderLi[0].offsetHeight;
    let sliderUlWidth = slideCount * slideWidth;

    slider.style.width = slideWidth + "px";
    slider.style.height = slideHeight + "px";

    sliderUl.style.width = sliderUlWidth + "px";
    sliderUl.style.marginLeft = -slideWidth + "px";

    sliderUl.prepend(document.querySelector('#slider ul li:last-child'));
    function moveLeft(){
        let anime = sliderUl.animate({left: [0, slideWidth + "px"]}, {duration: 200, fill: "forwards"});
        anime.onfinish= ()=>{
            anime.cancel();
            sliderUl.prepend(document.querySelector('#slider ul li:last-child'));
        }
    }
    function moveRight(){
        let anime = sliderUl.animate({left: [0, -slideWidth + "px"]}, {duration: 200, fill: "forwards"});
        anime.onfinish= ()=>{
            anime.cancel();
            sliderUl.append(document.querySelector('#slider ul li:first-child'));
        }
    }
    document.querySelector("a.control_prev").addEventListener("click", moveLeft)
    document.querySelector("a.control_next").addEventListener("click", moveRight)
})





// --------------------- Mon code ------------------------------

// let idInterval;
// document.querySelector('#slider ul li:nth-child(odd)').this.style("background", "#aaa"),
// document.querySelector('#checkbox'),
// function(){
//     if(document.querySelector(this)[0].checked){
//         idInterval = setInterval(moveRight, 1500);
//         }else{
//              clearInterval(idInterval)
//         }
// }
// let slideCount = document.querySelector('#slider ul li');
// let slideWidth = document.querySelector('#slider ul li');
// let slideHeight = document.querySelector('#slider ul li');
// let sliderUlWidth = slideCount * slideWidth;

// document.querySelector('#slider').this.style({
//     width: slideWidth,
//     height: slideHeight
// });

// document.querySelector('#slider ul').this.style({
//     width: sliderUlWidth,
//     marginLeft: -slideWidth
// });

// document.querySelector('#slider ul li:last-child').prepend('#slider ul');

// function moveLeft() {
// document.querySelector('#slider ul').animate({
//     left: +slideWidth
//     }, 200, function () {
//         document.querySelector('#slider ul li:last-child').prepend('#slider ul');
//         document.querySelector('#slider ul').this.style('left', '');
//     });
// };

// function moveRight() {
//     document.querySelector('#slider ul').animate({
//         left: -slideWidth
//     }, 200, function () {
//         document.querySelector('#slider ul li:first-child').append('#slider ul');
//         document.querySelector('#slider ul').this.style('left', '');
//     });
// };

// document.querySelector('a.control_prev').click(moveLeft);

// document.querySelector('a.control_next').click(moveRight);