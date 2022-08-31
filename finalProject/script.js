// Title
let title = document.createElement('h2');
title.innerHTML = 'Galerry';
document.body.style.backgroundColor = '#EBECF0';
document.body.appendChild(title);

// div images
let div = document.createElement('div');
div.classList.add('slideshow-container');
div.style.backgroundColor = 'white';
div.style.padding = '30px';

//div_mySlides
let div_1 = document.createElement('div');
div_1.classList.add('mySlides', 'fade');

let img = document.createElement('img');
img.src = 'img/first.jpg';
img.classList.add('hover-shadow', 'cursor', 'img-width');
img.setAttribute("onclick", "currentSlide(1); openModal()", );

//img_2 
let img_2 = document.createElement('img');
img_2.src = 'img/second.jpg';
img_2.classList.add('hover-shadow', 'cursor', 'img-width');
img_2.setAttribute("onclick", "currentSlide(2); openModal()");


//img_3
let img_3 = document.createElement('img');
img_3.src = 'img/third.jpg';
img_3.classList.add('hover-shadow', 'cursor', 'img-width');
img_3.setAttribute("onclick", "currentSlide(3); openModal()");

let div_2 = document.createElement('div');
div_2.classList.add('mySlides', 'fade');

//img_4 
let img_4 = document.createElement('img');
img_4.src = 'img/four.jpg';
img_4.classList.add('hover-shadow', 'cursor', 'img-width');
img_4.setAttribute("onclick", "currentSlide(4); openModal()");


//img_5
let img_5 = document.createElement('img');
img_5.src = 'img/fifth.jpg';
img_5.classList.add('hover-shadow', 'cursor', 'img-width');
img_5.setAttribute("onclick", "currentSlide(5); openModal()");

//img_6
let img_6 = document.createElement('img');
img_6.src = 'img/six.jpg';
img_6.classList.add('hover-shadow', 'cursor', 'img-width');
img_6.setAttribute("onclick", "currentSlide(6); openModal()");


let div_3 = document.createElement('div');
div_3.classList.add('mySlides', 'fade');

//img_7
let img_7 = document.createElement('img');
img_7.src = 'img/seven.jpg';
img_7.classList.add('hover-shadow', 'cursor', 'img-width');
img_7.setAttribute("onclick", "currentSlide(7); openModal()");

//img_8
let img_8 = document.createElement('img');
img_8.src = 'img/eight.jpg';
img_8.classList.add('hover-shadow', 'cursor', 'img-width');
img_8.setAttribute("onclick", "currentSlide(8); openModal()");

//img_9
let img_9 = document.createElement('img');
img_9.src = 'img/nine.jpg';
img_9.classList.add('hover-shadow', 'cursor', 'img-width');
img_9.setAttribute("onclick", "currentSlide(9); openModal()");

var slideIndex = 1;
showSlides(slideIndex);
        
function plusSlides(n) {
    showSlides(slideIndex += n);
}
        
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = [div_1, div_2, div_3];
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

            
    slides[slideIndex-1].style.display = "block";
};

// Button next, prev
let aPrev = document.createElement('a');
aPrev.innerHTML = '&#10094;';
aPrev.classList.add('prev');

let aNext = document.createElement('a');
aNext.innerHTML = '&#10095;';
aNext.classList.add('next');

aPrev.setAttribute("onclick", " plusSlides(-1)");
aNext.setAttribute("onclick", " plusSlides(1)");


div_1.appendChild(img);
div_1.appendChild(img_2);
div_1.appendChild(img_3);

div_2.appendChild(img_4);
div_2.appendChild(img_5);
div_2.appendChild(img_6);

div_3.appendChild(img_7);
div_3.appendChild(img_8);
div_3.appendChild(img_9);

div.appendChild(aPrev);
div.appendChild(aNext); 
div.appendChild(div_1);
div.appendChild(div_2);
div.appendChild(div_3);
document.body.appendChild(div);

// The MODAL
let divModal = document.createElement('div');
divModal.id = 'myModal';
divModal.classList.add('modal');

let span = document.createElement('span');
span.innerHTML = '&times;';
span.classList.add('close', 'cursor');
span.setAttribute("onclick", "closeModal()");

let contentModal = document.createElement('div');
contentModal.classList.add('modal-content');

// 1
let columnDiv_1 = document.createElement('div');
columnDiv_1.classList.add('column');
let numberText_1 = document.createElement('div');
numberText_1.innerHTML = '1 / 9';
numberText_1.classList.add('numbertext');
let imgModal_1 = document.createElement('img');
imgModal_1.src = 'img/first.jpg';
imgModal_1.style.width = '1200px';

// 2 
let columnDiv_2 = document.createElement('div');
columnDiv_2.classList.add('column');
let numberText_2 = document.createElement('div');
numberText_2.innerHTML = '2 / 9';
numberText_2.classList.add('numbertext');

let imgModal_2 = document.createElement('img');
imgModal_2.src = 'img/second.jpg';
imgModal_2.style.width = '1200px';

