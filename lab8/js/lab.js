// index.js - Lab 8 - Anon functions and CallBacks 
// Author: Leslie Hernandez-Nava, leerhern@ucsc.edu
// Date: 05/06/25

//Define the array
let array = [1, 4, 6, 8, 10, 14];

console.log("This is our starting array:" + array);

//This function multiplies input number
function multiply(num){
    var results = num * num
    return results;
}

console.log("These are the numbers that were multiplied:" + array.map(multiply));

//This anonymous function returns the array
const multiplyByTwoPointFive = array.map(function(num){
    return num * 2.5;
});

console.log("What if we returned and multiply this number by 2.5..." + multiplyByTwoPointFive);

var mapResults = "Here are the results of the lab! <br>";

$("#output").append(mapResults);

$("#output").append("<br>"+"Here is the original array: "+ array.join(","));

$("#output").append("<br>"+"Here's the array multiplied by two point five: " + multiplyByTwoPointFive.join(","));

$("#output").append("<br>"+"The numbers multiplied are: "+ array.map(multiply).join(","));





