'use strict';
var mainSize = 400;
var fieldSize = mainSize; // размер игрового поля
var cellSize = mainSize / 8; // размер одной клетки
var borderSize = mainSize / 20; // ширина рамки вокруг игрового поля
var boardSize = mainSize + borderSize + borderSize; // размер всей доски
fieldSize += "px";
cellSize += "px";
borderSize += "px";
boardSize += "px";
var color1 = "white";
var color2 = "black";
// создание нового блока
function newBlock(parrent, blockName, blockWidth, blockHeight, isFloating) {
    var div = document.createElement("div");
    div.className = blockName;
    div.style.width = blockWidth;
    div.style.height = blockHeight;
    if (isFloating) {
        div.style.float = "left";
    }
    parrent.append(div);
    return div;
}
// добавление границы элемента
function newOutline(element, width, style, color) {
    element.style.outlineWidth = width;
    element.style.outlineStyle = style;
    element.style.outlineColor = color;
}
// выравнивание блока по центру
function alignBlock(element) {
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.style.marginLeft = "auto";
    element.style.marginRight = "auto";
}
// центрирование текста внутри блока
function alignLetter(element, height) {
    element.style.textAlign = "center";
    element.style.lineHeight = height;
}
// добавление символов по краям игрового поля
function putSymbol(parrent, blockName, blockWidth, blockHeight, height, isRotated) {
    var symbol = newBlock(parrent, blockName, blockWidth, blockHeight, true);
    alignLetter(symbol, height);
    if (isRotated) {
        symbol.style.transform = "rotate(180deg)";
    }
    return symbol;
}
// функция, рисующая доску
function chessBoard() {
    var board = newBlock(document.body, "board", boardSize, boardSize, false); // сама доска
    var upLetters = newBlock(board, "up-letters", fieldSize, borderSize, false); // блок букв сверху
    var leftDigits = newBlock(board, "left-digits", borderSize, fieldSize, true); // блок цифр слева
    var field = newBlock(board, "field", fieldSize, fieldSize, true); // игровое поле
    var rightDigits = newBlock(board, "right-digits", borderSize, fieldSize, true); // блок цифр справа
    var downLetters = newBlock(board, "down-letters", fieldSize, borderSize, false); // блок букв снизу
    alignBlock(board);
    alignBlock(upLetters);
    alignBlock(downLetters);
    newOutline(board, "1px", "solid", color2);
    newOutline(field, "1px", "solid", color2);
    downLetters.style.clear = "both";
    // т.к. в предыдущих блоках включено свойство "float: left", для этого нужно добавить "clear: both", чтобы он не наехал на предыдущие.
    for (var i = 0; i < 8; i++) {
        // добавляем символы по краям
        var upLetter = putSymbol(upLetters, "letter", cellSize, borderSize, borderSize, true);
        var downLetter = putSymbol(downLetters, "letter", cellSize, borderSize, borderSize, false);
        var leftDigit = putSymbol(leftDigits, "digit", borderSize, cellSize, cellSize, false);
        var rightDigit = putSymbol(rightDigits, "digit", borderSize, cellSize, cellSize, true);
        upLetter.innerHTML = String.fromCharCode(65 + i); // получаем букву из таблицы символов Юникод
        downLetter.innerHTML = String.fromCharCode(65 + i);
        leftDigit.innerHTML = 8 - i;
        rightDigit.innerHTML = 8 - i;
        var row = newBlock(field, "row", fieldSize, cellSize, false); // добавляем ряд
        for (var j = 0; j < 8; j++) {
            var cell = newBlock(row, "cell", cellSize, cellSize, true); // добавляем клетку
            alignLetter(cell, cellSize); // центрируем положение фигуры или текста внутри клетки
            cell.style.backgroundColor = ((i + j) % 2 == 0) ? color1 : color2; // окрашиваем клетки в шахматном порядке
        }
    }
}
chessBoard();