/*

    Завдання 3:

     Написати форму з 2 полями для title та about
     при сабміті форми повинен створюватися пост на основі класу Post
     <form>
         <input type="text" name="title">
         <textarea name="about"></textarea>
         <button>Send</button>
     </form>

     Написати клас Post у якому є дані:

     _id
     title,
     body,
     likes

     У класу повинен бути метод addLike та render.

     Потрібно зробити так щоб:
     - Після додавання поста дані про нього записуються в localStorage.
     - Після перезавантаження сторінки дані повинні зберегтися.
     - Можна було завантажити дані до класу з апі: https://jsonplaceholder.typicode.com/posts

*/
//let firstPost = new postMessage()
window.addEventListener("DOMContentLoaded", (e) => {
    // localStorage.removeItem("posts");
    var loadBtn = document.getElementById('load');
    var title = document.querySelector(".title");
    var body = document.querySelector('.bodyText');
    var createBtn = document.getElementById("create");
    var postsArray = [];

    class Posts {
        constructor(_id, title, body,  likes) {
            this._id = _id ? _id : new Date();
            this.title = title;
            this.body = body;
            this.likes = likes ? likes : 0;

            this.addLike = this.addLike.bind(this);
            this.render();
        }
        addLike() {
            this.likes++;
            var addlikes = document.querySelector(
                `[data-id="${this._id}"] .like`
            );
            addlikes.innerHTML = this.likes;
            postsArray.forEach((post) => {
                if (post._id === this._id) {
                    post.likes = this.likes;
                }
            });
            localStorage.setItem("posts", JSON.stringify(postsArray));
        }
        render() {
            var div = document.createElement("div");
            div.dataset.id = this._id;
            div.innerHTML = `
                <p> Title: ${this.title}</p>
                <p>${this.body}</p>
                <p class="like"> ${this.likes}</p><button type="button"class="addLikeBtn">AddLike</button>
            `;
            var btn = div.querySelector(".addLikeBtn");
            btn.addEventListener("click", this.addLike);
            var view = document.querySelector(".view");
            view.appendChild(div);
        }
    }

    if (localStorage.getItem("posts")) {
        var loadedPosts = JSON.parse(localStorage.getItem("posts"));
        console.log(loadedPosts);
        loadedPosts.forEach((post) => {
            var postArr = new Posts(
                post._id,
                post.title,
                post.body,
                post.likes
            );
            postsArray.push(postArr);
        });
    } else {
        console.log("Error!");
    }

    const convertToJSON = (response) => {
        console.log(response);
        return response.json();
    };
    createBtn.addEventListener("click", (e) => {
        var newPost = new Posts(null, true, title.value, body.value);
        postsArray.unshift(newPost);
        title.value = "";
        body.value = "";
        localStorage.setItem("posts", JSON.stringify(postsArray));
        window.location.reload();
    });

    loadBtn.addEventListener("click", (e) => {
        fetch("http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2")
            .then(convertToJSON)
            .then((post) => {
                console.log(post);

                post.forEach((element) => {
                    var newPost = new Posts(
                        element._id,
                        element.title,
                        element.body,
                        element.likes,
                    );
                    postsArray.push(newPost);
                });
                console.log(postsArray);
                localStorage.setItem("posts", JSON.stringify(postsArray));
            });
    });
});
