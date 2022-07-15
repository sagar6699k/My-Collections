function LengthOfString(array, i, len) {
    if (array[i] === undefined)  return len; 

    len++;
    return LengthOfString(array,i+1,len)
}



function runProgram(input) {

    var arr = input.trim().split("")
    let len = 0;
    let i = 0
    console.log(LengthOfString(arr , i , len))
   
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`masaischool`);
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