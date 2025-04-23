function calcularMedia(listaNumeros: number[]): number | string {
  // Verifica se é um array e se está vazio
  if (!Array.isArray(listaNumeros) || listaNumeros.length === 0) {
    return "Erro: array vazio. Impossível calcular média.";
  }

  // Valida cada elemento
  for (const elemento of listaNumeros) {
    if (typeof elemento !== 'number' || Number.isNaN(elemento)) {
      return `Erro: elemento não numérico encontrado no array (${JSON.stringify(elemento)}).`;
    }
  }

  // Calcula a média
  const soma: number = listaNumeros.reduce((acc, val) => acc + val, 0);
  const media: number = soma / listaNumeros.length;
  return media;
}

// Exemplos de uso
console.log(calcularMedia([10, 20, 30]));             // 20
console.log(calcularMedia([10, '20' as any, 30]));    // Erro: elemento não numérico
console.log(calcularMedia([]));                      // Erro: array vazio
console.log(calcularMedia([5.5, 4.5, 6.0]));          // 5.333...
console.log(calcularMedia([1, 2, null as any]));      // Erro: elemento não numérico
