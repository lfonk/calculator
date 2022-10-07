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
    let x = 1;
    for (let i = 0; i < a.length; i++){
        x /= a[i];
    }
    return x;
}