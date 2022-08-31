/* 
    Aritméticos

    sinal de adição e concatenação: +
    sinal de subtração: -
    sinal de multiplicação: *
    sinal de divisão: /
    sinal de potenciação: **
    sinal de resto da divisão: %

 o Operador de Incremento ++ é uma atribuição onde significa o valor de algo mais um

*/

let contador = 1;
contador++;//2
contador++;//3
contador++;//4
++contador;//5
console.log(contador);

// Os contadores decremento não podem ser utilizados em uma constante
// o contador pode ser pós fixado quanto pré-fixado: 
//pós-fixado -> contador++
//pré-fixado -> ++contador 


// O Operador de Decremento é --
// let cont = 10;
// cont--;//9
// cont--;//8
// cont--;//7
// --cont;//6
// console.log(cont);

// Os contadores de decremento não podem ser utilizados em uma constante
// o contador pode ser pós fixado quanto pré-fixado: 
//pós-fixado -> contador--
//pré-fixado -> --contador 

//Como incrementar ou decrementar de mais de um valor basta fazer:
const passo = 2;// irá pular de 2 em 2 
let conta = 2;

// conta = conta + passo;
// console.log(conta);
// conta = conta + passo;
// console.log(conta);
// conta = conta + passo;
// console.log(conta);

// é possível fazer uma atribuição e já somar para facilitar o incremento
// conta += 3
// conta += 3
// conta += 3
// conta += 3
// console.log(conta);

// tbm é possível utilizar outros operadores aritméticos:

//multiplicação:
// conta *= 2;
// conta *= 2;
// console.log(conta);

//potenciação:
// conta **= 10
// console.log(conta);


// NaN = significa Not a Number, isso ocorre quando misturamos os tipos de valores, string + number, por exemplo.

/* 
COMO SOMAR VALORES DE TIIPOS DIFERENTES:

podemos somar um number com uma string utilizando o 'parseInt' para transformar esse número em um valor inteiro
*/

const num1 = 10;
const num2 = parseInt('5');
console.log(num1 + num2);

//para somarmos um número flutuante, podemos utilizar o 'parseFloat':
const num3 = 10;
const num4 = parseFloat('4.5');
console.log(num3 + num4);

// tbm temos o 'Number' que transdorma o valor em número e ele fica responsável em descobrir se o número é inteiro ou não.
const num5 = 11;
const num6 = Number('6.5');
console.log(num5 + num6);