/*Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  

  let colors = {
    background: 'purple',
    color: 'white',
  }
  /*
  // 1.1
  function myCall( color ){
    document.body.style.background = this.background;
    document.body.style.color = color;
  };
  
  myCall.call( colors, 'red' );
  */
  
  //1.2
  /*
  function myChange() {
    document.body.style.background = this.background;
    document.body.style.color = this.color;
  };

  myChange();
  var bindedColor = myChange.bind(colors);
  bindedColor();

  */
  //1.3
  /*
  function myTitle( I, know, how, bilding, works, in_JS, last){
    var txt = document.createElement('h1');
    txt.innerHTML = I + ' ' + know + ' ' + how + ' ' + bilding + ' ' + works + ' ' + in_JS + ' ' + last;
    
    document.body.appendChild(txt);
  }
  var context = ['I', 'know', 'how', 'bilding', 'works', 'in', 'JS'];
  myTitle.apply(colors, context);
  */
