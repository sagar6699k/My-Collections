function KazamaSinchan(arr, lo, hi, k) {
    
    let res = undefined;
    while (lo <= hi) {
        
        let mid = lo + Math.floor((hi - lo) / 2);
    
        if (arr[mid] === k) {
            return mid;
        }
    
        else if (arr[mid] < k) {
            lo = mid + 1;
        }
        else {
            res = mid;
            hi = mid - 1;
        }
    }
    
    return res;
}





function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let k = Number(array[2].trim());

    let lo = 0;
    let hi = n - 1;

    console.log(KazamaSinchan(arr, lo, hi, k));
  
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      1 3 5 6
      5 `);
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
    
  
  