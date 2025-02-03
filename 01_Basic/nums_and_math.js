const score = 100

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 23.4888

console.log(anotherNumber.toPrecision(3));


const hundreds = 10000000

console.log(hundreds.toLocaleString);
console.log(hundreds.toLocaleString('en-IN'));



//****************************** MATHS*********************************************************************** */


console.log(Math); //by default library

console.log(Math.abs(-10));

console.log(Math.round(10.6));// round off
console.log(Math.ceil(10.6)); // choose top value
console.log(Math.floor(10.6));// choose lower value
console.log(Math.min(10,3,4,5,2,6));
console.log(Math.max(10,3,4,5,2,6));



console.log(Math.random()); // always give number between 0 to 1
console.log(Math.random()*10 + 1); 
console.log((Math.floor(Math.random()*10) + 1));

const min = 10
const max = 40

 console.log(Math.floor(Math.random() * (max - min + 1)) + min);







