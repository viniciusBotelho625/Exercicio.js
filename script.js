function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'bom-dia.jpg'
    } else if(hora >= 12 && hora < 18) {
        img.src = 'boa-tarde.jpg'
    } else {
        img.src = 'boa-noite.jpg'
    }
}