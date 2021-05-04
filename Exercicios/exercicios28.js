/* 28:  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpare
*/

const verificaVetor = vetorNumeros => {
    let quantosImpares = 0
    let quantosPares = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i]%2 == 0){
            quantosPares++
        }else{
            quantosImpares++
        }
    }
    console.log(`O vetor tem: ${quantosPares} números pares e ${quantosImpares} números impares.`)
}

verificaVetor([1,2,3,4,5,6])
verificaVetor([2,2,2,2,2,2])
verificaVetor([1,1,1,1,1,1])