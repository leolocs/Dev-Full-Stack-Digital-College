//Escreva um algoritmo que receba o número de uma região.
//Verifique qual o número informado e a qual região corresponde.
//Ex:
// 1. Nordeste
// 2. Norte
// 3. Sul
// 4. Sudeste
// 5. Centro-Oeste

function switchRegion(){
    const regiao = Number(prompt(`
    Digite o número da sua região: \n
    1. Nordeste\n
    2. Norte\n
    3. Sul\n
    4. Sudeste\n
    5. Centro-Oeste\n
    `))

 switch (regiao){
    case 1:
        console.log(`Sua região é Nordeste`);
        break;
    case 2:
        console.log(`Sua região é Norte`);
        break;
    case 3:
        console.log(`Sua região é Sul`);
        break;
    case 4:
        console.log(`Sua região é Sudeste`);
        break;
    case 5:
        console.log(`Sua região é Centro-Oeste`);
        break;
    default:
        console.log(`Informe uma das regiões`);
        break;
        
}
}

function switchCRUD(){
    const crud = prompt(`
        Digite a Opção que deseja realizar:\n
        1-`)
}
