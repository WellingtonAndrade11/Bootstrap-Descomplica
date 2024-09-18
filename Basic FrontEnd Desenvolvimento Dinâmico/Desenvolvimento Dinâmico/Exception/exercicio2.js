function processName(nome,callback){
    if(typeof nome !== 'string'){
        callback(new Error('O nome deve ser uma String'))
    }
    if(nome.length === 0){
        callback(new Error('O nome não pode está vazio'));
        return;
    }
    callback(null,"Nome processado com sucesso")   
}

processName("Marcelo", (error,result) => {
    if(error){
        console.log("Ocorreu um problema:", error.message)
    }else{
        console.log(result)
    }
});