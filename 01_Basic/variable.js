const accountId = 112233;
let accountEmail = "arkajkadam@gmail.com";
var accountPassword = "123456";
accountCity = "sangli" ;
let accountState ;  // this will outpu as 'undefined' as no value is declared.

// accountId = 121212;
// console.log(accountId);
// Not valid because of variable declared is 'const'.

accountEmail = "abc@gmail.cob";
accountPassword = '212121';
accountCity = "kolhapur";

console.log(accountId);
/*
   this is another methos if Commenting.


   *we dont use 'var' because of issue of funtional scop 
   instad of use 'let'

*/

console.table([accountEmail ,accountPassword, accountCity, accountState ]);

  