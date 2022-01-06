let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//Negação duas vezes inverte a inversão -> transforma em falso e retorne a true

console.log('os verdadeiros...')

console.log(!!3)
console.log(!!-1)//todo numero inteiro é verdadeiro
console.log(!!' ')//espaço em branco é verdadeiro
console.log(!!'TEXTO')//Texto é verdadeiro
console.log(!![])//array vazio é verdadeiro
console.log(!!{})//objeto é verdadeiro
console.log(!!Infinity)//infinito é verdadeiro
console.log(!!(isAtivo = true))//nesse caso ele irá buscar a atribuição




console.log('os verdadeiros...')
console.log(!!0)//zero é falso
console.log(!!'')//string vazia é falso
console.log(!!null)//null é falso
console.log(!!NaN)// not a number é falso
console.log(!!undefined)// indefinido
console.log(!!(isAtivo = false))//nesse caso ele irá buscar a atribuição

console.log('Para finalizar')
console.log(('' || null || 0 || 'epa' || 123))//retorna o primeiro valor válido
console.log(!!('' || null || 0 || 'epa' || 123))//retorna o resultado lógico da operação como há um valor verdadeiro resulta em true


let nome  = ''
console.log(nome || 'Desconhecido')//Caso a variável não tenha um valor, pode-se usar um valor padrão