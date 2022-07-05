"use strict";
let h = prompt("Donne moi l'heure")
    m = prompt("Donne moi les minutes")
    s = prompt("Donne moi les secondes")

s++;
if(s==60){
    s=0;
    m++;
    if(m==60){
        m=0
        h++
        if(h==24){
            h=0;
        }
    }
}
alert(`Dans une seconde il sera ${h}${m}${s}`)