//浅拷贝（两个对象指向用一个内存地址）
let person1 = {
    name: 'Jacy',
    age: 12,
    major: 'programming',
}
let person2 = person1;
console.log(person1);
console.log(person2);
person2.name = 'Wuhu';
console.log(person1);
console.log(person2);

//深拷贝(创建一个新的对象，并将原来的对象的属性和值赋值给新对象，再将新对象的地址赋值给要得到拷贝的那个对象)
let animal = { //拷贝的原型对象
    name: 'titi',
    age: 2,
    sex: 'male',
}
//使用for循环进行深拷贝
let cloneAnimal = {};
function copyObj(obj) {
    let res = {}; //中间对象，用于创建一个不用于原对象animal的地址
    for (let key in obj) { //将原对象中的属性赋值给中间对象
        res[key] = obj[key];
    }
    return res; //将中间对象返回并赋值给得到拷贝的对象
}
cloneAnimal = copyObj(animal);//获得res的地址（不同于animal）
console.log(animal.name);
console.log(cloneAnimal.name);
cloneAnimal.name = 'dog';
console.log(animal.name);
console.log(cloneAnimal.name);