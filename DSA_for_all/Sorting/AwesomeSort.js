function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
        
        
        console.log(AwesomeSort(n, arr));
    }
   
    function AwesomeSort(n, arr) {
        let res1 = []
        let res2 = []
        let res3 = []

        for (let i = 0; i < n; i++) {
            if (arr[i]%5 === 0 && arr[i]%2 === 0) {
                res1.push(arr[i]);
            }
        }
        
        for (let i = 0; i < n; i++) {
            if (arr[i]%2 === 0 && arr[i]%5 != 0) {
                res2.push(arr[i]);
            }
        }

        for (let i = 0; i < n; i++) {
            if (arr[i]%2 !== 0) {
                res3.push(arr[i]);
            }
        }

        let ans = [];
        ans = [...ans, ...res1.sort((a,b)=>b-a), ...res2.reverse(), ...res3 ]

        return ans;

    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      6
      5 3 10 30 26 13
      8
      1 5 2 10 4 7 3 20
  `);
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
    