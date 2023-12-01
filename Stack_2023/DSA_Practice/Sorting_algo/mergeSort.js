// Merge sort is defined as a sorting algorithm that works by dividing an array
// into smaller subarrays, sorting each subarray, and then merging the sorted
// subarrays back together to form the final sorted array.

function merge(arr, l, m, r) {

    let n1 = m - l + 1;
    let n2 = r - m + 1;

    let arr1 = new Array(n1)
    let arr2 = new Array(n2)

    for (let i = 0; i < n1; i++) {
        arr1[i] = arr[l + i]
    }

    for (let j = 0; j < n2; j++) {
        arr2[j] = arr[m + 1 + j]
    }

    let i = 0;
    let j = 0;
    let k = l;

    //now merge two subarray
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            i++;
        }
        else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }

    //merge if there is remain in arr1
    while (i < n1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    //merge if there is remain in arr2
    while (j < n2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }

}


function mergeSort(arr, l, r) {
    if (l >= r) return;
    let mid = l + Math.floor((r - l) / 2);

    mergeSort(arr, l, mid)
    mergeSort(arr, mid + 1, r)
    merge(arr, l, mid, r)
}


// input 
let arr = [65, 23, 13, 17, 34, 43, 11, 8, 9];
let n = arr.length
let l = 0;
let r = n - 1;

console.log("Before Sort-->", arr);
mergeSort(arr, l, r)
console.log("After Sort-->", arr);
