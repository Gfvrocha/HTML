function numerosDe1a10() {
    console.log('Números pares e ímpares');

    for(var p = 1; p < 11; p++){
        if(p % 2 == 0){
            console.log(p+ " - O número "+p+ " é {TRUE} [PAR]");
        } else{
            console.log(p+ " - Número [ÍMPAR]");    
        }
    }
}
console.log(numerosDe1a10());
 

