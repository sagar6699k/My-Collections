function runProgram(input) {

    var Bill = Number(input);
    var act_Bill = Bill - 80;
    
    var unit = 0;
    if(act_Bill > 650){
      unit =150;
      var remain = act_Bill- 650; 
      unit = unit + remain/10 ;
    }else if(act_Bill > 150){
      unit = 50;
      var remain = act_Bill - 150 ;
      unit = unit + remain/5;
    }else{
      unit = unit + act_Bill/3
    }

    console.log(unit);


    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`600`);
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