/* 
        Завдання:

            Написати за допомогою async-await скрипт, який:

            Отримує список користувачів: https://jsonplaceholder.typicode.com/users
            Перебирає, виводить табличку:

            # | userName | email | Показати webiste | phone |
            1. | userName | email@test.com | button | phone
            2. | userName | email@test.com | 20/10/2019 | phone
            3. | userName | email@test.com | button | phone
            4. | userName | email@test.com | button | phone

            Дані про сайт приховувати під час виведення та показувати під час кліку.
*/
window.addEventListener('load', function(){
    async function getUser(){
        let getInfoUsers = await fetch("https://jsonplaceholder.typicode.com/users");
        let getTransform = await getInfoUsers.json();

        getTransform.forEach(function(usr, e) {
            let phone = `${usr.phone}`;
            let div = document.createElement('div');
            div.classList.add('mydiv');
                let btnWeb = document.createElement('button');
                btnWeb.innerHTML = 'Показати website';
                let btnPhone = document.createElement('button');
                btnPhone.innerHTML = 'phone';

                let div_1 = document.createElement('div');
                let div_2 = document.createElement('div');
                let div_3 = document.createElement('div');
                let div_4 = document.createElement('div');
                let div_5 = document.createElement('div');

                div_1.classList.add('div_slots_1');
                div_2.classList.add('div_slots');
                div_3.classList.add('div_slots');
                div_4.classList.add('div_slots');
                div_5.classList.add('div_slots_5');

                div_1.innerHTML = `${e}`;
                div_2.innerHTML = `${usr.username}`;
                div_3.innerHTML = `${usr.email}`;
                div_4.appendChild(btnWeb);
                div_5.appendChild(btnPhone);

                div.appendChild(div_1);
                div.appendChild(div_2);
                div.appendChild(div_3);
                div.appendChild(div_4);
                div.appendChild(div_5);

                if(btnWeb){
                    btnWeb.addEventListener('click', function(){
                        btnWeb.style.display = 'none';
                        div_4.innerHTML = `${usr.website}`;
                    });
                };
                if(btnPhone){
                    btnPhone.addEventListener('click', function(){
                        btnPhone.style.display = 'none';
                        div_5.innerHTML = `${phone}`;
                    });
                };
                document.body.appendChild(div);
        });
        
    };
    getUser();
})
   

