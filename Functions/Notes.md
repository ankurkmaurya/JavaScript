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


### Remember:
1. Import needs curly braces for named exports and doesn’t need them for the default one.
2. If importing everything * as an object, then the default property is exactly the default export.
3. Named exports force us to use exactly the right name to import but while for a default export, 
   we always choose the name when importing.


## Re-export
“Re-export” syntax 'export ... from ...' allows to import things and immediately 
export them (possibly under another name)
The notable difference of export ... from compared to import/export is that re-exported modules aren’t available in the current file.
       
```shell
   export {sayHi} from './say.js'; // re-export sayHi
   export {default as User} from './user.js'; // re-export default
```


## Dynamic imports
### The import() expression
The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.

```shell
   let modulePath = prompt("Which module to load?");

   import(modulePath)
   .then(obj => <module object>)
   .catch(err => <loading error, e.g. if no such module>)
```

<ul>
<li>Dynamic imports work in regular scripts, they don’t require 'script type="module"'.</li>
<li>Although import() looks like a function call, it’s a special syntax that just happens to use parentheses (similar to super()).
So we can’t copy import to a variable or use call/apply with it. It’s not a function.</li>



