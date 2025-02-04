const MCU = ["Thor", "Ironman", "Spiderman"]
const DC = ["Batman", "Superman", "Jocker"]

// MCU.push(DC)
// console.log(MCU);
// console.log(MCU[3][2]);

// const combine = MCU.concat(DC) // "contacat" combile two or more array
// console.log(combine);

// const all_heroes = [...DC, ...MCU]
// console.log(all_heroes);


const anotherArray = [1,2,3,[4,5,6],7,8,[1,2,3,[1,2,3,4]]]
const useableArray = anotherArray.flat(Infinity)

console.log(useableArray);

console.log(Array.isArray("Arkaj"));
console.log(Array.from("Arkaj"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

