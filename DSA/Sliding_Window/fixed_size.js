// Maximum Sum Subarray of Size K

// Problem Statement : Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
// Example 1: Input: [2, 1, 5, 1, 3, 2], k=3 Output: 9 Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2: Input: [2, 3, 4, 1, 5], k=2 Output: 7 Explanation: Subarray with maximum sum is [3, 4].


let array = [2, 1, 5, 1, 3, 2];

let len = array.length;
// console.log(len);

let k = 3;
let sum = 0;
let maxSum = 0;

let i = 0;
let j = 0;

while (j < len) {

    sum += array[j]; 
    
    if ((j-i+1) < k) {  //making window of size k
        j++;
    }
  
    else if ((j-i+1) == k) { //after creating window 
        maxSum = Math.max(maxSum, sum);
        sum = sum - array[i]; //here we are removing starting element of window

        i++;
        j++;
    }

    
}

console.log(maxSum);
