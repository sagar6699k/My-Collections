function runProgram(input) {

    var N = Number(input);

    var SUM = 0;
    var sum = 0;
    var count = 0;
    var box = [];
    for (let i = 1; i < N; i++) {
        var n = i;
        sum += n;
        count++;
        SUM += sum;
        if(SUM > N){
            break;
        }

        box.push(count)
    }
    console.log(box[box.length-1]);
    
    
    
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`25`);
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