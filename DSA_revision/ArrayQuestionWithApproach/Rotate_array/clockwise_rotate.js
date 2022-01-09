function RotateClockwise(n, k, arr) {
    if (k === n) {
        return arr.join(" ");
    }
    else {
        k = k % n;
        for (let i = 0; i < k; i++) {
            arr.unshift(arr.pop());
        }
        return arr.join(" ");
    }

}

//T.C = O(n)
//S.C = O(1)


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;

        
        console.log(RotateClockwise(n, k, arr));
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      3 1
      1 2 3
      2 2
      1 2
      2 3
      1 2`);
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
    
  
  
  