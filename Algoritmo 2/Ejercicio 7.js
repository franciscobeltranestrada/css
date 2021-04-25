function looping(x,y) {             i = 0
   for(var i=0; i<x; i++) {         j = 0
      for(var j=0; j<x; j++) {       
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log (z);

console = 0,0,0,0,1,2,0,2,4