// strings and numbers

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// "segurança de tipo"

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
