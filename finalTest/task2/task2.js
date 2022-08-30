/*
        Завдання:
         Зробити валідацію форми:
         1. Логін / Пароль не може бути порожнім
         2. те поле, яке не пройшло валідацію, підсвічувати червоним, яке пройшло - підсвічувати зеленим.
         3. Поки користувач не згоден з угодою – кнопка відправки не активна
*/

    
window.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('MyValidateForm');
    let btn = document.getElementById('submit');
    let agree = document.getElementById('agree');
    let login = document.getElementById('login');
    let pas1 = document.getElementById('pas1');
    let pas2 = document.getElementById('pas2');

    form.addEventListener('change', function(){
        // Login
        if(login.value.length == 0){
            login.classList.add('error');
        } else {
            login.classList.add('OK');
        };
        
        // Pas1
        if(pas1.value.length == 0){
            pas1.classList.add('error');
        } else {
            pas1.classList.add('OK');
        }
        
        // Pas2
        if(pas2.value !== pas1.value){
            pas2.classList.add('error');
        } else {
            pas2.classList.add('OK');
        }

        // checkbox
        if(agree.checked === true){
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }

    });
   
});
    




