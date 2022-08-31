/*
Primitivos - string, number, boolean, undefined, null(bigint, symbol), são valores imutáveis
*/

let a = 'A';
let b = a;//Cópia
console.log(a, b);
//quando falarmos que uma coisa está em outra, ou está é igual, significa que ocorreu uma cópia, isso serve para valores primitivos.

a = 'Outra coisa';
console.log(a, b);

//Referência (mutável) - array, object, function
let d = [1, 2, 3 ]
let e = [...a];//esses três pontinho faz com que o valor de D seja copiado para E, esses tr~es pontinhos se chama Spread(Spread syntax)
let f = e;//apontam pro mesmo valor alocado na memória
console.log(d, e);

d.push(4);
console.log(d);

e.pop();
console.log(e);

d.pop();
console.log(f);

const m = {
    nome: 'Jheny',
    sobrenome: 'Campos'
};
const n = {...m};//o spread copia o valor de m

m.nome = 'Matheus'
console.log(n)