function sumAll(){
    let res = 0
    for(key in arguments){
       res += arguments[key]
    }
    return res
}
console.log(sumAll(1,4,8))