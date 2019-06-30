let numero = document.querySelector('input#iptnum')
let quadro = document.getElementById('sltnum')
let quadroArray = []

function adicionar() {

           
    if (document.querySelector('input#iptnum').value == "") {
        window.alert('Deve digitar um numero')
    // Se não exister um index para o numero informado em quadraArray
    } else if (quadroArray.indexOf(numero.valueAsNumber) == -1) {
        //quadroArray.innerHTML = ''
        quadroArray.push(numero.value)
        //cria um elemento Option 
        let item = document.createElement('option')
        //Atribui um valor ao DOM text do elemento Option criado
        item.text = `Valor ${numero.valueAsNumber} adicionado`
        item.value = `v${quadroArray.indexOf(numero.valueAsNumber)}`
        quadro.appendChild(item)
    } else {
        window.alert('Numero inserido já consta na lista')
    }
    window.alert(quadroArray.indexOf(numero.valueAsNumber))
}