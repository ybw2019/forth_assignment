const person = {
    name: 'Boson',
    age: 20,
    address: {
        city: 'Chongqing',
        area: 'Nanan'
    }
}

let values = [];
let { name } = person;
values[0] = name;
let { age } = person;
values[1] = age;
let { address } = person;
let { city } = address;
values[2] = city;
let { address: { area } } = person;
values[3] = area;
console.log(values);