// помимо выполнения самого ДЗ, произвёл оптимизацию кода игры. 
// повторяющиеся куски кода объявил функциями. 
// добавил рекурсивную функцию, чтобы можно было удобно добавлять новые вопросы в игру, не создавая кучу вложенных циклов и условных конструкций.

var choices = []; // массив для записи выбранных ответов
var lastStage = 0; // последний сыгранный шаг

// рекурсивная функция, обрабатывающая ответы до тех пор, пока игра не завершится. option - объект из questText.js
function switchEvent(option) {
    if (option === null) {
        checkStage();
        alert('Игра завершена! Спасибо за игру!');
        return;
    }
    var event = checkChoice(option);
    lastStage++;
    if (event == -1){
        checkStage();
        alert('Спасибо за игру!');
    }
    else if (event >=1 && event <= option.number){
        for(i=1; i <= option.number; i++) {
            if (event == i){
                choices.push(option.question + option.answer[i-1]);
                switchEvent(option.next[i-1]);
            }
        }
    }
    else {
        alert('Ошибка');
    }
}

// функция, печатающая выбранный пользователем шаг с его вариантом ответа после проверки номера шага функцией checkAnything()
function checkStage() {
    var text = 'Ваши ответы сохранены.\n' + 
        'Введите номер шага (от 1 до ' + lastStage + ') , который Вы хотите посмотреть.\n' + 
        '-1 - Выход из игры.';
    var stage = checkAnything(text, lastStage);
    if (stage != -1) {
        if (choices[stage-1] == undefined) {
            alert('На данном шаге Вы покинули игру, не дав ответа.')
        }
        else {
            alert(choices[stage-1]);
        }
    }
}

// функция, возвращающая число, введенное пользователем, если оно прошло проверку функцией checkAnything(), объявленной ниже.
function checkChoice(option) {
    var answers = ''; // склеиваем все варианты ответов в одну строку. Удобно, если неизвестно, сколько их для каждого вопроса.
        for (item of option.answer) {
            answers += item;
        }
    var text = option.question + answers + '-1 - Выход из игры.';
    var choice = checkAnything(text, option.number);
    return choice;
}


// функция, возвращающая -1 для выхода из игры, либо число введённое пользователем после проверки функцией isAnswer(), объявленной ниже.
function checkAnything(string, maxValue) {
    do {
        var ok = false;
        var event = +prompt(string);
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(maxValue, event);
        }
    } while (!ok);
    return event;
}

// функция, проверяющая введённое число на корректность
function isAnswer(number, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > number) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}


// таким образом, без учёта объявления функций и глобальных переменных, игровой код содержит одну строчку =)
switchEvent(a);