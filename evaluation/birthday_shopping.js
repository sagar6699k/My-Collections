function runProgram(input) {

    var Input = input.trim().split(" ").map(Number);
    let [n,k] = Input
    // console.log('n,k:', n,k)
    
    if (k===1) {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }

    else if (k===2) {
        for (let i = 1; i < n; i++) {
        
            for (let j = i+1; j <= n; j++) {
                console.log(i, j);
               
            }
        }
    }
        
    else if (k===3) {
        for (let i = 1; i <= n-2; i++) {
        
            for (let j = i+1; j < n; j++) {
                for (let k = i+2; j <= n; j++) {
                
                    console.log(i, j, k);
                }
               
            }
        }
    }
   
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`6 3`);
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