let vetor = [1,3,5,4,7,8,9,2,6,0]
vetor.sort()

//Formatar e mostra todos os valores do vetor
for (let i = 0; i < vetor.length; i++) {
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}

//Para versões mais recentes do ECMAScript pode ser usado, lembrando que só funciona em Arrays e Objetos
//Para cada posição no Array vetor faça
for (let i in vetor) {
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}
