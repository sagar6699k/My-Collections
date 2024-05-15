//Using Slice Method
function leftRotateByOneUsingSlice(arr, n) {
    let temp = arr[0];
    let remainElement = arr.slice(1);
    return [...remainElement, temp];
}


function leftRotateByOne(arr, n) {
    if (n <= 1) {
        return arr;
    }
    let rotateBy = 1
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(arr[(i + rotateBy) % n])
    }
    return res;
}

// input
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log("before:", arr);

// console.log("before:", leftRotateByOne(arr, n));
console.log("before:", leftRotateByOneUsingSlice(arr, n));