function staires(n) {
    
  if (n < 0) return 0;
  if (n == 0) return 1;

  return staires(n - 1) + staires(n - 2) + staires(n - 3);
}



function runProgram(input) {

    var n = Number(input)
    console.log(staires(n))
   
    

    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4`);
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