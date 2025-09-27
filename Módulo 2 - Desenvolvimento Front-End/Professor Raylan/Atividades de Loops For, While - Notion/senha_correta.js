// Crie um programa que peça ao usuário para digitar uma senha.
// Continue pedindo a senha até que o usuário digite "1234".
// Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida,
// exiba a mensagem "Acesso Permitido".

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