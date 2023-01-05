// length

var nome = "Matheus";

console.log(nome.length);

var obj = "bola";

console.log(obj.length);

// indexOf

console.log(nome[2]);

var frase = "No mundo só exite um rei ";


console.log('resposta indexOF')
console.log(frase.indexOf("rei"));

// slice


/*Remove a palavra de acordo com sua numeração vinda do indexOf exemplo 
no indexof a palavra começa no 21 e termina no 24 colocando essa informação consifo remover a palavra  */ 


let rei = frase.slice(21,24);
console.log('resposta do slice')



console.log(rei);

// replace


/*faz a troca de uma palavra pro outra */ 

let trocareplace = frase.replace("rei","deus")

console.log(trocareplace);