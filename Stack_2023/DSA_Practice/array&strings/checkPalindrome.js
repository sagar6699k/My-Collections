//1st Approch
// function checkPalindrome(str, n) {
//     let revStr = str.split("").reverse().join("");
//     if (str === revStr) return true;
//     return false;
// }

//2nd Approch
function checkPalindrome(str, n) {
    let l = 0;
    let r = n - 1;
    while (l<=r) {
        if (str[l] !== str[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
}

//input
let str1 = "racecar";
let str2 = "nitin";
console.log(checkPalindrome(str1, str1.length));