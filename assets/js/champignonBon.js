"use strict";
//1. on déclare les variables des champi bon et mauvais:
var champiBon = window.document.getElementById("champiBon");
var etoile = window.document.getElementById("etoile");
var imageChampiBon = document.getElementById("imageChampiBon");

//2. les positions de départ:

champiBon.style.top = "560px";
champiBon.style.left = "2200px";

//3. detection collision:
var collisionChampiBon = false;
function detecterCollisionChampiBon() {
  if (
    parseFloat(divHero.style.top) + parseFloat(divHero.style.height) <
      parseFloat(champiBon.style.top) &&
    (parseFloat(divHero.style.left) + parseFloat(divHero.style.width) >
      parseFloat(champiBon.style.left) ||
      parseFloat(divHero.style.left) <
        parseFloat(champiBon.style.left) + parseFloat(champiBon.style.width))
  ) {
    champiBon.style.left = parseFloat(divHero.style.left) + 1600 + "px";
    collisionChampiBon = true;
    console.log("champi detecté");
    etoile.style.left = divHero.style.left;
    etoile.style.top = divHero.style.top;
    etoile.style.display = "block";
    var idEtoile = setInterval(function () {
      etoile.style.top = parseFloat(etoile.style.top) - 10 + "px";
    }, 100);
  }
}

//4. champi avance:
var idIntervalChampiBon = window.setInterval(function () {
  detecterCollisionChampiBon();
  champiBon.style.left = parseFloat(champiBon.style.left) - 0.5 + "px";
  if (champiBon.style.left == "-100px") {
    champiBon.style.left = parseFloat(divHero.style.left) + 1600 + "px";
  }
}, 20);
