enviar();
sumar();
limp();
calcular();
restar();
var total = 0;
var opc = '';
function enviar(numero){
    var txtResultado = document.getElementById("txtResultado");
    if (txtResultado != null) {
    txtResultado.value += numero;                
    }
}

function sumar(){ 
    var txtResultado = document.getElementById("txtResultado");
    if (txtResultado != null) {
    total = parseFloat(txtResultado.value);
    txtResultado.value = '';
    }
    opc = '+'
}

function restar(){ 
    var txtResultado = document.getElementById("txtResultado");
    if (txtResultado != null) {
    total = parseFloat(txtResultado.value);
    txtResultado.value = '';
    }
    opc = '-'
}

function multiplicar(){ 
    var txtResultado = document.getElementById("txtResultado");
    if (txtResultado != null) {
    total = parseFloat(txtResultado.value);
    txtResultado.value = '';
    }
    opc = '*'
}

function dividir(){ 
    var txtResultado = document.getElementById("txtResultado");
    if (txtResultado != null) {
    total = parseFloat(txtResultado.value);
    txtResultado.value = '';
    }
    opc = '/'
}

function limp(){
    var txtResultado = document.getElementById("txtResultado");
    txtResultado.value = '';
}

function calcular(){
    var txtResultado = document.getElementById("txtResultado");
    if (txtResultado != null) {
        switch(opc){
            case '+':
                total += parseFloat(txtResultado.value);
                txtResultado.value = total;
                break;
            case '-':
                total -= parseFloat(txtResultado.value);
                txtResultado.value = total;
                break;
            case '*':
                total = total * parseFloat(txtResultado.value);
                txtResultado.value = total;
                break;
            case '/':
                total = total / parseFloat(txtResultado.value);
                txtResultado.value = total;
                break;
        }
                total = 0;
    }
}