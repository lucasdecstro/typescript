// laço infinito ou erro

export function criaErro(): never {
  throw new Error('Invalid');
}

criaErro();
