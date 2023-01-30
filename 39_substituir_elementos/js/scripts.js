/*Criar elemento*/ 

var el = document.createElement("h1");


el.classList = "testando-classe";

var texto = document.createTextNode("Ola mundo")

el.appendChild(texto);


//seleciona elemento a ser trocado 

var Titletext = document.querySelector("#title");

console.log(Titletext)

/*O pai do elemento*/

var pai = Titletext.parentNode;


/*Trocar */ 

pai.replaceChild(el,Titletext)
