let num = [1,5,3,2,10,32,34,15,88]
//Acresenta um valor novo ao index escolhido
num[5] = 99

//Adiciona um valor novo após o ultimo index
num.push(7,61,52)


//Mostra o tamanho do Array, obs: não há () no final pois ele não é um metodo mas sim um atributo.
console.log(`O vetor tem ${num.length} posições`)

//Mostra todos os valores de todas as posições 
console.log(`Os valores do Array até agora são: ${num}`)

//Mostra um valor especifico do Array
console.log(`O primeiro valor do Array é ${num[0]}`)

//Procura a posição de um valor especificado no Array, se retornar -1 é que o valor não existe dentro do Array
console.log(`O Index do Array para o valor 88 é: ${num.indexOf(88)}`)

//Ordena de forma crescente os elementos de um Array
console.log(`Os valores em ordem crescente são: ${num.sort()}`)