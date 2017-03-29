function operaciones(){
  var operaciones;

  switch (op){
    case 'sumar':
      var operador1 = document.getElementById("pantalla").value;
      document.getElementById("pantalla").value = operador1 + "+";
      operaciones = document.getElementById("pantalla").value;
      document.getElementById("memoria").value = suma;
      break;
    case 'igual':
      operador = document.getElementById("pantalla").value;
      var memoriaop = document.getElementById("memoria").value;
    }
  switch(memoriaop){
    case 'suma':
      var operandos = operaciones.split("+");
      var resultado = ops.sumar(operandos[0], operandos[1]);
      document.getElementById("pantalla").value = resultado;
      break;
  }
}
