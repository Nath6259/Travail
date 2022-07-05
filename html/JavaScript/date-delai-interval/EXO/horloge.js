"use strict";

const btn = document.querySelector('#horloge')

btn.onclick = ()=> {
    let img= document.getElementById("img")
    let bar1 = document.querySelector(".bar1")
    let bar2 = document.querySelector(".bar2")
    let bar3 = document.querySelector(".bar3")
    let merdouille = document.querySelector(".merdouille")

    if (img.style.visibility=="hidden" &&
        bar1.style.visibility=="hidden" &&
        bar2.style.visibility=="hidden" &&
        bar3.style.visibility=="hidden" &&
        merdouille.style.visibility=="hidden")
        {
        img.style.visibility = "visible"
        bar1.style.visibility = "visible"
        bar2.style.visibility = "visible"
        bar3.style.visibility = "visible";
        merdouille.style.visibility="visible";
    }
        
    else if (img.style.visibility=="" &&
        bar1.style.visibility=="" &&
        bar2.style.visibility=="" &&
        bar3.style.visibility=="" &&
        merdouille.style.visibility=="")
        {
        img.innerHTML+=`<img src="./horloge.jpg">`;
        img.style.visibility = "visible";
        bar1.style.visibility = "visible";
        bar2.style.visibility = "visible";
        bar3.style.visibility = "visible";
        merdouille.style.visibility="visible";
    }
    else{
        img.style.visibility = "hidden";
        bar1.style.visibility="hidden";
        bar2.style.visibility="hidden";
        bar3.style.visibility="hidden";
        merdouille.style.visibility="hidden";
    }
}

