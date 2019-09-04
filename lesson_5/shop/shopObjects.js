'use strict';
// объект "Продукт"
var product = {
    name: ''
    , price: 0
};
/* объект "Корзина" со свойством list, где хранятся продукты и методом countBasketPrice для подсчёта суммы товаров.*/
var basket = {
    list: []
    , length: 0
    , countBasketPrice: function () {
        var sum = 0;
        for (var count = 0; count < this.length; count++) {
            sum += this.list[count].price;
        }
        return sum;
    }
};
/* объект "Каталог" со свойством list, где хранятся продукты.*/
var catalog = {
    list: []
    , length: 0
};
// объект "Раздел страницы"
var section = {
    name: ''
    , self: null
    , header: null
    , content: null
};