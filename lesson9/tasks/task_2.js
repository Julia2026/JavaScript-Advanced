/*

    Завдання 2:
     Написати форму логіну (логін пароль), яка після відправки даних записує їх у localStorage.
     Якщо в localStorage є запис - На сторінці вивести "Привіт {username}", якщо ні - вивести вікно
     логіна.

     + бонус, зробити кнопку "вийти" яка видаляє запис із localStorage і знову показує форму логіна
     + бонус зробити перевірку логіну та пароля на конкретний запис. Тобто. залогінить користувача якщо
     він введе тільки admin@example.com та пароль 12345678


*/

window.addEventListener('DOMContentLoaded', function(){
    let userName = document.getElementById('userName');
    let userPassword = document.getElementById('userPassword');
    let submitBtn = document.getElementById('submitBtn');
    
    submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        let nameVal = userName.value;
        let passVal = userPassword.value;
        
        let sendName = localStorage.setItem("name", nameVal);
        let sendPass = localStorage.setItem("password", passVal);

        let getName = localStorage.getItem("name");
        let getPass = localStorage.getItem("password");
        if(getName && getPass){
            if(getName == 'admin@example.com' && getPass == 12345678){
                alert('You are login!');
            }
            alert(`Hello ${nameVal}!`);
        }
        else {
            alert('Mistake! Please try again!');
        }
    });
    
})

