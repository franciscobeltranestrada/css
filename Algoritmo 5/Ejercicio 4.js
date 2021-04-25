//Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
//Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar 
//[4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetirValores(arr){
   
    for (var i = arr.length-1; i >= 0; i--){
        arr[2*i+1] = arr[i];
        arr[2*i] = arr[i];
    }
    console.log(arr);
}
repetirValores([4,"Ulysses",42,false]);