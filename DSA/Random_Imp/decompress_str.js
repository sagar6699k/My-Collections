function runProgram(input) {

    var arr = input.trim().split("")
   
    var decomp = "";
    for(var i = 0; i < arr.length; i=i+2){
        for(var j = 0; j< arr[i+1]; j++){
            decomp = decomp + arr[i];
        }
    }
  
    console.log(decomp);


    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`a3b2`);
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