function runProgram(input) {

    var arr = input.trim().split("\n")
    // console.log(arr);

    function char_with_a(el){
        if(el.trim()[0] === 'a' || el.trim()[el.trim().length - 1] === 'a'){
            return el.trim();
        }
    }

    var res = arr.filter(char_with_a);
    console.log(res.join(" "));
  


    
    


  

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`apple
    nuber
    ola 
    ubantu 
    cola`);
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