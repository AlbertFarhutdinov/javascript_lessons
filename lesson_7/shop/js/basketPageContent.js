/* Данный файл предназначен для создания структуры страницы корзины и заполнения основным содержимым. */
'use strict';
var catalogSection = cloneObject(section);
// Функция, показывающая содержимое раздела "Состав корзины"
function showBasket() {
    var basketSection = cloneObject(section);
    sectionStructure(basketSection, 'basket_div');
    basketSection.sum = createAndAppend('p', basketSection.content, false, basketSection.name + '_sum');
    basketSection.table = createAndAppend('table', basketSection.content, false, basketSection.name + '_table');
    basketSection.header.innerHTML = 'Состав корзины';
    if (basket.list.length == 0) {
        basketSection.sum.innerHTML = 'Корзина пуста';
    }
    else {
        basketFullInfo();
    }
    var nextButton = createAndAppend('button', basketSection.content, 'next_button', 'basket_button');
    nextButton.innerHTML = 'Далее';
    setBasketStyle(basketSection);
}
// Функция, показывающая содержимое раздела "Адрес доставки"
function showAddress() {
    var addressSection = cloneObject(section);
    sectionStructure(addressSection, 'address_div');
    addressSection.header.innerHTML = 'Адрес доставки';
    addressSection.content.innerHTML = '<p>Какое-то содержимое</p>';
    var nextButton = createAndAppend('button', addressSection.content, 'next_button', 'address_button');
    nextButton.innerHTML = 'Далее';
    setAddressStyle(addressSection);
}
// Функция, показывающая содержимое раздела "Комментарии"
function showComment() {
    var commentSection = cloneObject(section);
    sectionStructure(commentSection, 'comment_div');
    commentSection.header.innerHTML = 'Комментарий';
    commentSection.content.innerHTML = '<p>Какое-то содержимое</p>';
    var nextButton = createAndAppend('button', commentSection.content, 'next_button', 'comment_button');
    nextButton.innerHTML = 'Далее';
    setCommentStyle(commentSection);
}
showBasket();