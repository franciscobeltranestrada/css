//Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.

function mayoresqueY (arr, y){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            counter++;
        }
    }
    console.log("Valores mayores que", y, ":", counter);
}
mayoresqueY([4,2,3,50,-30,122], 0);
