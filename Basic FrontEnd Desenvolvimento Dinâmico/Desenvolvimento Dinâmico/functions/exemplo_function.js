
function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,7);
console.log(a);

function somaValores(a,b,c){
    var total = a + b + c
    return total
}

var b = somaValores(8,8,12);
console.log(b);

var infoCal = function(a,b,c){
    return a + b + c;
}

const soma = (num1,num2) =>{
    return num1 + num2
}

console.log (soma(3,6));

const numeros = [1, 2, 3, 4, 5];
const valores = numeros.map((num) => num * num);
console.log(valores);

var listaProdutos = ["geladeira", "fogão", "air fryer"];
var listaEmMaiscula = listaProdutos.map(primeraEmMaiscula);

function primeraEmMaiscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaEmMaiscula);


function formula(peso,altura){
    var imc = peso / altura ** 2;
     return imc
}


var peso = 60;
var altura = 1.72;

var indiceDeMassaCorporal = formula(peso,altura);
console.log(indiceDeMassaCorporal);
