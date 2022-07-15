function runProgram(input) {

    var arr = input.trim().split("\n");
    var size = Number(arr[0]);
    var elements = arr[1].trim().split(" ").map(Number);
    
    var box = [];
    for(var i = 0; i < size; i++){
        var count = 0;

        for(var j = i; j < size; j++){
            if(elements[j] == elements[i]){
                count++;
            }
        }

        box.push(count)
    }
    //console.log(box);
    
    var highest = box[0];
    for(var i = 0; i < box.length; i++){
        if(box[i] > highest){
            highest = box[i]
        }
    }

    for(var i = 0; i < box.length; i++){
        if( highest == box[i]){
            console.log(elements[i]);
            break;
        }
    }

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      0 2 0 6 9`);
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