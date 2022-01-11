function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let Queue1 = [];
    let Queue2 = [];
    
    for (let i = 1; i <= T; i++) {
        let [q, n] = array[i].trim().split(" ");

        if (q === "Push") {
            put(n)
        }else if (q === "Pop") {
            console.log(get(Queue1));
        }

    }
  
    function put(n) {
        
        while (Queue1.length !== 0) {
            Queue2.push(Queue1.pop());
        }
    
        Queue1.push(n);
    
        while (Queue2.length !== 0) {
            Queue1.push(Queue2.pop());
        }
    
    }
    
    function get(Queue) {
    
        if (Queue.length === 0) {
            return "Empty"
        }
        else {
            return Queue.shift();
        }
        
    }
  





    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      Push 4
      Push 5
      Pop`);
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
    