
let promice_chain = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 3000);
}).then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result*3
}).then((result) => {
    console.log(result);
    return result*4
})

// console.log(promice_chain);
promice_chain.then(() => {
    console.log(`Promice End`);
})



// In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

// The initial promise resolves in 2 second,
// After that .then handler is called by logging the result(2) and then return a promise with the value of result * 2.
// After that the value passed to the next .then handler by logging the result(2) and return a promise with result * 3.
// Finally the value passed to the last .then handler by logging the result(6) and return a promise with result * 4.

//So Output
//2
// 4
// 12
// Promice End




