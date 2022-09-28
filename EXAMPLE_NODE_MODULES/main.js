const { sum, subs } = require("./operations");

let Num1 = 20;
let Num2 = 10.5;
const Operacion = sum(Num1, Num2);

Num1 = subs(Operacion, Num2);
Num2 = subs(Operacion, Num1);
