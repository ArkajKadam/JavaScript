//if

// comparesion ongotpointercapture  :
//            < , > , <=, >=, == , != , ===(to check datatype), !== 



// const temp = 47;
// if (temp <50) {
//     console.log("less than 50");
    
// }else{
// console.log("greater than 50")
// }
// console.log("Excuted");


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
    
// }

// console.log(`User power : ${power}`);       Cannot work outside the scope




// const balance = 1000

// if (balance > 500) console.log("Test"), console.log("Test2");    // Not a good code

// if (balance < 500) {
//     console.log("Less than 500");
    
// } else if(balance<750 ) {
//     console.log("Less than 750");
// }else if(balance<900 ) {
//     console.log("Less than 900");
// }else  {
//     console.log("Less than 1200");
// }





const userLoggedin = true
const debitCart = true
const userLoggedinFromGoogle = true
const userLoggedinFromGmail = false

if (userLoggedin && debitCart) {
    console.log("Allow to shop");
    
}

if (userLoggedinFromGoogle || userLoggedinFromGmail) {
    console.log("User looged in");
    
}
