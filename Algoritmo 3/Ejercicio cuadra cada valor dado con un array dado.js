//Cuadra cada valor dado con un array dado, obteniendo el mismo array con valores cambiados

function squareValue(x){
    for (var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y); // debería mostrar [1,4,9]

y = squareValue([2,5,8]);
console.log(y); // debería mostrar [4,25,64]