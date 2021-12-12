function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim())
    let arr_s = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let arr_h = array[2].trim().split(" ").map(Number).sort((a,b)=>a-b);
   
    let ans = 0
    for (let i = 0; i < n; i++) {
        let diff = Math.abs(arr_s[i] - arr_h[i]);
        ans = Math.max(ans, diff)
    }

    console.log(ans);
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      4 -4 2
      4 0 5`);
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