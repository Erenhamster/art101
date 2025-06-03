/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/27/25
*/

$("#activate").click(function(){
    console.log("clickk");
// Using the core $.ajax() method
    $.ajax({

    // The URL for the request (from the api docs)
        url: "https://yesno.wtf/#api",

    // The data to send (will be converted to a query string)
     data: { 

            // here is where any data required by the api 
            //   goes (check the api docs)
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif",
          },

    // Whether this is a POST or GET request
        type: "GET",

    // The type of data we expect back
        dataType : "json",

    // What do we do when the api call is successful
    //   all the action goes in here
        success: function(data) {
        // do stuff
            console.log(data);
        //extract answer from data
            let answer = data.answer;
        //extract image from data
            let imgURL = data.image;
        //build image HTML
            let imageHTML = "<img src = '" + imgURL + "'>";
        //Inset the output in the output div
            $("#output").html("<h1>" + answer);
            $("#output").append("<h1>" + imageHTML);
        }, 
    // What we do if the api call fails
        .fail(function(jqXHR, textStatus, errorThrown) { 
        // do stuff
         console.log(errorThrown + "Error:" + textStatus);
        });
    })

})