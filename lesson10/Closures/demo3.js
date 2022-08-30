const Demo = () => {

  let number = 10;

  function first() {
    // number береться з контексту ф-і Demo

    return number + 5;
  }

  function second(){
    // number переопределяется локально функції і саме це значення буде
     // Використовувати ф-я first
    number = 2;
    return first();
  }

  function main(){
    console.log( first() ); // => 15
    console.log( second() ); // => 7
  };

  console.log('number', number );
  main();

}

document.addEventListener('DOMContentLoaded', Demo);
