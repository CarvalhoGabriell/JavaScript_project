
let num = document.getElementById('num')
let lista = document.getElementById('add')
let res = document.getElementById('res')
let numeros = []

function inNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    
    if (inNumero(num.value) && ! inLista(num.value, numeros)) {
        window.alert('ok')
    } else {
        window.alert('Valor inválido ou já existe na lista.')
    }
}