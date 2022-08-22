"use strict";

const copyright = document.querySelector('footer span');
let date = new Date();
copyright.textContent = date.getFullYear();

var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
var navList = document.querySelector('.nav-list')
toggleButton.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
})
navList.addEventListener('click', function () {
  navBar.classList.toggle('toggle');
});