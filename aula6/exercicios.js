/*
Matheus Henrique tem 20 anos, pesa 90Kg te 1.87 de altura e seu IMC é de 25.7
*/



const nome = 'Matheus';
const sobrenome = 'Henrique';
const idade =  20;
const peso = 90;
const alturaEmM = 1.87;
let anoAtual = 2022;

let imc = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = anoAtual - idade;

// template strings, é unir todos os tipos no console.log, por exemplo, e envolve-los entre crases e para chamar o let ou a const basta coloca-los entre ${COLOCAR AQUI}
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} Kg`);
console.log(`Sua data de nascimento, é: ${anoNascimento}`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);


