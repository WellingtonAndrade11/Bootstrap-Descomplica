function pessoa(nome, sobrenome, altura, peso){
    return{
    nome,
    sobrenome ,
    peso,
    altura ,
    calculoImc(){
        const imc = this.peso /(this.altura ** 2).toFixed(1)
         if (imc < 18.5){
            console.log("Abaixo do Peso")
        }else if (indice >= 18.5 && imc < 24.9){
            console.log("Peso Normal")
        }else if (imc >= 30 && imc < 34.9){
            console.log("Acima do Peso")
        }else if (imc >= 35 && imc < 34.9){
            console.log("Obesidade 2")
        }else if (imc >= 40){
            console.log("Obesidade 3")
        } 
        
    }
  }
}




var p1 = pessoa("Luiz","Andrade",60,1.72)

p1.calculoImc();

