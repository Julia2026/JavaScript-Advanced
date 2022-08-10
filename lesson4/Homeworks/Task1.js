/*

        Документація:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Перевірка всіх полів форми на валідність
        form.reportValidity() > Перевіряє всі поля на валідність та виводить повідомлення з помилкою

        formElement.validity > Об'єкт із параметрами валідності поля
        formElement.setCustomValidity(message) > Метод, який задасть validity.valid = false, і при спробі відправки
            повідомлення виведе message у браузерний потрапив

        Класи для стилізації стану елемента
        input:valid{} // hover
        input:invalid{} // firstchild

        
        Завдання:
        
        Використовуючи браузерне API для валідації форм, реалізувати валідацію наступної форми:

        - Ім'я користувача: type:text -> validation: required; minlength = 2;
            Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";
        - Кількість з'їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
            Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
        - Дякуємо за яблука: type: text -> validation: required;
            Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();

        - згоден на навчання: type: checkbox -> validation: required;
            Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"

        Внизу дві кнопки:

        1) Звичайний submit який відправить форму, якщо вона валідна.
        2) Кнопка Validate(Перевірити) яка запускає методи:
            - yourForm.checkValidity: та виводить на сторінку повідомлення з результатом перевірки
            - yourForm.reportValidity: викликає перевірку всіх правил та виведення повідомлення з помилкою, якщо така є

*/
window.addEventListener('DOMContentLoaded', function(){
    var myForm = document.getElementById('myForm')
    var submit = document.getElementById('submit');
    var name = myForm.elements.name;
    var email = myForm.elements.email;
    var pass = myForm.elements.password;
    var agree = myForm.elements.agree; 
    var howMuchApples = myForm.elements.howMuchApples;
    var check = document.getElementById("test_btn");

    //Check name 
    name.addEventListener('input', function(){
        if(!name.validity.valid){
            name.setCustomValidity('Як тебе звуть друже?!'); 
        }else{
            name.setCustomValidity('')
        }       
    });

    //Check email
    email.addEventListener('input', function(){
        if(email.validity.typeMismatch){
            email.setCustomValidity('Ну й дарма, не отримаєш бандероль із яблуками!');
        } else {
            email.setCustomValidity('');
        }
    });

    //Check Agree
    agree.addEventListener('click', function(){
        if(agree.checked){
            submit.disabled = false;   
        } else {
            alert('Неосвічені живуть довше! Добре подумай!');
            submit.disabled = true;
        }
        console.log(myForm.checkValidity()); 
    }, false);
    
    var cleanValidationMessage = function() {
        let arrOfInputs = Array.from(myForm.elements);
        arrOfInputs.forEach( item => {
            item.setCustomValidity('');
        })
    };

    check.addEventListener('click', function(){
        cleanValidationMessage();
        if (name.validity.valid){
            console.log("Все добре!");
        } else {
            console.log('Проблема!')
            name.setCustomValidity('Невірно введене імя!');
        }

        if(!email.validity.valid){
            email.setCustomValidity('Я чекаю!');
            console.log('Не коректно введений email');
        } else {
            console.log('Все ок!')
        }

        if(pass.validity.valid) {
            console.log('Пароль введений правильно!');
        } else {
            pass.setCustomValidity('Я нікому не скажу наш секрет');
            console.log('Пароль введений не правильно!');
        }

        if(howMuchApples.validity.valid){
            console.log('Добре!');
        } else {
            howMuchApples.setCustomValidity('Ну хоч поїсти трохи... Яблука смачні');
            console.log('Не вірно!');
        }
    });

});
