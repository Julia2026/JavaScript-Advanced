/*
  Завдання:
   Написати скрипт який:
     1. Збирає дані з форми (3 різних полів), конвертує їх у json та виводить у консоль.
   -> 2. Зробити окремий інпут, який виконує JSON.parse(); на той рядок, що ви туди ввели і виводить результат у консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'

*/

// 1

window.addEventListener('DOMContentLoaded', function(){
  // 1
  let btn = document.querySelector('button');
  let form = document.getElementById('form');

  btn.addEventListener('click', function(e){
    e.preventDefault();
    let obj = {
      name: form.elements.name.value,
      age: form.elements.age.value,
      password: form.elements.password.value,
    };
    let json = JSON.stringify(obj);
    console.log(json);
  });

  // 2
  let secondForm = document.getElementById('secondForm');
  let secondBtn = document.getElementById('secondBtn');

  secondBtn.addEventListener('click', function(e){
    e.preventDefault();
    var stringValue = secondForm.querySelector('input').value;
    console.log(stringValue);
    var parse = JSON.parse(stringValue);
    console.log(parse);
  });
});







