function partition(arr, low, high) {
    let pivot = arr[high];

    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}



// input 
let arr = [65, 23, 13, 17, 34, 43, 11, 8, 9];
let n = arr.length
let low = 0;
let high = n - 1;

quickSort(arr, 0, n - 1);
console.log("Sorted array:");
console.log(arr.join(" "));