function runProgram(input) {

    var Input = input.trim().split("\n")
    let T = Number(Input[0].trim())

    let line = 1;
    for (let i = line; i <= T; i++) {
        let len = Number(Input[line].trim());
        line++;
        let arr = Input[line].trim().split("").map(Number).sort();
        line++;

        
        

        let obj = {}

        
            for (let j = 0; j < arr.length; j++) {
              
                if (obj[arr[j]] === undefined) {
                    obj[arr[j]] = 1
                } else {
                    obj[arr[j]] = obj[arr[j]] + 1;
                }
                
            }

            for (let i = 0; i < 9; i++) {
                if (obj[i] === undefined) {
                    obj[i] = 0
                } 
                
            }
            
        
        
        console.log(Object.values(obj).join(" "));

       
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5
      21321
      6
      235452`);
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