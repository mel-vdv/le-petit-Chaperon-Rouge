'use strict';
//1. declaration variables:
var divPero = window.document.getElementById("divPero");
var peroquet = window.document.getElementById("peroquet");
//2. position initiale:
divPero.style.top = "100px";
divPero.style.left = "2000px";
//3. sprite:
var peroquetVole = {
  fly: [
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-10px", left: "-31px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-10px", left: "-166px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-10px", left: "-308px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-123px", left: "-102px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-123px", left: "-237px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-239px", left: "-31px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-239px", left: "-173px" },
    },
    {
      divPeroo: { width: "130px", height: "152px" },
      peroo: { top: "-239px", left: "-309px" },
    },
  ],
};
//4. action:
var ind = 0;
var idPero = 0;
idPero = window.setInterval(function () {
  //1/ le mouvement des ailes:
  divPero.style.width = peroquetVole.fly[ind].divPeroo.width;
  divPero.style.height = peroquetVole.fly[ind].divPeroo.height;
  peroquet.style.top = peroquetVole.fly[ind].peroo.top;
  peroquet.style.left = peroquetVole.fly[ind].peroo.left;
  ind++;
  if (ind === peroquetVole.fly.length) {
    ind = 0;
  }
  //2/ le deplacement du peroquet:
  divPero.style.left = parseFloat(divPero.style.left) - 20 + "px";
  // 3/ pour qu'il apparaisse toutes les 10 secondes:
  if (parseFloat(divPero.style.left) < -200) {
    divPero.style.left = "4500px";
  }
}, 80);
