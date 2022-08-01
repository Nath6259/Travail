// "use strict";
/** Vous allez devoir créer votre propre lecteur video.

* Côté CSS, inspirez vous du travail fait sur la gallerie d'image avec
bouton de plein écran
* Il vous faudra alors ne pas utiliser les controls par défaut de HTML5
mais faire les votres.

  * Une fois un élément vidéo selectionné, nous avons accès à plusieurs
méthodes et propriété comme :
  * .play() qui lance la vidéo.
  * .pause() qui met la vidéo en pause.
  * .currentTime qui donne ou paramètre le temps de la vidéo en seconde.
  * .muted qui est un boolean indiquant si le son de la vidéo est coupé
ou non
  * .volume qui prend un chiffre entre 0 et 1 indiquant le volume.
  * .controls qui est un boolean affichant ou non les contrôls par
défaut de HTML5
  * .duration qui indique la durée totale de la vidéo.
  * .paused qui est un boolean indiquant si la vidéo est en pause.
  * .ended qui est un boolean indiquant si la vidéo est terminé.
  * Et pleins d'autres qui peuvent avoir leur utilité.

  * De ce point vous pourrez gérer le son, lancer ou mettre en pause la
vidéo, mettre en plein écran, couper le son etc... vous êtes libre
d'ajouter toute les fonctionnalités qui vous plaise. */


let video, playPauseBtn, stopBtn, slider, volumeBtn;
video = document.querySelector(".video");
playPauseBtn = document.querySelector(".playPauseBtn");
stopBtn = document.querySelector(".stop");
slider = document.querySelector(".slider");
volumeBtn = document.querySelector(".volume");
expandBtn = document.querySelector(".expand");
timer = document.querySelector(".timer");

function updateIcon() {
  if (video.paused) {
    playPauseBtn.innerHTML = "<i class='fas fa-play'></i>";
    playPauseBtn.style.color = "#30ff30";
  } else {
    playPauseBtn.innerHTML = "<i class='fas fa-pause'></i>";
    playPauseBtn.style.color = "#f4f4f4";
  }
}
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function stopVideo() {
  video.currentTime = 0;
  setSliderAndTimer();
  video.pause();
}

function setSliderAndTimer() {
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  timer.textContent = `${minutes}:${seconds}`;
  slider.value = (video.currentTime / video.duration) * 100;
  if (video.currentTime == video.duration) {
    slider.value = 0;
    stopVideo();
  }
}
function seeked() {
  video.currentTime = (slider.value / 100) * video.duration;
}
let muted = false;

function mute() {
  if (video.muted===true) {

    video.muted = false;
  } else {
    video.muted= true;
  }
}


function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  }
}

playPauseBtn.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
stopBtn.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", setSliderAndTimer);
slider.addEventListener("input", seeked);
volumeBtn.addEventListener("click", mute);
expandBtn.addEventListener("click", openFullscreen);