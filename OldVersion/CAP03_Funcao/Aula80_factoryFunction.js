const prod1 = {
    nome: '....',
    preco : 45
}

const prod2 = {
    nome: '....',
    preco : 1234
}


//Função que retorna um objeto, factory = fabrica -> fabricar uma instancia e um objeto
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())