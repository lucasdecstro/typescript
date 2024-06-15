// Encadeamento opcional e Operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documendo: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  //   data: new Date(),
};

// Coalescência nula
console.log(documendo.data?.toDateString() ?? 'Sem data');
console.log(undefined ?? 'Sem data');
console.log(false ?? 'Sem data');
