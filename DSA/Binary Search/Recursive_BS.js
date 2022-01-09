//Enter code here
function RecursiveBinarySearch(arr, len, k, lo, hi) {
  
    let mid = Math.floor(lo + Math.floor((hi - lo) / 2));

    if (lo <= hi) {
        
        if (arr[mid] === k) {
            return 1;
        }
    
        else if (arr[mid] < k) {
            RecursiveBinarySearch(arr, len, k, mid+1, hi)
        }
        else {
            RecursiveBinarySearch(arr, len, k, lo, mid-1)
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
   
    console.log(RecursiveBinarySearch(arr, len, k, lo, hi));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5 0
      2 -2 1 3 4`);
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