/* Данный файл содержит все объекты и глобальные переменные, используемые для создания сайта интрнет-магазина. */
'use strict';


// объект "Продукт"
var product = {
    vendorCode: 0 // артикул - код продукта
        
    , name: '' // имя продукта
        
    , price: 0 // цена продукта
        
    , number: 1 // количество товара
        
    , smallImgSrc: [] // массив путей до маленьких картинок
        
    , bigImgSrc: [] // массив путей до больших картинок
        
    , pushIt: function (element, array) { // добавление продукта в массив
        array.push(element);
    }
};
// объект "Каталог" со свойством list, где хранятся продукты
var catalog = {
    list: []
};
// объект "Корзина" со свойством list, где хранятся продукты и методом countBasketPrice для подсчёта суммы товаров
var basket = {
    list: []
    , countBasketPrice: function () {
        var sum = 0;
        for (var element of this.list) {
            sum += element.price * element.number;
        }
        return sum;
    }
    , countBasketLength: function () {
        var length = 0;
        for (var element of this.list) {
            length += element.number;
        }
        return length;
    }
};
// объект "Раздел страницы"
var section = {
    name: ''
    , self: null
    , header: null
    , content: null
};
// объект, содержащий размеры всех блоков и ячеек, используемых при работе со стилями
var sizes = {
    borderWidth: '1px'
    , parTextSize: '30px'
    , headerTextSize: '50px'
    , imgHeight: '240px'
    , titleHeight: '40px'
    , priceHeight: '20px'
    , buttonHeight: '30px'
    , productWidth: '360px'
    , productHeight: '330px'
    , tableDataCodeWidth: '100px'
    , tableDataNameWidth: '800px'
    , tableDataPriceWidth: '200px'
    , tableDataNumberWidth: '100px'
    , tableDataHeight: '50px'
    , arrowsWidth: '64px'
    , arrowsHeight: '64px'
    , productMargin: '30px'
};
// стиль границы
var borderStyle = sizes.borderWidth + ' solid black';
// массив продуктов каталога
var productNames = ['Смартфон Xiaomi MI A3 128 ГБ синий'
                    , 'Ноутбук Acer Extensa EX2519-10RW черный'
                    , 'Телевизор LED Panasonic TX-43GR300 черный'
                    , 'Планшет Huawei MediaPad T3 10 16 ГБ 3G, LTE серый'
                    , 'Холодильник KRAFT BC(W)-115 белый'
                    , 'Стиральная машина Gorenje W7222/S'];
// массив цен
var productPrices = [18999, 14999, 22999, 11699, 8299, 18499];
// путь к папке с изображениями
var pathToImg = 'img/catalog/';