//Main Entry Module - main.js

import {sayHi} from './sayHi.js'; //Exact name import
import {sayHi as sh} from './sayHi.js'; //Alias 'as import
import adminHi from './admin.js'; //Default import 
import * as ah from './admin.js'; //Importing everything * as an object
import {adminHello as aHello} from './admin.js'; //Alias 'as import
import {default as aHi, adminHello} from './admin.js'; //Named with default import
import {default as endExp111, endExp2} from './endExport.js'; //Export a function separately 


console.log("--->> Generic Export");
console.log(sayHi); // function... reference
sayHi('Ankur'); // Hello, John!
sh('Ankur Maurya')
console.log(import.meta.url);
console.log(this); // 'this' is undefined

console.log("--->> Multiple Export");
adminHi('Maurya');
aHello();
ah.adminHello();
ah.default("Sharma"); //default reference as adminHi
aHi();
adminHello();

console.log("--->> End Export");
endExp111('Ankur');
endExp2();

console.log("--->> Dynamic Imports");
import('./dynamicExports.js').then(
    (obj) => {
        let noNameDefault = obj.default;
        noNameDefault();
        obj.hi();
        obj.bye();
    }
).catch(
    (error) => {
        console.log("# Failed to load 'dynamicExports.js'.");
    }
);

