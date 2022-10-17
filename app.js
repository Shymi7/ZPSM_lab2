var _ = require('lodash');


console.log(
    _.mean([1,2,3,4,5,6,7,8,9,10])
);


let min = arr =>{

    let a = arr[0];

    for(let i = 1; i < arr.length; i++)
        a = a > arr[i] ? arr[i] : a;
    
    return a;
}

console.log(
    min( [1,7,2,7,6,0,-1,3,6] )
);


let max = arr =>{

    let a = arr[0];

    for(let i = 1; i < arr.length; i++)
        a = a < arr[i] ? arr[i] : a;
    
    return a;
}

console.log(
    max( [1,7,2,7,6,123,6,4] )
);