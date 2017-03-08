   /*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-5

      Author: Thomas Taylor
      Date:   March 8, 2017

      Filename: script.js
   */




"use strict";

var formValidity = true;


/* remove default value and formatting from selection list */
function removeSelectDefault(){
    var selectBox = document.getElementById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";
}
/* remove fallback placeholder text */

function zeroPlaceholder() {
	 var instrBox = document.getElementById("instructions");
	 instrBox.style.color = "black";
	 if (instrBox.value === instrBox.placeholder) {
		 instrBox.value = "";
	 }
 }
 /* restore placeholder text if box contains no user entry */
 function checkPlaceholder() {
	 var instrBox = document.getElementById("instructions");
	 if (instrBox.value === "") {
		 instrBox.style.color = "rgb(178,184,183)";
		 instrBox.value = instrBox.placeholder;
	 }
 }
 /* add placeholder text for browsers that don't support placeholder attribute*/
 function generatePlaceholder() {
	 if (!modernizr.input.placeholder) {
		 var instrBox = document.getElementById("instructions");
		 instrBox.value = instrBox.placeholder;
		 instrBox.style.color = "rgb(178,184,183)";
		 if (instrBox.addEventListener){
			 instrBox.addEventListener("focus", zeroPlaceholder, false);
			 instrBox.addEventListener("blur", checkPlaceholder, false);
		 } else if (instrBox.attachEvent){
			 instrBox.attachEvent("onfocus", zeroPlaceholder);
			 instrBox.attachEvent("onblur", checkPlaceholder);
		 }
	 }
 }
function validateRequired(){
	 var inputElements = document.querySelectorAll("input[required]");
	 var errorDiv = document.getElementById("errorMessage");
	 var crustBoxes = document.getElementsByName("crust");
	 var fieldsetValidity = true;
	 var elementCount = inputElements.length;
	 var currentElement;
	 
	 try {
		 for (var i = 0; i < elementCount; i++) {
			 currentElement = inputElements[i];
			 if (currentElement.value === ""){
				 currentElement.style.background = "rgb(255,233,233)";
				 fieldsetValidity = false;
			 } else {
				 currentElement.style.background = "white";
			 }
		 }
		 currentElement = document.querySelectorAll("select")[0];
		 
		 if (currentElement.selectedIndex === -1) {
			 currentElement.style.border = "1px solid red";
			 fieldsetValidity = false;
		 } else {
			 currentElement.style.border = "";
		 }
		 if (!crustBoxes[0].checked && !crustBoxes[1].checked) {
			 crustBoxes[0].style.outline = "1px solid red";
			 crustBoxes[1].style.outline = "1px solid red";
			 fieldsetValidity = false;
		 } else {
			 crustBoxes[0].style.outline = "";
			 crustBoxes[1].style.outline = "";
		 }
		 if (fieldsetValidity === false) {
			 throw "Please complete all required fields."
		 } else {
			 errorDiv.style.display = "none";
		 }
	 }
	 catch(msg) {
		 errorDiv.style.display = "block";
		 errorDiv.innerHTML = msg;
		 formValidity = false;
	 }
 }
 
 function validateForm(evt) {
	 var formValidity = false;
	 if (evt.preventDefault) {
		 evt.preventDefault();
	 } else {
		 evt.returnValue = false;
	 }
	 formValidity = true;
	 validateRequired();
	 if (formValidity === true) {
		 document.getElementById("errorMessage").innerHTML = "";
		 document.getElementById("errorMessage").style.display = "none";
		 document.getElementsByTagName("form")[0].submit();
	 } else {
		 document.getElementById("errorMessage").innerHTML = "Please complete the highlighted fields.";
		 document.getElementById("errorMessage").style.display = "block";
		 scroll(0,0);
	 }
 }

/* run initial form configuration functions */
function setUpPage(){
    removeSelectDefault();
    generatePlaceholder();
}

 function createEventListeners() {
	 var orderForm = document.getElementsByTagName("form")[0];
	 if (orderForm.addEventListener) {
		 orderForm.addEventListener("submit", validateForm, false);
	 } else if (orderForm.attachEvent) {
		 orderForm.attachEvent("onsubmit", validateForm);
	 }
 }

/* run setup functions when page finishes loading */

if(window.addEventListener){
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent){
    window.attachEvent("onload", setUpPage);
}

