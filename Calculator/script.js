/*
function Calculator(){
    let firstNum = parseInt(document.getElementById('firstNum').value);
    let secondNum = parseInt(document.getElementById('secondNum').value);
    let symbol = document.getElementById('symbol').value;

    switch (symbol){
        case "+":
            alert(firstNum + secondNum);
            break;
        case "-": 
            alert(firstNum - secondNum);
            break;
        case "*": 
            alert(firstNum * secondNum);
            break;
        case "/":
            alert(firstNum / secondNum);
            break;
    };  
};
*/
// ----------------------------------------------------------------------

let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let num = parseInt(document.getElementById('someNumber').value);
    let div = document.getElementById('result');
    let taxses = 20;
    let touristTax = 1;
    let round = (a) => {
        Math.floor(a * 100) / 100;
    };
    
    if(isNaN(num) === true){
        alert('Error! You only need to write the number');
    } else {
        let round = (a) => Math.floor(a * 100) / 100;

        let percent = (taxses + touristTax) / 100 + 1;
        let finalResult = round(num / percent);
        let res = round(finalResult * taxses / 100);
        let touristRes = round(finalResult * touristTax / 100);
        let testSum = finalResult + res + touristRes;
        
        let pOne = document.createElement('p');
        pOne.innerHTML = 'Розмір НДС - ' + res  + ' грн';
        div.appendChild(pOne);
      
        let pTwo = document.createElement('p');
        pTwo.innerHTML = 'Розмір курортного сбора - ' + touristRes + ' грн';
        div.appendChild(pTwo);

        let pThree = document.createElement('p');
        pThree.innerHTML = 'Сума без НДС і курортного збору - ' + finalResult  + ' грн';
        div.appendChild(pThree);

        let pTest = document.createElement('p');
        pTest.innerHTML = 'Сума - ' + testSum   + ' грн';
        div.appendChild(pTest);
    };
});
