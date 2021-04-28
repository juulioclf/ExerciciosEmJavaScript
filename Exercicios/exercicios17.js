/* 17: Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

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

salarioFinal(['A', 700]) //770
salarioFinal(['B', 700]) //805
salarioFinal(['C', 700]) //840
salarioFinal(['D', 700]) //erro!! plano inválido!