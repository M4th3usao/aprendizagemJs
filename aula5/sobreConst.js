// variáveis em JS
// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos - Case-sensitive
// Utilizamos camelCase, ou seja, as próximas palavras compostas se iniciam com letra maiúscula. -> nomeCliente...
// Não podemos modificar ovalor de uma constante! Ela precisa ser criada e inicializada ao mesmo tempo
// NÃO UTILIZE VAR, UTILIZE CONST!!!

//  A partir do momento que atribuirmos um valor a uma constante, ou variável o motor do Js já irá salvar o tipo desse dado, como por exemplo, um number ou string.
// para descobrirmos o tipo de um dado podemos utilizar o atributo "typeof" dentro do console log: console.log( typeof primeiroNumero ), o resultado dará number no terminal.

const nome = 'Matheus';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);