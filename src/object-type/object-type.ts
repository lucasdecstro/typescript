const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'New key';
objetoA.chaveC = 'New key';
objetoA.chaveD = 'New key';

console.log(objetoA);
