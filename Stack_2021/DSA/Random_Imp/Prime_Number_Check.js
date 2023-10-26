//1st Aproach ==> T.C = O(n)
function isPrime(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        return true;
    }
    else {
        return false;
    }
}

//2nd Aproach ==> T.C = O(sqrt(n))

function isPrimeEfficient(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }

    let sqrt = Math.sqrt(n);
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
const num = 16; // Change this to the number you want to check
if (isPrimeEfficient(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}