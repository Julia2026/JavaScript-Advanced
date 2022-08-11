/*Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
/*
var bind_block = document.querySelector('.bind_block');
bind_block.style.display = 'none';

var text = prompt('Enter word please: ');
var k = +prompt('Enter number: ');

let textArr = [];
for(let i = 0; i < text.length; i++){
  let h = text.charCodeAt(i);
  textArr.push(h);
};

console.log(textArr);
console.log('Before change - ', text);

let a1;
var arr_encryptCesar = [];
let str1 = "";

for(let j =0; j < text.length; j++){
	let a = text.charCodeAt(j) + Number(k);
  a1 = String.fromCharCode(a);
  str1 = str1 + a1;
  arr_encryptCesar.push(a);
}
console.log(arr_encryptCesar);
console.log("After: " + str1);

var arr_decryptCesar =[];
for(let r =0; r < arr_encryptCesar.length; r++){
		let b = String.fromCharCode(arr_encryptCesar[r] - Number(k));
    arr_decryptCesar.push(b);
};

var text_decrypt = arr_decryptCesar.join('');
var test = text_decrypt.split(',')
console.log("Go to initial encryption: " + text_decrypt);
*/