var bebida = "chá";
var valor 



switch(bebida){
    case "café":
        valor = 4.30; 
        console.log(" Você escolheu o " + bebida + " e o valor a ser pago é "+ valor.toFixed(2)); 
        break
    case "leite": 
        valor = 7.50;
        console.log(" Você escolheu o " + bebida + " e o valor a ser pago é "+ valor.toFixed(2));
         break
    case "chá": 
        valor = 2.50;
        console.log(" Você escolheu o " + bebida + " e o valor a ser pago é "+ valor.toFixed(2));
        break          
    default : 
        console.log("Desculpe, ainda não temos essa opção '" + bebida + "', Peço que escolha entre Café, Leite ou Chá.")      
}
