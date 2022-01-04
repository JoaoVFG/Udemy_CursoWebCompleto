// novo recurso es2015

const pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco: {
        logradouro : 'Rua ABC',
        numero : 1000
    }
}

//operador de desestruturação
const { nome, idade } = pessoa
console.log(pessoa)
console.log('Nome: ' + nome, '. Idade: ' + idade)

const {nome : n, idade : i} = pessoa
console.log('Nome: ' + n, '. Idade: ' + i)

//se não vier nada do obj pessoa bem humorada assume valor verdadeiro
const {sobrenome, bemHumorada = true} = pessoa
console.log('Sobrenome: ' + sobrenome,'. Bem Humorada?' + bemHumorada)

const {endereco : {logradouro, numero, cep}} = pessoa
console.log('Logradouro: ' + logradouro + '. Número: ' + numero + '. CEP: ' + cep)

//Erro, tentar acessar atributos de atributos que não existem
//const {conta :{ag, num }} = pessoa
//console.log(ag, num)