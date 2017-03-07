/*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-1

      Author: Thomas Taylor
      Date:   March 7, 2017

      Filename: script.js
   */
  
  "use strict";
  var formValidity = true;
  
  function validateRequired(){
      var inputElements = document.querySelectorAll("#contactInfo input");
      var errorDiv = document.getElementById("errorText");
      var elementCount = inputElements.length;
      var requiredValidity = true;
      var currentElement;
      
      try{
          for (var i = 0; i < elementCount; i++){
              // validate all input elements in fieldset
              currentElement = inputElements[i];
              if (currentElement.value === ""){
                  currentElement.style.background = "rgb(255,233,233)";
                  requiredValidity = false;
              } else{
                  currentElement.style.background = "white";
              }                  
          }
          if (requiredValidity === false){
              throw "Please complete all fields.";
          }
          errorDiv.style.display = "none";
          errorDiv.innerHTML = "";
      }
      catch(msg){
          errorDiv.style.display = "block";
          errorDiv.innerHTML = msg;
          formValidity = false;
      }
  }
  
  
  /* create event listeners */
  function createEventListeners(){
      var form = document.getElementsByTagName("form")[0];
      if (form.addEventListener){
          form.addEventListener("submit", validateForm, false);
      } else if (form.attachEvent){
          form.attachEvent("onsubmit", validateForm);
      }
  }
  
  function validateForm(evt){
      if (evt.preventDefault){
          evt.preventDefault(); // prevent form from submitting
      } else {
          evt.returnValue = false; // prevent form from submitting in IE8
      }
      formValidity = true; // reset value for revalidation
      validateRequired();
      if (formValidity === true){
          document.getElementsByTagName("form")[0].submit();
      }
  }
  
  /* run setup functions when page finishes loading */
  if(window.addEventListener){
      window.addEventListener("load", createEventListeners, false);
  } else if (window.attachEvent){
      window.attachEvent("onload", createEventListeners);
  }
  


