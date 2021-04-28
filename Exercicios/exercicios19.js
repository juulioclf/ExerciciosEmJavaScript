/* 19: 
O cardápio de uma lanchonete é o seguinte:

Código    Descrição do Produto    Preço
100       Cachorro Quente         R$ 3,00
200       Hambúrguer Simples      R$ 4,00
300       Cheeseburguer           R$ 5,50
400       Bauru                   R$ 7,50
500       Refrigerante            R$ 3,50
600       Suco                    R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/
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

valorCardapio([100,2]) //O valor deu R$6
valorCardapio([200,5]) //O valor deu R$20
valorCardapio([600, 2]) //O valor deu R$7.6
valorCardapio([900, 3]) //nao existe esse codigo!!