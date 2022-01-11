function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let Queue = [];
    
    for (let i = 1; i <= T; i++) {
        let [q, n] = array[i].trim().split(" ");

        if (q === "E") {
            console.log(Enqueue(n));
        }else if (q === "D") {
            console.log(Dequeue(Queue));
        }

    }
   
    function Enqueue(n) {
        Queue.push(n);
        return Queue.length;
    }

    function Dequeue(Queue) {
        if (Queue.length === 0) {
            return "-1"+" "+0
        }
        else {
            let res = Queue.shift();
            return res + " " + Queue.length;
        }
    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      E 2
      D
      D
      E 3
      D`);
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
    