export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Ligado');
  }

  acelerar(): void {
    console.log('Acelerando');
  }

  parar(): void {
    console.log('Parado');
  }

  desligar(): void {
    console.log('Desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
