//var valores = [8, 1, 7, 2, 9];

//console.log(valores[3]);

//for (var pos = 0 ; pos < valores.length; pos++){
 //   console.log("posicao:  " + "valor: " +  valores[pos]);
//}


//console.log(valores);

//var soma = 0
//for (var pos = 0 ; pos < valores.length; pos++){
 //   soma += valores[pos];
//}
//console.log(soma);
//var media = soma/valores.length;
//console.log(media);

//var indicemaior = valores < valores[pos];
//console.log(valores[pos] > valores.length);


//var array = [-5,10,15,20,-3,89];

const numeros = [5, 10, 15, 20, 25];
console.log(numeros);

var novaArray = numeros.splice(2,1);
console.log(novaArray);


var divisao = 0

let algumNaoParOuMenorQueZero = false;

for (var pos = 0 ; pos < numeros.length; pos++){
  if  (numeros[pos] % 2 == 0 || numeros[pos] <0){
    algumNaoParOuMenorQueZero = true;
    break;
  }
}  
numeros.slice(numeros[pos] % 2 == 0 || numeros[pos] <0);

console.log(numeros);
let divididopor3e5 = true

for (var pos = 0 ; pos < numeros.length; pos++){
    if  ((numeros[pos]) % 3 !== 0 || numeros[pos] % 5 !==0){
        divididopor3e5 = false;
      break;
    }
  } 

console.log(divididopor3e5);
console.log(algumNaoParOuMenorQueZero);


//&& and e
//|| or ou
//! not não


