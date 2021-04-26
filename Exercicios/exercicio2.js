/* 2: Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo 
e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const qualTriangulo = (side1, side2, side3) => {

    if((side1 + side2 + side3) != 180) {
        console.log("ERRO! Triangulo Invalido!");
    }else if( (side1 != side2) && (side1 != side3) && (side2 != side3)) { 
        console.log("Triangulo Escanelo")
    }else if ( (side1 === side2) && (side2 === side3) && (side1 === side3)){
        console.log("Triangulo Equilatero")
    }else{
        console.log("Triangulo Isosceles")
    }
}

//testes
qualTriangulo(1,1,1) //erro
qualTriangulo(90, 45, 45) //isosceles
qualTriangulo (60,60,60) //equilatero
qualTriangulo (50,60,70,) //escaleno
