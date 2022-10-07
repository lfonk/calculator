/*
function add (...a) {
    let x = 0;
    for (let i = 0; i < a.length; i++){
        x += a[i];
    }
    return x;
}

function subtract(...a){
    let x = a[0];
    for (let i = 1; i < a.length; i++){
        x -= a[i];
    }
    return x;
}

function multiply(...a){
    let x = 1;
    for (let i = 0; i < a.length; i++){
        x *= a[i];
    }
    return x;
}

function divide(...a){
    let d = 1;
    for (let i = 0; i < a.length; i++){
        d /= a[i];
    }
    return x;
}
*/

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(op,num1,num2) {
    if (op == '+'){
        add(num1,num2)
    } elseif (op == '-') {
        subtract(num1,num2)
    } elseif (op == 'x') {
        multiply(num1,num2)
    } elseif (op == '/') {
        divide(num1,num2)        
    }
}

