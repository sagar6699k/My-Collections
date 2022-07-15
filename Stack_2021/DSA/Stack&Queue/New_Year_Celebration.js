function NewYearCelebration(q,s,o,n) {
  
  if (o == 1) {
    q.push(n)


  }

  else if (o == 2) {
    s.push(n);
  }

  else if (o == 3 ) {
    if (q.length == 0) {
      console.log(-1);
    }else{
      console.log(q[0]);
    }
  }

  else if (o == 4 ) {
    if (s.length == 0) {
      console.log(-1);
    }else{
      console.log(s[s.length-1]);
    }
  }

  else if (o == 5) {
    let a = q.shift();
    s.push(a)
  }
}



function runProgram(input) {

  var arr = input.trim().split("\n");
  let T = Number(arr[0].trim());

  let que = [];
  let stack = [];

  for (let i = 1; i <= T; i++) {
    let item = arr[i].trim().split(" ");
    let ops = item[0];
    let n = Number(item[1]);


    NewYearCelebration(que,stack,ops,n)
  }






}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`7
      1 4
      2 3
      1 2
      3
      4
      5
      4`);
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