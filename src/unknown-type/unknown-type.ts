// vem antes do any ("um any mais seguro")
let x: unknown;
x = 100;
x = 'Lucas';
x = 900;
x = 20;
const y = 800;

if (typeof x === 'number') console.log(x + y);
