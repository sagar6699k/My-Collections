// let arr = [1, 2, 3, 4, 5];

// console.log("Old Array", arr);//New Array [ 1, 2, 3, 4, 5 ]
// delete arr[2];
// console.log("New Array", arr);//New Array [ 1, 2, <1 empty item>, 4, 5 ]


// foreach example (JavaScript)
// let numbers = [1, 2, 3];
// numbers.forEach((num) => console.log(num * 2)); // Side effect, no new array is created
// Output: 2, 4, 6

// map example (JavaScript)
// let doubledNumbers = numbers.map((num) => num * 2); // Creates a new array with transformed values
// console.log(doubledNumbers);
// Output: [2, 4, 6]


let n = 5
for (var i = 0; i < n; i++) {
    setTimeout(() => {
        console.log(i);
    },2000)
    
}
