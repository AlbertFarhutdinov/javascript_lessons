function sum(arg1, arg2) {
    return arg1 + arg2;
}

function difference(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    if (arg2 != 0) {
        return arg1 / arg2;    
    }
    else {
        return 'Деление на ноль!'
    }
}

var f = +prompt('Введите f');
var g = +prompt('Введите g');
console.log('Пункт 5: ');
console.log("f = " + f + ", g = " + g);
console.log("f + g = " + sum(f, g));
console.log("f - g = " + difference(f, g));
console.log("f * g = " + multiplication(f, g));
console.log("f / g = " + division(f, g));
