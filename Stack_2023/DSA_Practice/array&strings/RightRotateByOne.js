function rightRotateByOne(arr, n) {
    if (n <= 1) {
        return arr;
    }
    let rotateBy = 1;
    let res = [];

    for (let i = 0; i < n; i++) {
        res.push(arr[(n + i - rotateBy) % n]);
    }

    return res;
}

// input
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log("before:", arr);

console.log("before:", rightRotateByOne(arr, n));