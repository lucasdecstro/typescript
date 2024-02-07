export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '123.123.123-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Lucas', 'Castro', 24, '123.123.123-00');
const pessoa2 = Pessoa.criaPessoa('Israel', 'Castro');
console.log(pessoa2);
console.log(pessoa1);
pessoa1.metodoNormal();
