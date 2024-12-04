const { strictEqual, throws } = require("assert");
const reverseString = require("./index");

// Тест: перевірка правильного рядка
strictEqual(reverseString("hello"), "olleh", "Тест 1 не пройдено");

// Тест: порожній рядок
strictEqual(reverseString(""), "", "Тест 2 не пройдено");

// Тест: некоректний ввід
throws(() => reverseString(123), Error, "Тест 3 не пройдено");

console.log("Усі тести пройдені успішно!");
