const myArray = [0,1,2,3,4,5,6,7]
console.log(myArray[1]);

myArray.push(8)
console.log(myArray);

myArray.push(9)
console.log(myArray);

myArray.pop(4)
console.log(myArray);



myArray.unshift(-1)
console.log(myArray);


myArray.shift()
console.log(myArray);

console.log(myArray.includes(4));
console.log(myArray.includes(90));

console.log(myArray.indexOf(4));

const newArr = myArray.join()
console.log(myArray);
console.log(newArr);
console.log(typeof(newArr));


// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,4)
console.log(myn1);

console.log("B ", myArray);
const myn2 = myArray.splice(1,4)

console.log("C ", myArray);
console.log(myn2);


