const pessoa = {
    nome: "luiz",
    sobrenome: "almeida"
}
console.log(pessoa);

// 2

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Joana"

console.log(funcionario.sobrenome);

function criarPessoa(nome,sobrenome){
    return {nome,sobrenome}
}


 function criarPessoa(nome,sobrenome,i){
    return {
        nome,
        idade: i,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
 }

 var p1 = criarPessoa("joao","silva",26);

 console.log(p1);

 