export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Lucas', 'Castro', 24, '123.123.123-00');
pessoa.cpf = '123.123.123-02';
console.log(pessoa.cpf);
