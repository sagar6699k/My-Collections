function SpecialProduct(n, arr) {
  let res = [];

  let prod = 1;
  for (let i = 0; i < n; i++) {
    prod = prod * arr[i];
  }

  for (let i = 0; i < n; i++) {
    res.push(prod / arr[i]);
  }

  return res.join(" ");
}

function runProgram(input) {

  var array = input.trim().split("\n");
  let T = Number(array[0].trim());
  let line = 1;
  for (let i = 1; i <= T; i++) {
    let n = Number(array[line].trim());
    line++;
    let arr = array[line].trim().split(" ").map(Number);
    line++;


    console.log(SpecialProduct(n, arr));
  }
   

  //T.C = O(n)
  //S.C = O(n)
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5
      1 2 3 4 5
      3
      3 2 7`);
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
    
  
  
  