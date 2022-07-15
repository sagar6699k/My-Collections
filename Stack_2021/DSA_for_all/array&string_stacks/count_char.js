function runProgram(input) {

    var arr = input.trim().split("");
    let res = [];
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            count++;
        }
        else {
            res.push(arr[i], count);
            count = 1;
        }
        
    }
   console.log(res.join(""));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`aaabbbbcc`);
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
    
  
  