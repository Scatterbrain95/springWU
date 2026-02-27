let menuButton = document.querySelector(".menu-button");
let fadeLayer = document.querySelector(".fade-layer");
menuButton.addEventListener("click",showMenu);
fadeLayer.addEventListener("click",showMenu);

function showMenu(){
    let menuVar = document.querySelector("nav.navigation");
    menuVar.classList.toggle("show");
    fadeLayer.classList.toggle("visible");
}