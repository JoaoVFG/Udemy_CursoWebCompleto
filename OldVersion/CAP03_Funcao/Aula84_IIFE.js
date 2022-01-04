//Função autoinvocada -> possui escopo local, foge do global
// IIFE - Immediataly Invoked Function Expression

(function(){
    console.log('Será executado na hora que essa for função for invocada!')
    console.log('Fungindo do escopo Global')
})()