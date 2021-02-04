import {teste}from './index.js'
const iFrame = document.getElementById("iFrame");
console.log(iFrame);
const hamburguer = iFrame.contentWindow.document.getElementById("hamburguer");
console.log(hamburguer);
function testeOi(){
    console.log("oi");
}
hamburguer.addEventListener("click",testeOi);
// hamburguer.onClick = testeOi;