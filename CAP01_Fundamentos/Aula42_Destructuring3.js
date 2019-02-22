function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand ({max : 50, min : 40}))

const obj = {max : 20, min : 70}
console.log(rand(obj))

const obj2 = {min : 700}
console.log(rand(obj2))

console.log(rand ({}))
//console.log(rand ()) //vaidarerro