// 3
let columnDiv_3 = document.createElement('div');
columnDiv_3.classList.add('column');
let numberText_3 = document.createElement('div');
numberText_3.innerHTML = '3 / 9';
numberText_3.classList.add('numbertext');

let imgModal_3 = document.createElement('img');
imgModal_3.src = 'img/third.jpg';
imgModal_3.style.width = '1200px';

// 4
let columnDiv_4 = document.createElement('div');
columnDiv_4.classList.add('column');
let numberText_4 = document.createElement('div');
numberText_4.innerHTML = '4 / 9';
numberText_4.classList.add('numbertext');

let imgModal_4 = document.createElement('img');
imgModal_4.src = 'img/four.jpg';
imgModal_4.style.width = '1200px';

// 5
let columnDiv_5 = document.createElement('div');
columnDiv_5.classList.add('column');
let numberText_5 = document.createElement('div');
numberText_5.innerHTML = '5 / 9';
numberText_5.classList.add('numbertext');

let imgModal_5 = document.createElement('img');
imgModal_5.src = 'img/fifth.jpg';
imgModal_5.style.width = '1200px';

// 6
let columnDiv_6 = document.createElement('div');
columnDiv_6.classList.add('column');
let numberText_6 = document.createElement('div');
numberText_6.innerHTML = '6 / 9';
numberText_6.classList.add('numbertext');

let imgModal_6 = document.createElement('img');
imgModal_6.src = 'img/six.jpg';
imgModal_6.style.width = '1200px';

// 7
let columnDiv_7 = document.createElement('div');
columnDiv_7.classList.add('column');
let numberText_7 = document.createElement('div');
numberText_7.innerHTML = '7 / 9';
numberText_7.classList.add('numbertext');

let imgModal_7 = document.createElement('img');
imgModal_7.src = 'img/seven.jpg';
imgModal_7.style.width = '1200px';


// 8
let columnDiv_8 = document.createElement('div');
columnDiv_8.classList.add('column');
let numberText_8 = document.createElement('div');
numberText_8.innerHTML = '8 / 9';
numberText_8.classList.add('numbertext');

let imgModal_8 = document.createElement('img');
imgModal_8.src = 'img/eight.jpg';
imgModal_8.style.width = '1200px';

// 9
let columnDiv_9 = document.createElement('div');
columnDiv_9.classList.add('column');
let numberText_9 = document.createElement('div');
numberText_9.innerHTML = '9 / 9';
numberText_9.classList.add('numbertext');

let imgModal_9 = document.createElement('img');
imgModal_9.src = 'img/nine.jpg';
imgModal_9.style.width = '1200px';

// Modal Button
let prevModal = document.createElement('a');
prevModal.innerHTML = '&#10094;';
prevModal.classList.add('prevModal');

let nextModal = document.createElement('a');
nextModal.innerHTML = '&#10095;';
nextModal.classList.add('nextModal');

prevModal.setAttribute("onclick", " plusModalSlides(-1)");
nextModal.setAttribute("onclick", " plusModalSlides(1)");


columnDiv_1.appendChild(numberText_1);
columnDiv_1.appendChild(imgModal_1);
columnDiv_2.appendChild(numberText_2);
columnDiv_2.appendChild(imgModal_2);
columnDiv_3.appendChild(numberText_3);
columnDiv_3.appendChild(imgModal_3);
columnDiv_4.appendChild(numberText_4);
columnDiv_4.appendChild(imgModal_4);
columnDiv_5.appendChild(numberText_5);
columnDiv_5.appendChild(imgModal_5);
columnDiv_6.appendChild(numberText_6);
columnDiv_6.appendChild(imgModal_6);
columnDiv_7.appendChild(numberText_7);
columnDiv_7.appendChild(imgModal_7);
columnDiv_8.appendChild(numberText_8);
columnDiv_8.appendChild(imgModal_8);
columnDiv_9.appendChild(numberText_9);
columnDiv_9.appendChild(imgModal_9);


contentModal.appendChild(columnDiv_1);
contentModal.appendChild(columnDiv_2);
contentModal.appendChild(columnDiv_3);
contentModal.appendChild(columnDiv_4);
contentModal.appendChild(columnDiv_5);
contentModal.appendChild(columnDiv_6);
contentModal.appendChild(columnDiv_7);
contentModal.appendChild(columnDiv_8);
contentModal.appendChild(columnDiv_9);
contentModal.appendChild(prevModal);
contentModal.appendChild(nextModal);

divModal.appendChild(span);
divModal.appendChild(contentModal);
document.body.appendChild(divModal);

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
  // Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideModalIndex = 1;
showSlidesModal(slideModalIndex);
  
// Next/previous controls
function plusModalSlides(n) {
    showSlidesModal(slideModalIndex += n);
}
  
// Thumbnail image controls
function currentModalSlide(n) {
    showSlidesModal(slideModalIndex = n);
}
  
function showSlidesModal(n) {
    var i;
    var column = document.getElementsByClassName("column");
    if (n > column.length) {slideModalIndex = 1}
    if (n < 1) {slideModalIndex = column.length}
    for (i = 0; i < column.length; i++) {
        column[i].style.display = "none";
    }
    column[slideModalIndex-1].style.display = "block";
}
