function a(x,y){
    z = []                      
    z.push(x);                  x = 2
    z.push(y);                  y = 2
    z.push(5);                  
    console.log(z);             x = 6
    return z;                   y = 8
}
b = a(2,2)
console.log(b);
console.log(a(6,8));

console = [2,2,5] [2,2,5] [6,8,5] [6,8,5]