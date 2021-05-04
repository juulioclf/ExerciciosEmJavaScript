/* 23: Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const mediaNotas = notasAluno => {
    let newNotas = notasAluno.sort()
    let mediasPonderada = ((4*newNotas[0])+ (3*newNotas[1]) + (3*newNotas[2])) / 10
    if(mediasPonderada < 5){
        console.log(`Reprovado, sua média foi: ${mediasPonderada}`)
    }else{
        console.log(`Aprovado, sua média foi: ${mediasPonderada}`)
    }
}

mediaNotas([7,5,5]) //Aprovado, sua média foi: 5.6
mediaNotas([7,6,3]) //Aprovado, sua média foi: 5.1
mediaNotas([10,10,0]) //Aprovado, sua média foi: 6
mediaNotas([10,9,3]) //Aprovado, sua média foi: 7.6