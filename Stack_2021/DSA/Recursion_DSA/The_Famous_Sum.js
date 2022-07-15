function SumDigit(num) {

    if ((num >= 0) && (num < 10))  return num;
       
    else 
        var dig = num.toString().split("").map(Number)
        var sum = 0;
        for (var i = 0; i < dig.length; i++) {
            sum += dig[i] 
        }
        return SumDigit(sum)
        
    
}


function runProgram(input) {

    var arr = input.trim().split(" ")
    let n = arr[0].trim();
    let k = arr[1].trim();
    let n1 = ""
    for (let i = 1; i <= k; i++) {
        n1 = n1+""+n
    }
    let num = Number(n1)
    console.log(SumDigit(num));
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`148 3`);
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