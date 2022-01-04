const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

console.log("Sem callBack")
// Sem callback
const notasBaixas1 = [] 
for(let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)
console.log("Com callBack")
//Com callback
//depois que eu chamare filter o resultado delas vai ser um novo array
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

console.log("Com callBack e Arrow Function")
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

console.log("Código mais elegante Com callBack e Arrow Function")
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)