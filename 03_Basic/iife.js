// Immedialy Invoked funtion Expression (IIFE)
// it is used to prevent globle scope polution
// function chai() {
//     console.log(`DB CONNECTED`);
     
// } 
// chai()




//for iife

(function chai() {
    console.log(`DB CONNECTED`);
     
} ) () ; // we have to use semicolon to end the envoced funtion .



// ()- first parathises for funtion defination
// ()- second is for excution




( () => {
    console.log('DC CONNECTED');
    
} ) () ;




( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} ) ("Arkaj")