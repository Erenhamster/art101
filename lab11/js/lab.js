/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/17/25
*/

console.log("lol");
//event listener for button
$("#inputButton").click(function(){

  console.log("click");

//get value of input field
let userName = $("user-name").val();

//select output div and sort them
$("#output").append(userName);

});

