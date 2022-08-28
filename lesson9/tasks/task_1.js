/*

    Завдання 1:
     Написати скрипт, який на кліку на кнопку рандоміт колір і записує його в localStorage
     Після перезавантаження сторінки, колір повинен зберегтися.

*/
window.addEventListener("load", function(){
	let btn = document.getElementById("btn");
	btn.addEventListener("click", function(e){
        function changeColor() { 
            let userColor = Math.floor(Math.random()*16777215).toString(16);
            let  dd= "#" + userColor; 
            localStorage.setItem("Background_color", dd);
        };
		document.body.style.background =localStorage.getItem("Background_color") ;
        changeColor();

	})
	document.body.style.background =localStorage.getItem("Background_color") ;
});