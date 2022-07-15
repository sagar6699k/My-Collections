let Character_list = document.getElementById('Character_list');
let timerId


const SearchCharacter = async (input) => {
    
    let res = await fetch(`https://swapi.dev/api/people/?search=${input}`);
    let data = await res.json();

    return data.results;
}

const DisplayCharacter = (x) => {
    Character_list.innerHTML = null;

    x.forEach(element => {
        let item_div = document.createElement('div');
        item_div.setAttribute('id', "item_div")

        let p_name = document.createElement('p');
        p_name.innerText = element.name;

        let p_gender = document.createElement('p');
        p_gender.innerText = element.gender;

        item_div.append(p_name, p_gender);

        Character_list.append(item_div);
    });

}


const Main = async () => {
    let input_id = document.getElementById('input_id').value;

    let character = await SearchCharacter(input_id);

    DisplayCharacter(character);
}

function debounce(func, delay) {
    let input_id = document.getElementById('input_id').value;


    if (input_id.length < 3) {
        return false;
    }

    if (timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
        func()
    }, delay);
}

