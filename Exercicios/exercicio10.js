/* 10: Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false
*/

const verNumber = number => {
    if(number % 3 === 0){
        return true;
    }else{
        return false;
    }

}


console.log(verNumber(3)) //true
console.log(verNumber(4)) //false
console.log(verNumber(99)) //true