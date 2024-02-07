export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCPF(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do aluno:' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do cliente:' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Aluno('Lucas', 'Castro', 24, '123.123.123-00');
const aluno = new Aluno('Lucas', 'Castro', 24, '123.123.123-00');
const cliente = new Cliente('Lucas', 'Castro', 24, '123.123.123-00');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
