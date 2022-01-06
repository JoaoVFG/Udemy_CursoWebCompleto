let valor // não inicializado

console.log(valor)

valor = null //ausência de valor não tem um tipo primitivo ou endereço de memória
console.log(valor)
//console.log(valor.toString()) //TypeError: Cannot read properties of null (reading 'toString')
//Sempre Usar Nulo Caso queira zerar o valor de um variável

const produto = {}
console.log(produto.preco)//não está definido o preço dentro do produto
//console.log(produto.preco) Não consegue acessar a propriedade de algo que não está definido
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined
console.log(produto.preco)
//delete produto.preco
console.log(!!produto.preco)

produto.preco = null // sem preço
console.log(!!produto)
console.log(produto)