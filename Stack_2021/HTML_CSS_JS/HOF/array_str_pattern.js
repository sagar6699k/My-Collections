var arr = ["apple", "windows", "ubuntu", "cola", "system"];

function firstLastWith_a(el){
    if(el[0]== "a" || el[el.length-1]== "a"){
        return el;
    }
}

var result = arr.filter(firstLastWith_a);
console.log(result);