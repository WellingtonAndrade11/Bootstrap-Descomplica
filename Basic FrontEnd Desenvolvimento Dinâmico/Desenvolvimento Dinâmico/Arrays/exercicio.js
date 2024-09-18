//var nomes = ["guilherme", "manuel", "samuel", "davi", "joao" ];

//nomes.unshift("monica");
//console.log("acrescenta o nome monica na array" , nomes);
//nomes.pop('');
//console.log("Retira o ùltimo elemento da Array", nomes);
//nomes.indexOf("samuel");
//console.log("Encontra a posição do elemento dentro da Array", nomes.indexOf("samuel"));
//nomes.splice(2,1, "emanuel");
//var novaArray = nomes.splice(2,1, "emanuel");
//console.log("Aqui foi usada a Função para trocar o Manuel Para Emanuel, retornando no console o elemento incluso.", novaArray);
//console.log("Apresenta o final da array após os usos das funções anteriores.", nomes);

//var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
//var pesso1 = pessoa.slice(1,3);
//console.log(pessoa);
//console.log(pesso1);


//var Ano = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
//var PrimeiroTrimestre = Ano.slice(0,3);
//console.log(PrimeiroTrimestre);
//var SegundoTrimestre = Ano.slice(3,6);
//console.log(SegundoTrimestre);
//var TerceiroTrimestre = Ano.slice(6,9);
//console.log(TerceiroTrimestre);
//var QuartoTrimestre = Ano.slice(9,13);
//console.log(QuartoTrimestre);

//var array = [-5,10,15,20,-3,89];
//var evens = array.filter(item => item >= 0); // retira os número negativos da Array.
//console.log(evens);

var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numeroFiltrados = numeros.filter(
    function (valor){
        return valor > 5;
    }
);

console.log(numeroFiltrados);

function buscarValores(valor){
    return valor < 5;
};

var r2 = numeros.filter(valor => valor > 5);

var funcionario = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

//var pessoasListagem = funcionario.filter(
 //   function(valor){
  //      console.log(valor.nome.length < 5)
 //   }
//);



var produtos = [
    {id: 1, descricao: "SmartPhone", categoria: "Eletronico"},
    {id: 2, descricao: "Notebook", categoria: "Eletronico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodomestico"},
    {id: 4, descricao: "Airfryer", categoria: "Eletrodomestico"},
]

var categoriasProdutos = produtos.filter(
    function(categoria){
        console.log(categoria.categoria === "Eletronico" == true)
    } 
);

produtos = produtos.map(pessoa => pessoa.nome);
console.log();


//uma array com todos os meses do ano, deve criar uma nova array com trimestres


//acrescentar o nome monica na array
// retirar o último elemento da array
// encontre a posição do samuel
// trocar o manuel por emanuel
//splice altera a Array atual.
//slice recorta a Array de origem criando uma nova.