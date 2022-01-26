var str = ["Apple", "Windows", "UBUNTU"];



//1st way

// function getLower(el){
//     return el.toLowerCase();
// };

// var res = str.map(getLower);
// console.log(res.join("-"));


//2nd way

function getLower(el){
    return el.toLowerCase();
}

function snake_case(ac,el){
    return ac+"_"+el;
}

var res = str.map(getLower).reduce(snake_case);
console.log(res);