

/*Um exemplo de callbak  */
function exibir(x){console.log(x)}


function soma(a,b,cb){
  var op = a + b ;
cb(op);
}


function multiplicar(a,b,cb){
  var op = a * b ;
  cb(op);
}

soma(9,6,exibir)
multiplicar(4,9,exibir)