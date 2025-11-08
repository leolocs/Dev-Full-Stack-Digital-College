console.log("hello Word, Javascript")
var valorMensalidade = 400

// Tipos de variáveis:
// var      variável            O var tem um vazamento de escopo (local e global)
// Exemplo:
// console.log("Valor da mensalidade", valorMensalidade);
// if (true) {
//     var valorMensalidade = 300;
//     console.log("Valor da mensalidade", valorMensalidade)
// }
// console.log(valorMensalidade);

// const    constante é imutável  
// let      variavel mutável
// string   texto
// int      inteiro
// float    decimal
// number   inteiro e decimal
// bool     verdadeiro ou falso

//"Tudo deve ser CONST, a não ser que precise ser LET"

var resultado = somar(5,10) 

function somar(v1,v2){
    return v1+v2;
};

function mensagem (msg){
    console.log(msg)
};

console.log(mensagem("Buenas"));
somar(3,4);