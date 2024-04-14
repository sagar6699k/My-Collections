function checkPowerOfTwo(n) {

    if (n === 1) {
        return true;
    }

    if (n % 2 !== 0 || n === 0) {
        return false;
    }

    return checkPowerOfTwo(n / 2);
    // Time Complexity: O(log N).
    // Auxiliary Space: O(log N).
}

//2nd approch

function checkPowerOfTwo111(n) {
    if (n === 0) {
        return false;
    }
    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        }

        n = n / 2;
    }
    return true;


    // Time Complexity: O(log N).
    // Auxiliary Space: O(1).
}

//input
let n = 16;
// console.log(checkPowerOfTwo(n));
console.log(checkPowerOfTwo111(n));