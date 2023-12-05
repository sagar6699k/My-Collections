function findMinAndMax(arr, n) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max]
    //we can directly find using Math.min()
    // return Math.max(...arr)
}

//input
let arr = [10, 5, 4, 6, 8, 1, 3, 9, 2];
let n = arr.length;
console.log(findMinAndMax(arr, n));