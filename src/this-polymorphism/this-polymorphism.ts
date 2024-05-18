export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  multiply(n: number): this {
    this.numero *= n;
    return this;
  }

  divide(n: number): this {
    this.numero /= n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  exec(): number {
    return this.numero;
  }
}
