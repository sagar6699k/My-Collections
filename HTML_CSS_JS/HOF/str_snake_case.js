var str = ["apple", "windows", "ubuntu"];

function getLower(el){
    return el.toLowerCase();
};

var res = str.map(getLower);
console.log(res.join("_"));