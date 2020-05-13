
function contador() {
    let ini = document.getElementById('num')
    let end = document.getElementById('end')
    let pass = document.getElementById('step')
    let res = document.getElementById('res')
    var img = document.createElement('img')

    if (ini.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
       // window.alert('ERRO!!! Ainda faltam dados.')
        res.innerHTML = `Impossivel contar passos... \u{2623}`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(end.value)
        let p = Number(pass.value)

        if (p <= 0) {
            window.alert('Passo inválido!!')
        }

        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont}  \u{1F463}	`
            }

        } else {
            // CONTAGEM REGRESSIVA
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += `${cont} \u{1F463}`
            }
        }
        res.innerHTML += `\u{1F6A7} `
    }
}