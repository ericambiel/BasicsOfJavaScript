function calcular() {
    var passo = Number(window.document.querySelector('input#txtpasso').value)
    var fim = Number(window.document.querySelector('input#txtfim').value)
    var inicio = Number(window.document.querySelector('input#txtinicio').value)

    //Validação dos dados de entrada
    if (inicio > fim) {
        alert('[ERRO 01] - Início não pode ser maior doque o fim!')
        return
    } else if (passo <= 0 || fim <=0) {
        alert('[ERRO 02] - Passo ou fim não podem vazios ou menor ou igual a 0!')
        return
    } else if (fim > 10000 || inicio < -10000) {
        alert('[ERRO 03] - Os valores de inicio e fim não podem ultrapassar -10000 ou 10000.')
        return
    }
    /*Limpa o elemento para que se a função for executada novamente 
        não some com o resultado anterior.*/
    window.document.getElementById ('res').innerHTML = null
    
    //Variavel recebe objeto res de modelo.html
    resultado = window.document.getElementById ('res')

    //Popula elemento res em modelo.html com o resultado
    for (i=inicio,somatoria=inicio;i<=fim;i=i+passo) {
        resultado.innerHTML += String(somatoria) + " &#x1F449 "
        somatoria = somatoria + passo 
    }
    /*Hash do Emoji Codepoint, substitua U+ por &#x no Codepoint, 
        mais exemplos em "https://emojipedia.org/emoji/" */
    resultado.innerHTML += " &#x1F3C1 "
}
