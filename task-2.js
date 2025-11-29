const firstQuestion = prompt('Сколько будет 2 + 2?');
let correctAnswers = 0;
let incorrectAnswers = 0;
const firstQuestion2 = Number(firstQuestion.trim());


if(firstQuestion2 === 4){
    alert('Ответ Верный');
    ++correctAnswers;
} else {
    alert('Ответ неверный');
    ++incorrectAnswers;
};

const secondQuestion = prompt('Сколько будет 2 * 2?');
secondQuestion2 = Number(secondQuestion.trim());

if(secondQuestion2 === 4) {
    alert('Ответ Верный');
    ++correctAnswers;
} else {
    alert('Ответ неверный');
    ++incorrectAnswers;
};

const thirdQuestion = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
thirdQuestion2 = Number(thirdQuestion.trim());

if(thirdQuestion2 === 1) {
    alert('Ответ Верный');
    ++correctAnswers;
} else {
    alert('Ответ неверный');
    ++incorrectAnswers;
};

const fourthQuestion = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
fourthQuestion2 = Number(fourthQuestion.trim());

if(fourthQuestion2 === 12) {
    alert('Ответ Верный');
    ++correctAnswers;
} else {
    alert('Ответ неверный');
    ++incorrectAnswers;
};

const fifthQuestion = prompt('Сколько будет 2 + 2 * 2?');
fifthQuestion2 = Number(fifthQuestion.trim());

if(fifthQuestion2 === 6) {
    alert('Ответ Верный');
    ++correctAnswers;
} else {
    alert('Ответ неверный');
    ++incorrectAnswers;
};


alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`)