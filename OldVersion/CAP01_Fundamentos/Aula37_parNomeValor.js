//par nome/valor
const saudacao = 'Opa' // Contexto léxico 1

function exec () {
    const saudacao = 'Faaala' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados  de pares chave/valor

const cliente = {
    nome : 'Pedro',
    idade : 32,
    peso : 90,
    enderecero :{
        logradouro : 'Rua muito legal',
        numero : 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)