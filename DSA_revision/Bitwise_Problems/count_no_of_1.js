//Here you have given a number ,after converting it to binary number , you have to find number of one in that;
// n = 27 means 11011 => so output = 4; 

function runProgram(input) {

    var n = Number(input);

    let count = 0;
    while (n > 0) {
        if (n&1 !== 0) {
            count++;
        }
        n = n / 2;
    }
    console.log(count);

  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`27`);
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
    
  