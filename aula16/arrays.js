//ARRAYS(BÁSICO)

// Array é uma lista de dados, geralmente, são dados com um tipo de coisa mas o JS não impede de ter outros dados em um array. 
//Os array  tbm são indexados, porém são indexados por elemento, ou seja, o luiz tem indice zero, a maria tem indice 1 e por aí vai.
// É importante lembrar que ao modificar o array, ele sempre irá ser reorganizado, então para evitar problemas futuros é bom modificar, como por exemplo, inserir dados, é interessante inseri-los no final do array. 


const alunos = ['Luiz', 'Maria', 'Pedro', 'Matheus'];


// console.log(typeof alunos);
// console.log(alunos instanceof Array);//nesse caso irá verificar se alunos é uma instância de array, ou seja, se ele é um array ou não.

// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos.slice(0,3)); -->> //uma maneira de fatiar

// console.log(alunos.slice(0, -2)); -->> // nesse caso tbm irá fatiar, retirando os últimos dados, com o -2 irá retirar o Eduardo e a Luiza.


//alunos[4] = 'Rebeca'; -->> // Neste caso irá adicionar o nome Rebeca ao Array, pois o array irá verificar que o nome não está na lista então ele vai adiciona-lo.

// console.log(alunos[3]); -->> //para pegar o indice zero, no caso 'Matheus';

//alunos.unshift('João'); -->> //'unshift' Irá adicionar o dado no inicio do array

/*
const removido = alunos.shift();//O 'shift' é usado para excluir o primeiro dado de um array
console.log(removido);
console.log(alunos);
*/

// alunos.push('Otávio') -->> ;// com o 'push' podemos adicionar novos nomes no array. Mas adiciona o dado no fim do array.

//alunos.pop(); -->> // 'pop' irá apagar o último dado do array. Tbm é possível salvar o dado excluido e passar para uma const, como no exemplo abaixo:

/* 
    const removido = alunos.pop();
    console.log(removido); -->> // dado excluido
   
*/

// console.log(alunos.length); -->> //verifica o tamnho dio array.


// // tbm é possível deletar um dado do array utilizando o 'delete':
// delete alunos[1];
// console.log(alunos)
