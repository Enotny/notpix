// ==UserScript==
// @name         Custom Script for Multiple Buttons with Delayed Clicks and Random Repeat
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  Скрипт для работы с двумя кнопками, задержкой между нажатиями и повторением каждые 20 минут с плавающим временем
// @author       Ваше имя
// @match        https://web.telegram.org/*
// @grant        none
// @downloadURL  https://github.com/Enotny/notpix/raw/main/refreshwinow.user.js
// @updateURL    https://github.com/Enotny/notpix/raw/main/refreshwinow.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Селекторы для элементов
    const buttonSelector1 = '.btn-icon._BrowserHeaderButton_m63td_65'; // Селектор первой кнопки
    const buttonSelector2 = '.new-message-bot-commands'; // Селектор второй кнопки

    // Период времени в минутах (20 минут)
    const baseDelayMinutes = 20;
    // Время колебаний ±5 минут
    const fluctuationMinutes = 5;
    // Задержка между нажатием кнопок (в миллисекундах)
    const buttonDelay = 2000; // 2 секунды

    // Функция для генерации случайного времени (в миллисекундах) с учетом колебаний
    function getRandomDelay() {
        const minDelay = (baseDelayMinutes - fluctuationMinutes) * 60000; // Минимальная задержка (15 минут)
        const maxDelay = (baseDelayMinutes + fluctuationMinutes) * 60000; // Максимальная задержка (25 минут)
        return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay; // Случайная задержка в миллисекундах
    }

    // Функция для нажатия первой кнопки
    function clickButton1() {
        let button1 = document.querySelector(buttonSelector1);
        if (button1) {
            button1.click();
            console.log("Кнопка 1 нажата!");
        } else {
            console.log("Кнопка 1 не найдена!");
        }
    }

    // Функция для нажатия второй кнопки
    function clickButton2() {
        let button2 = document.querySelector(buttonSelector2);
        if (button2) {
            button2.click();
            console.log("Кнопка 2 нажата!");
        } else {
            console.log("Кнопка 2 не найдена!");
        }
    }

    // Основная функция для нажатия обеих кнопок с задержкой
    function clickButtons() {
        // Нажимаем первую кнопку сразу
        clickButton1();

        // Нажимаем вторую кнопку через 2 секунды
        setTimeout(clickButton2, buttonDelay);

        // Получаем случайную задержку перед следующим выполнением
        const randomDelay = getRandomDelay();
        console.log(`Следующее выполнение через ${randomDelay / 60000} минут`);

        // Повторяем действие через случайное время
        setTimeout(clickButtons, randomDelay);
    }

    // Первоначальный запуск функции через паузу (например, 2 секунды)
    setTimeout(clickButtons, 20000); // Замените паузу на нужное значение
})();
