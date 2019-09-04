var choices = []; // массив для записи выбранных ответов
var currentQuestion = 0; // текущий вопрос

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

// функция, возвращающая -1 для выхода из игры, либо число введённое пользователем после проверки функцией isAnswer()
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

// функция, возвращающая число, введенное пользователем, если оно прошло проверку функцией checkAnything(). option - объект из millionareText.js
function checkChoice(option) {
    var allAnswers = ''; // склеиваем все варианты ответов в одну строку. Удобно, если неизвестно, сколько их для каждого вопроса.
    for (answer of option.answers) {
        allAnswers += answer;
    }
    var questionText = option.text + allAnswers + '-1 - Забрать деньги.';
    var choice = checkAnything(questionText, option.answers.length);
    return choice;
}

// функция, печатающая выбранный пользователем шаг с его вариантом ответа после проверки номера шага функцией checkAnything()
function checkStage() {
    var text = 'Ваши ответы сохранены.\n' + 'Введите номер вопроса (от 1 до ' + currentQuestion + ') , который Вы хотите посмотреть.\n' + '-1 - Выход из игры.';
    var stage = checkAnything(text, currentQuestion);
    if (stage != -1) {
        if (choices[stage - 1] == undefined) {
            alert('На данном вопросе Вы забрали деньги.')
        }
        else {
            alert(choices[stage - 1]);
        }
    }
}

// функция, завершающая игру.
function finishGame(rubles) {
    alert('Ваш выигрыш составляет ' + rubles + ' рублей.');
    checkStage();
    alert('Спасибо за игру!')
}

// рекурсивная функция, обрабатывающая ответы до тех пор, пока игра не завершится. option - объект из millionareText.js
function playGame(option) {
    if (option === null) {
        alert('Поздравляем! Вы победили!');
        finishGame(money[15])
        return;
    }
    currentQuestion++;
    var event = checkChoice(option);
    if (event == -1) {
        finishGame(money[currentQuestion - 1]);
    } 
    else if (event >= 1 && event <= option.answers.length) {
        var right = 'Правильный ответ: ' + option.answers[option.rightAnswer - 1];
        choices.push(option.text + 'Ваш ответ: ' + option.answers[event - 1] + right);
        if (event == option.rightAnswer) {
            playGame(option.next);
        }
        else {
            alert(right);
            if (currentQuestion <= 5) {
                finishGame(money[0]);
            }
            else if (currentQuestion > 5 && currentQuestion <= 10) {
                finishGame(money[5]);
            }
            else if (currentQuestion > 10 && currentQuestion <= 15) {
                finishGame(money[10]);
            }
        }
    }
    else {
        alert('Ошибка!')
    }
}

// запускаем игру
playGame(questions[0]);