//Função anonima, nao tem nome
//Poede ser armazenada em variavel
const soma = function(x , y){
    return x + y
}
//Recebe uma funcão como parametro
const imprimirResultado = function (a, b, operacao = soma){
    // Operacao irá assumir função soma
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

//passando função anonima diretamente na chamada da função imprimir resultado
imprimirResultado(3, 4, function (x, y){
    return x - y
})

//Função anonima pode ser no formato de arrow function
imprimirResultado(3, 4, (x, y) => x * y)

//pode acesasr a função anonima a partir de um atributo de objeto que foi definido
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()