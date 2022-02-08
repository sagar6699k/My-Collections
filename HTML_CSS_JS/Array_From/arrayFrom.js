let characters = [
    { name: "Rio", age: 18 },
    { name: "Denver", age: 21 },
    { name: "Tokyo", age: 24 },
    { name: "Berlin", age: 42 },
    { name: "Professor", age: 39 },
    { name: "Bogota", age: 49 }
];

let names = Array.from(characters, ({ name }) => name);
console.log(names);