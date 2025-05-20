/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/17/25
*/



//Sort characters of a string in alpphabetical order
function sortString(inputString){
//converting string to an array and back again to sort
return inputString.split('').sort().join('');

}

function anagramString(inputString){
  return inputString.split('').anagramString().join('');
}

//click listener for button
$("#submit").click(function(){
  //get value for input
  const userName = $("#user-name").val();
  //username sorted
  userNameSorted = sortString(userName);
  //append a new div for output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

