// estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
//0 retorna falso, e nessa estrategia se for falso ele ira colocar 1 como padrão
console.log(soma1(), soma1(1), soma1(1, 2, 3), soma1(0, 0, 0))


//Estrategia 2, 3, 4
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : b//MAIS SEGURA
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0) )


//valor padrão ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0) )
