type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 24,
  nome: 'Lucas',
  sobrenome: 'Castro',
};

console.log(pessoa);

// Module mode
export { pessoa };
