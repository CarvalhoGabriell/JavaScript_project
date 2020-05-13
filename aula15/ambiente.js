
// VETORES ////



let num = [0,2,8,1,4,3]

// PARA MOSTAR O ARRAY EM ORDEM CRESCENTE
num.sort()
num.push(9)

console.log(`Os valores desse vetor são ${num}`)
console.log(`Esse vetor contem: ${num.length} valores `)
console.log(`O primeiro valor desse vetor é ${num[0]} `)
let pos = num.indexOf(7)


if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor de 8 está na posição ${pos}`)
}




/*
let valores = [7,8,5,4,2,9]
valores.sort()

for (position =0; position < valores.length; position++) {
    console.log(`A posição ${position} tem o valor ${valores[position]}`)
}

*/


/*

let valores = [7, 8, 5, 4, 2, 9]
valores.sort()

for (let position in valores) {
    console.log(`A posição ${position} tem o valor ${valores[position]}`)
}

*/


