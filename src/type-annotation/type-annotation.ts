/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let numbersArray: Array<number> = [1, 2, 3];
let numberArray: number[] = [1, 2, 3];
let stringArray: Array<string> = ['A', 'B'];

// Objects
let person: { name: string; age: number; adult?: boolean } = {
  age: 24,
  name: 'Lucas',
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(3, 5);

const sumTwo: (x: number, y: number) => number = (x, y) => x + y;
