function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var date = new Date;
    var hour = date.getHours()
    msg.innerHTML = `Agora são ${hour} horas.`;
    //var hour = 10
    if (hour >=0  && hour <12){
        // Bom dia
        //Altera imagem da DIV imagem
        img.src = './Imagens/Tratadas/Manha.png'
        //Muda cor do corpo do Site
        document.body.style.background = '#f5e9e0'
    } else if (hour >=12 && hour < 18){
        //Boa Tarde
        img.src = './Imagens/Tratadas/tarde.png'
        document.body.style.background = '#882b07'
    }else{
        //Boa noite
        img.src = './Imagens/Tratadas/noite.png'
        document.body.style.background = '#122030'
    }
}