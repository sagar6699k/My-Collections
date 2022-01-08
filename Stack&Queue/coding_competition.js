function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0]);

    let que = [];
    let stack = [];

    for (let i = 1; i <= T; i++) {
        let [o, c, rn] = arr[i].trim().split(" ");


        if (o == "E") {
            if (que.length == 0) {
                que.push([c, rn])
            }
            else {
                if (que[que.length - 1][0] == c) {
                    que.push([c, rn])

                } else {
                    stack.push([c, rn])
                }
            }


        }

        if (o == "D") {
            if (que.length != 0) {
                let a = que.shift();
                console.log(a.join(" "));
            } else {
                let b = que.shift();
                console.log(b.join(" "));
            }

        }




    }



    //mongoimport --drop --collection users --file ~/Desktop/Study/mongo/users.json --jsonArray



}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`5
      E 1 1
      E 2 1
      E 1 2
      D
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