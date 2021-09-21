'use strict'
// Домашнее задание к уроку 2
// Задание 1
// Пример 1
// Префикс ++ возвращает значение операнда с добавлением к нему единицы. Ответ: 2; 
let a = 1, b = 1, c, d;
c = ++a;
alert(c);

// Пример 2
// Постфиксный ++ , возвращает значение операнда перед добавлением к нему единицы. b = 1.  Ответ: 1; 
d = b++;
alert(d);

// Пример 3
// a = 2, префикс ++ принял заначение а с добавлением единицы, а = 3. с = 2 + 3. Ответ: 5;
c = 2 + ++a;
alert(c);

// Пример 4
// b = 2, постфиксный ++ возвращает значение операнда перед добавлением к нему единицы. b = 2. d = 2 + 2.  Ответ: 4;
d = 2 + b++;
alert(d);
// a стало равным 3;
alert(a);
// b стало равным 3;
alert(b);

// Задание 2
// Выполняется действие в приоритетном операоре (). Выполняется оператор умножение с присвоением. 
// а = 2, получаем (а = 2 * 2), (а = 4). х = 1 + 4, х = 5. Ответ: 5;
let a = 2;
let x = 1 + (a *= 2);

// Задание 3
let a = 10;
let b = -5;
if (a >= 0 && b >= 0 && a >= b) {
    alert(a - b);
} else if (a >= 0 && b >= 0 && a <= b) {
    alert(b - a);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a && b) {
    alert(a + b);
}

// Задание 4
// Сложение;
function addition(a, b) {
    return (a + b)
}
// Вычитание;
function subtraction(a, b) {
    return (a - b)
}
// Деление;
function division(a, b) {
    return (a / b)
}
// Умножение;
function multiplication(a, b) {
    return (a * b)
}

// Задание 5
let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "a + b":
            return addition(arg1, arg2);
        case "a - b":
            return subtraction(arg1, arg2);
        case "a / b":
            return division(arg1, arg2);
        case "a * b":
            return multiplication(arg1, arg2);
    }
}

console.log(mathOperation(arg1, arg2, "a + b"));
console.log(mathOperation(arg1, arg2, "a - b"));
console.log(mathOperation(arg1, arg2, "a / b"));
console.log(mathOperation(arg1, arg2, "a * b"));