'use strict';
var numerator = 0;
var denominator;
var result;
var list = '<h3>Пункт 1</h3>'
list += '<i>Определение:</i><br>Простое число - натуральное (целое положительное) число, имеющее ровно два различных натуральных делителя - единицу и самого себя. Другими словами, число <i>x</i> является простым, если оно больше 1 и при этом делится без остатка только на 1 и на <i>x</i>.';
list += '<ul>Таблица простых чисел в промежутке от 0 до 100:\n';
while (numerator <= 100) {
    denominator = 1;
    result = 0;
    while (denominator <= numerator) {
        if (numerator % denominator == 0) {
            result++;
        }
        denominator++;
    }
    if (result == 2) {
        list += '<li>' + numerator + '</li>';
    }
    numerator++;
}
list += '</ul>';

document.write(list);