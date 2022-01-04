const valor = 'Global'

function minhaFuncao() {
    //ja que na funçao nao tenho uma variavel com esse nome, ele busca no escopo maior
    console.log(valor)
}

//valor é apegado nao a chamada mas ao contexto em que foi escrita
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()