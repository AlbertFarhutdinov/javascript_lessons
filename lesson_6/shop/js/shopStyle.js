/* Данный файл предназначен для работы со стилями. Красоту не наводил, вёрстка минимальная, достаточная для проверки более важных для данного курса вещей. */
'use strict';
var borderStyle = sizes.borderWidth + ' solid black';
// работаем со стрелочками
for (var arrow of [document.getElementById('arrow_left_div'), document.getElementById('arrow_right_div')]) {
    arrow.style.width = sizes.arrowsWidth;
    arrow.style.height = sizes.arrowsHeight;
    arrow.style.display = 'inline-block';
}
// работаем с каталогом
catalogSection.header.style.fontSize = sizes.headerTextSize;
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
// работаем с корзиной
basketSum.style.fontSize = sizes.parTextSize;
basketSection.header.style.fontSize = sizes.headerTextSize;
basketTable.style.borderCollapse = 'collapse';
basketTable.style.border = borderStyle;