   /*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-4

      Author: Thomas Taylor
      Date:   March 8, 2017

      Filename: script.js
   */


"use strict";

/* remove defaulst value and formatting from selection list */
function removeSelectDefault(){
    var selectBox = document.getElementById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.bowShadow = "none";
}

function zeroPlaceholder() {
	 var instrBox = document.getElementById("instructions");
	 instrBox.style.color = "black";
	 if (instrBox.value === instrBox.placeholder) {
		 instrBox.value = "";
	 }
 }
 
 function checkPlaceholder() {
	 var instrBox = document.getElementById("instructions");
	 if (instrBox.value === "") {
		 instrBox.style.color = "rgb(178,184,183)";
		 instrBox.value = instrBox.placeholder;
	 }
 }
 
 function generatePlaceholder() {
	 if (!modernizr.input.placeholder) {
		 var instrBox = document.getElementById("instructions");
		 instrBox.value = instrBox.placeholder;
		 instrBox.style.color = "rgb(178,184,183)";
		 if (instrBox.input.placeholder){
			 instrBox.addEventListener("focus", zeroPlaceholder, false);
			 instrBox.addEventListener("blur", checkPlaceholder, false);
		 } else if (instrBox.attachEvent){
			 instrBox.attachEvent("onfocus", zeroPlaceholder);
			 instrBox.attachEvent("onblur", checkplaceholder);
		 }
	 }
 }


/* run initial form configuration functions */
function setUpPage(){
    removeSelectDefault();
    generatePlaceholder();
}

/* run setup functions when page finishes loading */

if(window.addEventListener){
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent){
    window.attachEvent("onload", setUpPage);
}

