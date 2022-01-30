function OddSubset(arr, new_arr, current, res) {
  if (new_arr.length > 0) {
    // console.log(new_arr);
    res.push([...new_arr])

  }


  if (current === arr.length) return;

  for (let i = current; i < arr.length; i++) {
    new_arr.push(arr[i]);
    OddSubset(arr, new_arr, i + 1, res)

    new_arr.pop();

  }
}


function runProgram(input) {

  var Input = input.trim().split("\n");
  let size = Number(Input[0].trim());
  let arr = Input[1].trim().split(" ").map(Number);

  let current = 0;
  let new_arr = [];
  let res = [];


  OddSubset(arr, new_arr, current, res)


  function arraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }

    if (sum % 2 != 0) {
      return true;
    }
    else {
      return false;
    }
  }

  let count = 0;
  for (let m = 0; m < res.length; m++) {
    if (arraySum(res[m]) === true) {
      count++;
    }

  }

  console.log(count);



}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`3
      1 2 3`);
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