function merged(arr1 , arr2) {
    
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
        
    }

    

    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]] == null) {
            obj[arr1[i]] = 1
        }
        else{
            obj[arr1[i]] = obj[arr1[i]]+1
        }
        
    }

    console.log(Object.keys(obj).sort().join(" "))

}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim())

    let line = 1;
   
    for (let i = 1; i <= T; i++) {

        let size1 = Number(arr[line].trim());
        line++
        let arr1 = arr[line].trim().split(" ").map(Number);
        line++;
        let size2 = Number(arr[line].trim());
        line++
        let arr2 = arr[line].trim().split(" ").map(Number);
        line++;


        merged(arr1 , arr2)
    }








}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`1
      4
      1 2 3 4
      5
      1 2 3 4 5`);
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