function separate0sand1(arr, n) {
    let l = 0;
    let r = n - 1;

    while (l < r) {
        
        while (arr[l] == 0 && l<r) {
            l++;
        }
        while (arr[r] == 1 && l<r) {
            r--;
        }

        if (l<r) {
            arr[l] = 0;
            arr[r] = 1;
            l++;
            r--;
        }
    }
}

//input
let arr = [0, 1, 0, 1, 0, 1, 0, 1];
let n = arr.length;
console.log("Before:", arr);
separate0sand1(arr, n)
console.log("After:", arr);

// Time Complexity : O(n) 
// Auxiliary Space: O(1)
