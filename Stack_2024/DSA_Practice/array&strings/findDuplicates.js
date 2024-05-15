function findDuplicates(arr, n) {
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
    }
    let res = [];
    for (const key in obj) {
        if (obj[key] !== 1) {
            res.push(key);
        }
    }

    return res;
}

let arr = [1, 1, 3, 2, 4, 5, 6, 3, 6];

let n = arr.length;
console.log(findDuplicates(arr, n));

