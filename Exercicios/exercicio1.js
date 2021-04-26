/* 1: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

const calculadora = (num1, num2) => {
    console.log(`Soma: ${num1+num2} /`,`Subtração: ${num1-num2} /`, `Multiplicação: ${num1*num2} /`, `Divisão: ${num1/num2}`)
}

//testes
calculadora(1,2) //Soma: 3 / Subtração: -1 / Multiplicação: 2 / Divisão: 0.5
calculadora(0,0)  //Soma: 0 / Subtração: 0 / Multiplicação: 0 / Divisão: NaN
calculadora(0,4)  //Soma: 60 / Subtração: 52 / Multiplicação: 224 / Divisão: 14



