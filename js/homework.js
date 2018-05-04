// Строки. Задачи
let string = 'some test string';
let a = 20;
let b = 16;
let res;
let newString;

//первый знак в строке
res = string[0];

//последний знак в строке
res = string[string.length-1];

// первая и последняя буква большая
res = string[0].toUpperCase();
res = string[string.length-1].toUpperCase();
newString = string.slice(1, -1);
res = string[0].toUpperCase() + newString + string[string.length-1].toUpperCase();  // не совсем понял нужно было либо отдельно буквы большими сделать либо в строке, сделал и так и так

// поиск слова string
res = string.indexOf('string');

//второй пробел
res = string.lastIndexOf(' ');

//строке с 5го символа длинной 4 символа
res = string.substr(4, 4);

//строка с 5го по 9ый символ
res = string.slice(4, 10);

//строка без 6 последних символов
res = string.slice(0, -6);

//строка 2016
res = a.toString() + b.toString();


// Числа. Задачи
//число pi округленное до 2 знаков
res = +Math.PI.toFixed(2);

// самое большое число из списка
res = Math.max([15],[11], [16], [12], [51], [12], [13], [51]);

// самое маленькое число из списка
res = Math.min([15],[11], [16], [12], [51], [12], [13], [51]);

//случайное число округленное до 2 цифр после запятой
res = Math.random().toFixed(2);

//случайное целое число от 0 до 23
res = Math.round(Math.random() * 23);

// сложение 0.6 и 0.7
res = ((0.6 *10) + (0.7 * 10)) / 10;

//число из строки '100$'
res = parseInt('100$');


let bill = {
    product: 'iphone',
    details: {

    }
};

bill.price = 1000;
bill.currency = 'dollar';

bill.details.model = 7;
bill.details.color = 'spaceGrey';


