function runProgram(input) {

    var N = Number(input);

    for (let i = 0; i < N; i++) { // i = 0;
        var res = [];[0,]
        for (let j = 0; j < N; j++) {
            
            res[j] = i;
            if (j % 2 != 0) {
                res[j] = j
            }
            if (j % 2 == 0) {
                res[j] = i
            }
            
        }
        console.log(res.join(" "));
        
    }
   
  
    
//Output
  
// 0 1 0 3 0
// 1 1 1 3 1
// 2 1 2 3 2
// 3 1 3 3 3
// 4 1 4 3 4
  
  
  
  
  
  
  
  
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5`);
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