/*
   index.js - (Lab 9 - Libraries & jQuery) This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava, leerhern@ucsc.edu
   Date: 05/11/2025
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  $("#challenge").click($(this).toggleClass("special-section"))
});

$("#problem").append("<button id='button-problem'>Make Special</button>");

$("#button-problem").click(function(){
  $("#problem").click($(this)).toggleClass("special-section")
});

$("#result").append("<button id='button-result'>Make Special</button>");

$("#button-result").click(function(){
  $("#result").click($(this)).toggleClass("special-section")
});


$("#my-button").click(function(){
  let name=prompt("What's your name?");
  $("#welcome").html("Hello, " + name + "!");
  })