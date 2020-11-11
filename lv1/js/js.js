
function fib(n) {
    let result = 0;
    if (n < 3) {
        return 1
    }
    if (n >= 3) {
        result = fib(n - 1) + fib(n - 2);
    }
    return result;
}
console.log(fib(10));