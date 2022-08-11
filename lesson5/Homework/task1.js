/*Задание:
1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

function Comment(name, text, link){
  this.name = name;
  this.text = text;
  if (link) this.link = link;
  this.likes = 0;
};

Comment.prototype = {
  link:'https://chadpowellphotography.com/store/the-lost-playground-adventureland',
  addLike: function(){
    this.likes++;
  }
};

var myComment1 = new Comment('Sara', 'This is one of the most beautiful place!');
var myComment2 = new Comment('Jack', 'I like it!');
var myComment3 = new Comment('Braine', 'You must visit it!');
var myComment4 = new Comment('Yulia', 'Every week I visit this place!');
var CommentsArray = [myComment1, myComment2, myComment3, myComment4];
var commentPlace = document.getElementById('CommentsFeed');


function Avatar(comments){
  this.comments = comments;
  
  this.Render = function () {
    this.comments.forEach(com => {
      var div = document.createElement('div');
      var title = document.createElement('h3');
      title.innerHTML = com.name;
      div.appendChild(title);

      var content = document.createElement('p');
      content.innerHTML = com.text;
      div.appendChild(content);

      var avatar = document.createElement('img');
      avatar.src = com.link;
      div.appendChild(avatar);

      var likes = document.createElement('div');
      likes.className = 'like';
      likes.innerHTML = com.likes;
      div.appendChild(likes);

      div.addEventListener('click', function(){
        com.addLike();
        div.querySelector('.like').innerHTML = com.likes;
        console.log(com.likes);
      });
    commentPlace.appendChild(div);
    });
  }
  this.Render();
};

var avatars = new Avatar(CommentsArray);


