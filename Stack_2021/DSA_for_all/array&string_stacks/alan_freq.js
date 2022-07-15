function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split("")
    let obj = {};

    let letters = "abcdefghijklmnopqrstuvwxyz"
    
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < n; j++) {
            if (letters[i] === arr[j]) {
                if (obj[letters[i]] === undefined) {
                    obj[letters[i]] = 1;
                }
                else {
                    obj[letters[i]] = obj[letters[i]] + 1;
                }
            }
            
        }
    }

    for (const key in obj) {
       console.log(key+"-"+obj[key]);
    }
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      aman`);
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