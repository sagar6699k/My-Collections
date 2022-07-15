function SumWay(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;

    return SumWay(n - 1) + SumWay(n - 3) + SumWay(n - 4);
}


function runProgram(input) {

    var n = Number(input)
    console.log(SumWay(n));
  
  
    
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
    
  
  
  
  // json-server db.json --port 3001 --watch
  // json-server cart.json --port 3001 --watch
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()