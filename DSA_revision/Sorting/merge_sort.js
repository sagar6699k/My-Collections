function MergeSort(arr, l, r) {
    if (l < r){
        let mid = Math.floor((l + r) / 2);

        MergeSort(arr, l, mid);
        MergeSort(arr, mid + 1, r);
        Merge(arr, l, mid, r)
    }
    else {
        return;
    }
}

function Merge(arr, l, mid, r) {
    
    //Making two separate sorted array
    let n1 = mid - l + 1;
    let n2 = r - mid;
    
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < n1; i++) {
        arr1.push(arr[l+i]);
    }

    for (let j = 0; j < n2; j++) {
        arr2.push(arr[mid + 1 + j]);
    }

    let i = 0;
    let j = 0;
    let k = l;

    //Merging of two separate sorted array into one sorted array;
    while (i < n1 && j < n2) {
        
        if (arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
        }
        else {
            arr[k] = arr2[j];
            j++;
        }

        k++;
    }


    while (i < n1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }

}



function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    let l = 0;
    let r = n - 1;

    MergeSort(arr, l, r)
    console.log(arr.join(" "));

    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
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
    