//Configura un array para que el resultado sean los valores en el orden contrario. 
//Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function returnReverso(arr){
    for (var i = 0; i < arr.length/2; i++){
         var temp = arr[i];
         arr[i] = arr[arr.length-i-1];
         arr[arr.length-i-1] = temp;
     }
     return arr;
 }
 var result = returnReverso([1,2,3]);
 console.log(result);