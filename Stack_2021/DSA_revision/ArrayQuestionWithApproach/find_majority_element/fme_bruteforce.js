  function FindMajorityElement(arr, n) {
    let max_count = 0;
    let index = -1;
  for (let i = 0; i < n; i++) {
      let count = 0;
      for (let j = 0; j < n; j++) {
          if (arr[i] === arr[j]) {
              count++;
          }
      }
      if (count > max_count) {
          max_count = count;
          index = i;
      }
  }

  
  if (max_count > Math.floor(n/2)) {
      console.log(arr[index]);
  }
  else {
      console.log(-1);
  }
  
 }




function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
      let n = Number(array[line].trim());
      line++;
      let arr = array[line].trim().split(" ").map(Number);
      line++;
      
      FindMajorityElement(arr, n)
    }
    
    //TC = O(n^2)
    //SC = O(1)
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`2
        6
        1 1 1 1 2 3
        5
        1 1 2 2 3`);
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
    
  
  
  