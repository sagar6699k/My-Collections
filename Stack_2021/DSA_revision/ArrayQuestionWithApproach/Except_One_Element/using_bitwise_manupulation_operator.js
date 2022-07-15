function Find_unique(n, arr) {

  if (n === 1) {
    return arr[0];
  }
  else {
    // 1 2 1 3 2
    // 1 ^ 2 => 3 ^ 1 => 2 ^ 3 => 1 ^ 2 =>3

    let temp = arr[0]        
    for (let i = 1; i < n; i++) {
        temp = temp ^ arr[i];
    }
    return temp;
  }

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
    
    console.log(Find_unique(n, arr));
  }

    
  //T.C = O(n)
  //S.C = O(1)

    
  


  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      1
      5
      5
      1 2 1 3 2`); 
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
  


