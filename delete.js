function deleteInvalids(array){
    if(!Array.isArray(array)){
        return ' invalid ! provide an array '
}
    let validProducts = []
    for( let element of array){
        if(typeof element === 'number' && !isNaN(element)){
            validProducts.push( element)  
        }
    }
   return validProducts 
}
let invalidArray = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
console.log(deleteInvalids(invalidArray))