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
    parseFloat(divHero.style.top) < 600
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
