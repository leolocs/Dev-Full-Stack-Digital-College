// Peça um número e use while para contar de 0 até esse número, exibindo no e mostre no console.log.
function contadorWhile() {
    const num = Number(prompt("Digite um número: "))
    let cont = 0

    while (cont <= num) {
        console.log(`${cont}`)
        cont++
    }
}

//Usuário informa 10 números e deve informar se é par ou ímpar:
let cont = 1;

while (cont <= 10) {
    const numero = prompt(`Informe o ${cont}º número`)
    if(isNaN(numero)){
        break;
    }


    if (numero % 2 == 0) {
        console.log(`O número ${numero} é par!`);
    } else {
        console.log(`O número ${numero} é ímpar!`);
    }
    cont++;
}
