function Subset(arr, new_arr, current, res) {
    if (new_arr.length > 0) {
        res.push([...new_arr])
    }

    if (current === arr.length) {
        return;
    }

    for (let i = current; i < arr.length; i++) {
        new_arr.push(arr[i])

        Subset(arr, new_arr, i+1, res)
        
        new_arr.pop()
    }
}


function Count_k_odd_Subset(res , box, k) {
    
    
    for (let i = 0; i < res.length; i++) {
        let item = res[i];
        let count = 0;
        for (let j = 0; j < item.length; j++) {
            if (item[j] % 2 !== 0) {
                count++;
            }
            
        }

        if (count >= k) {
            box.push(item)
        }
        
    }


}



function runProgram(input) {

    var Input = input.trim().split("\n")
    let T = Number(Input[0].trim());

    let line = 1;

    for (let i = line; i <= T; i++) {
        let [len, k] = Input[line].trim().split(" ").map(Number);
        line++;
        let arr = Input[line].trim().split(" ").map(Number);
        line++;

        

        let current = 0;
        let res = [];
        let new_arr = [];
        let box = [];
        Subset(arr, new_arr, current, res)
        Count_k_odd_Subset(res , box, k)
        console.log(box.length);
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      4 2
      4 3 2 1
      2 1
      2 3`);
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