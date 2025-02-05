console.log("A");
console.log("r");
console.log("k");
console.log("a");
console.log("j");


function sayMyName() {
    console.log("A");
    console.log("r");
    console.log("k");
    console.log("a");
    console.log("j");
}

sayMyName   //Reference
sayMyName() //Excution


// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
      
// } 

// addTwoNumber()
// addTwoNumber(3,4)
// addTwoNumber(3,null)


// const result = addTwoNumber(3,9)
// console.log("Result : ", result);  // undefined value of result

function addTwoNumber(num1, num2) {
    const result = num1 + num2;
    return result
    // or another mrthod is
    // return num1 + num2
} 

const result = addTwoNumber(3,9)
// console.log("Result : ", result);  

function loginUserMessage(username) {

    if (username == undefined) {
        console.log("Plz enter your username");
        return
        
    }
    return `${username} just logged in`

    }


// loginUserMessage("Arkaj")       // This wiil not display the result 
// console.log(loginUserMessage("Arkaj"))  // this will
// console.log(loginUserMessage()) 

// function calculateCartPrice(num1) {
//     return num1
    
// }

// console.log(calculateCartPrice(200,333,444)); // output = 200      it will not displY 333, 444
 // To achive this use thic method -:
 
function calculateCartPrice(...num1) {
    return num1
    
}

console.log(calculateCartPrice(200,333,444)); // this will give you an array
    

const user = {
    name : "Arkaj", 
    age : 19,
}

function handalObject(anyobject) {
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
    
    
}

// this is also valid :-
// function handalObject(user) {
//     console.log(`Username is ${user.name} and age is ${user.age}`);
    
    
// }

 handalObject(user)

handalObject( {
    name : "Raj",
    age : 20
})


const myNewArray = [200,100,500]

function returnSecondValue(getArray) {

    return getArray[1]
    
}
console.log(returnSecondValue(myNewArray));
