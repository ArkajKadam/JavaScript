const user = {
    userName : "Arkaj",
    loginCount : 9,
    singedIn : true,


    getUserDetail : function () {
        console.log("Got user detail from database");
        console.log(`UserName : ${this.userName}`);
        console.log(this);
        
    }


 }
// console.log(user.userName);
// console.log(user.getUserDetail());
// console.log(this);

// const promiseOne  = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.logInCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this
    this.greeting = function(username){
        console.log(`Welcome ${this.username}`);
    greeting()
    }
}

const UserOne = new User("Arkaj", 7, true)
const UserTwo = new User("Chai aur code",5,false)
console.log(UserOne);
console.log(UserTwo);

// Nte
// Step 1 : it create empty object called instance
// Step 2 :it call constrater funtion it take argument
// Step 3 :this keyword inject arguments you have written
// Step 4 :we got

