//26



//27

//28

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
console.log('\n')

//29

const verificaIntervalo = vetor2 => {
    let dentroIntervalo = 0
    let foraIntervalo = 0
    for(let i = 0; i < vetor2.length; i++){
        if((vetor2[i] >= 10) && (vetor2[i] <=20)){
            dentroIntervalo++
        }else{
            foraIntervalo++
        }
    }
    console.log(`Existem ${dentroIntervalo} números dentro do intervalo, e ${foraIntervalo} fora do intervalo.`)
}

verificaIntervalo([1,2,3,4,5,6,7,8,10,20,21])
verificaIntervalo([10,11,12,13,17,21,20,21])
console.log('\n')

//30

const maiorEMenor = vetor3 => {
    console.log(`O maior número é: ${Math.max.apply(null, vetor3)}, e o menor número é: ${Math.min.apply(null, vetor3)}`)
}

maiorEMenor([1,2,3,4,5,6,7,8])
maiorEMenor([1,99,100,231,31321])
console.log('\n')

//31

const menorNoVetor = function(vetor4) {
    let numerosNegativos = 0
    for(let i = 0; i < vetor4.length; i++){
        if (vetor4[i] < 0){
            numerosNegativos++
        }
    }
    console.log(`A quantidade de números negativos é: ${numerosNegativos}`)
}
menorNoVetor([1,2,3,4,-1,0,-5,-67])
menorNoVetor([1,-1,-2,-5,-6])
console.log('\n')

//32

const mediaVetor = arrayMedia => {
    let vetorSum = arrayMedia.reduce((a, b) => a + b, 0)
    console.log(`A média aritimetica é: ${vetorSum/arrayMedia.length}`)

}

mediaVetor([1,2,3,4,5,6,7,8,9,10])
mediaVetor([1,2,3,4])
mediaVetor([1,5,3,7,9,21])
console.log('\n')

//33

const vetorString = ['h', 'o', 'j', 'e']
const vetorInteiro = [1, 2, 3, 4]
const vetorDouble = [1.1, 2.2, 3.3, 4.4]
var concat11 = vetorString.concat(vetorInteiro.concat(vetorDouble))
var concat21 = vetorInteiro.concat(vetorDouble)
var concat22 = vetorString.concat(concat21)
console.log(concat11)
console.log(concat22) //MESMO JEITO
console.log('\n')

//34 inacabada

const vetoresIguais = (vetorSt1, vetorSt2) => {
    for(let i = 0; i < vetorSt1.length; i++){
        if(vetorSt1[i] === vetorSt2[i]){
            return true
        }else{
            return false
            break
        }
    }
}

console.log(vetoresIguais(['a', 'b', 'c'], ['a', 'b', 'c']))
console.log(vetoresIguais(['a', 'b', 'c'], ['a', 'b', 'e']))
console.log('\n')

//35


//36

const vetorMultiplicacao = (vetorNum, vetorInt) => {
    let vetorMult = []
    for(let i = 0; i < vetorNum.length; i++){
        vetorMult.push(vetorNum[i]*vetorInt[i])
    }
    return vetorMult
}

console.log(vetorMultiplicacao([1,2,3,4,5], [1,2,3,4,5]))
console.log(vetorMultiplicacao([1,2,3,4,5], [6,7,8,9,10]))
console.log(vetorMultiplicacao([1,2,3,4,5], [10,9,8,7,6]))
console.log('\n')

//37

const progAritmEGeom = (numTermo, primTermo, razao) => {
    let progressaoAritimetica = (((primTermo + (numTermo - 1)*razao) + primTermo)*numTermo) / 2
    let progressaoGeometrica = primTermo*((razao**numTermo) - 1)/(razao - 1)
    console.log(`A soma da progressao aritimetica é ${progressaoAritimetica}, a soma da progressao geometrica ${progressaoGeometrica}`)
}

progAritmEGeom(7,2,3)
progAritmEGeom(5,5,6)
console.log('\n')

//38

const numerosImpares = (inicio, fim) => {
    if(inicio % 2 != 0){
        inicio = inicio + 1
    }for(let i = inicio; i < (fim + 1); i = i + 2){
        console.log(i)
    }
    console.log('\n')
}

numerosImpares(1,20)
numerosImpares(0,20)
numerosImpares(10, 40)
console.log('\n')

//39

//40

const vetorDeNotas = VetorNotas => {
    let vetorConceito = []
    for( let i = 0; i < VetorNotas.length; i++){
        if((VetorNotas[i] > 0) && (VetorNotas[i] <4.9)){
            vetorConceito.push('D')
        }else if((VetorNotas[i] > 5) && (VetorNotas[i] < 6.9)){
            vetorConceito.push('C')
        }else if((VetorNotas[i] > 6.9) && (VetorNotas[i] <8.9)){
            vetorConceito.push('B')
        }else{
            vetorConceito.push('A')
        }
    }
    return vetorConceito
}

console.log(vetorDeNotas([10,10,9,9,8,8,7,6,5,3,3,3]))

