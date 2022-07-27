var button1 = document.querySelector('[data-tab="1"]');
var button2 = document.querySelector('[data-tab="2"]');
var button3 = document.querySelector('[data-tab="3"]');

var contentOne = document.querySelector(".tab[data-tab='1']");
var contentSecond = document.querySelector(".tab[data-tab='2']");
var contentThird = document.querySelector(".tab[data-tab='3']");

function showContentFirst() {
  contentOne.classList.toggle("active");
}
function showContentSecond() {
  contentSecond.classList.toggle("active");
}
function showContentThird() {
  contentThird.classList.toggle("active");
}

button1.onclick = showContentFirst;
button2.onclick = showContentSecond;
button3.onclick = showContentThird;


  /*

  Завдання 1.

    Написати скрипт, який буде перемикати вкладки по натисканню
    на кнопки у хедері.

    Головна умова – змінювати файл HTML не можна.

    Алгоритм:
      1. Вибрати кожну кнопку у шапці
         + бонус вибрати одним селектором

      2. Повісити кнопку онклік
          button1.onclick = function(event) {

          }
          + бонус: один обробник на всі три кнопки

      3. Написати функцію, яка вибирає відповідну вкладку
         та додає до неї клас active

      4. Написати функцію hideAllTabs яка ховає всі вкладки.
         Видаляючи клас active з усіх вкладок

    Методи роботи:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
