console.log(soma(3, 4))


// function declaration
function soma(x, y){
    return x + y 
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))

/**
 * A funcao declarada como function declaration pode ser chamada
 * antes de ter sido declarada
 * ja a function expression e named function expression 
 * precisam ser declaradas antes de serem usadas
 */