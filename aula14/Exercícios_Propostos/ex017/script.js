function calcular() {
    var multiplicador = document.querySelector('input#inpmult').valueAsNumber
        
    if (document.querySelector('input#inpmult').value == "") {
        window.alert('Multilicador não pode ser vazio')
        return
    }

    document.getElementById('tabuada').options[0].text = null

    for (var i=0; i <= 10; i++) {
        document.getElementById('tabuada').options[i].text = `${multiplicador} x ${i+1} = ` + multiplicador*(i+1)
    }
}