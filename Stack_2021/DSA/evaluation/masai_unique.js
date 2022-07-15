function runProgram(input) {

    var array = input.split("")
    
    let obj = {};
    for (let i = 0; i < array.length; i++) {
       if (obj[array[i]] === undefined) {
        obj[array[i]] = 1
        }
       else {
        obj[array[i]] = obj[array[i]]+1
        }
        
    }

    let count = 0
    for (const key in obj) {
        if (obj[key] > 1) {
            count++;
        }
    }
    
    if (count) {
        console.log("No");
    } else {
        console.log("Unique");
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`masai`);
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