// Description
// Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.
// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity


function MinimumInArray(lo, hi, arr) {
    
  let min;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2)
    
      if (arr[mid] <= arr[0]) {
        min = arr[mid]
        hi = mid;
      }
      else {
        lo = mid+1
      }
    
  }
  
  return min;

}

//TC = O(n);
//SC = O(1);


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim())
    let arr = array[1].trim().split(" ").map(Number)
   
   
    let lo = 0;
    let hi = n-1;

    console.log(MinimumInArray(lo, hi, arr));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`15
      10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);
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
    


