var items = ['a', 'b', 'c', 'd', 'a', 'c']

var obj = {};
for(var i=0; i<items.length; i++){
    if(obj[items[i]] == null){
        obj[items[i]]=1;
    }else{
        obj[items[i]]=obj[items[i]]+1;
    }
}
// console.log(Object.keys(obj));

var res = [];
for(key in obj){
if(obj[key]>1){
    res.push(key)
}
}
console.log(res);