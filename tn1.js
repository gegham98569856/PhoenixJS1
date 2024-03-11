//1.
 var num = 2; // LHS -> RHS

function multiply(x) { // LHS

    var result = x * 2; // LHS -> RHS 
    return result;  // RHS
}


var multipliedValue = multiply(num); // LHS -> RHS 

console.log(multipliedValue); // RHS

//2.
function calculate(index) { //LHS
    const data = [1, 2, 3, 4, 5]; // LHS -> RHS
    data[index] = data[index] * 2; // RHS -> RHS
    return data;       // RHS
}

let value = 10; // LHS -> RHS
let result = calculate(value % 4); // LHS -> RHS 
result[value % result.length] = calculate(result.length - 1)[1]; // RHS 

const obj = {     // LHS -> RHS
    key: 'initial', //LHS -> RHS
};

obj['key'] = result[0].toString(); // RHS 
obj.key += ' updated'; //RHS

function updateObject(o, k, v) { //LHS 
    o[k] = v;  //RHS
}

updateObject(obj, 'newKey', result[2]); //RHS

console.log(obj);  //RHS