var numb_arr = [2, 4, 5, 3, 6, 8];

// var even_N_index = numb_arr.filter(function (el,index){
//     if(index % 2 == 0 && el % 2 == 0 ){
//         return el;
//     }
// })

// console.log(even_N_index);


function getEven(el, index){
    if(index % 2 == 0 && el % 2 == 0 ){
         return el;
}
}

var res = numb_arr.filter(getEven);
console.log(res);