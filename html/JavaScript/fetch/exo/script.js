"use strict";
/**
 * Faire une requête sur le lien donné ci-dessous.
 * Analyser l'objet JSON obtenu,
 * Et afficher toutes les informations qui nous sont rendu
 */

// --------------------------- Mon code --------------------------------

// const url2 = "https://api.thecatapi.com/v1/images/search";

// fetch(url2).then(handleFetch);

// function handleFetch(responseText){
//     if(responseText.ok){
//         responseText.json().then(showResult2).catch(error=>console.log(error));
//     }else{
//         console.log(responseText.statusText);
//     }
// }
// function showResult2(data){
//     console.log(data[0].url2);
//     document.body.innerHTML = `<img src=${data[0].url} width=${data[0].width} height=${data[0].height} id=${data[0].id}>`
// }

// --------------------------- Correction --------------------------------

const url2 = "https://api.thecatapi.com/v1/images/search";

fetch(url2).then(res=>{
    if(res.ok){
        res.json()
            .then(data=>{
                console.log(data[0]);
                document.body.innerHTML += `<img src="${data[0].url}" alt="image aléatoire d'animal">`
            })
            .catch(err=>console.log(err.statusText))
    }
})