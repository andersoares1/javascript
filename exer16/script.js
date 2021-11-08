function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('celtab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10){
            let item  = document.create.Element('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}