const pessoa = {
    nome: "João",
    idade: 20,
    altura: 1.80
}

console.log(pessoa.nome);

pessoa.nome = "Maria";
console.log(pessoa.nome);

//Estudantes da turma FS50

let numeroMatricula = 1234;
const aluno = [
    {
        matricula: ++numeroMatricula,
        nome: "João",
        email:"joaozinho30@gmail.com",
        fone: "(85) 98765.4321";
    },
    {
        matricula: ++numeroMatricula,
        nome: "Maria",
        email:"mariaribeiro@gmail.com",
        fone: "(85) 98765.1234";
    }
];

turmafs50.push(aluno);
console.log(turmafs50);

