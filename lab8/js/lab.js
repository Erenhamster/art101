// index.js - Lab 8 - Anon functions and CallBacks 
// Author: Leslie Hernandez-Nava, leerhern@ucsc.edu
// Date: 04/28/25

// Constants

// Functions

// Variables

//created named function, number array, and assigned it to a variable
function multiply(num){
  var results = num * num 
  return results;
}

//used map on array
let array = [1, 2, 3, 4, 5]

array.map(multiply);

//used a new anonymous function
const multiplyByTwoPointFive = array.map(function(num){
  return num * 2.5;
});

console.log("What if we returned and multiply this number by 2.5..." + multiplyByTwoPointFive);


 // Your map results data
 var mapResults = "Here are the results of the lab: ";

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").append("<br>" + "Here is the original array: " + array.join("<br>"));
 $("#output").append("<br>" + mapResults + multiplyByTwoPointFive.join("<br>"));
 $("#output").append("<br>" + "The multiplication is: " + array.map(multiply) ("<br>"));

