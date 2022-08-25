/*Завдання:

     Написати за допомогою async-await скрипт, який:

     Отримує список користувачів: https://jsonplaceholder.typicode.com/users
     Перебирає, виводить табличку:

     # | userName | email | Показати webiste | Показати телефон |
     1. | userName | email@test.com | button | button
     2. | userName | email@test.com | 20/10/2019 | button
     3. | userName | email@test.com | button | button
     4. | userName | email@test.com | button | button

     Дані про сайт та номер телефону приховувати під час виведення та показувати під час кліку.

*/
window.addEventListener('load', function(){
     async function getMoreUsersInformation(){
          let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
          let users = await getUsers.json();
          console.log(users);

          users.forEach(function(usr, i) {
               let phone = `${usr.phone}`;
               let mydiv = document.createElement('div');
               mydiv.classList.add('mydiv');
                    let btnWebsite = document.createElement('button');
                    btnWebsite.innerHTML = 'Показати website';
                    let btnPhone = document.createElement('button');
                    btnPhone.innerHTML = 'Показати телефон';

                    let div_1 = document.createElement("div");
			     let div_2 = document.createElement("div");
			     let div_3 = document.createElement("div");
			     let div_4 = document.createElement("div");
			     let div_5 = document.createElement("div");

                    div_1.classList.add("div_slots_1");
			     div_2.classList.add("div_slots");
			     div_3.classList.add("div_slots");
			     div_4.classList.add("div_slots");
			     div_5.classList.add("div_slots_5");

                    div_1.innerHTML = `${i}`;
                    div_2.innerHTML = `${usr.username}`;
                    div_3.innerHTML = `${usr.email}`;
                    div_4.appendChild(btnWebsite);
                    div_5.appendChild(btnPhone);
                    
                    mydiv.appendChild(div_1);
                    mydiv.appendChild(div_2);
                    mydiv.appendChild(div_3);
                    mydiv.appendChild(div_4);
                    mydiv.appendChild(div_5);

                    if (btnWebsite){
                         btnWebsite.addEventListener("click",function(e){
                             btnWebsite.style.display = "none";
                             div_4.innerHTML = `${usr.website}`;
                        })
                    };
                    if (btnPhone){
                         btnPhone.addEventListener("click",function(e){
                              btnPhone.style.display = "none";
                              div_5.innerHTML = `${phone}`;
                         })
                    };
                    document.body.appendChild(mydiv);
          }); 
     }; 
     var UserInformaton = getMoreUsersInformation();
});