//Incomplete 


function ParkingSlot(k, A, D) {
    let count = 0;
    let i = 1;
    let j = 0;

    while (i < A.length && j < D.length) {
        if (A[i] <= D[j]) {
            count++;
            i++;
        }
        else {
            j++;
            count--;
        }


        if (count > k) {
            return "NotPossible"
        }
    }

    
        return "Possible"
    
}



function runProgram(input) {

    var array = input.trim().split("\n");
    let k = Number(array[0].trim());
    let A = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let D = array[2].trim().split(" ").map(Number).sort((a,b)=>a-b);
   

    console.log(ParkingSlot(k, A, D));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      1 3 5
      2 6 8`);
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