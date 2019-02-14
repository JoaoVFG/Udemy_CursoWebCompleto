const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//valor indefinido

valores[4] = 10
console.log(valores[4])

valores[10] = 10
console.log(valores)//[ 7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 10 ]

//tamanho do array
console.log(valores.length)

//push add no aray
valores.push({id: false}, false, null, 'teste')
console.log(valores)

//tira o ultima valor do array e o retorna
console.log(valores.pop())

//deleta valor de determinada posição
delete valores[0]
console.log(valores)

console.log(typeof valores)

//tipo de dados dinamicos -> cresce e diminui
//indexida
//heterogenia -> NÃO RECOMENDADO