Ref Link : https://javascript.info/modules-intro

Note : package.json - file is required to run the java modules in Node
       Run main.js file as >>>> node main.js


--------------------------------- MODULE ---------------------------------
A module may contain a class or a library of functions for a specific purpose.

For a long time, JavaScript existed without a language-level module syntax. 
That wasn’t a problem, because initially scripts were small and simple, so there was no need.
But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, 
special libraries to load modules on demand.

The language-level module system appeared in the standard in 2015, gradually evolved since then, 
and is now supported by all major browsers and in Node.js.


# What is a module?
A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives export and import to interchange functionality, 
call functions of one module from another one:

1. export => keyword labels variables and functions that should be accessible from outside the current module.
2. import => allows the import of functionality from other modules.

The import directive loads the module by path ./sayHi.js relative to the current file, 
and assigns exported function sayHi to the corresponding variable.
As modules support special keywords and features, we must tell the browser that a script should be 
treated as a module, by using the attribute <script type="module">.
The browser automatically fetches and evaluates the imported module (and its imports if needed), and then runs the script.

## Modules work only via HTTP(s), not locally
If you try to open a web-page locally, via file:// protocol, you’ll find that import/export directives don’t work. 
Use a local web-server, such as static-server or use the “live server” capability of your editor, 
such as 'VS Code Live Server Extension' to test modules.

## Core module features
There are core features, valid both for browser and server-side JavaScript.
1. Always “use strict”
   Modules always work in strict mode. E.g. assigning to an undeclared variable will give an error.
   <script type="module">
    a = 5; // error
   </script>
2. Module-level scope
   Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.
   Modules should export what they want to be accessible from outside and import what they need.
   In other words, with modules we use import/export instead of relying on global variables.
   In the browser, we can make a variable window-level global by explicitly assigning it to a window property, e.g. window.user = "John".

That’s exactly because the module is executed only once. Exports are generated, and then they are shared between importers, so if something changes the admin object, other importers will see that.

3. In a module, “this” is undefined
   In a module, top-level 'this' is undefined.
   

#### To summarize, the core concepts are:

1. A module is a file. To make import/export work, browsers need <script type="module">. 
   Modules have several differences:
    a. Deferred by default.
    b. Async works on inline scripts.
    c. To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
    d. Duplicate external scripts are ignored.
2. Modules have their own, local top-level scope and interchange functionality via import/export.
3. Modules always 'use strict'.
4. Module code is executed only once. Exports are created once and shared between importers.  

### Remember:
1. Import needs curly braces for named exports and doesn’t need them for the default one.
2. If importing everything * as an object, then the default property is exactly the default export.
3. Named exports force us to use exactly the right name to import but while for a default export, 
   we always choose the name when importing.


## Re-export
“Re-export” syntax 'export ... from ...' allows to import things and immediately 
export them (possibly under another name)
The notable difference of export ... from compared to import/export is that re-exported modules aren’t available in the current file. 

   export {sayHi} from './say.js'; // re-export sayHi
   export {default as User} from './user.js'; // re-export default


## Dynamic imports
 ### The import() expression
The import(module) expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code.





