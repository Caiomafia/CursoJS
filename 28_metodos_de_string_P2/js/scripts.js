// toLowerCase e toUpperCase
/*
Deixa a frase em caixa alta ou normal 


*/ 

var frase = "Esta é a frase que vamos manipular";

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());


// trim
/*

forma de normalizar o espaço incorreto em forms 





*/
var nome = "        Caio     ";

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split
/*
forma de seperar um array , no exemplo abaixo
*/
console.log(" exec split")


console.log(frase.split(" "));

let techs = "PHP , js ,react , CSS ";

console.log(techs.split(" , "))

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));
