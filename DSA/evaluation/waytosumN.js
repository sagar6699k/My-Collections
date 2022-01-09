function runProgram(input) {

    var arr = input.trim().split("\n")
    let T = Number(arr[0].trim());
 
    let line = 1;

    for (let i = line; i <= T; i++) {
        let n = Number(arr[line].trim());
        line++;
        
        function WayToSumN(n) {
            if (n < 0) return 0;
            if (n === 0) return 1;
    
            return WayToSumN(n-1) + WayToSumN(n-2) + WayToSumN(n-5)
        }
        
        console.log(WayToSumN(n))

    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      5`);
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