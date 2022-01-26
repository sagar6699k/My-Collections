function runProgram(input) {

    var arr = input.trim().split("\n");
    var day = arr[0];
    var N = Number(arr[1]);
    
    var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    for(var i = 0; i < week.length; i++){

        if(N >= 7 && (week[i] == day)){
          

                if((i+(N%7)) > 6){
                    console.log(week[( i+(N%7) )%7]);
                }else{
                console.log(week[i + (N%7)]);
                }

            
        }
        
        

        if(N < 7  && (week[i] == day)){
          
                if((i + N) > 7){
                    console.log(week[N-1]);
                }
                else{
                    console.log(week[i+N]);
                }
         
        }
        
        
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`Sunday
      2`);
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