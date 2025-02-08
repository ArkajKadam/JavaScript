// const userEmail = "arkaj@gmil.com"

// if (userEmail) {
//     console.log("Got user emial");   //Output
    
// }else{
//     console.log("Dont have user email");
    
// }





// const userEmail = "" //Empty string

// if (userEmail) {
//     console.log("Got user emial");
    
// }else{
//     console.log("Dont have user email");  //Output
    
// }




// const userEmail = []  //Array

// if (userEmail) {
//     console.log("Got user emial");    //Output
    
// }else{
//     console.log("Dont have user email");
    
// }





// Note

// Falsly values
               //false, 0, -0, BigInt, "", undefined, NaN

 //Truthy values
               //"0", "false", " ", [] (Empty Array), {}(empty Object), function() (Empty function) , and all other except falsy values




// Nullish COalecing Operater (??) : null, undefinrd

let val1
// val1 = 5 ?? 10             //output = 5
// val1 = null ?? 10         //output = 10
//val1 = undefined ?? 15     //output = 15
val1 = null ?? 10 ?? 20      //output = 10





console.log(val1);




//Terniary Oeprater

// condion ? true : false
const icePrice = 90
icePrice <=80 ? console.log("Less than 80") : console.log("Greater than 80");

