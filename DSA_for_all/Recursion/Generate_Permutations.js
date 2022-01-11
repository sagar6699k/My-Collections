let res = [];
let current = 0;

function Generate_Permuatation(arr, current) {
    
    if (current === arr.length) {
        return res.push(arr.join(" "));
    }

    for (let i = current; i < arr.length; i++) {
        let temp = arr[i];
        arr[i] = arr[current];
        arr[current] = temp;

        Generate_Permuatation(arr, current + 1);

        temp = arr[i];
        arr[i] = arr[current];
        arr[current] = temp;
        
    }
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    Generate_Permuatation(arr, current)

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
    