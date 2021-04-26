/* 4: Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

const division = (dividendo, divisor) => {
    return (`Divisão: ${dividendo/divisor}, Resto: ${dividendo%divisor}`)
}

console.log(division(9,3)) //Divisão: 3, Resto: 0
console.log(division(9,4)) //Divisão: 2.25, Resto: 1
console.log(division(27,3))  //Divisão: 9, Resto: 0
console.log(division(1,3))  //Divisão: 0.3333333333333333, Resto: 1