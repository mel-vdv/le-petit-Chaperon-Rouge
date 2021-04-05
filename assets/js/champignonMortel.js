"use strict";
//1. on déclare les variables des champi bon et mauvais:
var champiMauvais = window.document.getElementById("champiMauvais");
//2. les positions de départ:
champiMauvais.style.top = "550px";
champiMauvais.style.left = "3522px";

//bonhomme meurt:
//1. declaration variables:
var divHero = window.document.getElementById("divHero");
var hero = window.document.getElementById("hero");
var teteDeMort = window.document.getElementById("divMort");
var mort = window.document.getElementById("mort");
var playAgain = window.document.getElementById("divPlayAgain");
var divHero = window.document.getElementById("divHero");
var rejouer = window.document.getElementById("divRejouer");

//2. position de départ du bonhomme:
divHero.style.top = "480px";
divHero.style.left = "100px";
divHero.style.width = "83px";
divHero.style.height = "136px";
hero.style.top = "-227px";
hero.style.left = "-38px";
hero.src = "assets/images/herosversion2.png";

//3. le sprite:
var actions = {
  run: [
    {
      divHeros: { width: "83px", height: "136px" },
      heros: { top: "-227px", left: "-38px" },
    },
    {
      divHeros: { width: "89px", height: "136px" },
      heros: { top: "-227px", left: "-123px" },
    },
    {
      divHeros: { width: "98px", height: "136px" },
      heros: { top: "-227px", left: "-213px" },
    },
    {
      divHeros: { width: "106px", height: "136px" },
      heros: { top: "-227px", left: "-314px" },
    },
    {
      divHeros: { width: "91px", height: "136px" },
      heros: { top: "-227px", left: "-423px" },
    },
    {
      divHeros: { width: "83px", height: "136px" },
      heros: { top: "-227px", left: "-525px" },
    },
    {
      divHeros: { width: "89px", height: "136px" },
      heros: { top: "-227px", left: "-610px" },
    },
    {
      divHeros: { width: "99px", height: "136px" },
      heros: { top: "-227px", left: "-708px" },
    },
  ],
  runGauche: [
    {
      divHeros: { width: "80px", height: "136px" },
      heros: { top: "-228px", left: "-728px" },
    },
    {
      divHeros: { width: "94px", height: "136px" },
      heros: { top: "-228px", left: "-634px" },
    },
    {
      divHeros: { width: "98px", height: "136px" },
      heros: { top: "-228px", left: "-537px" },
    },
    {
      divHeros: { width: "107px", height: "136px" },
      heros: { top: "-228px", left: "-426px" },
    },
    {
      divHeros: { width: "93px", height: "136px" },
      heros: { top: "-228px", left: "-333px" },
    },
    {
      divHeros: { width: "89px", height: "136px" },
      heros: { top: "-228px", left: "-242px" },
    },
    {
      divHeros: { width: "89px", height: "136px" },
      heros: { top: "-228px", left: "-147px" },
    },
    {
      divHeros: { width: "97px", height: "136px" },
      heros: { top: "-228px", left: "-42px" },
    },
  ],
  cogne: [
    {
      divHeros: { width: "85px", height: "136px" },
      heros: { top: "-47px", left: "-55px" },
    },
    {
      divHeros: { width: "85px", height: "136px" },
      heros: { top: "-47px", left: "-170px" },
    },
    {
      divHeros: { width: "85px", height: "136px" },
      heros: { top: "-47px", left: "-283px" },
    },
    {
      divHeros: { width: "85px", height: "136px" },
      heros: { top: "-47px", left: "-401px" },
    },
    {
      divHeros: { width: "101px", height: "136px" },
      heros: { top: "-47px", left: "-531px" },
    },
    {
      divHeros: { width: "126px", height: "136px" },
      heros: { top: "-47px", left: "-670px" },
    },
    {
      divHeros: { width: "83px", height: "136px" },
      heros: { top: "-227px", left: "-38px" },
    },
  ],
  jump: [
    {
      divHeros: { width: "108px", height: "215px" },
      heros: { top: "-555px", left: "-441px" },
    },
    {
      divHeros: { width: "108px", height: "215px" },
      heros: { top: "-555px", left: "-549px" },
    },
    {
      divHeros: { width: "108px", height: "215px" },
      heros: { top: "-555px", left: "-668px" },
    },
    {
      divHeros: { width: "83px", height: "136px" },
      heros: { top: "-227px", left: "-38px" },
    },
  ],
  jumpGauche: [
    {
      divHeros: { width: "108px", height: "215px" },
      heros: { top: "-555px", left: "-297px" },
    },
    {
      divHeros: { width: "108px", height: "215px" },
      heros: { top: "-555px", left: "-180px" },
    },
    {
      divHeros: { width: "108px", height: "215px" },
      heros: { top: "-555px", left: "-70px" },
    },
    {
      divHeros: { width: "80px", height: "136px" },
      heros: { top: "-228px", left: "-728px" },
    },
  ],
  meurt: [
    {
      divHeros: { width: "138px", height: "144px" },
      heros: { top: "-770px", left: "-162px" },
    },
    {
      divHeros: { width: "138px", height: "144px" },
      heros: { top: "-770px", left: "-306px" },
    },
    {
      divHeros: { width: "138px", height: "144px" },
      heros: { top: "-770px", left: "-478px" },
    },
    {
      divHeros: { width: "138px", height: "144px" },
      heros: { top: "-770px", left: "-650px" },
    },
    {
      divHeros: { width: "138px", height: "144px" },
      heros: { top: "-770px", left: "-8px" },
    },
  ],
};
//e) action : meurt (quand collision)

