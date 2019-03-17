function criarProduto(nome, preco){
    
    return {
        nome: nome,
        preco: preco,
        deconto: 0.1
    }
}

console.log(criarProduto('PC', 3999))
console.log(criarProduto('PC2', 6999))