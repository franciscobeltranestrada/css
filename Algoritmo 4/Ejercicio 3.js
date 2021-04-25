//Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos 
//se reemplacen por el texto (string) ‘Dojo’. 
//Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativos(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var result = reemplazarNegativos([1,2,-3,-5,5]);
console.log(result);
