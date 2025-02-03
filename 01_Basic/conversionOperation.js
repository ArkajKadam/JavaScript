let score = 33;
let score1 = "33";

console.log(typeof score);
console.log(typeof score1);


let valueinNumber = Number(score1) 
console.log(typeof valueinNumber)
// this will convert datatype thing to number.
//this can be also string or boolean and more

/*

if the values in score is -          this will be output   


               score1 = "33abe"   ==> NaN (not a number)
               score1 = null      ==> 0
               score = undefined  ==> NaN
               score = ture       ==> 1
               score = false      ==> 0


*/


let isLoggedIn = 1

let valueInBoolean = Boolean(isLoggedIn)
 console.log(valueInBoolean);

/*
for this - 

     1         ==> true
     0         ==> false
     "string"  ==> false
     ""(empty) ==> true

*/


//************************* Operation************************************//


let value = 5
let negValue = -value
console.log(negValue); // give negative value

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); //for power
console.log(2/2);
console.log(2%2);

let str1 = "Arkaj"
let str2 = "kadam"

let str3 = str1 + str2
console.log(str3);

// main problem

console.log("1" + 2);     //output = 12
console.log(1 + "2");     //output = 12
console.log("1" + 2 + 2);     //output = 122
console.log(1 + 2 + "2");     //output = 32


