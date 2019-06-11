var diaSemana = new Date()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    4 = Quarta
    5 = Quinta
    6 = Sábado
*/
switch(diaSemana.getDay()) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido!')
}