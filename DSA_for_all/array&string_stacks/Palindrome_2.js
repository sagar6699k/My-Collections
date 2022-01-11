function DetectPalindrome(n, arr) {
    let obj = {};

    for (let i = 0; i < n; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]] = obj[arr[i]] + 1;
        }
        
    }

    let count = 0;
    for (const key in obj) {
        if (obj[key]%2 !== 0) {
            count++;
        }
    }

    if (count >= 2) {
        return "Not Possible!"
    } else {
        return "Possible!"
    }
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split("");
        line++;

        console.log(DetectPalindrome(n, arr));
        
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      6
      aabbcc
      5
      aabcd`);
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
    