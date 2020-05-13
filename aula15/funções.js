/*
function parImp(n) {
    if (n%2 == 0) {
        return 'Esse número é par!'
    } else {
        return 'Esse número é ímpar'
    }
}

console.log(parImp(20000))



function somar(n1=0, n2=0) {
    return n1 + n2
}

console.log(somar(5, 78))




let operacao = function multi( n1 = 0, n2 =0) {
    return n1 * n2
}

console.log(operacao(80, 10))



function fatorial(n) {
    let fat = 1
    for(c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(6))
*/

// OU FAZER DE FORMA RECURSIVA, EX:


function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(8))


/* NUMEROS FATORIAIS SÃO: 

8! = 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 40320
8! = 8 x 7!

n! = n * (n-1)!
1! = 1

*/

