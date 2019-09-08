// функция, возвращающая длину массива
function getLength(question) {
    do {
        var length = +prompt(question);
    } while (isNaN(length) || length < 0);
    return length;
}
// функция для клонирования объекта с целью последующего изменения объекта-клона
function cloneObject(oldObject) {
    var newObject = {};
    for (var key in oldObject) {
        newObject[key] = oldObject[key];
    }
    return newObject;
}
// функция для добавления продукта в массив
function addTo(array, productName, productPrice) {
    var element = cloneObject(product);
    element.name = productName;
    element.price = productPrice;
    array.push(element);
}
// заполнение массива рандомными продуктами
function randomFill(object, question) {
    object.length = getLength(question);
    for (var item = 0; item < object.length; item++) {
        addTo(object.list, 'Товар ' + (item + 1), Math.round(Math.random() * 99 + 1) * 100);
    }
}
// функция, создающая html-тег с заданным именем класса и добавляющая его в конец родительского элемента
function createAndAppend(tag, name, parent) {
    var element = document.createElement(tag);
    element.className = name;
    parent.append(element);
    return element;
}
// функция, определяющая структуру раздела
function sectionStructure(section, sectionName) {
    section.name = sectionName;
    section.self = document.getElementById(section.name);
    section.header = createAndAppend('h2', section.name + '-header', section.self);
    section.content = createAndAppend('div', section.name + '-content', section.self);
}