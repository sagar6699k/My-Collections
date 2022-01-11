function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let Stack1 = [];
    let Stack2 = [];

    for (let i = 1; i <= T; i++) {
        let [q, n] = array[i].trim().split(" ");

        if (q === "E") {
            Enqueue(n)
        }else if (q === "D") {
            console.log(Dequeue(Stack1));
        }

    }

    function Enqueue(n) {
        
        while (Stack1.length !== 0) {
            Stack2.push(Stack1.pop());
        }
    
        Stack1.push(n);
    
        while (Stack2.length !== 0) {
            Stack1.push(Stack2.pop());
        }
    
    }
    
    function Dequeue(Stack) {
    
        if (Stack.length === 0) {
            return "Empty"
        }
        else {
            return Stack.pop();
        }
        
    }






    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      E 2
      E 3
      D
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
    