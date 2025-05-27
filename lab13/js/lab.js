/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Leslie Hernandez-Nava
   Date: 05/26/25
*/

//Create a "FizzBuzz" function similar to how we did in class.
//Loop through numbers 1 to 200, listing them as you go
//If the number is a multiple of 3, if should print "Fizz!"
//If the number is a multiple of 5, it should print "Buzz!"
//If the number is a multiple of 7, it should print "Boom!"
//If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
//Make it so the output of your program appears in your output div.




function fizzBuzzBoom(){
   let oneLongString = "";

   for (let i = 1; i<= 200; i++){
      let str = "";

      if (i % 15 == 0) {
         str ="Fizzbuzz";

      } else if (i % 21 == 0){
         str = "Fizzboom";

      } else if (i % 35 == 0){
         str = "Buzzboom";

      } else if (i % 3 == 0) {
         str = "Fizz";

      } else if (i % 5 == 0){
         str = "Buzz";

      } else if (i % 7 == 0){
         str = "Boom!";

      } else {
         str= i ;
      }

      oneLongString += i + " " + str + "<br>";
   }

   $("#output").html(oneLongString);

}

fizzBuzzBoom();
