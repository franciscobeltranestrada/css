
function printUpTo(x) {
    // your code here
  }
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir false
  console.log(y); // debería imprimir false


function printUpTo(x) {
    if (x < 50) {console.log ("número negativo");
        return false;
    }else{
        for (var z = 0; z <= x; z++ ){
            console.log (z);
        }
    }
}
printUpTo(100); // debería imprimir todos los enteros de 1 to 100
y = printUpTo(-10); // debería imprimir false
console.log(y); // debería imprimir false
