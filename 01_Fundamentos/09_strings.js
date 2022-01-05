const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5))//javascript não irá gerar erro nesse caso, vai simplesmente gerar vazio

console.log(escola.charCodeAt(3))//codigo na tabela unicode
console.log(escola.indexOf(3))//valor no indice 3

console.log(escola.substring(1))//pega do indice 1 para a frente
console.log(escola.substring(0,3))//vai do indice zero até o indice 2(1indice antes do três) - vá do indice 0 e me de 3 caracteres

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/))