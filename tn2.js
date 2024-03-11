function fib(n){
    
    return n <= 1 || Math.floor(n) !== n ? n : fib(n-1) + fib(n-2)
}
console.log(fib(9));

function decorator(f){
    let obj = new Map()
    return function(arg){
        if(obj.has(arg)) return obj.get(arg);
        let res = f(arg)
        obj.set(arg,res)
        return obj
    } 
}
let decFib = decorator(fib)
console.log(decFib(41))