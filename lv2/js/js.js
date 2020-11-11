
function add(...values) {
    let result = 0;
    for (let value of values) {
        result += value;
    }
    return result;
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(add(100, 54864, 138, 12, 0));