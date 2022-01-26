var str = ["apple", "windows", "ubuntu"];


//1st way


// str.forEach(function(el){
//     console.log(el.length);
// })


//2nd way

// function getLength(el){
//     console.log(el.length)
// }
//  str.forEach(getLength)


//diff between forEach() & map() function

function getLength(el){
    return el.length;
}

var res = str.map(getLength);
console.log(res);