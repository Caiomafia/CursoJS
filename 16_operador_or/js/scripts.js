var idade = 12;
var nome = "João";

if(nome == "João" || idade > 14) {
  console.log("Pode entrar na aula de esgrima");
} else {
  console.log("Não pode entrar");
}
/* Forma de ter mais de uma condição para executar */
if(nome == "Pedro" && (30 > 20 || 10 == 10)) {
  console.log("testando");
} else {
  console.log("não entrou");
}