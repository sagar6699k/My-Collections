function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);

    function CheckUnique(n, arr) {
        
        for (let i = 0; i < n; i=i + 2) {
            if (arr[i] !== arr[i + 1]) return arr[i];
            else if (i === n - 1) return arr[i];
            
        }

    }
    console.log(CheckUnique(n, arr));
  
 
  //T.C = O(nlogn)
  //1.C = O(n)



  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`7
    3 5 4 7 3 4 7`);
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
  


