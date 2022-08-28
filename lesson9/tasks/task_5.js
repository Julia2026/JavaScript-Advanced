// взяти todolist з попередніх домівок та реалізувати збереження всіх записів на "сервер" використовуючи https://www.npmjs.com/package/json-server або базу firebase, що розглядали на уроці
// при перезавантаженні сторінки всі збережені записи повинні підтягуватися і малюватись, при додаванні запису вона відлітає на "серевер" і зберігається

let addBtn = document.getElementById('addBtn');
let newInput = document.getElementById('newList');
let ul = document.getElementById('toDoList');

let url = 'https://js-adv-87cc8-default-rtdb.firebaseio.com/posts.json';

const removeItem = (listItem) => (e) => {
    console.log(listItem, e);
    listItem.remove();
    fetch(`${url}/${listItem.dataset.id}`, {
        method: "DELETE",
    });
};

const renderList = (data) => {
    let listItem = document.createElement('li');
    listItem.dataset.id = data.id;
    listItem.innerHTML = `
        <input type="checkbox" class="DoneCheckbox" />
        <span class="TodoText">${data.title}</span>
        <button>Remove</button>
    `;
    let checkBox = listItem.querySelector('input');
    let removeBtn = listItem.querySelector('button');

    checkBox.addEventListener('input', (e) => {
        listItem.querySelector('TodoText').style.textDecoration = "line-through";
    });
    removeBtn.addEventListener('click', removeItem(listItem));
    ul.appendChild(listItem);
};

addBtn.addEventListener('click', function(){
    let data = {title: newInput.value, id: new Date().getTime()};
    let jsonData = JSON.stringify(data);
    fetch(url, {
        method: 'POST',
        body: jsonData
    });
    renderList(data);
});

fetch(url)
	.then(res => res.json())
	.then(res => {
        res.forEach(item => {
            renderList(item);
        });
    });
