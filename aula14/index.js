//MAIS SOBRE NÚMEROS:

// O padrão que o JS utiliza para a precisão dos números é o IEEE 754-2008

let num1 = 0.7;//number
let num2 = 0.1;//number

// IMPORTANTE: vale lembrar que a contagem do JS é um pouco imprecisa, como no exemplo abaixo:

// num1 += num2; //0.8
// num1 += num2; //0.9
// num1 += num2; //1.0

// num1 = parseFloat(num1.toFixed(2)); -> //dessa maneira podemos resolver a qustão do valor inteiro. Lembrando que essa é a forma mais rápida de corrigir o erro, mas existe outras formas mais adequadas para corrigi-lo.

//Outra forma seria não trabalhar esses números de forma flutuante, como por exemplo, fazer a seguinte conta:

/*  quando houver a imprecisão basta fazer, por exemplo: 

num1 = console.log(num.toFixed(2)); 

para ajustar o número de casas decimais.*/

num1 = ((num1 * 100) + (num2 * 100))/ 100;//0.8 de forma correta!
num1 = ((num1 * 100) + (num2 * 100))/ 100;//0.9 de forma correta!
num1 = ((num1 * 100) + (num2 * 100))/ 100;//1.0 de forma correta!

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// console.log(typeof num1);

/*podemos converter e exibir um número em string utilizando o 'toString'
mas ainda irá manter o número como um number, só irá altera-lo no console.*/

//console.log(num1.toString(2)); -->> // com esse método podemos transformar o valor de num1 em um valor binário!

// console.log(num1.toFixed(2)); -->> //com o toFixed podemos definir o número de casas decimais após a virgula

//console.log(Number.isInteger(num1)); -->> //com essa função "isInteger" podemos verificar se o número é inteiro ou não!
 
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp)); -->> //Essa função "isNaN" verifica se o valor é válido ou não
