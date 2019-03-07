console.log()
let comparaComThis = function (param) {
    console.log(this === param)
}
console.log('Chamada 1')
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
console.log('Binding - fora do escopo global agora')
comparaComThis(global)
console.log('Escopo do objeto')
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
console.log('Arrow tentando acessar global')
console.log('This da Arrow Function aponta para o arquivo/modulo na qual ela foi definida')
comparaComThisArrow(global)
console.log('This = This')
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
console.log('Mesmo com Binding a o Contexto da Arrow Function será mantido ao usar o Binding')
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)