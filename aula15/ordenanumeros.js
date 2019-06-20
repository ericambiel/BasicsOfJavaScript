var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// a - b < 0 então A vem antes de B
// a - b = 0 então A e B não são alterados e são ordenados entre todos os outros elementos, Mozzila 2003 não funciona
// a - b > 0 então B vem antes de A
function compararNumeros(A, B) {
    //console.log(`${A}[${mixedNumericArray.indexOf(A)}], ${B}[${mixedNumericArray.indexOf(A)}]`)
    return A - B;
}

console.log(`Ordenada com compararNumeros: ${mixedNumericArray.sort(compararNumeros)}`);
