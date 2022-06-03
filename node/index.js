function numero(p) {
        if(p % 2 == 0){
            console.log(p+ " - O número "+p+ " é {TRUE} [PAR]");
        } else{
            console.log(p+ " - Número [ÍMPAR]");    
        }
}
console.log(numero(50));
 
function numerosDe1a10() {
    console.log('Números pares e ímpares');

    for(var p = 1; p <= 10; p++){
        if(p % 2 == 0){
            console.log(p+ " - O número "+p+ " é {TRUE} [PAR]");
        } else{
            console.log(p+ " - Número [ÍMPAR]");    
        }
    }
}
console.log(numerosDe1a10());

function getObj() {
    return {
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
 } 
    

console.log(getObj());

function getNomeFilhosMaisUmAnoIdade() {
  return getObj().filhos.filter((filhos) => {return filhos.idade > 1});
}
console.log(getNomeFilhosMaisUmAnoIdade());

 

