
function desconto_produto(){
    while (true) {
        const preco = parseFloat(prompt("Digite o valor do produto: "))
        if (preco <= 0) {
            alert("Digite um valor maior que zero!")
        } else {
            const etiqueta = prompt("Digite a cor da etiqueta ou 'sair' para sair do programa:")
            if (etiqueta.toLowerCase() === "sair") {
                alert("Programa encerrado!")
                break;
            } else if (etiqueta.toLowerCase() !== "azul" && etiqueta.toLowerCase() !== "verde" && etiqueta.toLowerCase() !== "amarelo" && etiqueta.toLowerCase() !== "vermelho") {
                alert("Digite a cor de uma etiqueta válida: Azul,Verde, Amarelo ou Vermelho!")
            } else {
                switch (etiqueta.toLowerCase()) {
                    case 'azul':
                        alert("Desconto de 10% aplicado!")
                        break;
                    case 'verde':
                        alert("Desconto de 20% aplicado!")
                        break;
                    case 'amarelo':
                        alert("Desconto de 30% aplicado!")
                        break;
                    case 'vermelho':
                        alert("Desconto de 40% aplicado!")
                        break;
                }
            }
        }
    
    }
}

function verificar_senha(){
    const senha_correta = 1234;
let senha_user = '';

while(senha_correta !== senha_user){
    let senha_user = Number(prompt("Digite uma senha: "));

    if(senha_user === null){
        alert("Operação cancelada!");
        break;
    }

    if(senha_correta === senha_user){
        alert("Senha correta, acesso liberado!")
    }else{
        alert("Senha incorreta, tente novamente!")
    }
}
}

function calcular_media_aluno() {
    qtd_alunos = 0;

    qtd_alunos = Number(prompt("Quantos alunos tem na sala?"))
    for (i = qtd_alunos; i > 0; i--) {

        console.log(i)
    }
}
