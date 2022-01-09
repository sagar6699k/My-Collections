//You have given a array of length n , your task is to find a pair whose sum is equal to zero or sum is close to zero.
//input:
// n = 6;
// arr = 1 2 6 9 -5 -2;
//T.C = O(n^2);
//S.C = O(1);

function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    
    function SCT_zero(arr, n) {
        let min_l = 0;
        let min_r = 1;
        let min_sum = arr[0] + arr[1];

        for (let l = 0; l < n-1; l++) {
            let sum = 0;
            for (let r = l+1; r < n; r++) {
                sum = arr[l] + arr[r];

                if (Math.abs(min_sum) > Math.abs(sum) ) {
                    min_sum = sum;
                    min_l = l;
                    min_r = r;
                }
            }
            
        }
        
        console.log(arr[min_l], arr[min_r]);
    }
    
    SCT_zero(arr, n)
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`6
      1 2 6 9 -5 -2`);
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
    
  
  
  