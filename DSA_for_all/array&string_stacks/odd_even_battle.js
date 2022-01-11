function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i]%2 === 0) {
            sum1 += arr[i];
        }
        else {
            sum2 += arr[i];
        }
        
    }
    if (sum1 < sum2) {
        console.log("Odd");
    }else{
        console.log("Even");
    }

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      1 2 3 4`);
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
    