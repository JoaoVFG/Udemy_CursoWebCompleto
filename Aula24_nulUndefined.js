let valor // não inicializada
console.log(valor)

//nesse ponto você definiu um valor -> não aponta pra nenhum endereco de memória
valor = null
console.log(valor) //ausência de valor

//quando quiser zerar variavel que faz referencia usar null
//console.log(valor.toString()) //tentar acessar algo que está nulo gera erro

const produto = {}
console.log(produto.preco)//como produto esta indefinido mas o preço não esta definido
//console.log(produto.preco) //não existe propriedade a de um item que está indefinido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir de forma explicita o undefined -> deixar pra linguagem definir o que é undefined
console.log(!!produto.preco)
//delete produto.preco // se quiser tirar o atributo de um objeto e não atribuir null ou undefined
console.log(produto)

produto.preco = null // esse procuto está sem preco
console.log(!!produto.preco)
console.log(produto)
