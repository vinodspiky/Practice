// Three ways to create a function:
// Via a function expression
// Via a function declaration
// Via the constructor Function()

//Remarks
// All functions are objects, instances of Function:



function id(x) {
    return x;
}
console.log(id instanceof Function);

// Therefore, functions get their methods from Function.prototype.
// put console.log(dir(Function.prototype)) to check