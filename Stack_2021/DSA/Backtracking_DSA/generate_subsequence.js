function Generate_Subseq(str, new_str, current) {
    
    if (new_str.length > 0) {
        console.log(new_str.join("")); 
        
    }

    if (current === str.length) return;

    for (let i = current; i < str.length; i++) {
        new_str.push(str[i])  
        Generate_Subseq(str, new_str, i+1) 
        new_str.pop();
        
    }

}


function runProgram(input) {

    var Input = input.trim().split("\n");
    let n = Number(Input[0]);
    let str = Input[1].trim().split("")
  
    let current = 0
    let new_str = [];
    Generate_Subseq(str, new_str, current)
   
    

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      abc`);
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