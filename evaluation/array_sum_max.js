function MaxSum(arr, len) {
    let res = [];
    for (let i = 0; i < len; i++) {
        let item = arr[i]
        for (let j = 0; j < len; j++) {
           if (arr[j] >= item) {
               arr[j] = item
            }
           else {
            arr[j] = -1
            }
        }
        console.log(arr);
        let sum = 0;
        for (let k = 0; k < len; k++) {
            sum = sum + arr[k]
          
        }
        res.push(sum)
    }

    return res
}



function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let len = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(MaxSum(arr, len));
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3
      2 3 1
      5
      1 6 7 1 5`);
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
    
  
  
  
  // json-server db.json --port 3001 --watch
  // json-server cart.json --port 3001 --watch
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()