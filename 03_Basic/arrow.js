const user = {
    username : "Arkaj",
    price : 999,


    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        // "this" refer current context
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


//  console.log(this);  // current contex empty


//  function chai() {
//     console.log(this);
    
//  }

//  chai()


// const chai = function () {
//     let username = "Arkaj"
//     console.log(this.username);
    
// }

// chai()


const chai = () => {
    let username = "Arkaj"
    console.log(this.username);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));




//const addTwo = (num1, num2) =>   (num1+num2)          //  {} = have to use return
 //console.log(addTwo(3,4));                            //  () = dont have to use return 

 //const addTwo = (num1, num2) => { username : "Arkaj"}   // wrong
 const addTwo = (num1, num2) => ({ username : "Arkaj"}) // right
 console.log(addTwo(3,4));                            //  () = dont have to use return 
