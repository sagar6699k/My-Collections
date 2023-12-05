function upperBound(arr, k, lo, hi) {
    let upper = undefined;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            upper = mid;
            lo = mid + 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return upper;
}

function lowerBound(arr, k, lo, hi) {
    let lower = undefined;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            lower = mid;
            hi = mid - 1;
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return lower;
}



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);

    let lo = 0;
    let hi = n - 1;
    
    console.log(arr, k, lo, hi);
    let u = upperBound(arr, k, lo, hi)
    let l = lowerBound(arr, k, lo, hi)
    
    console.log("Upper",u);
    console.log("Lower",l);
    console.log("Freq",u-l+1);
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`12 4
      1 2 3 3 3 4 4 4 4 5 6 9`);
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
    