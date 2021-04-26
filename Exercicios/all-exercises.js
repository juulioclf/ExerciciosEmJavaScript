


//9

const notaAluno = nota => {
    let newNota = 0
    if (nota > 38){
        if(nota - (Math.ceil(nota/5)*5) < 3){
            newNota = Math.ceil(nota/5)*5;
        }
    }else{
        newNota = nota
    }return newNota
}

console.log(notaAluno(37))
console.log(notaAluno(38))
console.log(notaAluno(40))
console.log(notaAluno(84))
console.log('\n')


//10

const verNumber = number => {
    if(number % 3 === 0){
        return true;
    }else{
        return false;
    }

}


console.log(verNumber(3))
console.log(verNumber(4))
console.log(verNumber(99))
console.log('\n')

//11 (nao entendi)


//12
const fatorial = number => {
    let mult = 1
    for(i = number; i > 1; i--){
        mult *= i
    }return mult
}

console.log(fatorial(5))
console.log(fatorial(8))
console.log(fatorial(7))
console.log('\n')

//13 
const verDia = dia => {
    switch (dia) {
        case 1:
            console.log("Domingo")
            break;
        case 2:
            console.log("Segunda")
            break;
        case 3:
            console.log("Terça")
            break;
        case 4:
            console.log("Quarta")
            break;
        case 5:
            console.log("Quinta")
            break;
        case 6:
            console.log("Sexta")
            break;
        case 7:
            console.log("Sabado")
            break;
        default:
            console.log("nao existe esse dia!!")
            break
      }
}

verDia(1)
verDia(2)
verDia(7)
console.log('\n')


//14 como botar a string pra lower case dentro da funcao
const fruta = fruta => {
    switch(fruta){
        case 'maçã':
            console.log("Não vendemos esta fruta aqui")
            break
        case 'kiwi':
            console.log("Estamos com escassez de kiwis")
            break
        case 'melancia':
            console.log("Aqui está! são 3 reais o quilo" )
            break
        default:
            console.log("erro!! fruta nao cadastrada")
    }

}

fruta('maçã')
fruta('kiwi')
fruta('melancia')
fruta('Morango')
console.log('\n')

//15

const compraCarro = carro => {
    switch(carro){
        case 'hatch':
            console.log("Compra efetuada com sucesso!")
            break
        case 'sedans':
        case 'motocicleta':
        case 'caminhonete':
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log("não trabalhamos com este tipo de automovel aqui!")
    }

}

compraCarro("hatch")
compraCarro("sedans")
compraCarro("motocicleta")
compraCarro("caminhonete")
compraCarro("moto")
console.log('\n')


//16

const calculaNumero = arrayCalculo => {
    switch(arrayCalculo[1]){
        case '+':
            console.log(arrayCalculo[0] + arrayCalculo[2])
            break
        case '-':
            console.log(arrayCalculo[0] - arrayCalculo[2])    
            break
        case '*':
            console.log(arrayCalculo[0] * arrayCalculo[2])    
            break   
        case '/':
            console.log(arrayCalculo[0] / arrayCalculo[2])    
            break  
        default:
            console.log("erro!! operação invalida!")
    }
}

calculaNumero([1,'+',2])
calculaNumero([1,'-',2])
calculaNumero([1,'*',2])
calculaNumero([1,'/',2])
calculaNumero([1,'&',2])
console.log('\n')


//17
const salarioFinal = salarioPlano => {
    switch(salarioPlano[0]){
        case 'A':
            console.log(salarioPlano[1] + (0.10*salarioPlano[1]))
            break
        case 'B':
            console.log(salarioPlano[1] + (0.15*salarioPlano[1]))  
            break
        case 'C':
            console.log(salarioPlano[1] + (0.20*salarioPlano[1]))   
            break    
        default:
            console.log("erro!! plano inválido!")
    }
}

