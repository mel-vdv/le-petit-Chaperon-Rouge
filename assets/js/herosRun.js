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
var iCourt = 0;
var enTrainDeCourir = false;
var direction = "devant";

var idIntervalCourt = 0;
var decor = window.document.getElementById("decor");
decor.style.left = "0px";
window.addEventListener("keydown", function (evnt) {
  var xxx = evnt.key;
  //MARCHE AVANT :
  if (xxx == "ArrowRight") {
    if (!enTrainDeCourir && !mort) {
      hero.src = "assets/images/herosversion2.png";
      direction = "devant";
      enTrainDeCourir = true;
      idIntervalCourt = window.setInterval(function () {
        divHero.style.width = actions.run[iCourt].divHeros.width;
        divHero.style.height = actions.run[iCourt].divHeros.height;
        hero.style.top = actions.run[iCourt].heros.top;
        hero.style.left = actions.run[iCourt].heros.left;
        iCourt++;

        if (iCourt === actions.run.length) {
          iCourt = 0;
        }
        divHero.style.left = parseFloat(divHero.style.left) + 15 + "px";
        if (parseFloat(divHero.style.left) > 700) {
          decor.style.left = parseFloat(decor.style.left) - 15 + "px";
        }

        enTrainDeCourir = true;
      }, 60);
    }
  }

  //MARCHE ARRIERE :
  if (xxx == "ArrowLeft") {
    if (!enTrainDeCourir && !mort) {
      hero.src = "assets/images/herosversion2gauche.png";
      direction = "gauche";
      enTrainDeCourir = true;
      idIntervalCourt = window.setInterval(function () {
        divHero.style.width = actions.runGauche[iCourt].divHeros.width;
        divHero.style.height = actions.runGauche[iCourt].divHeros.height;
        hero.style.top = actions.runGauche[iCourt].heros.top;
        hero.style.left = actions.runGauche[iCourt].heros.left;
        iCourt++;
        if (iCourt === actions.runGauche.length) {
          iCourt = 0;
        }
        if (parseFloat(divHero.style.left) > 0) {
          divHero.style.left = parseFloat(divHero.style.left) - 15 + "px";
          if (parseFloat(divHero.style.left) > 700) {
            decor.style.left = parseFloat(decor.style.left) + 15 + "px";
          }
        }

        enTrainDeCourir = true;
      }, 60);
    }
  }

  if (mort) {
    clearInterval(idIntervalCourt);
  }
});

//il s'arrete quand keyup:

window.addEventListener("keyup", function (e) {
  if (e.key == "ArrowRight" || e.key == "ArrowLeft") {
    window.clearInterval(idIntervalCourt);

    //ON REINITIALISE AU CAS Où on apppuie a nouveau sur droite ou gauche:
    enTrainDeCourir = false;
  }
});
