function UpperBound(arr, n, k, lo, hi) {
    
    let res = undefined;
    while (lo <= hi) {
        
        let mid = lo + Math.floor((hi - lo) / 2);
        
        if (arr[mid] > k) {
            res = mid;
            hi = mid - 1;
        }
        else if (arr[mid] <= k) {
            lo = mid + 1;
        }
      
    }

    return res;
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);
    let lo = 0;
    let hi = n - 1;


    console.log(UpperBound(arr, n, k, lo, hi));

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`10 3
      0 2 4 4 5 5 7 7 9 10`);
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
    