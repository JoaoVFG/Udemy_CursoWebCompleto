console.log('1-)', '1' == 1) //conteudo - igual
console.log('2-)', '1' === 1) //conteudo e tipo - extritamente igual
console.log('3-)', '3' != 3) //conteudo - diferente
console.log('4-)', '3' !== 3) //conteudo e tipo - extritamente diferente
console.log('5-)', 3 < 2) //menor
console.log('6-)', 3 > 2) //maior
console.log('7-)', 3 <= 2) //menor igual
console.log('8-)', 3 >= 2) //maior igual


const d1 = new Date(0)
const d2 = new Date(0)
console.log('9-)', d1 === d2) //comparando enderecos de memória
console.log('10-)', d1 == d2) //comparando enderecos de memória
console.log('11-)', d1.getTime() === d2.getTime())

console.log('12-)', undefined == null)
console.log('13-)', undefined === null) 