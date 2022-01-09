function people_que(a, b, k, que) {

    
    if (a == 1) {

        if (que.length < k) {
            que.push(b)
            console.log(b);
        }
        else{
            console.log(-1);

        }

    }
     else if (a == 2) {

        if (que.length == 0) {
            console.log(-1);
        } else {
            let t = que.shift();
            console.log(t);
        }

    }


   

}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let [k, q] = arr[0].trim().split(" ").map(Number);
    let line = 1;

    let que = [];
    for (let i = 1; i <= q; i++) {
        let [a, b] = arr[line].trim().split(" ").map(Number);
        line++;

        people_que(a, b, k,que);
    }



}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`2 6
      1 1
      1 2
      1 3
      2
      2
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



