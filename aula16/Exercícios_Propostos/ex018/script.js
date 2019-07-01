let num = document.querySelector('input#iptnum')
let list = document.querySelector('select#sltnum')
let result = document.querySelector('div#result')
let valores = []
//Flag para marcar que o elemento select já foi limpo uma vez
let j = 0

//Verifica de numero introduzido esta entre valores 1 e 100
function isNumber(n) {
    if(n >= 1 && n <= 100){
        return true
    } else {
        return false
    }
}

//Verifica se numero já esta na lista
function inList(n, l) {
    if (l.indexOf(n) == -1) {
        return true
    } else {
        return false
    }
}

//Adiciona numero a lista
function add() {
    //Limpa textos anteriores do elemento <p>
    result.innerHTML = ''
    if (isNumber(num.valueAsNumber) && inList(num.valueAsNumber, valores)) {
        //Limpa primeiro valor do elemento Select "Digite um numero acima" somente uma vez
        if (j == 0) {
            list.innerHTML = ''
            j++
        }
        //Insere numero no array valores
        valores.push(num.valueAsNumber)
        //Cria elemento option
        let item = document.createElement('option')
        //Define um valor para option
        item.text = num.valueAsNumber
        //Insere elemento option dentro do elemento select
        list.appendChild(item)
        //Foca o cursor no campo iptnum
        num.focus()
        //Apaga valor do campo após ser add
        num.value = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}

//Finaliza a analize dos números
function finalizar() {
    let soma = null
    //Somar valores
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    //Menor numero
    let menor = Math.min.apply(Math,valores)
    //Maior Numero
    let maior = Math.max.apply(Math,valores)
    //Média
    let media = soma / valores.length
    // Array que recebera elemento <p> usado para inserir resuldados do botão "Finalizar"
    let item = []
    //Limpa textos anteriores do elemento <p>
    result.innerHTML = ''
    //Gera paragrafos no corpo HTML com resultados e limpa valores anteriores
    for (let i = 0; i < 5; i++) {
        item.push(document.createElement('p'))
        result.appendChild(item[i])
    }
    item[0].innerHTML = `Ao todo, temos ${valores.length} números cadastrados.`
    item[1].innerHTML = `O mair valor informado foi ${maior}.`
    item[2].innerHTML = `O menor valor informado foi ${menor}.`
    item[3].innerHTML = `Somando todos os valores, temos ${soma}.`
    item[4].innerHTML = `A média dos valores digitados é ${media}.`
}
