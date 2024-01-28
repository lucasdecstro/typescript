// Vai passar características de um objeto para outro.

export abstract class Animal {
  constructor(public name: string) {}
  abstract makeSound(): void;
}

export class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} faz au au`);
  }
}

export class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} faz miau`);
  }
}
