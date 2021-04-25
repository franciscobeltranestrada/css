function a(x){                              x.length = 4
    for(var i=0; i<x.length; i++){          i = 0 => 1 => 2 => 3 => 4  
      if(x[i] > 0){
           x[i] = "Coding";
      }
    }
    return x;
}
console.log(a([1,2,3,4]))

console = ["Coding", "Coding", "Coding", "Coding"]