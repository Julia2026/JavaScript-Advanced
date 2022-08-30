const Demo = () => {

  function sayPhrase(){
    const say = function(){ console.log( Phrase ) };

    const Phrase = 'Hey, this is the 10th Lesson on JS Advanced Course!';
    /*
      Phrase - локальна змінна яка доступна лише з функції
       sayPhrase. Ми повертаємо з цієї функції – іншу функцію say
       яка використовує змінну phrase.
    */
    
    return say;
  }
  /*
    На момент ініціалізації, функція say знає про існування змінної Phrase
     і може її використовувати за межами її лексичного
     оточення.
  */
  const ClosurePhrase = sayPhrase();
        // console.log( Phrase ); // <- error
        ClosurePhrase();

}

document.addEventListener('DOMContentLoaded', Demo);
