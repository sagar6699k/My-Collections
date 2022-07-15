const original_List = ['sagar', 'saloni', 'suraj', 'akshay', 'snehal'];

// function filterlistbyname(name) {
//     return original_List.filter((original_name) => original_name[0] === name)
// }
// console.log(filterlistbyname('s'));

function Myfilterlistbyname(name) {
    let new_list = [];
    for (let i = 0; i < original_List.length; i++) {
        if (original_List[i][0] === name) {
            new_list.push(original_List[i])
        }
    }
    return new_list;
}

console.log(Myfilterlistbyname('s'));