function runProgram(input) {

    var arr = input.trim().split("\n")
    // console.log(arr);
    var data = [];
    for(var i=0; i<arr.length; i++){
        var item = arr[i].trim().split(" ")
        // console.log(item);
        var n = item[0];
        var a = item[1];
        var user = {};
        user.name = n;
        user.age = a;
        // console.log(user);
        data.push(user)
    } 
    // console.log(data);

    for(var i=0; i<data.length; i++){
        if(data[i].age>30){
            console.log(data[i].name);
            
        }
    }
    
  


    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`Nrupul 32
      Prateek 30
      Aman 26
      Ankur 34
      Albert 28
      Yogesh 44
      Sidharth 22`);
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