//cogner le dodo:
"use strict";
//1. declaration variables:
var divHero = window.document.getElementById("divHero");
var hero = window.document.getElementById("hero");

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
//cogne : quand on appuie sur la barre espace:

var enTrainDeCogner = false;
var iCogne = 0;

window.addEventListener("keydown", function (e) {
  var touchh = e.key;
  if (touchh == "Shift") {
    if (!enTrainDeCogner) {
      hero.src = "assets/images/herosversion2.png";
      enTrainDeCogner = true;
      var idIntervalCogne = setInterval(function () {
  
        divHero.style.width = actions.cogne[iCogne].divHeros.width;
        divHero.style.height = actions.cogne[iCogne].divHeros.height;
        hero.style.top = actions.cogne[iCogne].heros.top;
        hero.style.left = actions.cogne[iCogne].heros.left;
        iCogne++;

        if (iCogne == actions.cogne.length) {
          clearInterval(idIntervalCogne);
          enTrainDeCogner = false;
          iCogne = 0;
        }
      }, 100);
    }
  }
});

//1. declaration des variables dodo et explosion:
var divDodo = window.document.getElementById("divDodo");
var dodo = window.document.getElementById("dodo");
var divExplosion = window.document.getElementById("divExplosion");
var explosion = window.document.getElementById("explosion");
//2. position initiale du dodo:
divDodo.style.top = "470px";
divDodo.style.left = "4000px";
divDodo.style.width = "200px";
divDodo.style.height = "206px";
dodo.style.top = "-224px";
dodo.style.left = "-211px";
//3. les sprites :
//a. sprite dodo qui avance:
var dodoAvance = {
  attaque: [
    {
      divDodoo: { width: "200px", height: "206px" },
      dodoo: { top: "-224px", left: "-211px" },
    },
    {
      divDodoo: { width: "200px", height: "206px" },
      dodoo: { top: "-242px", left: "-25px" },
    },
    {
      divDodoo: { width: "162px", height: "206px" },
      dodoo: { top: "0px", left: "-29px" },
    },
    {
      divDodoo: { width: "200px", height: "206px" },
      dodoo: { top: "-15px", left: "-192px" },
    },
  ],
};
//b. sprite de explosion:
var objetExplose = {
  explose: [
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "-4px", left: "-2px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "1px", left: "-108px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "1px", left: "-216px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "2px", left: "-325px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "2px", left: "-429px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "-110px", left: "0px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "-110px", left: "-110px" },
    },
    {
      divExplosionn: { width: "102px", height: "105px" },
      explosionn: { top: "-110px", left: "-325px" },
    },
  ],
};
//4. les actions : (avec gestion des collisions)
// d'abord: la détection de la collision héros-dodo:
var dodoPerdu = false;
var collisionDodo = false;
function detecterCollisionDodo() {
  if (
    parseFloat(divHero.style.left) + parseFloat(divHero.style.width) >
      parseFloat(divDodo.style.left) &&
    parseFloat(divHero.style.left) < parseFloat(divDodo.style.left) + 162
  ) {
    if (enTrainDeCogner && !collisionDodo) {
      dodoPerdu = true;
      collisionDodo = true;
      console.log("le bonhomme frappe le dodo");
      divDodo.style.left = parseFloat(divHero.style.left) + 3500 + "px";

      divExplosion.style.width =
        objetExplose.explose[iExplose].divExplosionn.width;
      divExplosion.style.height =
        objetExplose.explose[iExplose].divExplosionn.height;
      divExplosion.style.display = "block";
      divExplosion.style.top = divHero.style.top;
      divExplosion.style.left = divHero.style.left;
      if (!enTrainDexploser) {
        objetMelanie.explosionExplose();
      }
    } else {
      if (!collisionDodo) {
        dodoPerdu = false;
        collisionDodo = true;
        console.log("dodo percute le bonhomme");
        console.log(divDodo.style.left);
        mourir();
      }
    }
  }
}

//a. dodo avance:
var iDodo = 0;
var idIntervalDodo = 0;
var dodoAvanceAgain = function () {
  
  idIntervalDodo = window.setInterval(function () {
    detecterCollisionDodo();
    divDodo.style.width = dodoAvance.attaque[iDodo].divDodoo.width;
    divDodo.style.height = dodoAvance.attaque[iDodo].divDodoo.height;
    dodo.style.top = dodoAvance.attaque[iDodo].dodoo.top;
    dodo.style.left = dodoAvance.attaque[iDodo].dodoo.left;
    iDodo++;
    if (iDodo === dodoAvance.attaque.length) {
      iDodo = 0;
    }
    if (play.style.display == "none" && playAgain.style.display == "none") {
      divDodo.style.left = parseFloat(divDodo.style.left) - 15 + "px";
    }
  }, 100);
};
dodoAvanceAgain();

//b. il explose (si collision avec héros qui cogne):
var iExplose = 0;
var enTrainDexploser = false;
var idExplosion = 0;
var objetMelanie = {
  explosionExplose: function () {
    enTrainDexploser = true;
    idExplosion = setInterval(function () {
      divExplosion.style.width =
        objetExplose.explose[iExplose].divExplosionn.width;
      divExplosion.style.height =
        objetExplose.explose[iExplose].divExplosionn.height;
      explosion.style.top = objetExplose.explose[iExplose].explosionn.top;
      explosion.style.left = objetExplose.explose[iExplose].explosionn.left;
      divExplosion.style.display = "block";
      iExplose++;

      if (iExplose == objetExplose.explose.length) {
        divExplosion.style.display = "none";
        window.clearInterval(idExplosion);
        enTrainDexploser = false;
        iExplose = 0;
      }
    }, 30);
  },
};
