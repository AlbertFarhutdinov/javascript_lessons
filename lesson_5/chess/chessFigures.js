'use strict';
// объект, содержащий шахматные фигуры. Массив имеет вид: [буквенное обозначение, чёрная фигура, белая фигура]
var figures = {
    0: ['П', '&#9823;', '&#9817;']
    , 1: ['Л', '&#9820;', '&#9814;']
    , 2: ['Кн', '&#9822;', '&#9816;']
    , 3: ['С', '&#9821;', '&#9815;']
    , 4: ['Ф', '&#9819;', '&#9813;']
    , 5: ['Кр', '&#9818;', '&#9812;']
};
// функция, устанавливающая размер и цвет шрифта
function setStyle() {
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < 64; i++) {
        cells[i].style.fontSize = '40px';
        if (i < 16) {
            cells[i].style.color = color2;
            cells[63 - i].style.color = color1;
        }
        if (cells[i].style.backgroundColor == color1) {
            cells[i].style.textShadow = '1px 1px 3px ' + color2;
        }
        else if (cells[i].style.backgroundColor == color2) {
            cells[i].style.textShadow = '1px 1px 3px ' + color1;
        }
    }
}
// функция, создающая белую и чёрную фигуру, смотрящие в разные стороны
function putFigures(cell1, cell2, figure1, figure2) {
    cell1.innerHTML = figure1;
    cell2.innerHTML = figure2;
    cell1.style.transform = "rotate(180deg)";
}
// рисуем фигуры
function setFigures(choice) {
    var cells = document.getElementsByClassName('cell');
    if (choice == 0 || choice == 1) {
        putFigures(cells[3], cells[59], figures[4][choice], figures[4][2 * choice]); // ферзь
        putFigures(cells[4], cells[60], figures[5][choice], figures[5][2 * choice]); // король
        for (var i = 0; i < 8; i++) { // пешки
            putFigures(cells[8 + i], cells[55 - i], figures[0][choice], figures[0][2 * choice]);
        }
        for (var i = 0; i < 3; i++) { // остальные фигуры (одновременно слева и справа)
            putFigures(cells[i], cells[56 + i], figures[i + 1][choice], figures[i + 1][2 * choice]);
            putFigures(cells[7 - i], cells[63 - i], figures[i + 1][choice], figures[i + 1][2 * choice]);
        }
    }
    else {
        alert('Некорректный ввод!')
    }
}

setStyle();
var myChoice = prompt('Введите 0, чтобы вывести буквы, отвечающие за шахматные фигуры.\nВведите 1, чтобы вывести сами фигуры.');
setFigures(myChoice);