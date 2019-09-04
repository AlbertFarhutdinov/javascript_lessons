'use strict';

console.log("Пункт 1:")

function numberToObject(number) {
    if (isNaN(number)) {
        console.log("Некорректный ввод.")
        return null;
    }
    else if (number > max || number < min) {
        console.log("Введённое число не соответствует допустимому диапазону значений.")
        return null;
    }
    else {
        var newObject = {};
        //Первый вариант
        /*  
        newObject.units = number % 10;
        newObject.tens = (number % 100 - newObject.units) / 10;
        newObject.hundreds = (number % 1000 - newObject.tens * 10 - newObject.units) / 100;
        */
        //Второй вариант
        newObject.hundreds = Math.floor(number / 100);
        newObject.tens = Math.floor(number / 10) - newObject.hundreds * 10;
        newObject.units = number - newObject.hundreds * 100 - newObject.tens * 10;
        return newObject;
    }
}

var min = 0;
var max = 999;
var myNumber = +prompt('Введите число от ' + min + ' до ' + max + ':');
var myObject = numberToObject(myNumber);
console.log(myObject);