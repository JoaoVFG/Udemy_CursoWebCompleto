// Classe e função contrutora 
// this pode variar
class Pessoa {
    
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('João')
p1.falar()

// Função Factory
// Objeto tem ciência do contexto lexico no qual foi declarado
const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Ana')
p2.falar()