const name = "Arkaj"
const bodyCount = 1

console.log( name + bodyCount + " Names ");

console.log( `hello my ame is ${name} and my body count ${bodyCount}`);

// Backtickes ( `) : it is located before the (1) botten , at the top-left corner of your keyboard.

const gameName = new String("AK-classic")

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);

console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4) // Last value not include
console.log(newString);


const anotherString = gameName.slice(-7,3) 
console.log(anotherString);

const newString1 = "     Arkaj";
console.log(newString1);
console.log(newString1.trim());

const url = "https://arkaj.com/SmartVoting"

console.log(url.replace('arkaj', 'Raj'))

console.log(url.includes('.com'));








