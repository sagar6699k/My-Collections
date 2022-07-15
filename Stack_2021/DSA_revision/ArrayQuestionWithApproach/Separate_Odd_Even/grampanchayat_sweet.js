function SeparateOddEven_with_querry(n,q,arr) {
    
    if (q === 1) {
        let l = 0;
        let r = n - 1;
        while (l < r) {
            
            while (arr[l]%2 === 0 && l<r) {
                l++;
            }
            while (arr[r]%2 !== 0 && l<r) {
                r--;
            }

            //Swaping
            if (l < r) {
                let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;

            }

        }
    }
    else if (q === 2) {
        let l = 0;
        let r = n - 1;

        while (l < r) {
            
            while (arr[l]%2 !== 0 && l<r) {
                l++;
            }
            while (arr[r]%2 === 0 && l<r) {
                r--;
            }

            //Swaping
            if (l < r) {
                let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;

            }

        }
    }

    return arr.join(" ");
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
        let q = Number(array[line].trim());
        //if q=1 -> make even at starting
        //if q=2 -> make odd at starting
        line++;
        
        console.log(SeparateOddEven_with_querry(n,q,arr));
        
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      6
      1 3 5 2 7 4
      1
      6 
      1 3 5 2 7 4
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
    
  
  
  