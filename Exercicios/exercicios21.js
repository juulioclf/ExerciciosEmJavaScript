/* 21:  Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const valorConvenio = idadeConveniado => {
    if (idadeConveniado < 10){
        console.log(`o seu convenio é de R$180`)
    }else if((10 < idadeConveniado) && (idadeConveniado < 30)) {
        console.log(`o seu convenio é de R$150`)
    }else if((30 < idadeConveniado) && (idadeConveniado < 60)){
        console.log(`o seu convenio é de R$195`)
    }else{
        console.log(`o seu convenio é de R$230`)
    }      
}

valorConvenio(8) //o seu convenio é de R$180
valorConvenio(12) //o seu convenio é de R$150
valorConvenio(31) //o seu convenio é de R$195
valorConvenio(59) //o seu convenio é de R$195
valorConvenio(61) //o seu convenio é de R$230
console.log('\n')