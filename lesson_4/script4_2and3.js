'use strict';
console.log('Пункты 2 и 3 из методички');
// создание глобальной сущности "Продукт"
var product = {
    name: '', 
    price: 0
}
// функция для клонирования объекта с целью последующего изменения объекта-клона
function cloneObject(oldObject){
    var newObject = {};
    for (var key in oldObject) {
      newObject[key] = oldObject[key];
    }
    return newObject;
}

/* объект "Корзина" со свойством list, где хранятся продукты, методом addToBasket для добавления нового продукта и countBasketPrice для подсчёта суммы товаров.*/
var basket = {
    list: [],
    addToBasket: function(productName, productPrice) {
        var newProduct = cloneObject(product); 
        newProduct.name = productName;
        newProduct.price = productPrice;
        this.list.push(newProduct);
    },
    countBasketPrice: function() {
        var sum = 0;
        for (var count = 0; count < this.list.length; count++) {
            sum += this.list[count].price;
        }
        return sum;
    }
};

/* объект "Каталог" со свойством list, где хранятся продукты, и методом addToCatalog для добавления нового продукта. 
Конкретно в данном случае он почти не отличается от корзины и показан только для примера работы с глобальным объектом "Продукт".
*/
var catalog = {
    list: [],
    addToСatalog: function(productName, productPrice) {
        var newProduct = cloneObject(product); 
        newProduct.name = productName;
        newProduct.price = productPrice;
        this.list.push(newProduct);
    }
};

var catalogLength = 15;
for (var item = 0; item < catalogLength; item++) {
    catalog.addToСatalog('Продукт_' + (item + 1), Math.round(Math.random() * 99 + 1) * 100);
}

var basketLength = 10;
for (var item = 0; item < basketLength; item++) {
    basket.addToBasket('Продукт_' + (item + 1), Math.round(Math.random() * 99 + 1) * 100);
}

console.log(catalog)
console.log(basket)
console.log('Сумма покупок в корзине: ' + basket.countBasketPrice() + ' руб.')