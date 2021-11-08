function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem") 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São exatamente: ${hora}`
    if (hora >- 0 && hora < 12) {
        // BOM DIA!
        img.src = "01.png"
        document.body.style.background = "yellow"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "03.png"
        document.body.style.background = "red"
    } else {
        // BOA NOITE!
        img.src = "02.png"
        document.body.style.background = "black"
    }
}
