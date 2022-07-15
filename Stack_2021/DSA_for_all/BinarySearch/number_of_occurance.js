function LowerBound(n, k, arr, lo, hi) {
    let lower = undefined;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            lower = mid;
            hi = mid - 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return lower;
}

function UpperBound(n, k, arr, lo, hi) {
    let upper = undefined;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            upper = mid;
            lo = mid + 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return upper;
}



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);

    let lo = 0;
    let hi = n - 1;
    let l = LowerBound(n, k, arr, lo, hi)
    
    let u = UpperBound(n, k, arr, lo, hi)
    
    console.log(u-l+1);
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`6 3
      2 3 3 3 6 9`);
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
    