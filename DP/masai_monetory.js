function Max_Value(n) {
    if (n <= 5) return n

    return Math.max( (Max_Value(n/2) + Max_Value(n/3) + Max_Value(n/4)), n)
}

function runProgram(input) {

    var arr = input.trim().split("\n").map(Number);
    
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i]
        console.log(Math.floor(Max_Value(n)))
    }
   
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`12
      2`);
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