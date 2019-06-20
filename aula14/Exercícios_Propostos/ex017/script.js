function calcular() {
    let multiplicador = document.querySelector('input#inpmult')
    let tabuada = document.getElementById('tabuada')
        
    if (document.querySelector('input#inpmult').value == "") {
        window.alert('Multilicador não pode ser vazio')
    } else {
        tabuada.innerHTML = ''

        for (let i=1; i <= 10; i++) {
            //cria um elemento Option 
            let item = document.createElement('option')
            //Atribui um valor ao DOM text do elemento Option criado
            item.text = `${multiplicador.valueAsNumber} x ${i} = ${multiplicador.valueAsNumber*i}`
            //Atribui um valor ao DOM value do elemento Option criado
            item.value = `v${i}`
            //Adiciona os elementos criados antes dentro do elemento inpmult do HTML
            tabuada.appendChild(item)
        }
    }
}