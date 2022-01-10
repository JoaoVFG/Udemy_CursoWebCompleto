const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

for(let j = 0; j < 10; j++){
    funcs[j]()
}