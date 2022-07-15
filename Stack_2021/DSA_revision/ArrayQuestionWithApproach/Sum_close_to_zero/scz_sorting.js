//You have given a array of length n , your task is to find a pair whose sum is equal to zero or sum is close to zero.
//input:
// n = 6;
// arr = 1 2 6 9 -5 -2;
//T.C = O(nlogn);
//S.C = O(n);


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    
    function SCT_zero(arr, n) {
        let min_l = 0;
        let min_r = n-1;
        let min_sum = 999999;
        let sum = 0;
        let l = 0;
        let r = n - 1;

        while (l < r) {
            sum = arr[l] + arr[r];

            if (Math.abs(sum) < Math.abs(min_sum)) {
                min_sum = sum;
                min_l = l;
                min_r = r;
            }
            if (sum < 0) {
                l++;
            } else {
                r--;
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
    