
//Arrow Functions

//Multiline arrow functions
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( "Multiline Arrow functions - " + (sum(1, 2))); // 3

//Singleline arrow functions
  let double = n => n * 2;
  // roughly the same as: let double = function(n) { return n * 2 }
  
  console.log( "Singleline Arrow functions - " + (double(3)) ); // 6

