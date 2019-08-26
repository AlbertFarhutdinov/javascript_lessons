var a = +prompt("Введите целое число a.")
var b = +prompt("Введите целое число b.")

console.log('Пункт 3: ');
console.log("a = " + a + ", b = " + b);
if (a >= 0 && b >= 0) {
    console.log('a - b = ' + (a - b))
}
else if (a < 0 && b < 0) {
    console.log('a * b = ' + (a * b))
}
else {
    console.log('a + b = ' + (a + b))
}