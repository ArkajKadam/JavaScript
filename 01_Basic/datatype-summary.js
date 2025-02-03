// types of Data :-
//           1)Premitive
//           2)Reference(Non primitive)




// primitive

/*
7 types =  String              let name = "Arkaj"
           Number              const score = 100;
           Boolean             let isLoggedIn = true
           null                const tempareture = null      if we use "type of" funtion then it will give output as "object"
           undefined           let email ;                   if we use "type of" funtion then it will give output as "undefined"
           Symbol              const id = Symbol("123")
                               const anotherId = Symbol("123")

                               console.log( id === anotherId)           // output = false



           BigInt              const bigNumber =  2342343434132424213421n

*/


// Reference (Non primitive)


types = Array
        Object
        Function     //if we use "type of" funtion then it will give output as "object funtion"
//Array
 const heros = ["Hanuman", "shaktiman", "Chota beem"]
 console.log(typeof heros);


//object
let myObj = {
    name : "Arkaj",
    age : 20,
    id : 123123
}
console.log(typeof myObj);


// Function 
const myfunction = function(){
    console.log("Hello Arkaj");
    
}
console.log(typeof myfunction);




//************************************************ Memores **********************************************************

// types of Memories :-
//           1) Stack (Premitive)
//           2) Heap (Non primitive)

let myName = "Arkaj"

let anotherName = myName

anotherName = "Raj"

console.log(myName);
console.log(anotherName);


let user1 = {
    email : "abc@gmail.com",
    account : "abc@sbi"
}

let user2 = user1

user2.email = "arkaj@gmail.com"

console.log(user1.email);
console.log(user2.email);

