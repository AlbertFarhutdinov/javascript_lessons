/* Данный файл предназначен для обработки событий. */
/* Для проверки на наличие больших фотографий полистать фото смартфона и холодильника с включенной консолью. */
'use strict';
// функция, вызываемая после загрузки страницы и вызывающая другие функции-обработчики.
function init() {
    var images = document.getElementsByTagName("img");
    for (var image of images) {
        image.addEventListener('click', changeToBig);
    }
    var buttons = document.getElementsByTagName("button");
    for (var button of buttons) {
        button.addEventListener('click', putToBasket);
    }
    var bigImg = document.getElementById("big_picture_div");
    bigImg.addEventListener('click', backToSmall);
    var arrowLeft = document.getElementById("arrow_left_div");
    arrowLeft.addEventListener('click', scrollLeft);
    var arrowRight = document.getElementById("arrow_right_div");
    arrowRight.addEventListener('click', scrollRight);
}
// функция, убирающая большую картинку при нажатии на неё.
function backToSmall() {
    clearDiv("big_picture_div");
    clearDiv("arrow_left_div");
    clearDiv("arrow_right_div");
}
// функция, которая показывает в отдельном окне полноразмерную картинку товара при нажатии на маленькую картинку. 
function changeToBig(event) {
    backToSmall();
    var bigPicSrc = pathToImg + "big/" + event.target.id + ".jpg";
    var bigImage = putImgToDiv(document.getElementById('big_picture_div'), bigPicSrc, 'big_picture');
    putImgToDiv(document.getElementById('arrow_left_div'), pathToImg + 'arrow_left.png', 'arrow_left');
    putImgToDiv(document.getElementById('arrow_right_div'), pathToImg + 'arrow_right.png', 'arrow_right');
    bigImage.onerror = jumpOverToRight;
}
// функция, добавляющая товар в корзину при нажатии на кнопку "Купить"
function putToBasket(event) {
    clearDiv(basketSection.name + '_table');
    clearDiv(basketSection.name + '_sum');
    var productToBuy = cloneObject(catalog.list[event.target.id - 1]);
    addTo(basket.list, productToBuy.vendorCode, productToBuy.name, productToBuy.price, productToBuy.smallImgSrc, productToBuy.bigImgSrc);
    basketInfo();
}
// функция, изменяющая путь к картинке при нажатии на стрелки
function changeSrc(source, left) {
    var index = source.indexOf('big/') + 6; // получаем индекс цифры после точки в названии картинки "1.1.jpg", "1.2.jpg", "1.3.jpg" и т.д.
    var new_index = parseInt(source[index]);
    // при нажатии на левую стрелку уменьшаем индекс, то есть показываем предыдущую картинку. Когда доходим до нуля, начинаем листать с конца
    if (left) {
        new_index--;
        if (new_index == 0) {
            new_index = numberOfImgForOne;
        }
    }
    // при нажатии на правую стрелку всё наоборот
    else {
        new_index++;
        if (new_index == numberOfImgForOne + 1) {
            new_index = 1;
        }
    }
    return source.slice(0, index) + new_index + '.jpg'; // возвращаем новый путь
}
// функция, показывающая предыдущее фото при нажатии на левую стрелку
function scrollLeft() {
    var bigImage = document.getElementById('big_picture');
    var bigPicSrc = bigImage.src;
    bigImage.src = changeSrc(bigPicSrc, true);
    bigImage.onerror = jumpOverToLeft;
}
// функция, показывающая следующее фото при нажатии на правую стрелку
function scrollRight() {
    var bigImage = document.getElementById('big_picture');
    var bigPicSrc = bigImage.src;
    bigImage.src = changeSrc(bigPicSrc, false);
    bigImage.onerror = jumpOverToRight;
} 
// функция, вызываемая при ошибке загрузки фото, которая изменяет путь и возвращает предыдущее фото
function jumpOverToLeft() {
    var bigImage = document.getElementById('big_picture');
    var newSource = changeSrc(bigImage.src, true);
    clearDiv("big_picture_div");
    putImgToDiv(document.getElementById('big_picture_div'), newSource, 'big_picture');
    console.log('Ошибка при загрузке изображения');
}
// функция, вызываемая при ошибке загрузки фото, которая изменяет путь и возвращает следующее фото
function jumpOverToRight() {
    var bigImage = document.getElementById('big_picture');
    var newSource = changeSrc(bigImage.src, false);
    clearDiv("big_picture_div");
    putImgToDiv(document.getElementById('big_picture_div'), newSource, 'big_picture');
    console.log('Ошибка при загрузке изображения');
}
window.onload = init;