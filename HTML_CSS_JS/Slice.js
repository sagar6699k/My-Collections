// The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let arr1 = arr.slice(3, 6); //3 4 5
let arr2 = arr.slice(-2); //7 8
let arr3 = arr.slice(-4); //5 6 7 8
let arr4 = arr.slice(4); //4 5 6 7 8


let str = "abcdef";
let str1 = str.slice(1,4)//bcd
console.log(str.slice(-3));//def
console.log(arr4);

// Note: Slice method won't mutate the original array but it returns the subset as a new array.