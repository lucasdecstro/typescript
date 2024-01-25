// valores como tipos
let x = 10; // eslint-disable-line
x = 0b1001;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  name: 'Lucas' as const,
  lastName: 'Castro',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
