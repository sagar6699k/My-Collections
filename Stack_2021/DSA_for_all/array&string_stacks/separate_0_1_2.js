function runProgram(input) {

    var array = input.trim().split("\n")
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;

        console.log(Separate_0_1_2(n, arr));
        
    }
   
    function Separate_0_1_2(n, arr) {
      
      let res = [];

      for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
          res.push(arr[i]);
        }
      }
      for (let j = 0; j < n; j++) {
        if (arr[j] === 1) {
          res.push(arr[j]);
        }
      }
      for (let k = 0; k < n; k++) {
        if (arr[k] === 2) {
          res.push(arr[k]);
        }
      }

      return res.join(" ");

    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      1
      2
      3
      2 0 1
      4
      2 0 2 1`);
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
    