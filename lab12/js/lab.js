/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/21/25
*/

//Credit to w3 school for the DOM elements: https://www.w3schools.com/jsref/met_element_addeventlistener.asp

housesArray = [
   {
      title: "Lord of the Rings",
      text: "The house sorted you to the world of full of elves, dwarfs, and hobbits. Where you'll be taken on an adventure, an unexpected journey."
   },
   {
      title: "Star Wars",
      text: "The house sorted you to the world that revolves around the force. Be careful, who knows if the Dark Side reels you in."
   },
   {
      title: "Back to the Future",
      text: "The house sorted you to the world that involves accidental time traveling where you meet your young parents?"
   },
   {
      title: "Hogwarts",
      text: "The house sorted you to the world full of magic and mischiefs."
   }
]

// Uses user input and button to sort into a magic type.
document.getElementById("button").addEventListener("click", function() {
   // Value of the input field 
  const name = document.getElementById("input").value;
  // Value from the sortingHat function  
  const houseName = sortingHat(name);
  const houseInfo = housesArray.find(h => h.title === houseName);
  // Display the result in the result div
  document.getElementById("output").innerHTML = `
    <h2>${houseInfo.title}</h2>
    <p>${houseInfo.text}</p>`;
});

function sortingHat(str) {
  let len = str.length;
  let mod = len % 4;
  if (mod == 0) {
    return "Lord of the Rings"
  }
  else if (mod == 1) {
    return "Star Wars"
  }
  else if (mod == 2) {
    return "Back to the Future"
  }
  else if (mod == 3) {
    return "Hogwarts"
  }
}
