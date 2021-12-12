function runProgram(input) {

    var arr = input.trim().split("").map(Number);
    
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j]%2 == 0) {
                count++;
            }
            
        }
        res.push(count);
        
    }
    console.log(res.join(" "))
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`574674546476`);
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
    
  
  
  
  // json-server db.json --port 3001 --watch
  // json-server cart.json --port 3001 --watch
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()