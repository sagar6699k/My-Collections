function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    console.log(arr);
    for (let i = 0; i < n; i++) {
        if ((arr[i]^1) === arr[i]+1){
          console.log("Even");
        }
        else if ((arr[i]^1) === arr[i]-1){
          console.log("Odd");
        }
       
    }

  // 0 ^ 0 => 0      also  2^1=3;
  // 1 ^ 1 => 0      lly   4^1=5;
  // 1 ^ 0 => 1      lly   7^1=6;
  // 0 ^ 1 => 1      lly   9^1=8;
  


  // if (n ^ 1) === n+1 then => n is even number
  // if (n ^ 1) === n-1 then => n is odd number

  // Also, if n&1 === 0 then => n is even number
  // Also, if n&1 === 1 then => n is odd number


   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`5
      1 2 3 4 5`);
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
    
  
  
  