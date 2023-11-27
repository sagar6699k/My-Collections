//Recursive Code For Linear Search

function recursiveLinearSearch(arr, key, size) {
    if (size === 0) {
        return -1;
    }
    else if (arr[size - 1] === key) {
        return size - 1;
    }

    return recursiveLinearSearch(arr, key, size - 1)
}

let arr = [10, 50, 30, 70, 80, 20, 90, 40];
let key = 20
let size = arr.length - 1;

const result = recursiveLinearSearch(arr, key, size - 1)
if (result == -1) {
    console.log("Element is not present in array")
} else {
    console.log("Element is present at index " + result);
}