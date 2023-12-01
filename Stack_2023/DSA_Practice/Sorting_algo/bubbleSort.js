// In Bubble Sort algorithm,

// traverse from left and compare adjacent elements and the higher one is placed at right side.
// In this way, the largest element is moved to the rightmost end at first.
// This process is then continued to find the second largest
// and place it and so on until the data is sorted.

//you can also arrange one uestion on this
//like if you asked to find 2nd max from the arr
//bcz when i = 0 --> max element will found out and move to last index
// and when i = 1--> 2nd max element will found and move to 2nd last position
// and so on


function bubbleSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let swap = false
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                //swapping
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }

        if (!swap) {
            break;
        }
    }
    // return arr;
}
//input
let arr = [45, 56, 23, 33, 11, 55, 25];
let n = arr.length;

bubbleSort(arr, n)
console.log(arr);