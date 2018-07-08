"use strict";

var selectorDisena = document.querySelector(".title__disena");
var formularioDisena = document.querySelector(".form__disena--fontsColors");
var selectorRellena = document.querySelector(".titulo__rellena");
var formularioRellena = document.querySelector(".form__rellena");
var selectorComparte = document.querySelector(".container__comparte--icon");
var formularioComparte = document.querySelector(".form__comparte");
var tarjetaCreada = document.querySelector(".container--comparte-created");
var botonCrearTarjeta = document.querySelector(".container__comparte--buttonstyle");
var botonrotado1 = document.querySelector(".move1");
var botonrotado2 = document.querySelector(".move2");
var botonrotado3 = document.querySelector(".move3");



function desplegarDisena() {
  if (formularioDisena.classList.contains("form__oculto")) {
    formularioDisena.classList.remove("form__oculto");
    formularioRellena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
    botonrotado1.classList.add("rotate");
  } else {
    formularioDisena.classList.add("form__oculto");
    botonrotado1.classList.remove("rotate");
  }
}

function desplegarRellena() {
  if (formularioRellena.classList.contains("form__oculto")) {
    formularioRellena.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioComparte.classList.add("form__oculto");
    botonrotado2.classList.add("rotate");
  } else {
    formularioRellena.classList.add("form__oculto");
    botonrotado2.classList.remove("rotate");
  }
}

function desplegarComparte() {
  if (formularioComparte.classList.contains("form__oculto")) {
    formularioComparte.classList.remove("form__oculto");
    formularioDisena.classList.add("form__oculto");
    formularioRellena.classList.add("form__oculto");
    botonrotado3.classList.add("rotate");
  } else {
    formularioComparte.classList.add("form__oculto");
    botonrotado3.classList.remove("rotate");
  }
}

function crearTarjeta() {
  if (tarjetaCreada.classList.contains('form__oculto')) {
    tarjetaCreada.classList.remove('form__oculto');
  } else {
    tarjetaCreada.classList.add('form__oculto');
  }
}
selectorDisena.addEventListener('click', desplegarDisena);
selectorRellena.addEventListener('click', desplegarRellena);
selectorComparte.addEventListener('click', desplegarComparte);
botonCrearTarjeta.addEventListener('click', crearTarjeta);

//Laura e Irene


var nameField = document.querySelector('.input__name');
var roleField = document.querySelector('.input__job');


function writeData(event) {
  var guiltyElement = event.currentTarget;
  var targetID = guiltyElement.getAttribute('data-donde');
  
  document.querySelector('#' + targetID).innerHTML = guiltyElement.value;
}

nameField.addEventListener('keyup', writeData);
roleField.addEventListener('keyup', writeData);



///foto editor//

var fr = new FileReader();

var uploadBtn = document.querySelector(".form__rellena--button");

var fileField = document.querySelector("#imagen");
var profileImage = document.querySelector(".visor__image-foto");
var formImage = document.querySelector(".form__rellena--reload ");

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.src = fr.result;
  formImage.style.backgroundImage = "url(" + fr.result + ")";
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
uploadBtn.addEventListener("click", fakeFileClick);

