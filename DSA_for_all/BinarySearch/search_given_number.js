function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let k = Number(array[2].trim());

    let lo = 0;
    let hi = n - 1;

    function BinarySearch(lo, hi, arr, k) {
        
       while (lo <= hi) {
        
            let mid = lo + Math.floor((hi - lo) / 2);
            
            if (arr[mid] === k) {
                return mid;
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
   console.log(BinarySearch(lo, hi, arr, k));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      1 2 3 5 6
      5`);
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
    