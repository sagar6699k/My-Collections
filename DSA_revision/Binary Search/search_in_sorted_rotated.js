function findPivot(arr, n) {
    
    let lo = 0;
    let hi = n - 1;
    let pivot = undefined;

    while (lo <=  hi) {
        
        let mid = lo + Math.floor((hi - lo) / 2)

        if (arr[mid] <= arr[0]) {
            pivot = mid;
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }

    return pivot;
}


function SearchAgain(arr, lo, hi, k) {
    
    let res = -1;
    while (lo <=  hi) {
        
        let mid = lo + Math.floor((hi - lo) / 2)

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

    return res;
}



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);

    let pivot = findPivot(arr, n);
    

    if (k === arr[pivot]) {
        console.log(pivot);
    }
    else if (k < arr[0]) {
        let lo = pivot;
        let hi = n - 1;

        console.log(SearchAgain(arr, lo, hi, k));
    }
    else {
        let lo = 0;
        let hi = pivot;

        console.log(SearchAgain(arr, lo, hi, k));
    }
   

    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`6 9
      3 4 7 9 1 2`);
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
    
  
  
  