 //to ways to declare
     // singleton
     // constrater throw

const JsUser ={
    name : 'Arkaj',
    age : 20,
    locaton : 'Sangli',
    email : 'arkaj@gmail.com',
    isLoggedIn : true,
}

console.log(JsUser.name);
// console.log(JsUser[name]);
console.log(JsUser["name"]);


JsUser.email = "abc@gmail.com"

//Object.freeze(JsUser)

JsUser.email = "rajkumar@gmail.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}


JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


