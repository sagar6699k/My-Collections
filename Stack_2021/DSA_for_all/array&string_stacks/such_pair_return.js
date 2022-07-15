function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number).sort((a,b)=>a-b);
        line++;

        
        let l = 0;
        let r = n - 1;

        let count = 0;
        while (l < r) {

            if (arr[l] + arr[r] === k) {
                count++;
            }
            else if (arr[l] + arr[r] < k) {
                l++;
            }
            else{
                r--;
            }


        }
        
        if (count > 0) {
          console.log(1);
        }
        else {
          console.log(-1);
        }
    }
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      5 2
      3 4 0 2 7`);
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
    