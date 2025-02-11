const myNums = [1,2,3]

// myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`accumalator : ${acc} and current value : ${currVal}`);
    
//     return acc + currVal
// }, 0)

// console.log(myTotal);


const myTotal = myNums.reduce( (acc, currVal) => ( acc + currVal),0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "JS",
        price : 1499
    },
    {
        itemName : "Java",
        price : 1999,
    },
    {
        itemName : "CPP",
        price : 1799
    },
    {
        itemName : "Python",
        price : 2999
    },
]



const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price),0)

console.log(priceToPay);
