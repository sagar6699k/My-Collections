function First_in_BS(arr, lo, hi, k) {
  let first = -1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    
    // console.log(arr[mid]);
    if (arr[mid] === k) {
      first = mid;
      hi = mid-1;
    } else if (arr[mid] < k) {
      lo = mid + 1;
    } else {
      hi = mid-1;
    }
  }

    return first;
}

function Last_in_BS(arr, lo, hi, k) {
  let last = -1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] === k) {
      last = mid;
      lo = mid+1;
    } else if (arr[mid] < k) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

    return last;
}

function runProgram(input) {
  var array = input.trim().split("\n");
  let n = Number(array[0].trim());
  let arr = array[1].trim().split(" ").map(Number);
  let k = Number(array[2].trim());

  let lo = 0;
  let hi = n - 1;
    
  let first = First_in_BS(arr, lo, hi, k)
  let last = Last_in_BS(arr, lo, hi, k)
  let len = last - first + 1;
  console.log(first, last, len);
}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`5
  1 2 3 4 5
  5`);
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
