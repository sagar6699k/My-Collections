//tricky1

// function a() {
//     return "Hello"
// }

// const sentence = a`hi` // it is similler to a(`hi`) , so output is 'Hello' only

// console.log(sentence);

//tricky2
console.log(5 < 6 < 7); // true
console.log(7 > 6 > 5); // false
//here both are suppose to be true
// but, internally it happens like
// 5 < 6 => true , and true < 7 means 1 < 7 which is true , so ans is true
// but
// 7 > 6 => true , and true > 7 means 1 > 7 which is false , so ans is false



//tricky3
console.log(Math.max()); // its ans is -infinity
//bcz when we do console.log(Math.max(1,2,3)), it first compaire 1 with lowest possible which is -infinity
//therefore console.log(Math.max()) is -infinity