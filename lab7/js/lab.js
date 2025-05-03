// index.js - Lab 7 - Functions 
// Author: Leslie Hernandez-Nava, leerhern@ucsc.edu
// Date: 04/28/25

// Constants

// Functions

// Variables

//sorting name
function sortUserName(userName) {
  return userName.toLowerCase().split("").sort().join("");
}

//sorting name in reverse
function reverseUserName(userName){
  return userName.toLowerCase().split("").reverse().join("");
}

//sorting name in uppercase (not in reverse) credited to Stack Overflow from Tom Key (https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript)
function upperCase(userName) {
  return userName.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}

//function to print the name from the sorted name
function printName() {

var userName = window.prompt("Hi, may I please have your name?");
document.writeln("<style>:root {---textlen: " + userName.length + ";}</style>");

var sortedName = sortUserName(userName);
document.writeln("Here, you can have it back: " + sortedName + "</br></br>");

var reversedUserName = reverseUserName(userName);
document.writeln("Or you can have this back: " + reversedUserName + "</br></br>");

var upperedCase = upperCase(userName);
document.writeln("Here's your name in upper case too!: " + upperedCase + "</br></br>");

} 


// Call the function
printName();

