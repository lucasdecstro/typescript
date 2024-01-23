// void não retorna nada

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Castro',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Lucas', 'Castro');
pessoa.exibirNome();

export { pessoa };
