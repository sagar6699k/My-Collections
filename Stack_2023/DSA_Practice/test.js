function Partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = Partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

//input
let arr = [22, 20, 25, 15, 11, 10, 12];
let n = arr.length;
let low = 0;
let high = n - 1;

console.log("Before: ", arr);
quickSort(arr, low, high)
console.log("After: ", arr);
