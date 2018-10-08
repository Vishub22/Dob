// Both the variable and the function are named myName
var myName;
function myName () {
console.log ("Rich");
}

// The function declaration overrides the variable name
console.log(myName); // function
 // But in this example, the variable assignment overrides the function declaration
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.

function myName () {
console.log ("Rich");
}

console.log(typeof myName); // string 

const y = { x:3 ,z:3 };
console.log(y);
y.x = 4;
console.log(y);

var x = 4;
console.log(x);
var x = 6;
console.log(x);

let z = 4;
console.log(z);
z = 6;
console.log(z);

const v = 4;
console.log(v);
h = 6;
console.log(h);

const s = new Date().getSeconds();
console.log("s = " + s );
setTimeout(function () {
    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
}

// PROTOTYPE


function doSomething() { }
console.log(doSomething.prototype);
// It does not matter how you declare the function, a
//  function in javascript will always have a default
//  prototype property.
var doSomething = function () { };
console.log(doSomething.prototype);