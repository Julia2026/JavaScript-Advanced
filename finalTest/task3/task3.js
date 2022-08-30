/*
            Завдання 1:

             Написати об'єкт Train у якого будуть властивості:
             -ім'я,
             -швидкість їзди
             -кількість пасажирів
             Методи:
             Їхати -> Поїзд {name} щастить { кількість пасажирів} зі швидкістю {speed}
             Стояти -> Поїзд зупинився. Швидкість {Speed}
             Підібрати пасажирів -> Збільшує кількість пасажирів на Х
*/    

let train = {
    name: 'UZK134',
    speed: 130,
    people: 100,
    go: function(){
        console.log(`Поїзд ${this.name} щастить ${this.people} зі швидкістю ${this.speed}`);
    }, 
    stop: function(speed){
        console.log(`Поїзд зупинився. Швидкість ${speed}`);
    }, 
    morePeople: function(num){
        console.log(`Збільшує кількість пасажирів на ${num}`);
    }
}

train.go();
train.stop(0);
train.morePeople(10);
