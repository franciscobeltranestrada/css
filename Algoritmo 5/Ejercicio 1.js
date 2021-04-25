//Configura un array para que los valores negativos se transformen en 0. 
//Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

function resetNegativos(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
var result = resetNegativos([1,2,-1,-3]);
console.log(result);