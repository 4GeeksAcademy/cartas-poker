/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let iconTop = document.getElementById("palos");
  let iconBotton = document.getElementById("palos");
  let palos = ["♦", "♥", "♠", "♣"];

  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomPalos = [Math.floor(Math.random() * palos.length)];
  let randomNumeros = [Math.floor(Math.random() * numeros.length)];

  let elementPalos = document.getElementsByClassName("palos");
  let elementnumeros = document.getElementsByClassName("numeros");

  elementPalos[0].innerHTML = palos[randomPalos];
  elementPalos[1].innerHTML = palos[randomPalos];

  document.querySelector(".numeros").innerHTML = randomNumeros;
};
