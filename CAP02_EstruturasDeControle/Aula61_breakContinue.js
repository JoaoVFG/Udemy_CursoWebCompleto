const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){

    if(x == 5) {
        break //interrompe a execuçao do laço
    }

    console.log(`Indice ${x}. Valor ${nums[x]}`)
}


for (y in nums) {
    
    if(y == 5){
        continue //interrompe a repetição do passo no qual o continue foi disparado e vai pular pra proxima
    }

    console.log(`Indice ${y}. Valor ${nums[y]}`)
}


//NÃO USE
externo: 
for (a in nums) {
    
    for (b in nums ){
        
        if (a == 2 && b == 3) {
            break externo
        }
        
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!!')