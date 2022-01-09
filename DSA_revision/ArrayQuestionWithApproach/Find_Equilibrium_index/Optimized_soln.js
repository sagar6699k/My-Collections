function FindEquilibriumIndex(n, arr) {
   
    let sum = 0;
    let l_sum = null; 
    //First find out total sum;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    //Now substract one one element and find right_sum and left_sum;

    for (let j = 0; j < n; j++) {
        
        sum -= arr[j];

        if (sum === l_sum) {
            return j;
        }
        
        l_sum += arr[j];
    }


    return -1;

}


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    console.log(FindEquilibriumIndex(n, arr));
    
//T.C = O(n)
//S.C = O(1)
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`7
      -7 1 5 2 -4 3 0`);
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
    
  
  
  