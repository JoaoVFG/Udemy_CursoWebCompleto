// Linguagem trata função como dado
// Função em JS é First-Class Object (Citzens)
// High-Order Function

// Criar de forma literal
// Toda função em JavaScript retorna Undefined se não for especificado o Return
function fun1(){ }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de Objeto
const obj= {}
obj.falar = function () { return `Opa!` }
console.log(obj.falar())

// Passar função como param
function run (fun){
    fun()
}

run(function () {console.log(`Executando...`)})

// Uma função pode conter/retornar uma função
function soma(a, b) {
    return function (c) {
        console.log(a +b + c)
    }
}

soma(2, 3)(4)// como o resultado da função é uma fgunção eu ja posso passar o parametro para função de retorno
//Posso armazenar o resultado da funçao em uma Var para depois  continuar a execução
const cincoMais = soma(2, 3)
cincoMais(4)