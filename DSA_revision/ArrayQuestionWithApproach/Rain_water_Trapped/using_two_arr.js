// Givennnon-negative integers representing an elevation map where the width of each bar is 1, calculate how much rain water will be trapped after it rains.

//TC = O(n);
//SC = O(n);



function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;

        console.log(RainWaterTrapped(arr, n));
        
    }
   

    function RainWaterTrapped(arr, n) {
      let res = 0;
      let left = [arr[0]];
        for (let i = 1; i < n; i++) {
          left[i] = Math.max(left[i - 1], arr[i]);
        }
        
      let right = [arr[n - 1]];
      let c=0
        for (let j = n-2; j >= 0; j--) {
          right.push(Math.max(right[c++], arr[j]));
        }
        
      let right1 = right.reverse();

      for (let k = 0; k < n; k++) {
        res = res + ((Math.min(left[k], right1[k])) - arr[k]);
      }
      
      
      return res;
    }



  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5
      3 2 0 4 6
      7
      7 0 3 6 2 3 5`);
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
    