//falando mais sobre strings
//strings são indexadas, ou seja, cada caracter possui um indece 0, 1, 2, 3, 4, ...

let umaString = 'Um texto eloquente'

//para manipular uma string existem diversas opção para manipular a string, como por exemplo:

// console.log(umaString.charAt(6));

/*

-> Formas de concatenação:

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + 'em um lindo dia.');
console.log(` ${umaString} em um lindo dia.`);
*/

//como identificar o indice de uma string a partir dela, como por exemplo:
//  console.log(umaString.indexOf('texto'));
// é possível verificar o tamanho de uma string com: console.log(umaString.legth);

/* é possível substituir uma palavra por outra utilizando o replace:
 console.log(umaString.replace('Um', 'Outro')); no caso será trocado 'um' por 'outro'.
 
 ou, utilizar expressões regulares para alterar as strings:

 console.log(umaString.replace(/Um/, 'Outro'));
 */

let outraString = "O Matheus é esforçado, continue estudando"
 /* Podemos fatiar strings com o "slice" */
 console.log(outraString.slice(2,9));

 //para dividir uma string, basta utilizar o split:
 console.log(outraString.split('a'));//aqui vai tirar o 'a' dos textos.