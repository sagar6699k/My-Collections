function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    

    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;

        console.log(FindTallest(n, k, arr));
        
    }

    function FindTallest(n, k, arr) {
       
        let res = [];

        for (let i = 0; i <= n-k; i++) {
            let max = 0;
            for (let j = i; j <i+k; j++) {
                if (arr[j] > max) {
                    max = arr[j];
                }
            }
            res.push(max);
        }

        return res.join(" ");

    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      9 3
      1 2 3 1 4 5 2 3 6`);
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
    