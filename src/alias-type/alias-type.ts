type Idade = number;

type Pessoa = {
  name: string;
  age: Idade;
  salary: number;
  preferredColor?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Preto';

type PreferredColor = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  age: 24,
  name: 'Lucas',
  salary: 100_000,
};

export function setPreferredColor(pessoa: Pessoa, cor: PreferredColor): Pessoa {
  return {
    ...pessoa,
    preferredColor: cor,
  };
}

console.log(setPreferredColor(pessoa, 'Azul'));
