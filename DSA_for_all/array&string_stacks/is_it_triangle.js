function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    for (let i = 1; i <= T; i++) {
        let arr = array[i].trim().split(" ").map(Number);
        
        console.log(IsItTriangle(arr));
        
    }
    
    function IsItTriangle(arr) {
        let [a, b, c] = arr;

        if ((a+b) > c && (b+c) > a && (a+c) > b) {
            return "Yes"
        }
        return "No"
    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      4 5 13
      7 1 8
      2 5 4
      2 2 2
      `);
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
    