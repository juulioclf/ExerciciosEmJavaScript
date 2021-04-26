/* 7:  Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

*/

const baskhara = (ax2, bx, c) => {
    let delta = (bx**2) - (4*ax2*c); 
    if (delta <= 0){
        return 'Erro!!'
    }else{
        let x1 = Math.round(-bx + (delta**(1/2)) / (2*ax2));
        let x2 = Math.round(-bx - (delta**(1/2)) / (2*ax2))
        return `[x1 = ${x1}, x2 = ${x2 }]`
    }
}

console.log(baskhara(3, -5, 12)) //Erro!!
console.log(baskhara(3, -100, 12)) //[x1 = 117, x2 = 83]
console.log(baskhara(3, -5, 0)) //[x1 = 6, x2 = 4]
console.log(baskhara(2, 5, 2)) //[x1 = -4, x2 = -6]