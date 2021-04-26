/* 6:  Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

const jurosCalcular = (capInicial, juros, tempo) => {
    let simples = capInicial * juros * tempo 
    let composto = capInicial * ((1 + juros)**tempo)
    return simples, composto
}

console.log(jurosCalcular(600, 1.5, 3)) //9375