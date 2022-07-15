// The splice() method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

let arr = [0, 1, 2, 3, 4, 5];
// let arr1 = arr.splice(1, 3);// [1, 2, 3] & now arr become [0, 4, 5]
let arr_0 = arr.splice(3) // [3, 4, 5] & now arr become [0, 1, 2]

// let arr2 = arr.splice(1, 3, "a", "b", "c") 
//this will return arr2 = [ 1, 2, 3 ] & arr = [ 0, 'a', 'b', 'c', 4, 5 ]
console.log(arr_0)
console.log(arr)


// Note: Splice method modifies the original array and returns the deleted array.