// QuickSort algorithm ek efficient sorting algorithm hai jise 
// divide - and - conquer approach se implement kiya jata hai.
// Yeh algorithm ek pivot element ka selection karta hai 
// aur phir array ko do parts mein divide karke sort karta hai.
// Niche diye gaye JavaScript code mein QuickSort ka implementation diya gaya hai:

// Partition function, jo array ko pivot ke around divide karega
function Partition(arr, low, high) {
    let pivot = arr[high]; // Pivot ko last element consider kiya gaya hai
    let i = low - 1;
  
    // Array traverse karte hue pivot se chote elements ko left shift karega
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap operation
      }
    }
  
    // Pivot ko sahi jagah par set karega
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  
  // QuickSort function, jo recursive taur par array ko sort karega
  function quickSort(arr, low, high) {
    if (low < high) {
      let pi = Partition(arr, low, high);
  
      // Left aur right parts ko sort karega
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  
  // Input array
  let arr = [22, 20, 25, 15, 11, 10, 12];
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  
  console.log("Before: ", arr);
  quickSort(arr, low, high);
  console.log("After: ", arr);
  