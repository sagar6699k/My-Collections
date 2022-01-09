function signalCheck(size, ele, res) {
  
  res[0]= 1;

  for (let i = 1; i < size; i++) {
      res[i] = 1;
      for (let j = i-1; j >= 0; j--) {

        if (ele[j] <= ele[i]) {
          res[i]++;
        }else{
          break;
        }
        
        
      }

  }
  console.log(res.join(" "));
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());
    let line = 1;

    
    for (let i = 1; i <= T; i++) {
      let res = []
      let size = Number(arr[line])
      line++;
      let ele = arr[line].trim().split(" ").map(Number);
      line++;
      

      signalCheck(size, ele, res);
    
    }
    
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      7
      100 80 60 70 60 75 85
      5
      3 5 0 9 8`);
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