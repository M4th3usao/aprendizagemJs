//o execício é passar o valor de varB pro varA e o valor de varA pra varC, e varC pra varB.

let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

const temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC)

//tbm é possível fazer o seguinte desafio fazendo assim:

let varM = 'M'; // O
let varN = 'N'; // M
let varO = 'O'; // N

[varM, varN, varO] = [varO, varM, varN]

console.log(varM, varN, varO);
