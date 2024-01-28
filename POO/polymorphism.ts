// Algo que é polimorfo tem a habilidade de assumir diferentes formas.

import { Animal, Cat, Dog } from './inheritance';

class AnimalSounds {
  public playSound(animal: Animal): void {
    animal.makeSound();
  }
}

const dog = new Dog('Fido');
const cat = new Cat('Garfield');
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog);
animalSounds.playSound(cat);
