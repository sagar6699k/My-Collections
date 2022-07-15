// function Stairs(n) {

//     if (n < 0) return 0;
//     if (n == 0) return 1;

//     return ( Stairs(n-1) + Stairs(n-3) + Stairs(n-4) )
//   }


function runProgram(input) {

  var n = Number(input.trim())
  let dp = new Array(n + 1).fill(-1);
  dp[0] = 1;
  function Stairs(n) {

    if (dp[n] === -1) {
      dp[n] = ( Stairs(n-1) + Stairs(n-3) + Stairs(n-4) )
    }

    return dp[n]
  }

  console.log(Stairs(n));

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