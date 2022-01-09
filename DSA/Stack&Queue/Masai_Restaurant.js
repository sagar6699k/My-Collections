let MasaiRestaurant = (q,p,stack)=>{

    if (q == 2) {
        stack.push(p);
    }
    else if (q == 1) {
        
        if (stack.length > 0) {
            console.log(stack[stack.length-1]);
            stack.pop();
            

        }else if(stack.length == 0){
            console.log("No Food");
        
        }
    }

    
    
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());
    let line = 1;
    let stack = [];
    for (let i = line; i <= T; i++) {
        let [q,p] = arr[line].trim().split(" ").map(Number);
        line++;


        MasaiRestaurant(q,p,stack);
        
    }
    
  

    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`6
      1
      2 5
      2 7
      2 9
      1
      1`);
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