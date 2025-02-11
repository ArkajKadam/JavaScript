//const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)
// console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num>4                                         // use "return" when use "{}"
// })
// console.log(newNums);


// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);



const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => (num +10))
// console.log(newNums);

// const newNums = myNums.map( (num) => { 
//     return num +10
// } )
// console.log(newNums);


const newNums = myNums
                      .map( (num) => num * 10)
                      .map( (num) => num + 1) // the result of previous methos will be input to the next method
                      .filter(  (num) => num >= 50)




console.log(newNums);

