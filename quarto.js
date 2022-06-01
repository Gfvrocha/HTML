function obterPokemons() {
    var xhr = new XMLHttpRequest();
    var nomePokemon = document.getElementById(`nomePokemon`).value;
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
    xhr.onload = function () {
        document.getElementById(`resultado`).innerHTML=`<img src="${JSON.parse(xhr.response).sprites.front_default}">`
        
    };
    xhr.send();

}

