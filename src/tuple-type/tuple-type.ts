// Exclusivo do TypeScript

// tuple
const dadosCliente1: readonly [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Castro'];

dadosCliente2[0] = 69;
console.log(dadosCliente1);
console.log(dadosCliente2);

// readonly array
const array1: readonly string[] = ['Lucas', 'Castro'];
const array2: ReadonlyArray<string> = ['Lucas', 'Castro'];

console.log(array1);
console.log(array2);
