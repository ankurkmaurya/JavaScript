

//Empty Return 
function doNothing() { /* empty */ }

console.log("Empty Return - " + (doNothing() === undefined) ); // true


//Function Expression
function sayHi() {
    console.log("Hello from Function Expression");
  }
  
 console.log( sayHi ); // shows the function code


let func = sayHi;    

func();  // (3) run the copy (it works)!
sayHi(); // 







