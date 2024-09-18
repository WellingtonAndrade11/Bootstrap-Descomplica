const shoppingCart = [];

function addItemtToCart(item){ // adiciona um item ao carrinho
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item); // remove um do item do carrinho;
    if(index !== -1){
        shoppingCart.splice(index,1)
    }
} 

function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Your shopping cart is empyte")
    }else {
        console.log("Itens in your shopping cart:")  //visualiza os itens no carrinhos
        for(let i = 0; i < shoppingCart.length;i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}


function clearCart(){
    shoppingCart.length = 0;
    console.log("Yout shopping cart hs been cleared"); // limpa o carrinho
}


addItemtToCart("Tennis");
addItemtToCart("blusa");
addItemtToCart("Short");

viewCart();
removeItemFromCart("blusa");
viewCart();