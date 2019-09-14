/* Данный файл предназначен для создания структуры страницы каталога и заполнения основным содержимым. */
'use strict';
// определяем структуру каталога
var catalogSection = cloneObject(section);
sectionStructure(catalogSection, 'catalog');
// определяем структуру корзины
var basketSection = cloneObject(section);
sectionStructure(basketSection, 'basket');
basketSection.sum = createAndAppend('p', basketSection.content, false, basketSection.name + '_sum');
basketSection.table = createAndAppend('table', basketSection.content, false, basketSection.name + '_table');
// заполняем каталог продуктами
var numberOfImgForOne = 3; // число картинок для одного товара
for (var i = 0; i < 6; i++) {
    var new_product = cloneObject(product);
    new_product.vendorCode = i + 1;
    new_product.name = productNames[i];
    new_product.price = productPrices[i];
    new_product.smallImgSrc = [];
    new_product.bigImgSrc = [];
    for (var j = 1; j <= numberOfImgForOne; j++) {
        new_product.pushIt(pathToImg + 'small/' + (i + 1) + '.' + j + '.jpg', new_product.smallImgSrc);
        new_product.pushIt(pathToImg + 'big/' + (i + 1) + '.' + j + '.jpg', new_product.bigImgSrc);
    }
    addTo(catalog.list, new_product.vendorCode, new_product.name, new_product.price, new_product.smallImgSrc, new_product.bigImgSrc);
}
// работаем с содержимым каталога
catalogSection.header.innerHTML = 'Каталог';
var bigWindow = createAndAppend('div', catalogSection.content, false, 'big_window');
for (var id of ['big_picture_div', 'arrow_left_div', 'arrow_right_div']) {
    var newDiv = createAndAppend('div', bigWindow, false, id);
}
setArrowStyle(document.getElementById('arrow_left_div'));
setArrowStyle(document.getElementById('arrow_right_div'));
for (var item = 0; item < catalog.list.length; item++) {
    var catalogProduct = createAndAppend('div', catalogSection.content, catalogSection.name + '_product', false);
    var catalogImage = createAndAppend('img', catalogProduct, catalogSection.name + '_image', (item + 1) + '.1');
    catalogImage.src = catalog.list[item].smallImgSrc[0];
    var catalogTitle = createAndAppend('div', catalogProduct, catalogSection.name + '_title', false);
    catalogTitle.innerHTML = catalog.list[item].name;
    var catalogPrice = createAndAppend('div', catalogProduct, catalogSection.name + '_price', false);
    catalogPrice.innerHTML = catalog.list[item].price + ' руб.';
    var buyButton = createAndAppend('button', catalogProduct, 'buy_button', (item + 1));
    buyButton.innerHTML = 'Купить';
}
setCatalogStyle(catalogSection);
// работаем с содержимым корзины
basketSection.header.innerHTML = 'Корзина';
if (basket.list.length == 0) {
    basketSection.sum.innerHTML = 'Корзина пуста';
}
else {
    basketFullInfo();
}
setBasketStyle(basketSection);