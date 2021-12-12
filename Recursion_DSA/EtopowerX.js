function runProgram(input) {

    var arr = input.trim().split(" ");
    let x = Number(arr[0].trim())
    let n = Number(arr[1].trim())


    function facto(n) {
        if (n == 1 || n == 0) return 1

        return n * facto(n-1)
    }
    
    let sum = 0;
    function EtopowerX(x , n) {
        if (n < 0) return 0;
        let sum = x**n
        return (sum / facto(n)) + EtopowerX(x , n-1)
            
    }

    console.log(EtopowerX(x , n).toFixed(4));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4 2`);
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