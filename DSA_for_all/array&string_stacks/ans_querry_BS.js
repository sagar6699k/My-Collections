function SearchNumber(lo, hi, arr, k) {
    
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === k) {
            return "YES"
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }

    }
    return "NO"
}

function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let q = Number(array[2].trim());
    let querry = array[3].trim().split(" ").map(Number);
    let lo = 0;
    let hi = n - 1;

    for (let i = 0; i < q; i++) {
        let k = querry[i];
        console.log(SearchNumber(lo, hi, arr, k));
    }


   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      1 2 3 4 5
      3
      3 5 7`);
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