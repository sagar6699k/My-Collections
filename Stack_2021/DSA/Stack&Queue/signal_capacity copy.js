function signalCheck(size, array,res) {


    res[0] = 1;
    let stack = [];

    for (let i = 0; i < size; i++) {
        while (array[stack[stack.length - 1]] <= array[i] && stack.length > 0) {
            stack.pop();
        }
        if (stack.length == 0) {
            res[i] = i + 1;
        } else {
            res[i] = i - stack[stack.length - 1]
        }

        stack.push(i)

    }


    console.log(res.join(" "));
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());
    let line = 1;


    for (let i = 1; i <= T; i++) {
        let res = [];
        let size = Number(arr[line])
        line++;
        let array = arr[line].trim().split(" ").map(Number);
        line++;


        signalCheck(size, array,res);


    }






}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`2
      7
      100 80 60 70 60 75 85
      5
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