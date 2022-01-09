function SpecialProduct(n, arr) {
   
  //First Travel from left to right & find product by multiplying prev and push that preduct to arr1;

    let arr1 = [1];
    let l_prod = 1;
    for (let i = 0; i < n-1; i++) {
      l_prod = l_prod * arr[i];
      arr1.push(l_prod);
    }
    
  //Now Travel from right to left & find product by multiplying prev and push that preduct to arr2;
  let arr2 = [1];
  let r_prod = 1;
  for (let j = n-1; j >= 1; j--) {
    r_prod = r_prod * arr[j];
    arr2.push(r_prod);
  }
  let arr2_rev = arr2.reverse();

  //Now take prod of arr1[i]*arr2_rev[i] and push this product to new array
  let res = [];
  for (let k = 0; k < n; k++) {
    res.push(arr1[k] * arr2_rev[k]);
  }
  
  return res.join(" ");
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
  
  
      console.log(SpecialProduct(n, arr));
    }
     
  
    //T.C = O(n)
    //S.C = O(n)
      
    
    
    
      
      }
      if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`2
        5
        1 2 3 4 5
        3
        3 2 7`);
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
      
    
    
    