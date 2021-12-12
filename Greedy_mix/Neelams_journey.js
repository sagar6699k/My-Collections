// Neelam has N friends studying in various schools. She wants to find a new friend in(N+1)th school. Assume all schools are separated by 1 unit distance. To reach(N+1)th school she has to board a bus.

// The ith school would cost of C[i] rupees to travel 1 unit of distance. In other words, the bus fare to travel from the ith school to the jth school is abs(i – j )*C[i]rupees.

// The task is to find the minimum bus fare to travel from school 1 to school(N + 1)i.e. beyond the last school.





function MinimumBusFare(arr) {
    let currentCost = arr[0];
    let sum = 0;
    let totalCost = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= currentCost) {
            count++;
        }
        else {
            sum = sum + (currentCost*count)
            currentCost = arr[i];
            count = 1;
        }
    }

    totalCost = sum + (currentCost*count)
    return totalCost;
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    console.log(MinimumBusFare(arr));
   
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      4 7 8 3 4`);
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