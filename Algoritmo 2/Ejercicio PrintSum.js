function printSum(x) {
  var sum = 0;
  //your code here
  return sum
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640


function printSum(x) {
    var sum = 0;
    for (var z= 0; z<= x; z++){
        sum = sum + z;
        console.log ("z:", z, "sum:", sum)
    }
    return sum;
}
y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
console.log(y) // // debería imprimir 32640