function looping(x,y) {             i = 0
   for(var i=0; i<x; i++) {         j = 0
      for(var j=0; j<y; j++) {       
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);

console = 0,0,0,0,0,1,2,3,4