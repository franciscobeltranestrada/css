//Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array). 
//Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removerRango(arr, start, end){
    var offset = end-start+1;
    for (var i = start; i <= offset; i++){
        arr[i] = arr[i+offset];
    }
    console.log(arr); 
    arr.length = arr.length - offset;
    return arr;
}
var result = removerRango([20,30,40,50,60,70],2,4);
console.log(result);
