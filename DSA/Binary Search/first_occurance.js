function FirstOccurence(arr, first, k, lo, hi) {
    
    while (lo <= hi) {
        let mid = Math.floor(lo + Math.floor((hi - lo) / 2))

        if (arr[mid] === k ) {
            first = mid;
            hi = mid-1
        }
        else if (arr[mid] < k) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

  return first;
   
    
}






function runProgram(input) {

    var array = input.trim().split("\n");
    let [len, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);

    let lo = 0;
    let hi = len - 1;
    let first = -1;
    
    
    console.log(FirstOccurence(arr, first, k, lo, hi));
    
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`7 6
      1 1 4 6 6 7 8`);
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