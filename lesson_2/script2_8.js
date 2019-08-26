function power(val, pow) {
    if (pow == 0) {
        return 1;
    }
    else if (pow > 0) {
        return power(val, pow - 1) * val;
    }
    else if (pow < 0) {
        return power(val, pow + 1) / val;
    }
}


console.log('Пункт 8: ');
console.log('2^11 = ' + power(2, 11));
console.log('2^(-3) = ' + power(2, -3));
console.log('10^(-4) = ' + power(10, -4));
console.log('10^4 = ' + power(10, 4));
console.log('10^0 = ' + power(10, 0));
console.log('2^0 = ' + power(2, 0));