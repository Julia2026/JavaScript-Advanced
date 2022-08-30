const Demo = () => {

  /*
    Lexical Environment - Лексична область видимості
  */

  var counter = 12; // Змінна оголошена в "глобальній" області видимості

  function addCounter(){

    /*
      Кожна функція за її ініціалізації створює свою лексичну область видимості.
       У даному прикладі, ф-я addCounter не має жодних змінних, і використовує
       змінну counter з області видимості вище та зміна цієї змінної
       впливає те що, який результат буде заперечувати ф-я addCounter;
    */
    return counter++;
  }

  console.log( addCounter() );
  console.log( addCounter() );
  console.log( addCounter() );
  counter = 55;
  console.log( addCounter() );
  console.log( addCounter() );


}


document.addEventListener('DOMContentLoaded', Demo);
