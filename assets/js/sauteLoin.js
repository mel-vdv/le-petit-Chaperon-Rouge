var scorePomme = 0;

//1. declaration variables:
var divHero = window.document.getElementById("divHero");
var hero = window.document.getElementById("hero");

var decor = window.document.getElementById("decor");

//2. position de départ du bonhomme:
divHero.style.top = "480px";
divHero.style.left = "100px";
divHero.style.width = "83px";
divHero.style.height = "136px";
hero.style.top = "-227px";
hero.style.left = "-38px";
hero.src = "assets/images/herosversion2.png";
//du décor:
decor.style.left = "0px";

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

// detection de collision pomme:
var pommeA = window.document.getElementById("pommeA");
pommeA.style.top = "450px";
pommeA.style.left = "932px";

var pommeB = window.document.getElementById("pommeB");
pommeB.style.top = "390px";
pommeB.style.left = "1000px";

var pommeC = window.document.getElementById("pommeC");
pommeC.style.top = "410px";
pommeC.style.left = "1132px";

function detecterCollisionPomme() {
  if (
    parseFloat(pommeA.style.top) > parseFloat(divHero.style.top) &&
    parseFloat(divHero.style.left) > parseFloat(pommeA.style.left) - 60 &&
    parseFloat(divHero.style.left) < parseFloat(pommeA.style.left) + 15
  ) {
    pommeA.style.left = parseFloat(pommeA.style.left) + 1600 + "px";
    scorePomme = scorePomme + 5;
  }

  if (
    parseFloat(pommeB.style.top) > parseFloat(divHero.style.top) &&
    parseFloat(divHero.style.left) > parseFloat(pommeB.style.left) - 60 &&
    parseFloat(divHero.style.left) < parseFloat(pommeB.style.left) + 15
  ) {
    pommeB.style.left = parseFloat(pommeB.style.left) + 1600 + "px";
  }

  if (
    parseFloat(pommeC.style.top) > parseFloat(divHero.style.top) &&
    parseFloat(divHero.style.left) > parseFloat(pommeC.style.left) - 60 &&
    parseFloat(divHero.style.left) < parseFloat(pommeC.style.left) + 15
  ) {
    pommeC.style.left = parseFloat(pommeC.style.left) + 1600 + "px";
  }
}
//action :  SAUTE LOIN (quand on appuie sur la flèche du haut)

var enTrainDeSauter = false;
window.addEventListener("keydown", function (evt) {
  var y = evt.key;
  if (y === "Enter") {
    if (!enTrainDeSauter) {
      enTrainDeSauter = true;
      var iSaut = 0;
      var idIntervalSaut = setInterval(function () {
        detecterCollisionPomme();
        divHero.style.width = actions.jump[iSaut].divHeros.width;
        divHero.style.height = actions.jump[iSaut].divHeros.height;
        hero.style.top = actions.jump[iSaut].heros.top;
        hero.style.left = actions.jump[iSaut].heros.left;

        divHero.style.left = parseFloat(divHero.style.left) + 70 + "px";

        if (parseFloat(divHero.style.left) > 700) {
          decor.style.left = parseFloat(decor.style.left) - 70 + "px";
        }
        iSaut++;

        if (iSaut < 4) {
          detecterCollisionPomme();
          divHero.style.top = parseFloat(divHero.style.top) - 70 + "px";
        } else {
          detecterCollisionPomme();
          divHero.style.top = parseFloat(divHero.style.top) + 210 + "px";
        }
        if (iSaut === actions.jump.length) {
          detecterCollisionPomme();
          clearInterval(idIntervalSaut);
          enTrainDeSauter = false;
          iSaut = 0;
        }
      }, 100);
    }
  }
});
