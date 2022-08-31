function sum(x, y){
    const result = x + y;
    return result;// o return encerra a execução da função, tudo que estiver abaixo de return não será executado.
}

// console.log(sum(2,2)); 
// const result = sum('Matheus ', 'Henrique');

// console.log(result);

// podemos deixar valores pré-definidos para os parâmetros da function, como exemplo:

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4);//o resultado será 5, pq o valor de y não foi inserido, então y continua com o valor de 1.
console.log(resultado);

const raiz = function(n) { 
    return n ** 0.5;
};//uma raiz quadrada com function

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// uma forma prática de fazer uma function com a 'arrow function':

const raizQ = n =>  n ** 0.5;// uma função normal, porém mais prática, com o arrow function, ou seja, não precisa das chaves e do parenteses entre o 'n'.

console.log(raizQ(144));