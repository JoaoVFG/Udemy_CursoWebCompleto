console.log(typeof console)
console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola2'
console.log(obj1)

function Obj(name){
    this.nome = name;
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
console.log(obj2)
console.log(obj2.nome)

const obj3 = new Obj('Mesa')
console.log(obj3)
console.log(obj3.nome)

obj3.exec();

