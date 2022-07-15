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

//tricky4
// const obj = { 'id': 'ssd123' };
// const arr = [...obj];
// console.log(arr);// it will throw TypeError: object is not iterable.

//tricky5
function Num(a, b, a) {
    console.log(a, b, a);
}

Num(1,2,3) // output is 3 2 3 why?