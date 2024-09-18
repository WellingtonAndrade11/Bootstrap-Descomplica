const minhaPromise = new Promise((resolve,reject) =>{
    const sucesso = true
    if(sucesso){
        resolve("Deu bom!!!")
    }else{
        reject("Ocorreu um problem!")
    }
})

minhaPromise
.then((resultado) =>{
    console.log("Foi sucesso: " + resultado)
})
.catch((erro) =>{
    console.log("Deu ruim: " + erro)
})