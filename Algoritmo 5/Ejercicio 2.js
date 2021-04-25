//Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y 
//dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moverAdelante(arr){
    for (var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}
var result = moverAdelante([1,2,3]);
console.log(result);