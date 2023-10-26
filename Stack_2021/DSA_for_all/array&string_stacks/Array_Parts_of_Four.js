// Description

// You are given an array stored in a variable with the name arr
// The size of the array is stored in a variable with the name N
// The value stored inNis always divisible by 4
// You have to find the value of the equation -2*c1 + c2 + 2*c3 + c4, such that
// The array is divided into 4 halves
// c1 -> The sum of the first half of the array
// c2 -> The sum of the second half of the array
// c3 -> The sum of third half of the array
// c4 -> The sum of the fourth half of the array
// For example, consider the value stored inN = 8, andarr = [1 2 3 4 5 6 7 8]
// Now,c1 = 1 + 2 = 3,c2 = 3 + 4 = 7,c3 = 5 + 6 = 11,c4 = 7 + 8 = 15
// Therefore, the value of the equation2*(3) + 7 + 2*(11) + 15 = 6 + 7 + 22 + 15 = 50, which is the required output

//input                             output
// 8                                   50
// 1 2 3 4 5 6 7 8







function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    let p = 0;
    let k = n / 4;
    let q = k;
    let sum1 = 0; //c1+c3+c5+..
    let sum2 = 0; //c2+c4+c6+..

    while (p < n) {
        for (let j = p; j < p+k; j++) {
            sum1 = sum1 + arr[j];
        }
        p = p + 2 * k;
    }

    while (q < n) {
        for (let j = q; j < q+k; j++) {
            sum2 = sum2 + arr[j];
        }
        q = q + 2 * k;
    }

    let ans = sum1 * 2 + sum2;
    console.log(ans);
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8
      1 2 3 4 5 6 7 8`);
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
    