function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var mensage = window.document.getElementById('mensage')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = '../img/bom-dia.jpg'
        mensage.innerHTML = 'Bom dia'
    } else if(hora >= 12 && hora < 18) {
        img.src = '../img/boa-tarde.jpg'
        mensage.innerHTML = 'Boa Tarde'
    } else {
        img.src = '../img/boa-noite.jpg'
        mensage.innerHTML = 'Boa Noite'
    }
}