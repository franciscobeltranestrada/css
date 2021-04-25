function a(x){
    for(var i=0; i<x.length; i++){          x.length = 4
      if(x[i] > 5){                         i = 0 => 1 => 2 => 3 => 4 
           x[i] = "Coding";
      }
      else if(x[i] < 0){
           x[i] = "Dojo";
      }
    }
    return x;
}
console.log(a([5,7,-1,4]))


console = [5,"Coding", "Dojo", 4]