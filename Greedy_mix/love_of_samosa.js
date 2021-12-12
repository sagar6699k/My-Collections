// Amit went down to the Samosa street to have some. But he only has K units of money with him. There are N shops on the street and unfortunately, all of them have only one samosa remaining. You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

// Find the maximum samosas that Amit can eat.
// Input Format

// First line contains two space-separated integers N and K.

// Second line contains N space separated integers, the cost of a samosa on the shops.




function runProgram(input) {

    var array = input.trim().split("\n");
    var [n, r] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    

    let sum = 0;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum <= r) {
            count++;
        }
        else {
            break;
        }
    }

   console.log(count);
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4 10
      5 4 2 4`);
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