// Description
// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

function runProgram(input) {

    var n = Number(input);

    function Number_of_way(n) {
        
        if (n < 0) return 0;
        if (n === 0) return 1;
        return Number_of_way(n - 1) + Number_of_way(n - 2) + Number_of_way(n - 3);
    }
   
    console.log(Number_of_way(n));
  
  
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
    