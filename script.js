let numberChoser = document.getElementById("result")
let mathExpressionDisplay = document.getElementById("calc")
let mathExpression = []
function addNumber (number){
    if (number === 'delete') {
        let erasedNumber = numberChoser.innerHTML
        numberChoser.innerHTML = erasedNumber.slice(0, -1)
        return
    }
    if (numberChoser.innerHTML.length > 11) {
        numberChoser.style.fontSize = '2rem'
    } 
    if(numberChoser.innerHTML.length < 15) numberChoser.innerHTML += number
}


function addOperation (operation) {
    if (operation == 'C'){
        numberChoser.innerHTML = ''
        mathExpression = []
        mathExpressionDisplay.innerHTML = ''
        return
    }  
    if(numberChoser.innerHTML.length > 0) {
        mathExpression.push(numberChoser.innerHTML);
        mathExpression.push(operation);
        elements = '';
        mathExpression.forEach(element => {
            elements += element;
        });
        mathExpressionDisplay.innerHTML = elements;
        numberChoser.innerHTML = '';
    } 
}


function teste (){
    mathExpression.push(numberChoser.innerHTML);
    let elements = ''
    mathExpression.forEach(element => {
        elements += element;
    });
    console.log(elements)
    elements = elements.replace("x", "*")
    elements = elements.replace(`÷`, `/`)
    console.log(elements)
    res = eval(elements);
    numberChoser.innerHTML = res;
    mathExpression = [];
    mathExpressionDisplay.innerHTML = '';
}











