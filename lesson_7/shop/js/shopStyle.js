/* Данный файл предназначен для работы со стилями */
'use strict';
document.getElementsByClassName('menu_link')[0].style.fontSize = sizes.parTextSize;
document.getElementsByClassName('menu_link')[1].style.fontSize = sizes.parTextSize;
// работаем со стрелочками
function setArrowStyle(element) {
    element.style.width = sizes.arrowsWidth;
    element.style.height = sizes.arrowsHeight;
    element.style.display = 'inline-block';
}
// функция, устанавливающая стиль для каталога
function setCatalogStyle(element) {
    element.header.style.fontSize = sizes.headerTextSize;
    for (var item = 0; item < catalog.list.length; item++) {
        var catalogProduct = document.getElementsByClassName(catalogSection.name + '_product')[item];
        catalogProduct.style.display = 'inline-block';
        catalogProduct.style.textAlign = 'center';
        catalogProduct.style.outline = borderStyle;
        catalogProduct.style.margin = sizes.productMargin;
        catalogProduct.style.width = sizes.productWidth;
        catalogProduct.style.height = sizes.productHeight;
        var catalogImage = document.getElementsByClassName(catalogSection.name + '_image')[item];
        catalogImage.style.height = sizes.imgHeight;
        var catalogTitle = document.getElementsByClassName(catalogSection.name + '_title')[item];
        catalogTitle.style.height = sizes.titleHeight;
        var catalogPrice = document.getElementsByClassName(catalogSection.name + '_price')[item];
        catalogPrice.style.height = sizes.priceHeight;
    }
}
// функция, устанавливающая стиль для данных таблицы корзины
function setTableStyle(element, width, height) {
    element.style.border = borderStyle;
    element.style.width = width;
    element.style.height = height;
    element.style.textAlign = 'center';
    element.style.fontSize = sizes.parTextSize;
}
// функция, устанавливающая стиль для корзины
function setBasketStyle(element) {
    element.sum.style.fontSize = sizes.parTextSize;
    element.header.style.fontSize = sizes.headerTextSize;
    element.table.style.borderCollapse = 'collapse';
    element.table.style.border = borderStyle;
}
// функция, устанавливающая стиль для раздела адреса доставки
function setAddressStyle(element) {
    element.header.style.fontSize = sizes.headerTextSize;
    element.content.style.fontSize = sizes.parTextSize;
}
// функция, устанавливающая стиль для раздела комментариев
function setCommentStyle(element) {
    element.header.style.fontSize = sizes.headerTextSize;
    element.content.style.fontSize = sizes.parTextSize;
}