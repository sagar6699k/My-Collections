function separate0sand1(arr, n) {
    let l = 0;
    let r = n - 1;

    while (l < r) {

        while (arr[l] == 0 && l < r) {
            l++;
        }
        while (arr[r] == 1 && l < r) {
            r--;
        }

        if (l < r) {
            arr[l] = 0;
            arr[r] = 1;
            l++;
            r--;
        }
    }
}

function separateZerosAndOne(arr, n) {
    let res = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            res.push(0);
            count++;
        }
    }
    for (let j = 0; j < n - count; j++) {
        res.push(1);
    }

    return res;
}

//input
let arr = [0, 1, 0, 1, 0, 1, 0, 1];
let n = arr.length;
console.log("Before:", arr);
// separate0sand1(arr, n)
// console.log("After:", arr);
console.log("2nd Way:", separateZerosAndOne(arr, n));

// Time Complexity : O(n)
// Auxiliary Space: O(1)
