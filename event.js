// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.
// Part 1: Stack Overflow

let globalCounter = 0;

// Recursive function to increment the counter
function incrementCounter() {
    try {
        // Increment the counter
        globalCounter++;
        // Call the function recursively
       
        incrementCounter();
    } catch (error) {
        // Log the error and the current counter value
        console.error('Error:', error.message); 
        // result that is typically in the ~15,000 range.
        //  This can vary significantly depending 
        // on the specifics of the environment that the code is being run in
        console.log('Counter value:', globalCounter);
    }
}
// Initial function call
incrementCounter();

// As your first task, complete the steps above
// What you have accomplished is a script that 
// effectively measures the size of the call stack.
//  You recursively put functions onto the stack until it
//   reached overflow, then caught that error to print the count.
// Declared a callStackCounter variable
let callStackCounter = 0;

//  function that measureCallStackSize
function measureCallStackSize() {
    try {
        // Increment the callStackCounter
        callStackCounter++;
        // Call the function recursively
        measureCallStackSize();
    } catch (error) {
        // Handle the stack overflow error
        console.error(`Stack overflow! Call stack size: ${callStackCounter}`);
    }
}

// Initial function call
measureCallStackSize();

// Part 2: Trampolines

  /*
1) Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
2) Once your recursive function is complete, trampoline it. */

// first call: [0, 1, [2, [3, [4, 5]]]];
// second call: [0, 1, 2, [3, [4, 5]]];
// third call: [0, 1, 2, 3, [4, 5]];
// fourth call: [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, [2, [3, [4, 5]]]];

const arrayFlattener = (arr) => {
  let curArr = arr.flat();
  for(const element of curArr){
    if (Array.isArray(element)) return arrayFlattener(curArr);
  }
  //recursive case 
  //in the flattened array of a nested array, there will be array values
  // in the recursive case, return the next array value we get
  return curArr;
 }

console.log(arrayFlattener(arr2));
console.log(trampoline(arrayFlattener(arr2)));


// // Hint: you may want to make use of recursion, and do not forget about setTimeout(..., 0).
setTimeout(function() {
    console.log("Hello World");
}, 2000); // Wait for 2 seconds (2000 milliseconds)
console.log("external timeout ");

