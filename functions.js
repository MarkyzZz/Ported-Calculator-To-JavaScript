var x = 0, y = 0 , sign ='', result = 0;

function write0() {
    var storage = document.getElementById("result").innerHTML;
    storage += 0;
    document.getElementById("result").innerHTML = Number(storage);
}

function write1() {
    var storage = document.getElementById("result").innerHTML;
    storage += 1;
    document.getElementById("result").innerHTML = Number(storage);
}

function write2() {
    var storage = document.getElementById("result").innerHTML;
    storage += 2;
    document.getElementById("result").innerHTML = Number(storage);
}

function write3() {
    var storage = document.getElementById("result").innerHTML;
    storage += 3;
    document.getElementById("result").innerHTML = Number(storage);
}

function write4() {
    var storage = document.getElementById("result").innerHTML;
    storage += 4;
    document.getElementById("result").innerHTML = Number(storage);
}

function write5() {
    var storage = document.getElementById("result").innerHTML;
    storage += 5;
    document.getElementById("result").innerHTML = Number(storage);
}

function write6() {
    var storage = document.getElementById("result").innerHTML;
    storage += 6;
    document.getElementById("result").innerHTML = Number(storage);
}

function write7() {
    var storage = document.getElementById("result").innerHTML;
    storage += 7;
    document.getElementById("result").innerHTML = Number(storage);
}

function write8() {
    var storage = document.getElementById("result").innerHTML;
    storage += 8;
    document.getElementById("result").innerHTML = Number(storage);
}

function write9() {
    var storage = document.getElementById("result").innerHTML;
    storage += 9;
    document.getElementById("result").innerHTML = Number(storage);
}


function add() {
    x = Number(document.getElementById("result").innerHTML);
    sign = '+';
    document.getElementById("result").innerHTML = "";
}

function subtract() {
    x = Number(document.getElementById("result").innerHTML);
    sign = '-';
    document.getElementById("result").innerHTML = "";
}

function divide() {
    x = Number(document.getElementById("result").innerHTML);
    sign = '/';
    document.getElementById("result").innerHTML = "";
}

function multiply() {
    x = Number(document.getElementById("result").innerHTML);
    sign = '*';
    document.getElementById("result").innerHTML = "";
}

function getResult() {
    y = Number(document.getElementById("result").innerHTML);
    switch (sign) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '/':
            if(y!=0)
                result = x / y;
            else 
                document.getElementById("result").innerHTML = "Division by 0 is impossible."
            break;
        case '*':
            result = x * y;
            break;
    }
    document.getElementById("result").innerHTML = result;
}


function clearMe() {
    document.getElementById("result").innerHTML = "";
    x = 0;
    y = 0;
    sign = '';
    result = 0;
}