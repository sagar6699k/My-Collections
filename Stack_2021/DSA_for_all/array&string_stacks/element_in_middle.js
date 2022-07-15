function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    function Find_middle(n, arr) {
        
      for (let i = 1; i < n - 1; i++) {
        let left_count = 0;
        let right_count = 0;
            for (let j = i-1; j >= 0; j--) {
                if (arr[j] < arr[i]) {
                    left_count++;
                }
            }
            for (let k = i+1; k < n; k++) {
                if (arr[k] > arr[i]) {
                    right_count++;
                }
            }

        
            if (left_count === i && right_count === n-i-1) {
                return arr[i];
            }
        }
    }
   
    
  
  console.log(Find_middle(n, arr));
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      4 3 6 7 8`);
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
    
  