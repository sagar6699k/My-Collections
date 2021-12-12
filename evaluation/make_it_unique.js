function runProgram(input) {

    var arr = input.trim().split("")
    
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] !== " ") {
        if (obj[arr[i]] == null) {
          obj[arr[i]] = 1
        }
        else {
          obj[arr[i]] = obj[arr[i]] + 1
        }
      }
     
      
    }
   
  let unique = Object.keys(obj)
    console.log(unique.join(""))
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`my name is ankush`);
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