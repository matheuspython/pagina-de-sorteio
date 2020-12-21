var pessoas = ['matheus', 'thiago', 'samuel', 'roger', 'vinicius', 'meliodas', 'gohan']

function sortear() {

    let numeroDePessoas = pessoas.length;

    let numeroSorteado = Math.floor(Math.random() * numeroDePessoas)

    document.getElementById('h1').innerHTML = pessoas[numeroSorteado]
}