function runProgram(input) {

    var array = input.trim().split("\n");
    let k = Number(array[0].trim());
    let value = array[2].trim().split(" ").map(Number);
    let wt = array[3].trim().split(" ").map(Number);
    
    let res = [];

    for (let i = 0; i < wt.length; i++) {
        res.push([wt[i], value[i], (value[i]/wt[i])])
        
    }
  
    res.sort((a,b)=>b[2]-a[2])
    

    let res_value = 0;
    for (let j = 0; j < res.length; j++) {
        if (res[j][0] <= k) {
            res_value = res_value + res[j][1];
            k = k - res[j][0]
        }
        else {
            res_value = res_value + (res[j][1]*(k/res[j][0]));
            break;
        }
        
    }
    console.log(Math.round(res_value));
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`50 
      3
      60 100 120 
      10 20 30`);
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