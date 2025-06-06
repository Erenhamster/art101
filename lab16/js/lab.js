/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/27/25
*/

// ajax obj
  const comicObj = {
    url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
    data:{},
    type: "GET",
    datatype: "json"
  };

//button listener
  $("#activate").click(function(){
    console.log("clickk");
  //call ajax
    $.ajax(comicObj)
    
  //success callback
   .done(function(data){
    console.log("success!");
     console.log(data);
   
    
    //pull out relevant data from results
    let title = data.title;
    let num = data.num;
    let desc = data.transcript;
    let imageURL = data.img
    //put data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src= '${imageURL}' />`);
    $("#output").append(`<p class ='date'>Comic: ${num}</p>`);
    $("#output").append(`<p class='desc'>${desc}</p>`);
  })
  
  //fail callback
    .fail(function(xhr, status, error){
      //error handler
      console.error(error);
    })
  
  })