salarioFinal(['A', 700])
salarioFinal(['B', 700])
salarioFinal(['C', 700])
salarioFinal(['D', 700])
console.log('\n')

//18
const numeroExtenso = number => {
    switch (number) {
        case 1:
            console.log("um")
            break
        case 2:
            console.log("dois")
            break
        case 3:
            console.log("tres")
            break
        case 4:
            console.log("quatro")
            break
        case 5:
            console.log("cinco")
            break
        case 6:
            console.log("seis")
            break
        case 7:
            console.log("sete")
            break
        case 8:
            console.log("oito")
            break
        case 9:
            console.log("nove")
            break
        case 10:
            console.log("dez")
            break 
        default:
            console.log("numero invalido!!")
            break
      }
}


numeroExtenso(1)
numeroExtenso(6)
numeroExtenso(10)
numeroExtenso(11)
console.log('\n')

//19
const valorCardapio = arrayPedido => {
    switch (arrayPedido[0]) {
        case 100:
            console.log(`O valor deu R$${arrayPedido[1]*3}`)
            break
        case 200:
            console.log(`O valor deu R$${arrayPedido[1]*4}`)
            break
        case 300:
            console.log(`O valor deu R$${arrayPedido[1]*5.5}`)
            break
        case 400:
            console.log(`O valor deu R$${arrayPedido[1]*7.5}`)
            break
        case 500:
            console.log(`O valor deu R$${arrayPedido[1]*3.5}`)
            break
        case 600:
            console.log(`O valor deu R$${arrayPedido[1]*3.8}`)
            break
        default:
            console.log("nao existe esse codigo!!")
            break

    }
}

valorCardapio([100,2])
valorCardapio([200,5])
valorCardapio([600, 2])
valorCardapio([900, 3])
console.log('\n')

//20 

//21

const valorConvenio = idadeConveniado => {
    if (idadeConveniado < 10){
        console.log(`o seu convenio é de R$180`)
    }else if((10 < idadeConveniado) && (idadeConveniado < 30)) {
        console.log(`o seu convenio é de R$150`)
    }else if((30 < idadeConveniado) && (idadeConveniado < 60)){
        console.log(`o seu convenio é de R$195`)
    }else{
        console.log(`o seu convenio é de R$230`)
    }      
}

valorConvenio(8)
valorConvenio(12)
valorConvenio(31)
valorConvenio(59)
valorConvenio(61)
console.log('\n')

//22

const valorAnuidade = mesEValor => {
    if (mesEValor[0] === 1){
        console.log(`O valor a ser pago pela anuidade é R$${mesEValor[1]}`)
    }else{
        console.log(`O valor a ser pago pela anuidade é R$${(mesEValor[1]*(1.05**(mesEValor[0]-1)))}`)
    }
}

valorAnuidade([1, 200])
valorAnuidade([2, 200])
valorAnuidade([3, 200])
valorAnuidade([12, 200])
console.log('\n')

//23

const mediaNotas = notasAluno => {
    let newNotas = notasAluno.sort()
    let mediasPonderada = ((4*newNotas[0])+ (3*newNotas[1]) + (3*newNotas[2])) / 10
    if(mediasPonderada < 5){
        console.log(`Reprovado, sua média foi: ${mediasPonderada}`)
    }else{
        console.log(`Aprovado, sua média foi: ${mediasPonderada}`)
    }
}

mediaNotas([7,5,5])
mediaNotas([7,6,3])
mediaNotas([10,10,0])
mediaNotas([10,9,3])
console.log('\n')

//24

var i = 1
while(i < 11){
    console.log(`o número é: ${i}`)
    i++
}
console.log('\n')

//25

var j = 1
while(j < 51){
    console.log(`o número é: ${j}`)
    j++
}
console.log('\n')

//26

var k = 0
while(k < 101){
    console.log(`o número par é: ${k}`)
    k = k + 2
}
console.log('\n')

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

