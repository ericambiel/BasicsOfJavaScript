function verificar(){
    var date = new Date
    var ano = date.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        //Cria um elemento HTML do tipo IMG
        var img = document.createElement('img')
        //Define o ID dele como foto
        img.setAttribute('id', 'foto')
        // Se o elemento fsex 0 (rad Masculino) estiver clicado
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <5) {
                // Bebe
                img.setAttribute('src', './Imagens/Tratadas/1-Ano-Homem.png')
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', './Imagens/Tratadas/5-Anos-Homem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './Imagens/Tratadas/20-Anos-Homem.png')
            } else if (idade < 41) {
                // Adulto 1
                img.setAttribute('src', './Imagens/Tratadas/35-Anos-Homem.png')
            } else if (idade < 55){
                // Adulto 2
                img.setAttribute('src', './Imagens/Tratadas/50-Anos-Homem.png')
            } else {
                // Idoso
                img.setAttribute('src', './Imagens/Tratadas/70-Anos-Homem.png')
            }
        // Se o elemento fsex 1 (rad Feminino) estiver clicado
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <5) {
                // Bebe
                img.setAttribute('src', './Imagens/Tratadas/1-Ano-Mulher.png')
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', './Imagens/Tratadas/5-Anos-Mulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './Imagens/Tratadas/20-Anos-Mulher.png')
            } else if (idade < 41) {
                // Adulto 1
                img.setAttribute('src', './Imagens/Tratadas/35-Anos-Mulher.png')
            } else if (idade < 55){
                // Adulto 2
                img.setAttribute('src', './Imagens/Tratadas/50-Anos-Mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', './Imagens/Tratadas/70-Anos-Mulher.png')
            }
        }
        //Alinha a div#res atravez desse codigo JS ao invez do CSS ou HTML
        res.style.textAlign = 'center' //Não funcionou
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        //Adiciona o elemento a pagina
        res.appendChild(img)
    }
}