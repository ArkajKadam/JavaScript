class User{
    constructor(username , email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    } 

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const UserOne = new User("Arkaj", "abc@Gmail.com", "123")

console.log(UserOne.encryptPassword());
console.log(UserOne.changeUserName());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername()); 