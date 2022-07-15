function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    

    let obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1
        }
        
    }

    let res = [];
    for (const key in obj) {
       if (key == "0" || key == "1" || key == "2") {
           res.push(obj[key])
       }
    }
    console.log(res.join(" "));
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`10
      0 1 0 1 1 1 0 2 2 0 `);
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