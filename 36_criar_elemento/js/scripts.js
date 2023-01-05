// Criando 
var novoParagrafo = document.createElement("p");


//Criando text 

var text = document.createTextNode("Esse text vai dentro de p ");

novoParagrafo.appendChild(text)

console.log(novoParagrafo)

console.log("testando...")

var body = document.querySelector("body");

body.appendChild(novoParagrafo);


//colocar  o novop dentro de container 


var container = document.querySelector(' #container');
console.log(container);

var el = document.createElement("span");
var texto = document.createTextNode("Texto dentro de span ");
el.appendChild(texto);


container.appendChild(el)
//removendo 

container.removeChild(el)



container.appendChild()