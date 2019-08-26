function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case ('+'):
            return sum(arg1, arg2);
            break;
        case ('-'):
            return difference(arg1, arg2);
            break;
        case ('*'):
            return multiplication(arg1, arg2);
            break;
        case ('/'):
            return division(arg1, arg2);
            break;
    }
}


var m = +prompt('Введите m');
var n = +prompt('Введите n');
console.log('Пункт 6: ');
console.log("m = " + m + ", n = " + n);
console.log("m + n = " + mathOperation(m, n, '+'));
console.log("m - n = " + mathOperation(m, n, '-'));
console.log("m * n = " + mathOperation(m, n, '*'));
console.log("m / n = " + mathOperation(m, n, '/'));
