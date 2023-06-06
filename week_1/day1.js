// SCOPE: const, let and var

// SPREAD AND REST, IMMUTABLE DATA
// Deep vs shallow copies

// ARROW FUNCTIONS
// def some_function(params):
//     do stuff

// return double the value of num
function myFunction(num) {
    return num * 2
    
}

const arrowFunction = (num) => {
    return num * 2
}

const implicitReturn = (num) => num * 2;

console.log(myFunction(2));
console.log(arrowFunction(2));
console.log(implicitReturn(2));