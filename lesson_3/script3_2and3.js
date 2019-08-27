'use strict';
document.write('<h3>Пункты 2 и 3 (одинаковые)</h3>');

function countBasketPrice(basket) {
    var sum = 0;
    for (var count = 0; count < basket.length; count++) {
        sum += basket[count][1];
    }
    return sum;
}
var myBasket = [];
var length = 10;
for (var item = 0; item < length; item++) {
    myBasket.push(['Продукт_' + (item + 1), Math.round(Math.random() * 99 + 1) * 100]);
    document.write(myBasket[item][0] + ': ' + myBasket[item][1] + ' руб;<br>');
}
document.write('Сумма покупок: ' + countBasketPrice(myBasket) + ' руб.')