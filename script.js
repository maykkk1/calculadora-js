let numberChoser = document.getElementById("result")
let mathExpressionDisplay = document.getElementById("calc")
let mathExpression = []
let resetCalc = false
let negativeNumber = false


function addNumber (number){
    if (resetCalc) {
        numberChoser.innerHTML = ''
        resetCalc = false
    }
    if (number === 'signs') {
        if (!negativeNumber) {
            auxString = numberChoser.innerHTML
            numberChoser.innerHTML = '-'
            numberChoser.innerHTML += auxString
            negativeNumber = true
            return
        } else {
            numberChoser.innerHTML = numberChoser.innerHTML.slice(1, numberChoser.innerHTML.length + 1)
            negativeNumber = false
            return
        }
    } 
    if (number === 'delete') {
        let erasedNumber = numberChoser.innerHTML
        numberChoser.innerHTML = erasedNumber.slice(0, -1)
        return
    }
    if (numberChoser.innerHTML.length > 13) {
        numberChoser.style.fontSize = '1.555rem'
    } 
    if(numberChoser.innerHTML.length < 18) numberChoser.innerHTML += number
}


function addOperation (operation) {
    if (operation == 'clear'){
        numberChoser.innerHTML = ''
        mathExpression = []
        mathExpressionDisplay.innerHTML = ''
        negativeNumber = false
        return
    }
    if (operation == 'clear entry') {
        numberChoser.innerHTML = ''
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


function calculate (){
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
    resetCalc = true
}








