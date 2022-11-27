Ref Link : https://javascript.info/modules-intro

<b>Note :</b> 
package.json - file is required to run the java modules in Node.<br>
Run main.js file as >>>> node main.js


# Arrow Functions
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
It’s called “arrow functions”, because it looks like this:

```shell
    let func = (arg1, arg2, ..., argN) => expression;
```

This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

In other words, it’s the shorter version of:

```shell
    let func = function(arg1, arg2, ..., argN) {
    return expression;
    };
```

#### Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

1. Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. 
   Parentheses can be        omitted, if there’s only a single argument, e.g. n => n*2.
2. With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, 
   but we need an explicit return to return something.












