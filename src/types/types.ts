type TipoPessoa = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string;
};

export class Pessoa implements TipoPessoa, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Lucas', 'Castro');

console.log(pessoa.nomeCompleto());
