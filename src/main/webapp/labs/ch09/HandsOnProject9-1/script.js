/* 
Hands-on Project 9-1
name: Thomas Taylor
Date: April 4, 2017
Filename: script.js
 */

"use strict";

function populateInfo(){
    if(location.search){
        var greeting = location.search;
        greeting = greeting.replace("+", " ");
        greeting = greeting.substring(greeting.lastIndexOf("=") + 1);
        document.getElementById("greetingtext").innerHTML = decodeURIComponent(greeting);
    }
}

if (window.addEventListener){
    window.addEventListener("load", populateInfo, false);
}else if (window.attachEvent){
    window.attachEvent("onload", populateInfo);
}


