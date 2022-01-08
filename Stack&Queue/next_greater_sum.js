function nextGreaterSum(size,ele) {
    let stack=[];
    let res = [];
    let sum = 0;
    for (let i = ele.length-1; i >=0; i--) {
        
        if (stack.length == 0) {
            res.push(0);
        }
        else if (stack.length>0 && stack[stack.length-1] > ele[i]) {
            // res.push(ele[i])
            sum= sum + ele[i]
        }
        else if (stack.length>0 && stack[stack.length-1] < ele[i]) {
            while (stack.length>0 && stack[stack.length-1] < ele[i]) {
                stack.pop();
            }
            if (stack.length==0) {
                res.push(0)
            }else{
                // res.push(ele[i])
                sum= sum + ele[i]
            }
        }

        stack.push(ele[i])
        
    }

    console.log(sum);


}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());
    
    let line= 1;

    for (let i = 1; i <= T; i++) {
        let size = Number(arr[line].trim());
        line++;
        let ele = arr[line].trim().split(" ").map(Number);
        line++;

        nextGreaterSum(size,ele);
        
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      6
      6 10 4 8 3 7`);
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