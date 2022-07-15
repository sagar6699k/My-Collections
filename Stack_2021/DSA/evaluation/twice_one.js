function runProgram(input) {

    var Input = input.trim().split("\n");
    let T = Number(Input[0].trim());
    
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let size = Number(Input[line].trim())
        line++
        let items = Input[line].trim().split(" ").map(Number)
        line++

        let obj = {};
        for (let j = 0; j < items.length; j++) {
            let el = items[j]

            if (obj[el] == null) {
                obj[el] = 1
            } else {
                obj[el] = obj[el] + 1
            }

        }
    
        for (key in obj) {
            if (obj[key] == 1) {
                console.log(key);
            }
        } 


    }







}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`2
      1
      5
      5
      1 2 1 3 2`);
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