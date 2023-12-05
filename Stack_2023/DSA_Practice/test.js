function upperBound(arr, k, lo, hi) {
    let upper = undefined;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            upper = mid;
            lo = mid + 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return upper;
}

function lowerBound(arr, k, lo, hi) {
    let lower = undefined;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            lower = mid;
            hi = mid - 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return lower;
}


// input 
let arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, 6, 7];
let n = arr.length
let lo = 0;
let hi = n - 1;
let k = 3;
console.log("Upper bound ->", upperBound(arr, k, lo, hi));
console.log("Lower bound ->", lowerBound(arr, k, lo, hi));
