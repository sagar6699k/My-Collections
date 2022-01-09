function FindMajorityElement(arr, n) {
  let half = Math.floor(n / 2);
  for (let i = 0; i < n; i++) {
      if (arr[i] === arr[half+i]) {
        return arr[i];
      }
  }
  
  return -1;
}



function runProgram(input) {

  var array = input.trim().split("\n");
  let T = Number(array[0].trim());
  let line = 1;
 
  for (let i = 1; i <= T; i++) {
    let n = Number(array[line].trim());
    line++;
    let arr = array[line].trim().split(" ").map(Number).sort((a,b)=>a-b);
    line++;
       

    console.log(FindMajorityElement(arr, n));
  }

  //TC = O(nlogn)
  //SC = O(n)
   

}
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`2
        6
        1 1 1 1 2 3
        5
        1 1 2 2 3`);
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
    
  
  
  