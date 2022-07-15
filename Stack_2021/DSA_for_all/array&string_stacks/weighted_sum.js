function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(WeightedSum(arr, n));
    }
   
    function WeightedSum(arr, n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum = sum + ((i + 1) * arr[i]);
        }
        return sum;
    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5
      1 2 3 4 5
      2
      100 1`);
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
    