/* 12: Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = number => {
    let mult = 1
    for(i = number; i > 1; i--){
        mult *= i
    }return mult
}

console.log(fatorial(5)) //120
console.log(fatorial(8)) //40320
console.log(fatorial(7)) //5040
