import {teste}from'./modules/header.js'
let val = teste;

// const getHambuguer = document.querySelector(".dropDown");
// function testeOi(){
//     alert(val);
// }
// getHambuguer.addEventListener("click",testeOi);
const iFrame = document.getElementById("iFrame");
const hamburguer = iFrame.contentWindow.document.getElementById("hamburguer");
console.log(hamburguer);
function testeOi(){
    console.log(val);
}
hamburguer.addEventListener("click",testeOi);
// hamburguer.onClick = testeOi;