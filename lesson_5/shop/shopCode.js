'use strict';
// заполняем каталог и корзину рандомными товарами
randomFill(catalog, "Введите число товаров в каталоге:");
randomFill(basket, "Введите число товаров в корзине:");
//определяем стили 
var pTextSize = '30px';
var hTextSize = '50px';
var divWidth = '200px';
var divHeight = '200px';
var tdWidth = '200px';
var tdHeight = '50px';
var borderStyle = "1px solid black";
// определяем структуру каталога
var catalogSection = cloneObject(section);
sectionStructure(catalogSection, 'catalog');
// определяем структуру корзины
var basketSection = cloneObject(section);
sectionStructure(basketSection, 'basket');
var basketTable = createAndAppend('table', basketSection.name + '-table', basketSection.content);
var basketSum = createAndAppend('p', basketSection.name + '-sum', basketSection.content);
basketSum.style.fontSize = pTextSize;
// работаем с содержимым корзины
basketSection.header.innerHTML = 'Корзина';
basketSection.header.style.fontSize = hTextSize;
basketTable.style.borderCollapse = "collapse";
if (basket.length == 0) {
    basketSum.innerHTML = 'Корзина пуста';
}
else {
    for (var item = 0; item < basket.length; item++) {
        var basketRow = createAndAppend('tr', basketSection.name + '-table-row', basketTable);
        for (var column = 0; column < 2; column++) {
            var basketData = createAndAppend('td', basketSection.name + '-data', basketRow);
            basketData.style.border = borderStyle;
            basketData.style.width = tdWidth;
            basketData.style.height = tdHeight;
            basketData.style.textAlign = 'center';
            basketData.style.fontSize = pTextSize;
            switch (column) {
            case (0):
                basketData.innerHTML = basket.list[item].name;
                break;
            case (1):
                basketData.innerHTML = basket.list[item].price + ' руб.';
                break;
            }
        }
    }
    basketSum.innerHTML = ('<p>В корзине: ' + basket.length + ' товаров на сумму ' + basket.countBasketPrice() + ' рублей.</p>');
}
basketTable.style.borderCollapse = "collapse";
// работаем с содержимым каталога
catalogSection.header.innerHTML = 'Каталог';
catalogSection.header.style.fontSize = hTextSize;
for (var item = 0; item < catalog.length; item++) {
    var catalogProduct = createAndAppend('div', catalogSection.name + '-product', catalogSection.content);
    catalogProduct.style.display = "inline-block"
    catalogProduct.style.width = divWidth;
    catalogProduct.style.height = divHeight;
    catalogProduct.style.outline = borderStyle;
    catalogProduct.style.textAlign = 'center';
    catalogProduct.style.fontSize = pTextSize;
    catalogProduct.style.lineHeight = divHeight;
    catalogProduct.innerHTML = catalog.list[item].name;
}