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

//e) action : meurt (quand collision)///double click + score=0

var idIntervalMeurt = 0;
var iMeurt = 0;
var mort = false;

function mourir() {
  if (!mort) {
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
    }, 2000);
  }
  if (mort) {
    enTrainDeCourir = true;
  }
}
playAgain.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/index.html";
});

var feu = window.document.getElementById("feuSprite");
var divFeu = window.document.getElementById("divFeu");

var feuQuiBrule = {
  brule: [
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-12px", left: "-12px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-12px", left: "-152px" },
    },
    {
      divDuFeu: { width: "145px", height: "119px" },
      feuSprite: { top: "-12px", left: "-294px" },
    },
    {
      divDuFeu: { width: "145px", height: "119px" },
      feuSprite: { top: "-12px", left: "-457px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-160px", left: "-6px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-160px", left: "-145px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-160px", left: "-310px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-160px", left: "-463px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-306px", left: "4px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-306px", left: "-162px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-306px", left: "-327px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-306px", left: "-471px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-447px", left: "7px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-447px", left: "-152px" },
    },
    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-447px", left: "-316px" },
    },

    {
      divDuFeu: { width: "145px", height: "126px" },
      feuSprite: { top: "-447px", left: "-477px" },
    },
  ],
};
//detecter collision:

function detecterFeu() {
  if (
    parseFloat(divHero.style.left) + parseFloat(divHero.style.width) >
      parseFloat(divFeu.style.left) &&
    parseFloat(divHero.style.left) <
      parseFloat(divFeu.style.left) + parseFloat(divFeu.style.width) &&
    parseFloat(divHero.style.top) > 420
  ) {
    mourir();
  }
}

//le feu brule :
var indiceFeu = 0;
divFeu.style.top = "510px";
divFeu.style.left = "3000px";
var idIntervalFeu = window.setInterval(function () {
  detecterFeu();
  divFeu.style.width = feuQuiBrule.brule[indiceFeu].divDuFeu.width;
  divFeu.style.height = feuQuiBrule.brule[indiceFeu].divDuFeu.height;
  feu.style.top = feuQuiBrule.brule[indiceFeu].feuSprite.top;
  feu.style.left = feuQuiBrule.brule[indiceFeu].feuSprite.left;

  indiceFeu++;
  if (indiceFeu === feuQuiBrule.brule.length) {
    indiceFeu = 0;
  }
}, 150);
