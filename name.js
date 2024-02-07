function checkName(safeName){
    
    if(typeof safeName !== 'string'){
        return 'invalid'
    }
    let safeLetter = 'A, y, i , e , o , u, w'
    let endLetter = safeName[safeName.length - 1].toLowerCase()
    
    for ( let char of safeLetter){
        if (endLetter === char || endLetter === char.toLowerCase()){
            return "Good Name"  
        }
       
    }
            return ' Bad name'
        
    }


console.log(checkName('RAFE'))
