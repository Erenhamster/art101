// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();



$("#challenge, #problems, #results").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  $("#challenge").click($(this).toggleClass("special-section"))
});


$("#my-button").click(function(){
  let name=prompt("What's your name?");
  $("#welcome").html("Hello, " + name + "!");
  })