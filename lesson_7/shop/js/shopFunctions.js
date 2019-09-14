/* Данный файл содержит функции, используемые для создания сайта интернет-магазина. */
'use strict';
// функция для клонирования объекта с целью последующего изменения объекта-клона
function cloneObject(oldObject) {
    var newObject = {};
    for (var key in oldObject) {
        newObject[key] = oldObject[key];
    }
    return newObject;
}
// функция для добавления продукта в массив
function addTo(array, productCode, productName, productPrice, smallSrc, bigSrc) {
    // создаём массив артикулов продуктов, которые уже есть в данном массиве
    var codes = [];
    for (var element of array) {
        codes.push(element.vendorCode);
    }
    // ищем артикул нового продукта в массиве артикулов. Если такой продукт уже существует, увеличиваем его количество на 1
    if (codes.indexOf(productCode) != -1) {
        array[codes.indexOf(productCode)].number++;
    }
    // если такого продукта нет, добавляем новый
    else {
        var element = cloneObject(product);
        element.vendorCode = productCode;
        element.name = productName;
        element.price = productPrice;
        element.smallImgSrc = smallSrc;
        element.bigImgSrc = bigSrc;
        array.push(element);
    }
}
// функция, создающая html-тег с заданным id и именем класса и добавляющая его в конец родительского элемента
function createAndAppend(tag, parent, className, id) {
    var element = document.createElement(tag);
    if (className) {
        element.className = className; // присваиваем имя класса, если на месте name не указано false
    }
    if (id) {
        element.id = id; // присваиваем id, если на месте name не указано false
    }
    parent.append(element);
    return element;
}
// функция, определяющая структуру раздела
function sectionStructure(section, sectionName) {
    section.name = sectionName;
    section.self = document.getElementById(section.name);
    section.header = createAndAppend('h2', section.self, section.name + '_header', false);
    section.content = createAndAppend('div', section.self, section.name + '_content', false);
}
// функция для добавления ячейки в таблицу
function addTableData(className, idName, parentRow, innerData, width, height) {
    var basketData = createAndAppend('td', parentRow, className, idName);
    basketData.innerHTML = innerData;
    setTableStyle(basketData, width, height);
}
// функция, возвращающая информацию о товарах в корзине (кратко)
function basketShortInfo() {
    basketSection.sum.innerHTML = ('<p>В корзине: ' + basket.countBasketLength() + ' товаров на сумму ' + basket.countBasketPrice() + ' рублей.</p>');
}
// функция, возвращающая информацию о товарах в корзине (полностью)
function basketFullInfo() {
    basketShortInfo();
    for (var element of basket.list) {
        var basketRow = createAndAppend('tr', basketSection.table, basketSection.name + '_table_row', false);
        var commonClass = basketSection.name + '_data ' + basketSection.name + '_data_'
        addTableData(commonClass + 'code', false, basketRow, element.vendorCode, sizes.tableDataCodeWidth, sizes.tableDataHeight);
        addTableData(commonClass + 'name', false, basketRow, element.name, sizes.tableDataNameWidth, sizes.tableDataHeight);
        addTableData(commonClass + 'price', false, basketRow, element.price + ' руб.', sizes.tableDataPriceWidth, sizes.tableDataHeight);
        addTableData(commonClass + 'number', false, basketRow, element.number + ' шт.', sizes.tableDataNumberWidth, sizes.tableDataHeight);
    }
}
// функция, посещающая в блок div картинку с заданным id
function putImgToDiv(parrentDiv, src, id) {
    var img = createAndAppend("img", parrentDiv, false, id);
    img.src = src;
    return img;
}
// функция, очищаю блок с заданным id
function clearDiv(id) {
    var div = document.getElementById(id);
    div.innerHTML = "";
}
// функция, назначающая обработчик события нажатия на элемент, если он существует
function checkClickListener(element, listener) {
    if (element) {
        element.addEventListener('click', listener);
    }
}