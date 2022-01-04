function Pessoa() {
    this.idade = 0
    
    //amarrei o contexto do this a constante
    const self = this
    setInterval(function(){
        //this.idade++
        self.idade++
        console.log(/*this.idade*/self.idade)
    }/*.bind(this)*/, 1000 )
}
// o this.idade não aponta para o obj pessoa pq quem esta disparando a chamada é o temporizador
new Pessoa

/*
OU UTILIZAR OP BIND
OU ARMAZENAR O THIS NUMA CONSTANTE SELF
*/