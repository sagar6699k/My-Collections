function QuickSort(arr, l, r) {
    
  if (l < r) {
      let q = Partition(arr, l, r);
      // console.log(q);
      QuickSort(arr, l, q-1)
      QuickSort(arr, q+1, r)
  }
  else {
    return arr;
  }
}

function Partition(arr, l, r) {
  let pivot = arr[r];
  let i = l - 1;

  for (let j = l; j < r; j++) {
      if (arr[j] <= pivot) {
          i++;
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
  }
  
      temp = arr[i+1];
      arr[i+1] = arr[r];
      arr[r] = temp;
     
  return i+1
}



function runProgram(input) {

  var array = input.trim().split("\n");
  let n = Number(array[0].trim());
  let arr = array[1].trim().split(" ").map(Number);

  let l = 0;
  let r = n - 1;
  QuickSort(arr, l, r)
  console.log(arr);

  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`5
    3 5 0 9 8`);
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
  