function runProgram(input) {

    var num = Number(input);

    function isHappy(num) {
        if (num === 1) return true;
        if (num >= 2 && num < 10) return false;

        else
            var sum = 0;
            if (num >= 10) {
                var dig = num.toString().split("").map(Number)
                for (var i = 0; i < dig.length; i++) {
                sum += dig[i]**2 
                }
            }
        
            if (num > 3 && num <10) {
                sum = (Number(num))**2 
            }
            
    
            return isHappy(sum) 
    }


    console.log(isHappy(num));
    //RangeError: Maximum call stack size exceeded
   
    
   
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`7`);
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