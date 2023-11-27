// For example:
// Consider the array arr[] = { 10, 50, 30, 70, 80, 20, 90, 40}
// and key = 30

function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

let arr = [10, 50, 30, 70, 80, 20, 90, 40];
let key = 30

const result = linearSearch(arr, key)
if (result == -1) {
    console.log("Element is not present in array")
} else {
    console.log("Element is present at index " + result);
}