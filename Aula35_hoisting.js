//Hoisting => içamento
function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
//erro
//console.log('b =', b)
//let b = 2
//console.log('b =', b)