interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  readonly idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Castro',
  enderecos: ['Av. Brasil'],
};

pessoa.idade = 31;
console.log(pessoa);
