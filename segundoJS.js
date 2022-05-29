//1 - Faça uma função que retorne um objeto que represente você, com os seguintes atributos: 
//altura: ponto flutuante
//corCabelo: string
//cursos: array
//escreverNome: função que escreve seu nome
//filhos: array de objetos, o objeto filho precisa ter nome e idade
//habilitado: boolean
//idade: inteiro
//mae: objeto com nome e idade
//nome: string

function getObj(){
    var obj = {
        altura: 1.75,
        corCabelo: "Preto",
        cursos: ["Lógica", "BootCamp Avanade"],
        nome: "Felipe Rocha",
        escreverNome: function (){
            console.log(this.nome);
        },
        filhos: [{nome: "Gustavo", idade: 6}, {nome: "Davi", idade: 0}],
        habilitado: false,
        idade: 32,
    mae: {nome: "Cida", idade: 50}

    };
    return obj;
}

//2 - faça uma função que utilize a função anterior e filtre pelos filhos com mais de 1 ano de idade.

function getfilhosMaisUmAnoIdade (){
    return getObj().filhos.filter((filho) => {return filho.idade > 1});
}

//3 - faça uma função que utilize a função 2 e obtenha somente o nome dos filhos com mais de 1 ano de idade.

function getNomeFilhosMaisUmAnoIdade() {
   return getfilhosMaisUmAnoIdade ().map((filho) => { return filho.nome});
}
