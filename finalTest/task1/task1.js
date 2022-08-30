/*Завдання:
         Створити список справ, до якого можна:
         - Додати новий елемент
         - Видалити елемент

       Елемент шаблону:
         <li class="listItem">
             <span class="TodoText">{add text}</span>
             <button>Remove</button>
         </li>
*/
let btn = document.getElementById('AddToDo');

btn.addEventListener('click', function(){
    let input = document.getElementById('newToDo');
    let toDoList = document.getElementById('toDoList');
    
    let li = document.createElement('li');
    li.classList.add('listItem');
    let span = document.createElement('span');
    span.classList.add('TodoText');
    span.innerHTML = input.value;
    li.appendChild(span);
    toDoList.appendChild(li);

    toDoList.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            console.log(ev.target.classList.toggle('done'));
        }
    }, false);

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove';
    li.appendChild(removeBtn);
    
    removeBtn.addEventListener('click', function(){
        li.parentNode.removeChild(li);
    });
});



