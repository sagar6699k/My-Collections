function runProgram(input) {

  var array = input
 
  



  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`1
    5
    abcda`);
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