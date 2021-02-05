import {teste}from './index.js'
const iFrame = document.getElementById("iFrame");
const getIframe = document.getElementById("iFrame");
const getHeader = iFrame.contentWindow.document.getElementById("getHeader");
const hamburguer = iFrame.contentWindow.document.getElementById("hamburguer");
    function TurnHeader(){
        if(getHeader.style.display==="none"){
            getHeader.style.display="flex";
            getIframe.style.height="24rem";
        }else{
            getIframe.style.height="84px";
            getHeader.style.display="none";
        }
    }

    
hamburguer.addEventListener("click",TurnHeader);
// hamburguer.onClick = testeOi;