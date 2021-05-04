/* 22: Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

const valorAnuidade = mesEValor => {
    if (mesEValor[0] === 1){
        console.log(`O valor a ser pago pela anuidade é R$${mesEValor[1]}`)
    }else{
        console.log(`O valor a ser pago pela anuidade é R$${(mesEValor[1]*(1.05**(mesEValor[0]-1)))}`)
    }
}

valorAnuidade([1, 200]) //O valor a ser pago pela anuidade é R$200
valorAnuidade([2, 200]) //O valor a ser pago pela anuidade é R$210 
valorAnuidade([3, 200]) //O valor a ser pago pela anuidade é R$220.5
