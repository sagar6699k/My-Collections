function runProgram(input) {

    var arr = input.trim().split(" ").map(Number)
    console.log(arr);

    function getEven(el, index){
        if(el % 2 == 0 && index % 2 == 0){
            return el;
        }
    }

    var res = arr.filter(getEven);
    console.log(res.join(" "));
  


    
    


  

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2 4 5 3 6 8`);
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