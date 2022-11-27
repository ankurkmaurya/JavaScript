Ref Link : https://javascript.info/function-basics

<b>Note :</b> 
Run main.js file as >>>> node main.js


# Functions
Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.


## Local variables
A variable declared inside a function is only visible inside that function.

```shell
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}


showMessage(); // Hello, Im JavaScript!

alert( message ); // <-- Error! The variable is local to the function
```


## Outer variables
A function can access an outer variable as well, for example:

```shell
   let userName = 'John';

   function showMessage() {
   let message = 'Hello, ' + userName;
   alert(message);
   }

   showMessage(); // Hello, John
```

## Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).


## Parameters
In other words, to put these terms straight:
1. A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
2. An argument is the value that is passed to the function when it is called (it’s a call time term).


## Default values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

```shell
   function showMessage(from, text = "no text given") {
   alert( from + ": " + text );
   }

   showMessage("Ann"); // Ann: no text given
```

Now if the text parameter is not passed, it will get the value "no text given".

The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

```shell
showMessage("Ann", undefined); // Ann: no text given
```

### Evaluation of default parameters

In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
On the other hand, it’s independently called every time when text is missing.

```shell
   function showMessage(from, text = anotherFunction()) {
   // anotherFunction() only executed if no text given
   // its result becomes the value of text
   }
```


## Returning a value
A function can return a value back into the calling code as the result.

The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code.
It is possible to use return without a value. That causes the function to exit immediately.

##### A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined:

```shell
   function doNothing() { /* empty */ }

   alert( doNothing() === undefined ); // true
```

##### Never add a newline between return and the value
For a long expression in return, it might be tempting to put it on a separate line, like this:

```shell
   return
   (some + long + expression + or + whatever * f(a) + f(b))
```
That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

```shell
   return;
   (some + long + expression + or + whatever * f(a) + f(b))
```
So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

```shell
   return (
   some + long + expression
   + or +
   whatever * f(a) + f(b)
   )
```


## Summary
A function declaration looks like this:

```shell
   function name(parameters, delimited, by, comma) {
   /* code */
   }
```

<ul>
<li>Values passed to a function as parameters are copied to its local variables.</li>
<li>A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.</li>
<li>A function can return a value. If it doesn’t, then its result is undefined.</li>

To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.
It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.



# Function expressions

The syntax that we used before is called a <i>Function Declaration</i>

```shell
   function sayHi() {
   alert( "Hello" );
   }
```

There is another syntax for creating a function that is called a <i>Function Expression</i>.
It allows us to create a new function in the middle of any expression.

```shell
   let sayHi = function() {
   alert( "Hello" );
   };
```
As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
###### Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

In JavaScript, a function is a value, so we can deal with it as a value.
We can copy a function to another variable:

```shell
   function sayHi() {   // (1) create
   alert( "Hello" );
   }

   let func = sayHi;    // (2) copy

   func(); // Hello     // (3) run the copy (it works)!
   sayHi(); // Hello    //     this still works too (why wouldn't it)
```

Here’s what happens above in detail:
<ol>
<li>The Function Declaration (1) creates the function and puts it into the variable named sayHi.</li>
<li>Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. 
    If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.</li>
<li>Now the function can be called as both sayHi() and func().</li>
</ol>


#### Why is there a semicolon at the end?
The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.

### Callback functions
A function is a value representing an “action"

Regular values like strings or numbers represent the data.
A function can be perceived as an action.
We can pass it between variables and run when we want.

### Function Expression vs Function Declaration
The more subtle difference is when a function is created by the JavaScript engine.

##### A Function Expression is created when the execution reaches it and is usable only from that moment.
##### A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global 
Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

Function Expressions are created when the execution reaches them.

###### In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

### Summary
<ul>
   <li>Functions are values. They can be assigned, copied or declared in any place of the code.</li>
   <li>If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.</li>
   <li>If the function is created as a part of an expression, it’s called a “Function Expression”.</li>
   <li>Function Declarations are processed before the code block is executed. They are visible everywhere in the block.</li>
   <li>Function Expressions are created when the execution flow reaches them.</li>
</ul>


















