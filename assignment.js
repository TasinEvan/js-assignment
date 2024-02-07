function calculateMoney(ticketsale){

    if (typeof ticketsale !== 'number' || ticketsale < 0 ){
        return 'Invalid Number! Number of ticket must be positive integer'
    } 
    else { let perTicketPrice = 120
           let gatemanFee = 500
           let stafLunchFee = 50
           let numOfstaf = 8
    
    totalMoney = perTicketPrice * ticketsale
    totalCost  = gatemanFee + (stafLunchFee * numOfstaf)
    
        let moneyLeft = totalMoney - totalCost 
    
        return moneyLeft 
    }
    }



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


        

        function password(passwordString) {
    
            let key  = Object.keys(passwordString)
            
        
            if ( key.length < 3 ){
                return 'invalid'
            }
                let birthYearValue = passwordString.birthYear.toString()
             if ( birthYearValue.length !== 4){
                return 'invalid'
            }
            
            let sitenamestr = passwordString.siteName
            let sitenameSTR = sitenamestr[0].toUpperCase() + sitenamestr.slice(1)
             
          let karimPass = sitenameSTR.concat('#',passwordString.name,'@',passwordString.birthYear)
           return karimPass
             
          }
        
   
          

          function monthlySavings(arrayOfPayments,livingCost){

            if ( !Array.isArray(arrayOfPayments) || typeof livingCost !== 'number'){
                return 'invalid input'
            }
           let totalTaxFee = 0
           for ( let amount of arrayOfPayments){
            if( amount >= 3000){
               let taxFee = amount * (20 / 100)
               totalTaxFee = totalTaxFee + taxFee
               }
           }
           let totalPayment = 0
           for ( let perPayment of arrayOfPayments ){
            totalPayment = totalPayment + perPayment
           }
          let shahedSavings = totalPayment - ( totalTaxFee + livingCost)
          if ( shahedSavings >= 0 ){
            return shahedSavings
          }
          else {
            return 'Earn More'
          }
        }
        