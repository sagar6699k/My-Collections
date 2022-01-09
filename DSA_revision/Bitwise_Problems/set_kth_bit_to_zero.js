function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(Set_Kth_bit_to_zero(n, k));
    }
   
    function Set_Kth_bit_to_zero(n, k) {
        let i = 1;
        i = i << k; // here we are left shifting , i.e 10
        let j = ~i; // here we create compliment of i , i.e 01
        let res = n & j; // this is and operator

        return res
    }
    
  // Output become 25 and 5
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      27 1
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
    
  