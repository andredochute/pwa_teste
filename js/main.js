window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};


function retorna(){
var input = document.querySelector('#nome').value;
var retorno = document.querySelector('#retornaNome');
console.log('clicou')


retorno.textContent = "Olá " + input + "!";

}