var idIntervalMeurt = 0;
var iMeurt = 0;
var mort = false;

function mourir() {
  if (!mort) {
    mort = true;

    idIntervalMeurt = window.setInterval(function () {
      hero.src = "assets/images/herosversion2.png";
      divHero.style.width = actions.meurt[iMeurt].divHeros.width;
      divHero.style.height = actions.meurt[iMeurt].divHeros.height;
      hero.style.top = actions.meurt[iMeurt].heros.top;
      hero.style.left = actions.meurt[iMeurt].heros.left;
      divHero.style.left = parseFloat(divHero.style.left) - 1 + "px";
      divHero.style.top = parseFloat(divHero.style.top) + 1 + "px";
      iMeurt++;
      if (iMeurt == actions.meurt.length) {
        clearInterval(idIntervalMeurt);
        iMeurt = 0;
      }
    }, 150);

    //apparition de tatet de mort après 4 secondes + proposition de rejouer:
    var apparitionTeteDeMort = window.setTimeout(function () {
      teteDeMort.style.display = "block";
      playAgain.style.display = "block";
      divHero.style.display = "none";
      rejouer.style.display = "block";

      playAgain.addEventListener("click", function () {
        teteDeMort.style.display = "none";
        playAgain.style.display = "none";
        rejouer.style.display = "none";
        divHero.style.display = "block";
        divHero.style.width = "83px";
        divHero.style.height = "136px";
        divHero.style.top = "480px";
        divHero.style.left = "100px";
        hero.style.top = "-227px";
        hero.style.left = "-38px";
      });
    }, 2000);
  }
  if (mort) {
    enTrainDeCourir = true;
  }
}

//4. detection collision:

function detectionCollisionChampiMauvais() {
  if (
    parseFloat(divHero.style.left) + parseFloat(divHero.style.width) >
      parseFloat(champiMauvais.style.left) &&
    parseFloat(divHero.style.left) <
      parseFloat(champiMauvais.style.left) + 54 &&
    parseFloat(divHero.style.top) + parseFloat(divHero.style.height) >
      parseFloat(champiMauvais.style.top) + 70
  ) {
    console.log("champignon mortel detecté");
    mourir();
  }
}
//3. actions : avancer:

var idIntervalChampiMauvais = window.setInterval(function () {
  detectionCollisionChampiMauvais();

  if (play.style.display == "none" && playAgain.style.display == "none") {
    champiMauvais.style.left = parseFloat(champiMauvais.style.left) - 1 + "px";
  }

  if (champiMauvais.style.left == "-100px") {
    champiMauvais.style.left = parseFloat(divHero.style.left) + 1750 + "px";
  }
}, 20);
