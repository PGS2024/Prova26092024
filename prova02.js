function adicionarNumero(vetor, numero) {
    const conjunto = new Set(vetor);
    if (!conjunto.has(numero)) {
      vetor.push(numero);
      console.log("Novo vetor:", vetor);
    } else {
      console.log("O número", numero, "já existe no vetor.");
    }
  }
  
  let meuVetor = [];
  adicionarNumero(meuVetor, 2);
  adicionarNumero(meuVetor, 3);
  adicionarNumero(meuVetor, 2); // Não será adicionado
  adicionarNumero(meuVetor, 6);