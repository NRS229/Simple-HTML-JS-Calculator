var value1 = 0;
var value2 = 0;
var result = 0;
var operationType = 0;

function operation(n){
    var txt_result = document.getElementById('txt_result');
    value1 = txt_result.value;
    operationType = n;
    txt_result.value = "";
}

function equals(){
    var txt_result = document.getElementById('txt_result');
    value2 = txt_result.value;
    switch (operationType) {
        case 1:
        //Add
            result = parseInt(value1) + parseInt(value2);
            break;
        case 2:
        //Substract
            result = parseInt(value1) - parseInt(value2);
            break;
        case 3:
        //Multiply
            result = parseInt(value1) * parseInt(value2);
            break;
        case 4:
        //Divide
            result = parseInt(value1) / parseInt(value2);
            break;   
    }
    txt_result.value = result.toString();
}

function deleteDigit(){
    var txt_result = document.getElementById('txt_result');
    txt_result.value = txt_result.value.substring(0, txt_result.value.length - 1);
}

function add(n){
    var txt_result = document.getElementById('txt_result');
    txt_result.value = txt_result.value + parseInt(n);
}

