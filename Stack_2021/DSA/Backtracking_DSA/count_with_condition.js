function Subset(arr, new_arr, current, res) {
    if (new_arr.length > 0) {
        res.push([...new_arr])

    }

    if (current === arr.length) return;

    for (let i = current; i < arr.length; i++) {
        new_arr.push(arr[i]);
        Subset(arr, new_arr, i + 1, res)

        new_arr.pop();

    }
}

function CountWithCondition(res, k ) {
    let count = 0
    for (let i = 0; i < res.length; i++) {
        let sum = 0;
        let item = res[i];
        for (let j = 0; j < item.length; j++) {
            sum = sum + item[j];
        }
        if (sum === k) {
            count++;
        }
    }
    console.log(count);
}


function runProgram(input) {

    var Input = input.trim().split("\n");
    var [len, k] = Input[0].trim().split(" ").map(Number);
    var arr = Input[1].trim().split(" ").map(Number);

    let current = 0;
    let new_arr = [];
    let res = [];
    
    Subset(arr, new_arr, current, res)
    CountWithCondition(res , k )

}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`4 10
      1 2 3 4`);
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