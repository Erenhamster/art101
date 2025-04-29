// index.js - Lab 6 - Arrays & Objects 
// Author: Leslie Hernandez-Nava, leerhern@ucsc.edu
// Date: 04/28/25

// Constants

// Functions

// Variables

let myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 2004,
  name: "Stacy",
  age: function() {
    return 2025 - this.year;
  },
}

let myTransport = [ " Ford Taurus", " bus", " rides from roommates", " walking" ];

//Output
document.writeln("Kinds of transportation that I use:", myTransport, "<br>");
//Object written into the document
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");