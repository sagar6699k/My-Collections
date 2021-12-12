function Subset(arr, new_arr, current, res) {
    if (new_arr.length > 0) {
        console.log(new_arr);
        res.push([...new_arr])

    }

    if (current === arr.length) return;

    for (let i = current; i < arr.length; i++) {
        new_arr.push(arr[i]);
        Subset(arr, new_arr, i + 1, res)

        new_arr.pop();

    }
}

function wearedSum(res, largest) {
    let count = 0
    for (let i = 0; i < res.length; i++) {
        let sum = 0;
        let item = res[i];
        if (item.length > 1) {
            for (let j = 0; j < item.length; j++) {
                if (item[j] !== largest) {
                    sum = sum + item[j];
                }

            }
            if (sum === largest) {
                count++;
            }
        }

    }

    if (count) {
        console.log("Yes");
    } else {
        console.log("No");
    }

}




function runProgram(input) {

    var Input = input.trim().split("\n");
    let T = Number(Input[0].trim());

    let line = 1;
    for (let i = 1; i <= T; i++) {
        let len = Number(Input[line].trim());
        line++;
        let arr = Input[line].trim().split(" ").map(Number);
        line++;

        let largest = arr[0];
        for (let j = 0; j < arr.length; j++) {
            if (largest < arr[j]) {
                largest = arr[j];
            }
        }

        let current = 0;
        let new_arr = [];
        let res = [];

        Subset(arr, new_arr, current, res)
        wearedSum(res, largest)
    }






}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`3
      3
      1 2 3
      4
      0 1 2 3
      4
      2 3 6 10`);
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