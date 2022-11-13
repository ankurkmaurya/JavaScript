//Export a function separately from its definition

function endExp1(param) {
    console.log("endExp1 as 1 - " + param);
 }
 
function endExp2() {
     console.log("endExp2 as 2"); 
 }

export {
    endExp1 as default, 
    endExp2
}
