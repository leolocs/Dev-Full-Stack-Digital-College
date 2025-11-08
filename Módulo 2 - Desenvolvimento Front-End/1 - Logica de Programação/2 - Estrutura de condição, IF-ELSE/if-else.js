// Escreva um algoritmo que receba 4 notas com prompt,
// Calcule a média e diga se o aluno foi aprovado ou reprovado se média menor que 6 (média ≥ 7).
// Use Number() e if 
function calcularMedia(){
    const n1 = Number(prompt("Digite a nota 1: "))
    const n2 = Number(prompt("Digite a nota 2: "))
    const n3 = Number(prompt("Digite a nota 3: "))
    const n4 = Number(prompt("Digite a nota 4: "))
    const media = (n1 + n2 + n3 + n4) / 4;

    console.log(`Média: ${media.toFixed()}`)
    if (media >= 7) {
        alert("Você foi reprovado!")
    } else {
        alert("Você foi aprovado!")
    }
}

// Peça uma idade com prompt e verifique se é menor ou maior de idade,
// na saída mostre uma mensagem personalizada com a idade do usuário 
// e informe se ele é menor ou maior de idade:
// Exemplo: "Você tem 18 anos, é maior de idade".
// Exemplo: "Você tem 15 anos, é menor de idade".
function menorMaiorIdade(){
    const idade = Number(prompt("Digite sua idade: "))

    if (idade < 18) {
        alert(`Você tem ${idade}anos, é menor de idade!`)
    } else if (idade >= 18) {
        alert(`Você tem ${idade}anos, é maior de idade!`)
    }
}

function parOuImpar(){
    // Peça um número com prompt e diga com alert se ele é par ou ímpar. Dica: use 
    // if (numero % 2 === 0) 

    const num = Number(prompt("Digite um número: "))

    if (num % 2 === 0) {
        alert(`Número par`)
    } else {
        alert(`Número ímpar`)
    }
}

function positivoNegativo(){
    // Peça um número com prompt e diga se ele é positivo, negativo ou zero.
    const input = (prompt("Digite um número: "));

    if(input === null){
        alert("Operação cancelada!");
        break;
    }

    const numero = Number(input);
    if (isNaN(numero)){
        alert("Digite um número válido!");
        continue;
    }

    if(numero === 0){
        alert("Esse número é zero!")
    }else if(numero > 0){
        alert("Esse número é positivo!")
    }else{
        alert("Esse número é negativo!")
    }

}

function subtracaoNumeros(){
    // Solicite dois números e mostre a subtração entre eles com alert

    let num1 = Number(prompt("Digite um numero: "))
    let num2 = 0;
    if (num1 <= 0) {
        alert((`Digite um número maior que zero!`))
    } else {
        num2 = Number(prompt(`Digite outro numero: `))
        if (num2 <= 0 && num2 > num1) {
            alert(`Digite um número maior que zero e maior que o primeiro número!`)
        } else {
            let subtração = num1 - num2
            alert(`A subtração dos números é: ${subtração}`)
        }
    }
}