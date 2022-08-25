/*
Завдання:

  1. За допомогою fetch отримати дані:
     https://jsonplaceholder.typicode.com/users

  2. Отриману відповідь перетворити на json викликавши метод .json з об'єкта відповіді
  3. Вибрати випадкову людину і передати до наступного чейну промісу
  4. Зробити додатковий запит на отримання списку постів людини
     https://jsonplaceholder.typicode.com/posts
     І далі передати об'єкт:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Підказка потрібно викликати додатковий fecth з поточного чейну.
     Для того щоб передати результат виконання дод. запиту
     у наш перший проміс використовуйте констуркцію:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формуєте об'єкт у якому будуть дані людини з
                 першого запиту, наприклад, його name response1.name
                 та друзі які прийшли з дод. запиту
              }
            )
        }
      )

    5. Вивести результат на сторінку

   + Бонус. Для конвертації об'єкта response в json використовувати одну
     функцію.

*/

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res1 => res1.json())    
  .then(res1 => {
    return res1[Math.floor(Math.random()*res1.length)];
  })
  .then(res1 => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res2 => res2.json())
    .then(res2 => {
      let obj = {};
        obj.name = res1.company;
        obj.posts = res2.filter(x => x.userId === res1.id);

        console.log(obj);
      })
    });
