
//Dados do candidato

var idade = 28;
var experienciaAnos =5;
var nivelEducacao = 'superior';
var possuiCertificado = true;

//criterios para vaga
var idadeMinima = 18;
var experienciaMinimaAnos = 3;
var nivelEducacaoMinimo = 'superior';
var certificadoObrigatorio = true;


let criterio1= (idade >= idadeMinima);

let criterio2 = (experienciaAnos => experienciaMinimaAnos);

let criterio3 = (nivelEducacao === nivelEducacaoMinimo || possuiCertificado);

let criterio4 = (possuiCertificado && certificadoObrigatorio);



var elegivel = idade >= idadeMinima && experienciaAnos >= experienciaMinimaAnos && (nivelEducacao === nivelEducacaoMinimo || possuiCertificado) && (!certificadoObrigatorio || possuiCertificado);

console.log("Elegível para a vaga? " + true)

