let TicketCounter = (que, ops, n) => {

    if (ops == "E") {
        que.push(n);

        console.log(que.length);
    }else if (ops == "D") {

        if (que.length == 0) {
            console.log("-1",que.length);
        }
        else{
            console.log( que.shift(),que.length);
        }
    }

}

function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());

    let que = [];
    
    for (let i = 1; i <= T; i++) {
        let item = arr[i].trim().split(" ");
        let ops = item[0];
        let n = Number(item[1]);


        TicketCounter(que, ops, n)
    }



}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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