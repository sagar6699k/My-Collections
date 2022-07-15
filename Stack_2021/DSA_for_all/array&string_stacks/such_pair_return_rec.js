function Find_such_pair(arr, n, k) {
    let count = 0;
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            if (arr[i] + arr[j] === k) {
                count++;
            }
            
        }
        
    }

    if (count > 0) {
        return count;
    }
    else {
        return -1;
    }
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;


        console.log(Find_such_pair(arr, n, k));
    }
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`10
      3 -9
      -1 3 -1
      10 -13
      -7 -6 4 10 -5 0 -3 1 -6 5
      4 -9
      -2 2 0 -4
      2 3
      0 0
      8 2
      5 -6 7 6 0 3 -4 8
      1 -7
      0
      8 -6
      4 7 4 -1 5 4 -6 -8
      6 4
      6 -1 -5 -5 2 -5
      4 -4
      0 -1 3 -2
      1 3
      -1`);
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
    