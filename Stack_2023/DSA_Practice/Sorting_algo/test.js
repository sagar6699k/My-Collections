function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function selectionSort(arr, n) {
    for (let i = 0; i < n-1; i++) {
        let min_index = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        swap(arr, min_index, i)
    }
    
}

// input 
let arr = [65, 23, 13, 17, 34, 43, 11, 8, 9];
let n = arr.length

console.log("Before Sort-->", arr);
selectionSort(arr, n)
console.log("After Sort-->", arr);
