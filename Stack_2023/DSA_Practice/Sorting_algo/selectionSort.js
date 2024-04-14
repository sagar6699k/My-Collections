// Selection sort is a simple and efficient sorting algorithm that works by repeatedly
// selecting the smallest(or largest) element from the unsorted portion of the list
// and moving it to the sorted portion of the list.

//you can also arrange one question on this
//like you asked to find 2nd minimum from the arr
//bcz when i = 0 --> min element will found out and move to first position
// and when i = 1--> 2nd min element will found and move to 2nd position
// and so on

function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n) {
    // let third_min = 0
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        // if (i === 2) {
        //     third_min = arr[min_index]
        // }
        swap(arr, min_index, i)
    }
    return third_min;
}


// input 
let arr = [65, 23, 10, 7, 34, 43];
let n = arr.length;
console.log("Before Sort", arr);
// selectionSort(arr, n)
console.log("Second Minimum-->",selectionSort(arr, n));
console.log("After Sort", arr);

// Time Complexity: 
// The time complexity of Selection Sort is O(N2) 
// as there are two nested loops: