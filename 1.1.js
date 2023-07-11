function mapDeclarative(array, func) {
    return array.map(func);
}

function mapImperative(array, func) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray;
}

console.log(mapDeclarative([1,2,3],(e)=>{
    return e*2
}))

console.log(mapImperative([1,2,3],(e)=>{
    return e*2
}))
