// Description
// Given n distinct numbers, implement iterative binary search to check the presence of target number k.
// In case k is present among those n numbers, print 1
// Else print -1
// Input
// Input Format :
// First line of input contains n and k separated by a space
// Next line contains n space separated integers


function IterativeBinarySearch(arr, len, k, lo, hi) {
  
    while (lo <= hi) {
        let mid = Math.floor(lo + Math.floor((hi - lo) / 2))

        if (arr[mid] === k ) {
            return 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
        
    }

    return -1;
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let [len, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);
    let lo = 0;
    let hi = len - 1;
   
    console.log(IterativeBinarySearch(arr, len, k, lo, hi));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5 0
      2 -2 0 3 4`);
    } else {
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
    }