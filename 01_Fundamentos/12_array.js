const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//em javascript acessar um indice que não existe retorna undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste') // não recomendado misturar dados
console.log(valores)

console.log(valores.pop())

delete valores[0]
console.log(valores)

console.log(typeof valores)
