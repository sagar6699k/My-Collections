function runProgram(input) {

    var array = input.trim().split("\n")
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number).sort((a,b)=>a-b);
        line++;

        console.log(LifeBoat(n, arr, k));
        
    }

    function LifeBoat(n, arr, k) {
        let res = 0;
        let l = 0;
        let r = n - 1;

        while (l <= r) {
            res++;
            if ((arr[l] + arr[r]) <= k) {
                l++;
            }
            r--;
        }
        
        return res;
    }





  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      4 5
      3 5 3 4
      4 3
      1 2 2 3`);
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
    