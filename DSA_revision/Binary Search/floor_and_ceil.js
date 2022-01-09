function Find_floor_and_ceil(arr, k, lo, hi) {

    let F = -1;
    let C = -1;
    while (lo <= hi) {
      let mid = (lo + Math.floor((hi - lo) / 2))
  
      if (arr[mid] === k) {
          F = arr[mid];
          C = arr[mid];
          break;
      }
      if (arr[mid] < k) {
          F = arr[mid];
          lo = mid + 1;
      }
      else{
          C = arr[mid];
          hi = mid - 1;
      }
      
  
    }
    console.log(F, C);
  
  }
  
  
  
  function runProgram(input) {
  
    var array = input.trim().split("\n");
    let [len, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);
  
    let lo = 0;
    let hi = len - 1;
   
    Find_floor_and_ceil(arr, k, lo, hi)
   
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`10 8
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