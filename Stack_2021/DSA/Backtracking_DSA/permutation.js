let res = [];
function Permutation(arr, current) {

  if (current === arr.length) {
    
      return res.push(arr.join(" "));
  }

  for (let i = current; i < arr.length; i++) { //0
      //swap(i , current)
      let temp = arr[i];
      arr[i] = arr[current];
      arr[current] = temp;
      
      Permutation(arr , current+1)
      //swap(i , current)
      temp = arr[i];
      arr[i] = arr[current];
      arr[current] = temp;
  }
  
}

function runProgram(input) {

  var Input = input.trim().split("\n");
  let n = Number(Input[0]);
  let arr = Input[1].trim().split(" ")
  let current = 0;
  
  Permutation(arr, current);
  console.log(res.sort().join("\n"));
  


  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`3
    1 2 3`);
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