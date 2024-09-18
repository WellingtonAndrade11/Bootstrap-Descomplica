/*var pais = "Brasil";

if(pais != "Brasil"){
   console.log("Você é Estrangeiro.");
}else { 
    console.log("Você é Brasileiro.")
}

var idade = 18;

if (idade <18 || idade > 71){
    console.log("Voto Opcional!");
}else if (idade >= 18 || idade <= 70){
    console.log("Seu voto é Obrigatorio!");
}else if(idade < 16){
    console.log("Não Vota")
}


var diaSem = 7

switch(diaSem){
    case 1:
        console.log("Segunda");
        break;
    case 2: 
        console.log("Terça");
        break;
    case 3:
        console.log("Quarta");
        break
    case 4: 
        console.log("Quinta");
        break;
    case 5: 
        console.log("Sexta");
        break;
    case 6: 
        console.log("Sábado");
        break;  
    case 7: 
        console.log("Domingo");
        break;  
   default:   
        console.log("Esse dia da Semana não existe");
}   
*/
var bebida = "leite";
var valor 



switch(bebida){
    case "café":
        valor = 4.30; 
        console.log(" Você escolheu o " + bebida + " que está custando "+ valor.toFixed(2) + " Reais"); 
        break
    case "leite": 
        valor = 7.50;
        console.log(" Você escolheu o " + bebida + " que está custando "+ valor.toFixed(2) + " Reais");
         break
    case "chá": 
        valor = 2.50;
        console.log(" Você escolheu o " + bebida + " que está custando "+ valor.toFixed(2) + " Reais");
        break          
    default : 
        console.log("Desculpe, ainda não temos essa opção '" + bebida + "', Peço que escolha entre Café, Leite ou Chá.")      
}




