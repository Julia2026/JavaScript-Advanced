/*

    Задание 3:

    1. Создать ф-ю констурктор которая создаст новую собаку у которой есть имя и порода
    2. Обьект должен иметь пару свойств (Имя, порода, status)
    3. Функцию которая производит манипуляцию со свойствами (Собака бежит), (Собака есть)
    4. Функция которая перебором выводит все свойства

    Dog {
      name: '',
      name: '',
      status: 'idle',

      changeStatus: function(){...},
      showProps: function(){...}
    }

    // Перебор свойств и методов обьекта
    for (key in obj) {
      console.log( key, obj[key] );
      /* ... делать что-то с obj[key] ...
    // }
*/
/*
function Dog( name, breed, status, doSomething){
  this.name = name;
  this.breed = breed;
  this.status = status;
  this.doSomething = doSomething;
  this.func1 = function() {
    console.log('Dog ' + this.status);
  };
  this.func2 = function() {
    console.log('Now dog is ' + this.doSomething);
  }
};

function showAll(firstDog){
  for(key in firstDog){
    console.log(key, firstDog[key]);
  }
}


var firstDog = new Dog('Jack', 'Labrador', 'Is', 'Run');
console.log(firstDog);
firstDog.func1();
firstDog.func2();
showAll(firstDog);
*/
