//Crea un array con todos los enteros impares (odd integeres) entre 1 y 255 (inclusive)

function returnOddArray(){
    newArr = [];
    for (var i = 1; i <= 255; i+=2){
        newArr.push(i);
    }
    return newArr;
}
y = returnOddArray();
console.log(y); // debería mostrar [1,3,5,...,253,255]