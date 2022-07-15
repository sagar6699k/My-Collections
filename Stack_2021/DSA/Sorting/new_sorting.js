function runProgram(input) {

    let arr = input.trim().split("\n");
    let [len,k] = arr[0].trim().split(" ").map(Number);

    let numbers = arr[1].trim().split(" ").map(Number);
    // console.log(len,k,numbers)

  
    for (let i = 0; i < numbers.length-1; i++) {
        let condition = false;

        
        for (let j = 0; j < numbers.length-i-1; j++) {
            if ((numbers[j]%k) > (numbers[j+1]%k)) {

                let temp = numbers[j];
                numbers[j] =numbers[j+1];
                numbers[j+1] = temp;

                condition = true;
                
            }
            
        }

        if (condition == false) {
            break;
        }
       
    }
    console.log(numbers.join(" "));

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5 6
      12 18 17 65 46`);
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