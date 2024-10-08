let numeros = [];
function adicionarNumero() {
    let input = prompt("Digite um número:");
    let numero = parseInt(input);
    if (numeros.includes(numero)) {
        alert("O número " + numero + " já foi adicionado anteriormente!");
    } else {
        numeros.push(numero);
        alert("Número " + numero + " adicionado com sucesso!");
    }
    alert("Vetor atual: " + numeros.join(", "));
    adicionarNumero();
}
adicionarNumero();