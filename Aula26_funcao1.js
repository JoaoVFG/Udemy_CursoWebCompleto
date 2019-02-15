// Funcao sem retorno
function imprimerSoma(a, b){
    console.log(a + b)
}
imprimerSoma(2, 3)
imprimerSoma(2)
imprimerSoma(2, 15, 4, 5, 6, 7, 8, 9)
imprimerSoma()

// Funcao com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(1,2))
console.log(soma(5))

let x = soma(10, 8)
console.log(x)
