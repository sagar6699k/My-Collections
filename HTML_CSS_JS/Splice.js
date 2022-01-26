let arr = [0, 1, 2, 3, 4, 5];
// let arr1 = arr.splice(1, 3);// [1, 2, 3] & now arr become [0, 4, 5]


let arr2 = arr.splice(1, 3, "a", "b", "c") 
//this will return arr2 = [ 1, 2, 3 ] & arr = [ 0, 'a', 'b', 'c', 4, 5 ]
console.log(arr2)
console.log(arr)
