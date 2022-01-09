function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(CkeckBitSet(n, k));
    }
   
    function CkeckBitSet(n, k) {
        
        let i = 1;
        i = i << k; // here we are shifing 1 => 100
        let res = n & i; //101 + 010 = 111;

        if (res === 0) return "No";
        return "Yes"
    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5 2
      5 1`);
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
    
  