function subset1(new_arr1, arr1, current1, res1) {
    
    if (new_arr1.length > 0) {
        res1.push([...new_arr1])
    }

    if (current1 === arr1.length) {
        return;
    }

    for (let i = current1; i < arr1.length; i++) {
        new_arr1.push(arr1[i]);
        subset1(new_arr1, arr1, i+1, res1)
        
        new_arr1.pop()
    }


}

function subset2(new_arr2, arr2, current2, res2) {
    
    if (new_arr2.length > 0) {
        res2.push([...new_arr2])
    }

    if (current2 === arr2.length) {
        return;
    }

    for (let i = current2; i < arr2.length; i++) {
        new_arr2.push(arr2[i]);
        subset2(new_arr2, arr2, i+1, res2)
        
        new_arr2.pop()
    }


}


function runProgram(input) {

    var array = input.trim().split("\n");
    let arr1 = array[0].trim().split("");
    let arr2 = array[1].trim().split("");

    let current1 = 0;
    new_arr1 = [];
    res1 = [];
    let current2 = 0;
    new_arr2 = [];
    res2 = [];
    subset1(new_arr1, arr1, current1, res1)
    subset2(new_arr2, arr2, current2, res2)
    // console.log(res1);
    // console.log(res2);
  

  let box = [];
  for (let i = 0; i < res1.length; i++) {
    for (let j = 0; j < res2.length; j++) {
      if (res1[i] === res2[j]) {
        box.push(res[i]);
      }
      
    }
    
  }
  console.log(box); 
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`AEDFHR
      ABCDGH`);
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
    
