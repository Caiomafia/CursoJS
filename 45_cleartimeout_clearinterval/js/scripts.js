// clearTimeout na prática

let x = 0 ;

var timeout =setTimeout(function() { console.log("executo....")  } , 1500);


x = 5 ;

if(x > 0){
  clearTimeout(timeout)
  console.log("timeout foi encerrada")
}


//cleatinterval 


var interval = setInterval(function(){console.log("Testando o interval....")} , 1500)

setTimeout(function(){ 
  console.log("não precisamos mais dessa variavel aqui ")
  clearInterval(interval)} , 10000)