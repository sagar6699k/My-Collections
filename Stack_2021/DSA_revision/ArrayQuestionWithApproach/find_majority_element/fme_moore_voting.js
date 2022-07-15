function FindMajorityElement(arr, n) {
  let mi = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
      if (arr[mi] === arr[i]) {
          count++;
      }
      else {
          count--;
      }
      if (count === 0) {
          mi = i;
          count = 1;
      }
      
  }
  return arr[mi]
 }

function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let falf = Math.floor(n / 2);
    

   

   
   FindMajorityElement(arr, n)

  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`9
      3 3 4 2 4 4 2 4 4`);
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
    
  
  
  