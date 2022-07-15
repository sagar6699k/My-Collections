let res = [];
function Permutation(arr, l, r) {

  if (l === r) {
      
      return res.push(arr.join(" "));
  }
  else {
      
    for (let i = l; i <= r; i++) { //0
        //swap(i , l)
        let temp = arr[l];
        arr[l] = arr[i];
        arr[i] = temp;
        
        Permutation(arr, l+1, r)

        temp = arr[l];
        arr[l] = arr[i];
        arr[i] = temp;
    }
  }
  
}

function runProgram(input) {

  var Input = input.trim().split("\n");
  let n = Number(Input[0]);
  let arr = Input[1].trim().split("")
  let l = 0;
  let r = n-1;
  
  Permutation(arr, l, r);
  console.log(res);
//   console.log(res.sort().join("\n"));
  


  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`3
    ABC`);
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