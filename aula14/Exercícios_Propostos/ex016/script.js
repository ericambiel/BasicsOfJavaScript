function calcular() {
    //let, variavel só existe durante a execução dessa função
    let passo = window.document.querySelector('input#txtpasso').valueAsNumber
    let fim = window.document.querySelector('input#txtfim').valueAsNumber
    let inicio = window.document.querySelector('input#txtinicio').valueAsNumber
    let resultado = window.document.getElementById ('res')
    
    //Validação dos dados de entrada
    if (passo <= 0 || fim <=0) {
        alert('[ERRO 02] - Passo ou fim não podem ser menor ou igual a 0!')
        return
    } else if (fim > 10000 || inicio < -10000) {
        alert('[ERRO 03] - Os valores de inicio e fim não podem ultrapassar -10000 ou 10000.')
        return
    } else if (window.document.querySelector('input#txtpasso').value.length == 0 ||
                window.document.querySelector('input#txtfim').value.length == 0 ||
                window.document.querySelector('input#txtinicio').value.length == 0) {
                    alert('[ERRO 04] - Campos não podem ser vazios')
                    return
    } else {
        if (inicio < fim) { // Contagem crescente
            /*Limpa o elemento para que se a função for executada novamente 
            não some com o resultado anterior.*/
            resultado.innerHTML = null
            
            //Popula elemento res em modelo.html com o resultado
            for (let i=inicio,somatoria=inicio;i<=fim;i+=passo) {
                resultado.innerHTML += String(i) + " &#x1F449 "

            }
        } else { // contagem decrescente
            resultado.innerHTML = null
            
            for (let i=inicio,somatoria=inicio;i>=fim;i-=passo) {
                resultado.innerHTML += String(i) + " &#x1F449 "
            }
        }

    }
    
    /*Hash do Emoji Codepoint, substitua U+Coldpoint por &#xCodepoint ou \u{Codepoint} no Codepoint, 
        mais exemplos em "https://emojipedia.org/emoji/" */
    resultado.innerHTML += " &#x1F3C1 "
}
