function runProgram(input) {

    var arr = input.trim().split("\n");
    var len = Number(arr[0].trim())
    

    for (let i = 1; i <= len; i++) {
       
        if (arr[i].trim() === "India") {
            console.log(i);
        }
    }

    





}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`5
      Russia
      USA
      Japan
      China
      India`);
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