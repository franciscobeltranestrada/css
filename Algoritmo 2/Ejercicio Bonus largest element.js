Bonus: LargestElement
//Crea una función que entregue el elemento más grande (largest element) en un array. 
//Por ejemplo largestElement([1,30,5,7]) debiera dar como resultado 30.

function largestelement(x) {
    var largest = x[0];
    for (var i = 1; i < x.length; i++) {
        if (x[i] > largest){
            largest = x[i];
        }
    }
    return largest;
}

y = largestelement ([1,30,5,7]);
console.log(y);