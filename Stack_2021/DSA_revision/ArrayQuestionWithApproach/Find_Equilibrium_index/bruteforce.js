function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    function FindEquilibriumIndex(n, arr) {
        for (let i = 1; i < n - 1; i++) {
            let left_sum = 0;
            let right_sum = 0;
            for (let j = 0; j < i; j++) {
                left_sum += arr[j];
            }
            for (let k = i+1; k < n; k++) {
                right_sum += arr[k];
            }
            
            if (left_sum === right_sum) {
                return i;
            }
        }

        return -1;
    }
   
    console.log(FindEquilibriumIndex(n, arr));
    
//T.C = O(n^2)
//S.C = O(1)
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      3 3 5 5 1`);
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
    
  
  
  