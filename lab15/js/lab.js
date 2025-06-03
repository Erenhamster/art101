/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/27/25
*/

const ajaxObj = {
   url: "https://yesno.wtf/api",
    type: "GET",
    dataType:"json"
}

$("#activate").click(function(){
    console.log("clickk");
// Using the core $.ajax() method
    $.ajax(ajaxObj)
    // What do we do when the api call is successful
    //   all the action goes in here
    .done(function(data) {
        // do stuff
        console.log("Success!");
        console.log(data);
        //extract answer from data
        let answer = data.answer;
        //extract image from data
        let imgURL = data.image
        //build image HTML
        let imageHTML = "<img src = '" + imgURL + "'>";
        //Inset the output in the output div
        $("#output").html("<h1>" + answer);
        $("#output").append("<h1>" + imageHTML);
    }) 
    // What we do if the api call fails
    .fail(function(XHR, textStatus, errorThrown) { 
        // do stuff
        console.log(errorThrown + "Error:" + textStatus);
    });
    

});