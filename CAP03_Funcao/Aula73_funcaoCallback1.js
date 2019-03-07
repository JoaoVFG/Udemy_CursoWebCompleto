//Passar uma função que será chamada cquando um evento acontecer
// evento ;e o looping então quando ele encontra um novo evento ele dispara a função
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
// Vai chamar essa função para cada elemento que for chamado
fabricantes.forEach(imprimir)
// Apenas um parametro
fabricantes.forEach(fabricante => console.log(fabricante))