"use strict";

var score = 0;
//var collisionChampiBon;
//var collisionPomme;
var clef1 = window.document.getElementById("clef1");
var clef2 = window.document.getElementById("clef2");
var clef3 = window.document.getElementById("clef3");

var coffre1 = window.document.getElementById("coffre1");
var coffre2 = window.document.getElementById("coffre2");
var coffre3 = window.document.getElementById("coffre3");

var msg1 = window.document.getElementById("msg1");
var msg2 = window.document.getElementById("msg2");
var msg3 = window.document.getElementById("msg3");
var msg4 = window.document.getElementById("msg4");

var play = window.document.getElementById("play");

var panneau = window.document.getElementById("panneau");

function gestionDuScore() {
  if (mort) {
    score = 0;
  }
  if (collisionPomme) {
    score = score + 5;
    collisionPomme = false;
  }
  if (collisionChampiBon) {
    score = score + 5;
    collisionChampiBon = false;
  }
  if (dodoPerdu) {
    score = score + 5;
    dodoPerdu = false;
    collisionDodo = false;
  }

  switch (score) {
    case 0:
      panneau.src = "assets/images/score0.png";
      break;
    case 5:
      panneau.src = "assets/images/score5.png";
      break;
    case 10:
      {
        panneau.src = "assets/images/score10.png";
        clef1.style.display = "block";
      }
      break;
    case 15:
      panneau.src = "assets/images/score15.png";
      break;
    case 20:
      panneau.src = "assets/images/score20.png";
      break;
    case 25:
      {
        panneau.src = "assets/images/score25.png";
        clef2.style.display = "block";
      }
      break;
    case 30:
      panneau.src = "assets/images/score30.png";
      break;
    case 35:
      panneau.src = "assets/images/score35.png";
      break;
    case 40:
      {
        panneau.src = "assets/images/score40.png";
        clef3.style.display = "block";
      }
      break;
    case 45:
      panneau.src = "assets/images/score45.png";
      break;
    case 50:
      panneau.src = "assets/images/score50.png";
      break;
  }

  // quand on clic sur la clé1, le coffre 1 s'ouvre:
  clef1.addEventListener("click", function () {
    coffre1.src = "assets/images/coffreouvert.png";
    clef1.style.top = "-480px";
    clef1.style.left = "-800px";
    play.style.display = "block";
    msg1.className = "effetParchemin";
  });

  //clé2, coffre2:
  clef2.addEventListener("click", function () {
    coffre2.src = "assets/images/coffreouvert.png";
    clef2.style.top = "-480px";
    clef2.style.left = "-700px";
    play.style.display = "block";
    msg2.className = "effetParchemin";
  });

  //clé 3, coffre3:
  clef3.addEventListener("click", function () {
    coffre3.src = "assets/images/coffreouvert.png";
    clef3.style.top = "-480px";
    clef3.style.left = "-600px";
    play.style.display = "block";
    msg3.className = "effetParchemin";
  });

  // si on clic sur play : le message 1 disparait:
  play.addEventListener("click", function () {
    play.style.display = "none";
    msg1.className = "parcheminInvisible";
    msg2.className = "parcheminInvisible";
    msg3.className = "parcheminInvisible";
  });

  //gestion des coffres:
  if (score == 0) {
    clef1.style.display = "none";
    clef2.style.display = "none";
    clef3.style.display = "none";
    //pommeA.style.left='932px'; pommeB.style.left='1000px';pommeC.style.left='1132px';
  }
  if (score < 10) {
    coffre1.src = "assets/images/coffreferme.png";
    coffre2.src = "assets/images/coffreferme.png";
    coffre3.src = "assets/images/coffreferme.png";
  }
  if (score > 10 && score < 25) {
    coffre2.src = "assets/images/coffreferme.png";
    coffre3.src = "assets/images/coffreferme.png";
  }
  if (score > 25 && score < 40) {
    coffre1.src = "assets/images/coffreouvert.png";
    coffre3.src = "assets/images/coffreferme.png";
  }
  if (score > 40) {
    coffre1.src = "assets/images/coffreouvert.png";
    coffre2.src = "assets/images/coffreouvert.png";
    coffre3.src = "assets/images/coffreouvert.png";
  }
  if (score == 50) {
    msg4.className = "effetParchemin";
    playAgain.style.display = "block";
    rejouer.style.display = "block";
  }
}
gestionDuScore();
