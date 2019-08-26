'use strict'
var celcius = +prompt('Введите температуру в градусах Цельсия');
var fahrenheit = (9 / 5) * celcius + 32;
alert('Пункт 1:\n' + celcius + String.fromCharCode(176) + 'С = ' + fahrenheit + String.fromCharCode(176) + 'F.');