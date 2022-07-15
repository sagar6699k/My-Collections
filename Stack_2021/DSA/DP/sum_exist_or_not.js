function Subset(arr, new_arr, current, res) {
    if (new_arr.length > 0) {
        res.push([...new_arr])

    }

    if (current === arr.length) return;

    for (let i = current; i < arr.length; i++) {
        new_arr.push(arr[i]);
        Subset(arr, new_arr, i + 1, res)

        new_arr.pop();

    }

}


function SumExistOrNot(res, k ) {
    for (let i = 0; i < res.length; i++) {
        let sum = 0;
        let item = res[i];
        for (let j = 0; j < item.length; j++) {
            sum = sum + item[j];
        }
        if (sum === k) {
            return "yes"
        }
    }
   
    return "no"
}




function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let k = Number(array[2].trim());
   
    let current = 0;
    let new_arr = [];
    let res = [];
    
    Subset(arr, new_arr, current, res)
  
    console.log(SumExistOrNot(res, k ));
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`9
      1 2 3 4 5 6 7 8 9
      5`);
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
    
  
  
  
