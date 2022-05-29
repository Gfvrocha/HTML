//1º Retornando nome\\
function nome(){
    return "Felipe Rocha";
}
nome()

//2º Retornando nome por parâmetro\\
function bem_vindo(nome){
    console.log("Olá " + nome + ", sejá bem vindo.");
    console.log("Hoje veremos JavaScript®");
}
bem_vindo("Felipe Rocha");


//3º Fazendo uma divisão\\
function divisao(n1, n2){
    return n1 / n2;
}
divisao(10,2)

//4º Lista os alunos presentes\\
function alunos_presentes() {
    return ['Felipe', 'Moisés', 'André', 'Cassia', 'Nilce', 'Erick']
   }
console.log("Alunos presente na aula de hoje (28/05/2022)\n");
    for (var p = 0; p < 5; p++ ){
        console.log(alunos[p] + "\n");
    }


//5º Adicionando valor na array\\
function alunos_presentes() {
    return ['Felipe', 'Moisés', 'André', 'Cassia', 'Nilce', 'Erick']
   }
    var prof = alunos.push('Gustavo Militão');
    console.log("Todos presentes hoje (Alunos e Professor)\n");
    console.log("Prof. " + prof+ "\n");

    for (var p = 0; p < 5; p++ ){
        console.log(alunos[p] + "\n");
        
    }






    







