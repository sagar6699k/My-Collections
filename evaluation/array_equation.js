function runProgram(input) {

    var Input = input.trim().split("\n");
    let N = Number(Input[0].trim());
    let array = Input[1].trim().split(" ").map(Number);
    

    let X = 0;
    let Y = 0;
    let A = 2;
    let B = 3;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            X = X + array[i]
        }
        else {
            Y = Y + array[i]
        }
        
    }

    let Z = A * X + B * Y;

    console.log(Z);

    
   
    
  
  
  
    
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