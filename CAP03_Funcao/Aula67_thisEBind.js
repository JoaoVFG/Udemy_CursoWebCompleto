const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar  = pessoa.falar
falar()// COnflito entre paradigmas: funcional e OO

// bind amarra um determinado obj para ele ser o dono da execucao
// sempre que chamar essa funçao e acionar o this o this apontara para o obj que sofreu bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2  = pessoa.falar.bind(pessoa)
falar2()