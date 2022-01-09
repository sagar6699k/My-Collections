function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(Toggle_the_set(n, k));
    }
   
    function Toggle_the_set(n, k) {
        let i = 1;
        i = i << k; // here we are left shifting
        
        let res = n ^ i; // Using X-OR operator;

        return res
    }
    
  // Output become 31 and 5
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      27 2
      7 1`);
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
    
  