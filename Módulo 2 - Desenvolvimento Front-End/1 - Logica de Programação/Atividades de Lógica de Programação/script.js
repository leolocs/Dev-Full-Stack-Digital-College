//Atv1: Escreva um algoritmo que calcule e mostre a área de um quadrado
function calcularAreaQuadrado() {
    const lado = document.querySelector("#lado").value;
    const area = lado * lado;
    document.querySelector("#resultado_atv1").innerText = "A área do quadrado é: " + area;
}

//Atv2: Escreva um algoritmo que calcule e mostre a área de um retângulo
function calcularAreaRetangulo() {
    const largura = document.querySelector("#largura").value;
    const altura = document.querySelector("#altura").value;
    const area = largura * altura;
    document.querySelector("#resultado_atv2").innerText = "A área do retângulo é: " + area;
}

//Atv3: Escreva um algoritmo que receba 4 valores. Calcule o produto dos dois primeiros e some com o produto dos dois últimos. Mostre na tela.                
function calcularValores() {
    const valor1 = document.querySelector("#valor1").value;
    const valor2 = document.querySelector("#valor2").value;
    const valor3 = document.querySelector("#valor3").value;
    const valor4 = document.querySelector("#valor4").value;

    const produto1 = valor1 * valor2;
    const produto2 = valor3 * valor4;
    const resultado = produto1 + produto2;

    document.querySelector("#resultado_atv3").innerText = "O resultado é: " + resultado;
}

//Atv4: Escreva um algoritmo para calcular o desconto de 10% sobre o preço de compra de um produto (um bem, um objeto). Apresente o novo preço na tela.                
function calcularDesconto10(){
    const preco = document.querySelector("#preco_produtoatv4").value;
    const desconto = preco * 0.1;
    const novoPreco = preco - desconto;
    document.querySelector("#resultado_atv4").innerHTML= `Preço do produto: R$${preco}<br>Desconto de 10%<br> ${desconto}%<br>Preço do produto com desconto: ${novoPreco}`;
    // document.querySelector("#resultado_atv4").innerText = "O novo preço com desconto é: " + novoPreco;
    
}

//Atv5: Escreva um algoritmo que receba um percentual de desconto e calcule esse desconto sobre o preço do produto, apresentando o valor do desconto e o novo preço do produto.
function calcularDescontoInserido (){
    const preco = document.querySelector("#preco_produto_atv5").value;
    const percentual = document.querySelector("#percentual_produto_atv5").value
    const desconto = (preco * percentual) / 100;
    const novoPreco = preco - desconto;
    document.querySelector("#resultado_atv5").innerHTML= `Preço do produto: R$${preco}<br>Desconto de ${percentual}%: ${desconto}<br>Preço do produto com desconto: R$${novoPreco}`;
}

function inverterValores() {
    const valorA = document.querySelector("#numA").value;
    const valorB = document.querySelector("#numB").value;
    document.querySelector("#numA").value = valorB;
    document.querySelector("#numB").value = valorA;
    document.querySelector("#resultado_inversao").innerHTML = `Valores originais:<br>- Valor A: ${valorB}<br>- Valor B: ${valorA}<br>Valores invertidos:<br>- Valor A: ${valorB}<br>- Valor B: ${valorA}`;
}

function calcularSaldoDevedor() {
    const totalParcelas = document.querySelector("#total_parcelas").value;
    const parcelasPagas = document.querySelector("#parcelas_pagas").value;
    const valorParcela = document.querySelector("#valor_parcela").value;

    const valorTotal = totalParcelas * valorParcela;
    const saldoDevedor = valorTotal - (parcelasPagas * valorParcela);

    document.querySelector("#resultado_saldo_devedor").innerHTML = `Valor total do consórcio: R$${valorTotal}<br>Saldo devedor: R$${saldoDevedor}`;
}

function calcularMedia() {
    const nota1 = parseFloat(document.querySelector("#nota1").value);
    const nota2 = parseFloat(document.querySelector("#nota2").value);
    const nota3 = parseFloat(document.querySelector("#nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    document.querySelector("#resultado_media").innerHTML = `A média das notas é: ${media}`;
}

function calcularMedia4notas() {
    const nota1 = parseFloat(document.querySelector("#nota1").value);
    const nota2 = parseFloat(document.querySelector("#nota2").value);
    const nota3 = parseFloat(document.querySelector("#nota3").value);
    const nota4 = parseFloat(document.querySelector("#nota4").value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.querySelector("#resultado_media4notas").innerHTML = `A média das notas é: ${media}`;
}

function verificarNome() {
    const nome = document.querySelector("#nome_usuario").value;
    if (nome === "") {
        document.querySelector("#resultado_nome").innerHTML = "Bem-vindo(a) visitante!";
    } else {
        document.querySelector("#resultado_nome").innerHTML = `Bem-vindo(a) ${nome}!`;
    }
}

function verificarValor() {
    const valor = document.querySelector("#valor_informado").value;
    if (valor === "") {
        document.querySelector("#resultado_valor").innerHTML = "Erro ao acessar um valor nulo na memória";
    } else {
        document.querySelector("#resultado_valor").innerHTML = `Valor informado: ${valor}`;
    }
}

function verificarParouImpar() {
    const valor = parseInt(document.querySelector("#valor_informado").value);
    if (isNaN(valor)) {
        document.querySelector("#resultado_valor").innerHTML = "Erro: Valor inválido.";
    } else if (valor === 0) {
        document.querySelector("#resultado_valor").innerHTML = "O valor informado é Zero.";
    } else if (valor % 2 === 0) {
        document.querySelector("#resultado_valor").innerHTML = "O valor informado é Par.";
    } else {
        document.querySelector("#resultado_valor").innerHTML = "O valor informado é Ímpar.";
    }
}

function verificarMaiorMenorIgual() {
    const valor1 = parseInt(document.querySelector("#valor1").value);
    const valor2 = parseInt(document.querySelector("#valor2").value);

    if (isNaN(valor1) || isNaN(valor2)) {
        document.querySelector("#resultado_maior_menor").innerHTML = "Erro: Um ou ambos os valores são inválidos.";
    } else if (valor1 > valor2) {
        document.querySelector("#resultado_maior_menor").innerHTML = `O valor ${valor1} é maior que ${valor2}.`;
    } else if (valor1 < valor2) {
        document.querySelector("#resultado_maior_menor").innerHTML = `O valor ${valor1} é menor que ${valor2}.`;
    } else {
        document.querySelector("#resultado_maior_menor").innerHTML = `Os valores são iguais.`;
    }
}

function calcularPesoIdeal() {
    const altura = parseFloat(document.querySelector("#altura").value);
    const sexo = document.querySelector("#sexo").value.toLowerCase();

    let pesoIdeal;

    if (sexo === "f") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else if (sexo === "m") {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        document.querySelector("#resultado_peso_ideal").innerHTML = "Sexo inválido. Por favor, digite 'F' para feminino ou 'M' para masculino.";
        return;
    }

    document.querySelector("#resultado_peso_ideal").innerHTML = `O peso ideal é: ${pesoIdeal.toFixed(2)} kg`;
}

function verificarAnoBissexto() {
    const ano = parseInt(document.querySelector("#ano").value);

    if (isNaN(ano)) {
        document.querySelector("#resultado_ano_bissexto").innerHTML = "Erro: Ano inválido.";
        return;
    }

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        document.querySelector("#resultado_ano_bissexto").innerHTML = `O ano ${ano} é Bissexto.`;
    } else {
        document.querySelector("#resultado_ano_bissexto").innerHTML = `O ano ${ano} não é Bissexto.`;
    }
}

